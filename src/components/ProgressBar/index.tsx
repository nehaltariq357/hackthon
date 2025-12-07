import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  className?: string;
  persist?: boolean; // Whether to persist progress in localStorage
  topicId?: string; // Topic ID for progress tracking
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  className = '',
  persist = true,
  topicId = 'current-topic'
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Load saved progress from localStorage if persist is true
    if (persist && topicId) {
      const savedProgress = localStorage.getItem(`progress-${topicId}`);
      if (savedProgress) {
        setProgress(parseFloat(savedProgress));
      }
    }

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(currentProgress);

      // Save progress to localStorage if persist is true
      if (persist && topicId) {
        localStorage.setItem(`progress-${topicId}`, currentProgress.toString());
      }
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress);
  }, [persist, topicId]);

  return (
    <div
      className={`progress-container ${className}`}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Page progress: ${Math.round(progress)}%`}
    >
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <span className="sr-only">
        Page progress: {Math.round(progress)}%
      </span>
    </div>
  );
};

export default ProgressBar;