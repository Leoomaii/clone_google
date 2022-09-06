// 718acc968312b46b9
import { useState, useEffect } from "react";
import React from "react";
// import API_KEY from "./keys";

// const CONTEXT_KEY = "718acc968312b46b9";
const API_KEY = process.env.REACT_APP_API_KEY;
const CONTEXT_KEY = process.env.REACT_APP_CONTEXT_KEY



const useGoogleSearch = (term) => {
  console.log(API_KEY)
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
