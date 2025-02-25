
export function formatarData(dataISO: string): string {
    
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, '0'); 
    const mes = String(data.getMonth() + 1).padStart(2, '0'); 
    const ano = data.getFullYear();
   
    return `${dia}/${mes}/${ano}`;
  }


export function formatarTelefone(numero: string): string {
    
    const codigoPais = numero.slice(0, 2); 
    const ddd = numero.slice(2, 4); 
    const parte1 = numero.slice(4, 8); 
    const parte2 = numero.slice(8); 
  
    // Retorna o telefone formatado
    return `+${codigoPais} (${ddd}) ${parte1}-${parte2}`;
  }

