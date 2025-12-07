import React from 'react';
import { FaImage } from 'react-icons/fa';

interface DiagramPlaceholderProps {
  title?: string;
  description?: string;
  width?: string;
  height?: string;
  className?: string;
}

const DiagramPlaceholder: React.FC<DiagramPlaceholderProps> = ({
  title = 'Diagram Placeholder',
  description = 'This is where a diagram will be displayed',
  width = '100%',
  height = '300px',
  className = ''
}) => {
  return (
    <div
      className={`diagram-placeholder ${className}`}
      style={{ width, height }}
    >
      <div className="diagram-placeholder-icon">
        <FaImage />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
        Diagram will be inserted here
      </p>
    </div>
  );
};

export default DiagramPlaceholder;