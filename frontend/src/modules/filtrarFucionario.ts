import Funcionario from "../modules/tipoFucionario";
import { formatarTelefone } from './formataInformacao';

function pesquisarFuncionarios(arrayFuncionarios: Funcionario[], inputSearch: string): Funcionario[] {

    const inputSearchLowerCase = inputSearch.toLowerCase();

    return arrayFuncionarios.filter(funcionario => {
        return funcionario.name.toLowerCase().includes(inputSearchLowerCase) ||
               funcionario.job.toLowerCase().includes(inputSearchLowerCase) ||
               formatarTelefone(funcionario.phone).includes(inputSearchLowerCase);
    });
}

export default pesquisarFuncionarios;