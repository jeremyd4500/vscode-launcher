import fs from 'fs';
import { NextApiRequest } from 'next';
import path from 'path';
import { RESPONSES } from './constants';

export const validDirectory = (filePath: string) =>
	typeof filePath === 'string' &&
	filePath.length > 0 &&
	fs.statSync(path.resolve(filePath)).isDirectory();

export const validString = (value: unknown): boolean =>
	typeof value === 'string' && value !== '';

export const validateRequestMethod = (
	requiredMethod: string,
	req: NextApiRequest
) => {
	if (
		!req.method ||
		req.method.toLocaleLowerCase() !== requiredMethod.toLocaleLowerCase()
	) {
		const errorObj = RESPONSES.validation.invalidRequestMethod;
		errorObj.message = errorObj.message.replace(
			'$',
			req.method ? req.method : 'METHOD NOT FOUND'
		);
		errorObj.message = errorObj.message.replace('?', requiredMethod);
		throw RESPONSES.validation.invalidRequestMethod;
	}
};

export const validNumericString = (value: unknown): boolean => {
	const validString = typeof value === 'string' && value !== '';
	const validNumber = !isNaN(Number(value));
	return validString && validNumber;
};
