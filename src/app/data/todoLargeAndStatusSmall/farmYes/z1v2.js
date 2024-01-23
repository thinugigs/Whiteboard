// scenario

// If t0d0 tot height > col height & status tot height < col height
//      If farm == yes, then 2 cols to t0d0 and 1 cols to status

// card distribution
//      t0d0 cards listed in 2 columns
//      status cards listed in 1 column

// compression
//      2 columns not enough to show all cards in full view, so compress happens

const todoCard1 = {
    title: 'Card 1',
    list: ['item 1', 'item 2', 'item 3']
}
const todoCard2 = {
    title: 'Card 2',
    list: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10', 'item 10']
}
const todoCard3 = {
    title: 'Card 3',
    list: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10', 'item 11', 'item 12', 'item 13', 'item 14']
}
const todoCard4 = {
    title: 'Card 4',
    list: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10', 'item 11', 'item 12']
}
const todoCard5 = {
    title: 'Card 5',
    list: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10', 'item 11']
}
const todoCard6 = {
    title: 'Card 6',
    list: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10', 'item 11', 'item 12', 'item 13', 'item 14']
}

const statusCard1 = {
    title: 'Card 1',
    list: ['item 1',  'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10', 'item 11', 'item 12', 'item 13', 'item 14']
}
const statusCard2 = {
    title: ' Card 2',
    list: ['item 1',  'item 2','item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10', 'item 11', 'item 12', 'item 13', 'item 14']
}
const statusCard3 = {
    title: 'Card 3',
    list: ['item 1']
}
const statusCard4 = {
    title: 'Card 4',
    list: ['item 1']
}
const statusCard5 = {
    title: 'Card 5',
    list: ['item 1']
}
const statusCard6 = {
    title: 'Card 6',
    list: ['item 1']
}

const farmCard1 = {
    title: 'Card x',
    list: ['item 1']
}

export const z1v2 = {
    todo: [
        todoCard1,
        todoCard2,
        todoCard3,
        todoCard4,
        todoCard5,
        todoCard6,
    ],
    farmTasks: [
        farmCard1,
    ],
    status: [
        statusCard1,
        statusCard2,
        statusCard3,
        statusCard4,
        statusCard5,
        statusCard6,
    ],
    tags: []
}

