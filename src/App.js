import image from './2023.webp';
import './App.css';
 import { MyList } from './MyList';



function App() {
  return (
    <div >
      <div className="container">
        <img src={image} alt="planner" width="750px" height="400px"/>
      </div>
      <div className="container">
        <h1>Your plans in 2023</h1>
      </div>
    <div>
      <MyList/>
      </div> 

    </div>
  );
}

export default App;
