import './style.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div><img className='logo' alt='logo' src='../images/logoTete.png'></img></div>
      <div>
        <ul className='categorias'>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Camisones</a>
          </li>
          <li>
            <a href="#">Pijamas</a>
          </li>
          <li>
            <a href="#">Ropa Interior</a>
          </li>
        </ul>
      </div>
      <div>
        <CartWidget/>
      </div>
    </div>
  )
}

export default NavBar