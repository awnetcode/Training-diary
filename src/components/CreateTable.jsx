import '../styles/createTable.css';

const CreateTable = () =>{
    return(
        <>
        <div className="create-table">
            <label htmlFor="date">Data:
                <input type="date" name='date'/>
            </label>
            <label htmlFor="first">Pierwszy Parametr:
                <input type="text" name='first'/>
            </label>
            <label htmlFor="second">Drugi Parametr:
                <input type="text" name='second'/>
            </label>
            <label htmlFor="third">Trzeci Parametr:
                <input type="text" name='third'/>
            </label>
        </div>
        </>
    )
}

export default CreateTable;