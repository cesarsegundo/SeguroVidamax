import { useState } from "react"

export default function Siniestro() {

    const [cobertura, setCobertura] = useState("fallecimiento")
    const handleClick = (type: string) => {
        setCobertura(type)
    }
    return (
        <>
            <h3>Pasos a seguir en caso de siniestro</h3>
            <p>selecciona el tipo de cobertura o plan que contrataste y consulta lo que debes hacer:</p>
            <div className="btns-sin">
                <button className="btn-sin" onClick={() => handleClick('fallecimiento')}>Fallecimiento</button>
                <button className="btn-sin" onClick={() => handleClick('servicioFunerario')}>Servicio funerario</button>
            </div>
            {
                cobertura == 'fallecimiento' && <Fallecimiento />
            }
            {
                cobertura == 'servicioFunerario' && <ServicioFunerario />
            }
        </>
    )
}

const Fallecimiento = () => {
    return (
            <ol className="fallecimiento">
                <li>El beneficiario acude a la sucursal Electra o Banco Azteca más cercada y reportar el fallecimiento del Asegurado</li>
                <li>el ejecutivo registra el siniestro en el portal de siniestros de Seguros Azteca</li>
                <li>el ejecutivo imprime el check list de los documentos así como el formato de declaración y los entrega al beneficiario</li>
                <li>El beneficiario repune todos los documentos y acude a la sucursal para entregarlos</li>
                <li>El ejecutivo recibe, revisa, registra y envia los documentos a Seguros Azteca</li>
                <li>Seguros Azteca recibe los documentos y emite dictamen</li>
                <li>Seguros Azteca en caso de ser procedente se indemiza al beneficiario y en caso contrario se entregan las cartas de rechazo o se solicita documentación faltante</li>
                <p>Tiempo de respuesta: 17 días hábiles una vez que los documentos estpen completos</p>
            </ol>
    )
}

function ServicioFunerario() {
    return (
        <ol>
            <li>El solicitante llama a la línea de Seguros Azteca al 1720 9854</li>
            <li>El ejecutivo valida que la póliza siga vigente</li>
            <li>El ejecutivo solicita los siguientes datos al solicitante
                <ul>
                    <li>Nombre completo del dinado</li>
                    <li>Número de póliza</li>
                    <li>Nombre del solicitante</li>
                    <li>Teléfonos de contacto del solicitante</li>
                </ul>

            </li>
            <li>El ejecutivo transfiere la llamada al prestador del Servicio Funerario</li>
            <h5>Inicia Servicio Funerario</h5>
            <li>El solicitante deberá presentar la siguiente documentaciona a la funeraria:
                <ul>
                    <li>Certificado de defuncion</li>
                    <li>Identificación Oficial del Finado</li>
                    <li>Se te entregará un "acuse de recibo" de docmentos impreso</li>
                </ul>
            </li>
        </ol>
    )
}