import '../styles/createTable.css';

import { useState } from 'react';

const CreateTable = () =>{

    const [columnsNumber, setColumnsNumber] = useState(0);
    const paraNames = ['Pierwszy', 'Drugi', 'Trzeci', 'Czwarty', 'Piąty'];

    return(
        <>
        <div className="create-table">
            <label htmlFor="first">Ilość kolumn:
                <select  
                id="" 
                className="columns-number"
                onChange={(e) => setColumnsNumber(Number(e.target.value))} 
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
                        <div key={i} className="column">{`${paraNames[i]} parametr:`}</div>
                    ))}
        </div>
        </>
    )
}

export default CreateTable;