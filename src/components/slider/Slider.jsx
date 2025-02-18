import './slider.css';

import { useState, useEffect } from 'react';

import SliderCounter from './SliderCounter';

import carlGustaf from './slider-images/Carl Gustaf.jpg';
import ingram from './slider-images/ingram.jpg';
import rossi from './slider-images/rossi Lever Action.jpg';
import saa from './slider-images/SAA revolver.jpg';
import sbr from './slider-images/SBR AR.avif';
import uzi from './slider-images/uzi.jpg';

const Slider = () => {

    const images = [carlGustaf, ingram, rossi, saa, sbr, uzi]
    const [itemActive, setItemActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setItemActive(prev => (prev + 1) % images.length); // Zapętlenie indeksu
        }, 5000);

        return () => clearInterval(interval); // Czyszczenie interwału przy odmontowaniu
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <div id="slider-container">
            <img src={images[itemActive]} alt="" className="slider-image" />
            <SliderCounter
            itemActive={itemActive}
            setItemActive={setItemActive}
            />
        </div>
    )
}

export default Slider;