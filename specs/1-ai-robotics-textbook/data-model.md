# Data Model: AI Robotics Textbook

## Content Structure

### Module Entity
- **id**: string (unique identifier, e.g., "module-1-ros2")
- **title**: string (e.g., "ROS 2 – Robotic Nervous System")
- **description**: string (brief overview of the module)
- **topics**: array of Topic entities
- **order**: number (sequence 1-5 for the 5 modules)
- **progress**: number (0-100 percentage completed by user)

### Topic Entity
- **id**: string (unique identifier, e.g., "module-1-topic-1")
- **title**: string (e.g., "Introduction to ROS 2 Architecture")
- **content**: string (MDX content with embedded components)
- **module_id**: string (reference to parent module)
- **order**: number (sequence within the module 1-3)
- **estimated_reading_time**: number (in minutes)
- **progress**: number (0-100 percentage completed by user)

### Content Block Entity
- **id**: string (unique identifier)
- **type**: enum ("text", "code", "diagram", "exercise", "summary")
- **content**: string (the actual content in MDX format)
- **topic_id**: string (reference to parent topic)
- **order**: number (sequence within the topic)
- **metadata**: object (language for code blocks, alt text for diagrams, etc.)

## User State Model

### User Progress Entity
- **user_id**: string (for static site, this will be a generated ID stored in localStorage)
- **module_progress**: object (key-value pairs of module_id: percentage)
- **topic_progress**: object (key-value pairs of topic_id: percentage)
- **last_accessed_topic**: string (id of last viewed topic)
- **total_time_spent**: number (in seconds)
- **completion_date**: date (when the user completed the module/book)

## Navigation Model

### Navigation Item Entity
- **id**: string (unique identifier)
- **title**: string (display title)
- **path**: string (URL path)
- **type**: enum ("module", "topic", "external")
- **parent_id**: string (optional, for nested navigation)
- **order**: number (display order)
- **completed**: boolean (user completion status)

## Configuration Model

### Theme Settings Entity
- **theme**: enum ("light", "dark")
- **font_size**: enum ("small", "medium", "large")
- **code_theme**: string (Prism.js theme name)
- **user_id**: string (reference to user for persistence)

## Diagram Placeholder Model

### Diagram Entity
- **id**: string (unique identifier)
- **title**: string (descriptive title)
- **description**: string (what the diagram should show)
- **topic_id**: string (reference to parent topic)
- **position**: number (order within topic)
- **status**: enum ("placeholder", "implemented", "pending")

## Implementation Notes

1. **Static Site Considerations**: Since this is a static site for GitHub Pages, user data will be stored in localStorage rather than a database.

2. **Content Relationships**: The content hierarchy is Module → Topic → Content Blocks, which aligns with Docusaurus's built-in structure.

3. **Progress Tracking**: Will use localStorage to persist user progress across sessions, with an option to export/import progress data.

4. **Content Flexibility**: The content block model allows for flexible content composition with different types of educational elements.

5. **Accessibility**: All models consider accessibility requirements, with metadata fields for alt text and ARIA attributes.