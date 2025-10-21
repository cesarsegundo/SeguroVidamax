import { useState } from "react"
import Description from "./sections/Description"
import Siniestro from "./sections/Siniestro"

export default function Sections() {
  const [section, setSection] = useState('description')
  return (
    <>
      <ul className="section">
        <li onClick={() => setSection('description')}>Descripción</li>
        <li>Planes</li>
        <li onClick={() => setSection('siniestro')}>¿Tienes un siniestro?</li>
        <li>Condiciones</li>
      </ul>
      {
        section == 'description' && <Description />
      }
      {
        section == 'siniestro' && <Siniestro />
      }
    </>
  )
}