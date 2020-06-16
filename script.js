const ul = document.querySelector('ul')

const setColumn = (column) => {
    new Promise(resolve => {
        setTimeout(() => resolve(ul.innerHTML += `<li>${column}</li>`), Math.random() * 5000);
    })
}

const columns = [
  'Columna SKT_ID',
  'Columna Amount',
  'Columna Getway',
  'Columna Date',
  'Columna Issuer',
  'Columna User_id'
]
async function showColumns() {
  for(let col = 0; col < columns.length; col++){
    await setColumn(columns[col])
  }
}

showColumns()