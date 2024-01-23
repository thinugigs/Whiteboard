// scenario

// If t0d0 tot height < col height (here status tot height can be > or < col height)
//      1 col to t0d0 and max cols to status (farm === no, so max is 3)

// card distribution
//      t0d0 cards listed in 1 column
//      status cards listed in 1 column

const todoCard1 = {
    title: 'Card 1',
    list: ['item 1', 'item 2', 'item 3']
}
const todoCard2 = {
    title: 'Card 2',
    list: ['item 1', 'item 2']
}
const todoCard3 = {
    title: 'Card 3',
    list: ['item 1', 'item 2']
}
const todoCard4 = {
    title: 'Card 1',
    list: ['item 1']
}
const todoCard5 = {
    title: 'Card 2',
    list: ['item 1']
}
const todoCard6 = {
    title: 'Card 3',
    list: ['item 1', 'item 2']
}

const statusCard1 = {
    title: 'Card 1',
    list: ['item 1', 'item 2', 'item 3']
}
const statusCard2 = {
    title: 'Card 2',
    list: ['item 1', 'item 2', 'item 3']
}
const statusCard3 = {
    title: 'Card 3',
    list: ['item 1', 'item 2', 'item 3']
}
const statusCard4 = {
    title: 'Card 1',
    list: ['item 1', 'item 2', 'item 3']
}
const statusCard5 = {
    title: 'Card 2',
    list: ['item 1', 'item 2', 'item 3']
}
const statusCard6 = {
    title: 'Card 3',
    list: ['item 1', 'item 2', 'item 3', 'item 4']
}

export const y2v1 = {
    todo: [
        todoCard1,
        todoCard2,
        todoCard3,
    ],
    farmTasks: [
    ],
    status: [
        statusCard1,
        statusCard2,
        statusCard3,
        statusCard4,
        statusCard5,
        statusCard6
    ],
    tags: []
}

