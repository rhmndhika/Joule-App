import React from 'react';
import { IonCard, IonCardContent, IonCol, IonRow } from '@ionic/react';


import Beef from '../Gambar/beef.png';
import Chicken from '../Gambar/chicken-leg.png';
import Fish from '../Gambar/clown-fish.png';
import Dessert from '../Gambar/cupcake.png';
import Drink from '../Gambar/drink.png';
import Burger from '../Gambar/hamburger.png';
import Mie from '../Gambar/noodles.png';
import Pig from '../Gambar/pig.png';
import Sheep from '../Gambar/sheep.png';

import './Card.css';


type Item = {
    src: string;
    text: string;
  };
  const category: Item[] = [
    { 
      src: Beef, 
      text: "Beef"
    },
    { 
      src: Chicken, 
      text: "Chicken"
    },
    { 
      src: Fish, 
      text: "Fish"
    },
    { 
      src: Dessert, 
      text: "Dessert"
    },
    { 
      src: Drink, 
      text: "Drink"
    },
    { 
      src: Burger, 
      text: "FastFood"
    },
    { 
      src: Pig, 
      text: "Pig"
    },
    { 
      src: Sheep, 
      text: "Sheep"
    },
    { 
      src: Mie, 
      text: "Noodles"
    }
];
const CardExamples: React.FC = () => {
  return (
    <React.Fragment>
        <IonRow>
        {category.map((itemCategory, i) => (
        <IonCol  size="4" >
        <IonCard className='cards'>
          <img className='gambarCard' src={itemCategory.src} />   
        <IonCardContent>
          <p className='textCard'>{itemCategory.text}</p>
        </IonCardContent>
        </IonCard>
        </IonCol>
        ))}
      </IonRow>
    </React.Fragment>
  );
};

export default CardExamples;