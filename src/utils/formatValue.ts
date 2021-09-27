const formatValue = (value: number): string => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number((value / 100).toFixed(2)))
}

export default formatValue
