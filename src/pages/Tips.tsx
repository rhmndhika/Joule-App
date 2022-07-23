import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonText, IonItem, IonLabel } from '@ionic/react';
import React from 'react';


const Tips: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle>Tips</IonTitle>
            <IonButtons slot="start">
               <IonMenuButton />
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>INI PAGE TIPS</h1>
      </IonContent>
    </IonPage>
   
  );
};

export default Tips;
