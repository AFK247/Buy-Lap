import AddProduct from "./AddProduct";
import AllUsers from "./AllUsers";
import Blog from "./Blog";
import Buyers from "./Buyers";
import Dashboard from "./Dashboard";
import Home from "./Home";
import IndividualCat from "./IndividualCat";
import Login from "./Login";
import Main from "./Main";
import PrivateRoute from "./PrivateRoute";
import Register from "./Register";
import Sellers from "./Sellers";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element: <Home></Home>
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
            loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
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
              path: '/dashboard/admin',
              element: <AllUsers></AllUsers>
          },
          { 
              path: '/dashboard/myProduct',
              element: <Sellers></Sellers>
          },
          { 
            path: '/dashboard/addProduct',
            element: <AddProduct></AddProduct>
        },
          // },
          // {
          //     path: '/dashboard/adddoctor',
          //     element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
          // },
          // {
          //     path: '/dashboard/managedoctors',
          //     element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
          // },
      ]
  }
  ]);

  export default router;