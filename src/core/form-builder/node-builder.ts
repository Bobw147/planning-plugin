import { setIcon } from 'obsidian';

import { DOMNodeBuildError } from '../exceptions/exceptions';
import { emptyString } from '../types/types';
import { AttribSettingsId } from './atrrib-settings-types';
import { FormFieldId } from './form-field-types';
import { HtmlAttributes } from './html-attribute-types';
import { HtmlTags, resolveTag } from './html-element-types';
import { lookupMessage, UserMessageId } from './i18n';

type attribTuple = [HtmlAttributes, FormFieldId | UserMessageId | AttribSettingsId | string ];

const empty = 0;
const start = 0;
export class NodeBuilder{

    clearOptions(tagId: FormFieldId) {
        const selectElement = document.getElementById(tagId) as HTMLSelectElement;
        while (selectElement.length > empty) {
            selectElement.remove(start);
        }
    }

    // Creates the tag and passes the tag and attribs to setAttributes
    createElement(tagId: HtmlTags, attribs?: attribTuple[]): HTMLElement | Element {
        // Create the node
        const tag: HTMLElement | Element | undefined = this.nodeFactory(tagId);
        if (tag === undefined)
            throw new DOMNodeBuildError();

        // Add any given attribute
        this.setAttributes(tag, attribs);
        return tag;
    }

    static getElementInfo(elementType: HtmlTags, fieldId:FormFieldId, attribId: HtmlAttributes): string {
        //TODO .getAttribute('value') returns null but .value works ok. There doesn;t seem to be an elegant
        // wrappable way of using document.getElementById.
        let value: string | null = emptyString;
 
        /* eslint-disable no-case-declarations */
        switch (elementType) {
            case HtmlTags.INPUT:
                value = (document.getElementById(fieldId) as HTMLInputElement).value;
                break;
            
            case HtmlTags.SELECT:
                value = (document.getElementById(fieldId) as HTMLSelectElement).value;
                break;
        }
        return value === null ? emptyString : value;
        /* eslint-enable no-case-declarations */
    }

    // Obsidian DOM friedly
    hide(elements: FormFieldId[])
    {
        elements.forEach((elementId) => {
            const element: HTMLElement | null = document.getElementById(elementId);
            element?.hide();
        })
    }
    // Recovers the target tagindicated by FormFieldId from the document and
    // passes the tag and attributes to setAttributes
    setElementAttributes(fieldId: FormFieldId, attribs: attribTuple[]): void {

        const element: HTMLElement | undefined | null = document.getElementById(fieldId);
        if (element !== null && element !== undefined && attribs !== null) {
            this.setAttributes(element, attribs);
        }
    }

    setElementsAttributes(fieldIds: FormFieldId[], attribs: attribTuple[]): void {
        fieldIds?.forEach((fieldId) => {
            this.setElementAttributes(fieldId, attribs);
        });
    }

    setAttributes(tag:HTMLElement| Element | undefined | null, attribs?: attribTuple[]): void {
        if (tag === null || attribs === undefined)
            return;

        attribs?.forEach(([attribId, valueId]) => {
            if (Object.values(FormFieldId).includes(valueId as FormFieldId)) {
                this.setAttribute(tag, attribId, valueId);
            }
            else if (Object.values(UserMessageId).includes(valueId as UserMessageId)){
                this.setAttribute(tag, attribId, lookupMessage(valueId as UserMessageId));
            }
            else {
                this.setAttribute(tag, attribId, valueId);
            }
        })
    }

    setAttribute(element: HTMLElement | Element | undefined | null, attribId: HtmlAttributes, value: string): void {
        if (element === null || element === undefined)
            return;

        //iInnerHTML and innerText are properties of an element rather than attributes but it
        // is easier to handle them in the higher level code as attributes and filter them here
        if (attribId == HtmlAttributes.INNERHTML) {
            element.innerHTML = value;
        }
        else if (attribId == HtmlAttributes.INNERTEXT){
            element.setText(value);
        }
        else if (attribId == HtmlAttributes.ICON){
            setIcon(element as HTMLElement, value);
        }
        else {
            element.setAttribute(attribId, value);
        }
    }
    
