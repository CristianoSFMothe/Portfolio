export function getExactExperience(
  startDate: Date | number,
  lang = navigator.language
): string {
  const start = new Date(startDate);
  const now = new Date();

  // Cálculo dos anos
  let years = now.getFullYear() - start.getFullYear();

  // Cálculo dos meses
  let months = now.getMonth() - start.getMonth();

  // Ajustar os valores se o mês atual for anterior ao mês de início
  if (months < 0) {
    years--;
    months += 12;
  }

  // Formatar o resultado
  const yearText = years > 0 ? `${years} ${years === 1 ? 'ano' : 'anos'}` : '';
  const monthText = months > 0 ? `${months} ${months === 1 ? 'mês' : 'meses'}` : '';

  // Combinar anos e meses
  return [yearText, monthText].filter(Boolean).join(' e ');
}
