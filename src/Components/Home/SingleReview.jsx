import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const SingleReview = () => {
  const reviewData = useLoaderData();
  console.log(reviewData);
  return <div>this is revi</div>;
};

export default SingleReview;
