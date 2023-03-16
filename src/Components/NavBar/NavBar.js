import './style.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
  
  return (
    <div className='nav-bar'>
      <div>
        <Link to={'/'}>
          <img className='logo' alt='TeteClothes' src='../images/logoTete.png'></img>
        </Link> 
      </div>
      <div>
        <ul className='categorias'>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/'}>
              Todos los productos
            </NavLink>
          </li>
          <li>
          <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/category/camisones'}>
            Camisones
          </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/category/pijamas'}>
              Pijamas
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/category/ropa Interior'}>
              Ropa Interior
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Link to={'/cart'}>
          <CartWidget/>
        </Link>
      </div>
    </div>
  )
}

export default NavBar