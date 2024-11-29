import { HtmlTags, resolveTag } from "./htmlElementTypes";
import { IDictionary, WrapperType } from "../types/types";

export class NodeBuilder{

    createNode(nodeType: HtmlTags, attribs?: IDictionary<string>): HTMLElement | Element | undefined {
        const node: HTMLElement | Element | undefined = this.nodeFactory(nodeType);
        if (node !== undefined && attribs !== undefined) {
            Object.entries(attribs).forEach(([attrib, value]) => {
                if (node.hasAttribute(attrib)) {
                    node.setAttribute(attrib, value);
                }
            }
        )}
        return node;
    }

    nodeFactory(nodeType: HtmlTags) : HTMLElement | Element | undefined {
        const svgNS: string = "http://www.w3.org/2000/svg";

        switch (nodeType) {
            case HtmlTags.A:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLAnchorElement;
            
            case HtmlTags.ABBR:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.ADDRESS:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.AREA:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLAreaElement;
            
            case HtmlTags.ARTICLE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.ASIDE:                
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.AUDIO:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLAudioElement;

            case HtmlTags.B:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.BASE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLBaseElement;
            
            case HtmlTags.BDI:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.BDO:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;
            
            case HtmlTags.BLOCKQUOTE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLQuoteElement;

            case HtmlTags.BODY:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLBodyElement;

            case HtmlTags.BR:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLBRElement;

            case HtmlTags.BUTTON:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLButtonElement;

            case HtmlTags.CANVAS:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLCanvasElement;

            case HtmlTags.CAPTION:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTableCaptionElement;

            case HtmlTags.CITE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.CODE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.COL:
            case HtmlTags.COLGROUP:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTableColElement;

            case HtmlTags.COMMENT:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.DATA:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLDataElement;

            case HtmlTags.DATALIST:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLDataListElement;

            case HtmlTags.DD:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.DEL:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLModElement;

            case HtmlTags.DETAILS:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLDetailsElement;

            case HtmlTags.DFN:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.DIALOG:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLDialogElement;
        
            case HtmlTags.DIV:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLDivElement;

            case HtmlTags.DL:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLDListElement;

            case HtmlTags.DOCTYPE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.DT:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.EM:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.EMBED:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLEmbedElement;

            case HtmlTags.FIELDSET:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLFieldSetElement;

            case HtmlTags.FIGCAPTION:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.FIGURE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.FOOTER:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.FORM:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLFormElement;

            case HtmlTags.H1:
            case HtmlTags.H2:
            case HtmlTags.H3:
            case HtmlTags.H4:
            case HtmlTags.H5:
            case HtmlTags.H6:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLHeadingElement;

            case HtmlTags.HEAD:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLHeadElement;

            case HtmlTags.HEADER:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.HGROUP:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.HR:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLHRElement;

            case HtmlTags.HTML:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLHtmlElement;

            case HtmlTags.I:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.IFRAME:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLIFrameElement;

            case HtmlTags.IMG:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLImageElement;

            case HtmlTags.INPUT:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLInputElement;

            case HtmlTags.INS:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLModElement;

            case HtmlTags.KBD:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.LABEL:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLLabelElement;

            case HtmlTags.LEGEND:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLLegendElement;
            
            case HtmlTags.LI:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLLIElement;

            case HtmlTags.LINK:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLLinkElement;

            case HtmlTags.MAIN:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.MAP:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLMapElement;

            case HtmlTags.MARK:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.MATH:
            case HtmlTags.MATHML:
                return document.createElement(resolveTag(HtmlTags.MATH, WrapperType.SINGLE_QUOTE)) as Element;

            case HtmlTags.MENU:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLMenuElement;

            case HtmlTags.META:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLMetaElement;

            case HtmlTags.METER:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLMeterElement;

            case HtmlTags.NAV:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.NOSCRIPT:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.OBJECT:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLObjectElement;

            case HtmlTags.OL:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLOListElement;

            case HtmlTags.OPTGROUP:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLOptGroupElement;

            case HtmlTags.OPTION:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLOptionElement;

            case HtmlTags.OUTPUT:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLOutputElement;

            case HtmlTags.P:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLParagraphElement;

            case HtmlTags.PICTURE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLPictureElement;

            case HtmlTags.PRE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLPreElement;

            case HtmlTags.PROGRESS:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLProgressElement;

            case HtmlTags.Q:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLQuoteElement;

            case HtmlTags.RP:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.RT:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;
            
            case HtmlTags.RUBY:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.S:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.SAMP:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.SCRIPT:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLScriptElement;

            case HtmlTags.SEARCH:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.SECTION:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.SELECT:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLSelectElement;

            case HtmlTags.SLOT:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLSlotElement;

            case HtmlTags.SMALL:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.SOURCE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLSourceElement;
        
            case HtmlTags.SPAN:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLSpanElement;

            case HtmlTags.STRONG:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.STYLE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLStyleElement;

            case HtmlTags.SUB:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.SUMMARY:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.SUP:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.SVG:
                return document.createElementNS(svgNS, resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as Element;

            case HtmlTags.TABLE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTableElement;
            
            case HtmlTags.TBODY:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTableSectionElement;

            case HtmlTags.TD:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTableCellElement;

            case HtmlTags.TEMPLATE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTemplateElement;

            case HtmlTags.TEXTAREA:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTextAreaElement;

            case HtmlTags.TFOOT:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTableSectionElement;

            case HtmlTags.TH:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTableCellElement;

            case HtmlTags.THEAD:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTableSectionElement;

            case HtmlTags.TIME:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTimeElement;
            
            case HtmlTags.TITLE:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTitleElement;

            case HtmlTags.TR:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTableRowElement;

            case HtmlTags.TRACK:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLTrackElement;

            case HtmlTags.U:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.UL:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLUListElement;

            case HtmlTags.VAR:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;

            case HtmlTags.VIDEO:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLVideoElement;

            case HtmlTags.WBR:
                return document.createElement(resolveTag(nodeType, WrapperType.SINGLE_QUOTE)) as HTMLElement;
           
            default:
                return undefined;
        }
    }

/*
    private recastNode(nodeType: HtmlTags): HTMLElement {
        switch (nodeType){
            case HTMLDivElement :
                return
        }
    }
*/
}
