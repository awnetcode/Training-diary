import '../styles/writingArea.css';

import CreateTable from './CreateTable';
import FillTable from './FillTable';
import SeeTable from './SeeTable';

import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const WritingArea = ({content}) =>{

    const [columnsNumber, setColumnsNumber] = useState(0);
    const [paramNames, setParamNames] = useState([]);

    let display;

    switch(content){
        case 'create':
            display = <CreateTable 
            columnsNumber = {columnsNumber}
            setColumnsNumber = {setColumnsNumber}
            paramNames = {paramNames}
            setParamNames = {setParamNames}            
            />
            break;
        case 'fill':
            display = <FillTable
            paramNames = {paramNames}
            />
            break;
        case 'see':
            display = <SeeTable/>
            break;
    }

    return(
        <>
        {display}
        </>
    )
}

export default WritingArea;