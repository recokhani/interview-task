export enum Relation {
    spouse = 'spouse',
    son = 'son',
    daughter = 'daughter',
}

export const RelationOptions = [
    { label: 'همسر', value: 'spouse' },
    { label: 'فرزند پسر', value: 'son' },
    { label: 'فرزند دختر', value: 'daughter' }
];
export interface FamilyMember {
    name: string;
    dateOfBirth: string;
    relation: Relation
}

export interface CreateEmployeeDto {
    firstName: string;
    lastName: string;
    email?: string;
    dateOfBirth?: string;
    family?: FamilyMember[];
}
