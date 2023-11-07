
import './Nav.css'

function Nav() {
 

  return (
    <>
      <div className='nav__div'>
        <ul className='div__ul'>
            <li className='ul__li'><a href={''}>Home</a></li>
            <li className='ul__li'><a href={'https://www.google.com/'}>Acerca de mí</a></li>
            <li className='ul__li'><a href={'https://www.google.com/'}>Mis habilidades</a></li>
            <li className='ul__li'><a href={'https://www.google.com/'}>Experiencia</a></li>
            <li className='ul__li'><a href={'https://www.google.com/'}>Portafolio</a></li>
            <li className='ul__li ul__li--style'><a href={'https://www.google.com/'}>Contacto</a></li>
        </ul>
      </div>
      
    </>
  )
}

export default Nav
