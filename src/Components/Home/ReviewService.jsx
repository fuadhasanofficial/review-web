import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { data } from "autoprefixer";

const ReviewService = ({ service, handleDelete }) => {
  const { user } = useContext(AuthContext);
  const { name, img, _id, item, comment, details, itemImg } = service;
  console.log(service);

  if (service === undefined) {
    return (
      <div className="flex justify-center">
        <div>
          <span className="text-center loading loading-bars loading-lg"></span>
        </div>
      </div>
    );
  }
  return (
    <div className="mb-2">
      <div className="card w-[300px] bg-base-100 shadow-xl">
        <figure>
          <img src={itemImg} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>Your weview about</p>
          <h2 className="card-title">{item}</h2>
        </div>
        <div className=" p-2">
          <p className="text-center">{comment}</p>
          <p className=" border-t-2">{details}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn bg-red-700 "
          >
            {" "}
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewService;
