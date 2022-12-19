import {Link} from "react-router-dom"
import "../Styles/Home.css";

const Home = () => {
    return ( 
        <div className="hom">
            <h1>Popular Tiles</h1>
            
            <div className="home" >
            <div className="movie">
            <h2 className="title-head" >Movies</h2>
            <Link to="/Movies"><img src="https://m.media-amazon.com/images/I/91-cYiUkB1L._SL1500_.jpg" alt="" style={{height: 250,width:400}} /></Link>
           
          
            </div>
        
            <div className="series">
            <h2 className="title-head" >Series</h2>
            <Link to="/Series"><img src="https://www.mastergyanhindi.com/wp-content/uploads/2019/09/hollywood-hindi-web-series-download.jpg" alt="" style={{height: 250,width:400}}  /></Link>
            </div>
            </div>
            

        </div>
     );
}
 
export default Home;