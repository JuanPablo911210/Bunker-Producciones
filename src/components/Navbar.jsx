'use client'
import React, { useState } from 'react'
import styles from '@/styles/Navbar.module.css'
import { Link } from 'react-scroll'

export default function Navbar() {

  const [menu, setMenu] = useState(true);
  const [pagina, setPagina] = useState('PRODUCCIONES')


  return (

    <div className={styles.navbar}>

      <header>
        {/* ------------------------- BOTON DE MENU --------------------------- */}

        {!menu && <div className={styles.contenedorBotonMenu}>
          <div onClick={() => setMenu(true)}>
            <img src='./chevabajo.png' className={styles.botonMenu}></img>
          </div>
        </div>}

        {menu && <div className={styles.contenedorBotonMenu}>
          <div onClick={() => setMenu(false)}>
            <img src='./chevarriba.png' className={styles.botonMenu}></img>
          </div>
        </div>}


        {/* ------------------------- CONTENEDOR LOGO --------------------------- */}

        <Link to='/' smooth={true} duration={500} className={styles.contenedorLogo} onClick={() => setPagina('PRODUCCIONES')}>
          <div className={styles.logo}>
            <div className={styles.bunker}>BUNKER </div>
            <div className={styles.producciones}>{pagina}</div>
          </div>
        </Link>

        {/* ------------------------- BOTON DE WHATSAPP --------------------------- */}

        <a href="https://wa.me/+524772492798" className={styles.contenedorWhatsapp}>
          <img src='./whatsapp.png' className={styles.whatsapp}></img>
        </a>
      </header>



      {/* ------------------------- MENU DESPLEGABLE --------------------------- */}

      {menu &&
        <div className={styles.menu}>
          <Link to='seccion1' smooth={true} duration={500} onClick={() => setMenu(false)}>Eventos corporativos</Link>
          <Link to='seccion2' smooth={true} duration={500} onClick={() => setMenu(false)}>Conciertos</Link>
          <Link to='seccion3' smooth={true} duration={500} onClick={() => setMenu(false)}>Eventos Sociales</Link>
          <Link to='seccion4' smooth={true} duration={500} onClick={() => setMenu(false)}>Circuito Cerrado y Live Streaming</Link>
          <Link to='seccion5' smooth={true} duration={500} onClick={() => setMenu(false)}>Video & Fotografía</Link>
          <Link to='seccion6' smooth={true} duration={500} onClick={() => setMenu(false)}>Contacto</Link>
        </div>
      }



    </div>

  )
}
