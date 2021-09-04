import React, {useState} from "react";
import MeleeWeapons from './MeleeWeapons';

const DpsCalc = ({defence, magic, slashDefence, stabDefence, crushDefence, magicDefence, rangedDefence}) => {
    const [weapon, setWeapon] = useState();

    const meleeMaxHit = (strength, strBonus) => {
        return ((1.3 + (strength/10) + (strBonus/80)) + (strength*strBonus)/640).toFixed(0);
    }

    const DPS = (maxHit, speed, accuracy, monsterDef) => {
        var averageDamage = ((maxHit / 2) / speed).toFixed(2);
        var trueAcc = accuracy + 107;
        if(trueAcc > monsterDef){
            var chanceToHit = (1 - (monsterDef+2)/(2*(trueAcc+1)));
            return [(averageDamage*chanceToHit).toFixed(2), (averageDamage*chanceToHit*1.166).toFixed(2)];
        }else{
            var chanceToHit = (trueAcc/(2*(monsterDef+1)));
            return [(averageDamage*chanceToHit).toFixed(2), (averageDamage*chanceToHit*1.166).toFixed(2)];
        }
    }

    const selectWeapon = (val) => {
        switch(val){
            case 'a':
                setWeapon(MeleeWeapons[0]);
                break;
            case 'b':
                setWeapon(MeleeWeapons[1]);
                break;
            case 'c':
                setWeapon(MeleeWeapons[2]);
                break;
            case 'd':
                setWeapon(MeleeWeapons[3]);
                break;
            case 'e':
                setWeapon(MeleeWeapons[4]);
                break;
            case 'f':
                setWeapon(MeleeWeapons[5]);
                break;
            case 'g':
                setWeapon(MeleeWeapons[6]);
                break;
        }
    }

    return (
        <>
            <div class = "row">
                <div class = "col-6">
                    <h1 className="display-6" style = {{fontSize:"35px", textAlign:"left"}}>DPS Calculator</h1>
                </div>
                <div class = "col-6" style = {{textAlign:"left"}}>
                    <select className="ml-10 my-2 p-2 shadow-md rounded-md font-medium" onChange={ val => selectWeapon(val.target.value)}>
                        <option value="">Select Weapon</option>
                        <option value="a">Rune Scimitar</option>
                        <option value="b">Dragon Scimitar</option>
                        <option value="c">Abyssal Whip</option>
                        <option value="d">Blade of Saeldor</option>
                        <option value="e">Ghrazi Rapier</option>
                        <option value="f">Inquisitor Mace</option>
                        <option value="g">Zamorakian Hasta</option>
                    </select>
                </div>
            </div>
            {weapon ? (
                <div class = "row d-flex justify-content-center" style={{marginTop:"20px"}}>
                    <div class = "col" style = {{textAlign:"left", padding:"20px"}}>
                        <h1 className="display-6" style = {{fontSize:"35px"}}>{weapon.name}</h1>
                        <hr></hr>
                        <p>Total acc: {weapon.acc + 78}</p>
                        <p>Total str: {weapon.str + 49}</p>
                        <p>Your max hit is: {meleeMaxHit(99,weapon.str+49)}</p>
                        <p>Assumed Equipment:
                            <img src="https://oldschool.runescape.wiki/images/3/3b/Avernic_defender.png?e4676" alt="avernic" />
                            <img src="https://oldschool.runescape.wiki/images/b/bf/Barrows_gloves.png?3be33" alt="bgloves" />
                            <img src="https://oldschool.runescape.wiki/images/4/41/Amulet_of_torture.png?ec289" alt="torture" />
                            <img src="https://oldschool.runescape.wiki/images/4/42/Primordial_boots.png?e2ec4" alt="prims" />
                            <img src="https://oldschool.runescape.wiki/images/5/5d/Bandos_tassets.png?f928c" alt="tassets" />
                            <img src="https://oldschool.runescape.wiki/images/2/2e/Bandos_chestplate.png?f928c" alt="bcp" />
                        </p>
                    </div>
                    <div class = "col" style = {{textAlign:"left", padding:"20px"}}>
                        <h1 className="display-6" style = {{fontSize:"35px"}}>DPS</h1>
                        <hr></hr>
                        <p style={{fontSize:"50px"}}>{DPS(meleeMaxHit(99, weapon.str+49), weapon.speed, weapon.acc + 78, defence+slashDefence)[0]}</p>
                        <p style={{fontSize:"50px"}}>{DPS(meleeMaxHit(99, weapon.str+49), weapon.speed, weapon.acc + 78, defence+slashDefence)[1]} <img src="https://oldschool.runescape.wiki/images/f/f6/Slayer_helmet.png?7fb98" alt = "slayerhelm" style={{width:"35px", height:"40px"}}/></p>
                    </div>
                </div>
            ) : "No Weapon"}
        </>
    )
}

export default DpsCalc;