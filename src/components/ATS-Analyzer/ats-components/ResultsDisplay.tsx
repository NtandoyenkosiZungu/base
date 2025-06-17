import React from 'react';
import { AnalysisResult } from '../types';
import { CheckCircleIcon, XCircleIcon, LightBulbIcon, StarIcon } from './Icons';
import './styles/ResultsDisplay.css';

interface ResultsDisplayProps {
  result: AnalysisResult;
}

const ScoreCircle: React.FC<{ score: number }> = ({ score }) => {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (score / 100) * circumference;

  let strokeColor = "stroke-red";
  if (score >= 75) {
    strokeColor = "stroke-green";
  } else if (score >= 50) {
    strokeColor = "stroke-yellow";
  }

  return (
    <div className="score-circle-container">
      <svg className="score-svg" viewBox="0 0 100 100">
        <circle
          className="circle-bg"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
        />
        <circle
          className={`circle-progress ${strokeColor}`}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
      <div className="score-label">
        <span>{score}%</span>
      </div>
    </div>
  );
};

const ResultSection: React.FC<{
  title: string;
  items: string[];
  icon: React.ReactNode;
  itemIcon?: React.ReactNode;
  itemIconClass?: string;
  listType?: 'ul' | 'ol';
}> = ({ title, items, icon, itemIcon, itemIconClass = '', listType = 'ul' }) => {
  if (!items || items.length === 0) return null;

  const ListComponent = listType;

  return (
    <div className="result-section">
      <h3 className="result-title">
        {icon}
        {title}
      </h3>
      {items.length > 0 ? (
        <ListComponent className={`result-list ${listType}`}>
          {items.map((item, index) => (
            <li key={index} className="result-list-item">
              {itemIcon && <span className={`item-icon ${itemIconClass}`}>{itemIcon}</span>}
              <span>{item}</span>
            </li>
          ))}
        </ListComponent>
      ) : (
        <p className="result-fallback">No specific {title.toLowerCase()} identified.</p>
      )}
    </div>
  );
};

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  return (
    <div className="results-wrapper fade-in">
      <ScoreCircle score={result.matchScore} />

      <ResultSection
        title="Key Strengths"
        items={result.strengths}
        icon={<StarIcon className="icon icon-yellow" />}
        itemIcon={<CheckCircleIcon className="icon-small" />}
        itemIconClass="icon-green"
      />
      <ResultSection
        title="Missing Keywords & Skills"
        items={result.missingKeywords}
        icon={<XCircleIcon className="icon icon-red" />}
        itemIcon={<XCircleIcon className="icon-small" />}
        itemIconClass="icon-red"
      />
      <ResultSection
        title="Improvement Suggestions"
        items={result.suggestions}
        icon={<LightBulbIcon className="icon icon-blue" />}
        itemIcon={<LightBulbIcon className="icon-small" />}
        itemIconClass="icon-blue"
        listType="ol"
      />
    </div>
  );
};
