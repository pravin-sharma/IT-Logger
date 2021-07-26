import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';
import { useState } from 'react';

const SearchBar = ({searchLogs}) => {


  const onChange = (e) =>{
    searchLogs(e.target.value);
  }

  return (
  <nav className="blue" style={{marginBottom: "2rem"}}>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" placeholder='Search here...' onChange={onChange}/>
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
}

export default connect(null,{searchLogs})(SearchBar);