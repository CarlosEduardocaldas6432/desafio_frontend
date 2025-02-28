import './css/App.css';
import React, { useState, useEffect } from 'react';
import TabelaCompletaDesktop from './components/TabelaCompletaDesktop';
import TabelaPesquisaDesktop from './components/TabelaPesquisaDesktop';
import TabelaCompletaMobile from './components/TabelaCompletaMobile';
import TabelaPesquisaMobile from './components/TabelaPesquisaMobile';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [researched, setResearched] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const text = formData.get('text') as string;
    setInputValue(text);
    if (text === '') {
      setResearched(false);
      return;
    }

    setResearched(true);
  };

  return (
    <>
      <header>
        <img className="logo" src="/logo.svg" alt="logo" />
      </header>

      <div className="div_pesquisa">
        <h1>Funcionários</h1>
        <form onSubmit={handleSubmit} className="barra-pesquisa">
          <div className="input-container">
            <input type="text" name="text" placeholder="Pesquisar" />
          </div>
          <button type="submit">
            <img src="/icons/lupa.svg" alt="botão de pesquisa" />
          </button>
        </form>
      </div>

      {isMobile ? (
        researched ? (
          <TabelaPesquisaMobile inputValue={inputValue} />
        ) : (
          <TabelaCompletaMobile />
        )
      ) : researched ? (
        <TabelaPesquisaDesktop inputValue={inputValue} />
      ) : (
        <TabelaCompletaDesktop />
      )}
    </>
  );
}

export default App;