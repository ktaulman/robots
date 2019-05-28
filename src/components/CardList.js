import React from 'react';
import Card from './Card';


const CardList=({robots})=>{
    //Map for each el + use [i] of el to go through list 
    const cardComponent = robots.map((el,i)=>{
        return(
            <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
            company={robots[i].company.name}
            />
        )

    });
    //return is easily written with cardComponents which is single line for all nine elements. 
    
    return(
    <div>
        {cardComponent}
    </div>
);
}

export default CardList