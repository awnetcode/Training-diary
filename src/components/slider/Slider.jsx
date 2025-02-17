import './slider.css';

import { useState } from 'react';

import SliderCounter from './SliderCounter';

const Slider = () => {

    const [itemActive, setItemActive] = useState(0);

    return(
        <div id="slider-container">
            <img src="" alt="" className="slider-image" />
            <SliderCounter
            itemActive={itemActive}
            setItemActive={setItemActive}
            />
        </div>
    )
}

export default Slider;