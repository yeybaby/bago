function AnimeDisplay(props){
    return(
        <div className="row d-flex">
            {props.animeList.map((anime)=>{
                return <>
                <div className='col-3' key = {anime.mal_id} >
                        <a href= {anime.url}>
                        <img src={anime.images.webp.large_image_url?anime.images.webp.large_image_url:anime.images.jpg.large_image_url}/>
                        <h5>{anime.title}</h5>
                        </a>
                </div>
                </>
            })}
        </div>
    )
}
export default AnimeDisplay;