import React from 'react';
import s from './App.module.css'
import {Header} from "../components/Header";
import {Title} from "../components/common/Title";
import {UpSection} from "../components/UpSection";
import {LowSection} from "../components/LowSection";
import {SliderComponent} from "../components/Slider";
import {Footer} from "../components/Footer";

function App() {
  return (
    <div>
        <Header />
        <main className={s.mainBlock}>
            <Title titleName='ut aliquip ex ea commodo consequat' />
            <UpSection />
            <Title titleName='Lorem ipsum dolor sit amet' />
            <SliderComponent />
            <Title titleName='ut aliquip ex ea commodo consequat' />
            <LowSection />
            <Footer />
        </main>
    </div>
  );
}

export default App;
