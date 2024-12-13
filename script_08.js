// Datas em Português

// Crie uma aplicação que obtenha o dia, mês e o ano de uma data com prompt e informe:
// O dia da semana em português.
// O mês do ano em português.
const inputDay = Number(prompt('Insira o dia'))
const inputMonth = Number(prompt('Insira o mês'))
const inputYear = Number(prompt('Insira o ano'))

const day = new Date(inputYear, inputMonth - 1, inputDay)
const arrayDays = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
const arrayMonths = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

if (day == 'Invalid Date' || inputDay <= 0 || inputMonth <= 0) {
  alert('Os valores inseridos não são válidos para uma data.')
} else alert(`A data ${inputDay}/${inputMonth}/${inputYear} caí em um(a) ${arrayDays[day.getDay()]} do mês de ${arrayMonths[day.getMonth()]}`)