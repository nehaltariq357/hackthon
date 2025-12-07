# Implementation Plan: AI Robotics Textbook

**Branch**: `1-ai-robotics-textbook` | **Date**: 2025-12-07 | **Spec**: [specs/1-ai-robotics-textbook/spec.md](../specs/1-ai-robotics-textbook/spec.md)
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Create a full Docusaurus architecture for the Physical AI & Humanoid Robotics textbook website. The implementation will follow a phased approach: (1) Project setup with Docusaurus + Tailwind + Claude Code integration, (2) Layout + Navigation + Theme provider (dark/light mode), (3) Chapter pages with MDX/Markdown content and code snippets, (4) Module 1-4 + Capstone content implementation, (5) Chapter progress bar + navigation, (6) Diagram placeholders + code blocks, (7) Polish + deploy to GitHub Pages. The solution will use MDX for content management, Docusaurus for book-focused structure, and static content for GitHub Pages deployment without backend requirements.

## Technical Context

**Language/Version**: TypeScript 5.x, JavaScript ES2022, Node.js 18+
**Primary Dependencies**: Docusaurus 3.x, React 18.x, Tailwind CSS 3.x, MDX 2.x
**Storage**: Static content files (no database needed)
**Testing**: Jest, React Testing Library, Cypress for end-to-end testing
**Target Platform**: Web browsers, GitHub Pages deployment
**Project Type**: Web application (static site generation)
**Performance Goals**: <1.5s First Contentful Paint (FCP), <200KB total bundle size (excluding images)
**Constraints**: GitHub Pages deployment, static content only (no backend), MDX/Markdown for all content
**Scale/Scope**: 5 main modules, 2-3 topics per module, educational content for robotics curriculum

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Minimal UI Dependencies**: Using only Tailwind CSS for styling, no additional UI libraries
- **Mobile-First Responsive Design**: Docusaurus default theme is responsive, will customize for mobile-first approach
- **Content-First Architecture**: All content in MDX/Markdown format as required
- **Performance-Driven Development**: Targeting <1.5s FCP and <200KB bundle size
- **Accessibility-First Design**: Using Docusaurus accessibility features and ARIA attributes
- **TypeScript Excellence**: All custom components in TypeScript with strict typing

## Project Structure

### Documentation (this feature)
```text
specs/1-ai-robotics-textbook/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)
```text
blog/                    # Optional blog section (if needed)
docs/                    # Docusaurus documentation structure
├── module-1-ros2/       # Module 1 content
│   ├── index.md         # Module overview
│   ├── topic-1.mdx      # Specific topic with code examples
│   ├── topic-2.mdx      # Specific topic with code examples
│   └── topic-3.mdx      # Specific topic with code examples
├── module-2-digital-twin/ # Module 2 content
│   ├── index.md         # Module overview
│   ├── topic-1.mdx      # Specific topic with code examples
│   ├── topic-2.mdx      # Specific topic with code examples
│   └── topic-3.mdx      # Specific topic with code examples
├── module-3-nvidia-isaac/ # Module 3 content
│   ├── index.md         # Module overview
│   ├── topic-1.mdx      # Specific topic with code examples
│   ├── topic-2.mdx      # Specific topic with code examples
│   └── topic-3.mdx      # Specific topic with code examples
├── module-4-vla/        # Module 4 content
│   ├── index.md         # Module overview
│   ├── topic-1.mdx      # Specific topic with code examples
│   ├── topic-2.mdx      # Specific topic with code examples
│   └── topic-3.mdx      # Specific topic with code examples
└── capstone-project/    # Capstone project content
    ├── index.md         # Capstone overview
    ├── topic-1.mdx      # Specific topic with code examples
    └── topic-2.mdx      # Specific topic with code examples
src/
├── components/          # Custom React components
│   ├── ThemeProvider/   # Dark/light mode toggle
│   ├── ProgressBar/     # Chapter progress indicator
│   ├── CodeBlock/       # Enhanced code display with syntax highlighting
│   ├── DiagramPlaceholder/ # Placeholder for diagrams
│   └── Navigation/      # Custom navigation components
├── css/                 # Custom styles and Tailwind configuration
│   └── custom.css       # Docusaurus custom styles
├── pages/               # Additional custom pages if needed
└── theme/               # Docusaurus theme customization
    └── CodeBlock/       # Custom code block theme
static/                  # Static assets (images, diagrams, etc.)
  └── img/               # Images and diagrams
.babelrc                 # Babel configuration
.docusaurus/             # Docusaurus build artifacts
.gitignore               # Git ignore file
babel.config.js          # Babel configuration
docusaurus.config.js     # Main Docusaurus configuration
package.json             # NPM package configuration
README.md                # Project README
tailwind.config.js       # Tailwind CSS configuration
tsconfig.json            # TypeScript configuration
```

**Structure Decision**: Web application using Docusaurus framework with MDX content in docs/ directory, custom components in src/components/, and static assets in static/. This structure supports the content-first architecture required by the constitution and enables easy content updates.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [No violations] | [All approaches align with constitution] | [All implementation choices comply with established principles] |