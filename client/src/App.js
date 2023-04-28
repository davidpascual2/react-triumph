
import Carousel from './components/navbar/Navbar2';
import Navbar from './components/container1/carousel/Carousel';
import Home from './pages/home/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./index.css"
import Navbar2 from './components/navbar/Navbar2';


const Layout = () => {
//=========================
  return(
    <>
    <Navbar2 />
    {/* <Carousel /> */}
    <Outlet />
    </>

  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      // {
      //   path:'/',
      //   element:<Home />
      // },
    ]
  }
]);

function App() {

//========================================
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
