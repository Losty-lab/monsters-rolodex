import React from 'react';
import './card-box.css';


export const Card=props=>(

    <div className='card-container'>
<img alt='monster' src={'https://robohash.org/${props.monster.id}?set=set2&sixe=180x180'}
/>
<h2>{props.monsters.name}</h2>
<p>{props.monsters.email}</p>


    </div>



)


