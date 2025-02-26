import '../css/TabelaMobile.css'
import { useEffect, useState } from "react";
import Funcionario from "../modules/tipoFucionario";
import { formatarData, formatarTelefone } from '../modules/formataInformacao';
import Accordion from './Accordion';


 function TabelaCompletaMobile() {
    const [tabela, setTabela] = useState<Funcionario[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchTabela = async () => {
        try {
          const resposta = await (await fetch("http://localhost:3000/employees")).json()
          setTabela(resposta);
        } catch (err) {
          setError("Erro ao carregar Tabela dos Funcionarios." + err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTabela();
    }, []);
  
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;





  
    return (
      <div>
        <table id="tabela_funcionarios">
        <thead>
            <tr>
                <th >Foto</th>
                <th>Nome<span className='PontoDaTabela'>•</span></th>
            </tr>
        </thead>
  </table>


  { tabela.map((funcionario, index) => (
  
  <Accordion key={index} nome={funcionario.name} foto={funcionario.image} >
  <div className="div_informacao">
    
    <h3>Cargo</h3>
    <p>{funcionario.job}</p>
   
  </div>


  <div className="div_informacao">
    
    <h3>Data de admissão</h3>
    <p>{formatarData(funcionario.admission_date)}</p>
   
  </div>

  <div className="div_informacao">
    
    <h3>Telefone</h3>
    <p>{formatarTelefone(funcionario.phone)}</p>
   
  </div>



  </Accordion>
  ))}
      </div>
    );
  }

  export default TabelaCompletaMobile;