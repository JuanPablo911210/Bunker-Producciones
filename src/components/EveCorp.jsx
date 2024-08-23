import React from 'react'
import styles from '@/styles/EveCorp.module.css'

export default function EveCorp() {
  return (
    <div className={styles.evecorp} id="seccion1">
      <img src='./EventosCorporativos.webp'></img>
      <div className={styles.degradado}>
        <div className={styles.contenedorTextos}>
          <h2>Eventos Corporativos</h2>
          <p>En Búnker Producciones, transformamos tus eventos corporativos en experiencias memorables. Desde conferencias hasta lanzamientos de productos, ofrecemos soluciones de audio, iluminación y entretenimiento de alto nivel, asegurando que cada detalle esté perfectamente ejecutado.</p>
        </div>
      </div>
      <div className={styles.cover}></div>
    </div>

  )
}
