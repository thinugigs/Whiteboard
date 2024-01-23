// scenario

// If t0d0 tot height > col height & status tot height < col height (t0d0 height going to spread across 2 columns)
//      If farm == no, then 2 cols to t0d0 and 2 cols to status
//         columns -> t0d0, t0d0, status, status, tags

// card distribution
//      t0d0 cards listed in 2 columns
//      status cards listed in 1 column

const todoCard1 = {
    title: 'Card 1',
    list: ['item 1', 'item 2', 'item 3']
}
const todoCard2 = {
    title: 'Card 2',
    list: ['item 1', 'item 2', 'item 3', 'item 4', ]
}
const todoCard3 = {
    title: 'Card 3',
    list: ['item 1', 'item 2']
}
const todoCard4 = {
    title: 'Card 1',
    list: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10', 'item 11', 'item 12']
}
const todoCard5 = {
    title: 'Card 2',
    list: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10', 'item 11']
}
const todoCard6 = {
    title: 'Card 3',
    list: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10', 'item 11', 'item 12', 'item 13', 'item 14']
}

const statusCard1 = {
    title: 'Card 1',
    list: ['item 1', 'item 2']
}
const statusCard2 = {
    title: ' Card 2',
    list: ['item 1', 'item 2', 'item 3']
}
const statusCard3 = {
    title: 'Card 3',
    list: ['item 1', 'item 2']
}
const statusCard4 = {
    title: 'Card 1',
    list: ['item 1', 'item 2']
}
const statusCard5 = {
    title: 'Card 2',
    list: ['item 1', 'item 2', 'item 3']
}
const statusCard6 = {
    title: 'Card 3',
    list: ['item 1', 'item 2']
}

export const z3type1v1 = {
    todo: [
        todoCard1,
        todoCard2,
        todoCard3,
        todoCard4,
        todoCard5,
        todoCard6,
    ],
    farmTasks: [],
    status: [
        statusCard1,
        statusCard2,
        statusCard3,
    ],
    tags: []
}

