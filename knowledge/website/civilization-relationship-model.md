# Civilization Relationship Model

## Purpose

This document defines the system-level relationship model for Music Factory after Milestone 15.5.

The goal is to connect Artists Universe, Sound Civilization Map, Knowledge Base, Archive, Albums, and Works into one coherent world system.

This is not a UI document.

## Core Principle

Music Factory is a civilization system of voices.

No page, module, artist, work, album, or archive entry should exist as an isolated object.

Every object must belong to a world, a voice, a memory route, and a cultural context.

## Three-Layer World Structure

### Layer 1 - Artists Universe

Artists Universe is the civilization origin layer.

It defines:

- Artist identity.
- Realm ownership.
- Worldview.
- Voice logic.
- Visual language.
- Music language.
- Work ownership.
- Archive ownership.
- Future expansion direction.

Layer 1 is the source of truth for artist-related meaning.

Sound Civilization Map must not invent artist identity, realm logic, work ownership, or archive relationships that are missing from Artists Knowledge Base.

### Layer 2 - Sound Civilization Map

Sound Civilization Map is the civilization expansion layer.

It translates Artists Universe into a living atlas of voices, memories, and worlds.

It defines:

- Civilization areas.
- Cultural relationships between worlds.
- Sound routes.
- Memory routes.
- Journey routes.
- Expansion slots for future artists.

Layer 2 is not a data visualization layer.

It is a cultural navigation layer.

### Layer 3 - Archive / Albums / Works

Archive, Albums, and Works are the civilization sediment layer.

They preserve:

- Works.
- Albums.
- Versions.
- Years.
- Types.
- Realm ownership.
- Artist ownership.
- Cultural context.
- Memory traces.

Layer 3 makes the civilization retrievable, traceable, and durable.

Archive is not a storage list.

Albums are not only release containers.

Works are not only songs.

They are memory evidence inside the civilization.

## Required Relationship Matrix

| Source | Target | Relationship | Required Meaning |
| --- | --- | --- | --- |
| Artists Universe | Sound Civilization Map | Origin to atlas | Artist knowledge becomes civilization area. |
| Sound Civilization Map | Artists Universe | Atlas to origin | Map entry must lead back to artist universe. |
| Artists Universe | Archive | Identity to memory | Artist archive preserves works and versions. |
| Archive | Artists Universe | Memory to identity | Archive entry must identify artist and realm. |
| Sound Civilization Map | Archive | Journey to memory | Map must route visitors toward preserved traces. |
| Archive | Sound Civilization Map | Memory to journey | Archive must allow return to the world map. |
| Archive | Albums | Memory to collection | Archive entries must preserve album context. |
| Albums | Archive | Collection to memory | Album pages must expose archived works and versions. |
| Albums | Works | Collection to chapter | Album contains work chapters. |
| Works | Archive | Chapter to evidence | Work pages must connect to archive evidence. |

## Connection Rules

### Artists to Sound Map

Every artist must have a Sound Map representation.

The representation must include:

- Artist name.
- Realm.
- Civilization summary.
- Voice or sound logic.
- Worldview.
- Representative works or approved placeholders.
- Entry route to the artist universe.

### Artists to Archive

Every artist must have an archive relationship.

The relationship must include:

- Artist ownership.
- Realm ownership.
- Work list or placeholder status.
- Album relationships when available.
- Version history when available.
- Forbidden ownership notes when necessary.

### Sound Map to Archive

Every Sound Map civilization must define an archive route.

The route must answer:

- What memory does this civilization preserve?
- Which works or placeholders can lead into Archive?
- How does Archive return the visitor to the map?

### Archive to Albums

Every album must be readable as part of the Archive system.

An album must connect:

- Artist.
- Realm.
- Works.
- Versions.
- Year or status.
- Cultural context.

## Data-Driven Rule

Sound Map data must be derived from Artists Knowledge Base.

The minimum source files are:

- `knowledge/artists/shared/artist-framework.md`
- Artist `profile.md`
- Artist `worldview.md`
- Artist `music-language.md`
- Artist `archive.md`

Optional supporting files:

- Artist `visual-language.md`
- Artist `quotes.md`
- Brand Repository `BrandArtists/<artist>/Identity.md`
- Brand Repository `BrandArtists/<artist>/Works.md`
- Brand Repository `BrandArtists/<artist>/Albums.md`

## Hard Prohibitions

- Do not create a Sound Map civilization without an artist knowledge source.
- Do not create an Archive entry without artist or realm ownership.
- Do not create an Album relationship without work or memory context.
- Do not create pages that cannot route to the larger world system.
- Do not let Sound Map become a manually maintained list detached from Knowledge Base.
- Do not treat the system as a platform, dashboard, player, or technical graph.

## Future Expansion Rule

The system may add:

- Artist.
- World Node.
- Archive Node.
- Album Node.
- Work Node.

Every new node must automatically connect to:

- An artist or realm.
- A Sound Map route.
- An Archive route.
- A knowledge source.

## Review Checklist

- Does each module connect to at least one upstream knowledge source?
- Does each module connect to at least one downstream memory route?
- Can the visitor move from artist to map to archive?
- Can the visitor move from map to artist to works to archive?
- Is any page isolated?
- Is any relationship invented without Knowledge Base support?
- Does the system still feel like A Civilization of Voices?
