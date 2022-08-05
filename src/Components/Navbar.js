

function Navbar(props){
return(
    <nav className="navbar">
    <a className="navbar-brand navbar-expand-sm"><h1><strong style = {{color:"yellow"}}>Anime</strong><span style={{color:"white"}}>Land</span></h1></a>
    <form onSubmit={props.handleSearch}>
        <input type = "text" value = {props.animeSearched} onChange = {props.handleOnChange} placeholder="Search an Anime..."></input>
        <input type = "image" src="https://th.bing.com/th/id/OIP.d1OQHfntl1GvN4pn8pfLawAAAA?w=196&h=180&c=7&r=0&o=5&pid=1.7" alt = "submit"/>
    </form>
    </nav>
)
}
export default Navbar;