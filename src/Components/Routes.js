import AddProduct from "./AddProduct";
import Allbuyers from "./Allbuyers";
import Allsellers from "./Allsellers";
import Blog from "./Blog";
import Buyers from "./Buyers";
import Dashboard from "./Dashboard";
import DefaultDash from "./DefaultDash";
import ErrorRoute from "./ErrorRoute";
import Home from "./Home";
import IndividualCat from "./IndividualCat";
import Login from "./Login";
import Main from "./Main";
import PrivateRoute from "./PrivateRoute";
import Register from "./Register";
import Reported from "./Reported";
import Sellers from "./Sellers";
import UpdateLaptop from "./UpdateLaptop";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {

        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`https://buy-lap-server.vercel.app/advertise`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/category/:id',
        element: <PrivateRoute><IndividualCat></IndividualCat></PrivateRoute>,
        loader: ({ params }) => fetch(`https://buy-lap-server.vercel.app/category/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <DefaultDash></DefaultDash>
      },
      {
        path: '/dashboard/allbuyers',
        element: <Allbuyers></Allbuyers>
      },
      {
        path: '/dashboard/allsellers',
        element: <Allsellers></Allsellers>
      },
      {
        path: '/dashboard/reported',
        element: <Reported></Reported>
      },
      {
        path: '/dashboard/myProduct',
        element: <Sellers></Sellers>
      },
      {
        path: '/dashboard/updateLaptop/:id',
        element: <UpdateLaptop></UpdateLaptop>,
        loader: ({ params }) => fetch(`https://buy-lap-server.vercel.app/dashboard/updateLaptop/${params.id}`)
      },
      {
        path: '/dashboard/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/dashboard/buyers',
        element: <Buyers></Buyers>
      },
     
    ]
  },
  {
    path:"*",
    element: <ErrorRoute></ErrorRoute>
  }
]);

export default router;