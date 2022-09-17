import React from 'react';
import setImage from '../assets/img/lego-image-space-set.jpg';

function SetSearchResults({ set }) {
  return (
    <>
    <h2>Results:</h2>
      <div className='col-4 lego-set-item'>
        <div className="card">
          <img className="card-img-top" src={set.image_url} alt="{set.Name}" />
          <div className="card-body">
            <div className="card-title h3"><span>Set: </span>{set.item_number}</div>
            <ul className="lego-set-details">
              <li className="card-text">{set.setName}</li>
              <li className="card-text font-weight-bold"><span></span>{set.year}</li>
              <li className="card-text"><span>Theme:</span> {set.theme}</li>
              <li className="card-text"><span>Subtheme:</span> {set.subtheme}</li>
              <li className="card-text"><span>Pieces:</span> {set.pieces}</li>
              <li className="card-text"><span>Minifigs:</span> {set.minifigures}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetSearchResults;