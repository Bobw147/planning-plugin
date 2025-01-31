import { Url } from 'url';

export type colId = string;
export type rowId = number;
export type colrowId = string;
export type valueTypes = (string | number | boolean | Date | Url); 

export const CellType = {
    // Primitives
    NUMBER: 'number',
    STRING: 'string',
    BOOLEAN: 'boolean',

    // Extended
    DATE: 'Date',
    URL: 'Url',
    LINK: 'link',
    ARRAY: 'array',
    DICTIONARY: 'dictionary',
    FUNCTION: 'function',

    // Non-specific Object permits user definabe types
    OBJECT: 'object',
};
export type cellType = typeof CellType[keyof typeof CellType];

export type cellValue = {
    value: unknown,
    type: cellType
}

