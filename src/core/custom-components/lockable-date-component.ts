import { Setting, TextComponent } from 'obsidian';

import { nullDate } from '../types/types';
import { LockButtonComponent } from './lock-button-component';

export class LockableDateSetting extends Setting {
    private _buttonComponent: LockButtonComponent | null;
    private _dateComponent: TextComponent | null;

    constructor(container: HTMLElement) {
        super(container);
        this._dateComponent = null;
        this._buttonComponent = null;
    }

    get buttonComponent(): LockButtonComponent | null{
        return this._buttonComponent;
    } 

    get dateComponent(): TextComponent | null {
        return this._dateComponent;
    }

    get value(): Date { 
        return this.dateComponent !== null ? new Date(this.dateComponent.getValue()) : nullDate;
    }

    addLockableDateComponent(cb: (date: TextComponent) => void): Setting {

        this._dateComponent = new TextComponent(this.controlEl);
        this._dateComponent.inputEl.setAttr('type', 'date');
        this.components.push(this._dateComponent);
        this.controlEl.appendChild(this._dateComponent.inputEl);

        this._buttonComponent = new LockButtonComponent(this.controlEl, this._dateComponent);
        this.components.push(this._buttonComponent);
        this.controlEl.appendChild(this._buttonComponent.buttonEl);

        cb(this._dateComponent);
        return this as LockableDateSetting;
    }
}