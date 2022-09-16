import React from 'react';
import setImage from '../assets/img/lego-image-space-set.jpg';

function SetSearchResults() {
  return (
    <>
      <div className='col-4 lego-set-item'>
        <div className="card">
          <img className="card-img-top" src={setImage} alt="{set.Name}" />
          <div className="card-body">
            <div className="card-title h3"><span>Set: </span>Set Number</div>
            <ul className="lego-set-details">
              <li className="card-text">Set Name</li>
              <li className="card-text font-weight-bold"><span></span>Set Year</li>
              <li className="card-text"><span>Theme:</span> Set Theme</li>
              <li className="card-text"><span>Subtheme:</span> Subtheme</li>
              <li className="card-text"><span>Pieces:</span> Pieces</li>
              <li className="card-text"><span>Minifigs:</span> Minifigures</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetSearchResults;