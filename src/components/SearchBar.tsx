import { IonContent, IonHeader, IonPage,IonToolbar, IonButtons, IonBackButton, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonItem, IonLabel } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import { IonSearchbar} from '@ionic/react';
import InputControls from './InputControl';


import cakeCooked from '../Gambar/cakeCooked.jpg';
import TutorialBurger from '../Gambar/TutorialBurger.jpg';
import fishCooked from '../Gambar/fishCooked.jpg';


type Item = {
  id: number;
  text: string;
};

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState<'all' | 'joule'>('all');
  
  const selectPageUnitHandler = (selectedValue: 'all' | 'joule') => { 
    setPage(selectedValue);
  }

  const SEARCH = [
    {
      id: "1",
      title: "Tab",
      tipe: "Makanan",
      detail: "Tasty, Tender Baby Bok Choy",
      src: fishCooked
    },
    {
      id: "2",
      title: "Tab",
      tipe: "Makanan",
      detail: "Tasty Cake",
      src: cakeCooked
    },
    {
      id: "3",
      title: "Tab",
      tipe: "Makanan",
      detail: "Delicious Burger",
      src: TutorialBurger
    },
  ];
  const [filteredSearch, setFilteredSearch] = useState([
    {
      id: "",
      title: "",
      detail: "",
      src: ""
    }])

  useEffect(() => {
    
      let tempSearchResult = SEARCH.filter(ele => ele.title.includes(searchText))
      setFilteredSearch([...tempSearchResult])
  },[searchText])



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot={"start"}>
          <IonBackButton defaultHref={"/home"} />
          </IonButtons> 
          <IonSearchbar showClearButton='always' value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <InputControls selectedValue={page} onSelectValue={selectPageUnitHandler} />
         
            <IonRow>
            <IonCol>
              {SEARCH.map((search) => (
                 <IonCard className='Card1'>  
                  <h1>{search.title}({page === 'all' ? 'all' : 'joule'})</h1>
                 <img className='Gambar1' src={search.src} />
                 <h4 className='homeText'>{search.detail}</h4>
             </IonCard>
              ))}
            </IonCol>
         </IonRow>

       

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SearchBar
