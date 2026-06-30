window.MUSIC_FACTORY_CATALOG = {
  updated: "2026-06-29",
  sources: [
    "knowledge/website/albums-works-system.md",
    "knowledge/artists/guanwujie/music-language.md",
    "knowledge/artists/guanwujie/archive.md",
    "knowledge/artists/shiliyin/music-language.md",
    "knowledge/artists/shiliyin/archive.md",
    "knowledge/artists/mengmeng/music-language.md",
    "knowledge/artists/mengmeng/archive.md",
    "BrandArtists/观无界/Works.md",
    "BrandArtists/观无界/Narrative.md",
    "BrandArtists/十里音/Narrative.md",
    "BrandArtists/梦梦/Narrative.md",
    "BrandWebsite/SoundCivilizationMap.md",
    "BrandArchive/WorksTimeline.md",
    "knowledge/website/content-alignment-layer.md",
    "knowledge/website/data-flow-validation.md"
  ],
  artists: [
    {
      id: "guanwujie",
      name: "观无界",
      realm: "Spirit Realm",
      href: "../artists/guanwujie.html",
      worksHref: "../works/index.html?artist=guanwujie"
    },
    {
      id: "shiliyin",
      name: "十里音",
      realm: "Future Realm",
      href: "../artists/shiliyin.html",
      worksHref: "../works/index.html?artist=shiliyin"
    },
    {
      id: "mengmeng",
      name: "梦梦",
      realm: "Nature Realm",
      href: "../artists/mengmeng.html",
      worksHref: "../works/index.html?artist=mengmeng"
    }
  ],
  albums: [
    {
      id: "pure-land",
      title: "净土",
      artistId: "guanwujie",
      artist: "观无界",
      realm: "Spirit Realm",
      status: "Knowledge placeholder album",
      cover: "",
      coverStatus: "Cover pending",
      story: "A Spirit Realm album node for Pure Land, chanting, silence, return, and golden restraint. It binds the approved Spirit Realm placeholder works into one archive-ready album system.",
      source: "knowledge/artists/guanwujie/music-language.md; BrandArtists/观无界/Works.md",
      workIds: ["wuliangguang", "jile", "sishibayuan", "namo-amitabha"]
    },
    {
      id: "wuxiang",
      title: "无相",
      artistId: "shiliyin",
      artist: "十里音",
      realm: "Future Realm",
      status: "Knowledge confirmed album",
      cover: "../assets/album-wuxiang.jpg",
      coverStatus: "Available",
      story: "A Future Realm album system where Eastern philosophy returns through contemporary pop, memory, mirror, release, and nameless origin.",
      source: "knowledge/artists/shiliyin/music-language.md; knowledge/artists/shiliyin/archive.md",
      workIds: ["wuxiang", "yuan", "jing", "san", "wuming"]
    },
    {
      id: "nature-placeholder",
      title: "Nature Realm Placeholder Album",
      artistId: "mengmeng",
      artist: "梦梦",
      realm: "Nature Realm",
      status: "Placeholder only",
      cover: "",
      coverStatus: "Official cover pending",
      story: "Nature Realm is connected to the Albums system without inventing official works. The artist knowledge base currently allows placeholders until the Creative Director defines official Nature Realm works.",
      source: "knowledge/artists/mengmeng/music-language.md; knowledge/artists/mengmeng/archive.md",
      workIds: ["nature-placeholder-work"]
    }
  ],
  works: [
    {
      id: "wuliangguang",
      title: "无量光",
      artistId: "guanwujie",
      artist: "观无界",
      realm: "Spirit Realm",
      albumId: "pure-land",
      date: "Draft",
      status: "Approved placeholder work",
      description: "A Spirit Realm Pure Land chapter centered on light, repetition, return, and quiet devotion.",
      source: "BrandArtists/观无界/Works.md; knowledge/artists/guanwujie/music-language.md",
      archiveStatus: "Timeline placeholder"
    },
    {
      id: "jile",
      title: "极乐",
      artistId: "guanwujie",
      artist: "观无界",
      realm: "Spirit Realm",
      albumId: "pure-land",
      date: "Draft",
      status: "Approved placeholder work",
      description: "A Pure Land chapter belonging to 观无界 and Spirit Realm, preserved as part of the净土体系.",
      source: "BrandArtists/观无界/Works.md; knowledge/artists/guanwujie/archive.md",
      archiveStatus: "Timeline placeholder"
    },
    {
      id: "sishibayuan",
      title: "四十八愿",
      artistId: "guanwujie",
      artist: "观无界",
      realm: "Spirit Realm",
      albumId: "pure-land",
      date: "Draft",
      status: "Approved placeholder work",
      description: "A Spirit Realm chapter named by the approved Pure Land placeholder work system.",
      source: "BrandArtists/观无界/Works.md; knowledge/artists/guanwujie/music-language.md",
      archiveStatus: "Timeline placeholder"
    },
    {
      id: "namo-amitabha",
      title: "南无阿弥陀佛",
      artistId: "guanwujie",
      artist: "观无界",
      realm: "Spirit Realm",
      albumId: "pure-land",
      date: "Draft",
      status: "Approved placeholder work",
      description: "A chanting-centered Spirit Realm chapter belonging to 观无界's Pure Land system.",
      source: "BrandArtists/观无界/Works.md; knowledge/artists/guanwujie/archive.md",
      archiveStatus: "Timeline placeholder"
    },
    {
      id: "wuxiang",
      title: "无相",
      artistId: "shiliyin",
      artist: "十里音",
      realm: "Future Realm",
      albumId: "wuxiang",
      date: "Draft",
      status: "Knowledge confirmed work system",
      description: "The Future Realm album-level work system that belongs to 十里音 and frames the philosophical catalogue.",
      source: "knowledge/artists/shiliyin/music-language.md; knowledge/artists/shiliyin/archive.md",
      archiveStatus: "Timeline record"
    },
    {
      id: "xinjing",
      title: "心经",
      artistId: "shiliyin",
      artist: "十里音",
      realm: "Future Realm",
      albumId: "",
      date: "Draft",
      status: "Knowledge confirmed work",
      description: "A Future Realm work owned by 十里音 according to Artists Knowledge Base.",
      source: "knowledge/artists/shiliyin/music-language.md",
      archiveStatus: "Timeline record"
    },
    {
      id: "daodejing",
      title: "道德经",
      artistId: "shiliyin",
      artist: "十里音",
      realm: "Future Realm",
      albumId: "",
      date: "Draft",
      status: "Knowledge confirmed work",
      description: "A Future Realm philosophical work owned by 十里音, not Spirit Realm.",
      source: "knowledge/artists/shiliyin/music-language.md",
      archiveStatus: "Timeline record"
    },
    {
      id: "zhuangzi",
      title: "庄子",
      artistId: "shiliyin",
      artist: "十里音",
      realm: "Future Realm",
      albumId: "",
      date: "Draft",
      status: "Knowledge confirmed work",
      description: "A Future Realm philosophical work owned by 十里音 according to the artist knowledge boundary.",
      source: "knowledge/artists/shiliyin/music-language.md",
      archiveStatus: "Timeline record"
    },
    {
      id: "yuan",
      title: "渊",
      artistId: "shiliyin",
      artist: "十里音",
      realm: "Future Realm",
      albumId: "wuxiang",
      date: "Draft",
      status: "Knowledge confirmed work",
      description: "A chapter of the 《无相》 system, moving toward the place before names and forms.",
      source: "knowledge/artists/shiliyin/music-language.md; knowledge/artists/shiliyin/archive.md",
      archiveStatus: "Timeline record"
    },
    {
      id: "jing",
      title: "镜",
      artistId: "shiliyin",
      artist: "十里音",
      realm: "Future Realm",
      albumId: "wuxiang",
      date: "Draft",
      status: "Knowledge confirmed work",
      description: "A chapter of the 《无相》 system, using mirror logic to examine the whole self.",
      source: "knowledge/artists/shiliyin/music-language.md; knowledge/artists/shiliyin/archive.md",
      archiveStatus: "Timeline record"
    },
    {
      id: "san",
      title: "散",
      artistId: "shiliyin",
      artist: "十里音",
      realm: "Future Realm",
      albumId: "wuxiang",
      date: "Draft",
      status: "Knowledge confirmed work",
      description: "A chapter of the 《无相》 system, treating release as a return to freedom.",
      source: "knowledge/artists/shiliyin/music-language.md; knowledge/artists/shiliyin/archive.md",
      archiveStatus: "Timeline record"
    },
    {
      id: "wuming",
      title: "无名",
      artistId: "shiliyin",
      artist: "十里音",
      realm: "Future Realm",
      albumId: "wuxiang",
      date: "Draft",
      status: "Knowledge confirmed work",
      description: "The closing chapter of the 《无相》 loop, returning before names and definitions.",
      source: "knowledge/artists/shiliyin/music-language.md; knowledge/artists/shiliyin/archive.md",
      archiveStatus: "Timeline record"
    },
    {
      id: "jiejiechumenle",
      title: "姐姐出门了",
      artistId: "shiliyin",
      artist: "十里音",
      realm: "Future Realm",
      albumId: "",
      date: "Draft",
      status: "Knowledge confirmed work",
      description: "A contemporary pop work owned by 十里音 in the Future Realm catalogue.",
      source: "knowledge/artists/shiliyin/music-language.md; knowledge/artists/shiliyin/archive.md",
      archiveStatus: "Timeline record"
    },
    {
      id: "jiejiedeaijingui",
      title: "姐姐的爱很金贵",
      artistId: "shiliyin",
      artist: "十里音",
      realm: "Future Realm",
      albumId: "",
      date: "Draft",
      status: "Knowledge confirmed work",
      description: "A contemporary pop work owned by 十里音 in the Future Realm catalogue.",
      source: "knowledge/artists/shiliyin/music-language.md; knowledge/artists/shiliyin/archive.md",
      archiveStatus: "Timeline record"
    },
    {
      id: "nature-placeholder-work",
      title: "Nature Realm Placeholder Work",
      artistId: "mengmeng",
      artist: "梦梦",
      realm: "Nature Realm",
      albumId: "nature-placeholder",
      date: "Pending",
      status: "Placeholder only",
      description: "A placeholder Works state for 梦梦. Official Nature Realm works are not finalized in Artists Knowledge Base.",
      source: "knowledge/artists/mengmeng/music-language.md; knowledge/artists/mengmeng/archive.md",
      archiveStatus: "Placeholder timeline state"
    }
  ]
};

