/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import BlinklistThumbnails from "../../atoms/BlinklistThumbnails";
import Typography from "../../atoms/Typography";
import SearchedBooks from "../../molecules/SearchedBooks";
import SearchWithIcon from "../../molecules/SearchWithIcon";
import Header from "../../organisms/Header";

const BookSearchPage = () => {

    const [searchedValue, setsearchedValue] = useState("")

    const [searchedBooks, setsearchedBooks] = useState([])

const     handleGetSearchBooks = () => {
    // make api call to get the searched book results books/{searchValue} and store the result in searchedBooks state 

    }


  return (
    <div>
      <Header />
      <BlinklistThumbnails image={""} />
      <Typography />
      <SearchWithIcon setsearchedValue={setsearchedValue} value={searchedValue}/>

      <SearchedBooks  searchedBooks={searchedBooks}/>
    </div>
  );
};

export default BookSearchPage;
