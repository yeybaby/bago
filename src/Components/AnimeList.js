function AnimeList(props){

    return(
        <div className = "row">
         {props.animeList.map(()=>{
            <div className="col-3">
                {props.animeList.title}
                </div>
         })}
        </div>
    )
}

export default AnimeList;