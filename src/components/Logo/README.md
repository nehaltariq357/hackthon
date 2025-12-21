# Logo Component

A reusable logo component for the AI Robotics Textbook project.

## Usage

```tsx
import Logo from '@site/src/components/Logo';

// Basic usage
<Logo />

// With custom props
<Logo
  href="/"
  alt="Custom Alt Text"
  width={40}
  height={40}
  showTitle={true}
  title="Custom Title"
  className="custom-class"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes to apply |
| `href` | `string` | `'/'` | Link destination when logo is clicked |
| `alt` | `string` | `'AI Robotics Textbook Logo'` | Alt text for the logo image |
| `width` | `number \| string` | `32` | Width of the logo image |
| `height` | `number \| string` | `32` | Height of the logo image |
| `showTitle` | `boolean` | `true` | Whether to display the title text next to the logo |
| `title` | `string` | `'AI Robotics Textbook'` | Text to display as the title |
| `onClick` | `() => void` | `undefined` | Custom click handler |

## Integration with Docusaurus

To use this component in your Docusaurus navbar, you can swizzle the Navbar component:

```bash
npm run docusaurus swizzle @theme/Navbar
```

Then import and use the Logo component in the swizzled navbar.

Alternatively, you can use the logo in any custom page or component throughout your Docusaurus site.