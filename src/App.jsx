import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages

import MainPage from "./pages/main-page/MainPage.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import NotFound from "./pages/NotFound.jsx";

//roots
import RootLayout from "./layouts/RootLayout.jsx";
import { BlogDetailsLoader } from "./pages/BlogDetails.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<MainPage />} />
        <Route path="articles" element={<MainPage />} />
        <Route
          path="articles/:slug"
          element={<BlogDetails />}
          loader={BlogDetailsLoader}
          errorElement={<NotFound />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
