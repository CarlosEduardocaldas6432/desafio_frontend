import Funcionario from "../modules/tipoFucionario";

function pesquisarFuncionarios(arrayFuncionarios: Funcionario[], inputPesquisa: string): Funcionario[] {

    const inputPesquisaLowerCase = inputPesquisa.toLowerCase();


    return arrayFuncionarios.filter(funcionario => {

        return funcionario.name.toLowerCase().includes(inputPesquisaLowerCase) ||
               funcionario.job.toLowerCase().includes(inputPesquisaLowerCase) ||
               funcionario.phone.includes(inputPesquisaLowerCase);
    });
}

export default pesquisarFuncionarios;