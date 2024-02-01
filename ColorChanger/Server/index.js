const express = require('express')
const app = express()
const port = 3000

const colors = [
  {
    color: "red",
    value: "#f00"
  },
  {
    color: "green",
    value: "#0f0"
  },
  {
    color: "blue",
    value: "#00f"
  },
  {
    color: "cyan",
    value: "#0ff"
  },
  {
    color: "magenta",
    value: "#f0f"
  },
  {
    color: "yellow",
    value: "#ff0"
  },
  {
    color: "black",
    value: "#000"
  }
]

app.get('/', (req, res) => {
  res.send('background color changer')
})

app.get('/api/colors', (req, res)=>{
    res.json(colors)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})