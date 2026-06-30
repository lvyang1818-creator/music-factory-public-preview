import { parseMarkdownWithFrontMatter } from "./content-loader.js";

export const ARTIST_MARKDOWN_FILES = Object.freeze([
  "identity",
  "music",
  "visual",
  "prompt",
  "albums",
  "works",
  "narrative",
  "roadmap",
]);

export const ARTIST_OBJECT_FIELDS = Object.freeze({
  id: "",
  name: "",
  realm: "",
  status: "",
  updated: "",
  positioning: "",
  identity: "",
  discography: "",
  music: "",
  visual: "",
  prompt: "",
  forbidden: "",
  albums: "",
  works: "",
  narrative: "",
  roadmap: "",
});

export function parseArtistObject({ key = "", documentPaths = {}, documents = {} } = {}) {
  const parsedDocuments = Object.fromEntries(
    ARTIST_MARKDOWN_FILES.map(fileKey => [
      fileKey,
      parseMarkdownWithFrontMatter(documents[fileKey] || ""),
    ])
  );

  const mergedFrontMatter = mergeFrontMatter(parsedDocuments);

  return {
    key,
    documentPaths,
    frontMatter: mergedFrontMatter,
    documents: parsedDocuments,
    fields: {
      ...ARTIST_OBJECT_FIELDS,
      id: mergedFrontMatter.id || "",
      name: mergedFrontMatter.name || "",
      realm: mergedFrontMatter.realm || "",
      status: mergedFrontMatter.status || "",
      updated: mergedFrontMatter.updated || "",
      identity: parsedDocuments.identity.body.trim(),
      positioning: parsedDocuments.identity.frontMatter.positioning || "",
      discography: parsedDocuments.works.body.trim(),
      music: parsedDocuments.music.body.trim(),
      visual: parsedDocuments.visual.body.trim(),
      prompt: parsedDocuments.prompt.body.trim(),
      albums: parsedDocuments.albums.body.trim(),
      works: parsedDocuments.works.body.trim(),
      narrative: parsedDocuments.narrative.body.trim(),
      roadmap: parsedDocuments.roadmap.body.trim(),
    },
  };
}

export function isEmptyArtistObject(artistObject) {
  return Object.values(artistObject.fields).every(value => String(value).trim() === "");
}

function mergeFrontMatter(parsedDocuments) {
  const secondaryFrontMatter = ARTIST_MARKDOWN_FILES
    .filter(fileKey => fileKey !== "identity")
    .map(fileKey => parsedDocuments[fileKey].frontMatter);

  return Object.assign({}, ...secondaryFrontMatter, parsedDocuments.identity.frontMatter);
}
