import React from 'react';

function SetSearchForm() {
  return (
    <>
      <form onSubmit="{handleFormSubmit}">
        <div className="form-row">
          <div className="col-md-8 col-12">
            <input name="searchInput"
              placeholder="Search for a set"
              type="text"
              className="form-control form-control-lg"
              value="{searchInput}"
              onChange="{(e) => setSearchInput(e.target.value)}"
              ></input>
          </div>
          <div class="col-md-4 col-12">
            <button type="submit" className="btn btn-blue mt-3">Submit Search</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SetSearchForm;