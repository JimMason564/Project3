import React, {useState} from 'react';
import SetSearchResults from './SetSearchResults';
import { useQuery } from '@apollo/client';
import { GET_SET } from '../utils/queries';

const SetSearchForm = () => {
  const [searchInput, setSearchInput]= useState("")
  const { loading, data } = useQuery(GET_SET, {
    // pass URL parameter
    variables: { searchInput },
});

let searchName;
const set = data;
  // const handleFormSubmit = async (event) => {
  //     event.preventDefault();

  //     if (!searchInput) {
  //         return false;
  //     }
  //     try {
          
  //         if (loading) {
  //           return <h2>LOADING...</h2>;
  //         }
  //         const set = data?.set || [];
  //         setSearchInput('');
  //     } catch (err) {
  //         console.error(err);
  //     }
   
  // };

setSearchInput("")


  return (
    <>
      <form onSubmit={(e)=> {setSearchInput(searchName)}}>
        <div className="form-row">
          <div className="col-md-8 col-12">
            <input name="searchInput"
              placeholder="Search for a set"
              type="text"
              className="form-control form-control-lg"
              value={searchInput}
              onChange={(e) => searchName= e.target.value}
              ></input>
          </div>
          <div class="col-md-4 col-12">
            <button type="submit" className="btn btn-blue mt-3">Submit Search</button>
          </div>
        </div>
      </form>
      <div className='container mb-5 mb-153'>
                <div className="row d-flex">
                    
                    <SetSearchResults
                        set={set}
                    />
                </div>
            </div> 
    </>
  );
};

export default SetSearchForm;