# Sound Civilization Map

## Purpose

Sound Civilization Map is the website module that turns Music Factory from a collection of pages into a navigable civilization system.

## Definition

It is a living atlas of voices, memories, archives, and worlds.

It is not a graph, dashboard, technical relationship map, organization chart, or data visualization.

## User Feeling

The visitor should feel they are entering a cultural atlas:

- A civilization map.
- A museum route.
- A memory archive.
- A journey through voice.
- A world made of sound.

## Required Sections

1. Hero: introduce the map as a living atlas.
2. Voice Civilizations: present each artist as a world.
3. World Connections: describe emotional, cultural, sonic, philosophical, and narrative relationships.
4. Archive Routes: show how sound becomes archive and archive returns to sound.
5. Journey Mode: define the immersive route from civilization to artist to work to archive and back.
6. Future Expansion: make clear the system can expand beyond the first three artists.

## Artist Boundaries

观无界 belongs to Spirit Realm and Pure Land Buddhist chanting logic.

十里音 belongs to Future Realm and Eastern philosophy x contemporary pop logic.

梦梦 belongs to Nature Realm and should not borrow Buddhist, Daoist, or classical philosophy works.

## Interaction Principles

Allowed:

- Hover reveal.
- Fade.
- Mask.
- Soft zoom.
- Slow motion.
- Subtle parallax.

Forbidden:

- Complex particles.
- Technology glow.
- Neural-network diagrams.
- Large drag or zoom map systems.
- Dashboard or cockpit patterns.

## Implementation Rule

Render the module from expandable data. The first release may include three civilizations, but the component must support future artists by adding entries to data.

## Agent Rule

When implementing or editing Sound Civilization Map, choose the option that feels more like a living cultural atlas and less like a technical interface.

---

# Sound Civilization Map V2

## Purpose

Milestone 19 upgrades Sound Civilization Map into a Sound Experience Map.

The module must feel like A Living Civilization Atlas.

## Role Redefinition

Sound Map is no longer a relationship display.

Sound Map is a music civilization exhibition map.

## Civilization Spaces

The three starting civilizations remain:

- 观无界.
- 十里音.
- 梦梦.

Each civilization must be rendered as a spatial area, not as a graph point.

The visitor should be able to:

1. Enter the map.
2. Choose a civilization.
3. Enter a space.
4. Watch the story unfold.
5. Return to the map.

## Data Rule

Civilization spaces must be generated from the content system:

- `src/content/music-catalog.js`
- Artist fields derived from Artists Knowledge Base.
- Works lists derived from Works Catalog.
- Archive routes derived from Archive Timeline.

Do not create standalone UI nodes that have no artist, work, or archive source.

## V2 Interaction Rule

Allowed:

- Hover Reveal.
- Soft Zoom.
- Fade Transition.
- Mask Flow.

Forbidden:

- Node graph UI.
- Data visualization UI.
- Technology network lines.
- Dragging and zooming map systems.

## V2 Success Standard

The visitor must feel they are walking into a civilization atlas, not reading a relationship map.
