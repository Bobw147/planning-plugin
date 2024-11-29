import { WrapperType } from "../types/types";

export enum HtmlTags {
    A = "a_tag",
    ABBR = "abbr_tag",
    ADDRESS = "address_tag",
    AREA = "area_tag",
    ARTICLE = "article_tag",
    ASIDE = "aside_tag",
    AUDIO = "audio_tag",
    B = "b_tag",
    BASE = "base_tag",
    BDI = "bdi_tag",
    BDO = "bdo_tag",
    BLOCKQUOTE = "blockquote_tag",
    BODY = "body_tag",
    BR = "br_tag",
    BUTTON = "button_tag",
    CANVAS = "canvas_tag",
    CAPTION = "caption_tag",
    CITE = "cite_tag",
    CODE = "code_tag",
    COL = "col-tag",
    COLGROUP = "colgroup_tag",
    COMMENT = "comment_tag",
    DATA = "data_tag",
    DATALIST = "datalist_tag",
    DD = "dd_tag",
    DEL = "del_tag",
    DETAILS = "details_tag",
    DFN = "dfn_tag",
    DIALOG = "dialog_tag",
    DIV = "div_tag",
    DL = "dl_tag",
    DOCTYPE = "doctype_tag",
    DT = "dt_tag",
    EM = "em_tag",
    EMBED = "embed_tag",
    FIELDSET = "fieldset_tag",
    FIGCAPTION = "figcaption",
    FIGURE = "figure",
    FOOTER = "footer",
    FORM = "form_tag",
    H1 = "h1_tag",
    H2 = "h2_tag",
    H3 = "h3_tag",
    H4 = "h4_tag",
    H5 = "h5_tag",
    H6 = "h6_tag",
    HEAD = "head_tag",
    HEADER = "header_tag",
    HGROUP = "hgroup_tag",
    HR = "hr_tag",
    HTML = "html_tag",
    I = "i_tag",
    IFRAME = "iframe_tag",
    IMG = "img_tag",
    INPUT = "input_tag",
    INS = "ins_tag",
    KBD = "kbd_tag",
    LABEL = "label_tag",
    LEGEND = "legend_tag",
    LI = "li_tag",
    LINK = "link_tag",
    MAIN = "main_tag",
    MAP = "map_tag",
    MARK = "mark_tag",
    MATH = "math_tag",
    MATHML = "MathML_tag",
    MENU = "menu_tag",
    META = "meta_tag",
    METER = "meter_tag",
    NAV = "nav_tag",
    NOSCRIPT = "noscript_tag",
    OBJECT = "object_tag",
    OL = "ol_tag",
    OPTGROUP = "optgroup_tag",
    OPTION = "option_tag",
    OUTPUT = "output_tag",
    P = "p_tag",
    PICTURE = "picture_tag",
    PRE = "pre_tag",
    PROGRESS = "progress_tag",
    Q = "q_tag",
    RP = "rp_tag",
    RT = "rt_tag",
    RUBY = "ruby_tag",
    S = "s_tag",
    SAMP = "samp_tag",
    SCRIPT = "script_tag",
    SEARCH = "search_tag",
    SECTION = "section_tag",
    SELECT = "select_tag",
    SLOT = "slot_tag",
    SMALL = "small_tag",
    SOURCE = "source_tag",
    SPAN = "span_tag",
    STRONG = "strong_tag",
    STYLE = "style_tag",
    SUB = "sub_tag",
    SUMMARY = "summary_tag",
    SUP = "sup_tag",
    SVG = "svg_tag",
    TABLE = "table_tag",
    TBODY = "tbody_tag",
    TD = "td_tag",
    TEMPLATE = "template_tag",
    TEXTAREA = "textarea_tag",
    TFOOT = "tfoot_tag",
    TH = "th_tag",
    THEAD = "thead_tag",
    TIME = "time_tag",
    TITLE = "title_tag",
    TR = "tr_tag",
    TRACK = "track_tag",
    U = "u_tag",
    UL = "ul_tag",
    VAR = "var_tag",
    VIDEO = "video_tag",
    WBR = "wbr_tag"
}

