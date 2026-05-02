import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <CustomFooter/>
    </>
  );
}

export default App;
