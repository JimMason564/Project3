import React from 'react';

const savedSet = ({ 
  sets,
  _id,
  Item_Number,
  Name,
  Year,
  Theme,
  Subtheme,
  Pieces,
  Minifigures,
  Image_URL
}) => {
    if (!sets.length) {
        return <h3>No Saved Sets Yet</h3>;
    }


  return (
    <>
      {sets &&
      sets.map((set) => (
        <div key={set._id} className="col-4 lego-set-item">
          <div className="card">
            <img className='card-img-top' src={set.Image_URL} alt='{set.Name}'/>
            <div className="card-body">
              <div className='card-title h3'>
                <ul className='lego-set-details'>
                  <li className='card-text'></li>
                  <li className='card-text'><span></span></li>
                  <li className='card-text'><span></span></li>
                  <li className='card-text'><span></span></li>
                  <li className='card-text'><span></span></li>
                  <li className='card-text'><span></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default savedSet;
