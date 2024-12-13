import React from 'react';

const ProgressBar = ({ completed, total }) => {
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  // Determine the color class based on the progress percentage
  const getColorClass = (progress) => {
    if (progress <= 30) return 'bg-danger'; // Red
    if (progress <= 60) return 'bg-warning'; // Orange
    return 'bg-success'; // Green
  };

  return (
    <div className="progress mb-4" style={{ height: '20px' }}>
      <div
        className={`progress-bar ${getColorClass(progress)}`}
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
