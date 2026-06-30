import { createContentLoader } from "./content-loader.js";
import { parseArtistObject } from "./artist-parser.js";

export const ARTIST_DOCUMENTS = Object.freeze({
  guanwujie: {
    identity: "BrandArtists/观无界/Identity.md",
    music: "BrandArtists/观无界/Music.md",
    visual: "BrandArtists/观无界/Visual.md",
    prompt: "BrandArtists/观无界/Prompt.md",
    albums: "BrandArtists/观无界/Albums.md",
    works: "BrandArtists/观无界/Works.md",
    narrative: "BrandArtists/观无界/Narrative.md",
    roadmap: "BrandArtists/观无界/Roadmap.md",
  },
  shiliyin: {
    identity: "BrandArtists/十里音/Identity.md",
    music: "BrandArtists/十里音/Music.md",
    visual: "BrandArtists/十里音/Visual.md",
    prompt: "BrandArtists/十里音/Prompt.md",
    albums: "BrandArtists/十里音/Albums.md",
    works: "BrandArtists/十里音/Works.md",
    narrative: "BrandArtists/十里音/Narrative.md",
    roadmap: "BrandArtists/十里音/Roadmap.md",
  },
  mengmeng: {
    identity: "BrandArtists/梦梦/Identity.md",
    music: "BrandArtists/梦梦/Music.md",
    visual: "BrandArtists/梦梦/Visual.md",
    prompt: "BrandArtists/梦梦/Prompt.md",
    albums: "BrandArtists/梦梦/Albums.md",
    works: "BrandArtists/梦梦/Works.md",
    narrative: "BrandArtists/梦梦/Narrative.md",
    roadmap: "BrandArtists/梦梦/Roadmap.md",
  },
});

export const ARTIST_FIELDS = Object.freeze({
  name: "Identity",
  realm: "Realm",
  positioning: "Positioning",
  identity: "Identity",
  discography: "Discography",
  visual: "Visual Language",
  voiceLanguage: "Voice Language",
  works: "Works",
  archiveEntry: "Archive Entry",
  prompt: "Prompt Rules",
  forbidden: "Forbidden",
});

export function createArtistDataLayer(options = {}) {
  const loader = options.loader || createContentLoader(options);

  async function getArtist(key) {
    const documentPaths = ARTIST_DOCUMENTS[key];

    if (!documentPaths) {
      return createEmptyArtistRecord(key);
    }

    const documents = await readArtistDocuments(loader, documentPaths);
    const artistObject = parseArtistObject({ key, documentPaths, documents });

    return {
      key,
      documentPaths,
      artistObject,
      ...createEmptyArtistFields(),
      name: artistObject.fields.name,
      realm: artistObject.fields.realm,
      positioning: artistObject.fields.positioning,
      identity: artistObject.fields.identity,
      discography: artistObject.fields.discography,
      visual: artistObject.fields.visual,
      voiceLanguage: artistObject.fields.music,
      works: artistObject.fields.works,
      archiveEntry: artistObject.fields.narrative,
      prompt: artistObject.fields.prompt,
      forbidden: artistObject.fields.forbidden,
    };
  }

  return {
    fields: ARTIST_FIELDS,
    documents: ARTIST_DOCUMENTS,
    getArtist,
  };
}

export function createEmptyArtistRecord(key = "") {
  return {
    key,
    documentPaths: {},
    artistObject: parseArtistObject({ key }),
    ...createEmptyArtistFields(),
  };
}

function createEmptyArtistFields() {
  return Object.fromEntries(Object.keys(ARTIST_FIELDS).map(field => [field, ""]));
}

async function readArtistDocuments(loader, documentPaths) {
  const entries = await Promise.all(
    Object.entries(documentPaths).map(async ([name, path]) => [name, await loader.readMarkdown(path)])
  );

  return Object.fromEntries(entries);
}
