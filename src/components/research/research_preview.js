import React from 'react';

const Research = ({research}) => (
    <div className="publication_preview">
      <div className="thumbnail">
        {research.thumbnail
          ? <img src={require("../../data/research_thumbnails/" + research.thumbnail) } />
          : <div className="thumbnail-placeholder">Coming soon</div>}
      </div>
      <div className="descriptions">
        <div>
          <div className="title">
            {research.title}
          </div>
          {!!research.authors &&
          <div className="author">
            <div dangerouslySetInnerHTML={ { __html: research.authors } }></div>
          </div>}
          {!!research.conference &&
          <div className="conference">
            in <div>{research.conference}</div>
          </div>}
          <div className="description">
            {research.description}
          </div>
        </div>
        <div className="links">
          {!!research.doi && <a href={research.doi} target="_blank">DOI</a>}
          {!!research.pdf && <a href={research.pdf} target="_blank">PDF</a>}
          {!!research.video && <a href={research.video} target="_blank">Video</a>}
          {!!research.code && <a href={research.code} target="_blank">Code</a>}
          {!!research.slides && <a href={research.slides} target="_blank">Slides</a>}
          {!!research.projectPage && <a href={research.projectPage} target="_blank">Project Page</a>}
        </div>
      </div>
    </div>
  );


export default Research;
