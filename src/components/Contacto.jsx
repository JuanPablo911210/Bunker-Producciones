import React from 'react'
import styles from '@/styles/Contacto.module.css'

export default function Contacto() {
    return (
        <div className={styles.contacto} id="seccion6">
            <div className={styles.titulo}>
                <h1>Contacto</h1>
            </div>
            <div className={styles.divisiones}>
                <div className={styles.division}>
                    <h3>Redes Sociales</h3>
                    <a href='https://www.facebook.com/ProduccionesBunkerMX/'>
                        <p>Facebook</p>
                    </a>
                    <a href='https://www.instagram.com/produccionesbunkermx/'>
                        <p>Instagram</p>
                    </a>
                </div>
                <div className={styles.division}>
                    <h3>Telefonos</h3>
                    <p>477 890 02 30</p>
                    <p>477 249 27 98</p>
                </div>
                <div className={styles.division}>
                    <h3>Correo</h3>
                    <p>mxbunkerproducciones@gmail.com</p>
                </div>
            </div>
            <div className={styles.direccion}>
                <div>
                    <h3>Direccion</h3>
                    <p>Inglaterra 102, Moderna, 37328 León de los Aldama, Gto.</p>
                </div>
                <iframe className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21628.646342349915!2d-101.69511161114565!3d21.13696601988915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf9274308df9%3A0xdbf3cddc8e65b145!2sBunker%20Records%20MX!5e0!3m2!1ses-419!2smx!4v1722445168184!5m2!1ses-419!2smx" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
