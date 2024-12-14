
export const HtmlTags = {
    A: 'a',
    ABBR: 'abbr',
    ADDRESS: 'address',
    AREA: 'area',
    ARTICLE: 'article',
    ASIDE: 'aside',
    AUDIO: 'audio',
    B: 'b',
    BASE: 'base',
    BDI: 'bdi',
    BDO: 'bdo',
    BLOCKQUOTE: 'blockquote',
    BODY: 'body',
    BR: 'br',
    BUTTON: 'button',
    CANVAS: 'canvas',
    CAPTION: 'caption',
    CITE: 'cite',
    CODE: 'code',
    COL: 'col',
    COLGROUP: 'colgroup',
    COMMENT: '<!-- -->',
    DATA: 'data',
    DATALIST: 'datalist',
    DD: 'dd',
    DEL: 'del',
    DETAILS: 'details',
    DFN: 'dfn',
    DIALOG: 'dialog',
    DIV: 'div',
    DL: 'dl',
    DOCTYPE: 'doctype',
    DT: 'dt',
    EM: 'em',
    EMBED: 'em',
    FIELDSET: 'fieldset',
    FIGCAPTION: 'figcaption',
    FIGURE: 'figure',
    FOOTER: 'footer',
    FORM: 'form',
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    HEAD: 'head',
    HEADER: 'header',
    HGROUP: 'hgroup',
    HR: 'hr',
    HTML: 'html',
    I: 'i',
    IFRAME: 'iframe',
    IMG: 'img',
    INPUT: 'input',
    INS: 'ins',
    KBD: 'kbd',
    LABEL: 'label',
    LEGEND: 'legend',
    LI: 'li',
    LINK: 'link',
    MAIN: 'main',
    MAP: 'map',
    MARK: 'mark',
    MATH: 'math',
    MATHML: 'math',
    MENU: 'menu',
    META: 'meta',
    METER: 'meter',
    NAV: 'nav',
    NOSCRIPT: 'noscript',
    OBJECT: 'object',
    OL: 'ol',
    OPTGROUP: 'optgroup',
    OPTION: 'option',
    OUTPUT: 'output',
    P: 'p',
    PICTURE: 'picture',
    PRE: 'pre',
    PROGRESS: 'progress',
    Q: 'q',
    RP: 'rp',
    RT: 'rt',
    RUBY: 'ruby',
    S: 's',
    SAMP: 'samp',
    SCRIPT: 'script',
    SEARCH: 'search',
    SECTION: 'section',
    SELECT: 'select',
    SLOT: 'slot',
    SMALL: 'small',
    SOURCE: 'source',
    SPAN: 'span',
    STRONG: 'strong',
    STYLE: 'style',
    SUB: 'sub',
    SUMMARY: 'summary',
    SUP: 'sup',
    SVG: 'svg',
    TABLE: 'table',
    TBODY: 'tbody',
    TD: 'string',
    TEMPLATE: 'template',
    TEXTAREA: 'textarea',
    TFOOT: 'tfoot',
    TH: 'th',
    THEAD: 'thead',
    TIME: 'time',
    TITLE: 'title',
    TR: 'tr',
    TRACK: 'track',
    U: 'u',
    UL: 'ul',
    VAR: 'var',
    VIDEO: 'video',
    WBR: 'wbr',
} as const;

export type HtmlTags = typeof HtmlTags[keyof typeof HtmlTags];

