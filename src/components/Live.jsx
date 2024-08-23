import React from 'react'
import styles from '@/styles/Live.module.css'

export default function Live() {
  return (
    <div className={styles.live} id="seccion4">
      <img src='./Live.webp'></img>
      <div className={styles.degradado}>
        <div className={styles.contenedorTextos}>
          <h2>Circuito cerrado & Live Streaming</h2>
          <p>Lleva tu evento al siguiente nivel con nuestras soluciones de circuito cerrado y transmisión en vivo. Ofrecemos cobertura profesional en tiempo real, ideal para conferencias, eventos corporativos y conciertos, asegurando una experiencia virtual fluida y de alta calidad.</p>
        </div>
      </div>
      <div className={styles.cover}></div>
    </div>
  )
}
