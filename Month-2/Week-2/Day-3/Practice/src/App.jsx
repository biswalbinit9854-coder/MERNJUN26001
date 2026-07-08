import { createContext } from "react";
import "./App.css";
import Home from "./Home";
import Home2 from "./Home2";
import Count from "./Count";
import RegisterForm from "./RegisterForm";

//to create the object
const nameContext = createContext();
const themeContext = createContext();

function App() {
  return (
    <>
      {/* Add the provider to the object */}
      {/* Add the value to the provider */}
      <themeContext.Provider value={"red"}>
        <nameContext.Provider value={"Abhaya"}>
          <Home />
          <Home2 />
        </nameContext.Provider>
      </themeContext.Provider>

      <hr />
      <Count />
      <hr />
      <RegisterForm/>
    </>
  );
}

// export the context object
export { nameContext, themeContext };

export default App;
