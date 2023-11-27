import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Service = ({ service }) => {
  const { img, name, description, price, rating } = service;
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="mb-2">
      <div className="card w-[300px] bg-base-100 shadow-xl">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="Shoes" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}

            <div className="badge badge-secondary">${price}</div>
          </h2>
          <div>
            {" "}
            <p> {description.slice(0, 100)}</p>{" "}
          </div>
          <div className="card-actions ">
            <div className="badge badge-outline">Rating: {rating}</div>
          </div>
        </div>
        <div className="flex justify-center p-2">
          <Link to={`/service/${service._id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
