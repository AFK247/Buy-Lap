import Blog from "./Blog";
import Home from "./Home";
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
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ]);

  export default router;