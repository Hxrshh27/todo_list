import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.css';



function App() {
  return(
    
    <center>
      <h1>TODO LIST</h1>
      <div class="container text-center">
      <div class="row">
      <div class="col-6"><input type="text" placeholder="Enter your task" /></div>
      <div class="col-4"><input type='date' /></div>
      <div class="col-2"><button type="button" class="btn btn-primary">ADD</button></div>

      <div class="col-6">WAKE UP</div>
      <div class="col-4">14-12-2004</div>
      <div class="col-2"><button type="button" class="btn btn-light">DELETE</button></div>

      <div class="col-6">SLEEP</div>
      <div class="col-4">14-12-2005</div>
      <div class="col-2"><button type="button" class="btn btn-light">DELETE</button></div>
      
    </div>
    </div>
    </center>
  );
}
  

export default App;
