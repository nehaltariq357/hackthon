<!-- SYNC IMPACT REPORT
Version change: N/A -> 1.0.0
List of modified principles: N/A (new constitution)
Added sections: All principles and sections
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md: ⚠ pending
- .specify/templates/spec-template.md: ⚠ pending
- .specify/templates/tasks-template.md: ⚠ pending
Follow-up TODOs: None
-->

# Physical AI & Humanoid Robotics Textbook Constitution

## Core Principles

### I. Minimal UI Dependencies
No external UI libraries except Tailwind CSS for styling; all UI components built from scratch or using Tailwind utilities only; ensures maximum control over design and performance.

### II. Mobile-First Responsive Design
All interfaces designed mobile-first with responsive breakpoints; clean, accessible design prioritizing readability; ensures accessibility across all device sizes and user contexts.

### III. Content-First Architecture (NON-NEGOTIABLE)
All textbook content authored in MDX/Markdown for easy future updates; content stored in /content/chapters/ directory; enables easy editing and version control of educational materials.

### IV. Performance-Driven Development
Lightning fast page load times with <1.5s First Contentful Paint (FCP); optimized bundle size <200KB (excluding images); prioritizes user experience and accessibility for educational content.

### V. Accessibility-First Design
100% accessible with proper ARIA attributes and keyboard navigation; follows WCAG guidelines; ensures educational content is accessible to all learners regardless of ability.

### VI. TypeScript Excellence
All React/JSX components written in TypeScript; strict typing enforced; ensures maintainability, reduces runtime errors, and improves developer experience for educational code examples.

## Additional Constraints

Technology stack: Docusaurus framework with React, TypeScript, Tailwind CSS; deployment on GitHub Pages; 5 chapters (Modules 1-4 + Capstone) with subtopics as described in course requirements; all components must be reusable and modular.

## Development Workflow

All code follows the principles above; new features must pass performance budgets (<1.5s FCP, <200KB bundle); content changes must be in MDX/Markdown format; all components must be tested for accessibility; TypeScript strict mode required for all new code.

## Governance

This constitution supersedes all other practices; all PRs and reviews must verify compliance with these principles; changes to core principles require explicit documentation and approval; bundle size and performance metrics are enforced as quality gates.

**Version**: 1.0.0 | **Ratified**: 2025-12-07 | **Last Amended**: 2025-12-07