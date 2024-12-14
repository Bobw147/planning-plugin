// Part of common web package library. Copyright R. Bellchambers-Wilson 2024
// Repurposed for Obisidian Planning Plugin
//
// Create an enum for each attribute. The right hand value will become the
// lookup key in the typechecked and interfaced dictionary below. 


export const HtmlAttributes = {
    ABBR: 'abbr',
    ACCEPT: 'accept',
    ACCEPTCHARSET: 'accept-charset',
    ACCESSKEY: 'accesskey',
    ACTION: 'action',
    ALIGN: 'align',
    ALLOW: 'allow',
    ALLOWFULLSCREEN: 'allowfullscreen',
    ALPHA: 'alpha',
    ALT: 'alt',
    AS: 'as',
    ASYNC: 'async',
    AUTOCAPITALIZE: 'autocapitalize',
    AUTOCOMPLETE: 'autocomplete',
    AUTOCORRECT: 'autocorrect',
    AUTOFOCUS: 'autofocus',
    AUTOPLAY : 'autoplay',
    BLOCKING: 'blocking',
    CHARSET: 'charset',
    CHECKED: 'checked',
    CITE: 'cite',
    CLASS: 'class',
    COLOR: 'color',
    COLORSPACE: 'colorspace',
    COLS: 'cols',
    COLSPAN: 'colspan',
    CONTENT: 'content',
    CONTENTEDITABLE: 'contenteditable',
    CONTROLS: 'controls',
    COORDS: 'coords',
    CROSSORIGIN: 'crossorigin',
    DATA: 'data',
    DATASTAR: 'data-*',
    DATETIME: 'datetime',
    DECODING: 'decoding',
    DEFAULT: 'default',
    DEFER: 'defer',
    DIR: 'dir',
    DIRNAME: 'dirname',
    DISABLED: 'disabled',
    DISPLAY: 'display',
    DOWNLOAD: 'download',
    DRAGGABLE: 'draggable',
    ENCTYPE: 'enctype',
    ENTERKEYHINT: 'enterkeyhint',
    FETCHPRIORITY: 'fetchpriority',
    FOR: 'for',
    FORM: 'form',
    FORMACTION: 'formaction',
    FORMENCTYPE: 'formenctype',
    FORMMETHOD: 'formmethod',
    FORMNOVALIDATE: 'formnovalidate',
    FORMTARGET: 'formtarget',
    HEADERS: 'headers',
    HEIGHT: 'height',
    HIDDEN: 'hidden',
    HIGH: 'high',
    HREF: 'href',
    HREFLANG: 'hreflang',
    HTTP_EQUIV: 'http-equiv',
    ICON: 'icon',
    ID: 'id',
    IMAGESIZES: 'imagesizes',
    IMAGESRCSET: 'imagesrcset',
    INERT: 'inert',
    INNERHTML: 'innerHtml',
    INNERTEXT: 'innerText',
    INPUTMODE: 'inputmode',
    INTEGRITY: 'integrity',
    IS: 'is',
    ISMAP: 'ismap',
    ITEMID: 'itemid',
    ITEMPROP: 'itemprop',
    ITEMREF: 'itemref',
    ITEMSCOPE: 'itemscope',
    ITEMTYPE: 'itemtype',
    KIND: 'kind',
    LABEL: 'label',
    LANG: 'lang',
    LIST: 'list',
    LOADING: 'loading',
    LOOP: 'loop',
    LOW: 'low',
    MANIFEST: 'manifest',
    MAX: 'max',
    MAXLENGTH: 'maxlength',
    MEDIA: 'media',
    METHOD: 'method',
    MIN: 'min',
    MINLENGTH: 'minlength',
    MULTIPLE: 'multiple',
    MUTED: 'muted',
    NAME: 'name',
    NOMODULE: 'nomodule',
    NONCE: 'nonce',
    NOVALIDATE: 'novalidate',
    ONABORT: 'onabort',
    ONAFETRPRINT: 'onafterprint',
    ONAUXCLICK: 'onauxclick',
    ONBEFOREINPUT: 'onbeforeinput',
    ONBEFOREMATCH: 'onbefotrmatch',
    ONBEFOREPRINT: 'onbeforeprint',
    ONBEFORETOGGGLE: 'onbeforetoggle',
    ONBEFOREUNLOAD: 'onbeforeunload',
    ONBLUR: 'onblur',
    ONCANCEL: 'cancel',
    ONCANPLAY: 'oncanplay',
    ONCANPLAYTHROUGH: 'oncanplaythrough',
    ONCHANGE: 'onchange',
    ONCLICK: 'onclick',
    ONCLOSE: 'onclose',
    ONCONTEXTLOST: 'oncontextlost',
    ONCONTEXTMENU: 'oncontextmenu',
    ONCONTEXTRESTORED: 'oncontextrestored',
    ONCOPY: 'oncopy',
    ONCUECHANGE: 'oncuechange',
    ONCUT: 'oncut',
    ONDBLCLICK: 'ondblclick',
    ONDRAG: 'ondrag',
    ONDRAGEND: 'ondragend',
    ONDRAGENTER: 'ondragenter',
    ONDRAGLEAVE: 'ondragleave',
    ONDRAGOVER: 'ondragover',
    ONDRAGSTART: 'ondragstart',
    ONDROP: 'ondrop',
    ONDURATIONCHANGE: 'ondurationchange',
    ONEMPTIED: 'onemptied',
    ONENDED: 'onended',
    ONERROR: 'onerror',
    ONFOCUS: 'onfocus',
    ONFORMDATA: 'onformdata',
    ONHASHCHANGE: 'onhashchange',
    ONINPUT: 'oninput',
    ONINVALID: 'oninvalid',
    ONKEYDOWN: 'onkeydown',
    ONKEYPRESS: 'onkeypress',
    ONKEYUP: 'onkeyup',
    ONLANGUAGECHANGE: 'onlanguagechange',
    ONLOAD: 'onload',
    ONLOADEDDATA: 'onloadeddata',
    ONLOADEDMETADATA: 'onloaadedmetadata',
    ONLOADSTART: 'onloadstart',
    ONMESSAGE: 'onmessage',
    ONMESSAGEERROR: 'ponmessageerror',
    ONMOUSEDOWN: 'onmousedown',
    ONMOUSEENTER: 'onmouseenter',
    ONMOUSELEAVE: 'onmouseleave',
    ONMOUSEMOVE: 'onmousemove',
    ONMOUSEOUT: 'onmouseout',
    ONMOUSEOVER: 'onmouseover',
    ONMOUSEUP: 'onmouseup',
    ONOFFLINE: 'onoffline',
    ONONLINE: 'ononline',
    ONPAGEHIDE: 'onpagehide',
    ONPAGEREVEAL: 'onpagereveal',
    ONPAGESHOW: 'onpageshow',
    ONPAGESWAP: 'onpageswap',
    ONPASTE: 'onpaste',
    ONPAUSE: 'onpause',
    ONPLAY: 'onplay',
    ONPLAYING: 'onplaying',
    ONPOPSTATE: 'onpopstate',
    ONPROGRESS: 'onprogress',
    ONRATECHANGE: 'onratechange',
    ONREJECTIONHANDLED: 'onrejectionhandled',
    ONRESET: 'onreset',
    ONRESIZE: 'onresize',
    ONSCROLL: 'onscroll',
    ONSCROLLEND: 'onscrollend',
    ONSECURITYPOLICYVIOLATION: 'onsecuritypolicyviolation',
    ONSEARCH: 'onsearch',
    ONSEEKED: 'onseeked',
    ONSEEKING: 'onseeking',
    ONSELECT: 'onselect',
    ONSLOTCHANGE: 'onslotchange',
    ONSTALLED: 'onstalled',
    ONSTORAGE: 'onstorage',
    ONSUBMIT: 'onsubmit',
    ONSUSPEND: 'onsuspend',
    ONTIMEUPDATE: 'ontimeupdate',
    ONTOGGLE: 'ontoggle',
    ONUNHANDLEDREJECTION: 'onunhandledrejection',
    ONUNLOAD: 'onunload',
    ONVOLUMECHANGE: 'onvolumechange',
    ONWAITING: 'onwaiting',
    ONWHEEL: 'onwheel',
    OPEN: 'open',
    OPTIMUM: 'optimum',
    PATTERN: 'pattern',
    PING: 'ping',
    PLACEHOLDER: 'placeholder',
    PLAYSINLINE: 'playsinline',
    POPOVER: 'popover',
    POPOVERTARGET: 'popovertarget',
    POPOVERTARGETACTION: 'popovertargetaction',
    POSTER: 'poster',
    PRELOAD: 'preload',
    READONLY: 'readonly',
    REFERRERPOLICY: 'referrerpolicy',
    REL: 'rel',
    REQUIRED: 'required',
    REVERSED: 'reversed',
    ROWS: 'rows',
    ROWSPAN: 'rowspan',
    SANDBOX: 'sandbox',
    SCOPE: 'scope',
    SELECTED: 'selected',
    SHADOWROOTCLONABLE: 'shadowrootclonable',
    SHADOWROOTDELEGATESFOCUS: 'shadowrootdelegatesfocus',
    SHADOWROOTMODE: 'shadowrootmode',
    SHADOWROOTSERIALIZABLE: 'shadowrootserializable',
    SHAPE: 'shape',
    SIZE: 'size',
    SIZES: 'sizes',
    SLOT: 'slot',
    SPAN: 'span',
    SPELLCHECK: 'spellcheck',
    SRC: 'src',
    SRCDOC: 'srcloc',
    SRCLANG: 'srclang',
    SRCSET: 'srcset',
    START: 'start',
    STEP: 'step',
    STYLE: 'style',
    TABINDEX: 'tabindex',
    TARGET: 'target',
    TITLE: 'title',
    TRANSLATE: 'translate',
    TYPE: 'type',
    USEMAP: 'usemap',
    VALUE: 'value',
    WIDTH: 'width',
    WRAP: 'wrap',
    WRITING_SUGGESTIONS: 'writingsuggestions'
} as const;

export type HtmlAttributes = typeof HtmlAttributes[keyof typeof HtmlAttributes];
