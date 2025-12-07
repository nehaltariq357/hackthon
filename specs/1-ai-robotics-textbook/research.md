# Research: AI Robotics Textbook

## Architecture Research

### Docusaurus vs Next.js Decision
- **Docusaurus Advantages**:
  - Purpose-built for documentation and book-like content
  - Built-in features for navigation and search
  - Optimized for static content
  - Excellent for GitHub Pages deployment
  - MDX support out of the box
  - Community-driven themes and plugins
- **Next.js Considerations**:
  - More flexible but requires more setup for book-like features
  - Would need additional libraries for navigation and search
  - Overkill for static educational content

**Decision**: Docusaurus is the optimal choice for this textbook project.

### MDX vs Plain React Decision
- **MDX Advantages**:
  - Content authors can write in Markdown with React components
  - Easy to update and maintain content
  - Supports code examples and interactive components
  - Version control friendly
  - Non-technical contributors can edit content
- **Plain React Considerations**:
  - Would require technical knowledge for content updates
  - More complex to maintain
  - Less flexible for content authors

**Decision**: MDX is the optimal choice for content management.

### Styling Approach
- **Tailwind CSS**: Chosen for consistency with the project constitution (Minimal UI Dependencies principle)
- **Custom CSS**: Will be minimal, mostly for Docusaurus theme customization
- **Component Styling**: Primarily through Tailwind utility classes

### Performance Considerations
- **Bundle Size**: Target <200KB excluding images
- **Code Splitting**: Docusaurus provides automatic code splitting
- **Image Optimization**: Will use modern formats and lazy loading
- **Caching Strategy**: GitHub Pages caching with proper headers

## Technology Stack

- **Framework**: Docusaurus 3.x with React 18.x
- **Styling**: Tailwind CSS 3.x with custom theme
- **Content Format**: MDX/Markdown with embedded React components
- **Deployment**: GitHub Pages
- **Development**: TypeScript with strict typing
- **Testing**: Jest, React Testing Library, Cypress

## Third-party Libraries

- **Syntax Highlighting**: Prism.js (built into Docusaurus)
- **Diagram Integration**: Placeholder components for future diagram integration
- **Progress Tracking**: Custom React components with localStorage
- **Theme Switching**: Docusaurus built-in with custom extensions