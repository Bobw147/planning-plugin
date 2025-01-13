import { emptyString } from 'src/core/types/types';

const uuidTemplate = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
const nullUUID = '00000000-0000-0000-0000-000000000000';
const radix = 16;
const reservedValue = 0x3;
const zero = 0;
const forceVariant = 0x8;

export type UUID = string;

export class UUIDV4 {
    private template: string;
    private longString: string;

    constructor() {
        this.template = uuidTemplate;
        this.longString = emptyString;
    }
    
    generateNullUUID(): UUID {
        return nullUUID;
    }

    generateUUID(): UUID {
        this.longString = this.template.replace(/[xy]/g, function(c) {
            const r = (Math.random() * radix) | zero;
            const v = c === 'x' ? r : (r & reservedValue) | forceVariant;
            return v.toString(radix);
        });
        return this.longString;
    }

    isNullUUID(value: UUID) {
        return value == nullUUID;
    }
}