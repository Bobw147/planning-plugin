import { Setting, TextComponent } from 'obsidian';

import { LockButtonComponent } from './lock-button-component';

export class LockableTextSetting extends Setting {
    private _buttonComponent: LockButtonComponent;
    private _textComponent: TextComponent;

    constructor(container: HTMLElement) {
        super(container);
        this._textComponent = new TextComponent(container);
        this._buttonComponent = new LockButtonComponent(container, this.textComponent);
    }

    get buttonComponent(): LockButtonComponent{
        return this._buttonComponent;
    } 

    get textComponent(): TextComponent {
        return this._textComponent;
    }

    get value(): string { 
        return this.textComponent.getValue();
    }

    addLockableTextComponent(cb: (text: TextComponent) => void): Setting {
        this.components.push(this.textComponent);
        this.controlEl.appendChild(this.textComponent.inputEl);

        this.components.push(this.buttonComponent);
        this.controlEl.appendChild(this.buttonComponent.buttonEl);
        return this as LockableTextSetting;
    }
}
