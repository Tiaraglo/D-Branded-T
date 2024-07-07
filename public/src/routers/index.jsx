import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import BaseLayout from "../views/BaseLayout";
import Detail from "../views/Detail";
import AboutUs from '../components/AboutUs'

const url = 'https://server.yoelk20.tech/'

const router = createBrowserRouter([
  {
    // path: "/",
    // element: <HomePage url={url}/>,
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <HomePage url={url}/>
      },
      {
        path: '/about',
        element: <AboutUs/>
      },
      {
        path: '/detail/:id',
        element: <Detail/>
      }
    ]
  },
]);

export default router

