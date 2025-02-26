import React, { useState } from 'react';
import  "../css/TabelaMobile.css"

interface AccordionProps {
    foto: string;
    nome: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ foto, nome, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className='accordion' onClick={() => setIsOpen(!isOpen)}>
       <img className='foto_perfil' src={foto} alt="foto de perfil" /> 
        <p className='nome_fucionario'>{nome}</p> 
       <img className='seta' src={isOpen ? '/icons/charm_chevron-up.svg' : '/icons/charm_chevron-down.svg'} alt="seta" /> 
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Accordion;