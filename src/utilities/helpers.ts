import { NextApiResponse } from 'next';
import { APIErrorResponse } from '../types/UtilityTypes';

export const handleCaughtAPIError = (
	error: APIErrorResponse | any,
	res: NextApiResponse
) => {
	// eslint-disable-next-line no-console
	console.error(error);
	if (typeof error === 'object') {
		if ('status' in error) {
			if ('message' in error) {
				res.status(error.status).send(error.message);
			} else {
				res.status(error.status).send(error);
			}
		} else {
			if ('message' in error) {
				res.status(500).send(error.message);
			} else {
				res.status(500).send(error);
			}
		}
	} else {
		res.status(500).send(error);
	}
};
