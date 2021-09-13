import Category from './Category';
//import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link
  } from "react-router-dom"; 
const Navigate = () =>{ 
  
  function Content(){

    let history = useHistory();
    const handleClick = () => history.push("./Category");   
        return(
            <div>
                <div>
                    <button onClick={handleClick}>Login</button>
                </div>
                
            </div>

           );

  }
  return (
    <div>
      <Router>
            <Switch>
                <Route path="/Category" exact component={Category}/>
                <Route path="/"  component={Content}/>  
            </Switch>                    
        </Router> 
    </div>
  );
    
        
}
export default Navigate;