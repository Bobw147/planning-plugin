import  { NodeBuilder } from '../../src/core/webbuilder/nodebuilder'
import  { HtmlTags } from '../../src/core/webbuilder/htmlElementTypes'


describe('testing nodeFactory', () => {
    test('Input of HtmlTags.DIV should return HTMLDivElement', () => {
        const document = new Document();
        const rootNode = document.createDiv();
        const nodeBuilder = new NodeBuilder();
        const newNode: HTMLElement | Element | undefined = nodeBuilder.nodeFactory(rootNode, HtmlTags.DIV);
        expect(newNode).toBeInstanceOf(HTMLDivElement);
    })
})