import React from 'react';
import './Card.css'

const Card =({name,email,id,company}) => {//must use ({}) vs. () b/c Objects aren't valid in React.
    
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p className="f4 bb">{company}</p>
            </div>
        </div>

    )

}

export default Card;