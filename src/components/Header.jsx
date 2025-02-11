import '../styles/header.css';

// eslint-disable-next-line react/prop-types
const Header = ({setContent}) =>{
    return(
        <>
        <header className="page-header">
            <h1>Dziennik treningowy</h1>
            <div className="buttons-panel">
                <button onClick={() =>setContent('create')}>Utwórz tabelę</button>
                <button onClick={() =>setContent('open')}>Otwórz tabelę</button>
            </div>
        </header>
        </>
    )
}

export default Header;