# AI Robotics Textbook

Physical AI & Humanoid Robotics Course textbook built with Docusaurus.

## Features

- 5 comprehensive modules covering ROS 2, Digital Twins, NVIDIA Isaac, Vision-Language-Action, and a Capstone Project
- Interactive code examples in Python and ROS 2
- Progress tracking and dark/light mode
- Mobile-responsive design
- Fast loading and SEO optimized

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

### Vercel

This project is configured for deployment on Vercel. You have two options:

**Option 1: GitHub Integration (Recommended)**
1. Push your code to a GitHub repository
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project" and select your GitHub repository
4. Vercel will automatically detect the Docusaurus project and use the `vercel.json` configuration
5. The site will be deployed automatically and you'll receive a URL like `https://your-project-name.vercel.app`

**Option 2: CLI Deployment**
1. Install Vercel CLI: `npm install -g vercel`
2. Login to Vercel: `vercel login`
3. Deploy the project: `vercel --prod`
4. Follow the prompts to link to your GitHub account and configure the project

The `vercel.json` configuration is already set up for optimal performance with caching headers and clean URLs.

### GitHub Pages

Alternatively, you can deploy to GitHub Pages:

```bash
npm run deploy
```

## Contributing

To add new content:
1. Create new MDX files in the `docs/` directory following the existing structure
2. Update the sidebar configuration in `sidebars.js` to include new content
3. Make sure to follow the existing content patterns and include proper code examples and diagrams

## Tech Stack

- [Docusaurus](https://docusaurus.io/): Static site generator
- [React](https://reactjs.org/): UI library
- [Tailwind CSS](https://tailwindcss.com/): Styling framework
- [TypeScript](https://www.typescriptlang.org/): Type safety
- [MDX](https://mdxjs.com/): Content with React components