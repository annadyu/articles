import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

//pages

import MainPage from "./pages/main-page/MainPage.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProfileEditing from "./pages/ProfileEditing.jsx";
import SignIn from "./pages/login-pages/SignIn.jsx";
import SignUp from "./pages/login-pages/SignUp.jsx";
//roots
import RootLayout from "./layouts/RootLayout.jsx";
import { BlogDetailsLoader } from "./pages/BlogDetails.jsx";
import PrivateRoute from "./layouts/PrivateRoute.jsx";
function App() {
  const [articles, setArticles] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={<MainPage articles={articles} setArticles={setArticles} />}
        />
        <Route
          path="articles"
          element={<MainPage articles={articles} setArticles={setArticles} />}
        />
        <Route element={<PrivateRoute/>}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route
          path="articles/:slug"
          element={<BlogDetails />}
          loader={BlogDetailsLoader}
          errorElement={<NotFound />}
        />
        <Route path="profile" element={<ProfileEditing />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
