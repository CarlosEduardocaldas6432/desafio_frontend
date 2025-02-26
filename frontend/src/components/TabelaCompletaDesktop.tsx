import '../css/TabelaDesktop.css'
import { useEffect, useState } from "react";
import Funcionario from "../modules/tipoFucionario";
import { formatarData, formatarTelefone } from '../modules/formataInformacao';


 function TabelaCompletaDesktop() {
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
                <th>Nome</th>
                <th>Cargo</th>
                <th>Data de Admissão</th>
                <th>Telefone</th>
            </tr>
        </thead>
    <tbody>
    { tabela.map((funcionario, index) => (
    <tr key={index}>
      <td>
        <img className='foto_perfil' src={funcionario.image} alt={funcionario.name} />
      </td>
      <td>{funcionario.name}</td>
      <td>{funcionario.job}</td>
      <td>{formatarData(funcionario.admission_date)}</td>
      <td>{formatarTelefone(funcionario.phone)}</td>
    </tr>
  ))}
    </tbody>
  </table>






      </div>
    );
  }

  export default TabelaCompletaDesktop;