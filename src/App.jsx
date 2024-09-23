

import { Outlet } from "react-router-dom";
import Tab from "./Components/Tab";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      {/* Include the Tab.jsx (Navbar) at the top */}
      <Tab />
      {/* Outlet will render the component for the current route */}
      <div className="p-4">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default App;
