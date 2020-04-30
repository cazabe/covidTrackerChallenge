import React from "react";

const SearchBox = ({SearchChange}) => {
  return (
    <div className="container">
      <div className="input-group">
        <span className="input-group-addon">
          <i className="glyphicon glyphicon-search"></i>
        </span>
        <input
          type="search"
          placeholder="Buscar País"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default SearchBox
