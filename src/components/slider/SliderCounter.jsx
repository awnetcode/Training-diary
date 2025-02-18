import './sliderCounter.css';

// eslint-disable-next-line react/prop-types
const SliderCounter = ({itemActive, setItemActive}) =>{

    const totalItems = 6; // Liczba kropek (powinna odpowiadać liczbie obrazków)

    return (
        <ul className="counter-list">
            {[...Array(totalItems)].map((_, index) => (
                <li 
                    key={index} 
                    className={`counter-item ${index === itemActive ? "counter-item-active" : ""}`}
                    onClick={() => setItemActive(index)} // Możesz dodać kliknięcie do zmiany aktywnego slajdu
                ></li>
            ))}
        </ul>
    );
}

export default SliderCounter;