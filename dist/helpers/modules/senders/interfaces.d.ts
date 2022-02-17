export interface ISender {
    send(): void;
}
export interface ISendGridInviteSpace {
    email: string;
    token: string;
}
export interface ISendCreateUser {
    email: string;
    password: string;
}
