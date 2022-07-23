import React from 'react';
import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonIcon,
  } from "@ionic/react";
import './Menu.css';
import Knife from '../Gambar/knife-and-fork.png'
import { home, cog, bulb, helpCircle,} from 'ionicons/icons'
  
export const Menu = () => {
  return (
    <IonMenu side="start" contentId="main">
      <IonHeader >
        <IonToolbar color="light">
          <IonTitle>MENU</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content" >
        <IonList className="list" >
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/home"} routerDirection="none">
            <IonIcon slot="start" icon={home}></IonIcon>
            <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/tips"} routerDirection="none">
              <IonIcon slot="start" icon={bulb}></IonIcon>
              <IonLabel>Tips & Trick</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/help"} routerDirection="none">
              <IonIcon slot="start" icon={helpCircle}></IonIcon>
              <IonLabel>Help & Support </IonLabel>
            </IonItem>
            <IonItem button routerLink={"/setting"} routerDirection="none">
              <IonIcon slot="start" icon={cog}></IonIcon>
              <IonLabel>Setting </IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
        <img className="gambarKnife" src={Knife} />
      </IonContent>
    </IonMenu>
    );
};

