import  "../css/TabelaMobile.css"
interface AccordionProps {
  photo: string;
  name: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen:boolean) => void;
}
const Accordion: React.FC<AccordionProps> = ({ photo, name, children ,setIsOpen , isOpen }) => {
  
  return (
    <div>
      <button className='accordion' onClick={() => setIsOpen(!isOpen)}>
       <img className='foto_perfil' src={photo} alt="foto de perfil" /> 
        <p className='nome_fucionario'>{name}</p> 
       <img className='seta' src={isOpen ? '/icons/charm_chevron-up.svg' : '/icons/charm_chevron-down.svg'} alt="seta" /> 
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};
export default Accordion;