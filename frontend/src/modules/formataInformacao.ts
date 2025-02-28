export function formatarData(dataISO: string): string {
  const date = new Date(dataISO);
  const day = String(date.getDate()).padStart(2, '0'); 
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
 
  return `${day}/${month}/${year}`;
}

export function formatarTelefone(numero: string): string {
  const countryCode = numero.slice(0, 2); 
  const ddd = numero.slice(2, 4); 
  const part1 = numero.slice(4, 8); 
  const part2 = numero.slice(8); 

  return `+${countryCode} (${ddd}) ${part1}-${part2}`;
}