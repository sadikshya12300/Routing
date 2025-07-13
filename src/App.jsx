// import './App.css'
// import Home from "./pages/home";
// import About from "./pages/about";
// import Navbar from "./components/navbar";

// function App() {
 

//   return (
//     <>
//       <h1 class='bg-amber-600'>Sadikshya</h1>
//     </>
//   )
// }

// export default App;


import './App.css'
 import Home from "./pages/home";
 import About from "./pages/about";
 import Navbar from "./components/navbar";
 import Contact from "./pages/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {

    path: "/contact",
    element: (
      <>
      
       <Navbar/>
       <Contact />
      </>
    ),
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
