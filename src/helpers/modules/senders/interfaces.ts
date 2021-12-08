export interface ISender {
	send(): void;
}

export interface ISendGridInviteSpace {
	email: string;
	token: string;
}
