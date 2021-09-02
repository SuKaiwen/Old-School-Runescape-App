import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Body() {
    const [monster, setMonster] = useState([]);

    useEffect(() => {
        getMonster();
    }, []);

    const getMonster = async term => {
        const res = await fetch('https://api.osrsbox.com/monsters?where={ "name": "Abyssal demon", "duplicate": false }');
        const data = await res.json();
        console.log(data._items[0]);
        await setMonster(data._items[0]);
    }

    return (
        <div className="container">
            <div className = "row" style = {{marginTop:"200px"}}>
                <div class="col-md-6 col-lg-4 px-9" style = {{alignItem:"center", justifyContent:"center", textAlign:"center"}}>
                    <img src = "https://oldschool.runescape.wiki/images/2/21/Abyssal_demon.png" style = {{width:"250px", height:"250px", backgroundColor:"#ab987a", borderRadius:"50%", border:"10px solid #f5f5f5"}}alt={monster.name} />
                    <h1 className="display-4">{monster.name}</h1>
                    <h1 className="display-4" style = {{fontSize:"25px"}}>{monster.combat_level}</h1>
                    <div style = {{textAlign:"left", marginTop:"30px"}}>
                        <h1 className="display-4" style = {{fontSize:"20px"}}>{monster.members ? "Members Only" : "Non Members"}</h1>
                        <h1 className="display-4" style = {{fontSize:"20px"}}>Type: {monster.attributes[0]}</h1>
                        <h1 className="display-4" style = {{fontSize:"20px"}}>Stance: {monster.aggressive ? "aggressive" : "non-aggressive"}</h1>
                        <h1 className="display-4" style = {{fontSize:"20px"}}>Size: {monster.size} tile</h1>
                        <h1 className="display-4" style = {{fontSize:"20px"}}>{monster.examine}</h1>
                        <h1 className="display-4" style = {{fontSize:"20px"}}>{monster.release_date}</h1>
                    </div>
                </div>
                <div class="col-md-6 col-lg-8">
                    <h1 className="display-4">Stat overview</h1>
                    <hr></hr>
                    <h1 className="display-6">Combat Stats</h1>

                    <ul class = "list-group" style={{width:"200px"}}>
                        <li class ="list-group-item list"><img src="https://oldschool.runescape.wiki/images/9/96/Hitpoints_icon.png?a4819" alt="health" /> Health: {monster.hitpoints} HP</li>
                        <li class ="list-group-item list">pepe</li>
                        <li class ="list-group-item list">pepe</li>
                        <li class ="list-group-item list">pepe</li>
                        <li class ="list-group-item list">pepe</li>
                        <li class ="list-group-item list">pepe</li>
                        <li class ="list-group-item list">pepe</li>
                    </ul>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                </div>

            </div>
        </div>
    );
}

export default Body;