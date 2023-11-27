import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Review from "./Review";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { img, name, description, features, rating, _id } = service;

  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`https://new-review-server.vercel.app/service-review/${_id}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  console.log(service);
  return (
    <div className="w-full lg:w-5/6 mx-auto ">
      <div className="mx-auto card lg:w-3/4 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="text-start">{description}</p>
          <div className="text-start mt-5">
            {features.map((feature, idx) => (
              <p className="text-indigo-800 pb-3" key={idx}>
                {idx + 1}. {feature}
              </p>
            ))}
          </div>
          <div className="text-start w-full">
            <h2 className="text-start ">
              <span className="text-orange-600">Rating</span> {rating}
            </h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link className="btn btn-primary " to={`/add-review/${_id}`}>
          Add your Review
        </Link>
      </div>

      <div className="mx-auto bg-indigo-100 p-2 mt-5 rounded-md">
        <h2 className="text-center">Reviews</h2>
        <div>
          {review.map((r, idx) => (
            <Review key={idx} data={r}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
