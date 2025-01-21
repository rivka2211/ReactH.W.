import { Link } from "react-router-dom"

const NavBar = () => {
    return (<>
        {/* <h1>NavBar </h1> */}
        {/* <h2>nav bar</h2> */}
        <nav>
        <Link to='/'>Home</Link> |
        <Link to='/about'>About</Link> |
        <Link to='/recipes'>Recipes</Link>
        </nav>
    </>)
}

export default NavBar