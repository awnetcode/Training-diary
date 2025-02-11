import '../styles/writingArea.css';

import CreateTable from './CreateTable';
import ReadTable from './ReadTable';

// eslint-disable-next-line react/prop-types
const WritingArea = ({content}) =>{

    let display;

    switch(content){
        case 'create':
            display = <CreateTable/>
            break;
        case 'open':
            display = <ReadTable/>
            break;
    }

    return(
        <>
        {display}
        </>
    )
}

export default WritingArea;