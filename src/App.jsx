import React, { useState, useTransition } from "react";
import Home from "./components.jsx/Home";
import Posts from "./components.jsx/Posts";
import Navbar from "./components.jsx/Navbar";
import Signin from "./components.jsx/Signin";
import Overlay from "./components.jsx/Overlay";
import { AiOutlineCloseCircle } from "react-icons/ai";

function App() {
  const [signin, setSignin] = useState(false);

  function handleClick() {
    setSignin(true);
  }
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {signin && (
        <Overlay>
            <Signin onRemoveSignin={()=>setSignin(false)} signin={signin} />
        </Overlay>
      )}

      <main>
        <Navbar signin={signin} onCreateAccount={handleClick} />
        <Home />
        <Posts />
      </main>
    </div>
  );
}

export default App;
