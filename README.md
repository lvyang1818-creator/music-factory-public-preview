# Music Factory Brand Knowledge Repository

This repository is the single brand knowledge repository for Music Factory.

Obsidian is the editor.

GitHub stores version history.

Website is the presentation layer.

All brand content must be maintained in this repository before it is used by the website, app, AI Artist system, MV workflow, album workflow, prompt workflow, design workflow, development workflow, or content workflow.

## Repository Structure

- `BrandUniverse/`
- `BrandArtists/`
- `BrandAlbums/`
- `BrandWebsite/`
- `BrandAssets/`
- `BrandPrompts/`
- `BrandTemplates/`
- `BrandArchive/`

## Workflow

1. Edit brand knowledge in Obsidian.
2. Save and version the content in GitHub.
3. Let the website read from the repository as the presentation layer.
4. Keep website code separate from brand content.

## Rules

- Repository is the single source of truth.
- Website is only the presentation layer.
- Do not maintain brand content directly in HTML.
- Update repository knowledge before development.
- Use `Brand*` directories for all brand knowledge to keep the repository separate from website source directories.
