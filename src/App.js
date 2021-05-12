import React from "react";
import Header from "./Components/Profile/Header";
import Footer from "./Components/Profile/Footer";
import Profile from "./Components/Profile/Profile";
function App() {
  const handleName = (fullName) => {
    alert(`${fullName}`);
  };
  return (
    <>
      <header id="home">
        <Header />
      </header>
      <div style={{ margin: "150px 100px", fontSize: "1.2rem" }}>
        <h1>Self-Profile </h1>
        <Profile
          fullName={`dalila Chouaya`}

          bio = {` -- FullName : Dalila CHOUAYA 
                  -- Age : 28 years old
                  -- Gender : Female 
                  `}

          profession={`I am currently a student at GO My Code Academy,Electronics Engineer is looking for a new opportunity as a software Developper
          ,C/C++ development engineer or embedded engineer.`}
          handleName={handleName}
        >
          <img src="../images/myimg.jpg" className="mr-3" alt="myphoto" style={{width:"150px" ,borderRadius:"30px"}}/>
        </Profile>
        <br />
      </div>
      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
}
export default App;
