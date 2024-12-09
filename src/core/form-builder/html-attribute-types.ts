// Part of common web package library. Copyright R. Bellchambers-Wilson 2024
// Repurposed for Obisidian Planning Plugin
//
// Create an enum for each attribute. The right hand value will become the
// lookup key in the typechecked and interfaced dictionary below. 
import { WrapperType } from '../types/types';

export enum HtmlAttributes {
    ABBR = "abbbr_attrib",
    ACCEPT = "accept_attrib",
    ACCEPTCHARSET = "accept_charset_attrib",
    ACCESSKEY = "access_key_attrib",
    ACTION = "action_attrib",
    ALIGN = "align_attrib",
    ALLOW = "allow_attrib",
    ALLOWFULLSCREEN = "allowfullscreen_attrib",
    ALPHA = "alpha_attrib",
    ALT = "alt_attrib",
    AS = "as_attrib",
    ASYNC = "async_attrib",
    AUTOCOMPLETE = "autocomplete_attrib",
    AUTOCAPITALIZE = "autocapitalize_attrib",
    AUTOCORRECT = "autocorrect_attrib",
    AUTOFOCUS = "autofocus_attrib",
    AUTOPLAY = "autoplay_attrib",
    BLOCKING = "blocking_attrib",
    CHARSET = "charset_attrib",
    CHECKED = "checked_attrib",
    CITE = "cite_attrib",
    CLASS = "class_attrib",
    COLOR = "color_attrib",
    COLORSPACE = "colorspace_attrib",
    COLS = "cols_attrib",
    COLSPAN = "colspan_attrib",
    CONTENT = "content_attrib",
    CONTENTEDITABLE = "contenteditable_attrib",
    CONTROLS = "controls_attrib",
    COORDS = "coords_attribs",
    CROSSORIGIN = "crossorigin_attribs",
    DATA = "data_attribs",
    DATASTAR = "datastar_attrib",
    DATETIME = "datetime_attrib",
    DECODING = "decoding_attrib",
    DEFAULT = "default_attrib",
    DEFER = "defer_attrib",
    DIR = "dir_aattribute",
    DIRNAME = "dirname_attrib",
    DISABLED = "disabled_attrib",
    DISPLAY = "display_property",
    DOWNLOAD = "download_attrib",
    DRAGGABLE = "draggable_attrib",
    ENCTYPE = "enctype_attrib",
    ENTERKEYHINT = "enterkeyhint_attrib",
    FETCHPRIORITY = "fetchpriority_attrib",
    FOR = "for_attrib",
    FORM = "form_attrib",
    FORMACTION = "formaction_attrib",
    FORMENCTYPE = "formenctype_attrib",
    FORMMETHOD = "formmethod_attrib",
    FORMNOVALIDATE = "formnovalidate_attrib",
    FORMTARGET = "formtarget_attrib",
    HEADERS = "headers_attrib",
    HEIGHT = "height_attrib",
    HIDDEN = "hidden_attrib",
    HIGH = "high_attrib",
    HREF = "href_attrib",
    HREFLANG = "hreflang_attrib",
    HTTP_EQUIV = "http_equiv_attrib",
    ICON = "icon_attrib",               //TODO non-standard
    ID = "id_attrib",
    IMAGESIZES = "imagesizes_attrib",
    IMAGESRCSET = "imagesrcset_attrib",
    INERT = "inert_attrib",
    INNERHTML = "inner_html_property",  //TODO non-standard
    INNERTEXT = "inner_text_property",  //TODO non-standard
    INPUTMODE = "inputmode_attrib",
    INTEGRITY = "integrity_attrib",
    IS = "is_attrib",
    ISMAP = "ismap_attrib",
    ITEMID = "itemid_attrib",
    ITEMPROP = "itemprop_attrib",
    ITEMREF = "itemref_attrib",
    ITEMSCOPE = "itemscope_attrib",
    ITEMTYPE = "itemtype_attrib",
    KIND = "kind_attrib",
    LABEL = "label_attrib",
    LANG = "lang_attrib",
    LIST = "list_attrib",
    LOADING = "loading_attr",
    LOOP = "loop_attrib",
    LOW = "low_attrib",
    MANIFEST = "manifest_attrib",
    MAX = "max_attrib",
    MAXLENGTH = "maxlength_attrib",
    MEDIA = "media_attrib",
    METHOD = "method_attrib",
    MIN = "min_attrib",
    MINLENGTH = "minlength_attrib",
    MULTIPLE = "multiple_attrib",
    MUTED = "muted_attrib",
    NAME = "name_attrib",
    NOMODULE = "nomodule",
    NONCE = "nonce_attrib",
    NOVALIDATE = "novalidate_attrib",
    ONABORT = "onabort_attrib",
    ONAFETRPRINT = "onafterprint_attrib",
    ONAUXCLICK = "onauxclick",
    ONBEFOREINPUT = "onbeforeoinput_attrib",
    ONBEFOREMATCH = "onbeforenmatch_attrib",
    ONBEFORETOGGGLE = "onbeforetoggle_attrib",
    ONBEFOREPRINT = "onbeforeprint_attrib",
    ONBEFOREUNLOAD = "onbeforeunload_attrib",
    ONBLUR = "onblur_attrib",
    ONCANCEL = "oncancel_attrib",
    ONCANPLAY = "oncanplay_attrib",
    ONCANPLAYTHROUGH = "oncanplaythrough_attrib",
    ONCHANGE = "onchange_attrib",
    ONCLICK = "onclick_attrib",
    ONCLOSE = "onclose_attrib",
    ONCONTEXTLOST = "oncontextlost_attrib",
    ONCONTEXTMENU = "oncontextmenu_attrib",
    ONCONTEXTRESTORED = "oncontextrestored_attrib",
    ONCOPY = "oncopy_attrib",
    ONCUECHANGE = "oncuechange_attrib",
    ONCUT = "oncut_attrib",
    ONDBLCLICK = "ondblclick_attrib",
    ONDRAG = "ondrag_attrib",
    ONDRAGEND = "ondragend_attrib",
    ONDRAGENTER = "ondragenter_attrib",
    ONDRAGLEAVE = "ondragleave_attrib",
    ONDRAGOVER = "ondragover_attrib",
    ONDRAGSTART = "ondragstart_attrib",
    ONDROP = "ondrop_attrib",
    ONDURATIONCHANGE = "ondurationchange_attrib",
    ONEMPTIED = "onemptied_attribiute",
    ONENDED = "onended_attrib",
    ONERROR = "onerror_attrib",
    ONFOCUS = "onfocus_attrib",
    ONFORMDATA = "onformdata_attrib",
    ONHASHCHANGE = "onhashchange_attrib",
    ONINPUT = "oninput_attrib",
    ONINVALID = "oninvalid_attrib",
    ONKEYDOWN = "onkeydown_attrib",
    ONKEYPRESS = "onkeypress_attrib",
    ONKEYUP = "onkeyup_attrib",
    ONLANGUAGECHANGE = "onlanguagechange_attrib",
    ONLOAD = "onload_attrib",
    ONLOADEDDATA = "onloadeddata_attrib",
    ONLOADEDMETADATA = "onloadedmetadata_attrib",
    ONLOADSTART = "onloadstart_attrib",
    ONMESSAGE = "onmessage_attrib",
    ONMESSAGEERROR = "onmessageerror_attrib",
    ONMOUSEDOWN = "onmousedown_attrib",
    ONMOUSEENTER = "onmouseenter_attrib",
    ONMOUSELEAVE = "onmouseleave_attrib",
    ONMOUSEMOVE = "onmousemove_attrib",
    ONMOUSEOUT = "onmouseout_attrib",
    ONMOUSEOVER = "onmouseover_attrib",
    ONMOUSEUP = "onmouseup_attrib",
    ONOFFLINE = "onoffline_attrib",
    ONONLINE = "ononline_attrib",
    ONPAGEHIDE = "onpagehide_attrib",
    ONPAGEREVEAL = "onpagereveal_attrib",
    ONPAGESHOW = "onpageshow_attrib",
    ONPAGESWAP = "onpageswap_attrib",
    ONPASTE = "onpaste_attrib",
    ONPAUSE = "onpause_attrib",
    ONPLAY = "onplay_attrib",
    ONPLAYING = "onplaying_attrib",
    ONPOPSTATE = "onpopstate_attrib",
    ONPROGRESS = "onprogess_attrib",
    ONRATECHANGE = "onratechange_attrib",
    ONREJECTIONHANDLED = "onrejectionhandled_attrib",
    ONRESET = "onreset_attrib",
    ONRESIZE = "onresize_attrib",
    ONSCROLL = "onscroll_attrib",
    ONSCROLLEND = "onscrollend_attrib",
    ONSEARCH = "onsearch_attrib",
    ONSECURITYPOLICYVIOLATION = "onsecuritypolicyviolation_attrib",
    ONSEEKED = "onseeked_attrib",
    ONSEEKING = "onseeking_attrib",
    ONSELECT = "onselect_attrib",
    ONSLOTCHANGE = "onslotchange_attrib",
    ONSTALLED = "onstalled_attrib",
    ONSTORAGE = "onstorage_attrib",
    ONSUBMIT = "onsubmit_attrib",
    ONSUSPEND = "onsuspend_attrib",
    ONTIMEUPDATE = "ontimeupdate_attrib",
    ONTOGGLE = "ontoggle_attrib",
    ONUNHANDLEDREJECTION = "onunhandledrejection",
    ONUNLOAD = "onunload_attrib",
    ONVOLUMECHANGE = "onvolumechange_attrib",
    ONWAITING = "onwaiting_attrib",
    ONWHEEL = "onwhell_attrib",
    OPEN = "open_attrib",
    OPTIMUM = "optimum_attrib",
    PATTERN = "pattern_attrib",
    PING = "ping",
    PLACEHOLDER = "placeholder_attrib",
    PLAYSINLINE = "playsinline_attr",
    POPOVER = "popover_attrib",
    POPOVERTARGET = "popovertaget_attrib",
    POPOVERTARGETACTION = "popovertargetaction_attrib",
    POSTER = "poster_attrib",
    PRELOAD = "preload_attrib",
    READONLY = "readonly_attrib",
    REFERRERPOLICY = "referrerpolicy_attrib",
    REL = "rel_attrib",
    REQUIRED = "required_attrib",
    REVERSED = "reversed_attrib",
    ROWS = "rows_attrib",
    ROWSPAN = "rowspan_attrib",
    SANDBOX = "sandbox_attrib",
    SCOPE = "scope_attrib",
    SELECTED = "selected_attrib",
    SHADOWROOTCLONABLE = "shadowrootcloneable_attrib",
    SHADOWROOTDELEGATESFOCUS = "shadowrootdelegatesfocu_attribs",
    SHADOWROOTMODE = "shadowrootmode_attrib",
    SHADOWROOTSERIALIZABLE = "shadowrootserializable_attrib",
    SHAPE = "shape_attrib",
    SIZE = "size_attrib",
    SIZES = "sizes_attrib",
    SLOT = "slot_attrib",
    SPAN = "span_attrib",
    SPELLCHECK = "spellcheck_attrib",
    SRC = "src_attrib",
    SRCDOC = "srcdoc_attrib",
    SRCLANG = "srclang_attrib",
    SRCSET = "srcset_attrib",
    START = "start_attrib",
    STEP = "step_attrib",
    STYLE = "style_attrib",
    TABINDEX = "tabindex_attrib",
    TARGET = "target_attrib",
    TITLE = "title_attrib",
    TRANSLATE = "translate_attrib",
    TYPE = "type_attrib",
    USEMAP = "usemap_attrib",
    VALUE = "value_attrib",
    WIDTH = "width-attrib",
    WRAP = "wrap_attrib",
    WRITING_SUGGESTIONS = "writingsuggestions_attrib",
 }

