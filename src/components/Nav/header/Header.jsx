
import './Header.css'

function Header() {


  return (
    <>
      <div className='header__div'>
        <figure className='header__figure'>
          <img className='figure__img' src="/avatar.svg" alt="" />
        </figure>
        <h3 className='header__subtitle'>Hola, soy Sergio</h3>
        <h2 className='header__title'>Diseñador y </h2>
        <h2 className='header__title'>desarrollador web</h2>
        <div className='header__networks'>
          <a class="div_a" href="https://www.linkedin.com/" target="_blank">
            <img src="/Íconos/linkedin.svg" alt="icono linkedin" />
          </a>
          <a class="div__a" href="https://www.instagram.com/" target="_blank">
            <img src="/Íconos/instagram.svg"alt="icono instagram" />
          </a>
          <a class="div__a" href="https://twitter.com/" target="_blank">
            <img src="/Íconos/twitter.svg" alt="icono twitter" />
            </a>
        </div>

      </div>
    </>
  )
}

export default Header