(function alignContentNarrative(catalog) {
  const artistNarratives = {
    guanwujie: {
      identity: "Guardian of the Spirit Realm.",
      worldview: "A world where sound returns to silence.",
      voiceLanguage: "Spirit Realm Pure Land sound language.",
      visualLanguage: "Quiet, bright, sacred, and restrained.",
      archiveEntry: "BrandArtists/观无界/Narrative.md",
    },
    shiliyin: {
      identity: "Future Realm artist system for Eastern philosophy and contemporary pop creation.",
      worldview: "Old questions translated through contemporary sound, image, and popular music.",
      voiceLanguage: "Eastern philosophy x contemporary pop creation.",
      visualLanguage: "Philosophical calm balanced with contemporary sharpness.",
      archiveEntry: "BrandArtists/十里音/Narrative.md",
    },
    mengmeng: {
      identity: "Nature Realm artist knowledge system for a nature world voice and emotional guardian.",
      worldview: "A world of breath, growth, softness, memory, and emotional weather.",
      voiceLanguage: "Nature Realm sound language with placeholder Works state.",
      visualLanguage: "Natural, soft, intimate, and contemporary.",
      archiveEntry: "BrandArtists/梦梦/Narrative.md",
    },
  };

  catalog.narrativeSystem = {
    name: "A Civilization of Voices Narrative System",
    requiredAnchors: ["Voice", "Memory", "Civilization", "Journey", "Archive"],
    legalDataFlow: ["Artists Knowledge Base", "Works", "Sound Map", "Archive", "Homepage"],
    forbiddenFlow: "Reverse hardcoding from UI, Sound Map layout, or Archive-only records.",
  };

  catalog.artists.forEach(artist => {
    const narrative = artistNarratives[artist.id] || {};
    artist.identity = narrative.identity || "";
    artist.worldview = narrative.worldview || "";
    artist.voiceLanguage = narrative.voiceLanguage || "";
    artist.visualLanguage = narrative.visualLanguage || "";
    artist.works = catalog.works.filter(work => work.artistId === artist.id).map(work => work.id);
    artist.archiveEntry = narrative.archiveEntry || "";
  });

  catalog.works.forEach(work => {
    work.artistSource = work.source;
    work.timeEra = work.date;
    work.narrativeDescription = work.description;
    work.archiveLink = `archive/index.html?work=${work.id}`;
  });

  catalog.soundMapNodes = catalog.artists.map(artist => ({
    artistId: artist.id,
    source: artist.archiveEntry,
    works: artist.works,
    worksHref: artist.worksHref.replace(/^\.\.\//, ""),
    archiveHref: "archive/index.html",
  }));

  catalog.archiveSystem = {
    type: "Living Memory of Music Civilization",
    timelineSource: "BrandArchive/WorksTimeline.md",
    memoryTypes: ["Work memory", "Artist memory", "Time-flow memory", "Civilization node memory"],
    records: catalog.works.map(work => {
      const artist = catalog.artists.find(item => item.id === work.artistId) || {};
      const album = catalog.albums.find(item => item.id === work.albumId) || null;
      const mapNode = catalog.soundMapNodes.find(item => item.artistId === work.artistId) || {};
      return {
        workId: work.id,
        title: work.title,
        artistId: work.artistId,
        artist: work.artist,
        realm: work.realm,
        albumId: work.albumId,
        albumTitle: album ? album.title : "",
        timeEra: work.timeEra,
        status: work.archiveStatus,
        civilizationDescription: work.narrativeDescription,
        archiveLink: work.archiveLink,
        source: work.artistSource,
        relatedNode: work.realm,
        artistHref: artist.href || "",
        workHref: `works/detail.html?id=${work.id}`,
        worksHref: artist.worksHref ? artist.worksHref.replace(/^\.\.\//, "") : "works/index.html",
        albumHref: album ? `albums/detail.html?id=${album.id}` : "",
        soundMapHref: "sound-civilization-map.html",
        archiveFocusHref: `archive/index.html?work=${work.id}`,
        mapSource: mapNode.source || artist.archiveEntry || "",
      };
    }),
    albumTimeline: catalog.albums.map(album => ({
      albumId: album.id,
      title: album.title,
      artistId: album.artistId,
      artist: album.artist,
      realm: album.realm,
      status: album.status,
      story: album.story,
      source: album.source,
      albumHref: `albums/detail.html?id=${album.id}`,
      archiveFocusHref: `archive/index.html?album=${album.id}`,
    })),
    artistTimeline: catalog.artists.map(artist => ({
      artistId: artist.id,
      artist: artist.name,
      realm: artist.realm,
      identity: artist.identity,
      worldview: artist.worldview,
      voiceLanguage: artist.voiceLanguage,
      source: artist.archiveEntry,
      artistHref: artist.href,
      worksHref: artist.worksHref.replace(/^\.\.\//, ""),
      soundMapHref: "sound-civilization-map.html",
      archiveFocusHref: `archive/index.html?artist=${artist.id}`,
    })),
  };
})(window.MUSIC_FACTORY_CATALOG);
