export const CardType = {
    DummyCardTypeTodo: 'DummyCardTypeTodo',
    DummyCardTypeStatus: 'DummyCardTypeStatus'
}

export const ColumnTypes = {
    Todo: "Todo",
    Farm: "Farm",
    Status: "Status",
    Tags: "Tags"
}

// following is an example for columnStructure
export const columnStructure = {
    columnType: ColumnTypes.Todo,
    cardStructure: [
        {
            cards: '{put the card object{title:string, list:[string]}} to here',
        }
    ]
}

export const ColumnArrangementStructure = {
    column1: {
        columnType: '',
        cards: []
    },
    column2: {
        columnType: '',
        cards: []
    },
    column3: {
        columnType: '',
        cards: []
    },
    column4: {
        columnType: '',
        cards: []
    },
    column5: {
        columnType: '',
        cards: []
    }
}

// const structureOfCardForColumnArrangementStructure = {
//     card: card,
//     height: number
// }