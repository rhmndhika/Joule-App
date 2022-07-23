import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';


const InputControls: React.FC<{
    selectedValue: 'all' | 'joule' ;
    onSelectValue: (value: 'all' | 'joule') => void
}> = props => {

    const inputChangeHandler = (event:CustomEvent) => {
        props.onSelectValue(event.detail.value);
    };

    return (
        <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
          <IonSegmentButton value="all">
            <IonLabel>All</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="joule">
            <IonLabel>Joule App</IonLabel>
          </IonSegmentButton>
        </IonSegment>
  );
};

export default InputControls;