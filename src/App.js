import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Gigs from "./components/gigs/Gigs";
import NewGig from "./components/gigs/NewGig";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-2">
            <SideBar />
          </div>

          <div
            className="col-sm-12 col-lg-10 page-view-div"
            style={{ backgroungColor: "#FBFBFF", opacity: "1" }}
          >
            <header>
              <NavBar />
            </header>
            <main>
               <Route path="/"  exact component={Gigs}></Route>
              <Route path="/gigs" component={Gigs}></Route>
              <Route path="/newgig" component={NewGig}></Route>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
