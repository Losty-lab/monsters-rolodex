import React from 'react';
import './card-list.css';
import { Card } from '../Card-box/Card-box';



export const CardList = (props)=>{

    return <div className='card-list'>

        {props.monsters.map(monster=>{

        return <Card key={monster.id} monsters={monster}/>
        
        })}

        
        
            



    </div>


    };


