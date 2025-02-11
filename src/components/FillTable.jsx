import '../styles/fillTable.css';

const FillTable = () =>{
    return(
        <>
        <div className="fill-table">
            <table className="diary-table" border={1} cellPadding={6}>
                <tr className="table-head">
                    <td>Data:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="table-row">
                    <td className="table-cell">
                        <input type="date" />
                    </td>
                    <td className="table-cell">
                        <input type="text" />
                    </td>
                    <td className="table-cell">
                        <input type="text" />
                    </td>
                    <td className="table-cell">
                        <input type="text" />
                    </td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default FillTable;