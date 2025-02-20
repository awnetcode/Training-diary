import '../styles/createTable.css';


// eslint-disable-next-line react/prop-types
const CreateTable = ({columnsNumber, setColumnsNumber, paramNames, setParamNames}) =>{

    
    const paraNames = ['Pierwszy', 'Drugi', 'Trzeci', 'Czwarty', 'Piąty'];

    console.log(paramNames);

    const createTableHeader = (e, index) => {
        setParamNames(prev => {
            const newNames = [...prev];
            newNames[index] = e.target.value;
            return newNames;
        });
    };

    return(
        <>
        <div className="create-table">
            <label htmlFor="first">Ilość kolumn:
                <select  
                id="" 
                className="columns-number"
                onChange={(e) => setColumnsNumber(Number(e.target.value))} 
                name='first'
                >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            {Array.from({ length: columnsNumber }).map((_, i) => (
                        <div key={i} className="column"> 
                            <span>{`${paraNames[i]} parametr:`}</span>
                            <input 
                            type="text" 
                            className='column-name' 
                            onInput={(e) => createTableHeader(e, i)}
                            />
                        </div>
                    ))}
        </div>
        </>
    )
}

export default CreateTable;