import React from 'react';

const ContentSection = ({ heading, content }) => {
  return (
    <div className="content-section">
      <h1>{heading}</h1>
      {content}
    </div>
  );
};

export default ContentSection;
