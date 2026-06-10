import { useState } from 'react'
import StoreCard from './components/StoreCard';
import './App.css'

function App() {

  return (
    <main>
      <div className="background">
          <div className="title-container">
          <h1>Handmade for you!</h1>
          </div>
      
      <section className="stores-grid">
          <StoreCard 
            storeName="Memento Jewelry" 
            storeDetail="Jewelry" 
            websiteUrl="https://www.instagram.com/mementojewelryrd/"
            imgsrc="image01.jpg" 
          />
          <StoreCard 
            storeName="Desayuno Personalizado" 
            storeDetail="Breakfast Trays"
            websiteUrl="https://www.instagram.com/mementojewelryrd/"
            imgsrc="image02.jpg" 
          />
          <StoreCard 
            storeName="Mi Bandeja RD" 
            storeDetail="Breakfast Trays"
            websiteUrl="https://www.instagram.com/mibandeja.rd/"
            imgsrc="image03.jpg" 
          />
          <StoreCard 
            storeName="Artypical Studio" 
            storeDetail="Custom Textiles"
            websiteUrl="https://www.instagram.com/artypical.do/"
            imgsrc="image04.jpg" 
          />
          <StoreCard 
            storeName="Noctilana" 
            storeDetail="Crochet"
            websiteUrl="https://www.instagram.com/noctilana/"
            imgsrc="image05.jpg" 
          />
          <StoreCard 
            storeName="Lasmarias Crochet" 
            storeDetail="Crochet"
            websiteUrl="https://www.instagram.com/lasmarias.crochett/"
            imgsrc="image06.jpg" 
          />
          <StoreCard 
            storeName="Yarn Essence" 
            storeDetail="Crochet"
            websiteUrl="https://www.instagram.com/yarn_essence/"
            imgsrc="image07.jpg" 
          />
          <StoreCard 
            storeName="Nila Crochet RD" 
            storeDetail="Crochet"
            websiteUrl="https://www.instagram.com/nilacrochetrd/"
            imgsrc="image08.jpg" 
          />
          <StoreCard 
            storeName="The Brownie Spot" 
            storeDetail="Pastries"
            websiteUrl="https://www.instagram.com/browniesspot/"
            imgsrc="image09.jpg" 
          />
          <StoreCard 
            storeName="Talleres Glass" 
            storeDetail="Pottery"
            websiteUrl="https://www.instagram.com/talleres_glass/"
            imgsrc="image10.jpg" 
          />
        </section>
      </div>
      </main>
  );
};

export default App