interface IHtmlTags {
    [HtmlTags.A]: string;
    [HtmlTags.ABBR]: string;
    [HtmlTags.ADDRESS]: string;
    [HtmlTags.AREA]: string;
    [HtmlTags.ARTICLE]: string;
    [HtmlTags.ASIDE]: string;
    [HtmlTags.AUDIO]: string;
    [HtmlTags.B]: string;
    [HtmlTags.BASE]: string;
    [HtmlTags.BDI]: string;
    [HtmlTags.BDO]: string;
    [HtmlTags.BLOCKQUOTE]: string;
    [HtmlTags.BODY]: string;
    [HtmlTags.BR]: string;
    [HtmlTags.BUTTON]: string;
    [HtmlTags.CANVAS]: string;
    [HtmlTags.CAPTION]: string;
    [HtmlTags.CITE]: string;
    [HtmlTags.CODE]: string;
    [HtmlTags.COL]: string;
    [HtmlTags.COLGROUP]: string;
    [HtmlTags.COMMENT]: string;
    [HtmlTags.DATA]: string;
    [HtmlTags.DATALIST]: string;
    [HtmlTags.DD]: string;
    [HtmlTags.DEL]: string;
    [HtmlTags.DETAILS]: string;
    [HtmlTags.DFN]: string;
    [HtmlTags.DIALOG]: string;
    [HtmlTags.DIV]: string;
    [HtmlTags.DL]: string;
    [HtmlTags.DOCTYPE]: string;
    [HtmlTags.DT]: string;
    [HtmlTags.EM]: string;
    [HtmlTags.EMBED]: string;
    [HtmlTags.FIELDSET]: string;
    [HtmlTags.FIGCAPTION]: string;
    [HtmlTags.FIGURE]: string;
    [HtmlTags.FOOTER]: string;
    [HtmlTags.FORM]: string;
    [HtmlTags.H1]: string;
    [HtmlTags.H2]: string;
    [HtmlTags.H3]: string;
    [HtmlTags.H4]: string;
    [HtmlTags.H5]: string;
    [HtmlTags.H6]: string;
    [HtmlTags.HEAD]: string;
    [HtmlTags.HEADER]: string;
    [HtmlTags.HGROUP]: string;
    [HtmlTags.HR]: string;
    [HtmlTags.HTML]: string;
    [HtmlTags.I]: string;
    [HtmlTags.IFRAME]: string;
    [HtmlTags.IMG]: string;
    [HtmlTags.INPUT]: string;
    [HtmlTags.INS]: string;
    [HtmlTags.KBD]: string;
    [HtmlTags.LABEL]: string;
    [HtmlTags.LEGEND]: string;
    [HtmlTags.LI]: string;
    [HtmlTags.LINK]: string;
    [HtmlTags.MAIN]: string;
    [HtmlTags.MAP]: string;
    [HtmlTags.MARK]: string;
    [HtmlTags.MATH]: string;
    [HtmlTags.MATHML]: string;
    [HtmlTags.MENU]: string;
    [HtmlTags.META]: string;
    [HtmlTags.METER]: string;
    [HtmlTags.NAV]: string;
    [HtmlTags.NOSCRIPT]: string;
    [HtmlTags.OBJECT]: string;
    [HtmlTags.OL]: string;
    [HtmlTags.OPTGROUP]: string;
    [HtmlTags.OPTION]: string;
    [HtmlTags.OUTPUT]: string;
    [HtmlTags.P]: string;
    [HtmlTags.PICTURE]: string;
    [HtmlTags.PRE]: string;
    [HtmlTags.PROGRESS]: string;
    [HtmlTags.Q]: string;
    [HtmlTags.RP]: string;
    [HtmlTags.RT]: string;
    [HtmlTags.RUBY]: string;
    [HtmlTags.S]: string;
    [HtmlTags.SAMP]: string;
    [HtmlTags.SCRIPT]: string;
    [HtmlTags.SEARCH]: string;
    [HtmlTags.SECTION]: string;
    [HtmlTags.SELECT]: string;
    [HtmlTags.SLOT]: string;
    [HtmlTags.SMALL]: string;
    [HtmlTags.SOURCE]: string;
    [HtmlTags.SPAN]: string;
    [HtmlTags.STRONG]: string;
    [HtmlTags.STYLE]: string;
    [HtmlTags.SUB]: string;
    [HtmlTags.SUMMARY]: string;
    [HtmlTags.SUP]: string;
    [HtmlTags.SVG]: string;
    [HtmlTags.TABLE]: string;
    [HtmlTags.TBODY]: string;
    [HtmlTags.TD]: string;
    [HtmlTags.TEMPLATE]: string;
    [HtmlTags.TEXTAREA]: string;
    [HtmlTags.TFOOT]: string;
    [HtmlTags.TH]: string;
    [HtmlTags.THEAD]: string;
    [HtmlTags.TIME]: string;
    [HtmlTags.TITLE]: string;
    [HtmlTags.TR]: string;
    [HtmlTags.TRACK]: string;
    [HtmlTags.U]: string;
    [HtmlTags.UL]: string;
    [HtmlTags.VAR]: string;
    [HtmlTags.VIDEO]: string;
    [HtmlTags.WBR]: string;
}

