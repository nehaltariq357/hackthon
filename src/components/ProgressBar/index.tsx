import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ className = '' }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className={`progress-container ${className}`}>
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;