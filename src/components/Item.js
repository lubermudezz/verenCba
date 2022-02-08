
const Item = ({name, price, id, setSelectedItem}) => {

    const selectItem = () => setSelectedItem({name, id});

  return <div class= "bg-success">
      <h2>Nombre: {name}</h2>
      <h2>Precio: {price}</h2>
      <button onClick={selectItem}>Seleccionar Producto</button>
    <hr/>
  </div>;
};

export default Item;
