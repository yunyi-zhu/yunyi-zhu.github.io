import React from 'react';
import researchProjects from '../../data/research_projects.json';
import ResearchPreview from './research_preview.js';

const myWork = researchProjects.filter((research) => research.featured);
const additionalPublications = researchProjects.filter((research) => !research.featured);

const Research = () => (
  <div className="research-section">
    <div className="section-title">
      Publications in My Topic
    </div>
    <div>
      {myWork.map((research) =>
        <ResearchPreview key={research.id} research={research}
        />)}
    </div>
    <div className="section-title">
      Additional Publications
    </div>
    <div className="additional-publications">
      {additionalPublications.map((research) =>
        <ResearchPreview key={research.id} research={research}
        />)}
    </div>
  </div>
);


export default Research;
