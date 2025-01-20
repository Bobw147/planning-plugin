import { Setting, TextComponent } from 'obsidian';

import { LockButtonComponent } from './lock-button-component';

export class LockableDateSetting extends Setting {
    private _buttonComponent: LockButtonComponent;
    private _dateComponent: TextComponent;

    constructor(container: HTMLElement) {
        super(container);
        this._dateComponent = new TextComponent(container);
        this._buttonComponent = new LockButtonComponent(container, this.dateComponent);
    }

    get buttonComponent(): LockButtonComponent{
        return this._buttonComponent;
    } 

    get dateComponent(): TextComponent {
        return this._dateComponent;
    }

    get value(): Date { 
        return new Date(this.dateComponent.getValue());
    }

    
    addLockableDateComponent(cb: (date: TextComponent) => void): Setting {

        this.dateComponent.inputEl.setAttr('type', 'date');
        this.components.push(this.dateComponent);
        this.controlEl.appendChild(this.dateComponent.inputEl);

        this.components.push(this.buttonComponent);
        this.controlEl.appendChild(this.buttonComponent.buttonEl);
        return this as LockableDateSetting;
    }
}