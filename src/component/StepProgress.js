import React from "react";
import "./style/StepProgress.css";

const StepProgress = ({ steps, currentStep }) => {
  const progressPercentage = (currentStep / (steps.length - 1)) * 100;
  const stepWidthPercentage = 100 / (steps.length - 1);

  return (
    <div className="step-progress">
      <div className="progress-bar" style={{ width: `${progressPercentage}%` }}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index === currentStep ? "active" : ""}`}
            style={{ left: `${index * stepWidthPercentage}%` }}
          >
            <div className="step-icon">{step.icon}</div>
            <div className="step-name">{step.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepProgress;
