import './card.css'
import {useEffect, useRef, useState} from "react";
import ListItem from "../listItem/ListItem";
import {cloneDeep} from "lodash";
const Card = ({cardData, cardMaxHeight}) => {

    const fullItemList = cardData ? cardData?.list: [];
    const [visibleItemList, setVisibleItemList] = useState([])
    const [isSeeMoreButtonShowing, setIsSeeMoreButtonShowing] = useState(false)
    const cardRef = useRef();

    useEffect(() => {
        addOneItemToList();
    }, [])

    useEffect(() => {
        const card = cardRef.current;
        const scrollHeight = card.scrollHeight;
        if(isSeeMoreButtonShowing === false) {
            if(scrollHeight <= cardMaxHeight) {
                addOneItemToList()
            } else {
                setIsSeeMoreButtonShowing(true);
            }
        } else if(isSeeMoreButtonShowing === true) {
            if(scrollHeight > cardMaxHeight) {
                removeLastItemFromList();
            }
        }


    }, [visibleItemList, isSeeMoreButtonShowing])

    const addOneItemToList = () => {
        if(fullItemList.length > visibleItemList.length) {
            const newItemList = cloneDeep(visibleItemList);
            newItemList.push(<ListItem key={visibleItemList.length} text={fullItemList[visibleItemList.length]} />)
            setVisibleItemList(newItemList)
        }
    }

    const removeLastItemFromList = () => {
        const newItemList = cloneDeep(visibleItemList);
        if(newItemList.length > 0) {
            newItemList.pop()
            setVisibleItemList(newItemList)
        }
    }


    return (
        <div ref={cardRef} className='card' style={{maxHeight: cardMaxHeight + 'px'}}>
            <div className='cardWrapper'>
                <div className='cardTitle'>{cardData?.title}</div>
                <div id="listWrapper" className="listWrapper">
                    {visibleItemList}
                </div>
                {isSeeMoreButtonShowing && <div className='readMoreButtonWrapper'>
                    <div className='readMoreButton'>Read more {fullItemList.length - visibleItemList.length}</div>
                </div>}
            </div>
        </div>
    )
}

export default Card;