    nodeFactory(tagId: HtmlTags): HTMLElement | Element | undefined{

        const svgNS: string = "http://www.w3.org/2000/svg";

        switch (tagId) {
            case HtmlTags.A:
                return document.createElement(resolveTag(tagId)) as HTMLAnchorElement;
            
            case HtmlTags.ABBR:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.ADDRESS:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.AREA:
                return document.createElement(resolveTag(tagId)) as HTMLAreaElement;
            
            case HtmlTags.ARTICLE:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.ASIDE:                
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.AUDIO:
                return document.createElement(resolveTag(tagId)) as HTMLAudioElement;

            case HtmlTags.B:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.BASE:
                return document.createElement(resolveTag(tagId)) as HTMLBaseElement;
            
            case HtmlTags.BDI:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.BDO:
                return document.createElement(resolveTag(tagId)) as HTMLElement;
            
            case HtmlTags.BLOCKQUOTE:
                return document.createElement(resolveTag(tagId)) as HTMLQuoteElement;

            case HtmlTags.BODY:
                return document.createElement(resolveTag(tagId)) as HTMLBodyElement;

            case HtmlTags.BR:
                return document.createElement(resolveTag(tagId)) as HTMLBRElement;

            case HtmlTags.BUTTON:
                return document.createElement(resolveTag(tagId)) as HTMLButtonElement;

            case HtmlTags.CANVAS:
                return document.createElement(resolveTag(tagId)) as HTMLCanvasElement;

            case HtmlTags.CAPTION:
                return document.createElement(resolveTag(tagId)) as HTMLTableCaptionElement;

            case HtmlTags.CITE:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.CODE:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.COL:
            case HtmlTags.COLGROUP:
                return document.createElement(resolveTag(tagId)) as HTMLTableColElement;

            case HtmlTags.COMMENT:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.DATA:
                return document.createElement(resolveTag(tagId)) as HTMLDataElement;

            case HtmlTags.DATALIST:
                return document.createElement(resolveTag(tagId)) as HTMLDataListElement;

            case HtmlTags.DD:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.DEL:
                return document.createElement(resolveTag(tagId)) as HTMLModElement;

            case HtmlTags.DETAILS:
                return document.createElement(resolveTag(tagId)) as HTMLDetailsElement;

            case HtmlTags.DFN:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.DIALOG:
                return document.createElement(resolveTag(tagId)) as HTMLDialogElement;
        
            case HtmlTags.DIV:
                return document.createElement(resolveTag(tagId)) as HTMLDivElement;

            case HtmlTags.DL:
                return document.createElement(resolveTag(tagId)) as HTMLDListElement;

            case HtmlTags.DOCTYPE:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.DT:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.EM:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.EMBED:
                return document.createElement(resolveTag(tagId)) as HTMLEmbedElement;

            case HtmlTags.FIELDSET:
                return document.createElement(resolveTag(tagId)) as HTMLFieldSetElement;

            case HtmlTags.FIGCAPTION:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.FIGURE:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.FOOTER:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.FORM:
                return document.createElement(resolveTag(tagId)) as HTMLFormElement;

            case HtmlTags.H1:
            case HtmlTags.H2:
            case HtmlTags.H3:
            case HtmlTags.H4:
            case HtmlTags.H5:
            case HtmlTags.H6:
                return document.createElement(resolveTag(tagId)) as HTMLHeadingElement;

            case HtmlTags.HEAD:
                return document.createElement(resolveTag(tagId)) as HTMLHeadElement;

            case HtmlTags.HEADER:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.HGROUP:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.HR:
                return document.createElement(resolveTag(tagId)) as HTMLHRElement;

            case HtmlTags.HTML:
                return document.createElement(resolveTag(tagId)) as HTMLHtmlElement;

            case HtmlTags.I:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.IFRAME:
                return document.createElement(resolveTag(tagId)) as HTMLIFrameElement;

            case HtmlTags.IMG:
                return document.createElement(resolveTag(tagId)) as HTMLImageElement;

            case HtmlTags.INPUT:
                return document.createElement(resolveTag(tagId)) as HTMLInputElement;

            case HtmlTags.INS:
                return document.createElement(resolveTag(tagId)) as HTMLModElement;

            case HtmlTags.KBD:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.LABEL:
                return document.createElement(resolveTag(tagId)) as HTMLLabelElement;

            case HtmlTags.LEGEND:
                return document.createElement(resolveTag(tagId)) as HTMLLegendElement;
            
            case HtmlTags.LI:
                return document.createElement(resolveTag(tagId)) as HTMLLIElement;

            case HtmlTags.LINK:
                return document.createElement(resolveTag(tagId)) as HTMLLinkElement;

            case HtmlTags.MAIN:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.MAP:
                return document.createElement(resolveTag(tagId)) as HTMLMapElement;

            case HtmlTags.MARK:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.MATH:
            case HtmlTags.MATHML:
                return document.createElement(resolveTag(HtmlTags.MATH)) as Element;

            case HtmlTags.MENU:
                return document.createElement(resolveTag(tagId)) as HTMLMenuElement;

            case HtmlTags.META:
                return document.createElement(resolveTag(tagId)) as HTMLMetaElement;

            case HtmlTags.METER:
                return document.createElement(resolveTag(tagId)) as HTMLMeterElement;

            case HtmlTags.NAV:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.NOSCRIPT:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.OBJECT:
                return document.createElement(resolveTag(tagId)) as HTMLObjectElement;

            case HtmlTags.OL:
                return document.createElement(resolveTag(tagId)) as HTMLOListElement;

            case HtmlTags.OPTGROUP:
                return document.createElement(resolveTag(tagId)) as HTMLOptGroupElement;

            case HtmlTags.OPTION:
                return document.createElement(resolveTag(tagId)) as HTMLOptionElement;

            case HtmlTags.OUTPUT:
                return document.createElement(resolveTag(tagId)) as HTMLOutputElement;

            case HtmlTags.P:
                return document.createElement(resolveTag(tagId)) as HTMLParagraphElement;

            case HtmlTags.PICTURE:
                return document.createElement(resolveTag(tagId)) as HTMLPictureElement;

            case HtmlTags.PRE:
                return document.createElement(resolveTag(tagId)) as HTMLPreElement;

            case HtmlTags.PROGRESS:
                return document.createElement(resolveTag(tagId)) as HTMLProgressElement;

            case HtmlTags.Q:
                return document.createElement(resolveTag(tagId)) as HTMLQuoteElement;

            case HtmlTags.RP:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.RT:
                return document.createElement(resolveTag(tagId)) as HTMLElement;
            
            case HtmlTags.RUBY:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.S:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.SAMP:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.SCRIPT:
                return document.createElement(resolveTag(tagId)) as HTMLScriptElement;

            case HtmlTags.SEARCH:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.SECTION:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.SELECT:
                return document.createElement(resolveTag(tagId)) as HTMLSelectElement;

            case HtmlTags.SLOT:
                return document.createElement(resolveTag(tagId)) as HTMLSlotElement;

            case HtmlTags.SMALL:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.SOURCE:
                return document.createElement(resolveTag(tagId)) as HTMLSourceElement;
        
            case HtmlTags.SPAN:
                return document.createElement(resolveTag(tagId)) as HTMLSpanElement;

            case HtmlTags.STRONG:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.STYLE:
                return document.createElement(resolveTag(tagId)) as HTMLStyleElement;

            case HtmlTags.SUB:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.SUMMARY:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.SUP:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.SVG:
                return document.createElementNS(svgNS, resolveTag(tagId)) as Element;

            case HtmlTags.TABLE:
                return document.createElement(resolveTag(tagId)) as HTMLTableElement;
            
            case HtmlTags.TBODY:
                return document.createElement(resolveTag(tagId)) as HTMLTableSectionElement;

            case HtmlTags.TD:
                return document.createElement(resolveTag(tagId)) as HTMLTableCellElement;

            case HtmlTags.TEMPLATE:
                return document.createElement(resolveTag(tagId)) as HTMLTemplateElement;

            case HtmlTags.TEXTAREA:
                return document.createElement(resolveTag(tagId)) as HTMLTextAreaElement;

            case HtmlTags.TFOOT:
                return document.createElement(resolveTag(tagId)) as HTMLTableSectionElement;

            case HtmlTags.TH:
                return document.createElement(resolveTag(tagId)) as HTMLTableCellElement;

            case HtmlTags.THEAD:
                return document.createElement(resolveTag(tagId)) as HTMLTableSectionElement;

            case HtmlTags.TIME:
                return document.createElement(resolveTag(tagId)) as HTMLTimeElement;
            
            case HtmlTags.TITLE:
                return document.createElement(resolveTag(tagId)) as HTMLTitleElement;

            case HtmlTags.TR:
                return document.createElement(resolveTag(tagId)) as HTMLTableRowElement;

            case HtmlTags.TRACK:
                return document.createElement(resolveTag(tagId)) as HTMLTrackElement;

            case HtmlTags.U:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.UL:
                return document.createElement(resolveTag(tagId)) as HTMLUListElement;

            case HtmlTags.VAR:
                return document.createElement(resolveTag(tagId)) as HTMLElement;

            case HtmlTags.VIDEO:
                return document.createElement(resolveTag(tagId)) as HTMLVideoElement;

            case HtmlTags.WBR:
                return document.createElement(resolveTag(tagId)) as HTMLElement;
           
            default:
                return undefined;
        }
    }
}

/* Park this lot for now 
    nodeFactory(tagId: HtmlTags): HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement |
    HTMLBRElement | HTMLBaseElement | HTMLBodyElement | HTMLButtonElement |
    HTMLCanvasElement | HTMLDataElement | HTMLDataListElement | HTMLDListElement |
    HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLElement |
    HTMLEmbedElement | HTMLFormElement | HTMLHRElement | HTMLHeadElement |
    HTMLHeadingElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement |
    HTMLInputElement | HTMLLIElement | HTMLLabelElement | HTMLLinkElement |
    HTMLMapElement | HTMLMediaElement | HTMLMenuElement | HTMLMetaElement |
    HTMLMeterElement | HTMLModElement | HTMLOListElement | HTMLObjectElement |
    HTMLOptGroupElement | HTMLOptionElement | HTMLOptionsCollection | HTMLOutputElement |
    HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement |
    HTMLQuoteElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement |
    HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableCaptionElement |
    HTMLTableCellElement | HTMLTableColElement | HTMLTableRowElement | HTMLTableSectionElement |
    HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement |
    HTMLTrackElement | HTMLUListElement | HTMLVideoElement | Element | undefined {
*/

