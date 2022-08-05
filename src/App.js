//import { useEffect , useState } from "react";

import { useState,useEffect} from 'react';
import './App.css';
import AnimeDisplay from './Components/AnimeDisplay';
import Navbar from "./Components/Navbar.js";
import Recommended from './Components/Recommended';


const anime = "naruto";
const URL = `https://api.jikan.moe/v4/anime?q=${anime}&order_by=mal_id&sort=desc&limit=5}`;
let JikanApi;


function App(){
    const [animeSearched, setanimeSearched] = useState("");
    const [animeList , setanimeList] = useState([]);
    

   

    function handleOnChange(e){
        setanimeSearched(e.target.value);
    }
    
    
    async function fetchAnime(search){
        let result = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&order_by=ranked&sort=asc&limit=5}`)
        .then( res => res.json());
        setanimeList(result.data);
    }

    function handleSearch(e){
        e.preventDefault();
        fetchAnime(animeSearched);
    }

    
    
    useEffect(()=>{
        console.log(animeList)
    },[animeList]
    ); 

    return (
    <div className="mainContainer container-sm">
    <Navbar 
     handleOnChange = {handleOnChange}
     animeSearched = {animeSearched}
     handleSearch = {handleSearch}
     />
     <AnimeDisplay animeList = {animeList}/>
    </div>
)
}


export default App;


