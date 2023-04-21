
import Navbar from './components/container1/navbar/Navbar';
import Home from './pages/home/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


const Layout = () => {
//=========================
  return(
    <>
    {/* <Navbar /> */}
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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
