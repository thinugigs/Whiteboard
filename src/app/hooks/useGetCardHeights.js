import {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import DummyCard from "../whiteboard/content/dummyCard/DummyCard";
import {CardType} from "../types/types";

const useGetCardHeights = (cards) => {
    const [cardHeights, setCardHeights] = useState({todo: [], status: []});
    let container = null;


    useEffect(() => {
        container = document.createElement('div');
        container.className = 'dummyCardContainer';
        document.body.appendChild(container)
        observer.observe(container, {
            childList: true,
        });
        const widthOfAColumn = document.getElementsByClassName('column')[0].getBoundingClientRect().width;
        putDummyCards(widthOfAColumn);
    },[])

    const putDummyCards = (cardWidth) => {
        const cardList = cards.todo.map((item, index) => {
            return (<DummyCard key={'todo -' + index} cardWidth={cardWidth} cardData={item} type={CardType.DummyCardTypeTodo}/>)
        })
        const statusList = cards.status.map((item, index) => {
            return (<DummyCard key={'status -' + index} cardWidth={cardWidth} cardData={item} type={CardType.DummyCardTypeStatus}/>)
        })
        const totalList = [...cardList, ...statusList];
        const containerEle = ReactDOM.createRoot(container);
        containerEle.render(totalList);
    }

    const observer = new MutationObserver(() => {
        const children = container.children;
        if(children.length > 0) {
            const heights = {
                todo: [],
                status: []
            };
            for (let child of children) {
                if(child.classList.contains(CardType.DummyCardTypeTodo)) {
                    heights.todo.push(child.clientHeight);
                } else if(child.classList.contains(CardType.DummyCardTypeStatus)) {
                    heights.status.push(child.offsetHeight);
                }
            }

            container.remove();
            setCardHeights(heights)
        }
    });

    return cardHeights;
}

export default useGetCardHeights;