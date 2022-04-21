import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';

function Filter(props) {
  const [raiting, setRaiting] = useState(1);

  const [search, setSearch] = useState("");

//functions setstate

  const onStarClick = (nextValue, prevValue, name) =>{
    setRaiting(nextValue);
      props.raiting(nextValue); 
    };
  const onStarHover = (nextValue, prevValue, name)=>{
    setRaiting(nextValue);
      props.raiting(nextValue); 
    }

  return (
    <div>
        Search: <input type="text" placeholder='Search' onChange = {e => {props.handleFilter(e.target.value)
          props.search(e.target.value)}
          }/>
        <br/>
        <StarRatingComponent value={raiting} starCount={5}  name="rate1" onStarClick={onStarClick} onStarHover={onStarHover}/>
    </div>
  )
}

export default Filter;