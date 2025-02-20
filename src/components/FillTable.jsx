import '../styles/fillTable.css';
import PropTypes from 'prop-types';

const FillTable = ({paramNames}) =>{
    return(
        <>
        <div className="fill-table">
            <table className="diary-table" border={1} cellPadding={6}>
                <thead>
                <tr className="table-head">
                    <td>Data:</td>
                    {paramNames.map((name, i) => (
    <td className="column-title" key={i}>{name}</td>
))}
                </tr>
                </thead>
                <tbody>
                <tr className="table-row">
                    <td className="table-cell">
                        <input type="date" />
                    </td>
                    {paramNames.map((name, i) => (
                        <td key={i}>
                            <input type="text" className="fill-cell"/>
                        </td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

//trzeba dodać prop-types, żeby określić że paramNames jest tablicą i żeby es-lint nie dawał błędu
FillTable.propTypes = {
    paramNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FillTable;