import './css/App.css'
import React, { useState } from 'react';
import TabelaCompletaDesktop from './components/TabelaCompletaDesktop';
import TabelaPesquisaDesktop from './components/TabelaPesquisaDesktop';
import TabelaCompletaMobile from './components/TabelaCompletaMobile';

function App() {

  const [inputValue, setInputValue] = useState<string>('');
  const [pesquisou, setPesquisou] = useState<boolean>(false);

  //   { pesquisou ? <TabelaPesquisaDesktop inputValue={inputValue}  /> : <TabelaCompletaDesktop/>}  

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    const formData = new FormData(event.currentTarget); 
    const text = formData.get('text') as string; 
    setInputValue(text);
    if (text === ""){
      setPesquisou(false);
      return;
    }
    
    setPesquisou(true); 
  };

  return (
    <>
      <header>
        <img className='logo' src="/logo.svg" alt="logo" />
      </header>

      <div className="div_pesquisa">
        <h1>Fucionários</h1>
        <form onSubmit={handleSubmit} className="barra-pesquisa">
    <div className="input-container">
        <input type="text" name="text" placeholder="Pesquisar"></input>
         
    </div>
    <button type="submit"> <img src="/icons/lupa.svg" alt="botão de pesquisa" /></button>
</form>
        
      </div>

    
      
        <TabelaCompletaMobile/>

    </>
  )
}

export default App;
