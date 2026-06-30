const DEFAULT_DOC_ROOT = "/";

export class ContentLoaderError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = "ContentLoaderError";
    this.details = details;
  }
}

export function createContentLoader(options = {}) {
  const docRoot = normalizeRoot(options.docRoot || DEFAULT_DOC_ROOT);
  const fetcher = options.fetcher || globalThis.fetch;

  if (typeof fetcher !== "function") {
    throw new ContentLoaderError("Content Loader requires a fetch-compatible function.");
  }

  async function readMarkdown(path) {
    const url = resolveDocPath(docRoot, path);
    const response = await fetcher(url);

    if (!response || !response.ok) {
      throw new ContentLoaderError("Failed to read Markdown document.", {
        path,
        url,
        status: response ? response.status : undefined,
      });
    }

    return response.text();
  }

  async function readDocument(path) {
    const markdown = await readMarkdown(path);
    return parseMarkdownDocument(markdown);
  }

  return {
    docRoot,
    readMarkdown,
    readDocument,
  };
}

export function parseMarkdownDocument(markdown = "") {
  const parsed = parseMarkdownWithFrontMatter(markdown);
  const sections = {};
  let currentHeading = null;

  parsed.body.split(/\r?\n/).forEach(line => {
    const match = line.match(/^#\s+(.+?)\s*$/);

    if (match) {
      currentHeading = match[1];
      sections[currentHeading] = [];
      return;
    }

    if (currentHeading) {
      sections[currentHeading].push(line);
    }
  });

  return Object.fromEntries(
    Object.entries(sections).map(([heading, lines]) => [heading, lines.join("\n").trim()])
  );
}

export function parseMarkdownWithFrontMatter(markdown = "") {
  const source = String(markdown);

  if (!source.startsWith("---")) {
    return {
      frontMatter: {},
      body: source,
    };
  }

  const lines = source.split(/\r?\n/);
  const endIndex = lines.findIndex((line, index) => index > 0 && line.trim() === "---");

  if (endIndex === -1) {
    return {
      frontMatter: {},
      body: source,
    };
  }

  const frontMatter = Object.fromEntries(
    lines
      .slice(1, endIndex)
      .map(line => line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/))
      .filter(Boolean)
      .map(match => [match[1], match[2] || ""])
  );

  return {
    frontMatter,
    body: lines.slice(endIndex + 1).join("\n"),
  };
}

export function pickFields(documentSections, fieldMap) {
  return Object.fromEntries(
    Object.entries(fieldMap).map(([fieldName, heading]) => [
      fieldName,
      documentSections[heading] || "",
    ])
  );
}

function normalizeRoot(root) {
  return `/${String(root).replace(/^\/+|\/+$/g, "")}`;
}

function resolveDocPath(root, path) {
  const cleanPath = String(path).replace(/^\/+/, "");
  return root === "/" ? `/${cleanPath}` : `${root}/${cleanPath}`;
}
