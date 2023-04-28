
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
import Leaders from './components/container3/leaders/Leaders';
import About from './components/container2/about/About';
import Requests from './components/container4/requests/Requests';
import Footer from './components/footer/Footer';


const Layout = () => {
//=========================
  return(
    <>
    <Navbar2 />
    <Outlet />
    <Footer />
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
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/leaders',
        element:<Leaders />
      },
      {
        path:'/requests',
        element:<Requests />
      },
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
