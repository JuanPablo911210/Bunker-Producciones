import React from 'react'
import styles from '@/styles/Portada.module.css'

export default function Fondo() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorPortadas}>
        <img src='./portada.webp' className={styles.fondo}></img>
        <img src='./portada1.webp' className={styles.fondo}></img>
        <img src='./portada2.webp' className={styles.fondo}></img>
      </div>
      <div className={styles.degradado}>
        <div className={styles.contenedorLogos}>
          <div className={styles.contenedorLogo}>
            <img src='./Logo1.png'></img>
          </div>
          <div className={styles.contenedorLogo}>
            <img src='./Logo2.png'></img>
          </div>
          <div className={styles.contenedorLogo}>
            <img src='./Logo3.png'></img>
          </div>
          <div className={styles.contenedorLogo}>
            <img src='./Logo4.png'></img>
          </div>
          <div className={styles.contenedorLogo}>
            <img src='./Logo5.png'></img>
          </div>
          <div className={styles.contenedorLogo}>
            <img src='./Logo6.png'></img>
          </div>
          <div className={styles.contenedorLogo}>
            <img src='./Logo7.png'></img>
          </div>
          <div className={styles.contenedorLogo}>
            <img src='./Logo8.png'></img>
          </div>
          <div className={styles.contenedorLogo}>
            <img src='./Logo9.png'></img>
          </div>
        </div>
      </div>
    </div>
  )
}