// Create an interface based on the above enums to ensure that
// the following dictionary entries are legitimate and type checked
interface IHtmlAttributeType {
    [HtmlAttributes.ABBR]: string;
    [HtmlAttributes.ACCEPT]: string;
    [HtmlAttributes.ACCEPTCHARSET]: string;
    [HtmlAttributes.ACCESSKEY]: string;
    [HtmlAttributes.ACTION]: string;
    [HtmlAttributes.ALIGN]: string;
    [HtmlAttributes.ALLOW]: string;
    [HtmlAttributes.ALLOWFULLSCREEN]: string;
    [HtmlAttributes.ALPHA]: string;
    [HtmlAttributes.ALT]: string;
    [HtmlAttributes.ONAUXCLICK]: string;
    [HtmlAttributes.AS]: string;
    [HtmlAttributes.ASYNC]: string;
    [HtmlAttributes.AUTOCAPITALIZE]: string;
    [HtmlAttributes.AUTOCOMPLETE]: string;
    [HtmlAttributes.AUTOCORRECT]: string;
    [HtmlAttributes.AUTOFOCUS]: string;
    [HtmlAttributes.AUTOPLAY ]: string;
    [HtmlAttributes.BLOCKING]: string;
    [HtmlAttributes.CHARSET]: string;
    [HtmlAttributes.CHECKED]: string;
    [HtmlAttributes.CITE]: string;
    [HtmlAttributes.CLASS]: string;
    [HtmlAttributes.COLOR]: string;
    [HtmlAttributes.COLORSPACE]: string;
    [HtmlAttributes.COLS]: string;
    [HtmlAttributes.COLSPAN]: string;
    [HtmlAttributes.CONTENT]: string;
    [HtmlAttributes.CONTENTEDITABLE]: string;
    [HtmlAttributes.CONTROLS]: string;
    [HtmlAttributes.COORDS]: string;
    [HtmlAttributes.CROSSORIGIN]: string;
    [HtmlAttributes.DATA]: string;
    [HtmlAttributes.DATASTAR]: string;
    [HtmlAttributes.DATETIME]: string;
    [HtmlAttributes.DECODING]: string;
    [HtmlAttributes.DEFAULT]: string;
    [HtmlAttributes.DEFER]: string;
    [HtmlAttributes.DIR]: string;
    [HtmlAttributes.DIRNAME]: string;
    [HtmlAttributes.DISABLED]: string;
    [HtmlAttributes.DISPLAY]: string;
    [HtmlAttributes.DOWNLOAD]: string;
    [HtmlAttributes.DRAGGABLE]: string;
    [HtmlAttributes.ENCTYPE]: string;
    [HtmlAttributes.ENTERKEYHINT]: string;
    [HtmlAttributes.FETCHPRIORITY]: string;
    [HtmlAttributes.FOR]: string;
    [HtmlAttributes.FORM]: string;
    [HtmlAttributes.FORMACTION]: string,
    [HtmlAttributes.FORMENCTYPE]: string,
    [HtmlAttributes.FORMMETHOD]: string,
    [HtmlAttributes.FORMNOVALIDATE]: string,
    [HtmlAttributes.FORMTARGET]: string,
    [HtmlAttributes.HEADERS]: string;
    [HtmlAttributes.HEIGHT]: string;
    [HtmlAttributes.HIDDEN]: string;
    [HtmlAttributes.HIGH]: string;
    [HtmlAttributes.HREF]: string;
    [HtmlAttributes.HREFLANG]: string;
    [HtmlAttributes.HTTP_EQUIV]: string;
    [HtmlAttributes.ICON]: string;
    [HtmlAttributes.ID]: string;
    [HtmlAttributes.IMAGESIZES]: string;
    [HtmlAttributes.IMAGESRCSET]:  string;
    [HtmlAttributes.INERT]: string;
    [HtmlAttributes.INNERHTML]: string;
    [HtmlAttributes.INNERTEXT]: string;
    [HtmlAttributes.INPUTMODE]: string;
    [HtmlAttributes.INTEGRITY]: string;
    [HtmlAttributes.IS]: string;
    [HtmlAttributes.ISMAP]: string;
    [HtmlAttributes.ITEMID]: string;
    [HtmlAttributes.ITEMPROP]: string;
    [HtmlAttributes.ITEMREF]: string;
    [HtmlAttributes.ITEMSCOPE]: string;
    [HtmlAttributes.ITEMTYPE]: string;
    [HtmlAttributes.KIND]: string;
    [HtmlAttributes.LABEL]: string;
    [HtmlAttributes.LANG]: string;
    [HtmlAttributes.LIST]: string;
    [HtmlAttributes.LOADING]: string
    [HtmlAttributes.LOOP]: string;
    [HtmlAttributes.LOW]: string;
    [HtmlAttributes.MANIFEST]: string;
    [HtmlAttributes.MAX]: string;
    [HtmlAttributes.MAXLENGTH]: string;
    [HtmlAttributes.MEDIA]: string;
    [HtmlAttributes.METHOD]: string;
    [HtmlAttributes.MIN]: string;
    [HtmlAttributes.MINLENGTH]: string;
    [HtmlAttributes.MULTIPLE]: string;
    [HtmlAttributes.MUTED]: string;
    [HtmlAttributes.NAME]: string;
    [HtmlAttributes.NOMODULE]: string;
    [HtmlAttributes.NONCE]: string;
    [HtmlAttributes.NOVALIDATE]: string;
    [HtmlAttributes.ONAUXCLICK]: string;
    [HtmlAttributes.ONABORT]: string;
    [HtmlAttributes.ONAFETRPRINT]: string;
    [HtmlAttributes.ONBEFOREINPUT]: string;
    [HtmlAttributes.ONBEFOREMATCH]: string;
    [HtmlAttributes.ONBEFOREPRINT]: string;
    [HtmlAttributes.ONBEFORETOGGGLE]: string;
    [HtmlAttributes.ONBEFOREUNLOAD]: string;
    [HtmlAttributes.ONBLUR]: string;
    [HtmlAttributes.ONCANCEL]: string;
    [HtmlAttributes.ONCANPLAY]: string;
    [HtmlAttributes.ONCANPLAYTHROUGH]: string;
    [HtmlAttributes.ONCHANGE]: string
    [HtmlAttributes.ONCLICK]: string;
    [HtmlAttributes.ONCLOSE]: string;
    [HtmlAttributes.ONCONTEXTLOST]: string;
    [HtmlAttributes.ONCONTEXTMENU]: string;
    [HtmlAttributes.ONCONTEXTRESTORED]: string;
    [HtmlAttributes.ONCOPY]: string;
    [HtmlAttributes.ONCUECHANGE]: string;
    [HtmlAttributes.ONCUT]: string;
    [HtmlAttributes.ONDBLCLICK]: string;
    [HtmlAttributes.ONDRAG]: string;
    [HtmlAttributes.ONDRAGEND]: string;
    [HtmlAttributes.ONDRAGENTER]: string;
    [HtmlAttributes.ONDRAGLEAVE]: string;
    [HtmlAttributes.ONDRAGOVER]: string;
    [HtmlAttributes.ONDRAGSTART]: string;
    [HtmlAttributes.ONDROP]: string;
    [HtmlAttributes.ONDURATIONCHANGE]: string;
    [HtmlAttributes.ONEMPTIED]: string;
    [HtmlAttributes.ONENDED]: string;
    [HtmlAttributes.ONERROR]: string;
    [HtmlAttributes.ONFOCUS]: string;
    [HtmlAttributes.ONFORMDATA]: string;
    [HtmlAttributes.ONHASHCHANGE]: string;
    [HtmlAttributes.ONINPUT]: string;
    [HtmlAttributes.ONINVALID]: string;
    [HtmlAttributes.ONKEYDOWN]: string;
    [HtmlAttributes.ONKEYPRESS]: string;
    [HtmlAttributes.ONKEYUP]: string;
    [HtmlAttributes.ONLANGUAGECHANGE]: string;
    [HtmlAttributes.ONLOAD]: string;
    [HtmlAttributes.ONLOADEDDATA]: string;
    [HtmlAttributes.ONLOADEDMETADATA]: string;
    [HtmlAttributes.ONLOADSTART]: string;
    [HtmlAttributes.ONMESSAGE]: string;
    [HtmlAttributes.ONMESSAGEERROR]: string;
    [HtmlAttributes.ONMOUSEDOWN]: string;
    [HtmlAttributes.ONMOUSEENTER]: string;
    [HtmlAttributes.ONMOUSELEAVE]: string;
    [HtmlAttributes.ONMOUSEMOVE]: string;
    [HtmlAttributes.ONMOUSEOUT]: string;
    [HtmlAttributes.ONMOUSEOVER]: string;
    [HtmlAttributes.ONMOUSEUP]: string;
    [HtmlAttributes.ONOFFLINE]: string;
    [HtmlAttributes.ONONLINE]: string;
    [HtmlAttributes.ONPAGEHIDE]: string;
    [HtmlAttributes.ONPAGEREVEAL]: string;
    [HtmlAttributes.ONPAGESHOW]: string;
    [HtmlAttributes.ONPAGESWAP]: string;
    [HtmlAttributes.ONPASTE]: string;
    [HtmlAttributes.ONPAUSE]: string;
    [HtmlAttributes.ONPLAY]: string;
    [HtmlAttributes.ONPLAYING]: string;
    [HtmlAttributes.ONPOPSTATE]: string;
    [HtmlAttributes.ONPROGRESS]: string;
    [HtmlAttributes.ONRATECHANGE]: string;
    [HtmlAttributes.ONREJECTIONHANDLED]: string;
    [HtmlAttributes.ONRESET]: string;
    [HtmlAttributes.ONRESIZE]: string;
    [HtmlAttributes.ONSCROLL]: string;
    [HtmlAttributes.ONSCROLLEND]: string;
    [HtmlAttributes.ONSEARCH]: string;
    [HtmlAttributes.ONSECURITYPOLICYVIOLATION]: string;
    [HtmlAttributes.ONSEEKED]: string;
    [HtmlAttributes.ONSEEKING]: string;
    [HtmlAttributes.ONSELECT]: string;
    [HtmlAttributes.ONSLOTCHANGE]: string;
    [HtmlAttributes.ONSTALLED]: string;
    [HtmlAttributes.ONSTORAGE]: string;
    [HtmlAttributes.ONSUBMIT]: string;
    [HtmlAttributes.ONSUSPEND]: string;
    [HtmlAttributes.ONTIMEUPDATE]: string;
    [HtmlAttributes.ONTOGGLE]: string;
    [HtmlAttributes.ONUNHANDLEDREJECTION]: string;
    [HtmlAttributes.ONUNLOAD]: string;
    [HtmlAttributes.ONVOLUMECHANGE]: string;
    [HtmlAttributes.ONWAITING]: string;
    [HtmlAttributes.ONWHEEL]: string;
    [HtmlAttributes.OPEN]: string;
    [HtmlAttributes.OPTIMUM]: string;
    [HtmlAttributes.PATTERN]: string;
    [HtmlAttributes.PING]: string;
    [HtmlAttributes.PLACEHOLDER]: string;
    [HtmlAttributes.PLAYSINLINE]: string;
    [HtmlAttributes.POPOVER]: string;
    [HtmlAttributes.POPOVERTARGET]: string;
    [HtmlAttributes.POPOVERTARGETACTION]: string;
    [HtmlAttributes.POSTER]: string;
    [HtmlAttributes.PRELOAD]: string;
    [HtmlAttributes.READONLY]: string;
    [HtmlAttributes.REFERRERPOLICY]: string;
    [HtmlAttributes.REL]: string;
    [HtmlAttributes.REQUIRED]: string;
    [HtmlAttributes.REVERSED]: string;
    [HtmlAttributes.ROWS]: string;
    [HtmlAttributes.ROWSPAN]: string;
    [HtmlAttributes.SANDBOX]: string;
    [HtmlAttributes.SCOPE]: string;
    [HtmlAttributes.SELECTED]: string;
    [HtmlAttributes.SHADOWROOTCLONABLE]: string;
    [HtmlAttributes.SHADOWROOTDELEGATESFOCUS]: string;
    [HtmlAttributes.SHADOWROOTMODE]: string;
    [HtmlAttributes.SHADOWROOTSERIALIZABLE]: string;
    [HtmlAttributes.SHAPE]: string;
    [HtmlAttributes.SIZE]: string;
    [HtmlAttributes.SIZES]: string;
    [HtmlAttributes.SLOT]: string;
    [HtmlAttributes.SPAN]: string;
    [HtmlAttributes.SPELLCHECK]: string;
    [HtmlAttributes.SRC]: string;
    [HtmlAttributes.SRCDOC]: string;
    [HtmlAttributes.SRCLANG]: string;
    [HtmlAttributes.SRCSET]: string;
    [HtmlAttributes.START]: string;
    [HtmlAttributes.STEP]: string;
    [HtmlAttributes.STYLE]: string;
    [HtmlAttributes.TABINDEX]: string;
    [HtmlAttributes.TARGET]: string;
    [HtmlAttributes.TITLE]: string;
    [HtmlAttributes.TRANSLATE]: string;
    [HtmlAttributes.TYPE]: string;
    [HtmlAttributes.USEMAP]: string;
    [HtmlAttributes.VALUE]: string;
    [HtmlAttributes.WIDTH]: string;
    [HtmlAttributes.WRAP]: string;
    [HtmlAttributes.WRITING_SUGGESTIONS]: string;
}

