import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./header.css";

export default function Header() {
  return (
    <div className='header'>
      <div className='content'>
        <h1>Find the perfect place</h1>
        <p className='search-text'>
          {" "}
          Search the largest selection of luxury high-rise apartments,
          multi-family homes, and luxury homes.{" "}
        </p>
        <form className='search'>
          <div>
            <input type='text' placeholder='Enter Keyword..' />
          </div>
          <button type='submit'>
            <AiOutlineSearch className='icon' />
          </button>
        </form>
      </div>
    </div>
  );
}
