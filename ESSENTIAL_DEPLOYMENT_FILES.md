# Essential Files for Vercel Deployment

## Root Directory
- `package.json` - Project dependencies and scripts
- `vercel.json` - Vercel deployment configuration
- `README.md` - Project documentation
- `.gitignore` - Git ignore rules

## Configuration Files
- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Navigation sidebar structure
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration

## Source Code
- `src/css/custom.css` - Custom styles
- `src/pages/index.tsx` - Homepage
- `src/pages/404.tsx` - Custom 404 page
- `src/components/ThemeProvider/index.tsx` - Theme context
- `src/components/ThemeToggle/index.tsx` - Dark/light toggle
- `src/components/ProgressBar/index.tsx` - Progress tracking
- `src/components/DiagramPlaceholder/index.tsx` - Diagram placeholders
- `src/components/ProgressTracker/index.tsx` - Progress system

## Content Files
- `docs/module-1-ros2/index.md` - Module 1 overview
- `docs/module-1-ros2/topic-1.mdx` - ROS 2 content
- `docs/module-1-ros2/topic-2.mdx` - ROS 2 content
- `docs/module-1-ros2/topic-3.mdx` - ROS 2 content
- `docs/module-2-digital-twin/index.md` - Module 2 overview
- `docs/module-2-digital-twin/topic-1.mdx` - Digital twin content
- `docs/module-2-digital-twin/topic-2.mdx` - Digital twin content
- `docs/module-2-digital-twin/topic-3.mdx` - Digital twin content
- `docs/module-3-nvidia-isaac/index.md` - Module 3 overview
- `docs/module-3-nvidia-isaac/topic-1.mdx` - Isaac content
- `docs/module-3-nvidia-isaac/topic-2.mdx` - Isaac content
- `docs/module-3-nvidia-isaac/topic-3.mdx` - Isaac content
- `docs/module-4-vla/index.md` - Module 4 overview
- `docs/module-4-vla/topic-1.mdx` - VLA content
- `docs/module-4-vla/topic-2.mdx` - VLA content
- `docs/module-4-vla/topic-3.mdx` - VLA content
- `docs/capstone-project/index.md` - Capstone overview
- `docs/capstone-project/topic-1.mdx` - Capstone content
- `docs/capstone-project/topic-2.mdx` - Capstone content

## Static Assets
- `static/img/logo.svg` - Site logo
- `static/img/favicon.ico` - Favicon
- `static/img/docusaurus-social-card.jpg` - Social card image

## Documentation
- `PROJECT_SUMMARY.md` - Project summary
- `DEPLOYMENT_FILES.md` - This file
- All files in `specs/1-ai-robotics-textbook/` - Project specifications

## Notes:
- The `.docusaurus/` directory and `build/` directory are generated automatically and should NOT be included in version control
- Vercel will run `npm install` and `npm run build` automatically
- The `vercel.json` file contains all necessary deployment configuration
- All content is in MDX/Markdown format for easy maintenance