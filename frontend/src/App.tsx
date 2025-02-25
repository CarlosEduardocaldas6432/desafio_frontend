import './css/App.css'
import TabelaDesktop from './components/TabelaDesktop';

function App() {


  return (
    <>
      <header>
        <img className='logo' src="/logo.svg" alt="logo" />
      </header>

      <div className="div_pesquisa">
        <h1>Fucionários</h1>
        <form action="/pesquisar" method="GET" className="barra-pesquisa">
    <div className="input-container">
        <input type="text" name="q" placeholder="Pesquisar" required></input>
         
    </div>
    <button type="submit"> <img src="/icons/lupa.svg" alt="botão de pesquisa" /></button>
</form>
        
      </div>

      <TabelaDesktop/>

      
    </>
  )
}

export default App;
