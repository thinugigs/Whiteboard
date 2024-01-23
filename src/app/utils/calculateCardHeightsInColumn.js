const calculateCardHeightsInColumn = (cards, columnHeight) => {

    const cardHeightsReference = Array(cards.length);
    let remainingSpaceHeightInColumn = columnHeight;
    let remainingCardCount = cards.length;

    const setHeights = () => {
        let averageHeightAllocationForACard = remainingSpaceHeightInColumn/remainingCardCount;
        const isThereAnyCardsHavingFullSize = cards.some((card, index) => {
            if(cardHeightsReference[index] === undefined && card.height <= averageHeightAllocationForACard) {
                return true
            } else {
                return false
            }
        });
        if(isThereAnyCardsHavingFullSize) {
            cards.forEach((card, index) => {
                if(cardHeightsReference[index] === undefined && card.height <= averageHeightAllocationForACard) {
                    cardHeightsReference[index] = card.height;
                    remainingSpaceHeightInColumn = remainingSpaceHeightInColumn - card.height;
                    remainingCardCount = remainingCardCount - 1;
                }
            });

            setHeights();
        } else {
            cards.forEach((card, index) => {
                if(cardHeightsReference[index] === undefined) {
                    cardHeightsReference[index] = averageHeightAllocationForACard;
                }
            });
        }
    }

    setHeights();


    return cardHeightsReference;
}

export default calculateCardHeightsInColumn;