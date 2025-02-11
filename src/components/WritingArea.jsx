import '../styles/writingArea.css';

import CreateTable from './CreateTable';
import FillTable from './FillTable';
import SeeTable from './SeeTable';

// eslint-disable-next-line react/prop-types
const WritingArea = ({content}) =>{

    let display;

    switch(content){
        case 'create':
            display = <CreateTable/>
            break;
        case 'fill':
            display = <FillTable/>
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