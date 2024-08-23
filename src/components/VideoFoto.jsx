import React from 'react'
import styles from '@/styles/VideoFoto.module.css'

export default function VideoFoto() {
  return (
    <div className={styles.videoFoto} id="seccion5">
      <h2>Video y Fotografia</h2>
      <div className={styles.galeria}>
        <img src='./f1.webp'></img>
        <img src='./f2.webp'></img>
        <img src='./f3.webp'></img>
        <img src='./f4.webp'></img>
      </div>
      <div className={styles.descripcion}>
        <p>Captura la esencia de tu empresa con nuestros servicios de video y fotografía empresarial. Creamos contenido visual que refuerza tu marca y comunica tu mensaje de forma clara y profesional, ideal para campañas, publicidad o contenido institucional.</p>
      </div>
    </div>
  )
}