// Create a dictionary based on the above enums and interface.
const htmlAttributeDictionary: IHtmlAttributeType = {
    [HtmlAttributes.ABBR]: 'abbr',
    [HtmlAttributes.ACCEPT]: 'accept',
    [HtmlAttributes.ACCEPTCHARSET]: 'accept-charset',
    [HtmlAttributes.ACCESSKEY]: 'accesskey',
    [HtmlAttributes.ACTION]: 'action',
    [HtmlAttributes.ALIGN]: 'align',
    [HtmlAttributes.ALLOW]: 'allow',
    [HtmlAttributes.ALLOWFULLSCREEN]: 'allowfullscreen',
    [HtmlAttributes.ALPHA]: 'alpha',
    [HtmlAttributes.ALT]: 'alt',
    [HtmlAttributes.AS]: 'as',
    [HtmlAttributes.ASYNC]: 'async',
    [HtmlAttributes.AUTOCAPITALIZE]: 'autocapitalize',
    [HtmlAttributes.AUTOCOMPLETE]: 'autocomplete',
    [HtmlAttributes.AUTOCORRECT]: 'autocorrect',
    [HtmlAttributes.AUTOFOCUS]: 'autofocus',
    [HtmlAttributes.AUTOPLAY ]: 'autoplay',
    [HtmlAttributes.BLOCKING]: 'blocking',
    [HtmlAttributes.CHARSET]: 'charset',
    [HtmlAttributes.CHECKED]: 'checked',
    [HtmlAttributes.CITE]: 'cite',
    [HtmlAttributes.CLASS]: 'class',
    [HtmlAttributes.COLOR]: 'color',
    [HtmlAttributes.COLORSPACE]: 'colorspace',
    [HtmlAttributes.COLS]: 'cols',
    [HtmlAttributes.COLSPAN]: 'colspan',
    [HtmlAttributes.CONTENT]: 'content',
    [HtmlAttributes.CONTENTEDITABLE]: 'contenteditable',
    [HtmlAttributes.CONTROLS]: 'controls',
    [HtmlAttributes.COORDS]: 'coords',
    [HtmlAttributes.CROSSORIGIN]: 'crossorigin',
    [HtmlAttributes.DATA]: 'data',
    [HtmlAttributes.DATASTAR]: 'data-*',
    [HtmlAttributes.DATETIME]: 'datetime',
    [HtmlAttributes.DECODING]: 'decoding',
    [HtmlAttributes.DEFAULT]: 'default',
    [HtmlAttributes.DEFER]: 'defer',
    [HtmlAttributes.DIR]: 'dir',
    [HtmlAttributes.DIRNAME]: 'dirname',
    [HtmlAttributes.DISABLED]: 'disabled',
    [HtmlAttributes.DISPLAY]: 'display',
    [HtmlAttributes.DOWNLOAD]: 'download',
    [HtmlAttributes.DRAGGABLE]: 'draggable',
    [HtmlAttributes.ENCTYPE]: 'enctype',
    [HtmlAttributes.ENTERKEYHINT]: 'enterkeyhint',
    [HtmlAttributes.FETCHPRIORITY]: 'fetchpriority',
    [HtmlAttributes.FOR]: 'for',
    [HtmlAttributes.FORM]: 'form',
    [HtmlAttributes.FORMACTION]: 'formaction',
    [HtmlAttributes.FORMENCTYPE]: 'formenctype',
    [HtmlAttributes.FORMMETHOD]: 'formmethod',
    [HtmlAttributes.FORMNOVALIDATE]: 'formnovalidate',
    [HtmlAttributes.FORMTARGET]: 'formtarget',
    [HtmlAttributes.HEADERS]: 'headers',
    [HtmlAttributes.HEIGHT]: 'height',
    [HtmlAttributes.HIDDEN]: 'hidden',
    [HtmlAttributes.HIGH]: 'high',
    [HtmlAttributes.HREF]: 'href',
    [HtmlAttributes.HREFLANG]: 'hreflang',
    [HtmlAttributes.HTTP_EQUIV]: 'http-equiv',
    [HtmlAttributes.ICON]: 'icon',
    [HtmlAttributes.ID]: 'id',
    [HtmlAttributes.IMAGESIZES]: 'imagesizes',
    [HtmlAttributes.IMAGESRCSET]: 'imagesrcset',
    [HtmlAttributes.INERT]: 'inert',
    [HtmlAttributes.INNERHTML]: 'innerHtml',
    [HtmlAttributes.INNERTEXT]: 'innerText',
    [HtmlAttributes.INPUTMODE]: 'inputmode',
    [HtmlAttributes.INTEGRITY]: 'integrity',
    [HtmlAttributes.IS]: 'is',
    [HtmlAttributes.ISMAP]: 'ismap',
    [HtmlAttributes.ITEMID]: 'itemid',
    [HtmlAttributes.ITEMPROP]: 'itemprop',
    [HtmlAttributes.ITEMREF]: 'itemref',
    [HtmlAttributes.ITEMSCOPE]: 'itemscope',
    [HtmlAttributes.ITEMTYPE]: 'itemtype',
    [HtmlAttributes.KIND]: 'kind',
    [HtmlAttributes.LABEL]: 'label',
    [HtmlAttributes.LANG]: 'lang',
    [HtmlAttributes.LIST]: 'list',
    [HtmlAttributes.LOADING]: 'loading',
    [HtmlAttributes.LOOP]: 'loop',
    [HtmlAttributes.LOW]: 'low',
    [HtmlAttributes.MANIFEST]: 'manifest',
    [HtmlAttributes.MAX]: 'max',
    [HtmlAttributes.MAXLENGTH]: 'maxlength',
    [HtmlAttributes.MEDIA]: 'media',
    [HtmlAttributes.METHOD]: 'method',
    [HtmlAttributes.MIN]: 'min',
    [HtmlAttributes.MINLENGTH]: 'minlength',
    [HtmlAttributes.MULTIPLE]: 'multiple',
    [HtmlAttributes.MUTED]: 'muted',
    [HtmlAttributes.NAME]: 'name',
    [HtmlAttributes.NOMODULE]: 'nomodule',
    [HtmlAttributes.NONCE]: 'nonce',
    [HtmlAttributes.NOVALIDATE]: 'novalidate',
    [HtmlAttributes.ONABORT]: 'onabort',
    [HtmlAttributes.ONAFETRPRINT]: 'onafterprint',
    [HtmlAttributes.ONAUXCLICK]: 'onauxclick',
    [HtmlAttributes.ONBEFOREINPUT]: 'onbeforeinput',
    [HtmlAttributes.ONBEFOREMATCH]: 'onbefotrmatch',
    [HtmlAttributes.ONBEFOREPRINT]: 'onbeforeprint',
    [HtmlAttributes.ONBEFORETOGGGLE]: 'onbeforetoggle',
    [HtmlAttributes.ONBEFOREUNLOAD]: 'onbeforeunload',
    [HtmlAttributes.ONBLUR]: 'onblur',
    [HtmlAttributes.ONCANCEL]: 'cancel',
    [HtmlAttributes.ONCANPLAY]: 'oncanplay',
    [HtmlAttributes.ONCANPLAYTHROUGH]: 'oncanplaythrough',
    [HtmlAttributes.ONCHANGE]: 'onchange',
    [HtmlAttributes.ONCLICK]: 'onclick',
    [HtmlAttributes.ONCLOSE]: 'onclose',
    [HtmlAttributes.ONCONTEXTLOST]: 'oncontextlost',
    [HtmlAttributes.ONCONTEXTMENU]: 'oncontextmenu',
    [HtmlAttributes.ONCONTEXTRESTORED]: 'oncontextrestored',
    [HtmlAttributes.ONCOPY]: 'oncopy',
    [HtmlAttributes.ONCUECHANGE]: 'oncuechange',
    [HtmlAttributes.ONCUT]: 'oncut',
    [HtmlAttributes.ONDBLCLICK]: 'ondblclick',
    [HtmlAttributes.ONDRAG]: 'ondrag',
    [HtmlAttributes.ONDRAGEND]: 'ondragend',
    [HtmlAttributes.ONDRAGENTER]: 'ondragenter',
    [HtmlAttributes.ONDRAGLEAVE]: 'ondragleave',
    [HtmlAttributes.ONDRAGOVER]: 'ondragover',
    [HtmlAttributes.ONDRAGSTART]: 'ondragstart',
    [HtmlAttributes.ONDROP]: 'ondrop',
    [HtmlAttributes.ONDURATIONCHANGE]: 'ondurationchange',
    [HtmlAttributes.ONEMPTIED]: 'onemptied',
    [HtmlAttributes.ONENDED]: 'onended',
    [HtmlAttributes.ONERROR]: 'onerror',
    [HtmlAttributes.ONFOCUS]: 'onfocus',
    [HtmlAttributes.ONFORMDATA]: 'onformdata',
    [HtmlAttributes.ONHASHCHANGE]: 'onhashchange',
    [HtmlAttributes.ONINPUT]: 'oninput',
    [HtmlAttributes.ONINVALID]: 'oninvalid',
    [HtmlAttributes.ONKEYDOWN]: 'onkeydown',
    [HtmlAttributes.ONKEYPRESS]: 'onkeypress',
    [HtmlAttributes.ONKEYUP]: 'onkeyup',
    [HtmlAttributes.ONLANGUAGECHANGE]: 'onlanguagechange',
    [HtmlAttributes.ONLOAD]: 'onload',
    [HtmlAttributes.ONLOADEDDATA]: 'onloadeddata',
    [HtmlAttributes.ONLOADEDMETADATA]: 'onloaadedmetadata',
    [HtmlAttributes.ONLOADSTART]: 'onloadstart',
    [HtmlAttributes.ONMESSAGE]: 'onmessage',
    [HtmlAttributes.ONMESSAGEERROR]: 'ponmessageerror',
    [HtmlAttributes.ONMOUSEDOWN]: 'onmousedown',
    [HtmlAttributes.ONMOUSEENTER]: 'onmouseenter',
    [HtmlAttributes.ONMOUSELEAVE]: 'onmouseleave',
    [HtmlAttributes.ONMOUSEMOVE]: 'onmousemove',
    [HtmlAttributes.ONMOUSEOUT]: 'onmouseout',
    [HtmlAttributes.ONMOUSEOVER]: 'onmouseover',
    [HtmlAttributes.ONMOUSEUP]: 'onmouseup',
    [HtmlAttributes.ONOFFLINE]: 'onoffline',
    [HtmlAttributes.ONONLINE]: 'ononline',
    [HtmlAttributes.ONPAGEHIDE]: 'onpagehide',
    [HtmlAttributes.ONPAGEREVEAL]: 'onpagereveal',
    [HtmlAttributes.ONPAGESHOW]: 'onpageshow',
    [HtmlAttributes.ONPAGESWAP]: 'onpageswap',
    [HtmlAttributes.ONPASTE]: 'onpaste',
    [HtmlAttributes.ONPAUSE]: 'onpause',
    [HtmlAttributes.ONPLAY]: 'onplay',
    [HtmlAttributes.ONPLAYING]: 'onplaying',
    [HtmlAttributes.ONPOPSTATE]: 'onpopstate',
    [HtmlAttributes.ONPROGRESS]: 'onprogress',
    [HtmlAttributes.ONRATECHANGE]: 'onratechange',
    [HtmlAttributes.ONREJECTIONHANDLED]: 'onrejectionhandled',
    [HtmlAttributes.ONRESET]: 'onreset',
    [HtmlAttributes.ONRESIZE]: 'onresize',
    [HtmlAttributes.ONSCROLL]: 'onscroll',
    [HtmlAttributes.ONSCROLLEND]: 'onscrollend',
    [HtmlAttributes.ONSECURITYPOLICYVIOLATION]: 'onsecuritypolicyviolation',
    [HtmlAttributes.ONSEARCH]: 'onsearch',
    [HtmlAttributes.ONSEEKED]: 'onseeked',
    [HtmlAttributes.ONSEEKING]: 'onseeking',
    [HtmlAttributes.ONSELECT]: 'onselect',
    [HtmlAttributes.ONSLOTCHANGE]: 'onslotchange',
    [HtmlAttributes.ONSTALLED]: 'onstalled',
    [HtmlAttributes.ONSTORAGE]: 'onstorage',
    [HtmlAttributes.ONSUBMIT]: 'onsubmit',
    [HtmlAttributes.ONSUSPEND]: 'onsuspend',
    [HtmlAttributes.ONTIMEUPDATE]: 'ontimeupdate',
    [HtmlAttributes.ONTOGGLE]: 'ontoggle',
    [HtmlAttributes.ONUNHANDLEDREJECTION]: 'onunhandledrejection',
    [HtmlAttributes.ONUNLOAD]: 'onunload',
    [HtmlAttributes.ONVOLUMECHANGE]: 'onvolumechange',
    [HtmlAttributes.ONWAITING]: 'onwaiting',
    [HtmlAttributes.ONWHEEL]: 'onwheel',
    [HtmlAttributes.OPEN]: 'open',
    [HtmlAttributes.OPTIMUM]: 'optimum',
    [HtmlAttributes.PATTERN]: 'pattern',
    [HtmlAttributes.PING]: 'ping',
    [HtmlAttributes.PLACEHOLDER]: 'placeholder',
    [HtmlAttributes.PLAYSINLINE]: 'playsinline',
    [HtmlAttributes.POPOVER]: 'popover',
    [HtmlAttributes.POPOVERTARGET]: 'popovertarget',
    [HtmlAttributes.POPOVERTARGETACTION]: 'popovertargetaction',
    [HtmlAttributes.POSTER]: 'poster',
    [HtmlAttributes.PRELOAD]: 'preload',
    [HtmlAttributes.READONLY]: 'readonly',
    [HtmlAttributes.REFERRERPOLICY]: 'referrerpolicy',
    [HtmlAttributes.REL]: 'rel',
    [HtmlAttributes.REQUIRED]: 'required',
    [HtmlAttributes.REVERSED]: 'reversed',
    [HtmlAttributes.ROWS]: 'rows',
    [HtmlAttributes.ROWSPAN]: 'rowspan',
    [HtmlAttributes.SANDBOX]: 'sandbox',
    [HtmlAttributes.SCOPE]: 'scope',
    [HtmlAttributes.SELECTED]: 'selected',
    [HtmlAttributes.SHADOWROOTCLONABLE]: 'shadowrootclonable',
    [HtmlAttributes.SHADOWROOTDELEGATESFOCUS]: 'shadowrootdelegatesfocus',
    [HtmlAttributes.SHADOWROOTMODE]: 'shadowrootmode',
    [HtmlAttributes.SHADOWROOTSERIALIZABLE]: 'shadowrootserializable',
    [HtmlAttributes.SHAPE]: 'shape',
    [HtmlAttributes.SIZE]: 'size',
    [HtmlAttributes.SIZES]: 'sizes',
    [HtmlAttributes.SLOT]: 'slot',
    [HtmlAttributes.SPAN]: 'span',
    [HtmlAttributes.SPELLCHECK]: 'spellcheck',
    [HtmlAttributes.SRC]: 'src',
    [HtmlAttributes.SRCDOC]: 'srcloc',
    [HtmlAttributes.SRCLANG]: 'srclang',
    [HtmlAttributes.SRCSET]: 'srcset',
    [HtmlAttributes.START]: 'start',
    [HtmlAttributes.STEP]: 'step',
    [HtmlAttributes.STYLE]: 'style',
    [HtmlAttributes.TABINDEX]: 'tabindex',
    [HtmlAttributes.TARGET]: 'target',
    [HtmlAttributes.TITLE]: 'title',
    [HtmlAttributes.TRANSLATE]: 'translate',
    [HtmlAttributes.TYPE]: 'type',
    [HtmlAttributes.USEMAP]: 'usemap',
    [HtmlAttributes.VALUE]: 'value',
    [HtmlAttributes.WIDTH]: 'width',
    [HtmlAttributes.WRAP]: 'wrap',
    [HtmlAttributes.WRITING_SUGGESTIONS]: 'writingsuggestions'
}


// This wrapper is necessary 
export function resolveAttribute(attributeId: HtmlAttributes, wrapper?: WrapperType): string{
    if (wrapper === undefined)
        return htmlAttributeDictionary[attributeId];
    else
        return wrapper + htmlAttributeDictionary[attributeId] + wrapper;
}

// Create an array of the global attributes used by all HTML Elements
// as per https://html.spec.whatwg.org/dev/dom.html#global-attributes
export const globalAttributes: string[] = [
    htmlAttributeDictionary[HtmlAttributes.ACCESSKEY],
    htmlAttributeDictionary[HtmlAttributes.AUTOCAPITALIZE],
    htmlAttributeDictionary[HtmlAttributes.AUTOCORRECT],
    htmlAttributeDictionary[HtmlAttributes.AUTOFOCUS],
    htmlAttributeDictionary[HtmlAttributes.CLASS],
    htmlAttributeDictionary[HtmlAttributes.CONTENTEDITABLE],
    htmlAttributeDictionary[HtmlAttributes.DATASTAR],
    htmlAttributeDictionary[HtmlAttributes.DIR],
    htmlAttributeDictionary[HtmlAttributes.DRAGGABLE],
    htmlAttributeDictionary[HtmlAttributes.ENTERKEYHINT],
    htmlAttributeDictionary[HtmlAttributes.HIDDEN],
    htmlAttributeDictionary[HtmlAttributes.ID],
    htmlAttributeDictionary[HtmlAttributes.INERT],
    htmlAttributeDictionary[HtmlAttributes.INPUTMODE],
    htmlAttributeDictionary[HtmlAttributes.IS],
    htmlAttributeDictionary[HtmlAttributes.ITEMID],
    htmlAttributeDictionary[HtmlAttributes.ITEMPROP],
    htmlAttributeDictionary[HtmlAttributes.ITEMREF],
    htmlAttributeDictionary[HtmlAttributes.ITEMSCOPE],
    htmlAttributeDictionary[HtmlAttributes.ITEMTYPE],
    htmlAttributeDictionary[HtmlAttributes.LANG],
    htmlAttributeDictionary[HtmlAttributes.NONCE],
    htmlAttributeDictionary[HtmlAttributes.POPOVER],
    htmlAttributeDictionary[HtmlAttributes.SLOT],
    htmlAttributeDictionary[HtmlAttributes.SPELLCHECK],
    htmlAttributeDictionary[HtmlAttributes.STYLE],
    htmlAttributeDictionary[HtmlAttributes.TABINDEX],
    htmlAttributeDictionary[HtmlAttributes.TITLE],
    htmlAttributeDictionary[HtmlAttributes.TRANSLATE],
    htmlAttributeDictionary[HtmlAttributes.WRITING_SUGGESTIONS],

    htmlAttributeDictionary[HtmlAttributes.ONAUXCLICK],
    htmlAttributeDictionary[HtmlAttributes.ONBEFOREINPUT],
    htmlAttributeDictionary[HtmlAttributes.ONBEFOREMATCH],
    htmlAttributeDictionary[HtmlAttributes.ONBEFORETOGGGLE],
    htmlAttributeDictionary[HtmlAttributes.ONBLUR],
    htmlAttributeDictionary[HtmlAttributes.ONCANCEL],
    htmlAttributeDictionary[HtmlAttributes.ONCANPLAY],
    htmlAttributeDictionary[HtmlAttributes.ONCANPLAYTHROUGH],
    htmlAttributeDictionary[HtmlAttributes.ONCHANGE],
    htmlAttributeDictionary[HtmlAttributes.ONCLICK],
    htmlAttributeDictionary[HtmlAttributes.ONCLOSE],
    htmlAttributeDictionary[HtmlAttributes.ONCONTEXTLOST],
    htmlAttributeDictionary[HtmlAttributes.ONCONTEXTMENU],
    htmlAttributeDictionary[HtmlAttributes.ONCONTEXTRESTORED],
    htmlAttributeDictionary[HtmlAttributes.ONCOPY],
    htmlAttributeDictionary[HtmlAttributes.ONCUECHANGE],
    htmlAttributeDictionary[HtmlAttributes.ONCUT],
    htmlAttributeDictionary[HtmlAttributes.ONDBLCLICK],
    htmlAttributeDictionary[HtmlAttributes.ONDRAG],
    htmlAttributeDictionary[HtmlAttributes.ONDRAGEND],
    htmlAttributeDictionary[HtmlAttributes.ONDRAGENTER],
    htmlAttributeDictionary[HtmlAttributes.ONDRAGLEAVE],
    htmlAttributeDictionary[HtmlAttributes.ONDRAGOVER],
    htmlAttributeDictionary[HtmlAttributes.ONDRAGSTART],
    htmlAttributeDictionary[HtmlAttributes.ONDROP],
    htmlAttributeDictionary[HtmlAttributes.ONDURATIONCHANGE],
    htmlAttributeDictionary[HtmlAttributes.ONEMPTIED],
    htmlAttributeDictionary[HtmlAttributes.ONENDED],
    htmlAttributeDictionary[HtmlAttributes.ONERROR],
    htmlAttributeDictionary[HtmlAttributes.ONFOCUS],
    htmlAttributeDictionary[HtmlAttributes.ONFORMDATA],
    htmlAttributeDictionary[HtmlAttributes.ONINPUT],
    htmlAttributeDictionary[HtmlAttributes.ONINVALID],
    htmlAttributeDictionary[HtmlAttributes.ONKEYDOWN],
    htmlAttributeDictionary[HtmlAttributes.ONKEYPRESS],
    htmlAttributeDictionary[HtmlAttributes.ONKEYUP],
    htmlAttributeDictionary[HtmlAttributes.ONLOAD],
    htmlAttributeDictionary[HtmlAttributes.ONLOADEDDATA],
    htmlAttributeDictionary[HtmlAttributes.ONLOADEDMETADATA],
    htmlAttributeDictionary[HtmlAttributes.ONLOADSTART],
    htmlAttributeDictionary[HtmlAttributes.ONMOUSEDOWN],
    htmlAttributeDictionary[HtmlAttributes.ONMOUSEENTER],
    htmlAttributeDictionary[HtmlAttributes.ONMOUSELEAVE],
    htmlAttributeDictionary[HtmlAttributes.ONMOUSEMOVE],
    htmlAttributeDictionary[HtmlAttributes.ONMOUSEOUT],
    htmlAttributeDictionary[HtmlAttributes.ONMOUSEOVER],
    htmlAttributeDictionary[HtmlAttributes.ONMOUSEUP],
    htmlAttributeDictionary[HtmlAttributes.ONPASTE],
    htmlAttributeDictionary[HtmlAttributes.ONPAUSE],
    htmlAttributeDictionary[HtmlAttributes.ONPLAY],
    htmlAttributeDictionary[HtmlAttributes.ONPLAYING],
    htmlAttributeDictionary[HtmlAttributes.ONPROGRESS],
    htmlAttributeDictionary[HtmlAttributes.ONRATECHANGE],
    htmlAttributeDictionary[HtmlAttributes.ONRESET],
    htmlAttributeDictionary[HtmlAttributes.ONRESIZE],
    htmlAttributeDictionary[HtmlAttributes.ONSCROLL],
    htmlAttributeDictionary[HtmlAttributes.ONSCROLLEND],
    htmlAttributeDictionary[HtmlAttributes.ONSECURITYPOLICYVIOLATION],
    htmlAttributeDictionary[HtmlAttributes.ONSEEKED],
    htmlAttributeDictionary[HtmlAttributes.ONSEEKING],
    htmlAttributeDictionary[HtmlAttributes.ONSELECT],
    htmlAttributeDictionary[HtmlAttributes.ONSLOTCHANGE],
    htmlAttributeDictionary[HtmlAttributes.ONSTALLED],
    htmlAttributeDictionary[HtmlAttributes.ONSUBMIT],
    htmlAttributeDictionary[HtmlAttributes.ONSUSPEND],
    htmlAttributeDictionary[HtmlAttributes.ONTIMEUPDATE],
    htmlAttributeDictionary[HtmlAttributes.ONTOGGLE],
    htmlAttributeDictionary[HtmlAttributes.ONVOLUMECHANGE],
    htmlAttributeDictionary[HtmlAttributes.ONWAITING],
    htmlAttributeDictionary[HtmlAttributes.ONWAITING],
]
