import { useState } from "react";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";
import {Outlet} from 'react-router-dom';


function App() {
  // const [count, setCount] = useState(0)
  const currentPage = useLocation().pathname;


  return (
    <div>
      <Header />
      <Outlet />

    </div>
  );
}

export default App;
