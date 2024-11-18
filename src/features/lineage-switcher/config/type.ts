export interface LineageUser {
    id?: number,
    login?: string,
    name?: string,
    avatar?: string,
    status?: string,
    firstLineCount: number,
    organizationCount: number
}

export interface LineageData {
    data: LineageUser[],
    withHierarchyCount: number,
    count: number
}
