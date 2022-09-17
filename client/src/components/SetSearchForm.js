import React, {useState} from 'react';
import SetSearchResults from './SetSearchResults';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_SET } from '../utils/queries';

const SetSearchForm = () => {
  const [searchInput, setSearchInput]= useState("")
  const [ getSet, {loading, data, error} ] = useLazyQuery(GET_SET)



   const handleFormSubmit = async (event) => {
       event.preventDefault();

      if (!searchInput) {
          return false;
      }
      console.log(searchInput)  //correct
      getSet({
        variables: {Name: searchInput}
      })
      console.log(data)
      const set = data?.set || []
      console.log(set)
      setSearchInput("")
   };




  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div className="col-md-8 col-12">
            <input name="searchInput"
              placeholder="Search for a set"
              type="text"
              className="form-control form-control-lg"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              />
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