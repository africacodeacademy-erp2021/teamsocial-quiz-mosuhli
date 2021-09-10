import Category from './Category';
//import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link
  } from "react-router-dom"; 
const NewGame = () =>{

  function Content(){

    let history = useHistory();
          const data = JSON.stringify(localStorage.getItem("user"));
          const name = data.replace('"', '');
          const x = name.replace('"', '')


         const handleClick = () => history.push("./Category");   
        return(
            <div>
                <div>
                    <button onClick={handleClick}>New Game</button>
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
export default NewGame;