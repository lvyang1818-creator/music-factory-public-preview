# World System Definition

## Purpose

This document defines Music Factory as a world system after Milestone 15.5.

It establishes the conceptual language used by Artists Universe, Sound Civilization Map, Archive, Albums, Works, and future nodes.

## Definition

Music Factory is A Civilization of Voices.

It is not only a website.

It is not a platform.

It is not a player.

It is not a dashboard.

It is a cultural system where voices become worlds, works become chapters, and archives preserve memory.

## World System Layers

### Layer 1 - Artists Universe

Artists Universe is the origin of civilization.

Each artist defines:

- A voice.
- A realm.
- A worldview.
- A visual language.
- A sound language.
- A cultural boundary.
- A future expansion path.

Artist knowledge is the source of world identity.

### Layer 2 - Sound Civilization Map

Sound Civilization Map is the atlas of civilization.

It shows how artist worlds exist beside one another and how visitors can move between them through emotion, culture, sound, philosophy, story, and memory.

It is a living map of voices.

It must never become a technical map.

### Layer 3 - Archive / Albums / Works

Archive, Albums, and Works are the sediment of civilization.

Works are chapters.

Albums are collections of chapters.

Archive is memory evidence.

Together, they make the civilization durable and retrievable.

## Object Definitions

### Artist

An artist is a civilization origin.

An artist is not merely a performer profile.

Required system connections:

- Artists Knowledge Base.
- Sound Civilization Map.
- Works.
- Archive.
- Albums when available.

### World Node

A World Node is a map-level expression of an artist civilization.

It may represent a realm, cultural region, memory field, or future extension.

Required system connections:

- Artist source.
- Sound Map position.
- Archive route.
- Future expansion rule.

### Work Node

A Work Node is a chapter inside a civilization.

It is not only a song item.

Required system connections:

- Artist ownership.
- Realm ownership.
- Album relationship when applicable.
- Archive evidence.

### Album Node

An Album Node is a structured collection of work chapters.

It is not only a release package.

Required system connections:

- Artist ownership.
- Realm ownership.
- Works.
- Archive.
- Concept or cultural context.

### Archive Node

An Archive Node is preserved memory evidence.

It is not a storage folder.

Required system connections:

- Artist.
- Realm.
- Work or Album.
- Version, year, type, or status.
- Return route to Sound Map or Artist.

## Expansion Rule

Music Factory may add:

- Artist.
- World Node.
- Work Node.
- Album Node.
- Archive Node.

Every new node must automatically join the world system.

Minimum requirements:

1. It has a Knowledge Base source.
2. It has an owner or parent.
3. It has a Sound Map route.
4. It has an Archive route or archive status.
5. It has a return route.

## Data Source Rule

The world system must be knowledge driven.

Sound Map data must come from Artists Knowledge Base, then may be enriched by Brand Repository files.

Allowed primary sources:

- `knowledge/artists/shared/artist-framework.md`
- Artist `profile.md`
- Artist `worldview.md`
- Artist `music-language.md`
- Artist `archive.md`

Allowed enrichment sources:

- Artist `visual-language.md`
- Artist `quotes.md`
- `BrandArtists/<artist>/Identity.md`
- `BrandArtists/<artist>/Works.md`
- `BrandArtists/<artist>/Albums.md`

Forbidden:

- Hardcoded artist ownership without source.
- Hardcoded realm relationship without source.
- Manual Sound Map structures that drift from Knowledge Base.
- Archive nodes that do not know their artist or realm.

## System Language

Preferred words:

- Civilization.
- Voice.
- World.
- Realm.
- Memory.
- Archive.
- Chapter.
- Journey.
- Culture.
- Human.
- Silence.
- Time.

Avoid words that shift the meaning toward utility software:

- Platform.
- Dashboard.
- Player-only.
- Data graph.
- Technical topology.
- Management console.
- Node database.

## Agent Rule

When making future decisions, choose the option that strengthens A Civilization of Voices.

If a decision makes Music Factory feel like a normal website, platform, player, dashboard, or technical graph, revise the decision before implementation.
