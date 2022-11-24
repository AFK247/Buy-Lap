import Blog from "./Blog";
import Home from "./Home";
import IndividualCat from "./IndividualCat";
import Login from "./Login";
import Main from "./Main";
import Register from "./Register";


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
            element: <IndividualCat></IndividualCat>,
            loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ]);

  export default router;