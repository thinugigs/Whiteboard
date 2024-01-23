import './column.css'
import Card from "../card/card";
import {useEffect, useState} from "react";
import calculateCardHeightsInColumn from "../../../utils/calculateCardHeightsInColumn";

const Column = ({cards}) => {
    let [cardAllocatedHeights, setCardAllocateHeights] = useState(null);

    useEffect(() => {
        const columnHeight = document.getElementsByClassName('column')[0]?.getBoundingClientRect().height;
        if(cards !== undefined && columnHeight !== undefined && cards.length > 0) {
            const cardAllocatedHeights = calculateCardHeightsInColumn(cards, columnHeight);
            setCardAllocateHeights(cardAllocatedHeights);
        }
    }, [cards])


    return (
        <div className='column'>
            {cardAllocatedHeights && cards?.map((card, index) => {
                return <Card key={index} cardData={card.card} cardMaxHeight={cardAllocatedHeights[index]}/>
            })}

        </div>
    );
}

export default Column;