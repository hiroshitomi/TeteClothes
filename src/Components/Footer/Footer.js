import "./style.css"

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Columna1 */}
          <div className="col">
            <h4>Seguinos</h4>
            <ul className="list-unstyled">
              <li>
                <a style={{textDecoration: 'none', color: 'white'}} target='_blank' href="https://api.whatsapp.com/send/?phone=3513528528&text&type=phone_number&app_absent=0">
                 <img alt="teteclothes" src="/images/whatsapp.png" /> WhatsApp
                </a>
              </li>
              <li>
                <a style={{textDecoration: 'none', color: 'white'}} target='_blank' href="https://www.instagram.com/teteclothesok/">
                 <img alt="teteclothes" src="/images/instagram.png" /> Instagram
                </a>
              </li>
            </ul>
          </div>
          {/* Columna 2 */}
          <div className="col">
            <h4>TeteClothes</h4>
            <ul className="list-unstyled">
              <li>Términos y Condiciones</li>
              <li>Políticas de Privacidad</li>
              <li>Trabajá con nosotros</li>
            </ul>
          </div>
          {/* Columna 3 */}
          <div className="col">
            <h4>Preguntas Frecuentes</h4>
            <ul className="list-unstyled">
              <li>Cómo comprar</li>
              <li>Defensa al consumidor</li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear} TeteClothes - Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>

    // <footer className="footer-style">
    //     <div>Contactanos</div>
    //     <div style={{display: 'flex', flexDirection: 'row'}}>
    //         <a style={{marginRight: '10px'}} target='_blank' href="https://www.instagram.com/teteclothesok/">
    //             <img alt="teteclothes" src="/images/instagram.png" />
    //         </a>
    //         <a target='_blank' href="https://api.whatsapp.com/send/?phone=3513528528&text&type=phone_number&app_absent=0">
    //             <img alt="teteclothes" src="/images/whatsapp.png" />
    //         </a>
    //     </div>
    //     <span>© TeteClothes - 2023 - Todos los derechos reservados</span>
    // </footer>
  )
}

export default Footer