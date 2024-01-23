import useGetCardHeights from "./useGetCardHeights";
import {useEffect, useState} from "react";
import {ColumnArrangementStructure, ColumnTypes} from "../types/types";

const useArrangeColumns = (initialData) => {
    const [columnArrangement, setColumnArrangement] = useState(null);
    const cardHeights = useGetCardHeights(initialData);

    useEffect(() => {
        arrangeColumns()
    }, [cardHeights])
    const arrangeColumns = () => {
        const initialColumnArrangement = ColumnArrangementStructure
        if(cardHeights.todo.length > 0 && cardHeights.status.length > 0) {
            const isFarmTasksAvailable = initialData.farmTasks.length > 0;
            const columnHeight = document.getElementsByClassName('column')[0].getBoundingClientRect().height;


            initialColumnArrangement.column5.columnType = ColumnTypes.Tags

            const todoTotalHeight = cardHeights.todo.reduce(
                (height, currentValue) => height + currentValue,
                0,
            );

            const statusTotalHeight = cardHeights.status.reduce(
                (height, currentValue) => height + currentValue,
                0,
            );

            if(todoTotalHeight > columnHeight && statusTotalHeight > columnHeight) {
                if (isFarmTasksAvailable === false) {
                    initialColumnArrangement.column1.columnType = ColumnTypes.Todo;
                    initialColumnArrangement.column2.columnType = ColumnTypes.Todo;
                    initialColumnArrangement.column3.columnType = ColumnTypes.Status;
                    initialColumnArrangement.column4.columnType = ColumnTypes.Status;
                } else {
                    const todoCardCount = initialData.todo.length;
                    const statusCardCount = initialData.status.length;
                    if(todoCardCount > statusCardCount) {
                        initialColumnArrangement.column1.columnType = ColumnTypes.Todo;
                        initialColumnArrangement.column2.columnType = ColumnTypes.Todo;
                        initialColumnArrangement.column3.columnType = ColumnTypes.Farm;
                        initialColumnArrangement.column4.columnType = ColumnTypes.Status;
                    } else if(todoCardCount < statusCardCount) {
                        initialColumnArrangement.column1.columnType = ColumnTypes.Todo;
                        initialColumnArrangement.column2.columnType = ColumnTypes.Farm;
                        initialColumnArrangement.column3.columnType = ColumnTypes.Status;
                        initialColumnArrangement.column4.columnType = ColumnTypes.Status;
                    } else {
                        // todoCardCount === statusCardCount
                        if(todoTotalHeight >= statusTotalHeight) {
                            initialColumnArrangement.column1.columnType = ColumnTypes.Todo;
                            initialColumnArrangement.column2.columnType = ColumnTypes.Todo;
                            initialColumnArrangement.column3.columnType = ColumnTypes.Farm;
                            initialColumnArrangement.column4.columnType = ColumnTypes.Status;
                        } else {
                            initialColumnArrangement.column1.columnType = ColumnTypes.Todo;
                            initialColumnArrangement.column2.columnType = ColumnTypes.Farm;
                            initialColumnArrangement.column3.columnType = ColumnTypes.Status;
                            initialColumnArrangement.column4.columnType = ColumnTypes.Status;
                        }
                    }
                }
            } else if(todoTotalHeight < columnHeight) {
                // here statusTotalHeight can be > or < columnHeight
                initialColumnArrangement.column1.columnType = ColumnTypes.Todo;
                initialColumnArrangement.column3.columnType = ColumnTypes.Status;
                initialColumnArrangement.column4.columnType = ColumnTypes.Status;
                if(isFarmTasksAvailable === false) {
                    initialColumnArrangement.column2.columnType = ColumnTypes.Status;
                } else {
                    initialColumnArrangement.column2.columnType = ColumnTypes.Farm;
                }
            } else {
                // here todoTotalHeight > columnHeight and statusTotalHeight < columnHeight
                initialColumnArrangement.column1.columnType = ColumnTypes.Todo;
                initialColumnArrangement.column2.columnType = ColumnTypes.Todo;
                initialColumnArrangement.column4.columnType = ColumnTypes.Status;
                if(isFarmTasksAvailable === true) {
                    initialColumnArrangement.column3.columnType = ColumnTypes.Farm;
                } else {
                    const columnsRequiredForTodo = Math.ceil(todoTotalHeight/columnHeight);
                    if(columnsRequiredForTodo >= 3) {
                        // if two columns not enough for t0do0 then give third column to it as well
                        initialColumnArrangement.column3.columnType = ColumnTypes.Todo;
                    } else {
                        // means two columns enough for t0d0, so give third column to status
                        initialColumnArrangement.column3.columnType = ColumnTypes.Status;
                    }
                }
            }

            arrangeCards(initialColumnArrangement);
        }
    }

    const arrangeCards = (initialColumnArrangement) => {

        const isFarmTasksAvailable = initialData.farmTasks.length > 0;
        const columnHeight = document.getElementsByClassName('column')[0].getBoundingClientRect().height;

        let numberOfColumnsForTodo = 0;
        let numberOfColumnsForStatus = 0;

        for (var column in initialColumnArrangement) {
            const columnType = initialColumnArrangement[column].columnType;
            if(columnType === ColumnTypes.Todo) {
                numberOfColumnsForTodo = numberOfColumnsForTodo + 1;

            } else if(columnType === ColumnTypes.Status) {
                numberOfColumnsForStatus = numberOfColumnsForStatus + 1;
            }
        }
        const todoCardHeights = cardHeights.todo;
        const statusCardHeights = cardHeights.status;

        const todoCardsHeightsTotal = todoCardHeights.reduce((partialSum, a) => partialSum + a, 0);
        const statusCardsHeightsTotal = statusCardHeights.reduce((partialSum, a) => partialSum + a, 0);

        const todoFirstColumn = 1;
        const statusFirstColumn = numberOfColumnsForTodo + 1 + (isFarmTasksAvailable ? 1 : 0)

        const todoCards = initialData.todo;
        const statusCards = initialData.status;

        const todoCardsWithHeights = todoCards.map((card, index) => {
            return {
                card: card,
                height: cardHeights.todo[index]
            }
        })

        const statusCardsWithHeights = statusCards.map((card, index) => {
            return {
                card: card,
                height: cardHeights.status[index]
            }
        })

        // t0d0 all
        if(todoCardsHeightsTotal <= columnHeight) {
            initialColumnArrangement['column'+todoFirstColumn].cards = [...todoCardsWithHeights]
        } else if(todoCardsHeightsTotal > columnHeight) {
            const cardHeightProportion = (columnHeight * numberOfColumnsForTodo) / todoCardsHeightsTotal;
            let runningColumnCount = 0;
            let cardHeightTotalForCurrentColumn = 0;
            todoCardHeights.forEach((cardHeight, index) => {
                const cardHeightBasedOnProportion = cardHeight * (cardHeightProportion > 1 ? 1 : cardHeightProportion);
                if( (runningColumnCount + 1 === numberOfColumnsForTodo) || ((cardHeightTotalForCurrentColumn + cardHeightBasedOnProportion) < columnHeight) ) {
                    // then can insert this card to current column
                    cardHeightTotalForCurrentColumn = cardHeightTotalForCurrentColumn + cardHeightBasedOnProportion;
                    const runningColumnPosition = todoFirstColumn + runningColumnCount
                    initialColumnArrangement['column'+runningColumnPosition].cards.push(todoCardsWithHeights[index]);
                } else {
                    runningColumnCount = runningColumnCount + 1;
                    cardHeightTotalForCurrentColumn = 0;
                    const runningColumnPosition = todoFirstColumn + runningColumnCount
                    initialColumnArrangement['column'+runningColumnPosition].cards.push(todoCardsWithHeights[index]);
                }
            })
        }


        // status all
        if(statusCardsHeightsTotal < columnHeight) {
            initialColumnArrangement['column'+statusFirstColumn].cards = [...statusCardsWithHeights]
        } else if(statusCardsHeightsTotal > columnHeight) {
            const cardHeightProportion = (columnHeight * numberOfColumnsForStatus) / statusCardsHeightsTotal;
            let runningColumnCount = 0;
            let cardHeightTotalForCurrentColumn = 0;
            statusCardHeights.forEach((cardHeight, index) => {
                const cardHeightBasedOnProportion = cardHeight * (cardHeightProportion > 1 ? 1 : cardHeightProportion);
                if( (runningColumnCount + 1 === numberOfColumnsForStatus) || ((cardHeightTotalForCurrentColumn + cardHeightBasedOnProportion) < columnHeight) ) {
                    // then can insert this card to current column
                    cardHeightTotalForCurrentColumn = cardHeightTotalForCurrentColumn + cardHeightBasedOnProportion;
                    const runningColumnPosition = statusFirstColumn + runningColumnCount
                    initialColumnArrangement['column'+runningColumnPosition].cards.push(statusCardsWithHeights[index]);
                } else {
                    runningColumnCount = runningColumnCount + 1;
                    cardHeightTotalForCurrentColumn = 0;
                    const runningColumnPosition = statusFirstColumn + runningColumnCount
                    initialColumnArrangement['column'+runningColumnPosition].cards.push(statusCardsWithHeights[index]);
                }
            })
        }

        setColumnArrangement(initialColumnArrangement);
    }


    return columnArrangement;
}

export default useArrangeColumns;