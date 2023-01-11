import { Dispatch, SetStateAction } from 'react';

export type APIErrorResponse = {
	status: number;
	message: string;
	details?: Record<string, string>;
};

export type ReactStateAction<T> = Dispatch<SetStateAction<T>>;
