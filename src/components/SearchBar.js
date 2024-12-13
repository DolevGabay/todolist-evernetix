import React from 'react';

const SearchBar = ({ showSearch, setShowSearch, searchQuery, setSearchQuery }) => {
  return (
    <>
      <button
        className="btn btn-secondary d-flex align-items-center"
        onClick={() => setShowSearch(!showSearch)}
      >
        <i className="bi bi-search"></i>
      </button>
      {showSearch && (
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search todos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}
    </>
  );
};

export default SearchBar;
