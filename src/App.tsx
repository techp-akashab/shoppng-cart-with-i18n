import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar.tsx";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;