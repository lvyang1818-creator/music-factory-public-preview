# Project Structure

## Purpose

This file defines how AI Agents should understand the Music Factory project structure.

## Current Knowledge Areas

- `Brand*` directories contain Brand Knowledge Repository material.
- `docs/` contains documentation systems, developer handbook, and design system.
- `knowledge/` contains this unified knowledge base.
- Website files render the public experience.
- Content loaders and renderers connect knowledge to display when implemented.

## Boundary Rules

- Do not mix Brand Repository files into website source folders.
- Do not rename existing website source folders without permission.
- Do not modify pages when the task is documentation-only.
- Do not hard-code brand truth into display files when a knowledge path exists.

## Agent Rule

Before editing, identify whether the task belongs to knowledge, documentation, brand repository, data layer, renderer, or page UI.