const htmlTagDictionary: IHtmlTags = {
    [HtmlTags.A]: 'a',
    [HtmlTags.ABBR]: 'abbr',
    [HtmlTags.ADDRESS]: 'address',
    [HtmlTags.AREA]: 'area',
    [HtmlTags.ARTICLE]: 'article',
    [HtmlTags.ASIDE]: 'aside',
    [HtmlTags.AUDIO]: 'audio',
    [HtmlTags.B]: 'b',
    [HtmlTags.BASE]: 'base',
    [HtmlTags.BDI]: 'bdi',
    [HtmlTags.BDO]: 'bdo',
    [HtmlTags.BLOCKQUOTE]: 'blockquote',
    [HtmlTags.BODY]: 'body',
    [HtmlTags.BR]: 'br',
    [HtmlTags.BUTTON]: 'button',
    [HtmlTags.CANVAS]: 'canvas',
    [HtmlTags.CAPTION]: 'caption',
    [HtmlTags.CITE]: 'cite',
    [HtmlTags.CODE]: 'code',
    [HtmlTags.COL]: 'col',
    [HtmlTags.COLGROUP]: 'colgroup',
    [HtmlTags.COMMENT]: '<!-- -->',
    [HtmlTags.DATA]: 'data',
    [HtmlTags.DATALIST]: 'datalist',
    [HtmlTags.DD]: 'dd',
    [HtmlTags.DEL]: 'del',
    [HtmlTags.DETAILS]: 'details',
    [HtmlTags.DFN]: 'dfn',
    [HtmlTags.DIALOG]: 'dialog',
    [HtmlTags.DIV]: 'div',
    [HtmlTags.DL]: 'dl',
    [HtmlTags.DOCTYPE]: 'doctype',
    [HtmlTags.DT]: 'dt',
    [HtmlTags.EM]: 'em',
    [HtmlTags.EMBED]: 'em',
    [HtmlTags.FIELDSET]: 'fieldset',
    [HtmlTags.FIGCAPTION]: 'figcaption',
    [HtmlTags.FIGURE]: 'figure',
    [HtmlTags.FOOTER]: 'footer',
    [HtmlTags.FORM]: 'form',
    [HtmlTags.H1]: 'h1',
    [HtmlTags.H2]: 'h2',
    [HtmlTags.H3]: 'h3',
    [HtmlTags.H4]: 'h4',
    [HtmlTags.H5]: 'h5',
    [HtmlTags.H6]: 'h6',
    [HtmlTags.HEAD]: 'head',
    [HtmlTags.HEADER]: 'header',
    [HtmlTags.HGROUP]: 'hgroup',
    [HtmlTags.HR]: 'hr',
    [HtmlTags.HTML]: 'html',
    [HtmlTags.I]: 'i',
    [HtmlTags.IFRAME]: 'iframe',
    [HtmlTags.IMG]: 'img',
    [HtmlTags.INPUT]: 'input',
    [HtmlTags.INS]: 'ins',
    [HtmlTags.KBD]: 'kbd',
    [HtmlTags.LABEL]: 'label',
    [HtmlTags.LEGEND]: 'legend',
    [HtmlTags.LI]: 'li',
    [HtmlTags.LINK]: 'link',
    [HtmlTags.MAIN]: 'main',
    [HtmlTags.MAP]: 'map',
    [HtmlTags.MARK]: 'mark',
    [HtmlTags.MATH]: 'math',
    [HtmlTags.MATHML]: 'math',
    [HtmlTags.MENU]: 'menu',
    [HtmlTags.META]: 'meta',
    [HtmlTags.METER]: 'meter',
    [HtmlTags.NAV]: 'nav',
    [HtmlTags.NOSCRIPT]: 'noscript',
    [HtmlTags.OBJECT]: 'object',
    [HtmlTags.OL]: 'ol',
    [HtmlTags.OPTGROUP]: 'optgroup',
    [HtmlTags.OPTION]: 'option',
    [HtmlTags.OUTPUT]: 'output',
    [HtmlTags.P]: 'p',
    [HtmlTags.PICTURE]: 'picture',
    [HtmlTags.PRE]: 'pre',
    [HtmlTags.PROGRESS]: 'progress',
    [HtmlTags.Q]: 'q',
    [HtmlTags.RP]: 'rp',
    [HtmlTags.RT]: 'rt',
    [HtmlTags.RUBY]: 'ruby',
    [HtmlTags.S]: 's',
    [HtmlTags.SAMP]: 'samp',
    [HtmlTags.SCRIPT]: 'script',
    [HtmlTags.SEARCH]: 'search',
    [HtmlTags.SECTION]: 'section',
    [HtmlTags.SELECT]: 'select',
    [HtmlTags.SLOT]: 'slot',
    [HtmlTags.SMALL]: 'small',
    [HtmlTags.SOURCE]: 'source',
    [HtmlTags.SPAN]: 'span',
    [HtmlTags.STRONG]: 'strong',
    [HtmlTags.STYLE]: 'style',
    [HtmlTags.SUB]: 'sub',
    [HtmlTags.SUMMARY]: 'summary',
    [HtmlTags.SUP]: 'sup',
    [HtmlTags.SVG]: 'svg',
    [HtmlTags.TABLE]: 'table',
    [HtmlTags.TBODY]: 'tbody',
    [HtmlTags.TD]: 'string',
    [HtmlTags.TEMPLATE]: 'template',
    [HtmlTags.TEXTAREA]: 'textarea',
    [HtmlTags.TFOOT]: 'tfoot',
    [HtmlTags.TH]: 'th',
    [HtmlTags.THEAD]: 'thead',
    [HtmlTags.TIME]: 'time',
    [HtmlTags.TITLE]: 'title',
    [HtmlTags.TR]: 'tr',
    [HtmlTags.TRACK]: 'track',
    [HtmlTags.U]: 'u',
    [HtmlTags.UL]: 'ul',
    [HtmlTags.VAR]: 'var',
    [HtmlTags.VIDEO]: 'video',
    [HtmlTags.WBR]: 'wbr',
}

// This wrapper is necessary 
export function resolveTag(tagId: HtmlTags, wrapper: WrapperType): string{
    return wrapper + htmlTagDictionary[tagId] + wrapper;
}

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