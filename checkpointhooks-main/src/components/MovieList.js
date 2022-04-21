import React,{ useState }  from 'react'
import Filter from './Filter'


function MovieList({movies}) {



  return (
    <div>
        <div className="card" style={{width: "18rem",color:"black"}}>
        {movies.map((movies) =>

        <div className="card" style={{width: "18rem",color:"black"}}>
        <img className="card-img-top" src={movies.PosterURL} alt="movie"/>
        <div className="card-body">
        <h5 className="card-title">{movies.Title}</h5>
        <h5 className="card-id">{movies.id}</h5>
        <p className="card-text">{movies.Description}</p>
        <star>{movies.Raiting}</star>
        <br/>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div> 
    </div>  
          )}
    
      
    </div>
    </div>
  )
}

export default MovieList;