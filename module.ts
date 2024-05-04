export enum gender{
    male = 1,
    female = 2
}

export interface student{
    name: string,
    age: number,
    gender: gender
    department: string
}