import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonItem, IonIcon, IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText, IonCol, IonRow, IonFooter, IonFabButton, IonFab } from '@ionic/react';
import React from 'react';
import './Home.css';
import {qrCode, search,} from 'ionicons/icons'
import CardExamples from '../components/Card';
import Gas from '../Gambar/Gas.jpg';

import Knifers from '../Gambar/knifers.jpg';
import burgerCooked from '../Gambar/TutorialBurger.jpg';
import fishCooked from '../Gambar/fishCooked.jpg';
import cakeCooked from '../Gambar/cakeCooked.jpg';

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', text: 
'a picture of a cat' }];

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle>Home</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonItem slot="end" button routerLink={"/search"} routerDirection="none">
            <IonIcon icon={search}></IonIcon>
            <IonLabel>Search</IonLabel>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src={Knifers} />
        <IonText>
          <h1 className='text1'>Get Your Joule. <br></br>Be Happy.</h1>
        </IonText>
        <IonText>
          <h1 className='text2'>Explore</h1>
        </IonText>
        <IonText>
          <h6>Search by tag</h6>
        </IonText>
        <CardExamples />
        <IonText>
          <h6>Cooking Guides</h6>
        </IonText>
      <IonRow>
        <IonCol>
        <IonCard className='homeCard'>  
            <img className='homeGambar' src={burgerCooked} />
            <h4 className='homeText'>Get Started: Basic Guides</h4>
        </IonCard>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
        <IonCard className='homeCard'>  
            <img className='homeGambar' src={fishCooked} />
            <h4 className='homeText'>Quick & Easy</h4>
        </IonCard>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
        <IonCard className='homeCard'>  
            <img className='homeGambar' src={cakeCooked} />
            <h4 className='homeText'>All the guides</h4>
        </IonCard>
        </IonCol>
      </IonRow>
      <IonFab vertical="bottom" horizontal="center" slot='fixed' >
        <IonButton color='danger' className='fabbutton' shape='round'>
         <p className='textfab'>Search for Joule</p>
        </IonButton>
      </IonFab>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color='light'>
            <IonIcon icon={ qrCode } />
          </IonFabButton>
      </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home