import './dummyCard.css'
import ListItem from "../listItem/ListItem";
const DummyCard = ({cardData, cardWidth, type}) => {

    const fullItemList = cardData ? cardData?.list: [];

    return (
        <div className={`Dcard ${type}`} style={{width: cardWidth}}>
            <div className='DcardWrapper'>
                <div className='DcardTitle'>{cardData?.title}</div>
                <div id="DlistWrapper" className="DlistWrapper">
                    {fullItemList.map((item, index) => {
                        return <ListItem key={type + '-' + index} text={item} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default DummyCard;