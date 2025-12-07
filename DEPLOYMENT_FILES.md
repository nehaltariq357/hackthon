# Files Required for Vercel Deployment

## Root Directory
- `package.json` - Contains project dependencies and build scripts
- `vercel.json` - Vercel deployment configuration with caching headers
- `README.md` - Documentation with deployment instructions
- `.gitignore` - Git ignore file for deployment

## Source Code
- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Navigation sidebar configuration
- `src/css/custom.css` - Custom CSS styles
- `src/pages/index.tsx` - Homepage
- `src/pages/404.tsx` - Custom 404 page
- `src/components/ThemeProvider/index.tsx` - Theme context provider
- `src/components/ThemeToggle/index.tsx` - Dark/light mode toggle
- `src/components/ProgressBar/index.tsx` - Progress tracking component
- `src/components/DiagramPlaceholder/index.tsx` - Diagram placeholders
- `src/components/ProgressTracker/index.tsx` - Comprehensive progress tracking

## Content Files
- `docs/module-1-ros2/index.md` - Module 1 overview
- `docs/module-1-ros2/topic-1.mdx` - ROS 2 architecture
- `docs/module-1-ros2/topic-2.mdx` - ROS 2 nodes and topics
- `docs/module-1-ros2/topic-3.mdx` - ROS 2 services and actions
- `docs/module-2-digital-twin/index.md` - Module 2 overview
- `docs/module-2-digital-twin/topic-1.mdx` - Gazebo simulation
- `docs/module-2-digital-twin/topic-2.mdx` - Unity integration
- `docs/module-2-digital-twin/topic-3.mdx` - Digital twin concepts
- `docs/module-3-nvidia-isaac/index.md` - Module 3 overview
- `docs/module-3-nvidia-isaac/topic-1.mdx` - Isaac ROS framework
- `docs/module-3-nvidia-isaac/topic-2.mdx` - Isaac AI tools
- `docs/module-3-nvidia-isaac/topic-3.mdx` - Isaac simulation
- `docs/module-4-vla/index.md` - Module 4 overview
- `docs/module-4-vla/topic-1.mdx` - Vision systems
- `docs/module-4-vla/topic-2.mdx` - Language models
- `docs/module-4-vla/topic-3.mdx` - Action planning
- `docs/capstone-project/index.md` - Capstone overview
- `docs/capstone-project/topic-1.mdx` - Humanoid robot integration
- `docs/capstone-project/topic-2.mdx` - Autonomous behavior

## Static Assets
- `static/img/` - All images and logos
  - `logo.svg` - Site logo
  - `favicon.ico` - Favicon
  - `docusaurus-social-card.jpg` - Social card image
  - Any additional diagram images

## Configuration Files
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration

## Documentation
- `PROJECT_SUMMARY.md` - Project summary document
- All files in `specs/1-ai-robotics-textbook/` - Project specifications and plans

## Important Notes:
1. The project uses Docusaurus which will automatically build all static assets
2. Vercel will run `npm run build` using the script in package.json
3. The vercel.json file contains optimal caching settings for performance
4. All content is in MDX format for easy maintenance
5. The build process will generate a `build/` directory (not needed for version control but created during deployment)

## Deployment Process:
1. Push all these files to a GitHub repository
2. Connect the repository to Vercel Dashboard
3. Vercel will automatically detect the Docusaurus project
4. The build will run automatically with the settings in vercel.json
5. Your AI Robotics Textbook will be deployed and accessible via a Vercel URL