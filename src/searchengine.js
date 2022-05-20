import React from "react";

export default function SearchEngine() {
  return (
    <form id="search-form" autocomplete="off" autofocus>
      <input
        id="search-input"
        type="text"
        placeholder="Search for your city"
        autofocus
      />
      <button id="button" type="submit">
        <i className="fa-solid fa-magnifying-glass" />
      </button>
    </form>
  );
}