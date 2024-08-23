
import Portada from "@/components/Portada";
import Navbar from "@/components/Navbar";
import EveCorp from "@/components/EveCorp";
import Conciertos from "@/components/Conciertos";
import EventosSociales from "@/components/EventosSociales";
import Live from "@/components/Live";
import VideoFoto from "@/components/VideoFoto";
import Contacto from "@/components/Contacto";

import styles from '@/app/page.module.css'


export default function Home() {
  return (
    <main id="/">
      <Navbar />
      <Portada/>
      <EveCorp />
      <Conciertos/>
      <EventosSociales/>
      <Live/>
      <VideoFoto/>
      <Contacto/>
    </main>
  );
}
