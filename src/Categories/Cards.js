import React from 'react';
import Categories from './Categories';
import Catdata from './CatData';



const Card = (props) =>{
    
    return(
        <>
        {/* <Categories img={Catdata[0].img} title={Catdata[0].title} description={Catdata[0].description}/>
        <Categories img={Catdata[1].img} title={Catdata[1].title} description={Catdata[1].description}/>
        <Categories img={Catdata[2].img} title={Catdata[2].title} description={Catdata[2].description} /> */}
         <h1 style={{textAlign:'center',textDecoration:'underline'}}>Gallery</h1>
            <br/>
       { Catdata.map( (val)=>{
           return (
        <div style={{display:"inline-block",padding:"105px"}}>

            <Categories img={val.img} style={{paddingLeft:'20px'}}
            title={val.title} 
            description={val.description}/>
       </div>

           )
       })}
        </>
    )
    
};

export default Card;