# Quickstart Guide: AI Robotics Textbook Development

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- A code editor (VS Code recommended)

## Setup Instructions

### 1. Clone and Initialize the Repository
```bash
# Clone the repository
git clone <repository-url>
cd <repository-name>

# Switch to the textbook branch
git checkout 1-ai-robotics-textbook

# Install dependencies
npm install
```

### 2. Run the Development Server
```bash
# Start the Docusaurus development server
npm run start

# The site will be available at http://localhost:3000
```

### 3. Project Structure Overview
```
├── docs/                   # Content files (MDX/Markdown)
│   ├── module-1-ros2/      # Module 1 content
│   ├── module-2-digital-twin/ # Module 2 content
│   ├── module-3-nvidia-isaac/ # Module 3 content
│   ├── module-4-vla/       # Module 4 content
│   └── capstone-project/   # Capstone project content
├── src/
│   ├── components/         # Custom React components
│   │   ├── ThemeProvider/
│   │   ├── ProgressBar/
│   │   └── ...
│   └── css/
│       └── custom.css      # Tailwind and custom styles
├── static/                 # Static assets (images, diagrams)
└── docusaurus.config.js    # Main configuration
```

## Adding New Content

### Creating a New Topic
```bash
# Create a new MDX file in the appropriate module directory
# Example: docs/module-1-ros2/new-topic.mdx

---
title: New Topic Title
description: Brief description of the topic
---

import Component from '@site/src/components/Component';

# New Topic Title

Content goes here...

<Component />

## Subsection

More content...
```

### Adding Code Examples
```md
// Example Python/ROS 2 code block
\```python title="example_node.py"
import rclpy
from rclpy.node import Node

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher = self.create_publisher(String, 'topic', 10)
\```
```

## Development Commands

```bash
# Run development server
npm run start

# Build static site for production
npm run build

# Serve built site locally for testing
npm run serve

# Deploy to GitHub Pages
npm run deploy

# Run tests
npm run test

# Check for broken links
npm run docusaurus checkLinks
```

## Custom Components

### Progress Bar
```md
import ProgressBar from '@site/src/components/ProgressBar';

<ProgressBar moduleId="module-1-ros2" />
```

### Theme Toggle
```md
import ThemeToggle from '@site/src/components/ThemeToggle';

<ThemeToggle />
```

### Diagram Placeholder
```md
import DiagramPlaceholder from '@site/src/components/DiagramPlaceholder';

<DiagramPlaceholder
  title="System Architecture"
  description="Shows the relationship between ROS 2 nodes"
  width="100%"
  height="400px"
/>
```

## Content Guidelines

1. **Use MDX Format**: All content should be in MDX format for React component integration
2. **Code Examples**: Use appropriate language identifiers for syntax highlighting
3. **Accessibility**: Include alt text for images and proper heading hierarchy
4. **Mobile-First**: Ensure content is readable on mobile devices
5. **Performance**: Optimize images and keep bundle size under 200KB

## Deployment to GitHub Pages

1. Ensure all changes are committed to the `1-ai-robotics-textbook` branch
2. Run the deployment command:
```bash
npm run deploy
```
3. The site will be automatically built and deployed to GitHub Pages
4. The live site will be available at `https://<username>.github.io/<repository>`

## Troubleshooting

### Common Issues
- **Port already in use**: Change port with `npm run start -- --port 3001`
- **Build fails**: Run `npm run clear` to clear cache and try again
- **Links not working**: Check that all internal links use Docusaurus link format: `[text](/path/to/page)`

### Performance Optimization
- Use `npm run build` to check bundle size
- Compress images before adding to `static/img/`
- Use code splitting for large components