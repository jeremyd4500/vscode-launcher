import fs from 'fs';
import path from 'path';

export const validDirectory = (filePath: string) =>
	typeof filePath === 'string' &&
	filePath.length > 0 &&
	fs.statSync(path.resolve(filePath)).isDirectory();

export const validString = (value: unknown): boolean =>
	typeof value === 'string' && value !== '';

export const validNumericString = (value: unknown): boolean => {
	const validString = typeof value === 'string' && value !== '';
	const validNumber = !isNaN(Number(value));
	return validString && validNumber;
};
