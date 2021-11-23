/*
import react, {useState} from 'react';
import './App.css';
//import {button} from ''

function App() {

const [name,setName]=useState("");
const [age,setAge]=useState("");
const [value,setValue]=useState(0);

const handlerNew = e =>{

  e.preventDefault();
  setValue(value+1);

}

const nameHandler = e =>{
setName(e.target.value);

}

const submitHandler = e => {

  e.preventDefault();

 }
  
 const clickHandler = e => {

alert(` welcome ${name}`);
 }

return(
  <div>
<form onSubmit={submitHandler}>

<label>
your Name 
<input type="text" value={name} onChange={nameHandler}></input>
</label>
<label>
  Date Of Birth 
  <input type="text" ></input>
</label>

<button onClick={clickHandler}>Submit</button>

<button onClick={ () => setValue(value+1)}>IncrementZ</button>

<br/>


</form>
<h2>{value}</h2>

</div>
);

/*
  return (
    <div className="App">

      <form>
        <label>
          My na me is :
          <input type="text" />
        </label>
        <button type="button" class="btn btn-primary">Click me</button>

        <button class="btn btn-success">  Success</button>
        <button class="btn btn-secondary"> secondary</button>
        <button class="btn btn-outline-warning"> Warning</button>

      
        </form>
        <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>

      <h1>Hello React...</h1>
      

     <div class="jumbotron">
      
      <h1 class="display-4">Hi Dear..</h1>
      <hr class="my-4"/>
      <p>Vdfhgjhkgjljk</p>
      <a href="https://getbootstrap.com/docs/4.1/components/jumbotron/" role="button" class="btn btn-primary btn-lg" target="_blank"> To Know More</a>
      
      
      </div>

<div>
<form>

<label>
your Name 
<input type="text" value={name} onChange={ (e) => setName(e.target.value)}></input>
</label>
<label>
  Date Of Birth <input ></input>
</label>

<button onClick={handlerNew}> Increment</button>

</form>
<h2>{value}</h2>

</div>


    </div>
  );
  
}

export default App;
*/



  /*
const [joke,setJoke]=useState("");

 useEffect( () => {
    
 //axios.get('https//api.icndb.com/jokes/random?firstName=Nitish&lastName=kumar')

 axios.get('https://jsonplaceholder.typicode.com/todos')
 .then( res => res.json())
  .then(data)

 });


return(
<div>

  <h2>Hello</h2>
</div>

);

} */
