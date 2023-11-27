import React, { useEffect, useState } from "react";
import Service from "./Service";
import Slider from "./Slider";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Home = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [load, setLoad] = useState(3);
  useEffect(() => {
    fetch(`https://new-review-server.vercel.app/service?load=${load}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
        setCount(data.count);
        console.log(data);
      });
  }, [load]);
  return (
    <div className=" min-h-screen w-5/6 mx-auto bg-indigo-300 p-2">
      <div>
        <Slider services={services}></Slider>
      </div>
      <div>
        <div className="lg:pl-7  mx-auto grid lg:grid-cols-3 justify-center border py-5">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
        <div className="mt-2 flex justify-center">
          {load == 3 ? (
            <button onClick={() => setLoad(6)} className="btn bg-yellow-400">
              See all
            </button>
          ) : (
            <button onClick={() => setLoad(3)} className="btn bg-yellow-400">
              See Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
