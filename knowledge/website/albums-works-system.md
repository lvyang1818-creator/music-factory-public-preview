# Albums & Works System

## Milestone

Milestone 16 - Albums & Works System.

## Purpose

This document defines the Music Factory content-layer system for Albums and Works.

It does not define a UI redesign.

It connects artist knowledge, works, albums, archive, and Sound Civilization Map into one content structure.

## Scope

Milestone 16 creates:

- `/albums/`
- `/works/`
- Album list page.
- Album detail page.
- Work list page.
- Work detail page.
- Artist to Works binding.
- Sound Map to Works routes.
- Works to Archive timeline route.

## Data Source Rule

Works must come from Artists Knowledge Base.

Do not invent works without source.

Primary sources:

- `knowledge/artists/guanwujie/music-language.md`
- `knowledge/artists/guanwujie/archive.md`
- `knowledge/artists/shiliyin/music-language.md`
- `knowledge/artists/shiliyin/archive.md`
- `knowledge/artists/mengmeng/music-language.md`
- `knowledge/artists/mengmeng/archive.md`
- `BrandArtists/<artist>/Works.md`
- `BrandArtists/<artist>/Albums.md`

Supporting source:

- `BrandWebsite/SoundCivilizationMap.md`

## Artist Works Binding

### 观无界

Allowed Spirit Realm works:

- 无量光
- 极乐
- 四十八愿
- 南无阿弥陀佛

These are bound to Spirit Realm and must not mix with 十里音 Future Realm works.

### 十里音

Allowed Future Realm works:

- 无相
- 心经
- 道德经
- 庄子
- 渊
- 镜
- 散
- 无名
- 姐姐出门了
- 姐姐的爱很金贵

The 《无相》 album belongs to 十里音.

### 梦梦

Nature Realm works are not finalized in Artists Knowledge Base.

Milestone 16 may bind 梦梦 to a placeholder Works state only.

Do not assign Buddhist, Daoist, classical philosophy, Spirit Realm, or Future Realm works to 梦梦.

## Albums System

Albums are civilization chapter collections.

An album must include:

- Album title.
- Artist.
- Realm.
- Status.
- Cover or cover status.
- Story summary.
- Work ids.
- Knowledge source.
- Archive route.

Albums are not product release cards.

Albums must connect to Works and Archive.

## Works System

Works are civilization chapters.

A work must include:

- Title.
- Artist.
- Realm.
- Date or status.
- Description.
- Album relationship when available.
- Archive status.
- Knowledge source.
- Sound Map return route.

Works are not playlist items.

Works must connect to Artist, Sound Map, and Archive.

## Sound Map Relationship

Sound Map nodes may enter Works through artist or work routes.

Required route:

Sound Map -> Works -> Archive -> Sound Map

Works must preserve a return route to Sound Civilization Map.

## Archive Relationship

All Works automatically enter Archive as timeline records.

Archive timeline records must preserve:

- Work title.
- Artist.
- Realm.
- Album.
- Status or date.
- Source.

## UI Rule

Use the existing Design System and Product Experience System.

Do not redesign Homepage.

Do not redesign the existing visual language.

Pages may use light editorial structure only to make content accessible.

## Review Checklist

- Does each work have a knowledge source?
- Does each album have artist and realm ownership?
- Can Artist pages or artist routes reach Works?
- Can Sound Map reach Works?
- Can Works reach Archive?
- Can Archive return to Sound Map?
- Does 梦梦 avoid unauthorized work ownership?
