import axios from "axios";
import { useEffect, useState } from "react";
import '../Styles/Movies.css'

const Movies = () => {
    const [data, setData] = useState([])
    const [pending, setPending] = useState(true)



    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:1000/entries');
            let resData = await response.json();
            let sampledata = resData;
            sampledata = sampledata.filter((val)=>{ return val.programType=="movie"})
            for (let i = 0; i < sampledata.length; i++) 
            {
                for (let j = i; j < sampledata.length; j++) 
                {
                    if(sampledata[i].title > sampledata[j].title)
                    {
                        let temp = sampledata[i];
                        sampledata[i] = sampledata[j];
                        sampledata[j] = temp;
                    }                   
                }
            }
            setData(sampledata);
            setPending(false)

        }
        fetchData();
    },[])

    return (
        <div className="lines">
            <div className="head">
                <h1>Popular Movies</h1>
            </div>
            {
                    pending && <h1>loading.....</h1>}
            <div className="up1" >
                
                {
                    
                    data.map(item => {
                      
                            return <div className="up" >
                                {
                                <div>
                                     <img src={item.images.post.url} alt="" />
                                     <p>{item.title}</p>
                                </div>
            
                                }
                               
                            </div>
                    })

                }
            </div>



        </div>
    );
}

export default Movies;