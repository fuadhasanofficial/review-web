import React, { useContext, useEffect, useState } from "react";
import Service from "./Service";
import ReviewService from "./ReviewService";
import { AuthContext } from "../../Context/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [services, setServices] = useState([]);
  const [deleteCount, setDeleteCount] = useState(0);
  const handleDelete = (id) => {
    fetch(`https://new-review-server.vercel.app/delete-review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setDeleteCount(data.deletedCount));
  };

  useEffect(() => {
    fetch(`https://new-review-server.vercel.app/my-review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);

        console.log(data);
      });
  }, [user, deleteCount]);

  return (
    <div>
      <div className=" min-h-screen w-5/6 mx-auto bg-indigo-300 p-2">
        <div>
          <h2 className="text-center"> see your reviews</h2>
          <div className="lg:pl-7  mx-auto grid lg:grid-cols-3 justify-center border py-5">
            {services.map((service) => (
              <ReviewService
                key={service._id}
                service={service}
                handleDelete={handleDelete}
              ></ReviewService>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
