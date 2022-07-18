/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import BookList from "../../organisms/BookList";
import Header from "../../organisms/Header";

const BookListPage = () => {
  const [bookListData, setbookListData] = useState([]);

  useEffect(() => {
    // make api call to get book list and send to the BookList component as props
  }, []);

  return (
    <div>
      <Header />
      {/* explore more component goes here when the explore action is enabled */}
      
      <BookList data={bookListData} />
    </div>
  );
};

export default BookListPage;
