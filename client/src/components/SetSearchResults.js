import React from 'react';
import setImage from '../assets/img/lego-image-space-set.jpg';
import SetSearchForm from './SetSearchForm';



function SetSearchResults({ set }) {
  return (
    <>
    <h2>Results:</h2>
      <div className='col-4 lego-set-item'>
        <div className="card">
          <img className="card-img-top" src={set.Image_Url} alt="{set.Name}" />
          <div className="card-body">
            <div className="card-title h3"><span>Set: </span>{set.Item_Number}</div>
            <ul className="lego-set-details">
              <li className="card-text">{set.Name}</li>
              <li className="card-text font-weight-bold"><span></span>{set.Year}</li>
              <li className="card-text"><span>Theme:</span> {set.Theme}</li>
              <li className="card-text"><span>Subtheme:</span> {set.Subtheme}</li>
              <li className="card-text"><span>Pieces:</span> {set.Pieces}</li>
              <li className="card-text"><span>Minifigs:</span> {set.Minifigures}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetSearchResults;