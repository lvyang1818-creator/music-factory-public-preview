import { isEmptyArtistObject } from "./artist-parser.js";

export const REALM_RENDER_FIELDS = Object.freeze({
  identity: "Identity.md",
  music: "Music.md",
  visual: "Visual.md",
  albums: "Albums.md",
  works: "Works.md",
  roadmap: "Roadmap.md",
});

export function createRealmRenderer(root = document) {
  function renderArtistRealm(artistObject) {
    const empty = isEmptyArtistObject(artistObject);
    const documents = artistObject.documents;
    const identity = documents.identity;

    renderText(root, "[data-knowledge-field='hero.name']", getHeading(identity.body, 1) || artistObject.fields.realm);
    renderText(root, "[data-knowledge-field='hero.subtitle']", getHeading(identity.body, 2) || artistObject.fields.name);
    renderText(root, "[data-knowledge-field='hero.quote']", getFirstQuote(identity.body));
    renderText(root, "[data-knowledge-field='guardian.name']", artistObject.fields.name);
    renderText(root, "[data-knowledge-field='guardian.title']", artistObject.fields.realm);
    renderText(root, "[data-knowledge-label='hero']", getHeading(identity.body, 1));
    renderText(root, "[data-knowledge-label='world']", getHeading(documents.visual.body, 1));
    renderText(root, "[data-knowledge-label='guardian']", artistObject.fields.name);
    renderText(root, "[data-knowledge-label='music']", getHeading(documents.music.body, 1));
    renderText(root, "[data-knowledge-label='albums']", getHeading(documents.albums.body, 1));
    renderText(root, "[data-knowledge-label='works']", getHeading(documents.works.body, 1));
    renderText(root, "[data-knowledge-label='roadmap']", getHeading(documents.roadmap.body, 1));
    renderText(root, "[data-knowledge-nav='world']", getHeading(documents.visual.body, 1));
    renderText(root, "[data-knowledge-nav='guardian']", artistObject.fields.name);
    renderText(root, "[data-knowledge-nav='music']", getHeading(documents.music.body, 1));
    renderText(root, "[data-knowledge-nav='works']", getHeading(documents.works.body, 1));
    renderMarkdown(root, "[data-knowledge-document='identity']", identity.body, { skipFirstHeading: true });
    renderMarkdown(root, "[data-knowledge-document='visual']", documents.visual.body);
    renderMarkdown(root, "[data-knowledge-document='albums']", documents.albums.body);
    renderCollection(root, "[data-knowledge-list='music']", documents.music.body);
    renderCollection(root, "[data-knowledge-list='works']", documents.works.body);
    renderMarkdown(root, "[data-knowledge-document='roadmap']", documents.roadmap.body);

    if (root.title !== undefined) {
      root.title = artistObject.fields.realm || artistObject.fields.name || "Music Factory Realm";
    }

    root.documentElement?.toggleAttribute("data-knowledge-empty", empty);

    return {
      status: empty ? "empty" : "rendered",
      artistKey: artistObject.key,
      empty,
    };
  }

  return {
    renderArtistRealm,
  };
}

export function createEmptyState(fieldName = "") {
  return {
    status: "empty",
    field: fieldName,
    value: "",
  };
}

function renderText(root, selector, value) {
  const elements = Array.from(root.querySelectorAll(selector));

  if (!elements.length) {
    return createEmptyState(selector);
  }

  const text = String(value || "").trim();
  elements.forEach(element => {
    element.textContent = text;
    element.toggleAttribute("data-empty", !element.textContent);
  });

  return text ? { status: "rendered", value: text } : createEmptyState(selector);
}

function renderMarkdown(root, selector, markdown, options = {}) {
  const element = root.querySelector(selector);

  if (!element) {
    return createEmptyState(selector);
  }

  const nodes = markdownToNodes(root, markdown, options);
  element.replaceChildren(...nodes);
  element.toggleAttribute("data-empty", nodes.length === 0);

  return nodes.length ? { status: "rendered", value: markdown } : createEmptyState(selector);
}

function renderCollection(root, selector, markdown) {
  const element = root.querySelector(selector);

  if (!element) {
    return createEmptyState(selector);
  }

  const items = parseMarkdownList(markdown);
  const itemType = element.getAttribute("data-knowledge-list");
  element.replaceChildren(...items.map(item => createCollectionItem(root, item, itemType)));
  element.toggleAttribute("data-empty", items.length === 0);

  return items.length ? { status: "rendered", value: items } : createEmptyState(selector);
}

function parseMarkdownList(markdown = "") {
  return String(markdown)
    .split(/\r?\n/)
    .filter(line => /^[-*]\s+/.test(line))
    .map(line => line.replace(/^[-*]\s+/, "").trim())
    .filter(Boolean);
}

function createCollectionItem(root, text, itemType) {
  const documentRef = root.ownerDocument || root;

  if (itemType === "music") {
    const card = documentRef.createElement("button");
    card.className = "work-card";
    card.type = "button";
    card.setAttribute("data-knowledge-item", "");

    const cover = documentRef.createElement("div");
    cover.className = "cover-frame";

    const play = documentRef.createElement("span");
    play.className = "play-button";
    play.setAttribute("aria-hidden", "true");
    cover.append(play);

    const title = documentRef.createElement("div");
    title.className = "work-title";
    title.textContent = text;

    const meta = documentRef.createElement("div");
    meta.className = "work-meta";

    card.append(cover, title, meta);
    return card;
  }

  if (itemType === "works") {
    const row = documentRef.createElement("div");
    row.className = "archive-row";
    row.setAttribute("data-knowledge-item", "");

    const textWrap = documentRef.createElement("div");
    const title = documentRef.createElement("strong");
    title.textContent = text;
    const meta = documentRef.createElement("span");
    textWrap.append(title, meta);

    const action = documentRef.createElement("span");
    row.append(textWrap, action);
    return row;
  }

  const item = documentRef.createElement("div");
  item.textContent = text;
  item.setAttribute("data-knowledge-item", "");
  return item;
}

function markdownToNodes(root, markdown = "", options = {}) {
  const documentRef = root.ownerDocument || root;
  const nodes = [];
  let list = null;
  let skippedFirstHeading = false;

  String(markdown).split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();

    if (!trimmed) {
      list = null;
      return;
    }

    const heading = trimmed.match(/^(#{1,2})\s+(.+)$/);
    if (heading) {
      list = null;

      if (options.skipFirstHeading && !skippedFirstHeading) {
        skippedFirstHeading = true;
        return;
      }

      const element = documentRef.createElement(heading[1].length === 1 ? "h2" : "h3");
      element.textContent = heading[2];
      nodes.push(element);
      return;
    }

    if (/^>\s+/.test(trimmed)) {
      list = null;
      const element = documentRef.createElement("blockquote");
      element.textContent = trimmed.replace(/^>\s+/, "");
      nodes.push(element);
      return;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      if (!list) {
        list = documentRef.createElement("ul");
        nodes.push(list);
      }

      const item = documentRef.createElement("li");
      item.textContent = trimmed.replace(/^[-*]\s+/, "");
      list.append(item);
      return;
    }

    list = null;
    const paragraph = documentRef.createElement("p");
    paragraph.textContent = trimmed;
    nodes.push(paragraph);
  });

  return nodes;
}

function getHeading(markdown = "", level = 1) {
  const prefix = "#".repeat(level);
  const match = String(markdown)
    .split(/\r?\n/)
    .map(line => line.match(new RegExp(`^${prefix}\\\\s+(.+)$`)))
    .find(Boolean);

  return match ? match[1].trim() : "";
}

function getFirstQuote(markdown = "") {
  const match = String(markdown)
    .split(/\r?\n/)
    .map(line => line.match(/^>\s+(.+)$/))
    .find(Boolean);

  return match ? match[1].trim() : "";
}
