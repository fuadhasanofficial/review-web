import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const { name, _id, img } = useLoaderData();
  const notify = () => {
    return toast.success("Your review is added ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleReview = (e) => {
    e.preventDefault();
    const select = e.target.select.value;
    const text = e.target.text.value;

    const review = {
      name: user?.displayName,
      item: name,
      email: user?.email,
      comment: select,
      details: text,
      img: user.photoURL,
    };
    const userReview = {
      itemId: _id,
      name: user?.displayName,
      item: name,
      itemImg: img,
      email: user?.email,
      comment: select,
      details: text,
      img: user.photoURL,
    };
    fetch(`https://new-review-server.vercel.app/all-review`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    fetch(`https://new-review-server.vercel.app/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });
    e.target.reset();
    notify();
    console.log("joybangla");
  };
  return (
    <div className="min-h-screen w-5/6 mx-auto">
      <h2 className="text-center lg:text-2xl">
        Give your Feadback about {name}
      </h2>
      <form
        onSubmit={handleReview}
        className=" mx-auto bg-green-300 lg:w-1/2 p-5 rounded-md"
      >
        <div className="">
          <div className="flex justify-center">
            <select
              name="select"
              className="select select-primary w-full max-w-xs mx-auto"
              defaultValue="Slect your Review"
            >
              <option disabled selected>
                Slect your Review
              </option>
              <option value="Good">Good</option>
              <option value="Very Good">Very Good</option>
              <option value="Excellent">Excellent </option>
              <option value="Not so good">Not so good</option>
              <option value="Bad">Bad</option>
            </select>{" "}
          </div>
          <br />
          <div className="flex justify-center">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Write Your Review"
              name="text"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <input className="btn bg-yellow-400" type="submit" value="Submit" />
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AddReview;
