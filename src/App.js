import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {useEffect, useState} from 'react';
import {task} from './components/helper'
import Routes from './Routes/Routes';
import itemDetailContainer from './components/itemDetailContainer';



function App () {
  task.then((result) => {
    console.log({result});
  }); 
    useEffect (() => {
      getTaskResult();
    }, []);


  const getTaskResult = async () => {
    try {
        const result = await task;
        console.log(result);
    } catch (error){
        console.log (error);
    }

}
  const [count, setCount] = useState (0);
  const [date, setDate] = useState (null);
  const addCount = () => {
    const date = new Date();
    const hour = date.getHours ();
    const minute = date.getMinutes();
    setDate({hour, minute})
    setCount(count +1)
  };
  const discount = () => {setCount(count -1)}
  const printDate= () => {
    return <p> Time: {date.day}:{date.hour}:{date.minute} </p>
  }
  return (
    <div> 

<div className="App">
      <Routes />
      <h1>Bienvenidos a la tienda de Minecraft By Jockerel</h1>
      <hr/>

</div>

    <div class="button-count">
    <h1>{count ? count : 'Not count'}</h1>
    {date ? printDate() : ''}
    <button onClick = {addCount}>Agregar item</button>
    <button onClick = {discount}>Eliminar item</button>
      </div>
 </div>
  );
}

export default App;
