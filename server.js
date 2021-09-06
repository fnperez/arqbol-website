const express = require('express')
const app = express()
const port = 80

app.get('/.well-known/acme-challenge/0kB6MA0nHvXFUOrGN-daVcSgxB7KVrDro-F1cLhSgIw', (req, res) => {
  res.send('0kB6MA0nHvXFUOrGN-daVcSgxB7KVrDro-F1cLhSgIw.vGpzTNVQy4hG0bDBJ9lSLM3ob_e6ckkJ0AG92rnC91M')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})