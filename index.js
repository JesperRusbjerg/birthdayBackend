const express = require('express')
const app = express()
const port = 3010

let names = ["Jonas R", "Oliver", "Jesper", "Mathias", "Patrick", "Frederik", "Mikkel",
      "Sebastian", "Torben", "Adam", "Nikolai", "Rasmus", "Lindsey", " Christian",
      "Frost", "Morten", "Mr. Kristjansson",
      "Cat", "Maria", "Lotte", "Agnete", "Else", "Masha", "Jarl"]

      let shuffled = shufflePeople(names)

app.get('/', (req, res) => {
  console.log(JSON.stringify(shuffled))
  res.send(JSON.stringify(shuffled))
})

app.get('/hemmeligport', (req, res) => {
    shuffled = shufflePeople(names)
    res.send(JSON.stringify(shuffled))
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function dynamicSort(property){
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }


  function shufflePeople(namesInput){

    let people = []

    let names = [...namesInput]
    let seatNumbers = []

    let length = names.length;

    for (let i = 0; i < names.length; i++) {
      seatNumbers[i] = i + 1
    }

    for (let i = 0; i < length; i++) {

      let seatNumberIndex = Math.floor(Math.random() * seatNumbers.length)
      let nameIndex = Math.floor(Math.random() * names.length)

      let person = {
        name: names[nameIndex],
        seatNumber: seatNumbers[seatNumberIndex]
      }

      people.push(person)

      seatNumbers.splice(seatNumberIndex, 1)
      names.splice(nameIndex, 1)

    }

    people.sort(dynamicSort("seatNumber"))

    return people.map(p => {
      return (
        p
      )
    })

  }

