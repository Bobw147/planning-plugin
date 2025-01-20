import { DropdownComponent, Setting } from 'obsidian';

import { LockButtonComponent } from './lock-button-component';

export class LockableDropdownSetting extends Setting {
    private _buttonComponent: LockButtonComponent;
    private _dropdownComponent: DropdownComponent;

    constructor(container: HTMLElement) {
        super(container);
        this._dropdownComponent = new DropdownComponent(container);
        this._buttonComponent = new LockButtonComponent(container, this.dropdownComponent);
    }

    get buttonComponent(): LockButtonComponent{
        return this._buttonComponent;
    } 

    get dropdownComponent(): DropdownComponent {
        return this._dropdownComponent;
    }

    get value(): string { 
        return this.dropdownComponent.getValue();
    }

    addLockableDropdownComponent(cb: (dropdown: DropdownComponent) => void): Setting {
        this.components.push(this.dropdownComponent);
        this.controlEl.appendChild(this.dropdownComponent.selectEl);

        this.components.push(this.buttonComponent);
        this.controlEl.appendChild(this.buttonComponent.buttonEl);

        cb(this._dropdownComponent);
        return this as LockableDropdownSetting;
    }
}