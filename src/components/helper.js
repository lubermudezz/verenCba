export const items = [
    {id: "1", name: "mapaUno", price: "25"},
    {id: "2", name: "mapaDos", price: "20"},
    {id: "3", name: "mapaTres", price: "35"}

];

export const task = new Promise ((resolve, reject) => {
  setTimeout (() => {
      resolve (items)
  }, 2000)
})

