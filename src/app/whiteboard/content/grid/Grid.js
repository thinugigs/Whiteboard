import './grid.css'
import Column from "../column/column";
function Grid({arrangement}) {

    const getColumnTitle = (name, previousName)  => {
        return name === previousName ? '' : name;
    }

    return (
        <>
            <div className='outerTitleContainerContainer'>
                <div className='outerTitleWrapper'>{getColumnTitle(arrangement?.column1.columnType, '')}</div>
                <div className='outerTitleWrapper'>{getColumnTitle(arrangement?.column2.columnType, arrangement?.column1.columnType)}</div>
                <div className='outerTitleWrapper'>{getColumnTitle(arrangement?.column3.columnType, arrangement?.column2.columnType)}</div>
                <div className='outerTitleWrapper'>{getColumnTitle(arrangement?.column4.columnType, arrangement?.column3.columnType)}</div>
                <div className='outerTitleWrapper'>{getColumnTitle(arrangement?.column5.columnType, arrangement?.column4.columnType)}</div>
            </div>
            <div className="grid">
                <div className='columnContainer'>
                    <Column cards={arrangement?.column1.cards}/>
                    <Column cards={arrangement?.column2.cards}/>
                    <Column cards={arrangement?.column3.cards}/>
                    <Column cards={arrangement?.column4.cards}/>
                    <Column cards={arrangement?.column5.cards}/>
                </div>
            </div>
        </>
    );
}

export default Grid;
