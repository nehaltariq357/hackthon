import React, { useEffect } from 'react';

interface ProgressTrackerProps {
  moduleId?: string; // Module ID for tracking
  topicId?: string; // Topic ID for tracking
  topicTitle?: string; // Topic title for display
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  moduleId = 'current-module',
  topicId = 'current-topic',
  topicTitle = 'Current Topic'
}) => {
  useEffect(() => {
    // Update module progress when topic is viewed
    if (moduleId && topicId) {
      // Get all topic progress for this module
      const moduleTopics = Object.keys(localStorage).filter(key =>
        key.startsWith(`progress-${moduleId}-`)
      );

      // Calculate module completion percentage
      let completedTopics = 0;
      moduleTopics.forEach(topicKey => {
        const progress = parseFloat(localStorage.getItem(topicKey) || '0');
        if (progress >= 90) { // Consider topic complete if 90% scrolled
          completedTopics++;
        }
      });

      const moduleProgress = moduleTopics.length > 0
        ? (completedTopics / moduleTopics.length) * 100
        : 0;

      // Save module progress
      localStorage.setItem(`module-progress-${moduleId}`, moduleProgress.toString());
    }
  }, [moduleId, topicId]);

  // Function to resume from last position
  const resumeFromLastPosition = () => {
    if (topicId) {
      const savedProgress = localStorage.getItem(`progress-${topicId}`);
      if (savedProgress) {
        const progress = parseFloat(savedProgress);
        // Calculate position based on progress and scroll to it
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = (progress / 100) * docHeight;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }
    }
  };

  // Check if user has a saved position for this topic
  const hasSavedPosition = topicId ?
    localStorage.getItem(`progress-${topicId}`) !== null : false;

  return (
    <div
      className="flex flex-col gap-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
      role="complementary"
      aria-label={`Progress tracking for ${topicTitle}`}
    >
      <h3 className="font-semibold" id="progress-tracker-title">
        Topic Progress
      </h3>
      {hasSavedPosition && (
        <button
          onClick={resumeFromLastPosition}
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm w-fit"
          aria-describedby="progress-tracker-title"
        >
          Resume from last position
        </button>
      )}
      <div
        className="text-sm text-gray-600 dark:text-gray-300"
        aria-label={`Tracking progress for: ${topicTitle}`}
      >
        Tracking progress for: {topicTitle}
      </div>
    </div>
  );
};

export default ProgressTracker;