
export type uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
const uuidTemplate: uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
const nullUUIDDef: uuid = ('00000000-0000-0000-0000-000000000000' as uuid)
export type refId = string;

const zero = 0;
const radix: number = 16;

export class UUID {
    private value: uuid = nullUUIDDef;

    constructor(generate: boolean, value?: uuid) {
        if (generate) {
            const reservedValue = 0x3;
            const forceVariant = 0x8;

            this.value  = <uuid>uuidTemplate.replace(/[xy]/g, function(c) {
                const r = (Math.random() * radix) | zero;
                const v = c === 'x' ? r : (r & reservedValue) | forceVariant;
                return v.toString(radix);
            });
        }
        else {
            if (value !== undefined)
                this.value = value
            else
                this.value = nullUUIDDef;
        }
    }

    static nullUUID() : uuid {
        return nullUUIDDef;
    }

    getValue(): uuid {
        return this.value;
    }

    getRefId(): refId {
        return <refId> this.value.toString();
    }

    isNullUUID() {
        return this.value == nullUUIDDef;
    }
}