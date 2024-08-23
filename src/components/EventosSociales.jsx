import React from 'react'
import styles from '@/styles/EventosSociales.module.css'

export default function EventosSociales() {
  return (
    <div className={styles.eventosSociales} id="seccion3">
      <video autoPlay muted loop>
        <source src='./eventos.mp4' />
      </video>
      <div className={styles.contenedorTitulo}>
        <h2>Eventos Sociales</h2>
      </div>
      <div className={styles.cover}></div>
    </div>
  )
}