/*
export function isApplicable(tag: HtmlTags, attrib: string): boolean {
    const tagDict = htmlElementDictionary;
    const attribDict = htmlAttributeDictionary;
    
    // See if supplied attrib is a member of the global set belonging to all HTML elements
    let found: boolean = globalAttributes.find((entry) => attrib === entry) !== undefined;
    if (found)
        return found;

    // Check if attrib is valid for this element
    switch (tag) {
        case tagDict[HtmlTags.A] :
            found = [
                attribDict[HtmlAttributes.DOWNLOAD],
                attribDict[HtmlAttributes.HREF],
                attribDict[HtmlAttributes.HREFLANG],
                attribDict[HtmlAttributes.PING],
                attribDict[HtmlAttributes.REFERRERPOLICY],
                attribDict[HtmlAttributes.REL],
                attribDict[HtmlAttributes.TARGET],
                attribDict[HtmlAttributes.TYPE],

            ].find((entry) => entry === attrib) !== undefined;
            break;

        case tagDict[HtmlTags.ABBR]:
            break;

        case tagDict[HtmlTags.ADDRESS]:
            break;

        case tagDict[HtmlTags.AREA]:
            found = [
                attribDict[HtmlAttributes.ALT],
                attribDict[HtmlAttributes.COORDS],
                attribDict[HtmlAttributes.DOWNLOAD],
                attribDict[HtmlAttributes.HREF],
                attribDict[HtmlAttributes.PING],
                attribDict[HtmlAttributes.REFERRERPOLICY],
                attribDict[HtmlAttributes.REL],
                attribDict[HtmlAttributes.SHAPE],
                attribDict[HtmlAttributes.TARGET],
            ].find((entry) => entry === attrib) !== undefined;
            break;

        case tagDict[HtmlTags.ARTICLE]:
            break;

        case tagDict[HtmlTags.ASIDE]:
            break;

        case tagDict[HtmlTags.AUDIO]:
            found = [
                attribDict[HtmlAttributes.AUTOPLAY],
                attribDict[HtmlAttributes.CONTROLS],
                attribDict[HtmlAttributes.CROSSORIGIN],
                attribDict[HtmlAttributes.LOOP],
                attribDict[HtmlAttributes.MUTED],
                attribDict[HtmlAttributes.PRELOAD],
                attribDict[HtmlAttributes.SRC],
            ].find((entry) => entry === attrib) !== undefined;
            break;

        case tagDict[HtmlTags.B]:
            break;

        case tagDict[HtmlTags.BASE]:
            found = [
                attribDict[HtmlAttributes.HREF],
                attribDict[HtmlAttributes.TARGET],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.BDI]:
			break;

        case tagDict[HtmlTags.BDO]:
			break;

        case tagDict[HtmlTags.BLOCKQUOTE]:
            found = [
                attribDict[HtmlAttributes.CITE],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.BODY]:
            found = [
                attribDict[HtmlAttributes.ONAFETRPRINT],
                attribDict[HtmlAttributes.ONBEFOREPRINT],
                attribDict[HtmlAttributes.ONBEFOREUNLOAD],
                attribDict[HtmlAttributes.ONHASHCHANGE],
                attribDict[HtmlAttributes.ONLANGUAGECHANGE],
                attribDict[HtmlAttributes.ONMESSAGE],
                attribDict[HtmlAttributes.ONMESSAGEERROR],
                attribDict[HtmlAttributes.ONOFFLINE],
                attribDict[HtmlAttributes.ONONLINE],
                attribDict[HtmlAttributes.ONPAGEHIDE],
                attribDict[HtmlAttributes.ONPAGEREVEAL],
                attribDict[HtmlAttributes.ONPAGESHOW],
                attribDict[HtmlAttributes.ONPAGESWAP],
                attribDict[HtmlAttributes.ONPOPSTATE],
                attribDict[HtmlAttributes.ONREJECTIONHANDLED],
                attribDict[HtmlAttributes.ONSTORAGE],
                attribDict[HtmlAttributes.ONUNLOAD],
                attribDict[HtmlAttributes.ONUNHANDLEDREJECTION],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.BR]:
			break;

        case tagDict[HtmlTags.BUTTON]:
            found = [
                attribDict[HtmlAttributes.DISABLED],
                attribDict[HtmlAttributes.FORM],
                attribDict[HtmlAttributes.FORMACTION],
                attribDict[HtmlAttributes.FORMENCTYPE],
                attribDict[HtmlAttributes.FORMMETHOD],
                attribDict[HtmlAttributes.FORMNOVALIDATE],
                attribDict[HtmlAttributes.FORMTARGET],
                attribDict[HtmlAttributes.NAME],
                attribDict[HtmlAttributes.POPOVERTARGET],
                attribDict[HtmlAttributes.POPOVERTARGETACTION],
                attribDict[HtmlAttributes.TYPE],
                attribDict[HtmlAttributes.VALUE],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.CANVAS]:
            found = [
                attribDict[HtmlAttributes.HEIGHT],
                attribDict[HtmlAttributes.WIDTH],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.CAPTION]:
			break;

        case tagDict[HtmlTags.CITE]:
			break;

        case tagDict[HtmlTags.CODE]:
			break;

        case tagDict[HtmlTags.COL]:
            found = [
                attribDict[HtmlAttributes.SPAN],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.COLGROUP]:
            found = [
                attribDict[HtmlAttributes.SPAN],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.COMMENT]:
			break;

        case tagDict[HtmlTags.DATA]:
            found = [
                attribDict[HtmlAttributes.VALUE],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.DATALIST]:
			break;

        case tagDict[HtmlTags.DD]:
			break;

        case tagDict[HtmlTags.DEL]:
            found = [
                attribDict[HtmlAttributes.CITE],
                attribDict[HtmlAttributes.DATETIME],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.DETAILS]:
            found = [
                attribDict[HtmlAttributes.NAME],
                attribDict[HtmlAttributes.OPEN],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.DFN]:
			break;

        case tagDict[HtmlTags.DIALOG]:
            found = [
                attribDict[HtmlAttributes.OPEN],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.DIV]:
			break;

        case tagDict[HtmlTags.DL]:
			break;

        case tagDict[HtmlTags.DOCTYPE]:
			break;

        case tagDict[HtmlTags.DT]:
			break;

        case tagDict[HtmlTags.EM]:
			break;

        case tagDict[HtmlTags.EMBED]:
            found = [
                attribDict[HtmlAttributes.HEIGHT],
                attribDict[HtmlAttributes.SRC],
                attribDict[HtmlAttributes.TYPE],
                attribDict[HtmlAttributes.WIDTH],
            ].find((entry) => entry === attrib) !== undefined;
            break;

        case tagDict[HtmlTags.FIELDSET]:
            found = [
                attribDict[HtmlAttributes.DISABLED],
                attribDict[HtmlAttributes.FORM],
                attribDict[HtmlAttributes.NAME],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.FIGCAPTION]:
			break;

        case tagDict[HtmlTags.FIGURE]:
			break;

        case tagDict[HtmlTags.FOOTER]:
			break;

        case tagDict[HtmlTags.FORM]:
            found = [
                attribDict[HtmlAttributes.ACCEPTCHARSET],
                attribDict[HtmlAttributes.ACTION],
                attribDict[HtmlAttributes.AUTOCOMPLETE],
                attribDict[HtmlAttributes.ENCTYPE],
                attribDict[HtmlAttributes.METHOD],
                attribDict[HtmlAttributes.NAME],
                attribDict[HtmlAttributes.NOVALIDATE],
                attribDict[HtmlAttributes.REL],
                attribDict[HtmlAttributes.TARGET],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.H1]:
        case tagDict[HtmlTags.H2]:
		case tagDict[HtmlTags.H3]:
        case tagDict[HtmlTags.H4]:
        case tagDict[HtmlTags.H5]:
        case tagDict[HtmlTags.H6]:
			break;

        case tagDict[HtmlTags.HEAD]:
			break;

        case tagDict[HtmlTags.HEADER]:
			break;

        case tagDict[HtmlTags.HGROUP]:
			break;

        case tagDict[HtmlTags.HR]:
			break;

        case tagDict[HtmlTags.HTML]:
            found = [
                attribDict[HtmlAttributes.MANIFEST],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.I]:
			break;

        case tagDict[HtmlTags.IFRAME]:
            found = [
                attribDict[HtmlAttributes.ALLOW],
                attribDict[HtmlAttributes.ALLOWFULLSCREEN],
                attribDict[HtmlAttributes.HEIGHT],
                attribDict[HtmlAttributes.LOADING],
                attribDict[HtmlAttributes.NAME],
                attribDict[HtmlAttributes.SANDBOX],
                attribDict[HtmlAttributes.REFERRERPOLICY],
                attribDict[HtmlAttributes.SRC],
                attribDict[HtmlAttributes.SRCDOC],
                attribDict[HtmlAttributes.WIDTH],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.IMG]:
            found = [
                attribDict[HtmlAttributes.ALT],
                attribDict[HtmlAttributes.CROSSORIGIN],
                attribDict[HtmlAttributes.DECODING],
                attribDict[HtmlAttributes.FETCHPRIORITY],
                attribDict[HtmlAttributes.HEIGHT],
                attribDict[HtmlAttributes.ISMAP],
                attribDict[HtmlAttributes.LOADING],
                attribDict[HtmlAttributes.REFERRERPOLICY],
                attribDict[HtmlAttributes.SIZES],
                attribDict[HtmlAttributes.SRC],
                attribDict[HtmlAttributes.SRCSET],
                attribDict[HtmlAttributes.USEMAP],
                attribDict[HtmlAttributes.WIDTH],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.INPUT]:
            found = [
                attribDict[HtmlAttributes.ACCEPT],
                attribDict[HtmlAttributes.ALPHA],
                attribDict[HtmlAttributes.ALT],
                attribDict[HtmlAttributes.AUTOCOMPLETE],
                attribDict[HtmlAttributes.CHECKED],
                attribDict[HtmlAttributes.COLORSPACE],
                attribDict[HtmlAttributes.DIRNAME],
                attribDict[HtmlAttributes.DISABLED],
                attribDict[HtmlAttributes.FORM],
                attribDict[HtmlAttributes.FORMACTION],
                attribDict[HtmlAttributes.FORMENCTYPE],
                attribDict[HtmlAttributes.FORMMETHOD],
                attribDict[HtmlAttributes.FORMNOVALIDATE],
                attribDict[HtmlAttributes.FORMTARGET],
                attribDict[HtmlAttributes.HEIGHT],
                attribDict[HtmlAttributes.LIST],
                attribDict[HtmlAttributes.MAX],
                attribDict[HtmlAttributes.MAXLENGTH],
                attribDict[HtmlAttributes.MIN],
                attribDict[HtmlAttributes.MINLENGTH],
                attribDict[HtmlAttributes.MULTIPLE],
                attribDict[HtmlAttributes.NAME],
                attribDict[HtmlAttributes.PATTERN],
                attribDict[HtmlAttributes.PLACEHOLDER],
                attribDict[HtmlAttributes.POPOVERTARGET],
                attribDict[HtmlAttributes.POPOVERTARGETACTION],
                attribDict[HtmlAttributes.READONLY],
                attribDict[HtmlAttributes.REQUIRED],
                attribDict[HtmlAttributes.SIZE],
                attribDict[HtmlAttributes.SRC],
                attribDict[HtmlAttributes.STEP],
                attribDict[HtmlAttributes.TYPE],
                attribDict[HtmlAttributes.VALUE],
                attribDict[HtmlAttributes.WIDTH],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.INS]:
            found = [
                attribDict[HtmlAttributes.CITE],
                attribDict[HtmlAttributes.DATETIME],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.KBD]:
			break;

        case tagDict[HtmlTags.LABEL]:
            found = [
                attribDict[HtmlAttributes.FOR],
            ].find((entry) => entry === attrib) !== undefined;

        break;

        case tagDict[HtmlTags.LEGEND]:
			break;

        case tagDict[HtmlTags.LI]:
            found = [
                attribDict[HtmlAttributes.VALUE],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.LINK]:
            found = [
                attribDict[HtmlAttributes.AS],
                attribDict[HtmlAttributes.BLOCKING],
                attribDict[HtmlAttributes.COLOR],
                attribDict[HtmlAttributes.CROSSORIGIN],
                attribDict[HtmlAttributes.DISABLED],
                attribDict[HtmlAttributes.FETCHPRIORITY],
                attribDict[HtmlAttributes.HREF],
                attribDict[HtmlAttributes.HREFLANG],
                attribDict[HtmlAttributes.IMAGESIZES],
                attribDict[HtmlAttributes.IMAGESRCSET],
                attribDict[HtmlAttributes.INTEGRITY],
                attribDict[HtmlAttributes.MEDIA],
                attribDict[HtmlAttributes.REFERRERPOLICY],
                attribDict[HtmlAttributes.REL],
                attribDict[HtmlAttributes.SIZES],
                attribDict[HtmlAttributes.TYPE],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.MAIN]:
			break;

        case tagDict[HtmlTags.MAP]:
            found = [
                attribDict[HtmlAttributes.NAME],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.MARK]:
			break;

        case tagDict[HtmlTags.MATH]:
            break;

        case tagDict[HtmlTags.MATHML]:
            break;

        case tagDict[HtmlTags.MENU]:
            break;

        case tagDict[HtmlTags.META]:
            found = [
                attribDict[HtmlAttributes.CHARSET],
                attribDict[HtmlAttributes.CONTENT],
                attribDict[HtmlAttributes.HTTP_EQUIV],
                attribDict[HtmlAttributes.MEDIA],
                attribDict[HtmlAttributes.NAME],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.METER]:
            found = [
                attribDict[HtmlAttributes.HIGH],
                attribDict[HtmlAttributes.LOW],
                attribDict[HtmlAttributes.MAX],
                attribDict[HtmlAttributes.MIN],
                attribDict[HtmlAttributes.OPTIMUM],
                attribDict[HtmlAttributes.VALUE],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.NAV]:
			break;

        case tagDict[HtmlTags.NOSCRIPT]:
			break;

        case tagDict[HtmlTags.OBJECT]:
            found = [
                attribDict[HtmlAttributes.DATA],
                attribDict[HtmlAttributes.FORM],
                attribDict[HtmlAttributes.HEIGHT],
                attribDict[HtmlAttributes.NAME],
                attribDict[HtmlAttributes.TYPE],
                attribDict[HtmlAttributes.WIDTH],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.OL]:
            found = [
                attribDict[HtmlAttributes.REVERSED],
                attribDict[HtmlAttributes.START],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.OPTGROUP]:
            found = [
                attribDict[HtmlAttributes.DISABLED],
                attribDict[HtmlAttributes.LABEL],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.OPTION]:
            found = [
                attribDict[HtmlAttributes.DISABLED],
                attribDict[HtmlAttributes.LABEL],
                attribDict[HtmlAttributes.SELECTED],
                attribDict[HtmlAttributes.VALUE],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.OUTPUT]:
            found = [
                attribDict[HtmlAttributes.FOR],
                attribDict[HtmlAttributes.FORM],
                attribDict[HtmlAttributes.NAME],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.P]:
			break;

        case tagDict[HtmlTags.PICTURE]:
			break;

        case tagDict[HtmlTags.PRE]:
			break;

        case tagDict[HtmlTags.PROGRESS]:
            found = [
                attribDict[HtmlAttributes.MAX],
                attribDict[HtmlAttributes.VALUE],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.Q]:
            found = [
                attribDict[HtmlAttributes.CITE],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.RP]:
			break;

        case tagDict[HtmlTags.RT]:
			break;

        case tagDict[HtmlTags.RUBY]:
			break;

        case tagDict[HtmlTags.S]:
			break;

        case tagDict[HtmlTags.SAMP]:
			break;

        case tagDict[HtmlTags.SCRIPT]:
            found = [
                attribDict[HtmlAttributes.ASYNC],
                attribDict[HtmlAttributes.BLOCKING],
                attribDict[HtmlAttributes.CROSSORIGIN],
                attribDict[HtmlAttributes.DEFER],
                attribDict[HtmlAttributes.FETCHPRIORITY],
                attribDict[HtmlAttributes.INTEGRITY],
                attribDict[HtmlAttributes.NOMODULE],
                attribDict[HtmlAttributes.REFERRERPOLICY],
                attribDict[HtmlAttributes.SRC],
                attribDict[HtmlAttributes.TYPE],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.SEARCH]:
			break;

        case tagDict[HtmlTags.SECTION]:
			break;

        case tagDict[HtmlTags.SELECT]:
            found = [
                attribDict[HtmlAttributes.AUTOCOMPLETE],
                attribDict[HtmlAttributes.DISABLED],
                attribDict[HtmlAttributes.FORM],
                attribDict[HtmlAttributes.MULTIPLE],
                attribDict[HtmlAttributes.NAME],
                attribDict[HtmlAttributes.REQUIRED],
                attribDict[HtmlAttributes.SIZE],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.SLOT]:
            found = [
                attribDict[HtmlAttributes.NAME],
            ].find((entry) => entry === attrib) !== undefined;
            break;

        case tagDict[HtmlTags.SMALL]:
			break;

        case tagDict[HtmlTags.SOURCE]:
            found = [
                attribDict[HtmlAttributes.HEIGHT],
                attribDict[HtmlAttributes.MEDIA],
                attribDict[HtmlAttributes.SIZES],
                attribDict[HtmlAttributes.SRC],
                attribDict[HtmlAttributes.SRCSET],
                attribDict[HtmlAttributes.TYPE],
                attribDict[HtmlAttributes.WIDTH],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.SPAN]:
			break;

        case tagDict[HtmlTags.STRONG]:
			break;

        case tagDict[HtmlTags.STYLE]:
            found = [
                attribDict[HtmlAttributes.BLOCKING],
                attribDict[HtmlAttributes.MEDIA],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.SUB]:
			break;

        case tagDict[HtmlTags.SUMMARY]:
			break;

        case tagDict[HtmlTags.SUP]:
			break;

        case tagDict[HtmlTags.SVG]:
			break;

        case tagDict[HtmlTags.TABLE]:
			break;

        case tagDict[HtmlTags.TBODY]:
			break;

        case tagDict[HtmlTags.TD]:
            found = [
                attribDict[HtmlAttributes.COLSPAN],
                attribDict[HtmlAttributes.HEADERS],
                attribDict[HtmlAttributes.ROWSPAN],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.TEMPLATE]:
            found = [
                attribDict[HtmlAttributes.SHADOWROOTCLONABLE],
                attribDict[HtmlAttributes.SHADOWROOTDELEGATESFOCUS],
                attribDict[HtmlAttributes.SHADOWROOTMODE],
                attribDict[HtmlAttributes.SHADOWROOTSERIALIZABLE]
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.TEXTAREA]:
            found = [
                attribDict[HtmlAttributes.AUTOCOMPLETE],
                attribDict[HtmlAttributes.COLS],
                attribDict[HtmlAttributes.DIRNAME],
                attribDict[HtmlAttributes.DISABLED],
                attribDict[HtmlAttributes.FORM],
                attribDict[HtmlAttributes.MAXLENGTH],
                attribDict[HtmlAttributes.MINLENGTH],
                attribDict[HtmlAttributes.NAME],
                attribDict[HtmlAttributes.PLACEHOLDER],
                attribDict[HtmlAttributes.READONLY],
                attribDict[HtmlAttributes.REQUIRED],
                attribDict[HtmlAttributes.ROWS],
                attribDict[HtmlAttributes.WRAP],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.TFOOT]:
			break;

        case tagDict[HtmlTags.TH]:
            found = [
                attribDict[HtmlAttributes.ABBR],
                attribDict[HtmlAttributes.COLSPAN],
                attribDict[HtmlAttributes.HEADERS],
                attribDict[HtmlAttributes.ROWSPAN],
                attribDict[HtmlAttributes.SCOPE],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.THEAD]:
			break;

        case tagDict[HtmlTags.TIME]:
            found = [
                attribDict[HtmlAttributes.DATETIME],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.TITLE]:
			break;

        case tagDict[HtmlTags.TR]:
			break;

        case tagDict[HtmlTags.TRACK]:
            found = [
                attribDict[HtmlAttributes.DEFAULT],
                attribDict[HtmlAttributes.KIND],
                attribDict[HtmlAttributes.LABEL],
                attribDict[HtmlAttributes.SRC],
                attribDict[HtmlAttributes.SRCLANG],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.U]:
            break;
    
        case tagDict[HtmlTags.UL]:
			break;

        case tagDict[HtmlTags.VAR]:
			break;

        case tagDict[HtmlTags.VIDEO]:
            found = [
                attribDict[HtmlAttributes.AUTOPLAY],
                attribDict[HtmlAttributes.CONTROLS],
                attribDict[HtmlAttributes.CROSSORIGIN],
                attribDict[HtmlAttributes.HEIGHT],
                attribDict[HtmlAttributes.LOOP],
                attribDict[HtmlAttributes.MUTED],
                attribDict[HtmlAttributes.PLAYSINLINE],
                attribDict[HtmlAttributes.POSTER],
                attribDict[HtmlAttributes.PRELOAD],
                attribDict[HtmlAttributes.SRC],
                attribDict[HtmlAttributes.WIDTH],
            ].find((entry) => entry === attrib) !== undefined;
			break;

        case tagDict[HtmlTags.WBR]:
			break;

        case undefined :
            break;
    }
    return found;
}
*/