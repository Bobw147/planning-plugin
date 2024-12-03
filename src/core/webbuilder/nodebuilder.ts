import { HtmlTags, resolveTag } from "./htmlElementTypes";
import { WrapperType } from "../types/types";
import { FormFieldId, resolveField } from "./formFieldTypes";
import { HtmlAttributes, resolveAttribute } from "./htmlAttributeTypes";
import { DOMNodeBuildError } from "../exceptions/exceptions";
import { UserMessageId, resolveMessage } from "../i18n";

type attribTuple = [HtmlAttributes, FormFieldId | UserMessageId | string];
export class NodeBuilder{

    createElement(nodeType: HtmlTags, attribs?: attribTuple[]): HTMLElement | Element {
        // Create the node
        const node: HTMLElement | Element | undefined = this.nodeFactory(nodeType);
        if (node === undefined)
            throw new DOMNodeBuildError();

        // Add any given attribute
        attribs?.forEach(([attrib, value]) => {
            if (Object.values(FormFieldId).includes(value as FormFieldId)) {
                this.setAttribute(node, attrib, resolveField(value as FormFieldId, WrapperType.NONE));
            }
            else if (Object.values(UserMessageId).includes(value as UserMessageId)){
                this.setAttribute(node, attrib, resolveMessage(value as UserMessageId));
            }
            else {
                this.setAttribute(node, attrib, value);
            }
        })
        return node;
    }

    setAttribute(element: HTMLElement | Element | null, attrib: HtmlAttributes, value: string): void {
        
        if (element === null)
            return;

        // InnerHTML and innerText are properties of an element rather than attributes but it
        // is easier to handle them in the higher level code as attributes and filter them here
        if (attrib == HtmlAttributes.INNERHTML) {
            element.innerHTML = value;
        }
        else if (attrib == HtmlAttributes.INNERTEXT){
            element.setText(value);
        }
        else {
            const ra: string = resolveAttribute(attrib);
            element.setAttribute(resolveAttribute(attrib), value);
        }
    }

    nodeFactory(nodeType: HtmlTags) : HTMLElement | Element | undefined {
        const svgNS: string = "http://www.w3.org/2000/svg";

        switch (nodeType) {
            case HtmlTags.A:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLAnchorElement;
            
            case HtmlTags.ABBR:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.ADDRESS:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.AREA:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLAreaElement;
            
            case HtmlTags.ARTICLE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.ASIDE:                
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.AUDIO:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLAudioElement;

            case HtmlTags.B:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.BASE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLBaseElement;
            
            case HtmlTags.BDI:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.BDO:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;
            
            case HtmlTags.BLOCKQUOTE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLQuoteElement;

            case HtmlTags.BODY:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLBodyElement;

            case HtmlTags.BR:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLBRElement;

            case HtmlTags.BUTTON:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLButtonElement;

            case HtmlTags.CANVAS:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLCanvasElement;

            case HtmlTags.CAPTION:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTableCaptionElement;

            case HtmlTags.CITE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.CODE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.COL:
            case HtmlTags.COLGROUP:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTableColElement;

            case HtmlTags.COMMENT:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.DATA:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLDataElement;

            case HtmlTags.DATALIST:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLDataListElement;

            case HtmlTags.DD:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.DEL:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLModElement;

            case HtmlTags.DETAILS:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLDetailsElement;

            case HtmlTags.DFN:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.DIALOG:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLDialogElement;
        
            case HtmlTags.DIV:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLDivElement;

            case HtmlTags.DL:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLDListElement;

            case HtmlTags.DOCTYPE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.DT:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.EM:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.EMBED:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLEmbedElement;

            case HtmlTags.FIELDSET:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLFieldSetElement;

            case HtmlTags.FIGCAPTION:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.FIGURE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.FOOTER:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.FORM:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLFormElement;

            case HtmlTags.H1:
            case HtmlTags.H2:
            case HtmlTags.H3:
            case HtmlTags.H4:
            case HtmlTags.H5:
            case HtmlTags.H6:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLHeadingElement;

            case HtmlTags.HEAD:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLHeadElement;

            case HtmlTags.HEADER:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.HGROUP:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.HR:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLHRElement;

            case HtmlTags.HTML:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLHtmlElement;

            case HtmlTags.I:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.IFRAME:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLIFrameElement;

            case HtmlTags.IMG:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLImageElement;

            case HtmlTags.INPUT:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLInputElement;

            case HtmlTags.INS:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLModElement;

            case HtmlTags.KBD:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.LABEL:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLLabelElement;

            case HtmlTags.LEGEND:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLLegendElement;
            
            case HtmlTags.LI:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLLIElement;

            case HtmlTags.LINK:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLLinkElement;

            case HtmlTags.MAIN:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.MAP:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLMapElement;

            case HtmlTags.MARK:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.MATH:
            case HtmlTags.MATHML:
                return document.createElement(resolveTag(HtmlTags.MATH, WrapperType.NONE)) as Element;

            case HtmlTags.MENU:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLMenuElement;

            case HtmlTags.META:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLMetaElement;

            case HtmlTags.METER:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLMeterElement;

            case HtmlTags.NAV:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.NOSCRIPT:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.OBJECT:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLObjectElement;

            case HtmlTags.OL:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLOListElement;

            case HtmlTags.OPTGROUP:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLOptGroupElement;

            case HtmlTags.OPTION:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLOptionElement;

            case HtmlTags.OUTPUT:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLOutputElement;

            case HtmlTags.P:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLParagraphElement;

            case HtmlTags.PICTURE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLPictureElement;

            case HtmlTags.PRE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLPreElement;

            case HtmlTags.PROGRESS:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLProgressElement;

            case HtmlTags.Q:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLQuoteElement;

            case HtmlTags.RP:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.RT:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;
            
            case HtmlTags.RUBY:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.S:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.SAMP:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.SCRIPT:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLScriptElement;

            case HtmlTags.SEARCH:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.SECTION:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.SELECT:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLSelectElement;

            case HtmlTags.SLOT:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLSlotElement;

            case HtmlTags.SMALL:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.SOURCE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLSourceElement;
        
            case HtmlTags.SPAN:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLSpanElement;

            case HtmlTags.STRONG:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.STYLE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLStyleElement;

            case HtmlTags.SUB:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.SUMMARY:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.SUP:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.SVG:
                return document.createElementNS(svgNS, resolveTag(nodeType, WrapperType.NONE)) as Element;

            case HtmlTags.TABLE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTableElement;
            
            case HtmlTags.TBODY:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTableSectionElement;

            case HtmlTags.TD:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTableCellElement;

            case HtmlTags.TEMPLATE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTemplateElement;

            case HtmlTags.TEXTAREA:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTextAreaElement;

            case HtmlTags.TFOOT:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTableSectionElement;

            case HtmlTags.TH:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTableCellElement;

            case HtmlTags.THEAD:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTableSectionElement;

            case HtmlTags.TIME:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTimeElement;
            
            case HtmlTags.TITLE:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTitleElement;

            case HtmlTags.TR:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTableRowElement;

            case HtmlTags.TRACK:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLTrackElement;

            case HtmlTags.U:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.UL:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLUListElement;

            case HtmlTags.VAR:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;

            case HtmlTags.VIDEO:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLVideoElement;

            case HtmlTags.WBR:
                return document.createElement(resolveTag(nodeType, WrapperType.NONE)) as HTMLElement;
           
            default:
                return undefined;
        }
    }
}
