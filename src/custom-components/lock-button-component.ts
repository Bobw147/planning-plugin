import { ButtonComponent, TextComponent } from 'obsidian';

export class LockButtonComponent extends ButtonComponent {
    private _isLocked: boolean;
    private _textComponent: TextComponent;

    constructor(container: HTMLElement, textComponent: TextComponent) {
        super(container);
        this._textComponent = textComponent;
        this._isLocked = true;
        this.lock();
        this.onClick(()=> {
            this.toggle(this._textComponent);
        })
    }

    public lock(): void {
        this._isLocked = true;
        this.setIcon('lock');
        this._textComponent.setDisabled(true);
    }

    public unlock(): void {
        this._isLocked = false;
        this.setIcon('lock-open');
        this._textComponent.setDisabled(false);
    }

    public isLocked(): boolean {
        return this._isLocked;
    }

    public toggle(textComponent: TextComponent): void {
        this.isLocked() ? this.unlock() : this.lock();
    }
}
