import { HtmlTags } from '../../src/core/webbuilder/htmlElementTypes';
import { FormBuilderr } from '../../src/core/webbuilder/nodebuilder';

describe('testing nodeFactory', () => {
    test('Input of HtmlTags.DIV should return HTMLDivElement', () => {
        const document = new Document();
        const rootNode = document.createDiv();
        const formBuilder = new FormBuilderr();
        const newNode: HTMLElement | Element | undefined = formBuilder.nodeFactory(rootNode, HtmlTags.DIV);
        expect(newNode).toBeInstanceOf(HTMLDivElement);
    })
})