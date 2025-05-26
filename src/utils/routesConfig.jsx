import Home from "@pages/Home";
import Clubs from "@pages/clubs/Clubs";
import Dashboard from "@pages/dashboard/Dashboard";
import Error404 from "@pages/error/Error404";
import Events from "@pages/events/all/Events";
import Profile from "@pages/profile/Profile";
import Shop from "@pages/shop/Shop";
import Trending from "@pages/Trending";
import { lazy } from "react";
import { default as DonotRenderWhenLoggedIn } from "./Auth/DonotRenderWhenLoggedIn";

const SignIn = lazy(() => import("@pages/auth/SignIn"));
const SignUp = lazy(() => import("@pages/auth/SignUp"));

const ProtectedSignIn = DonotRenderWhenLoggedIn(SignIn);
const ProtectedSignUp = DonotRenderWhenLoggedIn(SignUp);

const routesConfig = [
  { path: "/", element: <Home /> },
  /*{
    path: "/auth/signup",
    element: <ProtectedSignUp />,
  },
  {
    path: "/auth/signin",
    element: <ProtectedSignIn />,
  },*/
  { path: "/user/:userName", element: <Profile /> },
  { path: "/clubs", element: <Clubs /> },
  { path: "/club/:userName", element: <Profile /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/events", element: <Events /> },
  { path: "/shop", element: <Shop /> },
  { path: "/trending", element: <Trending /> },
  { path: "*", element: <Error404 /> },
];

export default routesConfig;
