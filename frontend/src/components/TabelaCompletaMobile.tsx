import '../css/TabelaMobile.css';
import { useEffect, useState } from 'react';
import Funcionario from '../modules/tipoFucionario';
import { formatarData, formatarTelefone } from '../modules/formataInformacao';
import Accordion from './Accordion';

function TabelaCompletaMobile() {
  const [table, setTable] = useState<Funcionario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);}

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
    <div className="div_tabela">
      <table className='tabela_mobile'>
        <thead className='thead_mobile'>
          <tr>
            <th className="titulo_tabela_mobile">Foto</th>
            <th className="titulo_tabela_mobile">
              Nome<span className="PontoDaTabela">•</span>
            </th>
          </tr>
        </thead>
      </table>

      {table.map((funcionario, index) => (
        <Accordion key={index} name={funcionario.name} photo={funcionario.image}  isOpen={openIndex === index}
        setIsOpen={() => handleAccordionClick(index)}>
          <div className="div_informacao">
            <div>
              <h3>Cargo</h3>
              <p>{funcionario.job}</p>
            </div>
          </div>

          <div className="div_informacao">
            <div>
              <h3>Data de admissão</h3>
              <p>{formatarData(funcionario.admission_date)}</p>
            </div>
          </div>

          <div className="div_informacao">
            <div>
              <h3>Telefone</h3>
              <p>{formatarTelefone(funcionario.phone)}</p>
            </div>
          </div>
        </Accordion>
      ))}
    </div>
  );
}

export default TabelaCompletaMobile;