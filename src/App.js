import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Place } from "./components/Place";
// import { Poruct } from "./components/Poruct";
import { BookingHeader } from "./components/BookingHeader";
import { BookingFooter } from "./components/BookingFooter";
import { Booking } from "./components/Booking";

import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};
const BookingLayout = () => {
  return (
    <div>
      <BookingHeader />
      <ScrollRestoration />
      <Outlet />
      <BookingFooter />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/stays/:id",
        element: <Place />,
      },
      // {
      //   path: "/search/:id",
      //   element: <Sear />,
      // },
    ],
  },
  {
    path: "/",
    element: <BookingLayout />,
    children: [
      {
        path: "/book/:id",
        element: <Booking />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
