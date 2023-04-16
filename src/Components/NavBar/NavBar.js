import "./style.css";
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useState} from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="nav-bar-burger">
      <Container>
        <div>
          <Navbar.Brand>
            <Link to={"/"}>
              <img
                className="logo"
                alt="TeteClothes"
                src="../images/logoTete.png"
              ></img>
            </Link>
          </Navbar.Brand>
        </div>
        <div className="order-nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow}/>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>TeteClothes</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="nav-bar-offcanvas">
            <NavLink onClick={handleClose} style={{textDecoration: 'none'}} className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/'}>
               Todos los productos
             </NavLink>
             <NavLink onClick={handleClose} style={{textDecoration: 'none'}} className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/category/camisones'}>
             Camisones
           </NavLink>
             <NavLink onClick={handleClose} style={{textDecoration: 'none'}} className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/category/pijamas'}>
               Pijamas
            </NavLink>
             <NavLink onClick={handleClose} style={{textDecoration: 'none'}} className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/category/ropa Interior'}>
               Ropa Interior
             </NavLink>
            </Nav>
            </Offcanvas.Body>
          </Offcanvas>
          
            <div className="nav-bar">
              <NavLink style={{textDecoration: 'none'}} className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/'}>
                Todos los productos
              </NavLink>
              <NavLink style={{textDecoration: 'none'}} className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/category/camisones'}>
              Camisones
              </NavLink>
              <NavLink style={{textDecoration: 'none'}} className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/category/pijamas'}>
                Pijamas
              </NavLink>
              <NavLink style={{textDecoration: 'none'}} className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/category/ropa Interior'}>
                Ropa Interior
              </NavLink>
            </div>

        </div>

        <div>
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </div>
      </Container>
    </Navbar>

    // <div className='nav-bar'>
    //   <div>
    //     <Link to={'/'}>
    //       <img className='logo' alt='TeteClothes' src='../images/logoTete.png'></img>
    //     </Link>
    //   </div>
    //   <div>
    //     <ul className='categorias'>
    //       <li>
    //         <NavLink style={{textDecoration: 'none'}} className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/'}>
    //           Todos los productos
    //         </NavLink>
    //       </li>
    //       <li>
    //       <NavLink style={{textDecoration: 'none'}} className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/category/camisones'}>
    //         Camisones
    //       </NavLink>
    //       </li>
    //       <li>
    //         <NavLink style={{textDecoration: 'none'}} className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/category/pijamas'}>
    //           Pijamas
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink style={{textDecoration: 'none'}} className={({isActive}) => (isActive ? 'active' : 'inactive')} to={'/category/ropa Interior'}>
    //           Ropa Interior
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    //   <div>
    //     <Link to={'/cart'}>
    //       <CartWidget/>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default NavBar;
