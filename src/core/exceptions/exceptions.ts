/** Index Card Exceptions */

export class BadStatusTagError extends Error {
    constructor() {
        super("Ident tag must begin with '#status/'");
        this.name = "Bad Status Tag";
    }
}

export class BadIdentTagError extends Error {
    constructor() {
        super("Ident tag must begin with '#planning/'");
        this.name = "Bad Ident Tag";
    }
}

export class UserTagError extends Error {
    constructor() {
        super("User tag must begin with '#'");
        this.name = "Bad User Tag";
    }
}

export class DOMNodeBuildError extends Error {
    constructor(){
        super("Attempt to create a new HTML node failed");
        this.name = "Node Not Created";
        Object.setPrototypeOf(this, DOMNodeBuildError);
    }
}