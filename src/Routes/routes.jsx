import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Components/Home/Home";
import ServiceDetails from "../Components/Home/ServiceDetails";
import Login from "../Autentication/Login";
import Signup from "../Autentication/Signup";
import AddReview from "../Components/Home/AddReview";
import PrivetRoute from "../Autentication/PrivateRoute/PrivetRoute";
import MyReview from "../Components/Home/MyReview";
import SingleReview from "../Components/Home/SingleReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/my-review", element: <MyReview></MyReview> },
      {
        path: "/service/review/:id",
        element: <SingleReview></SingleReview>,
        loader: ({ params }) =>
          fetch(`https://new-review-server.vercel.app/${params.id}`),
      },
      {
        path: "/add-review/:id",
        element: (
          <PrivetRoute>
            <AddReview></AddReview>
          </PrivetRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://new-review-server.vercel.app/service/${params.id}?${params.email}`
          );
        },
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => {
          return fetch(
            `https://new-review-server.vercel.app/service/${params.id}`
          );
        },
      },
    ],
  },
]);
