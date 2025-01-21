import { DropdownComponent, Setting } from 'obsidian';

import { LockButtonComponent } from './lock-button-component';

export class LockableDropdownSetting extends Setting {
    private _buttonComponent: LockButtonComponent | null;
    private _dropdownComponent: DropdownComponent | null;

    constructor(container: HTMLElement) {
        super(container);
        this._dropdownComponent = null;
        this._buttonComponent = null;
    }

    get buttonComponent(): LockButtonComponent | null {
        return this._buttonComponent;
    } 

    get dropdownComponent(): DropdownComponent | null {
        return this._dropdownComponent;
    }

    get value(): string { 
        return this.dropdownComponent !== null ? this.dropdownComponent.getValue() : "";
    }

    addLockableDropdownComponent(cb: (dropdown: DropdownComponent) => void): Setting {

        this._dropdownComponent = new DropdownComponent(this.controlEl);
        this.components.push(this._dropdownComponent);
        this.controlEl.appendChild(this._dropdownComponent.selectEl);

        this._buttonComponent = new LockButtonComponent(this.controlEl, this._dropdownComponent);
        this.components.push(this._buttonComponent);
        this.controlEl.appendChild(this._buttonComponent.buttonEl);

        cb(this._dropdownComponent);
        return this as LockableDropdownSetting;
    }
}