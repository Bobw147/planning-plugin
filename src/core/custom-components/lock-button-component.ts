import { ButtonComponent, DropdownComponent, TextComponent } from 'obsidian';

export class LockButtonComponent extends ButtonComponent {
    private _isLocked: boolean;
    private _lockableComponent: TextComponent | DropdownComponent;

    constructor(container: HTMLElement, lockableComponent: TextComponent | DropdownComponent) {
        super(container);
        this._lockableComponent = lockableComponent;
        this._isLocked = true;
        this.lock();
        this.onClick(()=> {
            this.toggle(this._lockableComponent);
        })
    }

    public lock(): void {
        this._isLocked = true;
        this.setIcon('lock');
        this._lockableComponent.setDisabled(true);
    }

    public unlock(): void {
        this._isLocked = false;
        this.setIcon('lock-open');
        this._lockableComponent.setDisabled(false);
    }

    public isLocked(): boolean {
        return this._isLocked;
    }

    public toggle(lockableComponent: TextComponent | DropdownComponent): void {
        this.isLocked() ? this.unlock() : this.lock();
    }
}
