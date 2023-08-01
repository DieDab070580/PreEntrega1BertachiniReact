import  Logovenier  from "../img/Logovenier.png"

function NavBar () {
  return (
    <header>
        <a href="#">
            <div className="logo">
                <img src= {Logovenier} alt="logo" width="150"/>
            </div>
        </a>
        <ul>
            <li>
                <a href="#">INICIO</a>
            </li>
            <li>
                <a href="#">NOSOTROS</a>
            </li>
            <li>
                <a href="#">PRODUCTOS</a>
            </li>
            <li>
                <a href="#">CONTACTO</a>
            </li>
        </ul>
        <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item_total">0</span>
        </div>
        
    </header>
        )
}

export default NavBar;