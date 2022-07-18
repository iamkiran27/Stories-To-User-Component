/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import BookDetails from "../../organisms/BookDetails";
import Header from "../../organisms/Header";
import SendToKindleModal from "../../organisms/SendToKindleModal";

const BookDetailsPage = () => {
  const [openKindleMoal, setopenKindleMoal] = useState(false);
  // when we navigate to this page get the id fron the route using useParams and send to the BookDetails page as props
  return (
    <div>
      <Header />
      <BookDetails id={1} />
      {/* send to kindle modal goes here */}
      {openKindleMoal && <SendToKindleModal handleModal={setopenKindleMoal} openModal={openKindleMoal}  />}
    </div>
  );
};

export default BookDetailsPage;
