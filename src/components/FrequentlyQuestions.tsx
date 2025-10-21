import { useState } from "react";
import QuestionItem from "./QuestionItem";


const FrequentlyQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setOpenIndex(prev => (prev === id ? null : id));
  };

  return (
    <div className="questions">
      <QuestionItem
        id={1}
        title="¿Qué cubre el seguro?"
        isOpen={openIndex === 1}
        onClick={() => handleClick(1)}
      >
        <ul>
          <li>
            Beneficio económico para tu familia de acuerdo al plan elegido y a la edad que tengas al momento de contratarlo, el cual incrementará en caso de fallecimiento accidental
          </li>
          <li>Servicio funerario</li>
          <ol>
            <li>Asesoría jurídica testamentaria vía telefónica</li>
            <li>Gestión de trámites por fallecimiento</li>
            <li>Recolección del cuerpo</li>
            <li>Arreglo estético del cuerpo</li>
            <li>Sala de velación</li>
            <li>Inhumación (Incluye: ataúd metálico)</li>
          </ol>
          <li>Liquida el adeudo de tu Crédito con Banco Azteca</li>
        </ul>
      </QuestionItem>

      <QuestionItem
        id={2}
        title="¿Cómo puedes pagarlo?"
        isOpen={openIndex === 2}
        onClick={() => handleClick(2)}
      >
        <p>
          Dependiendo de la periodicidad del crédito en cualquier sucursal de Banco Azteca o Elektra al momento de adquirir el crédito (préstamo o bien de consumo).
        </p>
      </QuestionItem>
      <QuestionItem id={3} title="¿Cuánto dura el seguro?" isOpen={openIndex === 3} onClick={() => handleClick(2)}>
        <p>Misma del crédito solicitado (préstamo o bien de consumo)</p>
      </QuestionItem>
      <QuestionItem id={4} title="¿Qué necesitas para contratar?" isOpen={openIndex === 4} onClick={() => handleClick(4)}>
        <ul>
          <li>Tener entre 18 y 75 años</li>
          <li>Contratar con un Préstamo Personal o Crédito al Consumo</li>
        </ul>
      </QuestionItem>
      <QuestionItem id={5} title="¿Qué no cubre el seguro?" isOpen={openIndex === 5} onClick={() => handleClick(5)}>
        <p>Suicidio (revisar todas las explusiones en las condiciones generales)</p>
      </QuestionItem>
    </div>
  );
};

export default FrequentlyQuestions;
