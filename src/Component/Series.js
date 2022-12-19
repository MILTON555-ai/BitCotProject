import axios from "axios";
import { useEffect, useState } from "react";
import '../Styles/Series.css'

const Series = () => {
const[data,setData]=useState([])
const [pending, setPending] = useState(true)
    useEffect(()=>{
        let fetchData = async () => {
            let response = await fetch('http://localhost:1000/entries');
            let resData = await response.json();
            let sampledata = resData;
            sampledata = sampledata.filter((val)=>{ return val.programType=="series"})
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
            console.log(sampledata);
            setPending(false)

        }
        fetchData();
    })

    return ( 
        <div className="lines">
            <h1>Popular Series</h1>    
           <div className="up1" >
           {
                    pending && <h1>loading.....</h1>}

           {
               data.map(item=>{
                
                if(item.releaseYear >= 2010 && item.programType==='series'){
                    return <div className="up" >
                       
                    <img src={item.images.post.url} alt="" />
                     <p>{item.title}</p>
                    </div>
                }
               })
               
            }
           </div>
          


        </div>
     );
}
 
export default Series;