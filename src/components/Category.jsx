import React, { useState} from "react";
import GameCountry from './GameCountry';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
  } from "react-router-dom";  
import GameTech from "./GameTech";
import GameKnowledge from "./GameKnowledge";



const Category = (props) =>{

    function Content(){
        let history = useHistory();
        const data = JSON.stringify(localStorage.getItem("nickname"));
        const name = data.replace('"', '');
        const x = name.replace('"', '')

        const handleClick = () => history.push("./GameCountry");
        const handleSportsClick = () => history.push("./GameTech");
        const handleKnowledgeClick = () => history.push("./GameKnowledge");    
        return(
            <div>
                <div id="output">
                     <label> Welcome {x}</label>
                </div>
                <label >Select Category</label><br/>
                <button onClick={handleClick}>About Lesotho</button>
                <button onClick={handleKnowledgeClick}>General Knowledge</button>
                <button onClick={handleSportsClick}>Technology</button> 
                
            </div>
            
        );
    }
    
    
        return (
            <div>       
                <Router>
                    <Switch>
                        <Route path="/GameCountry"  component={GameCountry}/>
                        <Route path="/GameTech"  component={GameTech}/>
                        <Route path="/GameKnowledge"  component={GameKnowledge}/>
                        <Route path="/"  component={Content}/>
                    </Switch>                    
               </Router> 
            </div>
            
        );

}
export default Category;