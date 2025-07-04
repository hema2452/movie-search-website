import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"

import { searchMovies,getPopularMovies} from "../services/api";
const Home = () => {
  // const data = [
  //   { id: 1, title: "Kub", year: 2020, img: "img" },
  //   { id: 2, title: "pub", year: 2021, img: "img" },
  //   { id: 3, title: "chub", year: 2022, img: "img" },
  // ];
  
  const [inputValue , setInputValue] = useState("")
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadsPopularMovies = async() =>{
      try{
        const popularMovies = await getPopularMovies()
        setData(popularMovies)
        
      }
      catch(err){
        console.log(err)
        setError("failed to load movies")

      }
      // to store any potential error
      
      finally{
        setLoading(false)

      }
      // to store the loading state
    }
    loadsPopularMovies()
     console.log(data)
  }, [])
  
  const handleForm = async (e) => {
    e.preventDefault();
    if(!inputValue.trim()) return
    if(loading) return
    setLoading(true)
    try{
      const searchResults = await searchMovies(inputValue)
      // !searchResults?setData(searchResults):setData("")
      setData(searchResults)
      // setError(null)
      console.log(searchResults)

    }
    catch(err){
      console.log(err)
      setError("Failed to search movies...")

    }
    finally{
      setLoading(false)
    }
  }
  return <div>
    <form onSubmit={handleForm}>
        <input type="text" placeholder="Search for a movie" onChange={(a) => setInputValue(a.target.value)}  value={inputValue}/>
        <button type="submit">Search</button>
    </form>
    {error && <h1>Failed to load</h1>}
    {loading ? <h1>Loading</h1> : data.map((element) => {
        return(
            element.title.toLowerCase().startsWith(inputValue) && <MovieCard movie={element} key={element.id}/>
        )
    })}
  </div>;
};

export default Home;
