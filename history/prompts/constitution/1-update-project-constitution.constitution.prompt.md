---
id: 1
title: Update project constitution
stage: constitution
date_iso: 2025-12-07
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: user
command: /sp.constitution
labels: ["constitution", "setup", "governance"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - .specify/memory/constitution.md
tests_yaml: []
---

# Update project constitution

## User Input
```
/sp.constitution
Project: Textbook for Teaching Physical AI & Humanoid Robotics Course – AI-Native Book (Docusaurus + Claude Code)

Core Principles:
- No external UI libraries except Tailwind
- Mobile-first, responsive, clean design
- MDX/Markdown for all textbook content (easy future updates)
- Dark/Light mode toggle
- Lightning fast (<1.5s FCP)
- 100% accessible (ARIA + keyboard nav)

Standards:
- TypeScript (for any React/JSX components)
- All components reusable
- Chapter content in /content/chapters/
- Total bundle size < 200KB (without images)
- Chatbot integration optional but recommended

Constraints:
- 5 chapters (Modules 1-4 + Capstone)
- Each chapter contains subtopics as described in the course
- Deploy on GitHub Pages
```

## Response Summary
Updated the project constitution file (.specify/memory/constitution.md) with project-specific principles and guidelines for the Physical AI & Humanoid Robotics Textbook project. The new constitution includes:

Core Principles:
- Minimal UI Dependencies (Tailwind only)
- Mobile-First Responsive Design
- Content-First Architecture (MDX/Markdown)
- Performance-Driven Development (<1.5s FCP, <200KB bundle)
- Accessibility-First Design (ARIA, keyboard nav)
- TypeScript Excellence

Additional sections include constraints, development workflow, and governance rules. The constitution is version 1.0.0, ratified on 2025-12-07.

## Outcome
The constitution file has been successfully updated with project-specific principles and governance rules. The file includes a sync impact report and follows the required format for the project.

## Evaluation
The constitution update was completed successfully with all project-specific requirements incorporated. The file is properly formatted and includes all necessary sections for project governance.