import '../css/TabelaDesktop.css'
import { useEffect, useState } from "react";
import { api } from "../modules/fetchUsers";
import { Funcionario } from "../modules/fetchUsers";


 function TabelaDesktop() {
    const [tabela, setTabela] = useState<Funcionario[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchTabela = async () => {
        try {
          const response = await api.get<Funcionario[]>("http://localhost:3000/employees");
          setTabela(response.data);
        } catch (err) {
          setError("Erro ao carregar os posts." + err);
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
                <th>Foto</th>
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
        <img src={funcionario.image} alt={funcionario.name} />
      </td>
      <td>{funcionario.name}</td>
      <td>{funcionario.job}</td>
      <td>{funcionario.admission_date}</td>
      <td>{funcionario.phone}</td>
    </tr>
  ))}
    </tbody>
  </table>



      </div>
    );
  }

  export default TabelaDesktop;