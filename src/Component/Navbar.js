import "../Styles/Navbar.css";
import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <div className="navbar">
     <div className="demo">
      <h1>DEMO Streaming</h1>
     </div>
     <div className="login">
      <Link to="/"  style={{color:"black"}} >HOME</Link>
      <a href="">Log in</a>
      <button>Start Your Free Trail</button>
     </div>

        </div>
     );
}
 
export default Navbar;