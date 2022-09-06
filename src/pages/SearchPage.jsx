import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import "../pages/SearchPage.css";
import response from "../response";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  //live api
  const { data } = useGoogleSearch(term);

// mock api
//   const data = response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          ></img>
        </Link>
        <div className="searchPage__header--body">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__options--left">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/images">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage__options--right">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__result--count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map(item =>(
            <div className="searchPage__result">
                <a href={item.link}>
                    {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                        <img className="searchPage__result--img" src={item.pagemap?.cse_image[0].src} alt="" />
                    )}
                {item.displayLink} ▽
                </a>
                <a href={item.link} className="searchPage__result--title">
                    <h2>{item.title}</h2>
                </a>
                <p className="searchPage__result--snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
