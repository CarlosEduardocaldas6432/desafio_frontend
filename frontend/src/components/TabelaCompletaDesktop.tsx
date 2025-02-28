import '../css/TabelaDesktop.css';
import { useEffect, useState } from 'react';
import Funcionario from '../modules/tipoFucionario';
import { formatarData, formatarTelefone } from '../modules/formataInformacao';

function TabelaCompletaDesktop() {
  const [table, setTable] = useState<Funcionario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTabela = async () => {
      try {
        const response = await (await fetch('http://localhost:3000/employees')).json();
        setTable(response);
      } catch (err) {
        setError('Erro ao carregar Tabela dos Funcionarios.' + err);
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
      <table className="tabela_desktop">
        <thead className='thead_desktop'>
          <tr>
            <th className='th_desktop'>Foto</th>
            <th className='th_desktop'>Nome</th>
            <th className='th_desktop'>Cargo</th>
            <th className='th_desktop'>Data de Admissão</th>
            <th className='th_desktop'>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {table.map((funcionario, index) => (
            <tr key={index}>
              <td className='td_desktop'>
                <img className="foto_perfil" src={funcionario.image} alt={funcionario.name} />
              </td>
              <td className='td_desktop'>{funcionario.name}</td>
              <td className='td_desktop'>{funcionario.job}</td>
              <td className='td_desktop'>{formatarData(funcionario.admission_date)}</td>
              <td className='td_desktop'>{formatarTelefone(funcionario.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaCompletaDesktop;