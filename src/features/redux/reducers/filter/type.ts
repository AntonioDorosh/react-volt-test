export const sortProperty = {
    All: "All",
    Active: "Active",
    Completed: "Completed",
}

export type TSortProperty = (typeof sortProperty)[keyof typeof sortProperty]

export type TSort = {
    sortKey?: string
    sortProperty?: TSortProperty
}

export type FilterState = {
    sort: TSort
}
