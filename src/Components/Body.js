import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Body() {
    const [monster, setMonster] = useState([]);
    const [masters, setMasters] = useState([]);
    const [drops, setDrops] = useState([]);

    useEffect(() => {
        getMonster();
    }, []);

    const getMonster = async term => {
        const res = await fetch('https://api.osrsbox.com/monsters?where={ "name": "Abyssal demon", "duplicate": false }');
        const data = await res.json();
        console.log(data._items[0]);
        await setMonster(data._items[0]);
        setMasters(data._items[0].slayer_masters);
        setDrops(data._items[0].drops);
    }

    return (
        <div className="container">
            <div className = "row" style = {{marginTop:"200px"}}>
                <div class="col-lg-4 px-9" style = {{alignItem:"center", justifyContent:"center", textAlign:"center"}}>
                    <img src = "https://oldschool.runescape.wiki/images/2/21/Abyssal_demon.png" style = {{width:"250px", height:"250px", backgroundColor:"#ab987a", borderRadius:"50%", border:"10px solid #f5f5f5"}}alt={monster.name} />
                    <h1 className="display-4">{monster.name}</h1>
                    <h1 className="display-4" style = {{fontSize:"25px"}}>{monster.combat_level}</h1>
                    <div style = {{textAlign:"left", marginTop:"30px"}}>
                        <h1 className="display-4" style = {{fontSize:"20px"}}>{monster.members ? "Members Only" : "Non Members"}</h1>

                        <h1 className="display-4" style = {{fontSize:"20px"}}>Type: {monster.attributes}</h1>
                        <h1 className="display-4" style = {{fontSize:"20px"}}>Stance: {monster.aggressive ? "aggressive" : "non-aggressive"}</h1>
                        <h1 className="display-4" style = {{fontSize:"20px"}}>Size: {monster.size} tile</h1>
                        <h1 className="display-4" style = {{fontSize:"20px"}}>{monster.examine}</h1>
                        <h1 className="display-4" style = {{fontSize:"20px"}}>{monster.release_date}</h1>
                    </div>
                </div>
                <div class="col-lg-8">
                    <h1 className="display-4">Stat overview</h1>
                    <hr></hr>
                    <h1 className="display-6" style = {{fontSize:"35px"}}>Combat Stats</h1>
                    <div class = "row d-flex justify-content-center shadow-lg" style={{border:"1px solid #6b7a8f", borderRadius:"10px", padding:"20px"}}>
                        <div class = "col-sm-6" style = {{textAlign:"left"}}>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/9/96/Hitpoints_icon.png?a4819" alt="health" /> Health: {monster.hitpoints}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/f/fe/Attack_icon.png?b4bce" alt="health" /> Attack: {monster.attack_level}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/b/b7/Defence_icon.png?ca0cd" alt="health" /> Defense: {monster.defence_level}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/c/ca/Poison_hitsplat.png?16146" alt="health" /> {monster.poisonous ? "Poisonous" : "Non-poisonous"}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/3/37/Venom_hitsplat.png?1977a" alt="health" /> {monster.venomous ? "Venomous" : "Non-venomous"}</h1>
                        </div>
                        <div class = "col-sm-6" style = {{textAlign:"left"}}>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/1/1b/Strength_icon.png?e6e0c" alt="health" /> Strength: {monster.strength_level}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/5/5c/Magic_icon.png?334cf" alt="health" /> Magic: {monster.magic_level}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/1/19/Ranged_icon.png?01b0e" alt="health" /> Ranged: {monster.ranged_level}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/a/a6/Damage_hitsplat.png?1977a" alt="health" /> Max Hit: {monster.max_hit}</h1>
                        </div>
                    </div>
                    <div class = "row d-flex justify-content-center" style={{marginTop:"20px"}}>
                        <div class = "col" style = {{textAlign:"left", padding:"20px"}}>
                            <h1 className="display-6" style = {{fontSize:"35px"}}>Agressive Stats</h1>
                            <hr></hr>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/f/fe/Attack_icon.png?b4bce" alt="health" /> Attack Bonus: {monster.attack_bonus}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/1/1b/Strength_icon.png?e6e0c" alt="health" /> Strength Bonus: {monster.strength_bonus}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/5/5c/Magic_icon.png?334cf" alt="health" /> Magic Bonus: {monster.magic_bonus}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/1/19/Ranged_icon.png?01b0e" alt="health" /> Ranged Bonus: {monster.ranged_bonus}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/8/8b/Dragon_scimitar.png?cc5f3" alt="health" /> Attack Types: {monster.attack_type}</h1>
                        </div>
                        <div class = "col" style = {{textAlign:"left", padding:"20px"}}>
                            <h1 className="display-6" style = {{fontSize:"35px"}}>Defensive Stats</h1>
                            <hr></hr>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/3/36/Steel_dagger.png?f410d" alt="health" /> Stab Defense: {monster.defence_stab}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/7/78/Steel_scimitar.png?0395b" alt="health" /> Slash Defense: {monster.defence_slash}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/0/00/Steel_warhammer.png?1a4de" alt="health" /> Crush Defense: {monster.defence_crush}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/5/5c/Magic_icon.png?334cf" alt="health" /> Magic Defense: {monster.defence_magic}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/1/19/Ranged_icon.png?01b0e" alt="health" /> Ranged Defense: {monster.defence_ranged}</h1>
                        </div>
                    </div>
                    <div class = "row d-flex justify-content-center" style={{marginTop:"20px"}}>
                        <div class = "col" style = {{textAlign:"left", padding:"20px"}}>
                            <h1 className="display-6" style = {{fontSize:"35px"}}>Slayer Info</h1>
                            <hr></hr>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/2/28/Slayer_icon.png?cd34f" alt="health" /> Slayer Level: {monster.slayer_level}</h1>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/2/28/Slayer_icon.png?cd34f" alt="health" /> Slayer XP: {monster.slayer_xp}</h1>

                        </div>
                        <div class = "col" style = {{textAlign:"left", padding:"20px"}}>
                            <h1 className="display-6" style = {{fontSize:"35px"}}>Slayer Tasks</h1>
                            <hr></hr>
                            <h1 className="display-4" style = {{fontSize:"25px"}}><img src="https://oldschool.runescape.wiki/images/2/28/Slayer_icon.png?cd34f" alt="health" /> Assigned by: </h1>
                            <ul>
                                {masters.map((master) =>
                                    <li>{master}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <h1 className="display-6" style = {{fontSize:"35px"}}>Drops</h1>
                    <div class = "row d-flex justify-content-center" style = {{textAlign:"left"}}>
                        <table class = "table table-dark">
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Quantity</th>
                                    <th>Noted</th>
                                    <th>Rarity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {drops.map((drop) =>
                                    <tr>
                                        <td>{drop.name}</td>
                                        <td>{drop.quantity}</td>
                                        <td>{drop.noted ? "Noted" : "Un-noted"}</td>
                                        <td>1 in {(1 / drop.rarity).toFixed(0)}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        <div class = "col">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;