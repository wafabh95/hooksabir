import React, {useState, useEffect} from 'react';
import './App.css';
import MovieList from './components/MovieList'
import Add from './components/Add'
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';
import Joker from './components/images/Joker.jpg'
import TheAvengers from './components/images/TheAvengers.jpg'
import Parasite from './components/images/Parasite.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [search, setSearch] = useState("");
  const [raiting, setRaiting] = useState(1);
  const [filter,setFilter] = useState("")
  
  const [movieList, setMovieList] = useState([
    {
        id: uuidv4(),
        Title: "Joker",
        Description: "American psychological thriller that is set in 1981 Gotham City" ,
        PosterURL:Joker,
         Raiting: "4"
    },
    {
        id: uuidv4(),
        Title:"TheAvengers",
        Description:  '  A drift in space with no food or water' ,
        PosterURL: TheAvengers,
        Raiting: "3"
    },
    {
        id: uuidv4(),
        Title:"Parasite",
        Description: " South Korean dark comedy thriller " ,
        PosterURL: Parasite,
        Raiting: "4"
    }
    ])
    
    const addMovie=(newMovie) => {
      setMovieList([...movieList,newMovie])
      };
      const handleFilter=(val)=>{
        setFilter(val)
      }


  const getSearch = (valueSearch)=>{
    setSearch(valueSearch)
  };
  const getRaiting = (raiting) =>{
     setRaiting(raiting) 
  }
  console.log(raiting,movieList.filter(el=>el.Raiting))
  return (
    <div className="App">

      <header className="App-header">
     
   
      <Filter raiting={(raiting)=>getRaiting(raiting)} search={search => getSearch(search)} filter={handleFilter}/>
      <div className='row'>
        
      <MovieList movies={movieList.filter((elm=>(elm.Title.toUpperCase().includes(filter.toUpperCase())) && ((elm.Raiting)==(raiting))))} ></MovieList>
      <Add addMovie={addMovie}/>
      
      </div>
      </header>
    </div>
  );
}

export default App;
