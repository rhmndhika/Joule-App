
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonContent } from '@ionic/react';
import React from 'react';


const Help: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle>Help</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <h1>INI PAGE HELP</h1>
      </IonContent>
    </IonPage>
  );
};

export default Help