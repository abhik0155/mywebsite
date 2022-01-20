import './App.css';
import Header  from "./Components/Header";
import { Login } from "./Components/Login";
import { Footer } from "./Components/Footer";
import { Product } from "./Components/Product";
import { COVID_ESSENTIALS } from "./Components/COVID_ESSENTIALS";
import { HEALTH_DEVICES } from "./Components/HEALTH_DEVICES";
import { PERSONAL_CARE } from "./Components/PERSONAL_CARE";
// import { Cart } from "./component1/Cart";
// import  Cart from "./components22/Cart";
// import  Cart  from "./Components/Cart";
// import  Cart from "./img/Cart";




import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";




function App() {
  return (


  <Router>
     <div>
    <Header />
   
  
   
  

   
    
<Switch>
           <Route path="/Login">
            <Login />
          </Route>

          {/* <Route path="/Cart">
            <Cart />
          </Route> */}

          
          <Route path="/COVID_ESSENTIALS">
            <COVID_ESSENTIALS />
          </Route>
         
         <Route path="/HEALTH_DEVICES">
            <HEALTH_DEVICES />
          </Route>

          <Route path="/PERSONAL_CARE">
            <PERSONAL_CARE />
          </Route>

         
          <Route path="/">
          {/* <TextForm show></TextForm> */}
          </Route> 
       
</Switch>
</div>
{/* <Scrolling />  */}
<Product />
<Footer />
</Router>

   
  );
}

export default App;
