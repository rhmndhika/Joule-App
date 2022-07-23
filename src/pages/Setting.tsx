import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import React from 'react';



const Setting: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle>Setting</IonTitle>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <h1>INI PAGE SETTING</h1>
      </IonContent>
    </IonPage>
  );
};

export default Setting