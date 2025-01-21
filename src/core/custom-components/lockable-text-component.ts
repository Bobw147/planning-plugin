import { Setting, TextComponent } from 'obsidian';

import { LockButtonComponent } from './lock-button-component';

export class LockableTextSetting extends Setting {
    private _buttonComponent: LockButtonComponent | null;
    private _textComponent: TextComponent | null;

    constructor(container: HTMLElement) {
        super(container);
        this._textComponent = null;
        this._buttonComponent = null;
    }

    get buttonComponent(): LockButtonComponent | null{
        return this._buttonComponent;
    } 

    get textComponent(): TextComponent | null {
        return this._textComponent = null;
    }

    get value(): string { 
        return this.textComponent !== null ? this.textComponent.getValue(): "";
    }

    addLockableTextComponent(cb: (text: TextComponent) => void): Setting {
        this._textComponent = new TextComponent(this.controlEl);
        this.components.push(this._textComponent);
        this.controlEl.appendChild(this._textComponent.inputEl);
    
        this._buttonComponent = new LockButtonComponent(this.controlEl, this._textComponent);
        this.components.push(this._buttonComponent);
        this.controlEl.appendChild(this._buttonComponent.buttonEl);

        cb(this._textComponent);
        return this as LockableTextSetting;
    }
}
