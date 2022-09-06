import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = (event) => {
    event.preventDefault();
    console.log("search button clicked");

    //dispatches search term into data layer
    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
    })
    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon onClick={search} className="search__input--icon" />
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>
        <MicIcon className="no-cursor"/>
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined" className="no-cursor">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="btn__hidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="btn__hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
