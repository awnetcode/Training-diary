import './sliderCounter.css';

// eslint-disable-next-line react/prop-types
const SliderCounter = ({itemActive, setItemActive}) =>{

    console.log(itemActive,setItemActive);
    return(
        <>
        <ul className="counter-list">
            <li className="counter-item"></li>
            <li className="counter-item"></li>
            <li className="counter-item"></li>
            <li className="counter-item"></li>
            <li className="counter-item"></li>
            <li className="counter-item"></li>
        </ul>
        </>
    )
}

export default SliderCounter;