# Content Alignment Layer

## Milestone

Milestone 16.5 - Content Alignment Layer.

## Purpose

This document defines the unified content narrative system for Music Factory.

It aligns:

- Artists Universe.
- Sound Civilization Map.
- Albums & Works.
- Archive System.

The unified narrative system is:

A Civilization of Voices Narrative System.

## Global Narrative Definition

Music Factory = Civilization of Voices.

Every content object must express at least one of the following narrative anchors:

- Voice.
- Memory.
- Civilization.
- Journey.
- Archive.

Content must not describe Music Factory as a SaaS product, dashboard, product catalogue, data visualization, file browser, or player-only website.

## Artist Content Contract

Every artist must contain the following aligned fields:

- Identity.
- Worldview.
- Voice Language.
- Visual Language.
- Works.
- Archive Entry.

The aligned artist source files are:

- `BrandArtists/观无界/Narrative.md`
- `BrandArtists/十里音/Narrative.md`
- `BrandArtists/梦梦/Narrative.md`

These files derive from Artists Knowledge Base and do not invent new official facts.

## Works Content Contract

Every work must contain:

- Title.
- Artist Source.
- Time / Era.
- Narrative Description.
- Archive Link.

The implementation keeps Milestone 16 fields for backward compatibility and adds aligned fields through `src/content/music-catalog.js`.

Mapping:

| Contract Field | Catalog Field |
| --- | --- |
| Title | `title` |
| Artist Source | `artistSource` |
| Time / Era | `timeEra` |
| Narrative Description | `narrativeDescription` |
| Archive Link | `archiveLink` |

## Sound Map Content Contract

Sound Map nodes must be:

- Derived from Artists.
- Linked to Works.
- Connected to Archive.

Sound Map nodes must not be generated from layout needs, UI needs, or isolated visual concepts.

## Archive Content Contract

Archive is:

- Memory Records.
- Works Timeline.
- Civilization Entries.

Archive must not become a simple file list.

## Legal Data Flow

The only legal content flow is:

Artists Knowledge Base
↓
Works
↓
Sound Map
↓
Archive
↓
Homepage

Reverse hardcoding is forbidden.

## UI Boundary

Milestone 16.5 must not change:

- `index.html` structure.
- Sound Map layout.
- Artists layout.
- Homepage layout.

Only content logic, data structure, and documentation may change.
