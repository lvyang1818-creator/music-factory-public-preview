import { createContentLoader } from "./content-loader.js";
import { ARTIST_DOCUMENTS, createArtistDataLayer } from "./artist-data-layer.js";

export const REALM_DOCUMENTS = Object.freeze({
  spirit: {
    page: "BrandWebsite/SpiritRealm.md",
    artist: ARTIST_DOCUMENTS.guanwujie,
  },
  future: {
    page: "BrandWebsite/FutureRealm.md",
    artist: ARTIST_DOCUMENTS.shiliyin,
  },
  nature: {
    page: "BrandWebsite/NatureRealm.md",
    artist: ARTIST_DOCUMENTS.mengmeng,
  },
});

export const REALM_FIELDS = Object.freeze({
  realmName: "Realm",
  theme: "Positioning",
  quote: "One Sentence",
  guardian: "Identity",
  works: "Discography",
  archive: "Discography",
  nextRealm: "Future Roadmap",
});

export function createRealmDataLayer(options = {}) {
  const loader = options.loader || createContentLoader(options);
  const artists = options.artists || createArtistDataLayer({ loader });

  async function getRealm(key) {
    const documentPaths = REALM_DOCUMENTS[key];

    if (!documentPaths) {
      return createEmptyRealmRecord(key);
    }

    const page = await loader.readMarkdown(documentPaths.page);
    const artistKey = resolveArtistKey(key);
    const artist = await artists.getArtist(artistKey);

    return {
      key,
      documentPaths,
      artistObject: artist.artistObject,
      ...createEmptyRealmFields(),
      realmName: artist.realm || page,
      theme: artist.positioning || page,
      quote: artist.positioning || page,
      guardian: artist.identity,
      works: artist.discography,
      archive: artist.discography,
      nextRealm: artist.artistObject.fields.roadmap,
    };
  }

  return {
    fields: REALM_FIELDS,
    documents: REALM_DOCUMENTS,
    getRealm,
  };
}

export function createEmptyRealmRecord(key = "") {
  return {
    key,
    documentPaths: {},
    artistObject: null,
    ...createEmptyRealmFields(),
  };
}

function createEmptyRealmFields() {
  return Object.fromEntries(Object.keys(REALM_FIELDS).map(field => [field, ""]));
}

function resolveArtistKey(realmKey) {
  return {
    spirit: "guanwujie",
    future: "shiliyin",
    nature: "mengmeng",
  }[realmKey] || "";
}
