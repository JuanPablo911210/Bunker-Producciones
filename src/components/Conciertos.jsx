import React from 'react'
import styles from '@/styles/Conciertos.module.css'

export default function Conciertos() {
    return (
        <div className={styles.conciertos} id="seccion2">
            <video autoPlay muted loop>
                <source src='./conciertos.mp4'></source>
            </video>
            <div className={styles.contenedorTitulo}>
                <h2>Conciertos</h2>
            </div>
            <div className={styles.degradado}>
                <p>Producimos conciertos y espectáculos de cualquier escala con equipos de última generación, desde sonido y luces hasta pantallas LED y efectos especiales. Nos encargamos de cada aspecto técnico para que tu evento brille con la máxima calidad.</p>
            </div>
            <div className={styles.cover}></div>
        </div>
    )
}
