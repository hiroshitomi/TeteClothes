import "./style.css"

const Footer = () => {
  return (
    <footer className="footer-style">
        <div>Contactanos</div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <a style={{marginRight: '10px'}} target='_blank' href="https://www.instagram.com/teteclothesok/">
                <img alt="teteclothes" src="/images/instagram.png" />
            </a>
            <a target='_blank' href="https://api.whatsapp.com/send/?phone=3513528528&text&type=phone_number&app_absent=0">
                <img alt="teteclothes" src="/images/whatsapp.png" />
            </a>
        </div>
        <span>© TeteClothes - 2023 - Todos los derechos reservados</span>
    </footer>
  )
}

export default Footer