import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../components/Home.css"
import {useNavigate} from "react-router-dom";
function Home(){
    const navigate=useNavigate();
    const homepage=()=>{
        navigate("/");
        localStorage.clear();

    }

    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <button onClick={homepage}>logout</button> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Home;