import logo from './logo.svg';
import './App.css';
import data from './talento.json';
import React, { useState } from 'react';


function App() 
{


  const [selectedTeam, setSelectedTeam] = useState(0);



  console.log(data.Teams[selectedTeam])

  return (
    <div className="App">
      
      <div className="container">       
      
    
        {data.Teams.map(team => (  
          <button onClick={() => setSelectedTeam(data.Teams.indexOf(team))}>  
            {team.Name}  
          </button>  
        ))}  
     
      </div> 

      <div className="dasd">

      <h4> Trainers </h4>
        
        {data.Teams[selectedTeam].Trainer.map(name => (  
          <p>
            {name}  
          </p>  
        ))}  
          
        </div> 

        <div className="dasd">

          <h4> Players </h4>
        
          {data.Teams[selectedTeam].Player.map(name => (  
          <p>
            {name}  
          </p>  
        ))}  
          
        </div> 

    </div>
  );
}

export default App;
