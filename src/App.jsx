import "./App.css"
import React from 'react'
import MovieCard from "./components/MovieCard"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Favourite from "./pages/Favourite"
import { Route, Routes } from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext"


const App = () => {
  return (
    <MovieProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/favourite" element = {<Favourite/>}/>
    </Routes>
 

      
    </MovieProvider>
  )
}

export default App
