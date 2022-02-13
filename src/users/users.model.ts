export enum UserStatus {
    ACTIVE = 'active',
    BLOCK = 'block',
}

export interface User {
    id: String;
    name: String;
    status: UserStatus;
}
