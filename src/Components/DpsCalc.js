import React, {useState} from "react";
import MeleeWeapons from './MeleeWeapons';

const DpsCalc = ({defence, magic, slashDefence, stabDefence, crushDefence, magicDefence, rangedDefence}) => {
    const [weapon, setWeapon] = useState();

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
            {weapon ? <h1>{weapon.name}</h1> : "No Weapon"}
            <h1>Defence: {defence}</h1>
            <h1>Magic: {magic}</h1>
            <h1>Defence: {slashDefence}</h1>
            <h1>Defence: {stabDefence}</h1>
            <h1>Defence: {crushDefence}</h1>
            <h1>Defence: {magicDefence}</h1>
            <h1>Defence: {rangedDefence}</h1>
        </>
    )
}

export default DpsCalc;