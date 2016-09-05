/**
 * GIELLA v3.1.8436
 * Copyright (c) 1999-2016 SpellChecker.net, Inc. All rights reserved.
 */
/*!
 * jQuip JavaScript Library v0.0.3
 * https://github.com/mythz/jquip
 *
 * Copyright, Demis Bellot
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
/*!
 * Rangy, a cross-browser JavaScript range and selection library
 * http://code.google.com/p/rangy/
 *
 * Copyright 2012, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3alpha.681
 * Build date: 20 July 2012
 */
/*! @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: 0.8.1 - Build: 266 (2012/07/31 03:33 PM)
 */
var GIELLA = GIELLA || function(a) {
    function b(a, b) {
        for (var c in a)
            b.register(c, a[c]),
            b.start(c)
    }

    function c(a, b) {
        var c = function() {
                try {
                    e[a].instance = new e[a].creator(a, new GIELLA.Sandbox(a, b))
                } catch (c) {
                    throw new Error("Could not create Module instance with id: " + a + " : " + c.message)
                }
                d(),
                    f()
            },
            d = function() {
                e[a].instance.init && e[a].instance.init()
            },
            f = function() {
                e[a].ready = e[a].instance.async ? !1 : !0
            };
        return e[a].instance ? !1 : (c(a, b), !0)
    }

    function d(a) {
        for (var b in e)
            if (e[b].ready === !1)
                return a.allModulesReady = !1,
                    a.allModulesReady;
        return a.allModulesReady = !0,
            a.getService("Communication").fire("GIELLA", "allModulesReady"),
            a.allModulesReady
    }
    var e = {},
        f = function(a, b) {
            return {
                value: void 0,
                defaultValue: a,
                storable: b
            }
        },
        g = {
            container: f(void 0, !1),
            focused: f(!1, !1),
            leftMouseButtonPressed: f(!1, !1),
            debug: f(!1, !1),
            isIframe: f(!1, !1),
            showBanner: f(!1, !1),
            sendBannerRequest: f(!0, !1),
            customer_id: f("1:WvF0D4-UtPqN1-43nkD4-NKvUm2-daQqk3-LmNiI-z7Ysb4-mwry24-T8YrS3-Q2tpq2", !1),
            basePath: f("", !1),
            service_protocol: f("http", !1),
            service_host: f("divvun.no", !1),
            service_port: f("3000", !1),
            service_path: f("spellcheck31/script/ssrv.cgi", !1),
            data_attribute_name: f("data-giella-word", !1),
            data_lang_attribute: f("data-giella-lang", !1),
            misspelled_word_node: f("span", !1),
            misspelled_word_class: f("giella-misspell-word", !1),
            punctuationRegExp: f(/,\^\$\*\+\?\=\!\:\|\\\/\(\)\[\]\{\}\>\<\@\%\&\#\;\_\~ /, !1),
            blockElementsRegex: f(/^(br|img|caption|button|address|blockquote|body|center|dir|div|dl|fieldset|form|h[1-6]|hr|isindex|menu|noframes|noscript|ol|p|pre|table|ul|dd|dt|frameset|li|tbody|td|tfoot|th|thead|tr|html|select|option|sup|sub|input)$/i, !1),
            ignoreElementsRegex: f("style|script", !1),
            specialCharactersRegex: f(new RegExp("[" + String.fromCharCode(8203) + String.fromCharCode(65279) + "]+"), !1),
            paused: f(!1, !1),
            graytState: f(!1, !1),
            eventsBlockedState: f({}, !1),
            giellaLangList: f({}, !1),
            graytLangList: f({
                ltr: {
                    en_GB: "British English",
                    en_US: "American English"
                },
                rtl: {}
            }, !1),
            "ignore-all-caps-words": f(!1, !0),
            "ignore-domain-names": f(!0, !0),
            "ignore-words-with-mixed-cases": f(!1, !0),
            "ignore-words-with-numbers": f(!1, !0),
            userDictionaryKey: f("giella_user_dictionary", !1),
            userDictionaryNameKey: f("giella_user_dictionary_name", !1),
            userDictionaryName: f(null, !1),
            giellaLogo: f("css/divvun-logo.png", !1),
            giellaVersion: f("3.1.8436", !1),
            lang: f("en_US", !0),
            maxSuggestionsDefault: f(5, !1),
            minWordLength: f(4, !1),
            permanentMinWordLength: f({
                th_TH: 2,
                ko_KR: 2
            }, !1),
            customDictionary: f("", !1),
            localizationPath: f("local/", !1),
            localizationList: f(["af", "ar", "bg", "bn", "bs", "ca", "cs", "cy", "da", "de", "el", "en-us", "en-au", "en-ca", "en-gb", "en", "eo", "es", "et", "eu", "fa", "fi", "fo", "fr-ca", "fr", "gl", "gu", "he", "hi", "hr", "hu", "is", "it", "ja", "ka", "km", "ko", "lt", "lv", "mk", "mn", "ms", "nb", "nl", "no", "pl", "pt-br", "pt", "ro", "ru", "sk", "sl", "sr-latn", "sr", "sv", "th", "tr", "ug", "uk", "ku", "vi", "zh-cn", "zh"], !1),
            localization: f("en", !1),
            cssPath: f("css/giella.css", !1),
            uid: f(void 0, !1),
            detectLocalizationLanguage: f(!1, !1),
            supportLocale: f(!0, !1),
            documentContainer: f(void 0, !1),
            "options-to-restore": f(["lang", "ignore-all-caps-words", "ignore-domain-names", "ignore-words-with-mixed-cases", "ignore-words-with-numbers"], !1),
            problem_grammar_node: f("span", !1),
            problem_grammar_class: f("gramm-problem", !1),
            problem_grammar_data_attribute: f("data-grayt-phrase", !1),
            languagesMap: f({
                sw: "sw_TZ",
                zu: "zu_ZA",
                sq: "sq_AL",
                ar: "ar_SA",
                es: "es_ES",
                de: "de_DE",
                wa: "wa_BE",
                qu: "qu_EC",
                bg: "bg_BG",
                hr: "hr_HR",
                sr: "sr_LT",
                cs: "cs_CZ",
                ln: "ln_CD",
                hy: "hy_AM",
                en: "en_US",
                et: "et_EE",
                ti: "ti_ER",
                om: "om_ET",
                fo: "fo_FO",
                fj: "fj_FJ",
                sv: "sv_SE",
                br: "br_FR",
                gd: "gd_GB",
                ht: "ht_HT",
                he: "he_HE",
                hi: "hi_IN",
                hu: "hu_HU",
                is: "is_IS",
                as: "as_IN",
                or: "or_IN",
                id: "id_ID",
                tet: "tet_ID",
                fa: "fa_IR",
                ga: "ga_IE",
                gv: "gv_GB",
                kk: "kk_KZ",
                ky: "ky_KG",
                lv: "lv_LV",
                lt: "lt_LT",
                lb: "lb_LU",
                mi: "mi_NZ",
                mg: "mg_MG",
                ms: "ms_MY",
                mn: "mn_MN",
                ha: "ha_GH",
                ur: "ur_PK",
                tl: "tl_PH",
                pl: "pl_PL",
                csb: "csb_PL",
                ro: "ro_RO",
                ru: "ru_RU",
                cv: "cv_RU",
                rw: "rw_RW",
                sk: "sk_SK",
                sl: "sl_SI",
                so: "so_SO",
                cy: "cy_GB",
                af: "af_ZA",
                ss: "ss_ZA",
                ts: "ts_ZA",
                ve: "ve_ZA",
                xh: "xh_ZA",
                an: "an_ES",
                ast: "ast_ES",
                ca: "ca_ES",
                gl: "gl_ES",
                si: "si_LK",
                tt: "tt_RU",
                tpi: "tpi_PG",
                th: "th_TH",
                tr: "tr_TR",
                ku: "ku_TR",
                tk: "tk_TM",
                uk: "uk_UA",
                uz: "uz_UZ",
                vi: "vi_VN",
                sn: "sn_ZW",
                eo: "eo_EO",
                da: "da_DK",
                fi: "fi_FI",
                fr: "fr_FR",
                it: "it_IT",
                nl: "nl_NL",
                pt: "pt_PT",
                shs: "shs_CA",
                mos: "mo_BF",
                gsc: "gsc_FR",
                fur: "fu_IT",
                hil: "hl_PH",
                sh: "sh_YU",
                nso: "ns_ZA",
                tn: "tn_ZA",
                az: "az_AZ",
                oc: "oc_FR",
                grc: "grc_GR",
                smj: "smj_NO",
                fy: "fy_NL",
                nn: "nn_NO",
                se: "se_NO",
                nr: "nr_ZA",
                st: "st_ZA",
                ia: "ia_XR",
                el: "el_GR",
                nb: "nb_NO",
                ko: "ko_KR",
                la: "la_VA",
                mr: "mr_IN",
                son: "son_ML",
                bn: "bn_IN",
                mk: "mk_MK",
                be: "be_BY",
                dsb: "dsb_DE",
                hsb: "hsb_DE",
                sa: "sa_IN",
                te: "te_IN",
                ta: "ta_IN",
                ne: "ne_NP",
                yi: "yi_YI"
            }, !1),
            languageNodeName: f("span", !1),
            languageAttributeName: f("lang", !1),
            multiLanguageMode: f(!1, !1),
            maxLength: f(0, !1),
            charsToObserve: f([], !1)
        };
    delete a.words_separator,
        delete a.paused,
        delete a.eventsBlockedState,
        delete a.giellaLangList,
        delete a.graytLangList,
        delete a.showBanner,
        delete a.uid,
        delete a.permanentMinWordLength,
        delete a.languagesMap,
        g.documentContainer.value = "[object String]" == Object.prototype.toString.call(a.container) ? document.getElementById(a.container) : a.container,
        g.isIframe.value = "iframe" == g.documentContainer.value.nodeName.toLowerCase() ? !0 : !1,
        g.basePath.value = a.basePath,
        g.cssPath.value = g.basePath.value ? this.Utils.getUrl(g.cssPath.defaultValue, g.basePath.value) : g.cssPath.defaultValue;
    var h = this.Utils.getLocationInfo(g.basePath.value);
    "file" != h.protocol && (g.service_protocol.value = h.protocol,
        g.service_host.value = h.host,
        g.service_port.value = h.port ? h.port : "80",
        g.service_path.value = h.pathname + "./../../../script/ssrv.cgi");
    for (var i in a)
        g[i] && (g[i].value = a[i]);
    for (i in g)
        "undefined" == typeof g[i].value && (g[i].value = g[i].defaultValue);
    if (this.options = g,
        this.options.localization.value = -1 == this.Utils.indexOf(this.options.localizationList.value, this.options.localization.value) ? this.options.localization.defaultValue : this.options.localization.value,
        this.options.sendBannerRequest.value = this.options.service_host.value == this.options.service_host.defaultValue ? !0 : !1,
        this.options.container.value = "iframe" == this.options.documentContainer.value.nodeName.toLowerCase() ? this.options.documentContainer.value.contentDocument ? this.options.documentContainer.value.contentDocument.getElementsByTagName("body")[0] : this.options.documentContainer.value.contentWindow.document.getElementsByTagName("body")[0] : this.options.documentContainer.value,
        this.options.uid.value = this.instanceManager.getUniqueId(this.options.documentContainer.value),
        "string" == typeof this.options.ignoreElementsRegex.value)
        if (this.options.ignoreElementsRegex.value = this.options.ignoreElementsRegex.value.replace(/ /g, ""),
            this.options.ignoreElementsRegex.value = this.options.ignoreElementsRegex.value.replace(/,/g, "|"),
            "" != this.options.ignoreElementsRegex.value)
            for (var j = this.options.ignoreElementsRegex.defaultValue.split("|"), k = 0; k < j.length; k++)
                this.options.ignoreElementsRegex.value.match(new RegExp("\\b" + j[k] + "\\b", "g")) || (this.options.ignoreElementsRegex.value = this.options.ignoreElementsRegex.value + "|" + j[k]);
        else
            this.options.ignoreElementsRegex.value = this.options.ignoreElementsRegex.defaultValue;
    else
        this.options.ignoreElementsRegex.value = this.options.ignoreElementsRegex.defaultValue;
    this.options.ignoreElementsRegex.value = new RegExp("^(" + this.options.ignoreElementsRegex.value + ")$", "i");
    for (var l, m, k = 0, n = this.options["options-to-restore"].value.length; n > k; k++)
        l = this.options["options-to-restore"].value[k],
        this.options[l] && this.options[l].storable && (m = this.DataStorage.getData(this.options.uid.value + "_" + l),
            "undefined" != typeof m && null !== m ? this.options[l].value = m : this.DataStorage.setData(this.options.uid.value + "_" + l, this.options[l].value));
    for (i in this.options)
        this.options[i].storable && -1 == this.Utils.indexOf(this.options["options-to-restore"].value, i) && this.DataStorage.deleteData(this.options.uid.value + "_" + i);
    var o = this,
        p = this.UILib.find(this.options.container.value)[0],
        q = this.UILib.find(this.options.documentContainer.value.contentWindow || this.options.container.value)[0],
        r = function() {
            o.options.focused.value = !0
        },
        s = function() {
            o.options.focused.value = !1
        },
        t = function() {
            o.options.leftMouseButtonPressed.value = !0
        },
        u = function() {
            o.options.leftMouseButtonPressed.value = !1
        };
    this.UILib.on("focus", q, r),
        this.UILib.on("blur", q, s),
        this.UILib.on("mousedown", p, t),
        this.UILib.on("mouseup", p, u);
    var v = {
        Communication: GIELLA.Communication,
        RangeCreator: GIELLA.RangeCreator,
        Deferred: GIELLA.Deferred
    };
    this.allModulesReady = !1,
        this.register = function(a, b) {
            e[a] = e[a] || {
                creator: b,
                instance: null,
                ready: !1
            }
        },
        this.getService = function(a) {
            return e[a] ? e[a].instance : void 0
        },
        this.start = function(a) {
            c(a, this) ? this.getService("Communication").fire("GIELLA", "moduleStarted", a) : this.getService("Communication").fire("GIELLA", "moduleStarted", a + " already started.")
        },
        this.initModules = function(a) {
            b(a, this),
                d(this)
        },
        this.removeBindings = function() {
            this.UILib.off("focus", q, r),
                this.UILib.off("blur", q, s),
                this.UILib.off("mousedown", p, t),
                this.UILib.off("mouseup", p, u)
        },
        b(v, this),
        this.getService("Communication").subscribe("GIELLA", "moduleReady", function(a) {
            e[a.moduleID].ready = !0,
                d(this)
        }, this)
};
GIELLA.Sandbox = function(a, b) {
        function c() {
            var a, b = this.getOption("leftMouseButtonPressed"),
                c = this.Utils.browser.ie;
            return a = c && b ? !1 : !0
        }
        this.createRange = function() {
                var c = b.getService("RangeCreator").createRange();
                return b.logger.log({
                        name: a,
                        msg: "Create the range",
                        data: c,
                        type: "range"
                    }),
                    c
            },
            this.getSelection = function() {
                var c = b.getService("RangeCreator").getSelection();
                return b.logger.log({
                        name: a,
                        msg: "Get the selection",
                        data: c,
                        type: "selection"
                    }),
                    c
            },
            this.saveSelection = function() {
                var d;
                return c.apply(this) ? (d = b.getService("RangeCreator").getSelectionManager().saveSelection(),
                    b.logger.log({
                        name: a,
                        msg: "Save the selection",
                        data: d,
                        type: "selection"
                    }),
                    d) : void 0
            },
            this.restoreSelection = function(d) {
                var e;
                return d && c.apply(this) ? (e = b.getService("RangeCreator").getSelectionManager().restoreSelection(d),
                    b.logger.log({
                        name: a,
                        msg: "Restore the selection",
                        data: e,
                        type: "selection"
                    }),
                    e) : void 0
            },
            this.deleteStoredSelection = function(a) {
                var b, c = !1;
                return a && (b = this.saveSelection(),
                        this.restoreSelection(a),
                        this.restoreSelection(b),
                        c = !0),
                    c
            },
            this.IO = b.IO,
            this.DOM = b.DOM,
            this.Utils = b.Utils,
            this.logger = b.logger.log,
            b.logger.isON(b.options.debug.value),
            this.Localization = b.Localization,
            this.Template = b.Template,
            this.DataStorage = b.DataStorage,
            this.UILib = b.UILib,
            this.DataProcessor = b.DataProcessor,
            this.blockEvents = function(a) {
                for (var b = this.getOption("eventsBlockedState"), c = 0; c < a.length; c++)
                    b[a[c]] = !0;
                this.setOption("eventsBlockedState", b)
            },
            this.unblockEvents = function(a) {
                for (var b = this.getOption("eventsBlockedState"), c = 0; c < a.length; c++)
                    b[a[c]] = !1;
                this.setOption("eventsBlockedState", b)
            },
            this.setPaused = function(a) {
                return b.options.paused.value = a
            },
            this.fire = function(c, d, e) {
                var f = this.getOption("eventsBlockedState");
                b.logger.log({
                        name: a,
                        msg: "Fired event: " + c + " with such data -> ",
                        data: d,
                        type: "signals"
                    }),
                    b.options.paused.value === !0 || f[c] || b.getService("Communication").fire(a, c, d, e)
            },
            this.subscribe = function(c, d, e, f, g) {
                e = e || b.getService(a);
                var h = function() {
                    return b.logger.log({
                            name: a,
                            msg: "Responded to the event: " + c + " with data -> ",
                            data: arguments[0],
                            type: "signals"
                        }),
                        d.apply(e, arguments)
                };
                b.getService("Communication").subscribe(a, c, h, e, f, g)
            },
            this.unsubscribe = function(c, d, e) {
                b.logger.log({
                        name: a,
                        msg: "Unsubscribe to the event: " + c,
                        type: "signals"
                    }),
                    b.getService("Communication").unsubscribe(a, c, d, e)
            },
            this.fireInAllApps = function(a, c) {
                b.instanceManager.notifyAll(a, c)
            },
            this.getOption = function(c) {
                for (var d = "[object String]" == Object.prototype.toString.call(c) ? [c] : c, e = {}, f = 0; f < d.length; f++)
                    e[d[f]] = b.options[d[f]].value;
                var g = 1 == d.length ? e[d[0]] : e;
                return b.logger.log({
                        name: a,
                        msg: 'Get the "' + d + '" option with value -> ',
                        data: g,
                        type: "options"
                    }),
                    g
            },
            this.getDefaultOption = function(a) {
                for (var c = "[object String]" == Object.prototype.toString.call(a) ? [a] : a, d = {}, e = 0; e < c.length; e++)
                    d[c[e]] = b.options[c[e]].defaultValue;
                return 1 == c.length ? d[c[0]] : d
            },
            this.setOption = function(c, d) {
                c in b.options && (b.options[c].value = d,
                    b.options[c].storable && this.Utils.indexOf(this.getOption("options-to-restore"), c) > -1 && (b.logger.log({
                            name: a,
                            msg: 'Set the "' + c + '" option with value -> ',
                            data: d,
                            type: "options"
                        }),
                        this.DataStorage.setData(this.getOption("uid") + "_" + c, d)))
            },
            this.addDeferredFunction = function(a, c) {
                b.getService("Deferred").register(a, c)
            },
            this.removeAllDeferredFunctions = function() {
                b.getService("Deferred").unregisterAll()
            },
            this.setFocused = function(a) {
                return b.options.focused.value = a
            },
            this.setContainer = function(a) {
                return b.options.container.value = a
            },
            this.removeMarkupFromString = function(a) {
                var b = this,
                    c = document.createElement("div"),
                    d = b.getOption("misspelled_word_node"),
                    e = b.getOption("data_attribute_name"),
                    f = b.getOption("problem_grammar_node"),
                    g = b.getOption("problem_grammar_data_attribute");
                c.innerHTML = a;
                for (var h = b.DOM.findNodeChildren(c, d, e), i = b.DOM.findNodeChildren(c, f, g); h.length > 0;) {
                    for (var j = h.shift(), k = document.createDocumentFragment(); j.childNodes.length > 0;)
                        k.appendChild(j.childNodes.item(0));
                    j.parentNode.insertBefore(k, j),
                        j.parentNode.removeChild(j)
                }
                for (; i.length > 0;) {
                    for (var l = i.shift(), k = document.createDocumentFragment(); l.childNodes.length > 0;)
                        k.appendChild(l.childNodes.item(0));
                    l.parentNode.insertBefore(k, l),
                        l.parentNode.removeChild(l)
                }
                return c.innerHTML
            },
            this.saveRange = function(c, d) {
                var e;
                return e = b.getService("RangeCreator").getRangeManager().saveRange(c, d),
                    b.logger.log({
                        name: a,
                        msg: "Save the range",
                        data: e,
                        type: "range"
                    }),
                    e
            },
            this.restoreRange = function(c, d) {
                var e;
                return c ? (e = b.getService("RangeCreator").getRangeManager().restoreRange(c, d),
                    b.logger.log({
                        name: a,
                        msg: "Restore the range",
                        data: e,
                        type: "range"
                    }),
                    e) : void 0
            }
    },
    function(a) {
        "use strict";
        var b, c;
        c = function() {
                function a(a) {
                    var b = a,
                        c = Object.prototype.toString.call(a).slice(8, -1).toLowerCase();
                    return a && "object" === c && "undefined" != typeof a.toArray && (b = a.toArray()),
                        b
                }

                function b(a) {
                    var b = [],
                        c = Object.prototype.toString.call(a).slice(8, -1).toLowerCase();
                    if (a && ("htmlcollection" === c || "nodelist" === c || "object" === c && "undefined" != typeof a.length && "undefined" != typeof a[0] && "undefined" == typeof a.nodeType)) {
                        for (var d = 0; d < a.length; b.push(a[d]),
                            d++)
                        ;
                        a = b
                    }
                    return GIELLA.jquip(a)
                }
                this.find = function(c, d) {
                        var e;
                        return e = "undefined" == typeof d ? b(c) : b(d).find(c),
                            a(e)
                    },
                    this.parent = function(c, d) {
                        var e = b(c).parent(d);
                        return a(e)
                    },
                    this.parents = function(c, d) {
                        var e = b(c).parents(d);
                        return a(e)
                    },
                    this.is = function(c, d) {
                        var e = b(c).is(d);
                        return a(e)
                    },
                    this.each = function(a, c) {
                        b(a).each(c)
                    },
                    this.filter = function(c, d) {
                        var e = b(c).filter(d);
                        return a(e)
                    },
                    this.create = function(b) {
                        return a(GIELLA.jquip(b))
                    },
                    this.remove = function(b) {
                        return a(GIELLA.jquip(b).remove())
                    },
                    this.appendTo = function(b, c) {
                        return a(GIELLA.jquip(b).appendTo(GIELLA.jquip(c)))
                    },
                    this.prependTo = function(b, c) {
                        return a(GIELLA.jquip(b).prependTo(GIELLA.jquip(c)))
                    },
                    this.append = function(b, c) {
                        return a(GIELLA.jquip(b).append(GIELLA.jquip(c)))
                    },
                    this.prepend = function(b, c) {
                        return a(GIELLA.jquip(b).prepend(GIELLA.jquip(c)))
                    },
                    this.insertAfter = function(b, c) {
                        return a(GIELLA.jquip(b).insertAfter(GIELLA.jquip(c)))
                    },
                    this.insertBefore = function(b, c) {
                        return a(GIELLA.jquip(b).insertBefore(GIELLA.jquip(c)))
                    },
                    this.attr = function(b, c, d) {
                        return a(GIELLA.jquip(b).attr(c, d))
                    },
                    this.removeAttr = function(b, c) {
                        return a(GIELLA.jquip(b).removeAttr(c))
                    },
                    this.addClass = function(b, c) {
                        return a(GIELLA.jquip(b).addClass(c))
                    },
                    this.removeClass = function(b, c) {
                        return a(GIELLA.jquip(b).removeClass(c))
                    },
                    this.hasClass = function(b, c) {
                        return a(GIELLA.jquip(b).hasClass(c))
                    },
                    this.css = function(b, c) {
                        return a(GIELLA.jquip(b).css(c))
                    },
                    this.show = function(b) {
                        return a(GIELLA.jquip(b).show())
                    },
                    this.hide = function(b) {
                        return a(GIELLA.jquip(b).hide())
                    },
                    this.html = function(b, c) {
                        return a(GIELLA.jquip(b).html(c))
                    },
                    this.val = function(b, c) {
                        return a(GIELLA.jquip(b).val(c))
                    },
                    this.text = function(b, c) {
                        return a(GIELLA.jquip(b).text(c))
                    },
                    this.empty = function(b) {
                        return a(GIELLA.jquip(b).empty())
                    },
                    this.domReady = function(a) {
                        GIELLA.jquip(a)
                    },
                    this.on = function(a, b, c, d) {
                        GIELLA.jquip(b).on(a, c, d)
                    },
                    this.off = function(a, b, c, d) {
                        GIELLA.jquip(b).off(a, c, d)
                    },
                    this.one = function(a, b, c) {
                        GIELLA.jquip(b).one(a, c)
                    },
                    this.trigger = function(a, b) {
                        GIELLA.jquip(b).trigger(a)
                    },
                    this.getEventTarget = function(a) {
                        return a.target || (a.target = a.srcElement || document),
                            3 === a.target.nodeType && (a.target = a.target.parentNode),
                            a.target
                    },
                    this.cancelEvent = function(a) {
                        return GIELLA.jquip.cancelEvent(a)
                    },
                    this.preventDefault = function(a) {
                        GIELLA.jquip.preventDefault(a)
                    },
                    this.focus = function() {
                        var b, c = [];
                        return Array.prototype.push.apply(c, arguments),
                            b = GIELLA.jquip(c.shift()),
                            a(b.focus.apply(b, c))
                    },
                    this.blur = function() {
                        var b, c = [];
                        return Array.prototype.push.apply(c, arguments),
                            b = GIELLA.jquip(c.shift()),
                            a(b.blur.apply(b, c))
                    },
                    this.contextmenu = function() {
                        var b, c = [];
                        return Array.prototype.push.apply(c, arguments),
                            b = GIELLA.jquip(c.shift()),
                            a(b.contextmenu.apply(b, c))
                    },
                    this.proxy = function(a, b) {
                        return GIELLA.jquip.proxy(a, b)
                    },
                    this.width = function(a, b) {
                        return GIELLA.jquip(a).width(b)
                    },
                    this.height = function(a, b) {
                        return GIELLA.jquip(a).height(b)
                    },
                    this.outerWidth = function(a, b) {
                        return GIELLA.jquip(a).outerWidth(b)
                    },
                    this.outerHeight = function(a, b) {
                        return GIELLA.jquip(a).outerHeight(b)
                    },
                    this.scrollLeft = function(a, b) {
                        return GIELLA.jquip(a).scrollLeft(b)
                    },
                    this.scrollTop = function(a, b) {
                        return GIELLA.jquip(a).scrollTop(b)
                    },
                    this.offset = function(a) {
                        return GIELLA.jquip(a).offset()
                    },
                    this.extend = function() {
                        return GIELLA.jquip.extend.apply(GIELLA.jquip, arguments)
                    }
            },
            b = new c;
        var d = {
            find: function() {
                return b.find.apply(b, arguments)
            },
            parent: function() {
                return b.parent.apply(b, arguments)
            },
            parents: function() {
                return b.parents.apply(b, arguments)
            },
            is: function() {
                return b.is.apply(b, arguments)
            },
            each: function() {
                b.each.apply(b, arguments)
            },
            filter: function() {
                return b.filter.apply(b, arguments)
            },
            create: function() {
                return b.create.apply(b, arguments)
            },
            remove: function() {
                return b.remove.apply(b, arguments)
            },
            appendTo: function() {
                return b.appendTo.apply(b, arguments)
            },
            prependTo: function() {
                return b.prependTo.apply(b, arguments)
            },
            append: function() {
                return b.append.apply(b, arguments)
            },
            prepend: function() {
                return b.prepend.apply(b, arguments)
            },
            insertAfter: function() {
                return b.insertAfter.apply(b, arguments)
            },
            insertBefore: function() {
                return b.insertBefore.apply(b, arguments)
            },
            attr: function() {
                return b.attr.apply(b, arguments)
            },
            removeAttr: function() {
                return b.removeAttr.apply(b, arguments)
            },
            addClass: function() {
                return b.addClass.apply(b, arguments)
            },
            removeClass: function() {
                return b.removeClass.apply(b, arguments)
            },
            hasClass: function() {
                return b.hasClass.apply(b, arguments)
            },
            css: function() {
                return b.css.apply(b, arguments)
            },
            show: function() {
                return b.show.apply(b, arguments)
            },
            hide: function() {
                return b.hide.apply(b, arguments)
            },
            html: function() {
                return b.html.apply(b, arguments)
            },
            val: function() {
                return b.val.apply(b, arguments)
            },
            text: function() {
                return b.text.apply(b, arguments)
            },
            empty: function() {
                return b.empty.apply(b, arguments)
            },
            domReady: function(a) {
                b.domReady(a)
            },
            on: function() {
                b.on.apply(b, arguments)
            },
            off: function() {
                b.off.apply(b, arguments)
            },
            one: function() {
                b.one.apply(b, arguments)
            },
            trigger: function() {
                b.trigger.apply(b, arguments)
            },
            getEventTarget: function() {
                return b.getEventTarget.apply(b, arguments)
            },
            cancelEvent: function() {
                return b.cancelEvent.apply(b, arguments)
            },
            preventDefault: function(a) {
                b.preventDefault(a)
            },
            focus: function() {
                return b.focus.apply(b, arguments)
            },
            blur: function() {
                return b.blur.apply(b, arguments)
            },
            contextmenu: function() {
                return b.contextmenu.apply(b, arguments)
            },
            proxy: function() {
                return b.proxy.apply(b, arguments)
            },
            width: function() {
                return b.width.apply(b, arguments)
            },
            height: function() {
                return b.height.apply(b, arguments)
            },
            outerWidth: function() {
                return b.outerWidth.apply(b, arguments)
            },
            outerHeight: function() {
                return b.outerHeight.apply(b, arguments)
            },
            scrollLeft: function() {
                return b.scrollLeft.apply(b, arguments)
            },
            scrollTop: function() {
                return b.scrollTop.apply(b, arguments)
            },
            offset: function() {
                return b.offset.apply(b, arguments)
            },
            extend: function() {
                return b.extend.apply(b, arguments)
            },
            setPosition: function(a, b, c) {
                "number" == typeof b && "number" == typeof c && this.css(a, {
                    left: b,
                    top: c
                })
            }
        };
        a.UILib = d
    }(GIELLA.prototype),
    function(a) {
        "use strict";
        var b = [],
            c = {
                add: function(a) {
                    b.push(a)
                },
                remove: function(a) {
                    for (var c = 0; c < b.length; c++)
                        b[c].getOption("uid") === a && b.splice(c, 1)
                },
                notifyAll: function(a, c) {
                    for (var d = 0; d < b.length; d++)
                        b[d].fire(a, c)
                },
                getUniqueId: function(a) {
                    return a.id ? a.id : "giella_" + b.length
                }
            };
        a.instanceManager = c
    }(GIELLA.prototype),
    function(a) {
        "use strict";
        var b = a.UILib,
            c = {
                query: function(a, c) {
                    return b.find(c, a)
                },
                findNodeChildren: function(a, c, d) {
                    return b.find(c + "[" + d + "]", a)
                },
                findNodeParents: function(a, c, d) {
                    return b.parents(a, c + "[" + d + "]")
                },
                insertAfter: function(a, c) {
                    return b.insertAfter(a, c)
                }
            };
        a.DOM = c
    }(GIELLA.prototype),
    function(a) {
        "use strict";
        var b = {
            lang: {},
            loadLocalization: function(a, b) {
                var c = b.getOption("detectLocalizationLanguage"),
                    d = b.getDefaultOption("localization"),
                    e = b.Utils.getLocationInfo(b.getOption("basePath"));
                c = c && d === a,
                    c && (a = this.detect(a, b),
                        b.setOption("localization", a)),
                    b.IO.loadScript(new b.IO.URL({
                        protocol: e.protocol,
                        host: e.host,
                        port: e.port,
                        path: e.pathname + b.getOption("localizationPath") + a + "/local.js"
                    }))
            },
            getLocal: function(a, b) {
                return this.lang[b] && this.lang[b][a] ? this.lang[b][a] : a
            },
            detect: function(a, b) {
                var c = b.getOption("localizationList"),
                    d = navigator.userLanguage || navigator.language || a,
                    e = b.getOption("supportLocale"),
                    f = d.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/),
                    g = f[1],
                    h = f[2],
                    i = b.Utils.indexOf;
                return e && i(c, g + "-" + h) > 0 ? g = g + "-" + h : i(c, g) < 0 && (g = a),
                    g
            }
        };
        a.Localization = b
    }(GIELLA.prototype),
    function(a) {
        "use strict";
        var b = a.UILib,
            c = !1,
            d = [],
            e = {
                URL: function(a) {
                    a = a || {};
                    var b = "",
                        c = a.protocol || "http",
                        d = a.host || "localhost",
                        e = a.port || "80",
                        f = a.path || "",
                        g = [];
                    this.addParameter = function(a, b) {
                            return a && b && g.push(a + "=" + encodeURIComponent(b)),
                                this
                        },
                        this.build = function() {
                            return b = "",
                                b += c + "://",
                                b += d,
                                b += "80" == e ? "/" : ":" + e + "/",
                                b += f.replace(/^\/*/, ""),
                                b += g.length > 0 ? "?" : "",
                                b += g.join("&")
                        }
                },
                Script: function(a) {
                    a = a || {};
                    var c, d = this,
                        e = function() {
                            GIELLA.prototype.IO[a.callbackName] = function(a) {
                                c = a
                            }
                        },
                        f = function() {
                            delete GIELLA.prototype.IO[a.callbackName]
                        },
                        g = function() {
                            f(),
                                d.removeScript()
                        };
                    a.callbackName && e();
                    var h = document.createElement("script");
                    h.type = "text/javascript",
                        h.id = a.id ? a.id : "",
                        h.src = a.url ? a.url : "",
                        h.onload = function() {
                            this.success || (this.success = !0,
                                a.callbackName ? (c && c.error ? (c.message && console.warn(c.message),
                                        a.onError && a.onError(c)) : a.onSuccess && a.onSuccess(c),
                                    g()) : a.onSuccess && a.onSuccess())
                        },
                        h.onerror = function() {
                            this.error = !0,
                                a.onError && a.onError(),
                                a.callbackName && g()
                        },
                        h.onreadystatechange = function() {
                            var a = this;
                            ("complete" === this.readyState || "loaded" === this.readyState) && setTimeout(function() {
                                a.onload()
                            }, 0)
                        },
                        b.appendTo(h, "head"),
                        this.getScript = function() {
                            return h
                        },
                        this.removeScript = function() {
                            b.remove(h),
                                h = null
                        }
                },
                get: function(a, b, f) {
                    var g, h = "callback" + Math.random().toString(20).substr(2, 9),
                        i = "GIELLA.prototype.IO.";
                    if (c) {
                        for (var j = 0; j < d.length; j++)
                            d[j].success && b(d[j].success),
                            d[j].error && f(d[j].error);
                        return h
                    }
                    return a.addParameter("callback", i + h),
                        g = new e.Script({
                            url: a.build(),
                            id: h,
                            callbackName: h,
                            onSuccess: b,
                            onError: f
                        })
                },
                loadScript: function(a, b, c) {
                    var d = e.loadScript.cache ? e.loadScript.cache : e.loadScript.cache = {};
                    if (a = a.build(), !d.hasOwnProperty(a)) {
                        d[a] = !0;
                        var f = new e.Script({
                            url: a,
                            onSuccess: b,
                            onError: c
                        });
                        return f
                    }
                },
                ioMockStart: function(a) {
                    c = !0,
                        d = a ? a : d
                },
                ioMockEnd: function() {
                    c = !1
                }
            };
        a.IO = e
    }(GIELLA.prototype),
    function(a) {
        "use strict";
        var b = {
            findFirstNodeWithString: function(a, b) {
                for (var c = [a], d = c.shift(); d;) {
                    switch (d.nodeType) {
                        case 3:
                            if (-1 !== d.nodeValue.indexOf(b))
                                return d;
                            break;
                        case 1:
                            for (var e = 0; e < d.childNodes.length; e++)
                                c.splice(e, 0, d.childNodes[e]);
                            c.length > d.childNodes.length && c.splice(e, 0, document.createTextNode(" "))
                    }
                    d = c.shift()
                }
                return null
            },
            removePunctuation: function(a, b) {
                return a = a.replace(new RegExp(String.fromCharCode(160), "g"), " "),
                    a = a.replace(new RegExp("[" + b.source + "]", "g"), " "),
                    a = a.replace(/([\.\-\']{2,})/g, "#$1#").replace(/#[\.\-\']|[\.\-\']#/g, " "),
                    a = a.replace(new RegExp(" [-'.]|[-'.] ", "g"), "  "),
                    a = a.replace(new RegExp("^[-'.]|[-'.]$", "g"), " "),
                    a = a.replace(/[\r\n(\r\n)\<\>\\\/\=\"]/g, " ")
            },
            replaceSpecialCharacters: function(a) {
                return a = a.replace(new RegExp(String.fromCharCode(160), "g"), " ")
            },
            removeSpecialCharacters: function(a) {
                return a = a.replace(new RegExp(String.fromCharCode(65279), "g"), ""),
                    a = a.replace(new RegExp(String.fromCharCode(8203), "g"), "")
            },
            objectIsEmpty: function(a) {
                for (var b in a)
                    if (a.hasOwnProperty(b))
                        return !1;
                return !0
            },
            removeGlobal: function(a, b) {
                b = b || window;
                try {
                    delete b.variable
                } catch (c) {
                    b.variable = void 0
                }
            },
            sortRangesForMurkup: function(a, b) {
                var c = b.compareBoundaryPoints(0, a);
                return c
            },
            getCurrentDocument: function(a) {
                var b;
                return b = "iframe" == a.nodeName.toLowerCase() ? a.contentWindow.document : document
            },
            fixRangeBoundaryPoints: function(a) {
                var b = {
                    startNode: a.startContainer(),
                    endNode: a.endContainer(),
                    startOffset: a.startOffset(),
                    endOffset: a.endOffset()
                };
                if (b.startNode.parentNode != b.endNode.parentNode) {
                    var c = a.commonAncestorContainer(),
                        d = b.startNode;
                    if (0 === b.startOffset) {
                        for (; d.parentNode != c && d.parentNode.firstChild == d;)
                            d = d.parentNode;
                        b.startBeforeNode = d
                    }
                    if (b.startNode = d,
                        d = b.endNode,
                        d.length == b.endOffset) {
                        for (; d.parentNode != c && d.parentNode.lastChild == d;)
                            d = d.parentNode;
                        b.endAfterNode = d
                    }
                }
                return a.setStart(b.startNode, b.startOffset),
                    a.setEnd(b.endNode, b.endOffset),
                    b.startBeforeNode && a.setStartBefore(b.startBeforeNode),
                    b.endAfterNode && a.setEndAfter(b.endAfterNode),
                    a
            },
            arrayFilter: function(a) {
                var b = this.length;
                if ("function" != typeof a)
                    throw new TypeError;
                for (var c = [], d = arguments[1], e = 0; b > e; e++)
                    if (e in this) {
                        var f = this[e];
                        a.call(d, f, e, this) && c.push(f)
                    }
                return c
            },
            indexOf: function(a) {
                function b(a) {
                    if (null == this)
                        throw new TypeError;
                    var b, c, d = Object(this),
                        e = d.length >>> 0;
                    if (0 === e)
                        return -1;
                    if (b = 0,
                        arguments.length > 1 && (b = Number(arguments[1]),
                            b != b ? b = 0 : 0 != b && 1 / 0 != b && b != -1 / 0 && (b = (b > 0 || -1) * Math.floor(Math.abs(b)))),
                        b >= e)
                        return -1;
                    for (c = b >= 0 ? b : Math.max(e - Math.abs(b), 0); e > c; c++)
                        if (c in d && d[c] === a)
                            return c;
                    return -1
                }
                var c, d = Array.prototype.slice.apply(arguments);
                return d.shift(),
                    c = "[object Array]" !== Object.prototype.toString.call(a) || Array.prototype.indexOf ? Array.prototype.indexOf.apply(a, d) : b.apply(a, d)
            },
            arrayUnique: function(a, b) {
                for (var c = a.concat(), b = b || function(a, b) {
                        return a === b
                    }, d = 0; d < c.length; ++d)
                    for (var e = d + 1; e < c.length; ++e)
                        b(c[d], c[e]) && c.splice(e--, 1);
                return c
            },
            diffArrays: function(a, b) {
                for (var c = [], d = b.length, e = 0; d > e; e++)
                    this.indexOf(a, b[e]) < 0 && c.push(b[e]);
                return c
            },
            isEqualNode: function(a, b) {
                var c = !1;
                return a && (c = a.getAttribute && a.getAttribute(b) ? !0 : !1),
                    c
            },
            inArray: function(a, b) {
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b)
                        return !0;
                return !1
            },
            extendOptions: function(a, b) {
                for (var c in b)
                    a[c] = b[c]
            },
            getUrl: function(a, b) {
                return -1 == a.indexOf(":/") && 0 !== a.indexOf("/") && (a = b + a),
                    a
            },
            is: function(a, b) {
                var c = Object.prototype.toString.call(a).slice(8, -1);
                return void 0 !== a && null !== a && c === b
            },
            getLocationInfo: function(a) {
                var b = document.createElement("a");
                return b.href = a, {
                    protocol: b.protocol.replace(/:/, ""),
                    host: b.host.split(":")[0],
                    port: "0" == b.port ? "80" : b.port,
                    pathname: b.pathname.replace(/^\//, "")
                }
            },
            getKeys: Object.keys || function(a) {
                var b, c = [];
                for (b in a)
                    a.hasOwnProperty(b) && c.push(b);
                return c
            },
            browser: function() {
                var a = navigator.userAgent.toLowerCase(),
                    b = a.match(/edge[ \/](\d+.?\d*)/),
                    c = a.indexOf("trident/") > -1,
                    d = !(!b && !c),
                    e = window.opera,
                    f = {
                        ie: d,
                        edge: !!b,
                        opera: !!e && e.version,
                        webkit: !d && a.indexOf(" applewebkit/") > -1,
                        air: a.indexOf(" adobeair/") > -1,
                        mac: a.indexOf("macintosh") > -1,
                        quirks: "BackCompat" == document.compatMode && (!document.documentMode || document.documentMode < 10),
                        mobile: a.indexOf("mobile") > -1,
                        iOS: /(ipad|iphone|ipod)/.test(a)
                    };
                f.gecko = "Gecko" == navigator.product && !f.webkit && !f.opera && !f.ie,
                    f.webkit && (a.indexOf("chrome") > -1 ? f.chrome = !0 : f.safari = !0);
                var g = 0;
                if (f.ie && (g = b ? parseFloat(b[1]) : f.quirks || !document.documentMode ? parseFloat(a.match(/msie (\d+)/)[1]) : document.documentMode),
                    f.gecko) {
                    var h = a.match(/rv:([\d\.]+)/);
                    h && (h = h[1].split("."),
                        g = 1e4 * h[0] + 100 * (h[1] || 0) + 1 * (h[2] || 0))
                }
                return f.air && (g = parseFloat(a.match(/ adobeair\/(\d+)/)[1])),
                    f.webkit && (g = parseFloat(a.match(/ applewebkit\/(\d+)/)[1])),
                    f.version = g,
                    f
            }(),
            trim: function(a) {
                function b(a) {
                    var b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    return b.lastIndex = 0,
                        a.replace(b, "")
                }
                var c = "";
                return c = a.trim ? a.trim() : b(a)
            }
        };
        a.Utils = b
    }(GIELLA.prototype),
    function(a) {
        "use strict";
        var b = {},
            c = function f(a, c) {
                var d = /\W/.test(a) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : b[a] = b[a] || f(document.getElementById(a).innerHTML.replace(/\r\n/, ""));
                return c ? d(c) : d
            },
            d = a.UILib,
            e = {
                create: function(a, b) {
                    var c;
                    document.getElementById(a) || (c = document.createElement("script"),
                        c.type = "text/html",
                        c.id = a,
                        c.text = b,
                        d.appendTo(c, "body"))
                },
                remove: function(a) {
                    d.remove("body #" + a)
                },
                render: function(a, b) {
                    return c(a, b)
                }
            };
        a.Template = e
    }(GIELLA.prototype),
    function(a) {
        "use strict";
        var b = {
                separator: "<$>",
                getDataType: function(a) {
                    var b;
                    return b = "undefined" == typeof a ? "undefined" : null === a ? "null" : Object.prototype.toString.call(a).slice(8, -1)
                },
                convertDataToString: function(a) {
                    var b, c = this.getDataType(a).toLowerCase();
                    return b = c + this.separator + a
                },
                restoreDataFromString: function(a) {
                    var b, c, d = a;
                    if (a = this.backCompatibility(a),
                        "string" == typeof a)
                        switch (c = a.indexOf(this.separator),
                            b = a.substring(0, c),
                            d = a.substring(c + this.separator.length),
                            b) {
                            case "boolean":
                                d = "true" === d;
                                break;
                            case "number":
                                d = parseFloat(d);
                                break;
                            case "array":
                                d = "" === d ? [] : d.split(",");
                                break;
                            case "null":
                                d = null;
                                break;
                            case "undefined":
                                d = void 0
                        }
                    return d
                },
                backCompatibility: function(a) {
                    var b, c, d = a;
                    return "string" == typeof a && (c = a.indexOf(this.separator),
                            0 > c && (b = parseFloat(a),
                                isNaN(b) && ("[" === a[0] && "]" === a[a.length - 1] ? (a = a.replace("[", ""),
                                    a = a.replace("]", ""),
                                    b = "" === a ? [] : a.split(",")) : b = "true" === a || "false" === a ? "true" === a : a),
                                d = this.convertDataToString(b))),
                        d
                }
            },
            c = {
                get: function(a) {
                    var c = b.restoreDataFromString(window.localStorage.getItem(a));
                    return c
                },
                set: function(a, c) {
                    var d = b.convertDataToString(c);
                    window.localStorage.setItem(a, d)
                },
                del: function(a) {
                    window.localStorage.removeItem(a)
                },
                clear: function() {
                    window.localStorage.clear()
                }
            },
            d = {
                expiration: function() {
                    return 31622400
                }(),
                get: function(a) {
                    var c = b.restoreDataFromString(this.getCookie(a));
                    return c
                },
                set: function(a, c) {
                    var d = b.convertDataToString(c);
                    this.setCookie(a, d, {
                        expires: this.expiration
                    })
                },
                del: function(a) {
                    this.deleteCookie(a)
                },
                getCookie: function(a) {
                    "string" != typeof a && (a = "");
                    var b = document.cookie.match(new RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
                    return b ? decodeURIComponent(b[1]) : void 0
                },
                setCookie: function(a, b, c) {
                    c = c || {};
                    var d = c.expires;
                    if ("number" == typeof d && d) {
                        var e = new Date;
                        e.setTime(e.getTime() + 1e3 * d),
                            d = c.expires = e
                    }
                    d && d.toUTCString && (c.expires = d.toUTCString()),
                        b = encodeURIComponent(b);
                    var f = a + "=" + b;
                    for (var g in c) {
                        var h = c[g];
                        f += "; " + g,
                            h !== !0 && (f += "=" + h)
                    }
                    document.cookie = f
                },
                deleteCookie: function(a) {
                    this.setCookie(a, null, {
                        expires: -1
                    })
                },
                clear: function() {
                    for (var a = document.cookie.split(";"), b = 0; b < a.length; b++) {
                        var c = a[b],
                            d = c.indexOf("="),
                            e = d > -1 ? c.substr(0, d) : c;
                        this.deleteCookie(e)
                    }
                }
            },
            e = window.localStorage ? c : d,
            f = {
                getData: function(a) {
                    return e.get(a)
                },
                setData: function(a, b) {
                    e.set(a, b)
                },
                deleteData: function(a) {
                    e.del(a)
                },
                clear: function() {
                    e.clear()
                }
            };
        a.DataStorage = f
    }(GIELLA.prototype),
    function(a) {
        "use strict";
        var b = function(a, b) {
            this.name = a,
                this.sandbox = b
        };
        b.prototype = {
                init: function() {
                    this.documentContainer = this.sandbox.getOption("documentContainer"),
                        this.blockElementsRegex = this.sandbox.getOption("blockElementsRegex"),
                        this.ignoreElementsRegex = this.sandbox.getOption("ignoreElementsRegex");
                    var a = this.sandbox.getOption("punctuationRegExp");
                    this.libAdapter = b.RangyAdapter,
                        this.rangyOptions = {
                            wordRegex: /[^\s]+/g,
                            tokenizer: function(b, c) {
                                function d(a, c, d) {
                                    for (var e = b.slice(a, c), f = {
                                            isWord: d,
                                            chars: e,
                                            toString: function() {
                                                return e.join("")
                                            }
                                        }, g = 0, h = e.length; h > g; ++g)
                                        e[g].token = f;
                                    j.push(f)
                                }
                                var e, f, g, h = b.join(""),
                                    i = 0,
                                    j = [];
                                for (h = GIELLA.prototype.Utils.removePunctuation(h, a); g = c.wordRegex.exec(h);)
                                    e = g.index,
                                    f = e + g[0].length,
                                    e > i && d(i, e, !1),
                                    d(e, f, !0),
                                    i = f;
                                return i < b.length && d(i, b.length, !1),
                                    j
                            }
                        }
                },
                createRange: function() {
                    return new b.Range(new this.libAdapter(this.documentContainer, this.blockElementsRegex, this.ignoreElementsRegex, this.rangyOptions))
                },
                getSelection: function() {
                    return new b.Selection(new this.libAdapter(this.documentContainer, this.blockElementsRegex, this.ignoreElementsRegex, this.rangyOptions))
                },
                getSelectionManager: function() {
                    return new b.SelectionManager(new this.libAdapter(this.documentContainer, this.blockElementsRegex, this.ignoreElementsRegex, this.rangyOptions))
                },
                getRangeManager: function() {
                    return new b.RangeManager(new this.libAdapter(this.documentContainer, this.blockElementsRegex, this.ignoreElementsRegex, this.rangyOptions))
                },
                comparisonType: {
                    START_TO_START: 0,
                    START_TO_END: 1,
                    END_TO_START: 3,
                    END_TO_END: 2
                }
            },
            b.Range = function(a) {
                var b = a.range;
                b.createRange(),
                    this.collapsed = function() {
                        return b.collapsed()
                    },
                    this.commonAncestorContainer = function() {
                        return b.commonAncestorContainer()
                    },
                    this.endContainer = function() {
                        return b.endContainer()
                    },
                    this.endOffset = function() {
                        return b.endOffset()
                    },
                    this.startContainer = function() {
                        return b.startContainer()
                    },
                    this.startOffset = function() {
                        return b.startOffset()
                    },
                    this.setStart = function(a, c) {
                        return b.setStart(a, c)
                    },
                    this.setEnd = function(a, c) {
                        return b.setEnd(a, c)
                    },
                    this.setStartBefore = function(a) {
                        return b.setStartBefore(a)
                    },
                    this.setStartAfter = function(a) {
                        return b.setStartAfter(a)
                    },
                    this.setEndBefore = function(a) {
                        return b.setEndBefore(a)
                    },
                    this.setEndAfter = function(a) {
                        return b.setEndAfter(a)
                    },
                    this.selectNode = function(a) {
                        return b.selectNode(a)
                    },
                    this.selectNodeContents = function(a) {
                        return b.selectNodeContents(a)
                    },
                    this.collapse = function(a) {
                        return b.collapse(a)
                    },
                    this.cloneContents = function() {
                        return b.cloneContents()
                    },
                    this.deleteContents = function() {
                        return b.deleteContents()
                    },
                    this.extractContents = function() {
                        return b.extractContents()
                    },
                    this.insertNode = function(a) {
                        return b.insertNode(a)
                    },
                    this.surroundContents = function(a) {
                        return b.surroundContents(a)
                    },
                    this.compareBoundaryPoints = function(a, b) {
                        return b.compareBoundaryPoints(a, b)
                    },
                    this.cloneRange = function() {
                        return b.cloneRange()
                    },
                    this.detach = function() {
                        return b.detach()
                    },
                    this.toString = function() {
                        return b.toString()
                    },
                    this.createContextualFragment = function(a) {
                        return b.createContextualFragment(a)
                    },
                    this.move = function(a, c, d) {
                        return b.move(a, c, d)
                    },
                    this.expand = function(a, c) {
                        return b.expand(a, c)
                    },
                    this.getNodes = function() {
                        return b.getNodes()
                    },
                    this.moveEnd = function(a, c, d) {
                        return b.moveEnd(a, c, d)
                    },
                    this.moveStart = function(a, c, d) {
                        return b.moveStart(a, c, d)
                    }
            },
            b.RangeManager = function(a) {
                var b = a.rangeManager;
                return {
                    saveRange: function(a, c) {
                        return b.saveRange(a, c)
                    },
                    restoreRange: function(a, c) {
                        return b.restoreRange(a, c)
                    }
                }
            },
            b.RangeManager.prototype = {},
            b.Selection = function(a) {
                var b = a.selection;
                b.getSelection(),
                    this.rangeCount = function() {
                        return b.rangeCount()
                    },
                    this.getRangeAt = function(a) {
                        return b.getRangeAt(a)
                    },
                    this.removeAllRanges = function() {
                        return b.removeAllRanges()
                    },
                    this.addRange = function(a) {
                        return b.addRange(a)
                    },
                    this.anchorNode = function() {
                        return b.anchorNode()
                    },
                    this.focusNode = function() {
                        return b.focusNode()
                    },
                    this.move = function(a, c, d) {
                        return b.move(a, c, d)
                    },
                    this.expand = function(a, c) {
                        return b.expand(a, c)
                    }
            },
            b.SelectionManager = function(a) {
                var b = a.selectionManager;
                return {
                    saveSelection: function() {
                        return b.saveSelection()
                    },
                    restoreSelection: function(a) {
                        return b.restoreSelection(a)
                    }
                }
            },
            b.SelectionManager.prototype = {},
            b.RangyAdapter = function(a, c, d, e) {
                var f = GIELLA.prototype.UILib;
                b.Lib = b.Lib || GIELLA.rangy || window.rangy,
                    b.Lib.initialized === !1 && b.Lib.init();
                var g, h = null,
                    i = {
                        range: {
                            createRange: function() {
                                return g = b.Lib.createRange(a)
                            },
                            collapsed: function() {
                                return g.collapsed
                            },
                            commonAncestorContainer: function() {
                                return g.commonAncestorContainer
                            },
                            endContainer: function() {
                                return g.endContainer
                            },
                            endOffset: function() {
                                return g.endOffset
                            },
                            startContainer: function() {
                                return g.startContainer
                            },
                            startOffset: function() {
                                return g.startOffset
                            },
                            setStart: function(a, b) {
                                return g.setStart(a, b)
                            },
                            setEnd: function(a, b) {
                                return g.setEnd(a, b)
                            },
                            setStartBefore: function(a) {
                                return g.setStartBefore(a)
                            },
                            setStartAfter: function(a) {
                                return g.setStartAfter(a)
                            },
                            setEndBefore: function(a) {
                                return g.setEndBefore(a)
                            },
                            setEndAfter: function(a) {
                                return g.setEndAfter(a)
                            },
                            selectNode: function(a) {
                                return g.selectNode(a)
                            },
                            selectNodeContents: function(a) {
                                return g.selectNodeContents(a)
                            },
                            collapse: function(a) {
                                return g.collapse(a)
                            },
                            cloneContents: function() {
                                return g.cloneContents()
                            },
                            deleteContents: function() {
                                return g.deleteContents()
                            },
                            extractContents: function() {
                                return g.extractContents()
                            },
                            insertNode: function(a) {
                                return g.insertNode(a)
                            },
                            surroundContents: function(a) {
                                return g.surroundContents(a)
                            },
                            compareBoundaryPoints: function(c, d) {
                                var e = b.Lib.createRange(a);
                                return e.setStart(d.startContainer(), d.startOffset()),
                                    e.setEnd(d.endContainer(), d.endOffset()),
                                    g.compareBoundaryPoints(c, e)
                            },
                            cloneRange: function() {
                                var f = new b.Range(new b.RangyAdapter(a, c, d, e));
                                return f.setStart(this.startContainer(), this.startOffset()),
                                    f.setEnd(this.endContainer(), this.endOffset()),
                                    f
                            },
                            detach: function() {
                                return g.detach()
                            },
                            toString: function() {
                                for (var a = "", b = g.cloneContents(), e = [b], f = e.shift(); f;) {
                                    switch (f.nodeType) {
                                        case 3:
                                            a += f.nodeValue;
                                            break;
                                        case 1:
                                        case 11:
                                            if (f.nodeName.match(d))
                                                a += " ";
                                            else {
                                                for (var h = 0; h < f.childNodes.length; h++)
                                                    e.splice(h, 0, f.childNodes[h]);
                                                f.nodeName.match(c) && (e.length > f.childNodes.length && e.splice(h, 0, document.createTextNode(" ")),
                                                    a.length > 0 && " " != a[a.length - 1] && e.splice(0, 0, document.createTextNode(" ")))
                                            }
                                    }
                                    f = e.shift()
                                }
                                return a
                            },
                            createContextualFragment: function(a) {
                                return g.createContextualFragment(a)
                            },
                            move: function(a, b, c) {
                                return g.move(a, b, "word" !== a || c ? c : e)
                            },
                            expand: function(a, b) {
                                return g.expand(a, "word" !== a || b ? b : e)
                            },
                            getNodes: function() {
                                return g.getNodes()
                            },
                            moveEnd: function(a, b, c) {
                                return g.moveEnd(a, b, "word" !== a || c ? c : e)
                            },
                            moveStart: function(a, b, c) {
                                return g.moveStart(a, b, "word" !== a || c ? c : e)
                            }
                        },
                        selection: {
                            getSelection: function() {
                                return null !== h && this.detach(),
                                    h = "iframe" == a.nodeName.toLowerCase() ? b.Lib.getSelection(a) : b.Lib.getSelection()
                            },
                            rangeCount: function() {
                                return h.rangeCount
                            },
                            getRangeAt: function(f) {
                                var g = h.getRangeAt(f),
                                    i = new b.Range(new b.RangyAdapter(a, c, d, e));
                                return i.setStart(g.startContainer, g.startOffset),
                                    i.setEnd(g.endContainer, g.endOffset),
                                    i
                            },
                            removeAllRanges: function() {
                                return h.removeAllRanges()
                            },
                            addRange: function(c) {
                                var d = b.Lib.createRange(a);
                                return d.setStart(c.startContainer(), c.startOffset()),
                                    d.setEnd(c.endContainer(), c.endOffset()),
                                    h.addRange(d)
                            },
                            anchorNode: function() {
                                return h.anchorNode
                            },
                            focusNode: function() {
                                return h.focusNode
                            },
                            move: function(a, b, c) {
                                return h.move(a, b, c)
                            },
                            expand: function(a, b) {
                                return h.expand(a, b)
                            },
                            detach: function() {
                                b.Lib.Selection.detachAll()
                            }
                        },
                        selectionManager: {
                            saveSelection: function() {
                                var c;
                                try {
                                    f.is(a, ":visible") && (c = "iframe" == a.nodeName.toLowerCase() ? b.Lib.saveSelection(a) : b.Lib.saveSelection())
                                } catch (d) {}
                                return c
                            },
                            restoreSelection: function(a) {
                                function c(a) {
                                    for (var c = [], d = a.length, e = d - 1; e >= 0; e--)
                                        c[e] = b.Lib.restoreRange(a[e], !1);
                                    return c
                                }
                                if (!a.restored) {
                                    var d = a.rangeInfos,
                                        e = i.selection.getSelection(a.win),
                                        f = c(d),
                                        g = d.length;
                                    1 == g && b.Lib.features.selectionHasExtend && d[0].backward ? (e.removeAllRanges(),
                                            e.addRange(f[0], !0)) : e.setRanges(f),
                                        a.restored = !0
                                }
                                return a.restored
                            }
                        },
                        rangeManager: {
                            saveRange: function(c, d) {
                                var e, f;
                                return f = b.Lib.createRange(a),
                                    f.setStart(c.startContainer(), c.startOffset()),
                                    c.collapsed() || f.setEnd(c.endContainer(), c.endOffset()),
                                    e = b.Lib.saveRange(f, d)
                            },
                            restoreRange: function(f, g) {
                                var h, i = !1;
                                return f && (h = b.Lib.restoreRange(f, g),
                                        i = new b.Range(new b.RangyAdapter(a, c, d, e)),
                                        i.setStart(h.startContainer, h.startOffset),
                                        i.setEnd(h.endContainer, h.endOffset)),
                                    i
                            }
                        }
                    };
                return i
            },
            b.TestAdapter = function() {
                return b.Lib = b.Lib || window.TestLib,
                    GIELLA.Utils.removeGlobal(window.TestLib), {
                        createRange: function() {
                            return b.Lib.createRange()
                        },
                        selectNodeContents: function(a) {
                            return b.Lib.selectNodeContents(a)
                        },
                        collapse: function(a) {
                            return b.Lib.collapse(a)
                        },
                        createContextualFragment: function(a) {
                            return b.Lib.createContextualFragment(a)
                        },
                        insertNode: function(a) {
                            return b.Lib.insertNode(a)
                        }
                    }
            },
            a.RangeCreator = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, c) {
            this.name = a,
                this.sandbox = c,
                this.events = {},
                b.Signal = b.Signal || GIELLA.signals.Signal
        };
        b.prototype = {
                init: function() {
                    for (var a = ["appStarted", "startSpellCheck", "keypress", "moduleStarted", "selectionIsChanged", "collectWords", "wordsCollected", "misspelledWordsFound", "replaceWord", "startGrammarCheck", "collectSentences", "sentencesCollected", "getGrammarSuggestionsList", "problemPhrasesFound", "markupPhrase", "ignorePhrase", "ignoreAllPhrases", "replacePhrase", "removeMarkupFromPhrases", "removeGrammarMarkupInSelectionNode", "updateSentencesCache", "graytStateChanged", "markupWords", "getSuggestionsList", "suggestionListSend", "ignoreWord", "ignoreAllWords", "removeMarkupInDocument", "addEventHandler", "removeEventHandler", "removeAllEventHandlers", "removeMarkupFromWords", "removeMarkupInSelectionNode", "taskEnded", "spellCheckStarted", "spellCheckEnded", "showBanner", "hideBanner", "openWSCwindow", "documentReadyForSpelling", "suggestionListRendered", "commitOptions", "getUserDictionaryName", "createUserDictionary", "renameUserDictionary", "restoreUserDictionary", "removeUserDictionary", "setUserDictionaryName", "addWordToUserDictionary", "userDictionaryChanged", "userDictionaryStateChanged", "userDictionaryStateRestored", "userDictionaryAction", "cut", "copy", "paste", "afterPaste", "beforeContextMenuShow", "contextMenuHide", "dialogDefinition", "onLoad", "onShow", "onHide", "onClose", "onSubmit", "onCancel", "focus", "blur", "appReady", "calculateWords", "dictionaryChanged", "defaultTextchanged", "backgroundColorChanged", "allModulesReady", "moduleReady", "markupedNode", "removedMarkupInContainer"], b = 0; b < a.length; b++) {
                        var c = a[b];
                        this.events[c] = this.createSignal()
                    }
                },
                createSignal: function() {
                    return new b.Signal
                },
                fire: function(a, b, c) {
                    for (var d = b.split(","), e = "", f = 0; f < d.length; f++)
                        e = this.sandbox.Utils.trim(d[f]),
                        this.events[e].dispatch(c)
                },
                subscribe: function(a, b, c, d, e) {
                    e = e || 0;
                    for (var f = b.split(","), g = "", h = 0; h < f.length; h++)
                        g = this.sandbox.Utils.trim(f[h]),
                        this.events[g].add(c, d, e)
                },
                unsubscribe: function(a, b, c) {
                    var d = this.events[b],
                        e = 0;
                    if (c)
                        for (; d._bindings[e];)
                            d._bindings[e].context === c ? d.remove(d._bindings[e]._listener, c) : e++;
                    else
                        d.removeAll()
                }
            },
            a.Communication = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, b) {
            this.name = a,
                this.sandbox = b,
                this.tasks = {},
                this.taskCount = 0
        };
        b.prototype = {
                init: function() {
                    this.sandbox.subscribe("taskEnded", function(a) {
                        this.taskEndedHandler(a.taskName)
                    }, this)
                },
                taskEndedHandler: function(a) {
                    this.unregister(a, !0),
                        0 === this.taskCount && this.sandbox.fire("spellCheckEnded", {})
                },
                register: function(a, c) {
                    return 0 === this.taskCount && this.sandbox.fire("spellCheckStarted", {}),
                        c.single && (this.unregister(a, !0),
                            c.collection = ["single"]),
                        this.tasks[a] ? this.tasks[a].extendCollection(c.collection) : (this.tasks[a] = new b.Task(a, c, this.sandbox),
                            this.taskCount++,
                            this.tasks[a].startTask()),
                        this.tasks[a]
                },
                unregister: function(a, b) {
                    this.tasks[a] && (this.tasks[a].timeout && (clearTimeout(this.tasks[a].timeout),
                            this.tasks[a].timeout = null),
                        this.taskCount--, !b && this.tasks[a].onUnregister && this.tasks[a].onUnregister.apply(this.tasks[a]),
                        delete this.tasks[a])
                },
                unregisterAll: function() {
                    for (var a in this.tasks)
                        this.tasks.hasOwnProperty(a) && this.unregister(a)
                }
            },
            b.Task = function(a, b, c) {
                function d(a) {
                    return function() {
                        a && a.apply(this, arguments),
                            this.endTask()
                    }
                }
                var e = this;
                b = b || {},
                    this.name = a,
                    this.single = b.single || !1,
                    this.collection = [].concat(b.collection || []),
                    this.delay = b.delay || 0,
                    this.partialItemsCount = b.partialItemsCount || 1,
                    this.deferredFunction = d(b.deferredFunction),
                    this.defferedFunctionArgs = b.defferedFunctionArgs || [],
                    this.timeout = void 0,
                    this.onUnregister = b.onUnregister,
                    this.getPartialItems = function() {
                        return this.collection.splice(0, this.partialItemsCount || 1)
                    },
                    this.runDeferredFunction = function(a) {
                        var b = this.deferredFunction.apply(this, [].concat([a], this.defferedFunctionArgs));
                        return b
                    },
                    this.extendCollection = function(a) {
                        var b = [0, 0];
                        b.push.apply(b, a),
                            this.collection.splice.apply(this.collection, b)
                    },
                    this.startTask = function() {
                        this.timeout = setTimeout(function() {
                            var a = e.getPartialItems();
                            e.runDeferredFunction(a)
                        }, this.delay)
                    },
                    this.endTask = function() {
                        this.timeout = null,
                            this.collection.length > 0 ? this.startTask() : c.fire("taskEnded", {
                                taskName: this.name
                            })
                    }
            },
            a.Deferred = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = window.console || {},
            c = window.JSON || {},
            d = ["log", "warn", "info", "debug"],
            e = a.Utils.browser;
        c.stringify = c.stringify || function() {
            return arguments
        };
        for (var f = 0; f < d.length; f++)
            b[d[f]] = b[d[f]] || function() {};
        var g = !1,
            h = {
                isON: function(a) {
                    a = a || !1,
                        g = a ? !0 : /giellaDebug\b/.test(location.hash)
                },
                isIE: e.ie,
                log: function(a) {
                    var d = a || {},
                        e = void 0;
                    g && (e = "object" == typeof d ? [d.name, ":: " + d.msg, d.data] : [d],
                        this.isIE ? (e = [d.name, ":: " + d.msg, c.stringify(d.data, null, "")],
                            e = e.join(" "),
                            b.log(e)) : b.log.apply(b, e))
                }
            };
        a.logger = h
    }(GIELLA.prototype),
    function(a) {
        function b(a, b, c, d, e) {
            this._listener = b,
                this._isOnce = c,
                this.context = d,
                this._signal = a,
                this._priority = e || 0
        }

        function c(a, b) {
            if ("function" != typeof a)
                throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", b))
        }

        function d() {
            this._bindings = [],
                this._prevParams = null;
            var a = this;
            this.dispatch = function() {
                d.prototype.dispatch.apply(a, arguments)
            }
        }
        b.prototype = {
                active: !0,
                params: null,
                execute: function(a) {
                    var b;
                    return this.active && this._listener && (a = this.params ? this.params.concat(a) : a,
                            b = this._listener.apply(this.context, a),
                            this._isOnce && this.detach()),
                        b
                },
                detach: function() {
                    return this.isBound() ? this._signal.remove(this._listener, this.context) : null
                },
                isBound: function() {
                    return !!this._signal && !!this._listener
                },
                isOnce: function() {
                    return this._isOnce
                },
                getListener: function() {
                    return this._listener
                },
                getSignal: function() {
                    return this._signal
                },
                _destroy: function() {
                    delete this._signal,
                        delete this._listener,
                        delete this.context
                },
                toString: function() {
                    return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
                }
            },
            d.prototype = {
                VERSION: "1.0.0",
                memorize: !1,
                _shouldPropagate: !0,
                active: !0,
                _registerListener: function(a, c, d, e) {
                    var f = this._indexOfListener(a, d);
                    if (-1 !== f) {
                        if (a = this._bindings[f],
                            a.isOnce() !== c)
                            throw Error("You cannot add" + (c ? "" : "Once") + "() then add" + (c ? "Once" : "") + "() the same listener without removing the relationship first.")
                    } else
                        a = new b(this, a, c, d, e),
                        this._addBinding(a);
                    return this.memorize && this._prevParams && a.execute(this._prevParams),
                        a
                },
                _addBinding: function(a) {
                    var b = this._bindings.length;
                    do
                        --b;
                    while (this._bindings[b] && a._priority <= this._bindings[b]._priority);
                    this._bindings.splice(b + 1, 0, a)
                },
                _indexOfListener: function(a, b) {
                    for (var c, d = this._bindings.length; d--;)
                        if (c = this._bindings[d],
                            c._listener === a && c.context === b)
                            return d;
                    return -1
                },
                has: function(a, b) {
                    return -1 !== this._indexOfListener(a, b)
                },
                add: function(a, b, d) {
                    return c(a, "add"),
                        this._registerListener(a, !1, b, d)
                },
                addOnce: function(a, b, d) {
                    return c(a, "addOnce"),
                        this._registerListener(a, !0, b, d)
                },
                remove: function(a, b) {
                    c(a, "remove");
                    var d = this._indexOfListener(a, b);
                    return -1 !== d && (this._bindings[d]._destroy(),
                            this._bindings.splice(d, 1)),
                        a
                },
                removeAll: function() {
                    for (var a = this._bindings.length; a--;)
                        this._bindings[a]._destroy();
                    this._bindings.length = 0
                },
                getNumListeners: function() {
                    return this._bindings.length
                },
                halt: function() {
                    this._shouldPropagate = !1
                },
                dispatch: function() {
                    if (this.active) {
                        var a, b = Array.prototype.slice.call(arguments),
                            c = this._bindings.length;
                        if (this.memorize && (this._prevParams = b),
                            c) {
                            a = this._bindings.slice(),
                                this._shouldPropagate = !0;
                            do
                                c--;
                            while (a[c] && this._shouldPropagate && a[c].execute(b) !== !1)
                        }
                    }
                },
                forget: function() {
                    this._prevParams = null
                },
                dispose: function() {
                    this.removeAll(),
                        delete this._bindings,
                        delete this._prevParams
                },
                toString: function() {
                    return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
                }
            };
        var e = d;
        e.Signal = d,
            a.signals = e
    }(GIELLA || this),
    function() {
        ! function(a) {
            function b(a, b) {
                var c = typeof a[b];
                return c == v || !(c != u || !a[b]) || "unknown" == c
            }

            function c(a, b) {
                return !(typeof a[b] != u || !a[b])
            }

            function d(a, b) {
                return typeof a[b] != w
            }

            function e(a) {
                return function(b, c) {
                    for (var d = c.length; d--;)
                        if (!a(b, c[d]))
                            return !1;
                    return !0
                }
            }

            function f(a) {
                return a && B(a, A) && D(a, z)
            }

            function g(a) {
                return c(a, "body") ? a.body : a.getElementsByTagName("body")[0]
            }

            function h(a) {
                typeof console != w && b(console, "log") && console.log(a)
            }

            function i(a, b) {
                G && b ? alert(a) : h(a)
            }

            function j(a) {
                I.initialized = !0,
                    I.supported = !1,
                    i("Rangy is not supported in this environment. Reason: " + a, I.config.alertOnFail)
            }

            function k(a) {
                i("Rangy warning: " + a, I.config.alertOnWarn)
            }

            function l(a) {
                return a.message || a.description || String(a)
            }

            function m() {
                if (G && !I.initialized) {
                    var a, c = !1,
                        d = !1;
                    b(document, "createRange") && (a = document.createRange(),
                        B(a, y) && D(a, x) && (c = !0));
                    var e = g(document);
                    if (!e || "body" != e.nodeName.toLowerCase())
                        return j("No body element found"),
                            void 0;
                    if (e && b(e, "createTextRange") && (a = e.createTextRange(),
                            f(a) && (d = !0)), !c && !d)
                        return j("Neither Range nor TextRange are available"),
                            void 0;
                    I.initialized = !0,
                        I.features = {
                            implementsDomRange: c,
                            implementsTextRange: d
                        };
                    var i, k;
                    for (var m in F)
                        (i = F[m]) instanceof q && i.init(i, I);
                    for (var n = 0, o = L.length; o > n; ++n)
                        try {
                            L[n](I)
                        } catch (p) {
                            k = "Rangy init listener threw an exception. Continuing. Detail: " + l(p),
                                h(k)
                        }
                }
            }

            function n(a, b, c) {
                c && (a += " in module " + c.name),
                    I.warn("DEPRECATED: " + a + " is deprecated. Please use " + b + " instead.")
            }

            function o(a, b, c, d) {
                a[b] = function() {
                    return n(b, c, d),
                        a[c].apply(a, H.toArray(arguments))
                }
            }

            function p(a) {
                a = a || window,
                    m();
                for (var b = 0, c = M.length; c > b; ++b)
                    M[b](a)
            }

            function q(a, b, c) {
                this.name = a,
                    this.dependencies = b,
                    this.initialized = !1,
                    this.supported = !1,
                    this.initializer = c
            }

            function r(a, b, c) {
                var d = new q(a, b, function(b) {
                    if (!b.initialized) {
                        b.initialized = !0;
                        try {
                            c(I, b),
                                b.supported = !0
                        } catch (d) {
                            var e = "Module '" + a + "' failed to load: " + l(d);
                            h(e),
                                d.stack && h(d.stack)
                        }
                    }
                });
                return F[a] = d,
                    d
            }

            function s() {}

            function t() {}
            var u = "object",
                v = "function",
                w = "undefined",
                x = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed", "commonAncestorContainer"],
                y = ["setStart", "setStartBefore", "setStartAfter", "setEnd", "setEndBefore", "setEndAfter", "collapse", "selectNode", "selectNodeContents", "compareBoundaryPoints", "deleteContents", "extractContents", "cloneContents", "insertNode", "surroundContents", "cloneRange", "toString", "detach"],
                z = ["boundingHeight", "boundingLeft", "boundingTop", "boundingWidth", "htmlText", "text"],
                A = ["collapse", "compareEndPoints", "duplicate", "moveToElementText", "parentElement", "select", "setEndPoint", "getBoundingClientRect"],
                B = e(b),
                C = e(c),
                D = e(d),
                E = [].forEach ? function(a, b) {
                    a.forEach(b)
                } : function(a, b) {
                    for (var c = 0, d = a.length; d > c; ++c)
                        b(a[c], c)
                },
                F = {},
                G = typeof window != w && typeof document != w,
                H = {
                    isHostMethod: b,
                    isHostObject: c,
                    isHostProperty: d,
                    areHostMethods: B,
                    areHostObjects: C,
                    areHostProperties: D,
                    isTextRange: f,
                    getBody: g,
                    forEach: E
                },
                I = {
                    version: "1.3.1-dev",
                    initialized: !1,
                    isBrowser: G,
                    supported: !0,
                    util: H,
                    features: {},
                    modules: F,
                    config: {
                        alertOnFail: !1,
                        alertOnWarn: !1,
                        preferTextRange: !1,
                        autoInitialize: typeof rangyAutoInitialize == w ? !0 : rangyAutoInitialize
                    }
                };
            I.fail = j,
                I.warn = k;
            var J;
            ({}).hasOwnProperty ? (H.extend = J = function(a, b, c) {
                        var d, e;
                        for (var f in b)
                            b.hasOwnProperty(f) && (d = a[f],
                                e = b[f],
                                c && null !== d && "object" == typeof d && null !== e && "object" == typeof e && J(d, e, !0),
                                a[f] = e);
                        return b.hasOwnProperty("toString") && (a.toString = b.toString),
                            a
                    },
                    H.createOptions = function(a, b) {
                        var c = {};
                        return J(c, b),
                            a && J(c, a),
                            c
                    }
                ) : j("hasOwnProperty not supported"),
                G || j("Rangy can only run in a browser"),
                function() {
                    var a;
                    if (G) {
                        var b = document.createElement("div");
                        b.appendChild(document.createElement("span"));
                        var c = [].slice;
                        try {
                            1 == c.call(b.childNodes, 0)[0].nodeType && (a = function(a) {
                                return c.call(a, 0)
                            })
                        } catch (d) {}
                    }
                    a || (a = function(a) {
                            for (var b = [], c = 0, d = a.length; d > c; ++c)
                                b[c] = a[c];
                            return b
                        }),
                        H.toArray = a
                }();
            var K;
            G && (b(document, "addEventListener") ? K = function(a, b, c) {
                    a.addEventListener(b, c, !1)
                } : b(document, "attachEvent") ? K = function(a, b, c) {
                    a.attachEvent("on" + b, c)
                } : j("Document does not have required addEventListener or attachEvent method"),
                H.addListener = K);
            var L = [];
            H.deprecationNotice = n,
                H.createAliasForDeprecatedMethod = o,
                I.init = m,
                I.addInitListener = function(a) {
                    I.initialized ? a(I) : L.push(a)
                };
            var M = [];
            I.addShimListener = function(a) {
                    M.push(a)
                },
                G && (I.shim = I.createMissingNativeApi = p,
                    o(I, "createMissingNativeApi", "shim")),
                q.prototype = {
                    init: function() {
                        for (var a, b, c = this.dependencies || [], d = 0, e = c.length; e > d; ++d) {
                            if (b = c[d],
                                a = F[b], !(a && a instanceof q))
                                throw new Error("required module '" + b + "' not found");
                            if (a.init(), !a.supported)
                                throw new Error("required module '" + b + "' not supported")
                        }
                        this.initializer(this)
                    },
                    fail: function(a) {
                        throw this.initialized = !0,
                            this.supported = !1,
                            new Error(a)
                    },
                    warn: function(a) {
                        I.warn("Module " + this.name + ": " + a)
                    },
                    deprecationNotice: function(a, b) {
                        I.warn("DEPRECATED: " + a + " in module " + this.name + " is deprecated. Please use " + b + " instead")
                    },
                    createError: function(a) {
                        return new Error("Error in Rangy " + this.name + " module: " + a)
                    }
                },
                I.createModule = function(a) {
                    var b, c;
                    2 == arguments.length ? (b = arguments[1],
                        c = []) : (b = arguments[2],
                        c = arguments[1]);
                    var d = r(a, c, b);
                    I.initialized && I.supported && d.init()
                },
                I.createCoreModule = function(a, b, c) {
                    r(a, b, c)
                },
                I.RangePrototype = s,
                I.rangePrototype = new s,
                I.selectionPrototype = new t,
                I.createCoreModule("DomUtil", [], function(a, b) {
                    function c(a) {
                        var b;
                        return typeof a.namespaceURI == F || null === (b = a.namespaceURI) || "http://www.w3.org/1999/xhtml" == b
                    }

                    function d(a) {
                        var b = a.parentNode;
                        return 1 == b.nodeType ? b : null
                    }

                    function e(a) {
                        for (var b = 0; a = a.previousSibling;)
                            ++b;
                        return b
                    }

                    function f(a) {
                        switch (a.nodeType) {
                            case 7:
                            case 10:
                                return 0;
                            case 3:
                            case 8:
                                return a.length;
                            default:
                                return a.childNodes.length
                        }
                    }

                    function g(a, b) {
                        var c, d = [];
                        for (c = a; c; c = c.parentNode)
                            d.push(c);
                        for (c = b; c; c = c.parentNode)
                            if (K(d, c))
                                return c;
                        return null
                    }

                    function h(a, b, c) {
                        for (var d = c ? b : b.parentNode; d;) {
                            if (d === a)
                                return !0;
                            d = d.parentNode
                        }
                        return !1
                    }

                    function i(a, b) {
                        return h(a, b, !0)
                    }

                    function j(a, b, c) {
                        for (var d, e = c ? a : a.parentNode; e;) {
                            if (d = e.parentNode,
                                d === b)
                                return e;
                            e = d
                        }
                        return null
                    }

                    function k(a) {
                        var b = a.nodeType;
                        return 3 == b || 4 == b || 8 == b
                    }

                    function l(a) {
                        if (!a)
                            return !1;
                        var b = a.nodeType;
                        return 3 == b || 8 == b
                    }

                    function m(a, b) {
                        var c = b.nextSibling,
                            d = b.parentNode;
                        return c ? d.insertBefore(a, c) : d.appendChild(a),
                            a
                    }

                    function n(a, b, c) {
                        var d = a.cloneNode(!1);
                        if (d.deleteData(0, b),
                            a.deleteData(b, a.length - b),
                            m(d, a),
                            c)
                            for (var f, g = 0; f = c[g++];)
                                f.node == a && f.offset > b ? (f.node = d,
                                    f.offset -= b) : f.node == a.parentNode && f.offset > e(a) && ++f.offset;
                        return d
                    }

                    function o(a) {
                        if (9 == a.nodeType)
                            return a;
                        if (typeof a.ownerDocument != F)
                            return a.ownerDocument;
                        if (typeof a.document != F)
                            return a.document;
                        if (a.parentNode)
                            return o(a.parentNode);
                        throw b.createError("getDocument: no document found for node")
                    }

                    function p(a) {
                        var c = o(a);
                        if (typeof c.defaultView != F)
                            return c.defaultView;
                        if (typeof c.parentWindow != F)
                            return c.parentWindow;
                        throw b.createError("Cannot get a window object for node")
                    }

                    function q(a) {
                        if (typeof a.contentDocument != F)
                            return a.contentDocument;
                        if (typeof a.contentWindow != F)
                            return a.contentWindow.document;
                        throw b.createError("getIframeDocument: No Document object found for iframe element")
                    }

                    function r(a) {
                        if (typeof a.contentWindow != F)
                            return a.contentWindow;
                        if (typeof a.contentDocument != F)
                            return a.contentDocument.defaultView;
                        throw b.createError("getIframeWindow: No Window object found for iframe element")
                    }

                    function s(a) {
                        return a && G.isHostMethod(a, "setTimeout") && G.isHostObject(a, "document")
                    }

                    function t(a, b, c) {
                        var d;
                        if (a ? G.isHostProperty(a, "nodeType") ? d = 1 == a.nodeType && "iframe" == a.tagName.toLowerCase() ? q(a) : o(a) : s(a) && (d = a.document) : d = document, !d)
                            throw b.createError(c + "(): Parameter must be a Window object or DOM node");
                        return d
                    }

                    function u(a) {
                        for (var b; b = a.parentNode;)
                            a = b;
                        return a
                    }

                    function v(a, c, d, f) {
                        var h, i, k, l, m;
                        if (a == d)
                            return c === f ? 0 : f > c ? -1 : 1;
                        if (h = j(d, a, !0))
                            return c <= e(h) ? -1 : 1;
                        if (h = j(a, d, !0))
                            return e(h) < f ? -1 : 1;
                        if (i = g(a, d), !i)
                            throw new Error("comparePoints error: nodes have no common ancestor");
                        if (k = a === i ? i : j(a, i, !0),
                            l = d === i ? i : j(d, i, !0),
                            k === l)
                            throw b.createError("comparePoints got to case 4 and childA and childB are the same!");
                        for (m = i.firstChild; m;) {
                            if (m === k)
                                return -1;
                            if (m === l)
                                return 1;
                            m = m.nextSibling
                        }
                    }

                    function w(a) {
                        var b;
                        try {
                            return b = a.parentNode, !1
                        } catch (c) {
                            return !0
                        }
                    }

                    function x(a) {
                        if (!a)
                            return "[No node]";
                        if (L && w(a))
                            return "[Broken node]";
                        if (k(a))
                            return '"' + a.data + '"';
                        if (1 == a.nodeType) {
                            var b = a.id ? ' id="' + a.id + '"' : "";
                            return "<" + a.nodeName + b + ">[index:" + e(a) + ",length:" + a.childNodes.length + "][" + (a.innerHTML || "[innerHTML not supported]").slice(0, 25) + "]"
                        }
                        return a.nodeName
                    }

                    function y(a) {
                        for (var b, c = o(a).createDocumentFragment(); b = a.firstChild;)
                            c.appendChild(b);
                        return c
                    }

                    function z(a, b, c) {
                        var d = H(a),
                            e = a.createElement("div");
                        e.contentEditable = "" + !!c,
                            b && (e.innerHTML = b);
                        var f = d.firstChild;
                        return f ? d.insertBefore(e, f) : d.appendChild(e),
                            e
                    }

                    function A(a) {
                        return a.parentNode.removeChild(a)
                    }

                    function B(a) {
                        this.root = a,
                            this._next = a
                    }

                    function C(a) {
                        return new B(a)
                    }

                    function D(a, b) {
                        this.node = a,
                            this.offset = b
                    }

                    function E(a) {
                        this.code = this[a],
                            this.codeName = a,
                            this.message = "DOMException: " + this.codeName
                    }
                    var F = "undefined",
                        G = a.util,
                        H = G.getBody;
                    G.areHostMethods(document, ["createDocumentFragment", "createElement", "createTextNode"]) || b.fail("document missing a Node creation method"),
                        G.isHostMethod(document, "getElementsByTagName") || b.fail("document missing getElementsByTagName method");
                    var I = document.createElement("div");
                    G.areHostMethods(I, ["insertBefore", "appendChild", "cloneNode"] || !G.areHostObjects(I, ["previousSibling", "nextSibling", "childNodes", "parentNode"])) || b.fail("Incomplete Element implementation"),
                        G.isHostProperty(I, "innerHTML") || b.fail("Element is missing innerHTML property");
                    var J = document.createTextNode("test");
                    G.areHostMethods(J, ["splitText", "deleteData", "insertData", "appendData", "cloneNode"] || !G.areHostObjects(I, ["previousSibling", "nextSibling", "childNodes", "parentNode"]) || !G.areHostProperties(J, ["data"])) || b.fail("Incomplete Text Node implementation");
                    var K = function(a, b) {
                            for (var c = a.length; c--;)
                                if (a[c] === b)
                                    return !0;
                            return !1
                        },
                        L = !1;
                    ! function() {
                        var b = document.createElement("b");
                        b.innerHTML = "1";
                        var c = b.firstChild;
                        b.innerHTML = "<br />",
                            L = w(c),
                            a.features.crashyTextNodes = L
                    }();
                    var M;
                    typeof window.getComputedStyle != F ? M = function(a, b) {
                            return p(a).getComputedStyle(a, null)[b]
                        } : typeof document.documentElement.currentStyle != F ? M = function(a, b) {
                            return a.currentStyle ? a.currentStyle[b] : ""
                        } : b.fail("No means of obtaining computed style properties found"),
                        B.prototype = {
                            _current: null,
                            hasNext: function() {
                                return !!this._next
                            },
                            next: function() {
                                var a, b, c = this._current = this._next;
                                if (this._current)
                                    if (a = c.firstChild)
                                        this._next = a;
                                    else {
                                        for (b = null; c !== this.root && !(b = c.nextSibling);)
                                            c = c.parentNode;
                                        this._next = b
                                    }
                                return this._current
                            },
                            detach: function() {
                                this._current = this._next = this.root = null
                            }
                        },
                        D.prototype = {
                            equals: function(a) {
                                return !!a && this.node === a.node && this.offset == a.offset
                            },
                            inspect: function() {
                                return "[DomPosition(" + x(this.node) + ":" + this.offset + ")]"
                            },
                            toString: function() {
                                return this.inspect()
                            }
                        },
                        E.prototype = {
                            INDEX_SIZE_ERR: 1,
                            HIERARCHY_REQUEST_ERR: 3,
                            WRONG_DOCUMENT_ERR: 4,
                            NO_MODIFICATION_ALLOWED_ERR: 7,
                            NOT_FOUND_ERR: 8,
                            NOT_SUPPORTED_ERR: 9,
                            INVALID_STATE_ERR: 11,
                            INVALID_NODE_TYPE_ERR: 24
                        },
                        E.prototype.toString = function() {
                            return this.message
                        },
                        a.dom = {
                            arrayContains: K,
                            isHtmlNamespace: c,
                            parentElement: d,
                            getNodeIndex: e,
                            getNodeLength: f,
                            getCommonAncestor: g,
                            isAncestorOf: h,
                            isOrIsAncestorOf: i,
                            getClosestAncestorIn: j,
                            isCharacterDataNode: k,
                            isTextOrCommentNode: l,
                            insertAfter: m,
                            splitDataNode: n,
                            getDocument: o,
                            getWindow: p,
                            getIframeWindow: r,
                            getIframeDocument: q,
                            getBody: H,
                            isWindow: s,
                            getContentDocument: t,
                            getRootContainer: u,
                            comparePoints: v,
                            isBrokenNode: w,
                            inspectNode: x,
                            getComputedStyleProperty: M,
                            createTestElement: z,
                            removeNode: A,
                            fragmentFromNodeChildren: y,
                            createIterator: C,
                            DomPosition: D
                        },
                        a.DOMException = E
                }),
                I.createCoreModule("DomRange", ["DomUtil"], function(a) {
                    function b(a, b) {
                        return 3 != a.nodeType && (O(a, b.startContainer) || O(a, b.endContainer))
                    }

                    function c(a) {
                        return a.document || P(a.startContainer)
                    }

                    function d(a) {
                        return V(a.startContainer)
                    }

                    function e(a) {
                        return new K(a.parentNode, N(a))
                    }

                    function f(a) {
                        return new K(a.parentNode, N(a) + 1)
                    }

                    function g(a, b, c) {
                        var d = 11 == a.nodeType ? a.firstChild : a;
                        return M(b) ? c == b.length ? I.insertAfter(a, b) : b.parentNode.insertBefore(a, 0 == c ? b : R(b, c)) : c >= b.childNodes.length ? b.appendChild(a) : b.insertBefore(a, b.childNodes[c]),
                            d
                    }

                    function h(a, b, d) {
                        if (y(a),
                            y(b),
                            c(b) != c(a))
                            throw new L("WRONG_DOCUMENT_ERR");
                        var e = Q(a.startContainer, a.startOffset, b.endContainer, b.endOffset),
                            f = Q(a.endContainer, a.endOffset, b.startContainer, b.startOffset);
                        return d ? 0 >= e && f >= 0 : 0 > e && f > 0
                    }

                    function i(a) {
                        for (var b, d, e, f = c(a.range).createDocumentFragment(); d = a.next();) {
                            if (b = a.isPartiallySelectedSubtree(),
                                d = d.cloneNode(!b),
                                b && (e = a.getSubtreeIterator(),
                                    d.appendChild(i(e)),
                                    e.detach()),
                                10 == d.nodeType)
                                throw new L("HIERARCHY_REQUEST_ERR");
                            f.appendChild(d)
                        }
                        return f
                    }

                    function j(a, b, c) {
                        var d, e;
                        c = c || {
                            stop: !1
                        };
                        for (var f, g; f = a.next();)
                            if (a.isPartiallySelectedSubtree()) {
                                if (b(f) === !1)
                                    return c.stop = !0,
                                        void 0;
                                if (g = a.getSubtreeIterator(),
                                    j(g, b, c),
                                    g.detach(),
                                    c.stop)
                                    return
                            } else
                                for (d = I.createIterator(f); e = d.next();)
                                    if (b(e) === !1)
                                        return c.stop = !0,
                                            void 0
                    }

                    function k(a) {
                        for (var b; a.next();)
                            a.isPartiallySelectedSubtree() ? (b = a.getSubtreeIterator(),
                                k(b),
                                b.detach()) : a.remove()
                    }

                    function l(a) {
                        for (var b, d, e = c(a.range).createDocumentFragment(); b = a.next();) {
                            if (a.isPartiallySelectedSubtree() ? (b = b.cloneNode(!1),
                                    d = a.getSubtreeIterator(),
                                    b.appendChild(l(d)),
                                    d.detach()) : a.remove(),
                                10 == b.nodeType)
                                throw new L("HIERARCHY_REQUEST_ERR");
                            e.appendChild(b)
                        }
                        return e
                    }

                    function m(a, b, c) {
                        var d, e = !(!b || !b.length),
                            f = !!c;
                        e && (d = new RegExp("^(" + b.join("|") + ")$"));
                        var g = [];
                        return j(new o(a, !1), function(b) {
                                if (!(e && !d.test(b.nodeType) || f && !c(b))) {
                                    var h = a.startContainer;
                                    if (b != h || !M(h) || a.startOffset != h.length) {
                                        var i = a.endContainer;
                                        b == i && M(i) && 0 == a.endOffset || g.push(b)
                                    }
                                }
                            }),
                            g
                    }

                    function n(a) {
                        var b = "undefined" == typeof a.getName ? "Range" : a.getName();
                        return "[" + b + "(" + I.inspectNode(a.startContainer) + ":" + a.startOffset + ", " + I.inspectNode(a.endContainer) + ":" + a.endOffset + ")]"
                    }

                    function o(a, b) {
                        if (this.range = a,
                            this.clonePartiallySelectedTextNodes = b, !a.collapsed) {
                            this.sc = a.startContainer,
                                this.so = a.startOffset,
                                this.ec = a.endContainer,
                                this.eo = a.endOffset;
                            var c = a.commonAncestorContainer;
                            this.sc === this.ec && M(this.sc) ? (this.isSingleCharacterDataNode = !0,
                                this._first = this._last = this._next = this.sc) : (this._first = this._next = this.sc !== c || M(this.sc) ? S(this.sc, c, !0) : this.sc.childNodes[this.so],
                                this._last = this.ec !== c || M(this.ec) ? S(this.ec, c, !0) : this.ec.childNodes[this.eo - 1])
                        }
                    }

                    function p(a) {
                        return function(b, c) {
                            for (var d, e = c ? b : b.parentNode; e;) {
                                if (d = e.nodeType,
                                    U(a, d))
                                    return e;
                                e = e.parentNode
                            }
                            return null
                        }
                    }

                    function q(a, b) {
                        if (db(a, b))
                            throw new L("INVALID_NODE_TYPE_ERR")
                    }

                    function r(a, b) {
                        if (!U(b, a.nodeType))
                            throw new L("INVALID_NODE_TYPE_ERR")
                    }

                    function s(a, b) {
                        if (0 > b || b > (M(a) ? a.length : a.childNodes.length))
                            throw new L("INDEX_SIZE_ERR")
                    }

                    function t(a, b) {
                        if (bb(a, !0) !== bb(b, !0))
                            throw new L("WRONG_DOCUMENT_ERR")
                    }

                    function u(a) {
                        if (cb(a, !0))
                            throw new L("NO_MODIFICATION_ALLOWED_ERR")
                    }

                    function v(a, b) {
                        if (!a)
                            throw new L(b)
                    }

                    function w(a, b) {
                        return b <= (M(a) ? a.length : a.childNodes.length)
                    }

                    function x(a) {
                        return !!a.startContainer && !!a.endContainer && !(W && (I.isBrokenNode(a.startContainer) || I.isBrokenNode(a.endContainer))) && V(a.startContainer) == V(a.endContainer) && w(a.startContainer, a.startOffset) && w(a.endContainer, a.endOffset)
                    }

                    function y(a) {
                        if (!x(a))
                            throw new Error("Range error: Range is not valid. This usually happens after DOM mutation. Range: (" + a.inspect() + ")")
                    }

                    function z(a, b) {
                        y(a);
                        var c = a.startContainer,
                            d = a.startOffset,
                            e = a.endContainer,
                            f = a.endOffset,
                            g = c === e;
                        M(e) && f > 0 && f < e.length && R(e, f, b),
                            M(c) && d > 0 && d < c.length && (c = R(c, d, b),
                                g ? (f -= d,
                                    e = c) : e == c.parentNode && f >= N(c) && f++,
                                d = 0),
                            a.setStartAndEnd(c, d, e, f)
                    }

                    function A(a) {
                        y(a);
                        var b = a.commonAncestorContainer.parentNode.cloneNode(!1);
                        return b.appendChild(a.cloneContents()),
                            b.innerHTML
                    }

                    function B(a) {
                        a.START_TO_START = kb,
                            a.START_TO_END = lb,
                            a.END_TO_END = mb,
                            a.END_TO_START = nb,
                            a.NODE_BEFORE = ob,
                            a.NODE_AFTER = pb,
                            a.NODE_BEFORE_AND_AFTER = qb,
                            a.NODE_INSIDE = rb
                    }

                    function C(a) {
                        B(a),
                            B(a.prototype)
                    }

                    function D(a, b) {
                        return function() {
                            y(this);
                            var c, d, e = this.startContainer,
                                g = this.startOffset,
                                h = this.commonAncestorContainer,
                                i = new o(this, !0);
                            e !== h && (c = S(e, h, !0),
                                    d = f(c),
                                    e = d.node,
                                    g = d.offset),
                                j(i, u),
                                i.reset();
                            var k = a(i);
                            return i.detach(),
                                b(this, e, g, e, g),
                                k
                        }
                    }

                    function E(c, d) {
                        function g(a, b) {
                            return function(c) {
                                r(c, Y),
                                    r(V(c), Z);
                                var d = (a ? e : f)(c);
                                (b ? h : i)(this, d.node, d.offset)
                            }
                        }

                        function h(a, b, c) {
                            var e = a.endContainer,
                                f = a.endOffset;
                            (b !== a.startContainer || c !== a.startOffset) && ((V(b) != V(e) || 1 == Q(b, c, e, f)) && (e = b,
                                    f = c),
                                d(a, b, c, e, f))
                        }

                        function i(a, b, c) {
                            var e = a.startContainer,
                                f = a.startOffset;
                            (b !== a.endContainer || c !== a.endOffset) && ((V(b) != V(e) || -1 == Q(b, c, e, f)) && (e = b,
                                    f = c),
                                d(a, e, f, b, c))
                        }
                        var j = function() {};
                        j.prototype = a.rangePrototype,
                            c.prototype = new j,
                            J.extend(c.prototype, {
                                setStart: function(a, b) {
                                    q(a, !0),
                                        s(a, b),
                                        h(this, a, b)
                                },
                                setEnd: function(a, b) {
                                    q(a, !0),
                                        s(a, b),
                                        i(this, a, b)
                                },
                                setStartAndEnd: function() {
                                    var a = arguments,
                                        b = a[0],
                                        c = a[1],
                                        e = b,
                                        f = c;
                                    switch (a.length) {
                                        case 3:
                                            f = a[2];
                                            break;
                                        case 4:
                                            e = a[2],
                                                f = a[3]
                                    }
                                    q(b, !0),
                                        s(b, c),
                                        q(e, !0),
                                        s(e, f),
                                        d(this, b, c, e, f)
                                },
                                setBoundary: function(a, b, c) {
                                    this["set" + (c ? "Start" : "End")](a, b)
                                },
                                setStartBefore: g(!0, !0),
                                setStartAfter: g(!1, !0),
                                setEndBefore: g(!0, !1),
                                setEndAfter: g(!1, !1),
                                collapse: function(a) {
                                    y(this),
                                        a ? d(this, this.startContainer, this.startOffset, this.startContainer, this.startOffset) : d(this, this.endContainer, this.endOffset, this.endContainer, this.endOffset)
                                },
                                selectNodeContents: function(a) {
                                    q(a, !0),
                                        d(this, a, 0, a, T(a))
                                },
                                selectNode: function(a) {
                                    q(a, !1),
                                        r(a, Y);
                                    var b = e(a),
                                        c = f(a);
                                    d(this, b.node, b.offset, c.node, c.offset)
                                },
                                extractContents: D(l, d),
                                deleteContents: D(k, d),
                                canSurroundContents: function() {
                                    y(this),
                                        u(this.startContainer),
                                        u(this.endContainer);
                                    var a = new o(this, !0),
                                        c = a._first && b(a._first, this) || a._last && b(a._last, this);
                                    return a.detach(), !c
                                },
                                splitBoundaries: function() {
                                    z(this)
                                },
                                splitBoundariesPreservingPositions: function(a) {
                                    z(this, a)
                                },
                                normalizeBoundaries: function() {
                                    y(this);
                                    var a, b = this.startContainer,
                                        c = this.startOffset,
                                        e = this.endContainer,
                                        f = this.endOffset,
                                        g = function(a) {
                                            var b = a.nextSibling;
                                            b && b.nodeType == a.nodeType && (e = a,
                                                f = a.length,
                                                a.appendData(b.data),
                                                X(b))
                                        },
                                        h = function(a) {
                                            var d = a.previousSibling;
                                            if (d && d.nodeType == a.nodeType) {
                                                b = a;
                                                var g = a.length;
                                                if (c = d.length,
                                                    a.insertData(0, d.data),
                                                    X(d),
                                                    b == e)
                                                    f += c,
                                                    e = b;
                                                else if (e == a.parentNode) {
                                                    var h = N(a);
                                                    f == h ? (e = a,
                                                        f = g) : f > h && f--
                                                }
                                            }
                                        },
                                        i = !0;
                                    if (M(e))
                                        f == e.length ? g(e) : 0 == f && (a = e.previousSibling,
                                            a && a.nodeType == e.nodeType && (f = a.length,
                                                b == e && (i = !1),
                                                a.appendData(e.data),
                                                X(e),
                                                e = a));
                                    else {
                                        if (f > 0) {
                                            var j = e.childNodes[f - 1];
                                            j && M(j) && g(j)
                                        }
                                        i = !this.collapsed
                                    }
                                    if (i) {
                                        if (M(b))
                                            0 == c ? h(b) : c == b.length && (a = b.nextSibling,
                                                a && a.nodeType == b.nodeType && (e == a && (e = b,
                                                        f += b.length),
                                                    b.appendData(a.data),
                                                    X(a)));
                                        else if (c < b.childNodes.length) {
                                            var k = b.childNodes[c];
                                            k && M(k) && h(k)
                                        }
                                    } else
                                        b = e,
                                        c = f;
                                    d(this, b, c, e, f)
                                },
                                collapseToPoint: function(a, b) {
                                    q(a, !0),
                                        s(a, b),
                                        this.setStartAndEnd(a, b)
                                },
                                parentElement: function() {
                                    y(this);
                                    var a = this.commonAncestorContainer;
                                    return a ? eb(this.commonAncestorContainer, !0) : null
                                }
                            }),
                            C(c)
                    }

                    function F(a) {
                        a.collapsed = a.startContainer === a.endContainer && a.startOffset === a.endOffset,
                            a.commonAncestorContainer = a.collapsed ? a.startContainer : I.getCommonAncestor(a.startContainer, a.endContainer)
                    }

                    function G(a, b, c, d, e) {
                        a.startContainer = b,
                            a.startOffset = c,
                            a.endContainer = d,
                            a.endOffset = e,
                            a.document = I.getDocument(b),
                            F(a)
                    }

                    function H(a) {
                        G(this, a, 0, a, 0)
                    }
                    var I = a.dom,
                        J = a.util,
                        K = I.DomPosition,
                        L = a.DOMException,
                        M = I.isCharacterDataNode,
                        N = I.getNodeIndex,
                        O = I.isOrIsAncestorOf,
                        P = I.getDocument,
                        Q = I.comparePoints,
                        R = I.splitDataNode,
                        S = I.getClosestAncestorIn,
                        T = I.getNodeLength,
                        U = I.arrayContains,
                        V = I.getRootContainer,
                        W = a.features.crashyTextNodes,
                        X = I.removeNode;
                    o.prototype = {
                        _current: null,
                        _next: null,
                        _first: null,
                        _last: null,
                        isSingleCharacterDataNode: !1,
                        reset: function() {
                            this._current = null,
                                this._next = this._first
                        },
                        hasNext: function() {
                            return !!this._next
                        },
                        next: function() {
                            var a = this._current = this._next;
                            return a && (this._next = a !== this._last ? a.nextSibling : null,
                                    M(a) && this.clonePartiallySelectedTextNodes && (a === this.ec && (a = a.cloneNode(!0)).deleteData(this.eo, a.length - this.eo),
                                        this._current === this.sc && (a = a.cloneNode(!0)).deleteData(0, this.so))),
                                a
                        },
                        remove: function() {
                            var a, b, c = this._current;
                            !M(c) || c !== this.sc && c !== this.ec ? c.parentNode && X(c) : (a = c === this.sc ? this.so : 0,
                                b = c === this.ec ? this.eo : c.length,
                                a != b && c.deleteData(a, b - a))
                        },
                        isPartiallySelectedSubtree: function() {
                            var a = this._current;
                            return b(a, this.range)
                        },
                        getSubtreeIterator: function() {
                            var a;
                            if (this.isSingleCharacterDataNode)
                                a = this.range.cloneRange(),
                                a.collapse(!1);
                            else {
                                a = new H(c(this.range));
                                var b = this._current,
                                    d = b,
                                    e = 0,
                                    f = b,
                                    g = T(b);
                                O(b, this.sc) && (d = this.sc,
                                        e = this.so),
                                    O(b, this.ec) && (f = this.ec,
                                        g = this.eo),
                                    G(a, d, e, f, g)
                            }
                            return new o(a, this.clonePartiallySelectedTextNodes)
                        },
                        detach: function() {
                            this.range = this._current = this._next = this._first = this._last = this.sc = this.so = this.ec = this.eo = null
                        }
                    };
                    var Y = [1, 3, 4, 5, 7, 8, 10],
                        Z = [2, 9, 11],
                        $ = [5, 6, 10, 12],
                        _ = [1, 3, 4, 5, 7, 8, 10, 11],
                        ab = [1, 3, 4, 5, 7, 8],
                        bb = p([9, 11]),
                        cb = p($),
                        db = p([6, 10, 12]),
                        eb = p([1]),
                        fb = document.createElement("style"),
                        gb = !1;
                    try {
                        fb.innerHTML = "<b>x</b>",
                            gb = 3 == fb.firstChild.nodeType
                    } catch (hb) {}
                    a.features.htmlParsingConforms = gb;
                    var ib = gb ? function(a) {
                            var b = this.startContainer,
                                c = P(b);
                            if (!b)
                                throw new L("INVALID_STATE_ERR");
                            var d = null;
                            return 1 == b.nodeType ? d = b : M(b) && (d = I.parentElement(b)),
                                d = null === d || "HTML" == d.nodeName && I.isHtmlNamespace(P(d).documentElement) && I.isHtmlNamespace(d) ? c.createElement("body") : d.cloneNode(!1),
                                d.innerHTML = a,
                                I.fragmentFromNodeChildren(d)
                        } : function(a) {
                            var b = c(this),
                                d = b.createElement("body");
                            return d.innerHTML = a,
                                I.fragmentFromNodeChildren(d)
                        },
                        jb = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed", "commonAncestorContainer"],
                        kb = 0,
                        lb = 1,
                        mb = 2,
                        nb = 3,
                        ob = 0,
                        pb = 1,
                        qb = 2,
                        rb = 3;
                    J.extend(a.rangePrototype, {
                            compareBoundaryPoints: function(a, b) {
                                y(this),
                                    t(this.startContainer, b.startContainer);
                                var c, d, e, f, g = a == nb || a == kb ? "start" : "end",
                                    h = a == lb || a == kb ? "start" : "end";
                                return c = this[g + "Container"],
                                    d = this[g + "Offset"],
                                    e = b[h + "Container"],
                                    f = b[h + "Offset"],
                                    Q(c, d, e, f)
                            },
                            insertNode: function(a) {
                                if (y(this),
                                    r(a, _),
                                    u(this.startContainer),
                                    O(a, this.startContainer))
                                    throw new L("HIERARCHY_REQUEST_ERR");
                                var b = g(a, this.startContainer, this.startOffset);
                                this.setStartBefore(b)
                            },
                            cloneContents: function() {
                                y(this);
                                var a, b;
                                if (this.collapsed)
                                    return c(this).createDocumentFragment();
                                if (this.startContainer === this.endContainer && M(this.startContainer))
                                    return a = this.startContainer.cloneNode(!0),
                                        a.data = a.data.slice(this.startOffset, this.endOffset),
                                        b = c(this).createDocumentFragment(),
                                        b.appendChild(a),
                                        b;
                                var d = new o(this, !0);
                                return a = i(d),
                                    d.detach(),
                                    a
                            },
                            canSurroundContents: function() {
                                y(this),
                                    u(this.startContainer),
                                    u(this.endContainer);
                                var a = new o(this, !0),
                                    c = a._first && b(a._first, this) || a._last && b(a._last, this);
                                return a.detach(), !c
                            },
                            surroundContents: function(a) {
                                if (r(a, ab), !this.canSurroundContents())
                                    throw new L("INVALID_STATE_ERR");
                                var b = this.extractContents();
                                if (a.hasChildNodes())
                                    for (; a.lastChild;)
                                        a.removeChild(a.lastChild);
                                g(a, this.startContainer, this.startOffset),
                                    a.appendChild(b),
                                    this.selectNode(a)
                            },
                            cloneRange: function() {
                                y(this);
                                for (var a, b = new H(c(this)), d = jb.length; d--;)
                                    a = jb[d],
                                    b[a] = this[a];
                                return b
                            },
                            toString: function() {
                                y(this);
                                var a = this.startContainer;
                                if (a === this.endContainer && M(a))
                                    return 3 == a.nodeType || 4 == a.nodeType ? a.data.slice(this.startOffset, this.endOffset) : "";
                                var b = [],
                                    c = new o(this, !0);
                                return j(c, function(a) {
                                        (3 == a.nodeType || 4 == a.nodeType) && b.push(a.data)
                                    }),
                                    c.detach(),
                                    b.join("")
                            },
                            compareNode: function(a) {
                                y(this);
                                var b = a.parentNode,
                                    c = N(a);
                                if (!b)
                                    throw new L("NOT_FOUND_ERR");
                                var d = this.comparePoint(b, c),
                                    e = this.comparePoint(b, c + 1);
                                return 0 > d ? e > 0 ? qb : ob : e > 0 ? pb : rb
                            },
                            comparePoint: function(a, b) {
                                return y(this),
                                    v(a, "HIERARCHY_REQUEST_ERR"),
                                    t(a, this.startContainer),
                                    Q(a, b, this.startContainer, this.startOffset) < 0 ? -1 : Q(a, b, this.endContainer, this.endOffset) > 0 ? 1 : 0
                            },
                            createContextualFragment: ib,
                            toHtml: function() {
                                return A(this)
                            },
                            intersectsNode: function(a, b) {
                                if (y(this),
                                    V(a) != d(this))
                                    return !1;
                                var c = a.parentNode,
                                    e = N(a);
                                if (!c)
                                    return !0;
                                var f = Q(c, e, this.endContainer, this.endOffset),
                                    g = Q(c, e + 1, this.startContainer, this.startOffset);
                                return b ? 0 >= f && g >= 0 : 0 > f && g > 0
                            },
                            isPointInRange: function(a, b) {
                                return y(this),
                                    v(a, "HIERARCHY_REQUEST_ERR"),
                                    t(a, this.startContainer),
                                    Q(a, b, this.startContainer, this.startOffset) >= 0 && Q(a, b, this.endContainer, this.endOffset) <= 0
                            },
                            intersectsRange: function(a) {
                                return h(this, a, !1)
                            },
                            intersectsOrTouchesRange: function(a) {
                                return h(this, a, !0)
                            },
                            intersection: function(a) {
                                if (this.intersectsRange(a)) {
                                    var b = Q(this.startContainer, this.startOffset, a.startContainer, a.startOffset),
                                        c = Q(this.endContainer, this.endOffset, a.endContainer, a.endOffset),
                                        d = this.cloneRange();
                                    return -1 == b && d.setStart(a.startContainer, a.startOffset),
                                        1 == c && d.setEnd(a.endContainer, a.endOffset),
                                        d
                                }
                                return null
                            },
                            union: function(a) {
                                if (this.intersectsOrTouchesRange(a)) {
                                    var b = this.cloneRange();
                                    return -1 == Q(a.startContainer, a.startOffset, this.startContainer, this.startOffset) && b.setStart(a.startContainer, a.startOffset),
                                        1 == Q(a.endContainer, a.endOffset, this.endContainer, this.endOffset) && b.setEnd(a.endContainer, a.endOffset),
                                        b
                                }
                                throw new L("Ranges do not intersect")
                            },
                            containsNode: function(a, b) {
                                return b ? this.intersectsNode(a, !1) : this.compareNode(a) == rb
                            },
                            containsNodeContents: function(a) {
                                return this.comparePoint(a, 0) >= 0 && this.comparePoint(a, T(a)) <= 0
                            },
                            containsRange: function(a) {
                                var b = this.intersection(a);
                                return null !== b && a.equals(b)
                            },
                            containsNodeText: function(a) {
                                var b = this.cloneRange();
                                b.selectNode(a);
                                var c = b.getNodes([3]);
                                if (c.length > 0) {
                                    b.setStart(c[0], 0);
                                    var d = c.pop();
                                    return b.setEnd(d, d.length),
                                        this.containsRange(b)
                                }
                                return this.containsNodeContents(a)
                            },
                            getNodes: function(a, b) {
                                return y(this),
                                    m(this, a, b)
                            },
                            getDocument: function() {
                                return c(this)
                            },
                            collapseBefore: function(a) {
                                this.setEndBefore(a),
                                    this.collapse(!1)
                            },
                            collapseAfter: function(a) {
                                this.setStartAfter(a),
                                    this.collapse(!0)
                            },
                            getBookmark: function(b) {
                                var d = c(this),
                                    e = a.createRange(d);
                                b = b || I.getBody(d),
                                    e.selectNodeContents(b);
                                var f = this.intersection(e),
                                    g = 0,
                                    h = 0;
                                return f && (e.setEnd(f.startContainer, f.startOffset),
                                    g = e.toString().length,
                                    h = g + f.toString().length), {
                                    start: g,
                                    end: h,
                                    containerNode: b
                                }
                            },
                            moveToBookmark: function(a) {
                                var b = a.containerNode,
                                    c = 0;
                                this.setStart(b, 0),
                                    this.collapse(!0);
                                for (var d, e, f, g, h = [b], i = !1, j = !1; !j && (d = h.pop());)
                                    if (3 == d.nodeType)
                                        e = c + d.length, !i && a.start >= c && a.start <= e && (this.setStart(d, a.start - c),
                                            i = !0),
                                        i && a.end >= c && a.end <= e && (this.setEnd(d, a.end - c),
                                            j = !0),
                                        c = e;
                                    else
                                        for (g = d.childNodes,
                                            f = g.length; f--;)
                                            h.push(g[f])
                            },
                            getName: function() {
                                return "DomRange"
                            },
                            equals: function(a) {
                                return H.rangesEqual(this, a)
                            },
                            isValid: function() {
                                return x(this)
                            },
                            inspect: function() {
                                return n(this)
                            },
                            detach: function() {}
                        }),
                        E(H, G),
                        J.extend(H, {
                            rangeProperties: jb,
                            RangeIterator: o,
                            copyComparisonConstants: C,
                            createPrototypeRange: E,
                            inspect: n,
                            toHtml: A,
                            getRangeDocument: c,
                            rangesEqual: function(a, b) {
                                return a.startContainer === b.startContainer && a.startOffset === b.startOffset && a.endContainer === b.endContainer && a.endOffset === b.endOffset
                            }
                        }),
                        a.DomRange = H
                }),
                I.createCoreModule("WrappedRange", ["DomRange"], function(a, b) {
                    var c, d, e = a.dom,
                        f = a.util,
                        g = e.DomPosition,
                        h = a.DomRange,
                        i = e.getBody,
                        j = e.getContentDocument,
                        k = e.isCharacterDataNode;
                    if (a.features.implementsDomRange && function() {
                            function d(a) {
                                for (var b, c = m.length; c--;)
                                    b = m[c],
                                    a[b] = a.nativeRange[b];
                                a.collapsed = a.startContainer === a.endContainer && a.startOffset === a.endOffset
                            }

                            function g(a, b, c, d, e) {
                                var f = a.startContainer !== b || a.startOffset != c,
                                    g = a.endContainer !== d || a.endOffset != e,
                                    h = !a.equals(a.nativeRange);
                                (f || g || h) && (a.setEnd(d, e),
                                    a.setStart(b, c))
                            }
                            var k, l, m = h.rangeProperties;
                            c = function(a) {
                                    if (!a)
                                        throw b.createError("WrappedRange: Range must be specified");
                                    this.nativeRange = a,
                                        d(this)
                                },
                                h.createPrototypeRange(c, g),
                                k = c.prototype,
                                k.selectNode = function(a) {
                                    this.nativeRange.selectNode(a),
                                        d(this)
                                },
                                k.cloneContents = function() {
                                    return this.nativeRange.cloneContents()
                                },
                                k.surroundContents = function(a) {
                                    this.nativeRange.surroundContents(a),
                                        d(this)
                                },
                                k.collapse = function(a) {
                                    this.nativeRange.collapse(a),
                                        d(this)
                                },
                                k.cloneRange = function() {
                                    return new c(this.nativeRange.cloneRange())
                                },
                                k.refresh = function() {
                                    d(this)
                                },
                                k.toString = function() {
                                    return this.nativeRange.toString()
                                };
                            var n = document.createTextNode("test");
                            i(document).appendChild(n);
                            var o = document.createRange();
                            o.setStart(n, 0),
                                o.setEnd(n, 0);
                            try {
                                o.setStart(n, 1),
                                    k.setStart = function(a, b) {
                                        this.nativeRange.setStart(a, b),
                                            d(this)
                                    },
                                    k.setEnd = function(a, b) {
                                        this.nativeRange.setEnd(a, b),
                                            d(this)
                                    },
                                    l = function(a) {
                                        return function(b) {
                                            this.nativeRange[a](b),
                                                d(this)
                                        }
                                    }
                            } catch (p) {
                                k.setStart = function(a, b) {
                                        try {
                                            this.nativeRange.setStart(a, b)
                                        } catch (c) {
                                            this.nativeRange.setEnd(a, b),
                                                this.nativeRange.setStart(a, b)
                                        }
                                        d(this)
                                    },
                                    k.setEnd = function(a, b) {
                                        try {
                                            this.nativeRange.setEnd(a, b)
                                        } catch (c) {
                                            this.nativeRange.setStart(a, b),
                                                this.nativeRange.setEnd(a, b)
                                        }
                                        d(this)
                                    },
                                    l = function(a, b) {
                                        return function(c) {
                                            try {
                                                this.nativeRange[a](c)
                                            } catch (e) {
                                                this.nativeRange[b](c),
                                                    this.nativeRange[a](c)
                                            }
                                            d(this)
                                        }
                                    }
                            }
                            k.setStartBefore = l("setStartBefore", "setEndBefore"),
                                k.setStartAfter = l("setStartAfter", "setEndAfter"),
                                k.setEndBefore = l("setEndBefore", "setStartBefore"),
                                k.setEndAfter = l("setEndAfter", "setStartAfter"),
                                k.selectNodeContents = function(a) {
                                    this.setStartAndEnd(a, 0, e.getNodeLength(a))
                                },
                                o.selectNodeContents(n),
                                o.setEnd(n, 3);
                            var q = document.createRange();
                            q.selectNodeContents(n),
                                q.setEnd(n, 4),
                                q.setStart(n, 2),
                                k.compareBoundaryPoints = -1 == o.compareBoundaryPoints(o.START_TO_END, q) && 1 == o.compareBoundaryPoints(o.END_TO_START, q) ? function(a, b) {
                                    return b = b.nativeRange || b,
                                        a == b.START_TO_END ? a = b.END_TO_START : a == b.END_TO_START && (a = b.START_TO_END),
                                        this.nativeRange.compareBoundaryPoints(a, b)
                                } : function(a, b) {
                                    return this.nativeRange.compareBoundaryPoints(a, b.nativeRange || b)
                                };
                            var r = document.createElement("div");
                            r.innerHTML = "123";
                            var s = r.firstChild,
                                t = i(document);
                            t.appendChild(r),
                                o.setStart(s, 1),
                                o.setEnd(s, 2),
                                o.deleteContents(),
                                "13" == s.data && (k.deleteContents = function() {
                                        this.nativeRange.deleteContents(),
                                            d(this)
                                    },
                                    k.extractContents = function() {
                                        var a = this.nativeRange.extractContents();
                                        return d(this),
                                            a
                                    }
                                ),
                                t.removeChild(r),
                                t = null,
                                f.isHostMethod(o, "createContextualFragment") && (k.createContextualFragment = function(a) {
                                    return this.nativeRange.createContextualFragment(a)
                                }),
                                i(document).removeChild(n),
                                k.getName = function() {
                                    return "WrappedRange"
                                },
                                a.WrappedRange = c,
                                a.createNativeRange = function(a) {
                                    return a = j(a, b, "createNativeRange"),
                                        a.createRange()
                                }
                        }(),
                        a.features.implementsTextRange) {
                        var l = function(a) {
                                var b = a.parentElement(),
                                    c = a.duplicate();
                                c.collapse(!0);
                                var d = c.parentElement();
                                c = a.duplicate(),
                                    c.collapse(!1);
                                var f = c.parentElement(),
                                    g = d == f ? d : e.getCommonAncestor(d, f);
                                return g == b ? g : e.getCommonAncestor(b, g)
                            },
                            m = function(a) {
                                return 0 == a.compareEndPoints("StartToEnd", a)
                            },
                            n = function(a, b, c, d, f) {
                                var h = a.duplicate();
                                h.collapse(c);
                                var i = h.parentElement();
                                if (e.isOrIsAncestorOf(b, i) || (i = b), !i.canHaveHTML) {
                                    var j = new g(i.parentNode, e.getNodeIndex(i));
                                    return {
                                        boundaryPosition: j,
                                        nodeInfo: {
                                            nodeIndex: j.offset,
                                            containerElement: j.node
                                        }
                                    }
                                }
                                var l = e.getDocument(i).createElement("span");
                                l.parentNode && e.removeNode(l);
                                for (var m, n, o, p, q, r = c ? "StartToStart" : "StartToEnd", s = f && f.containerElement == i ? f.nodeIndex : 0, t = i.childNodes.length, u = t, v = u;;) {
                                    if (v == t ? i.appendChild(l) : i.insertBefore(l, i.childNodes[v]),
                                        h.moveToElementText(l),
                                        m = h.compareEndPoints(r, a),
                                        0 == m || s == u)
                                        break;
                                    if (-1 == m) {
                                        if (u == s + 1)
                                            break;
                                        s = v
                                    } else
                                        u = u == s + 1 ? s : v;
                                    v = Math.floor((s + u) / 2),
                                        i.removeChild(l)
                                }
                                if (q = l.nextSibling, -1 == m && q && k(q)) {
                                    h.setEndPoint(c ? "EndToStart" : "EndToEnd", a);
                                    var w;
                                    if (/[\r\n]/.test(q.data)) {
                                        var x = h.duplicate(),
                                            y = x.text.replace(/\r\n/g, "\r").length;
                                        for (w = x.moveStart("character", y); - 1 == (m = x.compareEndPoints("StartToEnd", x));)
                                            w++,
                                            x.moveStart("character", 1)
                                    } else
                                        w = h.text.length;
                                    p = new g(q, w)
                                } else
                                    n = (d || !c) && l.previousSibling,
                                    o = (d || c) && l.nextSibling,
                                    p = o && k(o) ? new g(o, 0) : n && k(n) ? new g(n, n.data.length) : new g(i, e.getNodeIndex(l));
                                return e.removeNode(l), {
                                    boundaryPosition: p,
                                    nodeInfo: {
                                        nodeIndex: v,
                                        containerElement: i
                                    }
                                }
                            },
                            o = function(a, b) {
                                var c, d, f, g, h = a.offset,
                                    j = e.getDocument(a.node),
                                    l = i(j).createTextRange(),
                                    m = k(a.node);
                                return m ? (c = a.node,
                                        d = c.parentNode) : (g = a.node.childNodes,
                                        c = h < g.length ? g[h] : null,
                                        d = a.node),
                                    f = j.createElement("span"),
                                    f.innerHTML = "&#feff;",
                                    c ? d.insertBefore(f, c) : d.appendChild(f),
                                    l.moveToElementText(f),
                                    l.collapse(!b),
                                    d.removeChild(f),
                                    m && l[b ? "moveStart" : "moveEnd"]("character", h),
                                    l
                            };
                        d = function(a) {
                                this.textRange = a,
                                    this.refresh()
                            },
                            d.prototype = new h(document),
                            d.prototype.refresh = function() {
                                var a, b, c, d = l(this.textRange);
                                m(this.textRange) ? b = a = n(this.textRange, d, !0, !0).boundaryPosition : (c = n(this.textRange, d, !0, !1),
                                        a = c.boundaryPosition,
                                        b = n(this.textRange, d, !1, !1, c.nodeInfo).boundaryPosition),
                                    this.setStart(a.node, a.offset),
                                    this.setEnd(b.node, b.offset)
                            },
                            d.prototype.getName = function() {
                                return "WrappedTextRange"
                            },
                            h.copyComparisonConstants(d);
                        var p = function(a) {
                            if (a.collapsed)
                                return o(new g(a.startContainer, a.startOffset), !0);
                            var b = o(new g(a.startContainer, a.startOffset), !0),
                                c = o(new g(a.endContainer, a.endOffset), !1),
                                d = i(h.getRangeDocument(a)).createTextRange();
                            return d.setEndPoint("StartToStart", b),
                                d.setEndPoint("EndToEnd", c),
                                d
                        };
                        if (d.rangeToTextRange = p,
                            d.prototype.toTextRange = function() {
                                return p(this)
                            },
                            a.WrappedTextRange = d, !a.features.implementsDomRange || a.config.preferTextRange) {
                            var q = function(a) {
                                return a("return this;")()
                            }(Function);
                            "undefined" == typeof q.Range && (q.Range = d),
                                a.createNativeRange = function(a) {
                                    return a = j(a, b, "createNativeRange"),
                                        i(a).createTextRange()
                                },
                                a.WrappedRange = d
                        }
                    }
                    a.createRange = function(c) {
                            return c = j(c, b, "createRange"),
                                new a.WrappedRange(a.createNativeRange(c))
                        },
                        a.createRangyRange = function(a) {
                            return a = j(a, b, "createRangyRange"),
                                new h(a)
                        },
                        f.createAliasForDeprecatedMethod(a, "createIframeRange", "createRange"),
                        f.createAliasForDeprecatedMethod(a, "createIframeRangyRange", "createRangyRange"),
                        a.addShimListener(function(b) {
                            var c = b.document;
                            "undefined" == typeof c.createRange && (c.createRange = function() {
                                    return a.createRange(c)
                                }),
                                c = b = null
                        })
                }),
                I.createCoreModule("WrappedSelection", ["DomRange", "WrappedRange"], function(a, b) {
                    function c(a) {
                        return "string" == typeof a ? /^backward(s)?$/i.test(a) : !!a
                    }

                    function d(a, c) {
                        if (a) {
                            if (C.isWindow(a))
                                return a;
                            if (a instanceof r)
                                return a.win;
                            var d = C.getContentDocument(a, b, c);
                            return C.getWindow(d)
                        }
                        return window
                    }

                    function e(a) {
                        return d(a, "getWinSelection").getSelection()
                    }

                    function f(a) {
                        return d(a, "getDocSelection").document.selection
                    }

                    function g(a) {
                        var b = !1;
                        return a.anchorNode && (b = 1 == C.comparePoints(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)),
                            b
                    }

                    function h(a, b, c) {
                        var d = c ? "end" : "start",
                            e = c ? "start" : "end";
                        a.anchorNode = b[d + "Container"],
                            a.anchorOffset = b[d + "Offset"],
                            a.focusNode = b[e + "Container"],
                            a.focusOffset = b[e + "Offset"]
                    }

                    function i(a) {
                        var b = a.nativeSelection;
                        a.anchorNode = b.anchorNode,
                            a.anchorOffset = b.anchorOffset,
                            a.focusNode = b.focusNode,
                            a.focusOffset = b.focusOffset
                    }

                    function j(a) {
                        a.anchorNode = a.focusNode = null,
                            a.anchorOffset = a.focusOffset = 0,
                            a.rangeCount = 0,
                            a.isCollapsed = !0,
                            a._ranges.length = 0
                    }

                    function k(b) {
                        var c;
                        return b instanceof F ? (c = a.createNativeRange(b.getDocument()),
                                c.setEnd(b.endContainer, b.endOffset),
                                c.setStart(b.startContainer, b.startOffset)) : b instanceof G ? c = b.nativeRange : J.implementsDomRange && b instanceof C.getWindow(b.startContainer).Range && (c = b),
                            c
                    }

                    function l(a) {
                        if (!a.length || 1 != a[0].nodeType)
                            return !1;
                        for (var b = 1, c = a.length; c > b; ++b)
                            if (!C.isAncestorOf(a[0], a[b]))
                                return !1;
                        return !0
                    }

                    function m(a) {
                        var c = a.getNodes();
                        if (!l(c))
                            throw b.createError("getSingleElementFromRange: range " + a.inspect() + " did not consist of a single element");
                        return c[0]
                    }

                    function n(a) {
                        return !!a && "undefined" != typeof a.text
                    }

                    function o(a, b) {
                        var c = new G(b);
                        a._ranges = [c],
                            h(a, c, !1),
                            a.rangeCount = 1,
                            a.isCollapsed = c.collapsed
                    }

                    function p(b) {
                        if (b._ranges.length = 0,
                            "None" == b.docSelection.type)
                            j(b);
                        else {
                            var c = b.docSelection.createRange();
                            if (n(c))
                                o(b, c);
                            else {
                                b.rangeCount = c.length;
                                for (var d, e = L(c.item(0)), f = 0; f < b.rangeCount; ++f)
                                    d = a.createRange(e),
                                    d.selectNode(c.item(f)),
                                    b._ranges.push(d);
                                b.isCollapsed = 1 == b.rangeCount && b._ranges[0].collapsed,
                                    h(b, b._ranges[b.rangeCount - 1], !1)
                            }
                        }
                    }

                    function q(a, c) {
                        for (var d = a.docSelection.createRange(), e = m(c), f = L(d.item(0)), g = M(f).createControlRange(), h = 0, i = d.length; i > h; ++h)
                            g.add(d.item(h));
                        try {
                            g.add(e)
                        } catch (j) {
                            throw b.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")
                        }
                        g.select(),
                            p(a)
                    }

                    function r(a, b, c) {
                        this.nativeSelection = a,
                            this.docSelection = b,
                            this._ranges = [],
                            this.win = c,
                            this.refresh()
                    }

                    function s(a) {
                        a.win = a.anchorNode = a.focusNode = a._ranges = null,
                            a.rangeCount = a.anchorOffset = a.focusOffset = 0,
                            a.detached = !0
                    }

                    function t(a, b) {
                        for (var c, d, e = bb.length; e--;)
                            if (c = bb[e],
                                d = c.selection,
                                "deleteAll" == b)
                                s(d);
                            else if (c.win == a)
                            return "delete" == b ? (bb.splice(e, 1), !0) : d;
                        return "deleteAll" == b && (bb.length = 0),
                            null
                    }

                    function u(a, c) {
                        for (var d, e = L(c[0].startContainer), f = M(e).createControlRange(), g = 0, h = c.length; h > g; ++g) {
                            d = m(c[g]);
                            try {
                                f.add(d)
                            } catch (i) {
                                throw b.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)")
                            }
                        }
                        f.select(),
                            p(a)
                    }

                    function v(a, b) {
                        if (a.win.document != L(b))
                            throw new H("WRONG_DOCUMENT_ERR")
                    }

                    function w(b) {
                        return function(c, d) {
                            var e;
                            this.rangeCount ? (e = this.getRangeAt(0),
                                    e["set" + (b ? "Start" : "End")](c, d)) : (e = a.createRange(this.win.document),
                                    e.setStartAndEnd(c, d)),
                                this.setSingleRange(e, this.isBackward())
                        }
                    }

                    function x(a) {
                        var b = [],
                            c = new I(a.anchorNode, a.anchorOffset),
                            d = new I(a.focusNode, a.focusOffset),
                            e = "function" == typeof a.getName ? a.getName() : "Selection";
                        if ("undefined" != typeof a.rangeCount)
                            for (var f = 0, g = a.rangeCount; g > f; ++f)
                                b[f] = F.inspect(a.getRangeAt(f));
                        return "[" + e + "(Ranges: " + b.join(", ") + ")(anchor: " + c.inspect() + ", focus: " + d.inspect() + "]"
                    }
                    a.config.checkSelectionRanges = !0;
                    var y, z, A = "boolean",
                        B = "number",
                        C = a.dom,
                        D = a.util,
                        E = D.isHostMethod,
                        F = a.DomRange,
                        G = a.WrappedRange,
                        H = a.DOMException,
                        I = C.DomPosition,
                        J = a.features,
                        K = "Control",
                        L = C.getDocument,
                        M = C.getBody,
                        N = F.rangesEqual,
                        O = E(window, "getSelection"),
                        P = D.isHostObject(document, "selection");
                    J.implementsWinGetSelection = O,
                        J.implementsDocSelection = P;
                    var Q = P && (!O || a.config.preferTextRange);
                    if (Q)
                        y = f,
                        a.isSelectionValid = function(a) {
                            var b = d(a, "isSelectionValid").document,
                                c = b.selection;
                            return "None" != c.type || L(c.createRange().parentElement()) == b
                        };
                    else {
                        if (!O)
                            return b.fail("Neither document.selection or window.getSelection() detected."), !1;
                        y = e,
                            a.isSelectionValid = function() {
                                return !0
                            }
                    }
                    a.getNativeSelection = y;
                    var R = y();
                    if (!R)
                        return b.fail("Native selection was null (possibly issue 138?)"), !1;
                    var S = a.createNativeRange(document),
                        T = M(document),
                        U = D.areHostProperties(R, ["anchorNode", "focusNode", "anchorOffset", "focusOffset"]);
                    J.selectionHasAnchorAndFocus = U;
                    var V = E(R, "extend");
                    J.selectionHasExtend = V;
                    var W = typeof R.rangeCount == B;
                    J.selectionHasRangeCount = W;
                    var X = /firefox/i.test(navigator.userAgent) ? !0 : !1,
                        Y = !0,
                        Z = V ? function(b, c) {
                            var d = F.getRangeDocument(c),
                                e = a.createRange(d);
                            e.collapseToPoint(c.endContainer, c.endOffset),
                                b.addRange(k(e)),
                                b.extend(c.startContainer, c.startOffset)
                        } : null;
                    J.selectionSupportsMultipleRanges = X,
                        J.collapsedNonEditableSelectionsSupported = Y;
                    var $, _ = !1;
                    T && E(T, "createControlRange") && ($ = T.createControlRange(),
                            D.areHostProperties($, ["item", "add"]) && (_ = !0)),
                        J.implementsControlRange = _,
                        z = U ? function(a) {
                            return a.anchorNode === a.focusNode && a.anchorOffset === a.focusOffset
                        } : function(a) {
                            return a.rangeCount ? a.getRangeAt(a.rangeCount - 1).collapsed : !1
                        };
                    var ab;
                    E(R, "getRangeAt") ? ab = function(a, b) {
                            try {
                                return a.getRangeAt(b)
                            } catch (c) {
                                return null
                            }
                        } : U && (ab = function(b) {
                            var c = L(b.anchorNode),
                                d = a.createRange(c);
                            return d.setStartAndEnd(b.anchorNode, b.anchorOffset, b.focusNode, b.focusOffset),
                                d.collapsed !== this.isCollapsed && d.setStartAndEnd(b.focusNode, b.focusOffset, b.anchorNode, b.anchorOffset),
                                d
                        }),
                        r.prototype = a.selectionPrototype;
                    var bb = [],
                        cb = function(a) {
                            if (a && a instanceof r)
                                return a.refresh(),
                                    a;
                            a = d(a, "getNativeSelection");
                            var b = t(a),
                                c = y(a),
                                e = P ? f(a) : null;
                            return b ? (b.nativeSelection = c,
                                    b.docSelection = e,
                                    b.refresh()) : (b = new r(c, e, a),
                                    bb.push({
                                        win: a,
                                        selection: b
                                    })),
                                b
                        };
                    a.getSelection = cb,
                        D.createAliasForDeprecatedMethod(a, "getIframeSelection", "getSelection");
                    var db = r.prototype;
                    if (!Q && U && D.areHostMethods(R, ["removeAllRanges", "addRange"])) {
                        db.removeAllRanges = function() {
                            this.nativeSelection.removeAllRanges(),
                                j(this)
                        };
                        var eb = function(a, b) {
                            Z(a.nativeSelection, b),
                                a.refresh()
                        };
                        db.addRange = W ? function(b, d) {
                                if (_ && P && this.docSelection.type == K)
                                    q(this, b);
                                else if (c(d) && V)
                                    eb(this, b);
                                else {
                                    var e;
                                    X ? e = this.rangeCount : (this.removeAllRanges(),
                                        e = 0);
                                    var f = k(b).cloneRange();
                                    try {
                                        this.nativeSelection.addRange(f)
                                    } catch (g) {}
                                    if (this.rangeCount = this.nativeSelection.rangeCount,
                                        this.rangeCount == e + 1) {
                                        if (a.config.checkSelectionRanges) {
                                            var i = ab(this.nativeSelection, this.rangeCount - 1);
                                            i && !N(i, b) && (b = new G(i))
                                        }
                                        this._ranges[this.rangeCount - 1] = b,
                                            h(this, b, hb(this.nativeSelection)),
                                            this.isCollapsed = z(this)
                                    } else
                                        this.refresh()
                                }
                            } : function(a, b) {
                                c(b) && V ? eb(this, a) : (this.nativeSelection.addRange(k(a)),
                                    this.refresh())
                            },
                            db.setRanges = function(a) {
                                if (_ && P && a.length > 1)
                                    u(this, a);
                                else {
                                    this.removeAllRanges();
                                    for (var b = 0, c = a.length; c > b; ++b)
                                        this.addRange(a[b])
                                }
                            }
                    } else {
                        if (!(E(R, "empty") && E(S, "select") && _ && Q))
                            return b.fail("No means of selecting a Range or TextRange was found"), !1;
                        db.removeAllRanges = function() {
                                try {
                                    if (this.docSelection.empty(),
                                        "None" != this.docSelection.type) {
                                        var a;
                                        if (this.anchorNode)
                                            a = L(this.anchorNode);
                                        else if (this.docSelection.type == K) {
                                            var b = this.docSelection.createRange();
                                            b.length && (a = L(b.item(0)))
                                        }
                                        if (a) {
                                            var c = M(a).createTextRange();
                                            c.select(),
                                                this.docSelection.empty()
                                        }
                                    }
                                } catch (d) {}
                                j(this)
                            },
                            db.addRange = function(b) {
                                this.docSelection.type == K ? q(this, b) : (a.WrappedTextRange.rangeToTextRange(b).select(),
                                    this._ranges[0] = b,
                                    this.rangeCount = 1,
                                    this.isCollapsed = this._ranges[0].collapsed,
                                    h(this, b, !1))
                            },
                            db.setRanges = function(a) {
                                this.removeAllRanges();
                                var b = a.length;
                                b > 1 ? u(this, a) : b && this.addRange(a[0])
                            }
                    }
                    db.getRangeAt = function(a) {
                        if (0 > a || a >= this.rangeCount)
                            throw new H("INDEX_SIZE_ERR");
                        return this._ranges[a].cloneRange()
                    };
                    var fb;
                    if (Q)
                        fb = function(b) {
                            var c;
                            a.isSelectionValid(b.win) ? c = b.docSelection.createRange() : (c = M(b.win.document).createTextRange(),
                                    c.collapse(!0)),
                                b.docSelection.type == K ? p(b) : n(c) ? o(b, c) : j(b)
                        };
                    else if (E(R, "getRangeAt") && typeof R.rangeCount == B)
                        fb = function(b) {
                            if (_ && P && b.docSelection.type == K)
                                p(b);
                            else if (b._ranges.length = b.rangeCount = b.nativeSelection.rangeCount,
                                b.rangeCount) {
                                for (var c = 0, d = b.rangeCount; d > c; ++c)
                                    b._ranges[c] = new a.WrappedRange(b.nativeSelection.getRangeAt(c));
                                h(b, b._ranges[b.rangeCount - 1], hb(b.nativeSelection)),
                                    b.isCollapsed = z(b)
                            } else
                                j(b)
                        };
                    else {
                        if (!U || typeof R.isCollapsed != A || typeof S.collapsed != A || !J.implementsDomRange)
                            return b.fail("No means of obtaining a Range or TextRange from the user's selection was found"), !1;
                        fb = function(a) {
                            var b, c = a.nativeSelection;
                            c.anchorNode ? (b = ab(c, 0),
                                a._ranges = [b],
                                a.rangeCount = 1,
                                i(a),
                                a.isCollapsed = z(a)) : j(a)
                        }
                    }
                    db.refresh = function(a) {
                        var b = a ? this._ranges.slice(0) : null,
                            c = this.anchorNode,
                            d = this.anchorOffset;
                        if (fb(this),
                            a) {
                            var e = b.length;
                            if (e != this._ranges.length)
                                return !0;
                            if (this.anchorNode != c || this.anchorOffset != d)
                                return !0;
                            for (; e--;)
                                if (!N(b[e], this._ranges[e]))
                                    return !0;
                            return !1
                        }
                    };
                    var gb = function(a, b) {
                        var c = a.getAllRanges();
                        a.removeAllRanges();
                        for (var d = 0, e = c.length; e > d; ++d)
                            N(b, c[d]) || a.addRange(c[d]);
                        a.rangeCount || j(a)
                    };
                    db.removeRange = _ && P ? function(a) {
                        if (this.docSelection.type == K) {
                            for (var b, c = this.docSelection.createRange(), d = m(a), e = L(c.item(0)), f = M(e).createControlRange(), g = !1, h = 0, i = c.length; i > h; ++h)
                                b = c.item(h),
                                b !== d || g ? f.add(c.item(h)) : g = !0;
                            f.select(),
                                p(this)
                        } else
                            gb(this, a)
                    } : function(a) {
                        gb(this, a)
                    };
                    var hb;
                    !Q && U && J.implementsDomRange ? (hb = g,
                            db.isBackward = function() {
                                return hb(this)
                            }
                        ) : hb = db.isBackward = function() {
                            return !1
                        },
                        db.isBackwards = db.isBackward,
                        db.toString = function() {
                            for (var a = [], b = 0, c = this.rangeCount; c > b; ++b)
                                a[b] = "" + this._ranges[b];
                            return a.join("")
                        },
                        db.collapse = function(b, c) {
                            v(this, b);
                            var d = a.createRange(b);
                            d.collapseToPoint(b, c),
                                this.setSingleRange(d),
                                this.isCollapsed = !0
                        },
                        db.collapseToStart = function() {
                            if (!this.rangeCount)
                                throw new H("INVALID_STATE_ERR");
                            var a = this._ranges[0];
                            this.collapse(a.startContainer, a.startOffset)
                        },
                        db.collapseToEnd = function() {
                            if (!this.rangeCount)
                                throw new H("INVALID_STATE_ERR");
                            var a = this._ranges[this.rangeCount - 1];
                            this.collapse(a.endContainer, a.endOffset)
                        },
                        db.selectAllChildren = function(b) {
                            v(this, b);
                            var c = a.createRange(b);
                            c.selectNodeContents(b),
                                this.setSingleRange(c)
                        },
                        db.deleteFromDocument = function() {
                            if (_ && P && this.docSelection.type == K) {
                                for (var a, b = this.docSelection.createRange(); b.length;)
                                    a = b.item(0),
                                    b.remove(a),
                                    C.removeNode(a);
                                this.refresh()
                            } else if (this.rangeCount) {
                                var c = this.getAllRanges();
                                if (c.length) {
                                    this.removeAllRanges();
                                    for (var d = 0, e = c.length; e > d; ++d)
                                        c[d].deleteContents();
                                    this.addRange(c[e - 1])
                                }
                            }
                        },
                        db.eachRange = function(a, b) {
                            for (var c = 0, d = this._ranges.length; d > c; ++c)
                                if (a(this.getRangeAt(c)))
                                    return b
                        },
                        db.getAllRanges = function() {
                            var a = [];
                            return this.eachRange(function(b) {
                                    a.push(b)
                                }),
                                a
                        },
                        db.setSingleRange = function(a, b) {
                            this.removeAllRanges(),
                                this.addRange(a, b)
                        },
                        db.callMethodOnEachRange = function(a, b) {
                            var c = [];
                            return this.eachRange(function(d) {
                                    c.push(d[a].apply(d, b || []))
                                }),
                                c
                        },
                        db.setStart = w(!0),
                        db.setEnd = w(!1),
                        a.rangePrototype.select = function(a) {
                            cb(this.getDocument()).setSingleRange(this, a)
                        },
                        db.changeEachRange = function(a) {
                            var b = [],
                                c = this.isBackward();
                            this.eachRange(function(c) {
                                    a(c),
                                        b.push(c)
                                }),
                                this.removeAllRanges(),
                                c && 1 == b.length ? this.addRange(b[0], "backward") : this.setRanges(b)
                        },
                        db.containsNode = function(a, b) {
                            return this.eachRange(function(c) {
                                return c.containsNode(a, b)
                            }, !0) || !1
                        },
                        db.getBookmark = function(a) {
                            return {
                                backward: this.isBackward(),
                                rangeBookmarks: this.callMethodOnEachRange("getBookmark", [a])
                            }
                        },
                        db.moveToBookmark = function(b) {
                            for (var c, d, e = [], f = 0; c = b.rangeBookmarks[f++];)
                                d = a.createRange(this.win),
                                d.moveToBookmark(c),
                                e.push(d);
                            b.backward ? this.setSingleRange(e[0], "backward") : this.setRanges(e)
                        },
                        db.saveRanges = function() {
                            return {
                                backward: this.isBackward(),
                                ranges: this.callMethodOnEachRange("cloneRange")
                            }
                        },
                        db.restoreRanges = function(a) {
                            this.removeAllRanges();
                            for (var b, c = 0; b = a.ranges[c]; ++c)
                                this.addRange(b, a.backward && 0 == c)
                        },
                        db.toHtml = function() {
                            var a = [];
                            return this.eachRange(function(b) {
                                    a.push(F.toHtml(b))
                                }),
                                a.join("")
                        },
                        J.implementsTextRange && (db.getNativeTextRange = function() {
                            var c;
                            if (c = this.docSelection) {
                                var d = c.createRange();
                                if (n(d))
                                    return d;
                                throw b.createError("getNativeTextRange: selection is a control selection")
                            }
                            if (this.rangeCount > 0)
                                return a.WrappedTextRange.rangeToTextRange(this.getRangeAt(0));
                            throw b.createError("getNativeTextRange: selection contains no range")
                        }),
                        db.getName = function() {
                            return "WrappedSelection"
                        },
                        db.inspect = function() {
                            return x(this)
                        },
                        db.detach = function() {
                            t(this.win, "delete"),
                                s(this)
                        },
                        r.detachAll = function() {
                            t(null, "deleteAll")
                        },
                        r.inspect = x,
                        r.isDirectionBackward = c,
                        a.Selection = r,
                        a.selectionPrototype = db,
                        a.addShimListener(function(a) {
                            "undefined" == typeof a.getSelection && (a.getSelection = function() {
                                    return cb(a)
                                }),
                                a = null
                        })
                });
            var N = !1,
                O = function() {
                    N || (N = !0, !I.initialized && I.config.autoInitialize && m())
                };
            G && ("complete" == document.readyState ? O() : (b(document, "addEventListener") && document.addEventListener("DOMContentLoaded", O, !1),
                    K(window, "load", O))),
                a.rangy = I
        }(GIELLA || this),
        function(a) {
            return a.createModule("SaveRestore", ["WrappedSelection"], function(a, b) {
                    function c(a, b) {
                        return (b || document).getElementById(a)
                    }

                    function d(a, b) {
                        var c, d = "selectionBoundary_" + +new Date + "_" + ("" + Math.random()).slice(2),
                            e = o.getDocument(a.startContainer),
                            f = a.cloneRange();
                        return f.collapse(b),
                            c = e.createElement("span"),
                            c.id = d,
                            c.style.lineHeight = "0",
                            c.style.display = "none",
                            c.className = "rangySelectionBoundary",
                            c.appendChild(e.createTextNode(r)),
                            f.insertNode(c),
                            c
                    }

                    function e(a, d, e, f) {
                        var g = c(e, a);
                        g ? (d[f ? "setStartBefore" : "setEndBefore"](g),
                            p(g)) : b.warn("Marker element has been removed. Cannot restore selection.")
                    }

                    function f(a, b) {
                        return b.compareBoundaryPoints(a.START_TO_START, a)
                    }

                    function g(b, c) {
                        var e, f, g = a.DomRange.getRangeDocument(b),
                            h = b.toString(),
                            i = q(c);
                        return b.collapsed ? (f = d(b, !1), {
                            document: g,
                            markerId: f.id,
                            collapsed: !0
                        }) : (f = d(b, !1),
                            e = d(b, !0), {
                                document: g,
                                startMarkerId: e.id,
                                endMarkerId: f.id,
                                collapsed: !1,
                                backward: i,
                                toString: function() {
                                    return "original text: '" + h + "', new text: '" + b.toString() + "'"
                                }
                            })
                    }

                    function h(d, f) {
                        var g = d.document;
                        "undefined" == typeof f && (f = !0);
                        var h = a.createRange(g);
                        if (d.collapsed) {
                            var i = c(d.markerId, g);
                            if (i) {
                                i.style.display = "inline";
                                var j = i.previousSibling;
                                j && 3 == j.nodeType ? (p(i),
                                    h.collapseToPoint(j, j.length)) : (h.collapseBefore(i),
                                    p(i))
                            } else
                                b.warn("Marker element has been removed. Cannot restore selection.")
                        } else
                            e(g, h, d.startMarkerId, !0),
                            e(g, h, d.endMarkerId, !1);
                        return f && h.normalizeBoundaries(),
                            h
                    }

                    function i(b, d) {
                        var e, h, i = [],
                            j = q(d);
                        b = b.slice(0),
                            b.sort(f);
                        for (var k = 0, l = b.length; l > k; ++k)
                            i[k] = g(b[k], j);
                        for (k = l - 1; k >= 0; --k)
                            e = b[k],
                            h = a.DomRange.getRangeDocument(e),
                            e.collapsed ? e.collapseAfter(c(i[k].markerId, h)) : (e.setEndBefore(c(i[k].endMarkerId, h)),
                                e.setStartAfter(c(i[k].startMarkerId, h)));
                        return i
                    }

                    function j(c) {
                        if (!a.isSelectionValid(c))
                            return b.warn("Cannot save selection. This usually happens when the selection is collapsed and the selection document has lost focus."),
                                null;
                        var d = a.getSelection(c),
                            e = d.getAllRanges(),
                            f = 1 == e.length && d.isBackward(),
                            g = i(e, f);
                        return f ? d.setSingleRange(e[0], f) : d.setRanges(e), {
                            win: c,
                            rangeInfos: g,
                            restored: !1
                        }
                    }

                    function k(a) {
                        for (var b = [], c = a.length, d = c - 1; d >= 0; d--)
                            b[d] = h(a[d], !0);
                        return b
                    }

                    function l(b, c) {
                        if (!b.restored) {
                            var d = b.rangeInfos,
                                e = a.getSelection(b.win),
                                f = k(d),
                                g = d.length;
                            1 == g && c && a.features.selectionHasExtend && d[0].backward ? (e.removeAllRanges(),
                                    e.addRange(f[0], !0)) : e.setRanges(f),
                                b.restored = !0
                        }
                    }

                    function m(a, b) {
                        var d = c(b, a);
                        d && p(d)
                    }

                    function n(a) {
                        for (var b, c = a.rangeInfos, d = 0, e = c.length; e > d; ++d)
                            b = c[d],
                            b.collapsed ? m(a.doc, b.markerId) : (m(a.doc, b.startMarkerId),
                                m(a.doc, b.endMarkerId))
                    }
                    var o = a.dom,
                        p = o.removeNode,
                        q = a.Selection.isDirectionBackward,
                        r = "﻿";
                    a.util.extend(a, {
                        saveRange: g,
                        restoreRange: h,
                        saveRanges: i,
                        restoreRanges: k,
                        saveSelection: j,
                        restoreSelection: l,
                        removeMarkerElement: m,
                        removeMarkers: n
                    })
                }),
                a
        }(GIELLA.rangy || this.rangy),
        function(a) {
            return a.createModule("TextRange", ["WrappedSelection"], function(a, b) {
                    function c(a, b) {
                        function c(a, b, c) {
                            h.push({
                                start: a,
                                end: b,
                                isWord: c
                            })
                        }
                        for (var d, e, f, g = a.join(""), h = [], i = 0; d = b.wordRegex.exec(g);) {
                            if (e = d.index,
                                f = e + d[0].length,
                                e > i && c(i, e, !1),
                                b.includeTrailingSpace)
                                for (; $.test(a[f]);)
                                    ++f;
                            c(e, f, !0),
                                i = f
                        }
                        return i < a.length && c(i, a.length, !1),
                            h
                    }

                    function d(a, b) {
                        for (var c = a.slice(b.start, b.end), d = {
                                isWord: b.isWord,
                                chars: c,
                                toString: function() {
                                    return c.join("")
                                }
                            }, e = 0, f = c.length; f > e; ++e)
                            c[e].token = d;
                        return d
                    }

                    function e(a, b, c) {
                        for (var e, f = c(a, b), g = [], h = 0; e = f[h++];)
                            g.push(d(a, e));
                        return g
                    }

                    function f(a) {
                        var b = a || "",
                            c = "string" == typeof b ? b.split("") : b;
                        return c.sort(function(a, b) {
                                return a.charCodeAt(0) - b.charCodeAt(0)
                            }),
                            c.join("").replace(/(.)\1+/g, "$1")
                    }

                    function g(a) {
                        var b, c;
                        return a ? (b = a.language || _,
                            c = {},
                            U(c, hb[b] || hb[_]),
                            U(c, a),
                            c) : hb[_]
                    }

                    function h(a, b) {
                        var c = V(a, b);
                        return b.hasOwnProperty("wordOptions") && (c.wordOptions = g(c.wordOptions)),
                            b.hasOwnProperty("characterOptions") && (c.characterOptions = V(c.characterOptions, fb)),
                            c
                    }

                    function i(a, b) {
                        var c = mb(a, "display", b),
                            d = a.tagName.toLowerCase();
                        return "block" == c && bb && nb.hasOwnProperty(d) ? nb[d] : c
                    }

                    function j(a) {
                        for (var b = o(a), c = 0, d = b.length; d > c; ++c)
                            if (1 == b[c].nodeType && "none" == i(b[c]))
                                return !0;
                        return !1
                    }

                    function k(a) {
                        var b;
                        return 3 == a.nodeType && (b = a.parentNode) && "hidden" == mb(b, "visibility")
                    }

                    function l(a) {
                        return a && (1 == a.nodeType && !/^(inline(-block|-table)?|none)$/.test(i(a)) || 9 == a.nodeType || 11 == a.nodeType)
                    }

                    function m(a) {
                        return S.isCharacterDataNode(a) || !/^(area|base|basefont|br|col|frame|hr|img|input|isindex|link|meta|param)$/i.test(a.nodeName)
                    }

                    function n(a) {
                        for (var b = []; a.parentNode;)
                            b.unshift(a.parentNode),
                            a = a.parentNode;
                        return b
                    }

                    function o(a) {
                        return n(a).concat([a])
                    }

                    function p(a) {
                        for (; a && !a.nextSibling;)
                            a = a.parentNode;
                        return a ? a.nextSibling : null
                    }

                    function q(a, b) {
                        return !b && a.hasChildNodes() ? a.firstChild : p(a)
                    }

                    function r(a) {
                        var b = a.previousSibling;
                        if (b) {
                            for (a = b; a.hasChildNodes();)
                                a = a.lastChild;
                            return a
                        }
                        var c = a.parentNode;
                        return c && 1 == c.nodeType ? c : null
                    }

                    function s(a) {
                        if (!a || 3 != a.nodeType)
                            return !1;
                        var b = a.data;
                        if ("" === b)
                            return !0;
                        var c = a.parentNode;
                        if (!c || 1 != c.nodeType)
                            return !1;
                        var d = mb(a.parentNode, "whiteSpace");
                        return /^[\t\n\r ]+$/.test(b) && /^(normal|nowrap)$/.test(d) || /^[\t\r ]+$/.test(b) && "pre-line" == d
                    }

                    function t(a) {
                        if ("" === a.data)
                            return !0;
                        if (!s(a))
                            return !1;
                        var b = a.parentNode;
                        return b ? j(a) ? !0 : !1 : !0
                    }

                    function u(a) {
                        var b = a.nodeType;
                        return 7 == b || 8 == b || j(a) || /^(script|style)$/i.test(a.nodeName) || k(a) || t(a)
                    }

                    function v(a, b) {
                        var c = a.nodeType;
                        return 7 == c || 8 == c || 1 == c && "none" == i(a, b)
                    }

                    function w() {
                        this.store = {}
                    }

                    function x(a, b, c) {
                        return function(d) {
                            var e = this.cache;
                            if (e.hasOwnProperty(a))
                                return ob++,
                                    e[a];
                            pb++;
                            var f = b.call(this, c ? this[c] : this, d);
                            return e[a] = f,
                                f
                        }
                    }

                    function y(a, b) {
                        this.node = a,
                            this.session = b,
                            this.cache = new w,
                            this.positions = new w
                    }

                    function z(a, b) {
                        this.offset = b,
                            this.nodeWrapper = a,
                            this.node = a.node,
                            this.session = a.session,
                            this.cache = new w
                    }

                    function A() {
                        return "[Position(" + S.inspectNode(this.node) + ":" + this.offset + ")]"
                    }

                    function B() {
                        return D(),
                            Cb = new Db
                    }

                    function C() {
                        return Cb || B()
                    }

                    function D() {
                        Cb && Cb.detach(),
                            Cb = null
                    }

                    function E(a, c, d, e) {
                        function f() {
                            var a = null;
                            return c ? (a = h,
                                    i || (h = h.previousVisible(),
                                        i = !h || d && h.equals(d))) : i || (a = h = h.nextVisible(),
                                    i = !h || d && h.equals(d)),
                                i && (h = null),
                                a
                        }
                        d && (c ? u(d.node) && (d = a.previousVisible()) : u(d.node) && (d = d.nextVisible()));
                        var g, h = a,
                            i = !1,
                            j = !1;
                        return {
                            next: function() {
                                if (j)
                                    return j = !1,
                                        g;
                                for (var a, b; a = f();)
                                    if (b = a.getCharacter(e))
                                        return g = a,
                                            a;
                                return null
                            },
                            rewind: function() {
                                if (!g)
                                    throw b.createError("createCharacterIterator: cannot rewind. Only one position can be rewound.");
                                j = !0
                            },
                            dispose: function() {
                                a = d = null
                            }
                        }
                    }

                    function F(a, b, c) {
                        function d(a) {
                            for (var b, c, d = [], e = a ? f : g, h = !1, i = !1; b = e.next();) {
                                if (c = b.character,
                                    Z.test(c))
                                    i && (i = !1,
                                        h = !0);
                                else {
                                    if (h) {
                                        e.rewind();
                                        break
                                    }
                                    i = !0
                                }
                                d.push(b)
                            }
                            return d
                        }
                        var f = E(a, !1, null, b),
                            g = E(a, !0, null, b),
                            h = c.tokenizer,
                            i = d(!0),
                            j = d(!1).reverse(),
                            k = e(j.concat(i), c, h),
                            l = i.length ? k.slice(Eb(k, i[0].token)) : [],
                            m = j.length ? k.slice(0, Eb(k, j.pop().token) + 1) : [];
                        return {
                            nextEndToken: function() {
                                for (var a, b; 1 == l.length && !(a = l[0]).isWord && (b = d(!0)).length > 0;)
                                    l = e(a.chars.concat(b), c, h);
                                return l.shift()
                            },
                            previousStartToken: function() {
                                for (var a, b; 1 == m.length && !(a = m[0]).isWord && (b = d(!1)).length > 0;)
                                    m = e(b.reverse().concat(a.chars), c, h);
                                return m.pop()
                            },
                            dispose: function() {
                                f.dispose(),
                                    g.dispose(),
                                    l = m = null
                            }
                        }
                    }

                    function G(a, b, c, d, e) {
                        var f, g, h, i, j = 0,
                            k = a,
                            l = Math.abs(c);
                        if (0 !== c) {
                            var m = 0 > c;
                            switch (b) {
                                case Q:
                                    for (g = E(a, m, null, d);
                                        (f = g.next()) && l > j;)
                                        ++j,
                                        k = f;
                                    h = f,
                                        g.dispose();
                                    break;
                                case R:
                                    for (var n = F(a, d, e), o = m ? n.previousStartToken : n.nextEndToken;
                                        (i = o()) && l > j;)
                                        i.isWord && (++j,
                                            k = m ? i.chars[0] : i.chars[i.chars.length - 1]);
                                    break;
                                default:
                                    throw new Error("movePositionBy: unit '" + b + "' not implemented")
                            }
                            m ? (k = k.previousVisible(),
                                j = -j) : k && k.isLeadingSpace && !k.isTrailingSpace && (b == R && (g = E(a, !1, null, d),
                                    h = g.next(),
                                    g.dispose()),
                                h && (k = h.previousVisible()))
                        }
                        return {
                            position: k,
                            unitsMoved: j
                        }
                    }

                    function H(a, b, c, d) {
                        var e = a.getRangeBoundaryPosition(b, !0),
                            f = a.getRangeBoundaryPosition(b, !1),
                            g = d ? f : e,
                            h = d ? e : f;
                        return E(g, !!d, h, c)
                    }

                    function I(a, b, c) {
                        for (var d, e = [], f = H(a, b, c); d = f.next();)
                            e.push(d);
                        return f.dispose(),
                            e
                    }

                    function J(b, c, d) {
                        var e = a.createRange(b.node);
                        return e.setStartAndEnd(b.node, b.offset, c.node, c.offset), !e.expand("word", {
                            wordOptions: d
                        })
                    }

                    function K(a, b, c, d, e) {
                        function f(a, b) {
                            var c = p[a].previousVisible(),
                                d = p[b - 1],
                                f = !e.wholeWordsOnly || J(c, d, e.wordOptions);
                            return {
                                startPos: c,
                                endPos: d,
                                valid: f
                            }
                        }
                        for (var g, h, i, j, k, l, m = ab(e.direction), n = E(a, m, a.session.getRangeBoundaryPosition(d, m), e.characterOptions), o = "", p = [], q = null; g = n.next();)
                            if (h = g.character,
                                c || e.caseSensitive || (h = h.toLowerCase()),
                                m ? (p.unshift(g),
                                    o = h + o) : (p.push(g),
                                    o += h),
                                c) {
                                if (k = b.exec(o))
                                    if (i = k.index,
                                        j = i + k[0].length,
                                        l) {
                                        if (!m && j < o.length || m && i > 0) {
                                            q = f(i, j);
                                            break
                                        }
                                    } else
                                        l = !0
                            } else if (-1 != (i = o.indexOf(b))) {
                            q = f(i, i + b.length);
                            break
                        }
                        return l && (q = f(i, j)),
                            n.dispose(),
                            q
                    }

                    function L(a) {
                        return function() {
                            var b = !!Cb,
                                c = C(),
                                d = [c].concat(T.toArray(arguments)),
                                e = a.apply(this, d);
                            return b || D(),
                                e
                        }
                    }

                    function M(a, b) {
                        return L(function(c, d, e, f) {
                            typeof e == P && (e = d,
                                    d = Q),
                                f = h(f, jb);
                            var g = a;
                            b && (g = e >= 0,
                                this.collapse(!g));
                            var i = G(c.getRangeBoundaryPosition(this, g), d, e, f.characterOptions, f.wordOptions),
                                j = i.position;
                            return this[g ? "setStart" : "setEnd"](j.node, j.offset),
                                i.unitsMoved
                        })
                    }

                    function N(a) {
                        return L(function(b, c) {
                            c = V(c, fb);
                            for (var d, e = H(b, this, c, !a), f = 0;
                                (d = e.next()) && Z.test(d.character);)
                                ++f;
                            e.dispose();
                            var g = f > 0;
                            return g && this[a ? "moveStart" : "moveEnd"]("character", a ? f : -f, {
                                    characterOptions: c
                                }),
                                g
                        })
                    }

                    function O(a) {
                        return L(function(b, c) {
                            var d = !1;
                            return this.changeEachRange(function(b) {
                                    d = b[a](c) || d
                                }),
                                d
                        })
                    }
                    var P = "undefined",
                        Q = "character",
                        R = "word",
                        S = a.dom,
                        T = a.util,
                        U = T.extend,
                        V = T.createOptions,
                        W = S.getBody,
                        X = /^[ \t\f\r\n]+$/,
                        Y = /^[ \t\f\r]+$/,
                        Z = /^[\t-\r \u0085\u00A0\u1680\u180E\u2000-\u200B\u2028\u2029\u202F\u205F\u3000]+$/,
                        $ = /^[\t \u00A0\u1680\u180E\u2000-\u200B\u202F\u205F\u3000]+$/,
                        _ = "en",
                        ab = a.Selection.isDirectionBackward;
                    /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) ? !0 : !1;
                    var bb, cb = !1,
                        db = !1,
                        eb = !0,
                        fb = {
                            includeBlockContentTrailingSpace: !0,
                            includeSpaceBeforeBr: !0,
                            includeSpaceBeforeBlock: !0,
                            includePreLineTrailingSpace: !0,
                            ignoreCharacters: ""
                        },
                        gb = {
                            includeBlockContentTrailingSpace: !eb,
                            includeSpaceBeforeBr: !cb,
                            includeSpaceBeforeBlock: !db,
                            includePreLineTrailingSpace: !0
                        },
                        hb = {
                            en: {
                                wordRegex: /[a-z0-9]+('[a-z0-9]+)*/gi,
                                includeTrailingSpace: !1,
                                tokenizer: c
                            }
                        },
                        ib = {
                            caseSensitive: !1,
                            withinRange: null,
                            wholeWordsOnly: !1,
                            wrap: !1,
                            direction: "forward",
                            wordOptions: null,
                            characterOptions: null
                        },
                        jb = {
                            wordOptions: null,
                            characterOptions: null
                        },
                        kb = {
                            wordOptions: null,
                            characterOptions: null,
                            trim: !1,
                            trimStart: !0,
                            trimEnd: !0
                        },
                        lb = {
                            wordOptions: null,
                            characterOptions: null,
                            direction: "forward"
                        },
                        mb = S.getComputedStyleProperty;
                    ! function() {
                        var a = document.createElement("table"),
                            b = W(document);
                        b.appendChild(a),
                            bb = "block" == mb(a, "display"),
                            b.removeChild(a)
                    }();
                    var nb = {
                        table: "table",
                        caption: "table-caption",
                        colgroup: "table-column-group",
                        col: "table-column",
                        thead: "table-header-group",
                        tbody: "table-row-group",
                        tfoot: "table-footer-group",
                        tr: "table-row",
                        td: "table-cell",
                        th: "table-cell"
                    };
                    w.prototype = {
                        get: function(a) {
                            return this.store.hasOwnProperty(a) ? this.store[a] : null
                        },
                        set: function(a, b) {
                            return this.store[a] = b
                        }
                    };
                    var ob = 0,
                        pb = 0,
                        qb = {
                            getPosition: function(a) {
                                var b = this.positions;
                                return b.get(a) || b.set(a, new z(this, a))
                            },
                            toString: function() {
                                return "[NodeWrapper(" + S.inspectNode(this.node) + ")]"
                            }
                        };
                    y.prototype = qb;
                    var rb = "EMPTY",
                        sb = "NON_SPACE",
                        tb = "UNCOLLAPSIBLE_SPACE",
                        ub = "COLLAPSIBLE_SPACE",
                        vb = "TRAILING_SPACE_BEFORE_BLOCK",
                        wb = "TRAILING_SPACE_IN_BLOCK",
                        xb = "TRAILING_SPACE_BEFORE_BR",
                        yb = "PRE_LINE_TRAILING_SPACE_BEFORE_LINE_BREAK",
                        zb = "TRAILING_LINE_BREAK_AFTER_BR",
                        Ab = "INCLUDED_TRAILING_LINE_BREAK_AFTER_BR";
                    U(qb, {
                        isCharacterDataNode: x("isCharacterDataNode", S.isCharacterDataNode, "node"),
                        getNodeIndex: x("nodeIndex", S.getNodeIndex, "node"),
                        getLength: x("nodeLength", S.getNodeLength, "node"),
                        containsPositions: x("containsPositions", m, "node"),
                        isWhitespace: x("isWhitespace", s, "node"),
                        isCollapsedWhitespace: x("isCollapsedWhitespace", t, "node"),
                        getComputedDisplay: x("computedDisplay", i, "node"),
                        isCollapsed: x("collapsed", u, "node"),
                        isIgnored: x("ignored", v, "node"),
                        next: x("nextPos", q, "node"),
                        previous: x("previous", r, "node"),
                        getTextNodeInfo: x("textNodeInfo", function(a) {
                            var b = null,
                                c = !1,
                                d = mb(a.parentNode, "whiteSpace"),
                                e = "pre-line" == d;
                            return e ? (b = Y,
                                c = !0) : ("normal" == d || "nowrap" == d) && (b = X,
                                c = !0), {
                                node: a,
                                text: a.data,
                                spaceRegex: b,
                                collapseSpaces: c,
                                preLine: e
                            }
                        }, "node"),
                        hasInnerText: x("hasInnerText", function(a, b) {
                            for (var c = this.session, d = c.getPosition(a.parentNode, this.getNodeIndex() + 1), e = c.getPosition(a, 0), f = b ? d : e, g = b ? e : d; f !== g;) {
                                if (f.prepopulateChar(),
                                    f.isDefinitelyNonEmpty())
                                    return !0;
                                f = b ? f.previousVisible() : f.nextVisible()
                            }
                            return !1
                        }, "node"),
                        isRenderedBlock: x("isRenderedBlock", function(a) {
                            for (var b = a.getElementsByTagName("br"), c = 0, d = b.length; d > c; ++c)
                                if (!u(b[c]))
                                    return !0;
                            return this.hasInnerText()
                        }, "node"),
                        getTrailingSpace: x("trailingSpace", function(a) {
                            if ("br" == a.tagName.toLowerCase())
                                return "";
                            switch (this.getComputedDisplay()) {
                                case "inline":
                                    for (var b = a.lastChild; b;) {
                                        if (!v(b))
                                            return 1 == b.nodeType ? this.session.getNodeWrapper(b).getTrailingSpace() : "";
                                        b = b.previousSibling
                                    }
                                    break;
                                case "inline-block":
                                case "inline-table":
                                case "none":
                                case "table-column":
                                case "table-column-group":
                                    break;
                                case "table-cell":
                                    return "	";
                                default:
                                    return this.isRenderedBlock(!0) ? "\n" : ""
                            }
                            return ""
                        }, "node"),
                        getLeadingSpace: x("leadingSpace", function() {
                            switch (this.getComputedDisplay()) {
                                case "inline":
                                case "inline-block":
                                case "inline-table":
                                case "none":
                                case "table-column":
                                case "table-column-group":
                                case "table-cell":
                                    break;
                                default:
                                    return this.isRenderedBlock(!1) ? "\n" : ""
                            }
                            return ""
                        }, "node")
                    });
                    var Bb = {
                        character: "",
                        characterType: rb,
                        isBr: !1,
                        prepopulateChar: function() {
                            var a = this;
                            if (!a.prepopulatedChar) {
                                var b = a.node,
                                    c = a.offset,
                                    d = "",
                                    e = rb,
                                    f = !1;
                                if (c > 0)
                                    if (3 == b.nodeType) {
                                        var g = b.data,
                                            h = g.charAt(c - 1),
                                            i = a.nodeWrapper.getTextNodeInfo(),
                                            j = i.spaceRegex;
                                        i.collapseSpaces ? j.test(h) ? c > 1 && j.test(g.charAt(c - 2)) || (i.preLine && "\n" === g.charAt(c) ? (d = " ",
                                            e = yb) : (d = " ",
                                            e = ub)) : (d = h,
                                            e = sb,
                                            f = !0) : (d = h,
                                            e = tb,
                                            f = !0)
                                    } else {
                                        var k = b.childNodes[c - 1];
                                        if (k && 1 == k.nodeType && !u(k) && ("br" == k.tagName.toLowerCase() ? (d = "\n",
                                                a.isBr = !0,
                                                e = ub,
                                                f = !1) : a.checkForTrailingSpace = !0), !d) {
                                            var l = b.childNodes[c];
                                            l && 1 == l.nodeType && !u(l) && (a.checkForLeadingSpace = !0)
                                        }
                                    }
                                a.prepopulatedChar = !0,
                                    a.character = d,
                                    a.characterType = e,
                                    a.isCharInvariant = f
                            }
                        },
                        isDefinitelyNonEmpty: function() {
                            var a = this.characterType;
                            return a == sb || a == tb
                        },
                        resolveLeadingAndTrailingSpaces: function() {
                            if (this.prepopulatedChar || this.prepopulateChar(),
                                this.checkForTrailingSpace) {
                                var a = this.session.getNodeWrapper(this.node.childNodes[this.offset - 1]).getTrailingSpace();
                                a && (this.isTrailingSpace = !0,
                                        this.character = a,
                                        this.characterType = ub),
                                    this.checkForTrailingSpace = !1
                            }
                            if (this.checkForLeadingSpace) {
                                var b = this.session.getNodeWrapper(this.node.childNodes[this.offset]).getLeadingSpace();
                                b && (this.isLeadingSpace = !0,
                                        this.character = b,
                                        this.characterType = ub),
                                    this.checkForLeadingSpace = !1
                            }
                        },
                        getPrecedingUncollapsedPosition: function(a) {
                            for (var b, c = this; c = c.previousVisible();)
                                if (b = c.getCharacter(a),
                                    "" !== b)
                                    return c;
                            return null
                        },
                        getCharacter: function(a) {
                            function b() {
                                return n || (k = o.getPrecedingUncollapsedPosition(a),
                                        n = !0),
                                    k
                            }
                            this.resolveLeadingAndTrailingSpaces();
                            var c, d = this.character,
                                e = f(a.ignoreCharacters),
                                g = "" !== d && e.indexOf(d) > -1;
                            if (this.isCharInvariant)
                                return c = g ? "" : d;
                            var h = ["character", a.includeSpaceBeforeBr, a.includeBlockContentTrailingSpace, a.includePreLineTrailingSpace, e].join("_"),
                                i = this.cache.get(h);
                            if (null !== i)
                                return i;
                            var j, k, l = "",
                                m = this.characterType == ub,
                                n = !1,
                                o = this;
                            return m && (this.type == Ab ? l = "\n" : " " == d && (!b() || k.isTrailingSpace || "\n" == k.character || " " == k.character && k.characterType == ub) || ("\n" == d && this.isLeadingSpace ? b() && "\n" != k.character && (l = "\n") : (j = this.nextUncollapsed(),
                                    j && (j.isBr ? this.type = xb : j.isTrailingSpace && "\n" == j.character ? this.type = wb : j.isLeadingSpace && "\n" == j.character && (this.type = vb),
                                        "\n" == j.character ? (this.type != xb || a.includeSpaceBeforeBr) && (this.type != vb || a.includeSpaceBeforeBlock) && (this.type == wb && j.isTrailingSpace && !a.includeBlockContentTrailingSpace || (this.type != yb || j.type != sb || a.includePreLineTrailingSpace) && ("\n" == d ? j.isTrailingSpace ? this.isTrailingSpace || this.isBr && (j.type = zb,
                                            b() && k.isLeadingSpace && !k.isTrailingSpace && "\n" == k.character ? j.character = "" : j.type = Ab) : l = "\n" : " " == d && (l = " "))) : l = d)))),
                                e.indexOf(l) > -1 && (l = ""),
                                this.cache.set(h, l),
                                l
                        },
                        equals: function(a) {
                            return !!a && this.node === a.node && this.offset === a.offset
                        },
                        inspect: A,
                        toString: function() {
                            return this.character
                        }
                    };
                    z.prototype = Bb,
                        U(Bb, {
                            next: x("nextPos", function(a) {
                                var b = a.nodeWrapper,
                                    c = a.node,
                                    d = a.offset,
                                    e = b.session;
                                if (!c)
                                    return null;
                                var f, g, h;
                                return d == b.getLength() ? (f = c.parentNode,
                                        g = f ? b.getNodeIndex() + 1 : 0) : b.isCharacterDataNode() ? (f = c,
                                        g = d + 1) : (h = c.childNodes[d],
                                        e.getNodeWrapper(h).containsPositions() ? (f = h,
                                            g = 0) : (f = c,
                                            g = d + 1)),
                                    f ? e.getPosition(f, g) : null
                            }),
                            previous: x("previous", function(a) {
                                var b, c, d, e = a.nodeWrapper,
                                    f = a.node,
                                    g = a.offset,
                                    h = e.session;
                                return 0 == g ? (b = f.parentNode,
                                        c = b ? e.getNodeIndex() : 0) : e.isCharacterDataNode() ? (b = f,
                                        c = g - 1) : (d = f.childNodes[g - 1],
                                        h.getNodeWrapper(d).containsPositions() ? (b = d,
                                            c = S.getNodeLength(d)) : (b = f,
                                            c = g - 1)),
                                    b ? h.getPosition(b, c) : null
                            }),
                            nextVisible: x("nextVisible", function(a) {
                                var b = a.next();
                                if (!b)
                                    return null;
                                var c = b.nodeWrapper,
                                    d = b.node,
                                    e = b;
                                return c.isCollapsed() && (e = c.session.getPosition(d.parentNode, c.getNodeIndex() + 1)),
                                    e
                            }),
                            nextUncollapsed: x("nextUncollapsed", function(a) {
                                for (var b = a; b = b.nextVisible();)
                                    if (b.resolveLeadingAndTrailingSpaces(),
                                        "" !== b.character)
                                        return b;
                                return null
                            }),
                            previousVisible: x("previousVisible", function(a) {
                                var b = a.previous();
                                if (!b)
                                    return null;
                                var c = b.nodeWrapper,
                                    d = b.node,
                                    e = b;
                                return c.isCollapsed() && (e = c.session.getPosition(d.parentNode, c.getNodeIndex())),
                                    e
                            })
                        });
                    var Cb = null,
                        Db = function() {
                            function a(a) {
                                var b = new w;
                                return {
                                    get: function(c) {
                                        var d = b.get(c[a]);
                                        if (d)
                                            for (var e, f = 0; e = d[f++];)
                                                if (e.node === c)
                                                    return e;
                                        return null
                                    },
                                    set: function(c) {
                                        var d = c.node[a],
                                            e = b.get(d) || b.set(d, []);
                                        e.push(c)
                                    }
                                }
                            }

                            function b() {
                                this.initCaches()
                            }
                            var c = T.isHostProperty(document.documentElement, "uniqueID");
                            return b.prototype = {
                                    initCaches: function() {
                                        this.elementCache = c ? function() {
                                                var a = new w;
                                                return {
                                                    get: function(b) {
                                                        return a.get(b.uniqueID)
                                                    },
                                                    set: function(b) {
                                                        a.set(b.node.uniqueID, b)
                                                    }
                                                }
                                            }() : a("tagName"),
                                            this.textNodeCache = a("data"),
                                            this.otherNodeCache = a("nodeName")
                                    },
                                    getNodeWrapper: function(a) {
                                        var b;
                                        switch (a.nodeType) {
                                            case 1:
                                                b = this.elementCache;
                                                break;
                                            case 3:
                                                b = this.textNodeCache;
                                                break;
                                            default:
                                                b = this.otherNodeCache
                                        }
                                        var c = b.get(a);
                                        return c || (c = new y(a, this),
                                                b.set(c)),
                                            c
                                    },
                                    getPosition: function(a, b) {
                                        return this.getNodeWrapper(a).getPosition(b)
                                    },
                                    getRangeBoundaryPosition: function(a, b) {
                                        var c = b ? "start" : "end";
                                        return this.getPosition(a[c + "Container"], a[c + "Offset"])
                                    },
                                    detach: function() {
                                        this.elementCache = this.textNodeCache = this.otherNodeCache = null
                                    }
                                },
                                b
                        }();
                    U(S, {
                        nextNode: q,
                        previousNode: r
                    });
                    var Eb = Array.prototype.indexOf ? function(a, b) {
                        return a.indexOf(b)
                    } : function(a, b) {
                        for (var c = 0, d = a.length; d > c; ++c)
                            if (a[c] === b)
                                return c;
                        return -1
                    };
                    U(a.rangePrototype, {
                            moveStart: M(!0, !1),
                            moveEnd: M(!1, !1),
                            move: M(!0, !0),
                            trimStart: N(!0),
                            trimEnd: N(!1),
                            trim: L(function(a, b) {
                                var c = this.trimStart(b),
                                    d = this.trimEnd(b);
                                return c || d
                            }),
                            expand: L(function(a, b, c) {
                                var d = !1;
                                c = h(c, kb);
                                var e = c.characterOptions;
                                if (b || (b = Q),
                                    b == R) {
                                    var f, g, i = c.wordOptions,
                                        j = a.getRangeBoundaryPosition(this, !0),
                                        k = a.getRangeBoundaryPosition(this, !1),
                                        l = F(j, e, i),
                                        m = l.nextEndToken(),
                                        n = m.chars[0].previousVisible();
                                    if (this.collapsed)
                                        f = m;
                                    else {
                                        var o = F(k, e, i);
                                        f = o.previousStartToken()
                                    }
                                    return g = f.chars[f.chars.length - 1],
                                        n.equals(j) || (this.setStart(n.node, n.offset),
                                            d = !0),
                                        g && !g.equals(k) && (this.setEnd(g.node, g.offset),
                                            d = !0),
                                        c.trim && (c.trimStart && (d = this.trimStart(e) || d),
                                            c.trimEnd && (d = this.trimEnd(e) || d)),
                                        d
                                }
                                return this.moveEnd(Q, 1, c)
                            }),
                            text: L(function(a, b) {
                                return this.collapsed ? "" : I(a, this, V(b, fb)).join("")
                            }),
                            selectCharacters: L(function(a, b, c, d, e) {
                                var f = {
                                    characterOptions: e
                                };
                                b || (b = W(this.getDocument())),
                                    this.selectNodeContents(b),
                                    this.collapse(!0),
                                    this.moveStart("character", c, f),
                                    this.collapse(!0),
                                    this.moveEnd("character", d - c, f)
                            }),
                            toCharacterRange: L(function(a, b, c) {
                                b || (b = W(this.getDocument()));
                                var d, e, f = b.parentNode,
                                    g = S.getNodeIndex(b),
                                    h = -1 == S.comparePoints(this.startContainer, this.endContainer, f, g),
                                    i = this.cloneRange();
                                return h ? (i.setStartAndEnd(this.startContainer, this.startOffset, f, g),
                                        d = -i.text(c).length) : (i.setStartAndEnd(f, g, this.startContainer, this.startOffset),
                                        d = i.text(c).length),
                                    e = d + this.text(c).length, {
                                        start: d,
                                        end: e
                                    }
                            }),
                            findText: L(function(b, c, d) {
                                d = h(d, ib),
                                    d.wholeWordsOnly && (d.wordOptions.includeTrailingSpace = !1);
                                var e = ab(d.direction),
                                    f = d.withinRange;
                                f || (f = a.createRange(),
                                    f.selectNodeContents(this.getDocument()));
                                var g = c,
                                    i = !1;
                                "string" == typeof g ? d.caseSensitive || (g = g.toLowerCase()) : i = !0;
                                var j = b.getRangeBoundaryPosition(this, !e),
                                    k = f.comparePoint(j.node, j.offset); - 1 === k ? j = b.getRangeBoundaryPosition(f, !0) : 1 === k && (j = b.getRangeBoundaryPosition(f, !1));
                                for (var l, m = j, n = !1;;)
                                    if (l = K(m, g, i, f, d)) {
                                        if (l.valid)
                                            return this.setStartAndEnd(l.startPos.node, l.startPos.offset, l.endPos.node, l.endPos.offset), !0;
                                        m = e ? l.startPos : l.endPos
                                    } else {
                                        if (!d.wrap || n)
                                            return !1;
                                        f = f.cloneRange(),
                                            m = b.getRangeBoundaryPosition(f, !e),
                                            f.setBoundary(j.node, j.offset, e),
                                            n = !0
                                    }
                            }),
                            pasteHtml: function(a) {
                                if (this.deleteContents(),
                                    a) {
                                    var b = this.createContextualFragment(a),
                                        c = b.lastChild;
                                    this.insertNode(b),
                                        this.collapseAfter(c)
                                }
                            }
                        }),
                        U(a.selectionPrototype, {
                            expand: L(function(a, b, c) {
                                this.changeEachRange(function(a) {
                                    a.expand(b, c)
                                })
                            }),
                            move: L(function(a, b, c, d) {
                                var e = 0;
                                if (this.focusNode) {
                                    this.collapse(this.focusNode, this.focusOffset);
                                    var f = this.getRangeAt(0);
                                    d || (d = {}),
                                        d.characterOptions = V(d.characterOptions, gb),
                                        e = f.move(b, c, d),
                                        this.setSingleRange(f)
                                }
                                return e
                            }),
                            trimStart: O("trimStart"),
                            trimEnd: O("trimEnd"),
                            trim: O("trim"),
                            selectCharacters: L(function(b, c, d, e, f, g) {
                                var h = a.createRange(c);
                                h.selectCharacters(c, d, e, g),
                                    this.setSingleRange(h, f)
                            }),
                            saveCharacterRanges: L(function(a, b, c) {
                                for (var d = this.getAllRanges(), e = d.length, f = [], g = 1 == e && this.isBackward(), h = 0, i = d.length; i > h; ++h)
                                    f[h] = {
                                        characterRange: d[h].toCharacterRange(b, c),
                                        backward: g,
                                        characterOptions: c
                                    };
                                return f
                            }),
                            restoreCharacterRanges: L(function(b, c, d) {
                                this.removeAllRanges();
                                for (var e, f, g, h = 0, i = d.length; i > h; ++h)
                                    f = d[h],
                                    g = f.characterRange,
                                    e = a.createRange(c),
                                    e.selectCharacters(c, g.start, g.end, f.characterOptions),
                                    this.addRange(e, f.backward)
                            }),
                            text: L(function(a, b) {
                                for (var c = [], d = 0, e = this.rangeCount; e > d; ++d)
                                    c[d] = this.getRangeAt(d).text(b);
                                return c.join("")
                            })
                        }),
                        a.innerText = function(b, c) {
                            var d = a.createRange(b);
                            d.selectNodeContents(b);
                            var e = d.text(c);
                            return e
                        },
                        a.createWordIterator = function(a, b, c) {
                            var d = C();
                            c = h(c, lb);
                            var e = d.getPosition(a, b),
                                f = F(e, c.characterOptions, c.wordOptions),
                                g = ab(c.direction);
                            return {
                                next: function() {
                                    return g ? f.previousStartToken() : f.nextEndToken()
                                },
                                dispose: function() {
                                    f.dispose(),
                                        this.next = function() {}
                                }
                            }
                        },
                        a.noMutation = function(a) {
                            var b = C();
                            a(b),
                                D()
                        },
                        a.noMutation.createEntryPointFunction = L,
                        a.textRange = {
                            isBlockNode: l,
                            isCollapsedWhitespaceNode: t,
                            createPosition: L(function(a, b, c) {
                                return a.getPosition(b, c)
                            })
                        }
                }),
                a
        }(GIELLA.rangy || this.rangy)
    }(),
    function(a, b) {
        var c = a.jquip,
            d = a.$,
            e = function() {
                function c(a, c) {
                    for (var d, e = 0, f = Rb.length; f > e; e++)
                        if (Rb[e].apply(this, arguments))
                            return this;
                    return a ? G(a) ? (W ? a() : db.push(a),
                        this) : H(a) ? this.make(a) : a.nodeType || J(a) ? this.make([a]) : "body" == a && !c && bb.body ? (this.context = a.context,
                        this[0] = bb.body,
                        this.length = 1,
                        this.selector = a,
                        this) : a.selector !== b ? (this.context = a.context,
                        this.selector = a.selector,
                        this.make(a)) : (a = E(a) && "<" === a.charAt(0) ? (d = rb.exec(a)) ? [bb.createElement(d[1])] : P(a).childNodes : m(this.selector = a, c),
                        this.make(a),
                        L(c) && this.attr(c),
                        this) : this
                }

                function d(a, b) {
                    return new c(a, b)
                }

                function e(a) {
                    return !a || !a.parentNode || 11 == a.parentNode.nodeType
                }

                function f(a, b, c) {
                    if (b = b || 0,
                        G(b))
                        return x(a, function(a, d) {
                            return !!b.call(a, d, a) === c
                        });
                    if (b.nodeType)
                        return x(a, function(a) {
                            return a === b === c
                        });
                    if (E(b)) {
                        var e = ":" == b.charAt(0) && d.Expr[b.substring(1)];
                        return x(a, function(a) {
                            var c, d = a.parentNode,
                                f = !d;
                            return f && (d = Pb,
                                    d.appendChild(a)),
                                c = e ? e(a) : a.parentNode && s(m(b, a.parentNode), a) >= 0,
                                f && d.removeChild(a),
                                c
                        })
                    }
                    return x(a, function(a) {
                        return s(b, a) >= 0 === c
                    })
                }

                function g(a, b, c) {
                    var d = a[Ob];
                    return D(c) ? (d || (d = a[Ob] = Tb++),
                        (Ub[d] || (Ub[d] = {}))[b] = c) : d && Ub[d] && (b ? Ub[d][b] : Ub[d])
                }

                function h(a) {
                    if (!Vb[a]) {
                        var b = d("<" + a + ">").appendTo(bb.body),
                            c = d.css && d.css(b[0], "display") || b[0].style.display;
                        b.remove(),
                            Vb[a] = c
                    }
                    return Vb[a]
                }

                function i(a, b) {
                    if (a.length = b && b.length || 0,
                        0 === a.length)
                        return a;
                    for (var c = 0, d = b.length; d > c; c++)
                        a[c] = b[c];
                    return a
                }

                function j(a, b) {
                    b = " " + b + " ";
                    for (var c = 0, d = a.length; d > c; c++)
                        if (k(a[c], b))
                            return !0;
                    return !1
                }

                function k(a, b) {
                    return 1 === a.nodeType && (" " + a.className + " ").replace(jb, " ").indexOf(b) > -1
                }

                function l(a, b, c) {
                    b = b || bb,
                        c = c || [],
                        1 == b.nodeType && a(b) && c.push(b);
                    for (var d = b.childNodes, e = 0, f = d.length; f > e; e++) {
                        var g = d[e];
                        1 == g.nodeType && l(a, g, c)
                    }
                    return c
                }

                function m(a, b, c) {
                    if (a && E(a)) {
                        b instanceof d && (b = b[0]),
                            b = b || bb,
                            c = c || d.query;
                        var e, f = a.substring(1);
                        return lb.test(a) && b === bb ? (e = bb.getElementById(f)) ? [e] : [] : O(mb.test(a) && b.getElementsByClassName ? b.getElementsByClassName(f) : kb.test(a) ? b.getElementsByTagName(a) : c(a, b))
                    }
                    return 1 == a.nodeType || 9 == a.nodeType ? [a] : []
                }

                function n(a, c, d) {
                    var e, f = bb.head || bb.getElementsByTagName("head")[0] || cb,
                        g = bb.createElement("script");
                    d && (g.async = "async"),
                        g.onreadystatechange = function() {
                            (e = g.readyState) && "loaded" != e && "complete" != e || (g.onload = g.onreadystatechange = null,
                                f && g.parentNode && f.removeChild(g),
                                g = b,
                                c && c())
                        },
                        g.onload = c,
                        g.src = a,
                        f.insertBefore(g, f.firstChild)
                }

                function o() {
                    $.console && $.console.warn(arguments)
                }

                function p(a, b, c) {
                    if (null != a)
                        if (Lb && a.forEach === Lb)
                            a.forEach(b, c);
                        else if (a.length === +a.length) {
                        for (var d = 0, e = a.length; e > d; d++)
                            if (d in a && b.call(c, a[d], d, a) === Eb)
                                return
                    } else
                        for (var f in a)
                            if (Hb.call(a, f) && b.call(c, a[f], f, a) === Eb)
                                return
                }

                function q(a, c) {
                    if (a && a.getAttribute && c) {
                        var d = a.hasAttribute && a.hasAttribute(c) ? a.getAttribute(c) : a[c];
                        return null === d ? b : d
                    }
                }

                function r(a, b) {
                    return D(a) ? d(b).filter(a) : d(b)
                }

                function s(a, b) {
                    if (null == a)
                        return -1;
                    var c, d;
                    if (Nb && a.indexOf === Nb)
                        return a.indexOf(b);
                    for (c = 0,
                        d = a.length; d > c; c++)
                        if (a[c] === b)
                            return c;
                    return -1
                }

                function t(a, b, c) {
                    var d = [];
                    return null == a ? d : Mb && a.filter === Mb ? a.filter(b, c) : (p(a, function(a, e, f) {
                            b.call(c, a, e, f) && (d[d.length] = a)
                        }),
                        d)
                }

                function u(a, c, e) {
                    for (var f = [], g = a[c]; g && 9 !== g.nodeType && (e === b || 1 !== g.nodeType || !d(g).is(e));)
                        1 === g.nodeType && f.push(g),
                        g = g[c];
                    return f
                }

                function v(a, b, c) {
                    b = b || 1;
                    for (var d = 0; a && (1 !== a.nodeType || ++d !== b); a = a[c])
                    ;
                    return a
                }

                function w(a, b) {
                    for (var c = []; a; a = a.nextSibling)
                        1 === a.nodeType && a !== b && c.push(a);
                    return c
                }

                function x(a, b, c) {
                    var d, e = [];
                    c = !!c;
                    for (var f = 0, g = a.length; g > f; f++)
                        d = !!b(a[f], f),
                        c !== d && e.push(a[f]);
                    return e
                }

                function y(a, b, c) {
                    var e, f, g = [],
                        h = 0,
                        i = a.length,
                        j = a instanceof d || "number" == typeof i && (i > 0 && a[0] && a[i - 1] || 0 === i || H(a));
                    if (j)
                        for (; i > h; h++)
                            e = b(a[h], h, c),
                            null != e && (g[g.length] = e);
                    else
                        for (f in a)
                            e = b(a[f], f, c),
                            null != e && (g[g.length] = e);
                    return g.concat.apply([], g)
                }

                function z(a, b, c) {
                    if (!a)
                        return {};
                    var d = g(a, b, c);
                    return d || A(a)["data-" + b]
                }

                function A(a) {
                    var b = {};
                    if (1 == a.nodeType)
                        for (var c = 0, d = a.attributes, e = d.length; e > c; c++)
                            b[d.item(c).nodeName] = d.item(c).nodeValue;
                    return b
                }

                function B(a, b) {
                    return a && b ? a.toLowerCase() === b.toLowerCase() : a == b
                }

                function C(a) {
                    return null == a ? String(a) : Ab[zb.call(a)] || "object"
                }

                function D(a) {
                    return void 0 !== a
                }

                function E(a) {
                    return "string" == typeof a
                }

                function F(a) {
                    return "object" == typeof a
                }

                function G(a) {
                    return "function" == typeof a || "function" === C(a)
                }

                function H(a) {
                    return "array" === C(a)
                }

                function I(a) {
                    return !E(a) && "number" == typeof a.length
                }

                function J(a) {
                    return a && "object" == typeof a && "setInterval" in a
                }

                function K(a) {
                    return null == a || !ob.test(a) || isNaN(a)
                }

                function L(a) {
                    if (!a || "object" !== C(a) || a.nodeType || J(a))
                        return !1;
                    try {
                        if (a.constructor && !Hb.call(a, "constructor") && !Hb.call(a.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a)
                    ;
                    return d === b || Hb.call(a, d)
                }

                function M(a, c) {
                    var d = a.length,
                        e = 0;
                    if ("number" == typeof c.length)
                        for (var f = c.length; f > e; e++)
                            a[d++] = c[e];
                    else
                        for (; c[e] !== b;)
                            a[d++] = c[e++];
                    return a.length = d,
                        a
                }

                function N() {
                    var a, c, d, e, f, g, h = arguments,
                        i = h[0] || {},
                        j = 1,
                        k = h.length,
                        l = !1;
                    for ("boolean" == typeof i && (l = i,
                            i = h[1] || {},
                            j = 2),
                        "object" == typeof i || G(i) || (i = {}),
                        k === j && (i = this,
                            --j); k > j; j++)
                        if (null != (a = h[j]))
                            for (c in a)
                                d = i[c],
                                e = a[c],
                                i !== e && (l && e && (L(e) || (f = H(e))) ? (f ? (f = !1,
                                        g = d && H(d) ? d : []) : g = d && L(d) ? d : {},
                                    i[c] = N(l, g, e)) : e !== b && (i[c] = e));
                    return i
                }

                function O(a, b) {
                    var c = b || [];
                    if (null != a) {
                        var d = C(a);
                        null == a.length || "string" == d || "function" == d || "regexp" === d || J(a) ? Jb.call(c, a) : M(c, a)
                    }
                    return c
                }

                function P(a, b, c) {
                    if (b = b || bb || b.ownerDocument || b[0] && b[0].ownerDocument || bb,
                        c = c || b.createDocumentFragment(),
                        I(a))
                        return R(a, b, c) && c;
                    for (var d = Q(a); d.firstChild;)
                        c.appendChild(d.firstChild);
                    return c
                }

                function Q(a, b) {
                    var c = (b || bb).createElement("div"),
                        d = (ib.exec(a) || ["", ""])[1].toLowerCase(),
                        e = Db[d] || Db._default,
                        f = e[0];
                    for (c.innerHTML = e[1] + a + e[2]; f--;)
                        c = c.lastChild;
                    return c
                }

                function R(a, b, c) {
                    var d, e, f = [];
                    for (d = 0; null != (e = a[d]); d++)
                        E(e) && (e = Q(e, b)),
                        e.nodeType ? f.push(e) : f = M(f, e);
                    if (c)
                        for (d = 0; d < f.length; d++)
                            f[d].nodeType && c.appendChild(f[d]);
                    return f
                }

                function S(a) {
                    if (Z && (Bb = Cb,
                            a.sort(Z),
                            Bb))
                        for (var b = 1; b < a.length; b++)
                            a[b] === a[b - 1] && a.splice(b--, 1);
                    return a
                }

                function T() {
                    if (!bb.body)
                        return null;
                    var a = bb.createElement("div");
                    bb.body.appendChild(a),
                        a.style.width = "20px",
                        a.style.padding = "10px";
                    var b = a.offsetWidth;
                    return bb.body.removeChild(a),
                        40 == b
                }

                function U(a, b) {
                    eb.push({
                        url: a,
                        cb: b
                    })
                }

                function V() {
                    p(db, function(a) {
                            a()
                        }),
                        W = !0
                }
                var W, X, Y, Z, $ = a,
                    _ = "http://cdnjs.cloudflare.com/ajax/libs/sizzle/1.4.4/sizzle.min.js",
                    ab = function() {
                        return $.Sizzle || $.qwery
                    },
                    bb = document,
                    cb = bb.documentElement,
                    db = [],
                    eb = [],
                    fb = /Until$/,
                    gb = /,/,
                    hb = /^(?:parents|prevUntil|prevAll)/,
                    ib = /<([\w:]+)/,
                    jb = /[\n\t\r]/g,
                    kb = /^[\w-]+$/,
                    lb = /^#[\w-]+$/,
                    mb = /^\.[\w-]+$/,
                    nb = /\s+/,
                    ob = /\d/,
                    pb = /\S/,
                    qb = /\r\n/g,
                    rb = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                    sb = /\r?\n/g,
                    tb = /^(?:select|textarea)/i,
                    ub = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
                    vb = String.prototype.trim,
                    wb = /^\s+/,
                    xb = /\s+$/,
                    yb = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    },
                    zb = Object.prototype.toString,
                    Ab = {},
                    Bb = !1,
                    Cb = !0,
                    Db = {
                        option: [1, "<select multiple='multiple'>", "</select>"],
                        legend: [1, "<fieldset>", "</fieldset>"],
                        thead: [1, "<table>", "</table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                        area: [1, "<map>", "</map>"],
                        _default: [0, "", ""]
                    },
                    Eb = {},
                    Fb = Array.prototype,
                    Gb = Object.prototype,
                    Hb = Gb.hasOwnProperty,
                    Ib = Fb.slice,
                    Jb = Fb.push,
                    Kb = Fb.indexOf,
                    Lb = Fb.forEach,
                    Mb = Fb.filter,
                    Nb = Fb.indexOf,
                    Ob = "jq-" + +new Date,
                    Pb = bb.createElement("p");
                pb.test(" ") && (wb = /^[\s\xA0]+/,
                    xb = /[\s\xA0]+$/);
                var Qb, Rb = [],
                    Sb = {},
                    Tb = 1,
                    Ub = {
                        _id: 0
                    },
                    Vb = {};
                Qb = c.prototype = d.prototype = d.fn = {
                        constructor: d,
                        selector: "",
                        length: 0,
                        dm: function(a, b, c) {
                            var d, e, f, g, h, i = a[0];
                            if (i && this[0]) {
                                if (!(e = 3 === i.nodeType && i) && (d = i && i.parentNode,
                                        e = d && 11 === d.nodeType && d.childNodes.length === this.length ? d : P(i),
                                        f = e.firstChild,
                                        1 === e.childNodes.length && (e = f), !f))
                                    return this;
                                for (h = 0,
                                    g = this.length; g > h; h++)
                                    c.call(this[h], 0 == h ? e : e.cloneNode(!0))
                            }
                            return this
                        },
                        ps: function(a, b, c) {
                            var d = this.constructor();
                            return H(a) ? Jb.apply(d, a) : M(d, a),
                                d.prevObject = this,
                                d.context = this.context,
                                "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"),
                                d
                        }
                    },
                    Qb.make = function(a) {
                        return i(this, a),
                            this
                    },
                    Qb.toArray = function() {
                        return Ib.call(this, 0)
                    },
                    Qb.get = function(a) {
                        return D(a) ? 0 > a ? this[this.length + a] : this[a] : this.toArray()
                    },
                    Qb.add = function(a, b) {
                        var c = "string" == typeof a ? d(a, b) : O(a && a.nodeType ? [a] : a),
                            f = M(this.get(), c);
                        return this.ps(e(c[0]) || e(f[0]) ? f : S(f))
                    },
                    Qb.each = function(a) {
                        if (!G(a))
                            return this;
                        for (var b = 0, c = this.length; c > b && a.call(this[b], b, this[b]) !== !1; b++)
                        ;
                        return this
                    },
                    Qb.attr = function(a, c) {
                        var d = this[0];
                        return E(a) && c === b ? q(d, a) : this.each(function(b) {
                            var d = this.nodeType;
                            if (3 !== d && 8 !== d && 2 !== d)
                                if (F(a))
                                    for (var e in a)
                                        null === c ? this.removeAttribute(a) : this.setAttribute(e, a[e]);
                                else
                                    this.setAttribute(a, G(c) ? c.call(this, b, this.getAttribute(a)) : c)
                        })
                    },
                    Qb.removeAttr = function(a) {
                        return this.each(function() {
                            1 == this.nodeType && this.removeAttribute(a)
                        })
                    },
                    Qb.data = function(a, c) {
                        return c === b ? z(this[0], a) : this.each(function() {
                            z(this, a, c)
                        })
                    },
                    Qb.append = function() {
                        return this.dm(arguments, !0, function(a) {
                            1 === this.nodeType && this.appendChild(a)
                        })
                    },
                    Qb.prepend = function() {
                        return this.dm(arguments, !0, function(a) {
                            1 === this.nodeType && this.insertBefore(a, this.firstChild)
                        })
                    },
                    Qb.before = function() {
                        return this[0] && this[0].parentNode ? this.dm(arguments, !1, function(a) {
                            this.parentNode.insertBefore(a, this)
                        }) : this
                    },
                    Qb.after = function() {
                        return this[0] && this[0].parentNode ? this.dm(arguments, !1, function(a) {
                            this.parentNode.insertBefore(a, this.nextSibling)
                        }) : this
                    },
                    Qb.replaceWith = function(a) {
                        var b = this,
                            c = G(a);
                        return this.each(function(e) {
                            var f = this.nextSibling,
                                g = this.parentNode,
                                h = c ? a.call(this, e, this) : a;
                            g && 11 != g.nodeType ? (g.removeChild(this),
                                f ? d(f).before(h) : d(g).append(h)) : b[e] = d(h).clone()[0]
                        })
                    },
                    Qb.hide = function() {
                        return this.each(function() {
                            "none" != this.style.display && (g(this, "display", this.style.display),
                                this.style.display = "none")
                        })
                    },
                    Qb.show = function() {
                        return this.each(function() {
                            this.style.display = g(this, "display") || h(this.tagName)
                        })
                    },
                    Qb.toggle = function() {
                        return this.each(function() {
                            var a = d(this);
                            d.Expr.hidden(this) ? a.show() : a.hide()
                        })
                    },
                    Qb.eq = function(a) {
                        return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
                    },
                    Qb.first = function() {
                        return this.eq(0)
                    },
                    Qb.last = function() {
                        return this.eq(-1)
                    },
                    Qb.slice = function() {
                        return this.ps(Ib.apply(this, arguments), "slice", Ib.call(arguments).join(","))
                    },
                    Qb.map = function(a) {
                        return this.ps(y(this, function(b, c) {
                            return a.call(b, c, b)
                        }))
                    },
                    Qb.find = function(a) {
                        var b, c, e = this;
                        if (!E(a))
                            return d(a).filter(function() {
                                for (b = 0,
                                    c = e.length; c > b; b++)
                                    if (Y(e[b], this))
                                        return !0
                            });
                        var f, g, h, i = this.ps("", "find", a);
                        for (b = 0,
                            c = this.length; c > b; b++)
                            if (f = i.length,
                                M(i, d(a, this[b])),
                                0 === b)
                                for (g = f; g < i.length; g++)
                                    for (h = 0; f > h; h++)
                                        if (i[h] === i[g]) {
                                            i.splice(g--, 1);
                                            break
                                        }
                        return i
                    },
                    Qb.not = function(a) {
                        return this.ps(f(this, a, !1), "not", a)
                    },
                    Qb.filter = function(a) {
                        return this.ps(f(this, a, !0), "filter", a)
                    },
                    Qb.indexOf = function(a) {
                        return s(this, a)
                    },
                    Qb.is = function(a) {
                        return this.length > 0 && d(this[0]).filter(a).length > 0
                    },
                    Qb.remove = function() {
                        for (var a, b = 0; D(a = this[b]); b++)
                            a.parentNode && a.parentNode.removeChild(a);
                        return this
                    },
                    Qb.closest = function(a, b) {
                        var c, d, e, f = [];
                        for (c = 0,
                            d = this.length; d > c; c++)
                            for (e = this[c]; e;) {
                                if (r(a, [e]).length > 0) {
                                    f.push(e);
                                    break
                                }
                                if (e = e.parentNode, !e || !e.ownerDocument || e === b || 11 === e.nodeType)
                                    break
                            }
                        return f = f.length > 1 ? S(f) : f,
                            this.ps(f, "closest", a)
                    },
                    Qb.val = function(a) {
                        return D(a) ? this.each(function() {
                            this.value = a
                        }) : this[0] && this[0].value || ""
                    },
                    Qb.html = function(a) {
                        return D(a) ? this.each(function() {
                            this.innerHTML = a
                        }) : this[0] && this[0].innerHTML || ""
                    },
                    Qb.text = function(a) {
                        var b, c = this[0];
                        return D(a) ? this.empty().append((c && c.ownerDocument || bb).createTextNode(a)) : c && (b = c.nodeType) ? 1 === b || 9 === b ? E(c.textContent) ? c.textContent : c.innerText.replace(qb, "") : 3 === b || 4 === b ? c.nodeValue : null : null
                    },
                    Qb.empty = function() {
                        var a, b;
                        for (a = 0; D(b = this[a]); a++)
                            for (; b.firstChild;)
                                b.removeChild(b.firstChild);
                        return this
                    },
                    Qb.addClass = function(a) {
                        var b, c, e, f, g, h, i;
                        if (G(a))
                            return this.each(function(b) {
                                d(this).addClass(a.call(this, b, this.className))
                            });
                        if (a && E(a))
                            for (b = a.split(nb),
                                c = 0,
                                e = this.length; e > c; c++)
                                if (f = this[c],
                                    f && 1 === f.nodeType)
                                    if (f.className || 1 !== b.length) {
                                        for (g = " " + f.className + " ",
                                            h = 0,
                                            i = b.length; i > h; h++)
                                            ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                                        f.className = X(g)
                                    } else
                                        f.className = a;
                        return this
                    },
                    Qb.removeClass = function(a) {
                        var c, e, f, g, h, i, j;
                        if (G(a))
                            return this.each(function(b) {
                                d(this).removeClass(a.call(this, b, this.className))
                            });
                        if (a && E(a) || a === b)
                            for (c = (a || "").split(nb),
                                e = 0,
                                f = this.length; f > e; e++)
                                if (g = this[e],
                                    1 === g.nodeType && g.className)
                                    if (a) {
                                        for (h = (" " + g.className + " ").replace(jb, " "),
                                            i = 0,
                                            j = c.length; j > i; i++)
                                            h = h.replace(" " + c[i] + " ", " ");
                                        g.className = X(h)
                                    } else
                                        g.className = "";
                        return this
                    },
                    Qb.hasClass = function(a) {
                        return j(this, a)
                    },
                    Qb.fadeIn = function() {
                        this.each(function() {
                            d(this).show()
                        })
                    },
                    Qb.fadeOut = function() {
                        this.each(function() {
                            d(this).hide()
                        })
                    },
                    Qb.serializeArray = function() {
                        return this.map(function() {
                            return this.elements ? O(this.elements) : this
                        }).filter(function() {
                            return this.name && !this.disabled && (this.checked || tb.test(this.nodeName) || ub.test(this.type))
                        }).map(function(a, b) {
                            var c = d(this).val();
                            return null == c || H(c) ? y(c, function(a) {
                                return {
                                    name: b.name,
                                    value: a.replace(sb, "\r\n")
                                }
                            }) : {
                                name: b.name,
                                value: c.replace(sb, "\r\n")
                            }
                        }).get()
                    },
                    Qb.wrap = function(a) {
                        return this.each(function() {
                            var b = d(d(a)[0].cloneNode(!1));
                            d(this).before(b),
                                b.append(d(this))
                        })
                    },
                    Qb.prop = function(a, b) {
                        return D(b) ? this.each(function() {
                            this[a] = b
                        }) : this[0] && this[0][a]
                    },
                    Qb.clone = function() {
                        return d(this.map(function() {
                            return this.cloneNode(!0)
                        }))
                    },
                    Qb.toggleClass = function(a, b) {
                        return this.each(function() {
                            var c = d(this);
                            (D(b) ? b : !c.hasClass(a)) ? c.addClass(a): c.removeClass(a)
                        })
                    },
                    d.Expr = {
                        hidden: function(a) {
                            return "none" === (d.css && d.css(a, "display") || a.style.display)
                        },
                        visible: function(a) {
                            return !d.Expr.hidden(a)
                        }
                    },
                    d.hasClass = j,
                    d.walk = l,
                    d.$$ = m,
                    d.setQuery = function(a) {
                        d.query = function(b, c) {
                            return m(b, c, a || function(a, b) {
                                return b.querySelectorAll(a)
                            })
                        }
                    };
                var Wb = ab();
                d.setQuery(Wb || function(a, b) {
                        return (b = b || bb).querySelectorAll ? O(b.querySelectorAll(a)) : []
                    }),
                    d.loadScript = n,
                    d.each = function(a, c, d) {
                        var e, f = 0,
                            g = a.length,
                            h = g === b || G(a);
                        if (d)
                            if (h) {
                                for (e in a)
                                    if (c.apply(a[e], d) === !1)
                                        break
                            } else
                                for (; g > f && c.apply(a[f++], d) !== !1;)
                            ;
                        else if (h) {
                            for (e in a)
                                if (c.call(a[e], e, a[e]) === !1)
                                    break
                        } else
                            for (; g > f && c.call(a[f], f, a[f++]) !== !1;)
                        ;
                        return a
                    },
                    d._each = p,
                    d.filter = r,
                    d._indexOf = s,
                    d._defaults = function(a) {
                        return p(Ib.call(arguments, 1), function(b) {
                                for (var c in b)
                                    null == a[c] && (a[c] = b[c])
                            }),
                            a
                    },
                    d._filter = t,
                    d.proxy = function(a, b) {
                        if ("string" == typeof b) {
                            var c = a[b];
                            b = a,
                                a = c
                        }
                        if (G(a)) {
                            var d = Ib.call(arguments, 2),
                                e = function() {
                                    return a.apply(b, d.concat(Ib.call(arguments)))
                                };
                            return e.guid = a.guid = a.guid || e.guid || Tb++,
                                e
                        }
                    },
                    d.dir = u,
                    d.nth = v,
                    d.sibling = w,
                    d.grep = x,
                    d.map = y,
                    d.data = z,
                    d.attrs = A,
                    d.eqSI = B,
                    X = vb ? function(a) {
                        return null == a ? "" : vb.call(a)
                    } : function(a) {
                        return null == a ? "" : a.toString().replace(wb, "").replace(xb, "")
                    },
                    d.trim = X,
                    d.indexOf = d.inArray = function(a, b) {
                        if (!b)
                            return -1;
                        if (Kb)
                            return Kb.call(b, a);
                        for (var c = 0, d = b.length; d > c; c++)
                            if (b[c] === a)
                                return c;
                        return -1
                    },
                    p("Boolean Number String Function Array Date RegExp Object".split(" "), function(a) {
                        return Ab["[object " + a + "]"] = a.toLowerCase(),
                            this
                    }),
                    d.type = C,
                    d.isFunction = G,
                    d.isArray = Array.isArray || H,
                    d.isWindow = J,
                    d.isNaN = K,
                    d.merge = M,
                    d.extend = d.fn.extend = N,
                    d.makeArray = O,
                    d.htmlFrag = P;
                var Xb = function(a, b, c) {
                    if (a === b)
                        return c;
                    for (var d = a.nextSibling; d;) {
                        if (d === b)
                            return -1;
                        d = d.nextSibling
                    }
                    return 1
                };
                return Y = d.contains = cb.contains ? function(a, b) {
                        return a !== b && (a.contains ? a.contains(b) : !0)
                    } : function() {
                        return !1
                    },
                    Z = cb.compareDocumentPosition ? (Y = function(a, b) {
                        return !!(16 & a.compareDocumentPosition(b))
                    }) && function(a, b) {
                        return a === b ? (Bb = !0,
                            0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                    } : function(a, b) {
                        if (a === b)
                            return Bb = !0,
                                0;
                        if (a.sourceIndex && b.sourceIndex)
                            return a.sourceIndex - b.sourceIndex;
                        var c, d, e = [],
                            f = [],
                            g = a.parentNode,
                            h = b.parentNode,
                            i = g;
                        if (g === h)
                            return Xb(a, b);
                        if (!g)
                            return -1;
                        if (!h)
                            return 1;
                        for (; i;)
                            e.unshift(i),
                            i = i.parentNode;
                        for (i = h; i;)
                            f.unshift(i),
                            i = i.parentNode;
                        c = e.length,
                            d = f.length;
                        for (var j = 0; c > j && d > j; j++)
                            if (e[j] !== f[j])
                                return Xb(e[j], f[j]);
                        return j === c ? Xb(a, f[j], -1) : Xb(e[j], b, 1)
                    },
                    d.unique = S,
                    p({
                        parent: function(a) {
                            var b = a.parentNode;
                            return b && 11 !== b.nodeType ? b : null
                        },
                        parents: function(a) {
                            return u(a, "parentNode")
                        },
                        parentsUntil: function(a, b, c) {
                            return u(a, "parentNode", c)
                        },
                        next: function(a) {
                            return v(a, 2, "nextSibling")
                        },
                        prev: function(a) {
                            return v(a, 2, "previousSibling")
                        },
                        nextAll: function(a) {
                            return u(a, "nextSibling")
                        },
                        prevAll: function(a) {
                            return u(a, "previousSibling")
                        },
                        nextUntil: function(a, b, c) {
                            return u(a, "nextSibling", c)
                        },
                        prevUntil: function(a, b, c) {
                            return u(a, "previousSibling", c)
                        },
                        siblings: function(a) {
                            return w(a.parentNode.firstChild, a)
                        },
                        children: function(a) {
                            return w(a.firstChild)
                        },
                        contents: function(a) {
                            return "iframe" === a.nodeName ? a.contentDocument || a.contentWindow["document "] : O(a.childNodes)
                        }
                    }, function(a, b) {
                        d.fn[b] = function(c, d) {
                            var e = y(this, a, c),
                                f = Ib.call(arguments);
                            return fb.test(b) || (d = c),
                                E(d) && (e = O(r(d, e))),
                                e = this.length > 1 && !yb[b] ? S(e) : e,
                                (this.length > 1 || gb.test(d)) && hb.test(b) && (e = e.reverse()),
                                this.ps(e, b, f.join(","))
                        }
                    }),
                    p({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after"
                    }, function(a, b) {
                        d.fn[b] = function(c) {
                            var e, f, g, h = [],
                                i = d(c),
                                j = 1 === this.length && this[0].parentNode;
                            if (j && 11 === j.nodeType && 1 === j.childNodes.length && 1 === i.length)
                                return i[a](this[0]),
                                    this;
                            for (e = 0,
                                g = i.length; g > e; e++)
                                f = (e > 0 ? this.clone(!0) : this).get(),
                                d(i[e])[a](f),
                                h = h.concat(f);
                            return this.ps(h, b, i.selector)
                        }
                    }),
                    function() {
                        var a = document.createElement("div");
                        a.style.display = "none",
                            a.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
                        var b = a.getElementsByTagName("a")[0];
                        d.support = {
                            boxModel: null,
                            opacity: /^0.55$/.test(b.style.opacity),
                            cssFloat: !!b.style.cssFloat
                        };
                        var c, e = /(webkit)[ \/]([\w.]+)/,
                            f = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                            g = /(msie) ([\w.]+)/,
                            h = /(mozilla)(?:.*? rv:([\w.]+))?/,
                            i = navigator.userAgent.toLowerCase(),
                            j = e.exec(i) || f.exec(i) || g.exec(i) || i.indexOf("compatible") < 0 && h.exec(i) || [];
                        c = d.browser = {
                                version: j[2] || "0"
                            },
                            c[j[1] || ""] = !0
                    }(),
                    d.scriptsLoaded = function(a) {
                        G(a) && db.push(a)
                    },
                    d.loadAsync = U,
                    Wb || bb.querySelectorAll || U(_, function() {
                        d.setQuery(ab())
                    }),
                    d.init = !1,
                    d.onload = function() {
                        if (!d.init)
                            try {
                                d.support.boxModel = T();
                                var a = 0;
                                p(eb, function(b) {
                                        a++,
                                        n(b.url, function() {
                                            try {
                                                b.cb && b.cb()
                                            } catch (c) {}
                                            --a || V()
                                        })
                                    }),
                                    d.init = !0,
                                    a || V()
                            } catch (b) {
                                o(b)
                            }
                    },
                    bb.body && !d.init && setTimeout(d.onload, 1),
                    d.hook = function(a) {
                        Rb.push(a)
                    },
                    d.plug = function(a, b) {
                        var c = E(a) ? a : a.name;
                        if (b = G(a) ? a : b, !G(b))
                            throw "Plugin fn required";
                        c && b && (Sb[c] = b),
                            b(d)
                    },
                    d
            }();
        e.plug("css", function(a) {
                function c(b, c, d) {
                    var f = "width" === c ? b.offsetWidth : b.offsetHeight,
                        g = "width" === c ? w : x;
                    return f > 0 ? ("border" !== d && a.each(g, function() {
                            d || (f -= parseFloat(e(b, "padding" + this)) || 0),
                                "margin" === d ? f += parseFloat(e(b, d + this)) || 0 : f -= parseFloat(e(b, "border" + this + "Width")) || 0
                        }),
                        f + "px") : ""
                }

                function d(c, d, e, f) {
                    if (c && 3 !== c.nodeType && 8 !== c.nodeType && c.style) {
                        var h, i = g(d),
                            j = c.style,
                            k = a.cssHooks[i];
                        if (d = a.cssProps[i] || i,
                            e === b)
                            return k && "get" in k && (h = k.get(c, !1, f)) !== b ? h : j[d];
                        if (!("number" == typeof e && isNaN(e) || null == e || ("number" != typeof e || a.cssNumber[i] || (e += "px"),
                                k && "set" in k && (e = k.set(c, e)) === b)))
                            try {
                                j[d] = e
                            } catch (l) {}
                    }
                }

                function e(c, d, e) {
                    var f, h = g(d),
                        i = a.cssHooks[h];
                    return d = a.cssProps[h] || h,
                        i && "get" in i && (f = i.get(c, !0, e)) !== b ? f : j ? j(c, d, h) : void 0
                }

                function f(a, b, c) {
                    var d, e = {};
                    for (var d in b)
                        e[d] = a.style[d],
                        a.style[d] = b[d];
                    c.call(a);
                    for (d in b)
                        a.style[d] = e[d]
                }

                function g(a) {
                    return a.replace(q, y)
                }

                function h(c, d, e, f, g, i) {
                    var j = c.length;
                    if ("object" == typeof d) {
                        for (var k in d)
                            h(c, k, d[k], f, g, e);
                        return c
                    }
                    if (e !== b) {
                        f = !i && f && a.isFunction(e);
                        for (var l = 0; j > l; l++)
                            g(c[l], d, f ? e.call(c[l], l, g(c[l], d)) : e, i);
                        return c
                    }
                    return j ? g(c[0], d) : b
                }

                function i(b) {
                    return a.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
                }
                var j, k, l, m = document,
                    n = m.documentElement,
                    o = /alpha\([^)]*\)/i,
                    p = /opacity=([^)]*)/,
                    q = /-([a-z])/gi,
                    r = /([A-Z])/g,
                    s = /^-?\d+(?:px)?$/i,
                    t = /^-?\d/,
                    u = /^(?:body|html)$/i,
                    v = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    w = ["Left", "Right"],
                    x = ["Top", "Bottom"],
                    y = function(a, b) {
                        return b.toUpperCase()
                    };
                a.cssHooks = {
                        opacity: {
                            get: function(a, b) {
                                if (!b)
                                    return a.style.opacity;
                                var c = j(a, "opacity", "opacity");
                                return "" === c ? "1" : c
                            }
                        }
                    },
                    a._each(["height", "width"], function(b) {
                        a.cssHooks[b] = {
                            get: function(a, d, e) {
                                var g;
                                return d ? 0 !== a.offsetWidth ? c(a, b, e) : (f(a, v, function() {
                                        g = c(a, b, e)
                                    }),
                                    g) : void 0
                            },
                            set: function(a, b) {
                                return s.test(b) ? (b = parseFloat(b),
                                    b >= 0 ? b + "px" : void 0) : b
                            }
                        }
                    }),
                    a.support.opacity || (a.support.opacity = {
                        get: function(a, b) {
                            return p.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
                        },
                        set: function(b, c) {
                            var d = b.style;
                            d.zoom = 1;
                            var e = a.isNaN(c) ? "" : "alpha(opacity=" + 100 * c + ")",
                                f = d.filter || "";
                            d.filter = o.test(f) ? f.replace(o, e) : d.filter + " " + e
                        }
                    }),
                    m.defaultView && m.defaultView.getComputedStyle && (k = function(c, d, e) {
                        var f, g, h;
                        return e = e.replace(r, "-$1").toLowerCase(),
                            (g = c.ownerDocument.defaultView) ? ((h = g.getComputedStyle(c, null)) && (f = h.getPropertyValue(e),
                                    "" !== f || a.contains(c.ownerDocument.documentElement, c) || (f = a.style(c, e))),
                                f) : b
                    }),
                    m.documentElement.currentStyle && (l = function(a, b) {
                        var c, d = a.currentStyle && a.currentStyle[b],
                            e = a.runtimeStyle && a.runtimeStyle[b],
                            f = a.style;
                        return !s.test(d) && t.test(d) && (c = f.left,
                                e && (a.runtimeStyle.left = a.currentStyle.left),
                                f.left = "fontSize" === b ? "1em" : d || 0,
                                d = f.pixelLeft + "px",
                                f.left = c,
                                e && (a.runtimeStyle.left = e)),
                            "" === d ? "auto" : d
                    }),
                    j = k || l,
                    a.fn.css = function(a, c) {
                        return 2 === arguments.length && c === b ? this : h(this, a, c, !0, function(a, c, f) {
                            return f !== b ? d(a, c, f) : e(a, c)
                        })
                    },
                    a.cssNumber = {
                        zIndex: !0,
                        fontWeight: !0,
                        opacity: !0,
                        zoom: !0,
                        lineHeight: !0
                    },
                    a.cssProps = {
                        "float": a.support.cssFloat ? "cssFloat" : "styleFloat"
                    },
                    a.style = d,
                    a.css = e,
                    a.swap = f,
                    a.camelCase = g;
                var z, A, B, C, D, E, F = function() {
                        if (!z) {
                            var b, c, d, f = m.body,
                                g = m.createElement("div"),
                                h = parseFloat(e(f, "marginTop")) || 0,
                                i = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
                            a.extend(g.style, {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    margin: 0,
                                    border: 0,
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                }),
                                g.innerHTML = i,
                                f.insertBefore(g, f.firstChild),
                                b = g.firstChild,
                                c = b.firstChild,
                                d = b.nextSibling.firstChild.firstChild,
                                D = 5 !== c.offsetTop,
                                E = 5 === d.offsetTop,
                                c.style.position = "fixed",
                                c.style.top = "20px",
                                C = 20 === c.offsetTop || 15 === c.offsetTop,
                                c.style.position = c.style.top = "",
                                b.style.overflow = "hidden",
                                b.style.position = "relative",
                                B = -5 === c.offsetTop,
                                A = f.offsetTop !== h,
                                f.removeChild(g),
                                z = !0
                        }
                    },
                    G = function(a) {
                        var b = a.offsetTop,
                            c = a.offsetLeft;
                        return F(),
                            A && (b += parseFloat(e(a, "marginTop")) || 0,
                                c += parseFloat(e(a, "marginLeft")) || 0), {
                                top: b,
                                left: c
                            }
                    };
                a.fn.offset = function() {
                        var b, c = this[0];
                        if (!c || !c.ownerDocument)
                            return null;
                        if (c === c.ownerDocument.body)
                            return G(c);
                        try {
                            b = c.getBoundingClientRect()
                        } catch (d) {}
                        if (!b || !a.contains(n, c))
                            return b ? {
                                top: b.top,
                                left: b.left
                            } : {
                                top: 0,
                                left: 0
                            };
                        var e = m.body,
                            f = i(m),
                            g = n.clientTop || e.clientTop || 0,
                            h = n.clientLeft || e.clientLeft || 0,
                            j = f.pageYOffset || a.support.boxModel && n.scrollTop || e.scrollTop,
                            k = f.pageXOffset || a.support.boxModel && n.scrollLeft || e.scrollLeft,
                            l = b.top + j - g,
                            o = b.left + k - h;
                        return {
                            top: l,
                            left: o
                        }
                    },
                    a.fn.position = function() {
                        if (!this[0])
                            return null;
                        var a = this[0],
                            b = this.offsetParent(),
                            c = this.offset(),
                            d = u.test(b[0].nodeName) ? {
                                top: 0,
                                left: 0
                            } : b.offset();
                        return c.top -= parseFloat(e(a, "marginTop")) || 0,
                            c.left -= parseFloat(e(a, "marginLeft")) || 0,
                            d.top += parseFloat(e(b[0], "borderTopWidth")) || 0,
                            d.left += parseFloat(e(b[0], "borderLeftWidth")) || 0, {
                                top: c.top - d.top,
                                left: c.left - d.left
                            }
                    },
                    a.fn.offsetParent = function() {
                        return this.map(function() {
                            for (var a = this.offsetParent || m.body; a && !u.test(a.nodeName) && "static" === e(a, "position");)
                                a = a.offsetParent;
                            return a
                        })
                    },
                    a._each(["Height", "Width"], function(c) {
                        var d = c.toLowerCase();
                        a.fn["inner" + c] = function() {
                                var a = this[0];
                                return a && a.style ? parseFloat(e(a, d, "padding")) : null
                            },
                            a.fn["outer" + c] = function(a) {
                                var b = this[0];
                                return b && b.style ? parseFloat(e(b, d, a ? "margin" : "border")) : null
                            },
                            a.fn[d] = function(f) {
                                var g = this[0];
                                if (!g)
                                    return null == f ? null : this;
                                if (a.isFunction(f))
                                    return this.each(function(b) {
                                        var c = a(this);
                                        c[d](f.call(this, b, c[d]()))
                                    });
                                if (a.isWindow(g)) {
                                    var h = g.document.documentElement["client" + c],
                                        i = g.document.body;
                                    return "CSS1Compat" === g.document.compatMode && h || i && i["client" + c] || h
                                }
                                if (9 === g.nodeType)
                                    return Math.max(g.documentElement["client" + c], g.body["scroll" + c], g.documentElement["scroll" + c], g.body["offset" + c], g.documentElement["offset" + c]);
                                if (f === b) {
                                    var j = e(g, d),
                                        k = parseFloat(j);
                                    return a.isNaN(k) ? j : k
                                }
                                return this.css(d, "string" == typeof f ? f : f + "px")
                            }
                    }),
                    a._each(["Left", "Top"], function(c, d) {
                        var e = "scroll" + c;
                        a.fn[e] = function(c) {
                            var f, g;
                            return c === b ? (f = this[0]) ? (g = i(f),
                                g ? "pageXOffset" in g ? g[d ? "pageYOffset" : "pageXOffset"] : a.support.boxModel && g.document.documentElement[e] || g.document.body[e] : f[e]) : null : this.each(function() {
                                g = i(this),
                                    g ? g.scrollTo(d ? a(g).scrollLeft() : c, d ? c : a(g).scrollTop()) : this[e] = c
                            })
                        }
                    })
            }),
            e.plug("custom", function(b) {
                for (var c = a, d = {}, e = c.location.search.substring(1).split("&"), f = b.Key = function(a) {
                        this.keyCode = a
                    }, g = 0; g < e.length; g++) {
                    var h = e[g].split("=");
                    d[h[0]] = unescape(h[1])
                }
                b.queryString = function(a) {
                        return d[a]
                    },
                    f.namedKeys = {
                        Backspace: 8,
                        Tab: 9,
                        Enter: 13,
                        Shift: 16,
                        Ctrl: 17,
                        Alt: 18,
                        Pause: 19,
                        Capslock: 20,
                        Escape: 27,
                        PageUp: 33,
                        PageDown: 34,
                        End: 35,
                        Home: 36,
                        LeftArrow: 37,
                        UpArrow: 38,
                        RightArrow: 39,
                        DownArrow: 40,
                        Insert: 45,
                        Delete: 46
                    },
                    b._each(f.namedKeys, function(a, b) {
                        var c = a;
                        f.prototype["is" + b] = function() {
                            return this.keyCode === c
                        }
                    }),
                    b.key = function(b) {
                        return b = b || a.event,
                            new f(b.keyCode || b.which)
                    },
                    b.cancelEvent = function(b) {
                        return b || (b = a.event),
                            b.cancelBubble = !0,
                            b.returnValue = !1,
                            b.stopPropagation && (b.stopPropagation(),
                                b.preventDefault()), !1
                    },
                    b.preventDefault = function(a) {
                        a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                    },
                    b.templateSettings = {
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g,
                        escape: /<%-([\s\S]+?)%>/g
                    },
                    b._template = function(a, c) {
                        var d = b.templateSettings,
                            e = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(d.escape, function(a, b) {
                                return "',_.escape(" + b.replace(/\\'/g, "'") + "),'"
                            }).replace(d.interpolate, function(a, b) {
                                return "'," + b.replace(/\\'/g, "'") + ",'"
                            }).replace(d.evaluate || null, function(a, b) {
                                return "');" + b.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + ";__p.push('"
                            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
                            f = new Function("obj", "$", e);
                        return c ? f(c, b) : function(a) {
                            return f(a, b)
                        }
                    }
            }),
            e.plug("events", function(b) {
                function c(a) {
                    return a._jquid || (a._jquid = n++)
                }

                function d(b, c, d) {
                    b.addEventListener ? b.addEventListener(c, d, !1) : (o[c + d] = function() {
                            d(a.event)
                        },
                        b.attachEvent("on" + c, o[c + d]))
                }

                function e(a, b, c) {
                    a.removeEventListener ? a.removeEventListener(b, c, !1) : (a.detachEvent("on" + b, o[b + c]),
                        o[b + c] = null)
                }

                function f(a) {
                    var b = ("" + a).split(".");
                    return {
                        e: b[0],
                        ns: b.slice(1).sort().join(" ")
                    }
                }

                function g(a) {
                    return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
                }

                function h(a, d, e, h) {
                    if (d = f(d),
                        d.ns)
                        var i = g(d.ns);
                    return b._filter(m[c(a)] || [], function(a) {
                        return !(!a || d.e && a.e != d.e || d.ns && !i.test(a.ns) || e && a.fn != e || h && a.sel != h)
                    })
                }

                function i(a, e, g, h, i) {
                    var j = c(a),
                        k = m[j] || (m[j] = []);
                    b._each(e.split(/\s/), function(c) {
                            var e = b.extend(f(c), {
                                fn: g,
                                sel: h,
                                del: i,
                                i: k.length
                            });
                            k.push(e),
                                d(a, e.e, i || g)
                        }),
                        a = null
                }

                function j(a, d, f, g) {
                    var i = c(a);
                    b._each((d || "").split(/\s/), function(c) {
                        b._each(h(a, c, f, g), function(b) {
                            delete m[i][b.i],
                                e(a, b.e, b.del || b.fn)
                        })
                    })
                }

                function k(a) {
                    var c = b.extend({
                        originalEvent: a
                    }, a);
                    return b._each(p, function(b) {
                            a[b] && (c[b] = function() {
                                return a[b].apply(a, arguments)
                            })
                        }),
                        c
                }
                var l = document,
                    m = {},
                    n = 1,
                    o = {};
                b.bind = d,
                    b.unbind = e;
                var p = ["preventDefault", "stopImmediatePropagation", "stopPropagation"],
                    q = b.fn;
                b._each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a) {
                        q[a] = function(b, c) {
                            return arguments.length > 0 ? this.bind(a, b, c) : this.trigger(a)
                        }
                    }),
                    q.bind = function(a, b) {
                        return this.each(function() {
                            i(this, a, b)
                        })
                    },
                    q.unbind = function(a, b) {
                        return this.each(function() {
                            j(this, a, b)
                        })
                    },
                    q.one = function(a, b) {
                        return this.each(function() {
                            var c = this;
                            i(this, a, function() {
                                b.apply(c, arguments),
                                    j(c, a, arguments.callee)
                            })
                        })
                    },
                    q.delegate = function(c, d, e) {
                        return this.each(function(f, g) {
                            i(g, d, e, c, function(d) {
                                for (var f = d.target || d.srcElement, h = b.$$(c, g); f && b._indexOf(h, f) < 0;)
                                    f = f.parentNode;
                                f && f !== g && f !== document && e.call(f, b.extend(k(d || a.event), {
                                    currentTarget: f,
                                    liveFired: g
                                }))
                            })
                        })
                    },
                    q.undelegate = function(a, b, c) {
                        return this.each(function() {
                            j(this, b, c, a)
                        })
                    },
                    q.live = function(a, c) {
                        return b(l.body).delegate(this.selector, a, c),
                            this
                    },
                    q.die = function(a, c) {
                        return b(l.body).undelegate(this.selector, a, c),
                            this
                    },
                    q.on = function(a, b, c) {
                        return "function" == typeof b ? this.bind(a, b) : this.delegate(b, a, c)
                    },
                    q.off = function(a, b, c) {
                        return "string" == typeof b ? this.undelegate(b, a, c) : this.unbind(a, c)
                    },
                    q.trigger = function(a) {
                        return this.each(function() {
                            if ("click" == a && this[a])
                                return this[a]();
                            if (l.createEvent) {
                                var b = l.createEvent("Events");
                                this.dispatchEvent(b, b.initEvent(a, !0, !0))
                            } else if (this.fireEvent)
                                try {
                                    "ready" !== a && this.fireEvent("on" + a)
                                } catch (b) {}
                        })
                    },
                    b.init || b(a).bind("load", b.onload)
            }),
            e.noConflict = function(b) {
                return a.$ === e && (a.$ = d),
                    b && a.jquip === e && (a.jquip = c),
                    e
            },
            a.$ = a.jquip = e
    }(window),
    GIELLA.jquip = jquip.noConflict(!0),
    function(a) {
        "use strict";
        var b = function(a, c) {
            this.name = a,
                this.async = !0,
                this.sandbox = c,
                this.userDictionaryManager = new b.UserDictionaryManager(this.sandbox)
        };
        b.wordStatus = {
                unknown: 0,
                misspelled: 1,
                ignored: 2,
                inprocess: 3,
                correct: 4,
                userDictionary: 5,
                userIgnore: 6
            },
            b.prototype = {
                init: function() {
                    this.sandbox.subscribe("wordsCollected", function(a) {
                            this.wordsCollectedHandler(a.wordsCollection)
                        }, this),
                        this.sandbox.subscribe("getUserDictionaryName", function(a) {
                            this.userDictionaryManager.getUserDictionaryName(a)
                        }),
                        this.sandbox.subscribe("createUserDictionary", function(a) {
                            this.userDictionaryManager.createUserDictionary(a)
                        }),
                        this.sandbox.subscribe("restoreUserDictionary", function(a) {
                            this.userDictionaryManager.restoreUserDictionary(a)
                        }),
                        this.sandbox.subscribe("renameUserDictionary", function(a) {
                            this.userDictionaryManager.renameUserDictionary(a)
                        }),
                        this.sandbox.subscribe("removeUserDictionary", function(a) {
                            this.userDictionaryManager.removeUserDictionary(a)
                        }),
                        this.sandbox.subscribe("setUserDictionaryName", function(a) {
                            this.userDictionaryManager.setUserDictionaryName(a.name)
                        }),
                        this.sandbox.subscribe("userDictionaryChanged", function() {
                            this.userDictionaryManager.setUserDictionaryNameFromStorage()
                        }),
                        this.sandbox.subscribe("userDictionaryStateChanged", function() {
                            this.userDictionaryStateChangedHandler()
                        }),
                        this.sandbox.subscribe("userDictionaryStateRestored", function() {
                            this.userDictionaryStateRestoredHandler()
                        }),
                        this.sandbox.subscribe("addWordToUserDictionary", function(a) {
                            this.addWordToUserDictionaryHandler(a.word)
                        }),
                        this.sandbox.subscribe("getSuggestionsList", function(a) {
                            this.getSuggestionsListHandler(a.word, a.lang)
                        }, this),
                        this.getLangList()
                },
                getLangList: function() {
                    var a = this;
                    a.sandbox.IO.get(new a.sandbox.IO.URL({
                        protocol: a.sandbox.getOption("service_protocol"),
                        host: a.sandbox.getOption("service_host"),
                        port: a.sandbox.getOption("service_port"),
                        path: a.sandbox.getOption("service_path")
                    }).addParameter("cmd", "get_lang_list").addParameter("run_mode", "web_service").addParameter("customerid", a.sandbox.getOption("customer_id")).addParameter("slang", a.sandbox.getOption("lang")), function(b) {
                        var c, d, e;
                        a.sandbox.setOption("giellaLangList", b.langList),
                            c = a.sandbox.getOption("giellaLangList"),
                            d = a.sandbox.getOption("graytLangList"),
                            e = a.sandbox.getOption("lang"),
                            e in c.ltr || e in c.rtl || a.sandbox.setOption("lang", a.sandbox.getDefaultOption("lang")),
                            a.sandbox.fire("moduleReady", {
                                moduleID: a.name
                            })
                    }, function(b) {
                        b.is_critical && (a.sandbox.setPaused(!0),
                            a.sandbox.removeAllDeferredFunctions())
                    })
                },
                wordsCollectedHandler: function(a) {
                    var b, c;
                    for (var d in a.detectedLanguages)
                        b = this.addWordsToDictionary(a.words, d),
                        c = this.getUnknownWords(d),
                        this.getWordsInfo(c, d),
                        this.precessIgnoredWords(b.ignored, d),
                        "th_TH" == d ? this.processWithTimeout(this.getMisspelledWords(d), d) : this.processWithTimeout(b.misspelled, d)
                },
                userDictionaryStateChangedHandler: function() {
                    for (var a = (this.Dictionary,
                            this.getUdWordsFromDictionary()), c = 0; c < a.length; c++)
                        a[c].setStatusForAllInstances(b.wordStatus.unknown);
                    this.sandbox.fire("startSpellCheck")
                },
                addWordToUserDictionaryHandler: function(a) {
                    var b = this.sandbox.getSelection(),
                        c = b.anchorNode(),
                        d = [],
                        e = this.sandbox.getOption("misspelled_word_node"),
                        f = this.sandbox.getOption("data_attribute_name");
                    this.sandbox.Utils.isEqualNode(c, f) ? d.push(c) : d = this.sandbox.DOM.findNodeParents(c, e, f),
                        a ? this.userDictionaryManager.addWordToUserDictionary(a) : d.length > 0 && (a = d[0].getAttribute(f),
                            this.userDictionaryManager.addWordToUserDictionary(a)),
                        this.sandbox.fireInAllApps("removeMarkupFromWords", {
                            words: [{
                                word: a
                            }]
                        })
                },
                getSuggestionsListHandler: function(a, c) {
                    this.sandbox.fire("suggestionListSend", {
                        suggestionList: b.Dictionary.getWord(a, c).suggestions
                    })
                },
                userDictionaryStateRestoredHandler: function() {
                    for (var a, c = this, d = this.getUdWordsFromDictionary(), e = this.sandbox.getOption("userDictionaryName"), f = b.Dictionary, g = 0; g < d.length; g++)
                        d[g].setStatusForAllInstances(b.wordStatus.unknown);
                    this.userDictionaryManager.getUserDictionaryFromServer(e, function(d) {
                        for (var e = d.wordlist, g = 0, h = e.length; h > g; g++)
                            if (a = f.getAllWordsByName(e[g]),
                                a.length > 0)
                                for (var i = 0; i < a.length; i++)
                                    a[i].setStatusForAllInstances(b.wordStatus.unknown);
                        c.sandbox.fireInAllApps("removeMarkupInDocument"),
                            c.sandbox.fireInAllApps("startSpellCheck")
                    })
                },
                addWordsToDictionary: function(a, c) {
                    var d = b.Dictionary,
                        e = this.sandbox.getOption("uid"),
                        f = {
                            unknown: [],
                            misspelled: [],
                            ignored: []
                        };
                    for (var g in a) {
                        var h = a[g].word,
                            i = d.getWord(h, c);
                        i || (i = d.addWord(h, c)),
                            0 == i.existsInInstance(e) && i.addToInstance(e),
                            i.getStatus(e) == b.wordStatus.ignored && i.resetStatus(e),
                            this.sandbox.getOption("ignore-all-caps-words") === !0 && i.word == i.word.toUpperCase() && i.setStatus(b.wordStatus.ignored, e),
                            this.sandbox.getOption("ignore-words-with-mixed-cases") === !0 && 0 == (i.word == i.word.toLowerCase()) && 0 == (i.word == i.word.toUpperCase()) && (i.word.split("")[0] != i.word.split("")[0].toUpperCase() || i.word.split("").slice(1).join("") != i.word.split("").slice(1).join("").toLowerCase()) && i.setStatus(b.wordStatus.ignored, e),
                            this.sandbox.getOption("ignore-words-with-numbers") === !0 && i.word.replace(/[0-9]/g, "") != i.word && i.setStatus(b.wordStatus.ignored, e),
                            this.sandbox.getOption("ignore-domain-names") === !0 && i.word.replace(/\./g, "") != i.word && i.setStatus(b.wordStatus.ignored, e),
                            i.getStatus(e) == b.wordStatus.ignored && f.ignored.push(i),
                            i.getStatus(e) == b.wordStatus.unknown && f.unknown.push(i),
                            i.getStatus(e) == b.wordStatus.misspelled && f.misspelled.push(i)
                    }
                    return f
                },
                getWordsFromDictionaryByStatus: function(a, c) {
                    var d = this.sandbox.getOption("uid"),
                        e = b.Dictionary;
                    return e.getWordsFromDictionaryByStatus(a, d, c)
                },
                getUnknownWords: function(a) {
                    var c = this.getWordsFromDictionaryByStatus(a, b.wordStatus.unknown);
                    return c
                },
                getMisspelledWords: function(a) {
                    var c = this.getWordsFromDictionaryByStatus(a, b.wordStatus.misspelled);
                    return c
                },
                getUdWordsFromDictionary: function() {
                    var a = b.Dictionary;
                    return a.getAllWordsByStatus(b.wordStatus.userDictionary)
                },
                precessIgnoredWords: function(a, b) {
                    var c = this;
                    this.sandbox.addDeferredFunction("preocessIgnoredWordsForLang_" + b, {
                        delay: 100,
                        collection: a,
                        partialItemsCount: 100,
                        defferedFunctionArgs: [b],
                        deferredFunction: function(a) {
                            c.sandbox.fire("removeMarkupFromWords", {
                                words: a
                            })
                        }
                    })
                },
                processWithTimeout: function(a, c) {
                    var d = this;
                    this.sandbox.addDeferredFunction("precessWordsForLang_" + c, {
                        delay: 1500,
                        collection: a,
                        partialItemsCount: 2,
                        defferedFunctionArgs: [c],
                        deferredFunction: function(a, c) {
                            for (var e = 0; e < a.length;)
                                a[e].getStatus(d.sandbox.getOption("uid")) != b.wordStatus.misspelled ? a.splice(e, 1) : e++;
                            0 !== a.length && d.sandbox.fire("misspelledWordsFound", {
                                words: a,
                                lang: c
                            })
                        }
                    })
                },
                getWordsInfo: function(a, c) {
                    function d(a, b) {
                        for (var c = 0; c < a.length; c++)
                            a[c].setGlobalStatus(b)
                    }
                    var e = this,
                        f = "word_",
                        g = this.sandbox.getOption("giellaLangList");
                    if (a && !(a.length < 1)) {
                        if (!(c in g.ltr || c in g.rtl))
                            return console.warn('Specified "' + c + '" language is not supported for your Customer ID. More details at http://wiki.webspellchecker.net or contact support@webspellchecker.net'),
                                void 0;
                        for (var h = 0; h < a.length; h++)
                            a[h].setGlobalStatus(b.wordStatus.inprocess);
                        this.sandbox.addDeferredFunction("getWordsInfoForLang_" + c, {
                            delay: 500,
                            collection: a,
                            partialItemsCount: 10,
                            defferedFunctionArgs: [c],
                            onUnregister: function() {
                                var a = this;
                                d(a.collection, b.wordStatus.unknown)
                            },
                            deferredFunction: function(a, c) {
                                for (var g = this, h = [], i = 0; i < a.length; i++)
                                    h.push(a[i].word);
                                var j = null == e.sandbox.getOption("userDictionaryName") ? "" : e.sandbox.getOption("userDictionaryName");
                                return e.sandbox.IO.get(new e.sandbox.IO.URL({
                                    protocol: e.sandbox.getOption("service_protocol"),
                                    host: e.sandbox.getOption("service_host"),
                                    port: e.sandbox.getOption("service_port"),
                                    path: e.sandbox.getOption("service_path")
                                }).addParameter("cmd", "check_spelling").addParameter("customerid", e.sandbox.getOption("customer_id")).addParameter("run_mode", "web_service").addParameter("format", "json").addParameter("out_type", "words").addParameter("version", "1.0").addParameter("slang", c).addParameter("custom_dictionary", e.sandbox.getOption("customDictionary")).addParameter("user_dictionary", j).addParameter("user_wordlist", e.userDictionaryManager.getWordsFromUserDictionary()).addParameter("text", h.join(",")), function(d) {
                                    if ("th_TH" == c)
                                        for (var g = 0; g < d.length; g++) {
                                            var h = {};
                                            h[f + d[g].word] = {},
                                                h[f + d[g].word].word = d[g].word,
                                                e.addWordsToDictionary(h, c),
                                                a.push(b.Dictionary.getWord(d[g].word, c))
                                        }
                                    for (var i = {}, j = [], g = 0; g < d.length; g++)
                                        i[f + d[g].word] = d[g];
                                    for (g = 0; g < a.length; g++) {
                                        var k = a[g].word,
                                            l = i[f + k] && "true" == i[f + k].ud;
                                        i[f + k] && !l ? (a[g].setGlobalStatus(b.wordStatus.misspelled),
                                            a[g].suggestions = i[f + k].suggestions,
                                            j.push(a[g])) : l ? a[g].setStatusForAllInstances(b.wordStatus.userDictionary) : a[g].setGlobalStatus(b.wordStatus.correct)
                                    }
                                    0 !== j.length && e.sandbox.fireInAllApps("misspelledWordsFound", {
                                        words: j,
                                        lang: c
                                    })
                                }, function(c) {
                                    c.is_critical && (e.sandbox.setPaused(!0),
                                            e.sandbox.removeAllDeferredFunctions(),
                                            d(a, b.wordStatus.unknown)),
                                        g.extendCollection(a)
                                }), !0
                            }
                        })
                    }
                }
            },
            b.UserDictionaryManager = function(a) {
                this.sandbox = a,
                    this.init()
            },
            b.UserDictionaryManager.prototype = {
                init: function() {
                    var a, c, d = [],
                        e = (this.sandbox.getOption("lang"),
                            this.sandbox.getOption("uid"),
                            b.Dictionary),
                        f = e.getAllWordsByStatus(b.wordStatus.userDictionary);
                    for (this.userDictionaryName = this.sandbox.getOption("userDictionaryName"),
                        c = 0; c < f.length; c++)
                        f[c].setStatusForAllInstances(b.wordStatus.unknown);
                    if (!(null != this.userDictionaryName && "string" == typeof this.userDictionaryName && this.userDictionaryName.length > 0)) {
                        this.userDictionaryKey = this.sandbox.getOption("userDictionaryKey"),
                            this.userDictionaryNameKey = this.sandbox.getOption("userDictionaryNameKey");
                        try {
                            d = this.sandbox.DataStorage.getData(this.userDictionaryKey),
                                null == d && (d = [],
                                    this.sandbox.DataStorage.setData(this.userDictionaryKey, d))
                        } catch (g) {
                            this.sandbox.DataStorage.setData(this.userDictionaryKey, d)
                        }
                        a = this.sandbox.DataStorage.getData(this.userDictionaryNameKey),
                            "string" == typeof a && null != a && a.length > 0 ? (this.userDictionaryName = a,
                                this.sandbox.setOption("userDictionaryName", this.userDictionaryName),
                                this.getUserDictionaryFromServer(a, function(a) {
                                    for (var c = a.wordlist, d = 0, g = c.length; g > d; d++)
                                        if (f = e.getAllWordsByName(c[d]),
                                            f.length > 0)
                                            for (var h = 0; h < f.length; h++)
                                                f[h].setStatusForAllInstances(b.wordStatus.userDictionary)
                                })) : this.sandbox.DataStorage.setData(this.userDictionaryNameKey, null)
                    }
                    for (var c = 0, h = d.length; h > c; c++)
                        if (f = e.getAllWordsByName(d[c]),
                            f.length > 0)
                            for (var i = 0; i < f.length; i++)
                                f[i].setStatusForAllInstances(b.wordStatus.userDictionary)
                },
                onSuccessCallback: function(a, b, c) {
                    switch ("function" == typeof b.onSuccess && b.onSuccess(c),
                        a) {
                        case "create":
                            this.setUserDictionaryName(c.name),
                                this.sandbox.fireInAllApps("userDictionaryChanged");
                            break;
                        case "delete":
                            this.setUserDictionaryName(null),
                                this.sandbox.fireInAllApps("userDictionaryChanged"),
                                this.sandbox.fire("userDictionaryStateChanged");
                            break;
                        case "rename":
                            return this.setUserDictionaryName(c.name),
                                this.sandbox.fireInAllApps("userDictionaryChanged"),
                                void 0;
                        case "check":
                            this.setUserDictionaryName(c.name),
                                this.sandbox.fireInAllApps("userDictionaryChanged"),
                                this.sandbox.fire("userDictionaryStateRestored")
                    }
                    this.clearUserDictionary()
                },
                onErrorCallback: function(a, b) {
                    "function" == typeof a.onError && a.onError(b)
                },
                createUserDictionary: function(a) {
                    var b = this,
                        c = "create";
                    this.sandbox.IO.get(new this.sandbox.IO.URL({
                        protocol: this.sandbox.getOption("service_protocol"),
                        host: this.sandbox.getOption("service_host"),
                        port: this.sandbox.getOption("service_port"),
                        path: this.sandbox.getOption("service_path")
                    }).addParameter("cmd", "user_dictionary").addParameter("action", "create").addParameter("customerid", this.sandbox.getOption("customer_id")).addParameter("v", "2.1").addParameter("format", "json").addParameter("run_mode", "web_service").addParameter("name", a.name).addParameter("wordlist", this.getWordsFromUserDictionary()), function(d) {
                        b.onSuccessCallback(c, a, d)
                    }, function(c) {
                        b.onErrorCallback(a, c)
                    })
                },
                removeUserDictionary: function(a) {
                    var b = this,
                        c = "delete";
                    this.sandbox.IO.get(new this.sandbox.IO.URL({
                        protocol: this.sandbox.getOption("service_protocol"),
                        host: this.sandbox.getOption("service_host"),
                        port: this.sandbox.getOption("service_port"),
                        path: this.sandbox.getOption("service_path")
                    }).addParameter("cmd", "user_dictionary").addParameter("action", "delete").addParameter("customerid", this.sandbox.getOption("customer_id")).addParameter("v", "2.1").addParameter("format", "json").addParameter("run_mode", "web_service").addParameter("name", this.sandbox.getOption("userDictionaryName")), function(d) {
                        b.onSuccessCallback(c, a, d)
                    }, function(c) {
                        b.onErrorCallback(a, c)
                    })
                },
                renameUserDictionary: function(a) {
                    var b = this,
                        c = "rename";
                    this.sandbox.IO.get(new this.sandbox.IO.URL({
                        protocol: this.sandbox.getOption("service_protocol"),
                        host: this.sandbox.getOption("service_host"),
                        port: this.sandbox.getOption("service_port"),
                        path: this.sandbox.getOption("service_path")
                    }).addParameter("cmd", "user_dictionary").addParameter("action", "rename").addParameter("customerid", this.sandbox.getOption("customer_id")).addParameter("v", "2.1").addParameter("format", "json").addParameter("run_mode", "web_service").addParameter("name", this.sandbox.getOption("userDictionaryName")).addParameter("new_name", a.newName), function(d) {
                        b.onSuccessCallback(c, a, d)
                    }, function(c) {
                        b.onErrorCallback(a, c)
                    })
                },
                restoreUserDictionary: function(a) {
                    var b = this,
                        c = "check";
                    this.sandbox.IO.get(new this.sandbox.IO.URL({
                        protocol: this.sandbox.getOption("service_protocol"),
                        host: this.sandbox.getOption("service_host"),
                        port: this.sandbox.getOption("service_port"),
                        path: this.sandbox.getOption("service_path")
                    }).addParameter("cmd", "user_dictionary").addParameter("action", "check").addParameter("customerid", this.sandbox.getOption("customer_id")).addParameter("v", "2.1").addParameter("format", "json").addParameter("run_mode", "web_service").addParameter("name", a.name), function(d) {
                        b.onSuccessCallback(c, a, d)
                    }, function(c) {
                        b.onErrorCallback(a, c)
                    })
                },
                addWordToUserDictionaryServer: function(a) {
                    var b = this;
                    this.sandbox.IO.get(new this.sandbox.IO.URL({
                        protocol: this.sandbox.getOption("service_protocol"),
                        host: this.sandbox.getOption("service_host"),
                        port: this.sandbox.getOption("service_port"),
                        path: this.sandbox.getOption("service_path")
                    }).addParameter("cmd", "user_dictionary").addParameter("action", "addword").addParameter("customerid", this.sandbox.getOption("customer_id")).addParameter("v", "2.1").addParameter("format", "json").addParameter("run_mode", "web_service").addParameter("name", this.sandbox.getOption("userDictionaryName")).addParameter("word", a), function() {
                        b.clearUserDictionary()
                    }, function() {})
                },
                getUserDictionaryFromServer: function(a, b) {
                    this.sandbox.IO.get(new this.sandbox.IO.URL({
                        protocol: this.sandbox.getOption("service_protocol"),
                        host: this.sandbox.getOption("service_host"),
                        port: this.sandbox.getOption("service_port"),
                        path: this.sandbox.getOption("service_path")
                    }).addParameter("cmd", "user_dictionary").addParameter("action", "getdict").addParameter("customerid", this.sandbox.getOption("customer_id")).addParameter("v", "2.1").addParameter("format", "json").addParameter("run_mode", "web_service").addParameter("name", this.sandbox.getOption("userDictionaryName")), function(a) {
                        b(a)
                    }, function() {})
                },
                addWordsToUserDictionary: function(a) {
                    for (var b = 0; b < a.length; b++)
                        this.addWordToUserDictionary(a[b])
                },
                getWordsFromUserDictionary: function() {
                    var a = this.sandbox.DataStorage.getData(this.userDictionaryKey);
                    return null == a && (a = []),
                        a.join()
                },
                checkUserDictionaryName: function(a) {
                    var b;
                    return b = "string" == typeof a && null != a && a.length > 0 ? !0 : !1
                },
                markWordFromUserDictionary: function(a) {
                    var c, d = b.Dictionary,
                        e = d.getDictionary();
                    for (var f in e)
                        c = d.getWord(a, f),
                        c && c.setStatusForAllInstances(b.wordStatus.userDictionary)
                },
                addWordToUserDictionary: function(a) {
                    var b = this.sandbox.DataStorage.getData(this.userDictionaryKey);
                    null == b && (b = []),
                        this.checkUserDictionaryName(this.sandbox.getOption("userDictionaryName")) ? (this.addWordToUserDictionaryServer(a),
                            this.markWordFromUserDictionary(a)) : this.sandbox.Utils.inArray(b, a) || (b.push(a),
                            this.sandbox.DataStorage.setData(this.userDictionaryKey, b),
                            this.markWordFromUserDictionary(a))
                },
                clearUserDictionary: function() {
                    this.sandbox.DataStorage.setData(this.userDictionaryKey, []),
                        this.sandbox.IO.get(new this.sandbox.IO.URL({
                            protocol: this.sandbox.getOption("service_protocol"),
                            host: this.sandbox.getOption("service_host"),
                            port: this.sandbox.getOption("service_port"),
                            path: this.sandbox.getOption("service_path")
                        }).addParameter("cmd", "user_dictionary").addParameter("action", "delete").addParameter("customerid", this.sandbox.getOption("customer_id")).addParameter("v", "2.1").addParameter("format", "json").addParameter("run_mode", "web_service").addParameter("name", "").addParameter("remove_ud_cookie", "true"), function() {}, function() {})
                },
                setUserDictionaryName: function(a) {
                    this.sandbox.DataStorage.setData(this.userDictionaryNameKey, a),
                        this.sandbox.setOption("userDictionaryName", a)
                },
                setUserDictionaryNameFromStorage: function() {
                    this.sandbox.setOption("userDictionaryName", this.sandbox.DataStorage.getData(this.userDictionaryNameKey)),
                        this.setUserDictionaryName(this.sandbox.DataStorage.getData(this.userDictionaryNameKey))
                }
            },
            b.Dictionary = b.Dictionary || function() {
                var a = {},
                    c = "word_";
                return {
                    getWord: function(b, d) {
                        return a[d] && a[d][c + b]
                    },
                    getWordsFromDictionaryByStatus: function(a, b, c) {
                        var d = [];
                        return this.each(a, function(a) {
                                a.getStatus(b) == c && d.push(a)
                            }),
                            d
                    },
                    getAllWordsByStatus: function(b) {
                        var c = [];
                        for (var d in a)
                            this.each(d, function(a) {
                                a.hasStatusInAnyInstance(b) && c.push(a)
                            });
                        return c
                    },
                    getAllWordsByName: function(b) {
                        var d = [];
                        for (var e in a)
                            a[e][c + b] && d.push(a[e][c + b]);
                        return d
                    },
                    setStatusToWords: function(a, b, c, d) {
                        for (var e = 0; e < a.length; e++)
                            this.getWord(a[e], c) || this.addWord(a[e], c),
                            this.getWord(a[e], c).setStatus(b, d)
                    },
                    getDictionary: function() {
                        var b = {};
                        for (var c in a)
                            a.hasOwnProperty(c) && (b[c] = a[c]);
                        return b
                    },
                    addWord: function(d, e) {
                        var f = new b.Word(d);
                        return a[e] = a[e] || {},
                            a[e][c + d] = f
                    },
                    each: function(b, c) {
                        if ("function" == typeof c)
                            for (var d in a[b])
                                c(a[b][d])
                    },
                    clear: function() {
                        a = {}
                    }
                }
            }(),
            b.Word = function(a) {
                var b, c = {},
                    d = {};
                this.word = a,
                    this.suggestions = [],
                    this.getStatus = function(a) {
                        var b;
                        return "undefined" != typeof c[a] && (b = c[a]),
                            b
                    },
                    this.hasStatusInAnyInstance = function(a) {
                        var b = !1;
                        if ("undefined" != typeof a)
                            for (var e in d)
                                if (c[e] === a) {
                                    b = !0;
                                    break
                                }
                        return b
                    },
                    this.resetStatus = function(a) {
                        "undefined" != typeof b && "undefined" != typeof a ? this.setStatus(b, a) : "undefined" != typeof a && this.setStatus(0, a)
                    },
                    this.setGlobalStatus = function(a) {
                        if ("undefined" != typeof a) {
                            b = a;
                            for (var e in d)
                                (0 == c[e] || 3 == c[e]) && (c[e] = b)
                        }
                    },
                    this.setStatusForAllInstances = function(a) {
                        if ("undefined" != typeof a)
                            for (var b in d)
                                c[b] = a
                    },
                    this.setStatus = function(a, b) {
                        "undefined" != typeof a && "undefined" != typeof b && (c[b] = a)
                    },
                    this.addToInstance = function(a) {
                        d[a] = this.word,
                            this.resetStatus(a)
                    },
                    this.existsInInstance = function(a) {
                        return d[a] ? !0 : !1
                    }
            },
            a.DictionaryManager = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, b) {
            this.name = a,
                this.sandbox = b,
                this.listeners = [],
                this.addEventListener,
                this.removeEventListener = null,
                window.addEventListener ? (this.addEventListener = function(a, b, c) {
                        a.addEventListener(b, c, !1)
                    },
                    this.removeEventListener = function(a, b, c) {
                        a.removeEventListener(b, c, !1)
                    }
                ) : window.attachEvent ? (this.addEventListener = function(a, b, c) {
                        a.attachEvent("on" + b, function(a) {
                            c.call(c, a)
                        })
                    },
                    this.removeEventListener = function(a, b, c) {
                        a.detachEvent("on" + b, function(a) {
                            c.call(c, a)
                        })
                    }
                ) : (this.addEventListener = function(a, b, c) {
                        a["on" + b] = function(a) {
                            c.call(c, a)
                        }
                    },
                    this.removeEventListener = function(a, b) {
                        a["on" + b] = void 0
                    }
                )
        };
        b.prototype = {
                init: function() {
                    this.sandbox.subscribe("addEventHandler", function(a) {
                            this.addEventHandler(a.element, a.event, a.callback)
                        }, this),
                        this.sandbox.subscribe("removeEventHandler", function(a) {
                            this.removeEventHandler(a.element, a.event, a.callback)
                        }, this),
                        this.sandbox.subscribe("removeAllEventHandlers", function() {
                            this.removeAllEventHandlers()
                        }, this)
                },
                addEventHandler: function(a, b, c) {
                    return this.listeners.push({
                            element: a,
                            event: b,
                            callback: c
                        }),
                        this.addEventListener(a, b, c)
                },
                removeEventHandler: function(a, b, c) {
                    return this.removeEventListener(a, b, c)
                },
                removeAllEventHandlers: function() {
                    for (var a = 0; a < this.listeners.length; a++)
                        this.removeEventHandler(this.listeners[a].element, this.listeners[a].event, this.listeners[a].callback);
                    this.listeners = []
                }
            },
            a.EventProxy = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, b) {
            this.name = a,
                this.sandbox = b
        };
        b.prototype = {
                init: function() {
                    this.sandbox.subscribe("markupWords", function(a) {
                            this.markupWords(a.ranges, a.lang)
                        }, this),
                        this.sandbox.subscribe("keypress", function(a) {
                            this.handleKeypress(a.event)
                        }, this),
                        this.sandbox.subscribe("removeMarkupInSelectionNode", function(a) {
                            this.removeMarkupInSelectionNode(a)
                        }, this),
                        this.sandbox.subscribe("removeMarkupInDocument", function() {
                            this.removeMarkupInDocument()
                        }, this),
                        this.sandbox.subscribe("removeMarkupFromWords", function(a) {
                            this.removeMarkupFromWords(a.words)
                        }, this)
                },
                handleKeypress: function(a) {
                    var b, c, d = this,
                        e = this.sandbox.Utils,
                        f = 67,
                        g = 65,
                        h = [45],
                        i = [8, 13, 32, 187, 186, 188, 189, 190, 191, 192, 219, 220, 221, 222];
                    b = a.ctrlKey && a.keyCode === f,
                        c = a.ctrlKey && a.keyCode === g,
                        (!b && !c && a.keyCode > 40 && a.keyCode < 91 && e.indexOf(h, a.keyCode) < 0 || e.indexOf(i, a.keyCode) >= 0) && d.removeMarkupInSelectionNode()
                },
                markupWords: function(a, b) {
                    if (0 !== a.length) {
                        var c = this,
                            d = c.sandbox.getOption("documentContainer"),
                            e = c.sandbox.getOption("misspelled_word_node"),
                            f = c.sandbox.getOption("data_attribute_name"),
                            g = c.sandbox.getOption("data_lang_attribute"),
                            h = c.sandbox.getOption("misspelled_word_class"),
                            i = c.sandbox.Utils.getCurrentDocument(d).createElement(e);
                        this.sandbox.UILib.addClass(i, h);
                        for (var j = 0; j < a.length; j++)
                            if (a[j].language === b) {
                                var k = a[j].range.commonAncestorContainer(),
                                    l = c.sandbox.Utils.isEqualNode(k, f) ? [k] : c.sandbox.DOM.findNodeParents(k, e, f);
                                if (0 === l.length) {
                                    var m = i.cloneNode(!0),
                                        n = a[j].range.toString();
                                    m.setAttribute(f, c.sandbox.Utils.removeSpecialCharacters(n)),
                                        b && m.setAttribute(g, b),
                                        m.appendChild(a[j].range.extractContents()),
                                        a[j].range.insertNode(m);
                                    var o = c.sandbox.DOM.findNodeChildren(m, e, f);
                                    for (c.sandbox.fire("markupedNode", {
                                            node: m
                                        }); o.length > 0;) {
                                        var p = o.shift();
                                        c.removeMarkup(p)
                                    }
                                }
                            }
                    }
                },
                removeMarkupInDocument: function() {
                    var a, b = this,
                        c = b.sandbox.getOption("container"),
                        d = b.sandbox.getOption("misspelled_word_node"),
                        e = b.sandbox.getOption("data_attribute_name");
                    a = b.sandbox.DOM.query(c, d + "[" + e + "]"),
                        b.removeMarkup(a)
                },
                removeMarkupFromWords: function(a) {
                    for (var b, c, d = this, e = d.sandbox.getOption("container"), f = d.sandbox.getOption("misspelled_word_node"), g = d.sandbox.getOption("data_attribute_name"), h = this.sandbox.getOption("data_lang_attribute"), i = [], j = this.sandbox.UILib, k = 0; k < a.length; k++)
                        c = d.sandbox.DOM.query(e, f + "[" + g + '="' + a[k].word + '"]'),
                        b = a[k].lang,
                        b && (c = j.filter(c, "[" + h + '="' + b + '"]')),
                        i.push.apply(i, c);
                    d.removeMarkup(i)
                },
                removeMarkupInSelectionNode: function(a) {
                    function b(a) {
                        var b = [];
                        return b = i.arrayFilter.call(a, function(a) {
                            return i.isEqualNode(a, k)
                        })
                    }
                    var c, d, e, f, g, h = this,
                        i = this.sandbox.Utils,
                        j = this.sandbox.UILib,
                        k = h.sandbox.getOption("data_attribute_name"),
                        l = a && a.selectionNode,
                        m = a && a.removeInside,
                        n = a && a.forceBookmark,
                        o = h.sandbox.getSelection(),
                        p = this.sandbox.getOption("container"),
                        q = [];
                    l ? (e = h.sandbox.createRange(),
                            e.selectNode(l),
                            q = e.getNodes()) : o.rangeCount() > 0 && (e = o.getRangeAt(0),
                            c = e.startContainer(),
                            d = e.endContainer(),
                            f = e.startOffset(),
                            g = e.endOffset(),
                            q = this.getNeighbourGiellaNodes(c, d, f, g),
                            m && (q = q.concat(e.getNodes()))),
                        q = b(q),
                        q = i.arrayUnique(q),
                        n && !this.sandbox.getOption("focused") && q.length > 0 && (p.focus(),
                            j.trigger("focus", p));
                    for (var r = 0, s = q.length; s > r; r += 1)
                        h.removeMarkup(q[r])
                },
                getNeighbourGiellaNodes: function(a, b, c, d) {
                    function e(a, b, c) {
                        var d, e, g, h = i.sandbox.getOption("container"),
                            k = /[^\t-\r \u0085\u00A0\u1680\u180E\u2000-\u200B\u2028\u2029\u202F\u205F\u3000]+/g,
                            m = i.sandbox.getOption("punctuationRegExp");
                        if (b) {
                            g = new f(b, c, a, h);
                            do {
                                if (j.isEqualNode(g.currentNode, l) && g.textWalkedThrough.length > 0) {
                                    d = g.currentNode;
                                    break
                                }
                                if (e = j.removePunctuation(g.textWalkedThrough, m),
                                    a || (e = e.split("").reverse().join("")),
                                    k.lastIndex = 0,
                                    k.test(e) && k.lastIndex + 1 <= e.length)
                                    break
                            } while (g.getNext())
                        }
                        return d
                    }

                    function f(a, b, c, d) {
                        var e = c ? "nextSibling" : "previousSibling",
                            f = 3 === a.nodeType ? c ? a.nodeValue.substr(b, a.nodeValue.length) : a.nodeValue.substr(0, b) : "";
                        this.textWalkedThrough = f,
                            this.currentNode = a,
                            this.previousNode = null,
                            this.getNext = function() {
                                if (this.currentNode.childNodes.length > 0 && this.previousNode && this.currentNode.childNodes[c * (this.currentNode.childNodes.length - 1)] !== this.previousNode ? (this.previousNode = this.currentNode,
                                        this.currentNode = this.currentNode.childNodes[!c * (this.currentNode.childNodes.length - 1)]) : this.currentNode.childNodes.length > 0 && !this.previousNode && this.currentNode.childNodes[b - 1] ? (this.previousNode = this.currentNode,
                                        this.currentNode = this.currentNode.childNodes[b - 1]) : this.currentNode[e] ? (this.previousNode = this.currentNode,
                                        this.currentNode = this.currentNode[e]) : (this.previousNode = this.currentNode,
                                        this.currentNode = this.currentNode.parentNode),
                                    this.currentNode)
                                    switch (this.currentNode.nodeType) {
                                        case 1:
                                            this.currentNode === d && (this.currentNode = null);
                                            break;
                                        case 3:
                                            c ? this.textWalkedThrough += this.currentNode.nodeValue : this.textWalkedThrough = this.currentNode.nodeValue + this.textWalkedThrough
                                    }
                                return this.currentNode
                            },
                            this.reset = function() {
                                this.textWalkedThrough = f,
                                    this.currentNode = a,
                                    this.previousNode = null
                            }
                    }
                    var g, h, i = this,
                        j = this.sandbox.Utils,
                        k = (this.sandbox.UILib, []),
                        l = this.sandbox.getOption("data_attribute_name");
                    return g = e(!1, a, c),
                        h = e(!0, b, d),
                        k = k.concat(g, h)
                },
                removeMarkup: function(a) {
                    var b, c, d, e, f = this.sandbox.getOption("focused"),
                        g = [].concat(a);
                    for (f && g.length > 0 && (b = this.sandbox.saveSelection()); g.length > 0;)
                        c = g.shift(),
                        c.innerHTML ? (d = this.sandbox.createRange(),
                            d.selectNode(c),
                            e = d.createContextualFragment(c.innerHTML),
                            d.deleteContents(),
                            d.insertNode(e),
                            this.sandbox.fire("removedMarkupInContainer", {
                                node: d.commonAncestorContainer()
                            })) : this.sandbox.UILib.remove(c);
                    this.sandbox.restoreSelection(b)
                }
            },
            a.Markup = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, b) {
            this.name = a,
                this.sandbox = b
        };
        b.prototype = {
                init: function() {
                    this.sandbox.subscribe("startSpellCheck", function() {
                            this.startSpellCheck()
                        }),
                        this.sandbox.subscribe("keypress", function(a) {
                            this.handleKeypress(a.event)
                        }, this),
                        this.sandbox.subscribe("collectWords", function(a) {
                            this.collectWords(a.source, a.ignoreMisspellingsInContainer)
                        }, this)
                },
                handleKeypress: function(a) {
                    var b, c = this,
                        d = this.sandbox.getOption("multiLanguageMode");
                    (32 == a.keyCode || 13 == a.keyCode || 32 == a.charCode || 13 == a.charCode) && c.sandbox.addDeferredFunction("collectWordsAfterKeypress", {
                            single: !0,
                            delay: 0,
                            deferredFunction: function() {
                                var a, b = c.sandbox.getSelection();
                                if (b.rangeCount() > 0) {
                                    var e = b.getRangeAt(0);
                                    a = d ? e.commonAncestorContainer() : e,
                                        c.sandbox.fire("collectWords", {
                                            source: a
                                        })
                                }
                            }
                        }),
                        c.sandbox.addDeferredFunction("collectWordsAfterDelay", {
                            single: !0,
                            delay: 2e3,
                            deferredFunction: function() {
                                var a, e = c.sandbox.getOption("container");
                                d ? b = e : (a = c.sandbox.createRange(),
                                        a.selectNodeContents(e),
                                        b = a),
                                    c.sandbox.fire("collectWords", {
                                        source: b
                                    })
                            }
                        })
                },
                startSpellCheck: function() {
                    var a, b = this.sandbox.createRange(),
                        c = this.sandbox.getOption("container"),
                        d = this.sandbox.getOption("multiLanguageMode");
                    d ? a = c : (b.selectNodeContents(c),
                            a = b.toString()),
                        this.sandbox.fire("collectWords", {
                            source: a,
                            ignoreMisspellingsInContainer: !1
                        })
                },
                collectWords: function(a, b) {
                    var c;
                    switch (typeof a) {
                        case "string":
                            c = this.collectWordsInString(a);
                            break;
                        case "object":
                            c = a.nodeType ? this.collectWordsInContainer(a, b) : this.collectWordsInRange(a)
                    }
                    return this.sandbox.fire("wordsCollected", {
                            wordsCollection: c
                        }),
                        c
                },
                collectWordsInString: function(a) {
                    var b = this.sandbox.getOption("punctuationRegExp"),
                        c = this.sandbox.getOption("lang"),
                        d = this.sandbox.getOption("permanentMinWordLength"),
                        e = this.sandbox.getOption("minWordLength");
                    e = "undefined" == typeof d[c] ? e : d[c],
                        a = this.sandbox.Utils.removePunctuation(a, b),
                        a = this.sandbox.Utils.removeSpecialCharacters(a);
                    var f, g = "word_";
                    f = this.sandbox.Utils.arrayFilter.call(a.split(/\s/), function(a) {
                        return "" !== a && a.length >= e ? !0 : !1
                    });
                    for (var h = {}, i = 0; i < f.length; i++)
                        h[g + f[i]] = h[g + f[i]] || {
                            word: f[i]
                        };
                    return h = {
                            words: h,
                            detectedLanguages: {}
                        },
                        h.detectedLanguages[c] = 1,
                        h
                },
                collectWordsInRange: function(a) {
                    var b = this.createStringWithoutGiellaElements(a.commonAncestorContainer());
                    return this.collectWordsInString(b)
                },
                collectWordsInContainer: function(a, b) {
                    var c, d = new GIELLA.WordsFinder.Finder(this.sandbox, b);
                    return d.collectBlockInfo(a),
                        d.resultText = d.resultText.replace(/_/g, " "),
                        c = this.collectWordsInString(d.resultText),
                        c.detectedLanguages = d.detectedLanguages,
                        c
                },
                createStringWithoutGiellaElements: function(a) {
                    for (var b = this.sandbox.UILib, c = "", d = [a], e = d.shift(), f = this.sandbox.getOption("blockElementsRegex"), g = this.sandbox.getOption("misspelled_word_node"), h = this.sandbox.getOption("data_attribute_name"), i = this.sandbox.getOption("ignoreElementsRegex"), j = this.sandbox.getOption("punctuationRegExp"), k = new RegExp("(^|\\s)rangySelectionBoundary(\\s|$)"); e;) {
                        switch (e.nodeType) {
                            case 3:
                                c += e.nodeValue;
                                break;
                            case 1:
                                var l = e.nodeName.toLowerCase() == g.toLowerCase() && e.getAttribute(h);
                                if (!l && !k.test(b.attr(e, "className")) && !e.nodeName.match(i)) {
                                    for (var m = 0; m < e.childNodes.length; m++)
                                        d.splice(m, 0, e.childNodes[m]);
                                    e.nodeName.match(f) && (d.length > e.childNodes.length && d.splice(m, 0, document.createTextNode(" ")),
                                        c.length > 0 && " " != c[c.length - 1] && d.splice(0, 0, document.createTextNode(" ")))
                                }
                        }
                        e = d.shift()
                    }
                    return c = this.sandbox.Utils.removePunctuation(c, j)
                }
            },
            a.WordsCollector = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, b) {
            this.name = a,
                this.sandbox = b
        };
        b.prototype = {
                init: function() {
                    this.sandbox.subscribe("misspelledWordsFound", function(a) {
                        this.processMisspelledWords(a.words, a.lang)
                    }, this)
                },
                processMisspelledWords: function(a, b) {
                    for (var c = this, d = (c.sandbox.getOption("lang"),
                            c.sandbox.getOption("uid")), e = [], f = 0; f < a.length; f++)
                        a[f].existsInInstance(d) && 1 == a[f].getStatus(d) && e.push(a[f]);
                    0 !== e.length && c.sandbox.addDeferredFunction("findWordRangesForMarkupForLang_" + b, {
                        delay: 100,
                        collection: e,
                        defferedFunctionArgs: [b],
                        partialItemsCount: 1,
                        deferredFunction: function(a, b) {
                            var d, e, f = c.sandbox.getOption("focused");
                            f && (d = c.sandbox.saveSelection()),
                                e = c.findWordRangesForMarkup(a),
                                c.sandbox.fire("markupWords", {
                                    ranges: e,
                                    lang: b
                                }),
                                c.sandbox.restoreSelection(d)
                        }
                    })
                },
                findWordRangesForMarkup: function(a) {
                    var c, d = this.sandbox.createRange(),
                        e = this.sandbox.getOption("container");
                    d.selectNodeContents(e),
                        c = new b.Finder(this.sandbox),
                        c.collectBlockInfo(d.commonAncestorContainer());
                    for (var f = [], g = 0; g < a.length; g++)
                        for (c.lastIndex = 0; null !== c.findWord(a[g].word);)
                            f.push({
                                range: c.wordRange,
                                language: c.wordLanguage
                            });
                    return f.reverse()
                }
            },
            b.Finder = function(a, b) {
                function c(b, c) {
                    var d, e = a.getOption("multiLanguageMode"),
                        f = a.getOption("languagesMap"),
                        g = a.getOption("languageNodeName"),
                        h = a.getOption("languageAttributeName"),
                        i = c;
                    return e && (b.lang && b.nodeName.toLowerCase() === g || (b = a.UILib.parents(b, g + "[" + h + "]")[0]),
                            d = b && b.nodeName.toLowerCase() == g ? b.getAttribute(h) : "",
                            d && (i = f[d] || null)),
                        i
                }
                b = "undefined" == typeof b ? !0 : b;
                var d = "th_TH" === a.getOption("lang");
                this.parts = [],
                    this.newParts = {
                        getPos: function(a) {
                            for (; !this[a];)
                                a--;
                            return this[a]
                        }
                    },
                    this.resultText = "",
                    this.detectedLanguages = {},
                    this.detectedLanguages[a.getOption("lang")] = 1,
                    this.lastIndex = 0,
                    this.wordRange = null,
                    this.reset = function() {
                        this.parts = [],
                            this.resultText = "",
                            this.lastIndex = 0,
                            this.wordRange = null,
                            this.detectedLanguages[a.getOption("lang")] = 1
                    },
                    this.collectBlockInfo = function(d) {
                        function e(a, b, c) {
                            if (a !== b) {
                                var d = {
                                    node: c.el,
                                    start: i.resultText.length,
                                    end: i.resultText.length + b - a,
                                    offset: a
                                };
                                i.newParts[d.start] = d,
                                    i.newParts[d.end] = d,
                                    i.resultText += 0 == c.editable ? c.el.nodeValue.replace(/./g, " ").substring(a, b) : c.el.nodeValue.substring(a, b)
                            }
                        }
                        for (var f = [{
                                el: d,
                                editable: d.isContentEditable
                            }], g = f.shift(), h = a.getOption("lang"), i = this, j = a.getOption("blockElementsRegex"), k = a.getOption("ignoreElementsRegex"), l = a.getOption("misspelled_word_node"), m = a.getOption("data_attribute_name"), n = new RegExp("(^|\\s)rangySelectionBoundary(\\s|$)"), o = 0, p = "", q = [], r = a.getOption("specialCharactersRegex"); g;) {
                            switch (g.el.nodeType) {
                                case 3:
                                    g.el.nodeValue.length > 0 && (o = g.indexOffset || 0,
                                        p = g.el.nodeValue,
                                        q = p.substring(o).match(r),
                                        q ? (e(o, o + q.index, g),
                                            g.indexOffset = o + q.index + q[0].length,
                                            f.splice(0, 0, g)) : (e(o, p.length, g),
                                            g.emptyCharsCountInPart = 0));
                                    break;
                                case 1:
                                    if (b && g.el.nodeName.toLowerCase() == l.toLowerCase() && g.el.getAttribute(m))
                                        this.resultText += g.el.getAttribute(m).replace(/./g, "_");
                                    else if (!n.test(a.UILib.attr(g.el, "className")) && !k.test(g.el.nodeName)) {
                                        var s = g.el.hasAttribute("contenteditable") ? g.el.isContentEditable : g.editable,
                                            t = c(g.el, h);
                                        t && (this.detectedLanguages[t] = 1);
                                        for (var u = 0; u < g.el.childNodes.length; u++)
                                            f.splice(u, 0, {
                                                el: g.el.childNodes[u],
                                                editable: s
                                            });
                                        g.el.nodeName.match(j) && (f.length > g.el.childNodes.length && f.splice(u, 0, {
                                                el: document.createTextNode(" "),
                                                editable: !0
                                            }),
                                            this.resultText.length > 0 && " " != this.resultText[this.resultText.length - 1] && f.splice(0, 0, {
                                                el: document.createTextNode(" "),
                                                editable: !0
                                            }))
                                    }
                            }
                            g = f.shift()
                        }
                        this.resultText = this.resultText.replace(/[\r\n(\r\n)]/g, " "),
                            this.resultText = a.Utils.removePunctuation(this.resultText, a.getOption("punctuationRegExp"))
                    },
                    this.findWord = function(b) {
                        var e = this.resultText.indexOf(b, this.lastIndex);
                        if (e > 0)
                            this.lastIndex = e + b.length,
                            d || (e = this.resultText.charAt(e - 1).match(/\s/) ? e : "skipped",
                                e = this.lastIndex == this.resultText.length || this.resultText.charAt(e + b.length).match(/\s/) ? e : "skipped");
                        else {
                            if (0 !== e)
                                return null;
                            this.lastIndex = e + b.length,
                                e = this.lastIndex == this.resultText.length || this.resultText.charAt(e + b.length).match(/\s/) ? e : "skipped"
                        }
                        if ("skipped" == e)
                            return this.findWord.call(this, b);
                        var f = a.createRange(),
                            g = this.newParts.getPos(e);
                        f.setStart(g.node, e - g.start + g.offset);
                        var h = this.newParts.getPos(e + b.length - 1);
                        f.setEnd(h.node, e + b.length - h.start + h.offset),
                            f = a.Utils.fixRangeBoundaryPoints(f),
                            this.wordRange = f;
                        var i = a.getOption("lang"),
                            j = f.commonAncestorContainer();
                        return this.wordLanguage = c(j, i),
                            this.wordRange
                    }
            },
            a.WordsFinder = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, b) {
            this.name = a,
                this.sandbox = b
        };
        b.prototype = {
                init: function() {
                    this.sandbox.subscribe("replaceWord", function(a) {
                            this.replaceWordInSelection(a.word)
                        }, this),
                        this.sandbox.subscribe("ignoreWord", function() {
                            this.ignoreWordInSelection()
                        }, this),
                        this.sandbox.subscribe("ignoreAllWords", function() {
                            this.ignoreWordInDocument()
                        }, this)
                },
                replaceWordInSelection: function(a) {
                    var b, c;
                    for (c = this.getGiellaNodesFromSelection(); c.length > 0;)
                        b = c.shift(),
                        this.replaceWordByNode(b, a)
                },
                ignoreWordInSelection: function() {
                    var a;
                    a = this.getGiellaNodesFromSelection(),
                        this.ignoreWords(a)
                },
                ignoreWordInDocument: function() {
                    var a, b, c, d, e = this.sandbox.getOption("container"),
                        f = this.sandbox.getOption("misspelled_word_node"),
                        g = this.sandbox.getOption("data_attribute_name"),
                        h = this.sandbox.getOption("data_lang_attribute"),
                        i = this.sandbox.UILib,
                        j = [];
                    for (b = this.getGiellaNodesFromSelection(); b.length > 0;)
                        a = b.shift(),
                        d = a.getAttribute(h),
                        c = this.sandbox.DOM.query(e, f + "[" + g + '="' + a.getAttribute(g) + '"]'),
                        c = i.filter(c, "[" + h + '="' + d + '"]'),
                        j.push.apply(j, c);
                    this.ignoreWords(j)
                },
                getGiellaNodesFromSelection: function() {
                    var a = this.sandbox.getSelection(),
                        b = a.anchorNode(),
                        c = this.sandbox.getOption("misspelled_word_node"),
                        d = this.sandbox.getOption("data_attribute_name"),
                        e = this.sandbox.Utils.isEqualNode(b, d) ? [b] : this.sandbox.DOM.findNodeParents(b, c, d);
                    return e
                },
                ignoreWords: function(b) {
                    for (var c, d, e, f, g = this.sandbox.saveSelection(), h = this.sandbox.createRange(), i = a.DictionaryManager.Dictionary, j = this.sandbox.getOption("data_attribute_name"), k = this.sandbox.getOption("data_lang_attribute"), l = this.sandbox.getOption("uid"); b.length > 0;)
                        c = b.shift(),
                        d = c.getAttribute(j),
                        e = c.getAttribute(k),
                        i.getWord(d, e) && i.getWord(d, e).setStatus(a.DictionaryManager.wordStatus.userIgnore, l),
                        h.selectNode(c),
                        f = h.createContextualFragment(c.innerHTML),
                        h.deleteContents(),
                        this.sandbox.fire("removedMarkupInContainer", h.commonAncestorContainer()),
                        h.insertNode(f);
                    this.sandbox.restoreSelection(g)
                },
                replaceWordByNode: function(a, b) {
                    a.innerHTML = b;
                    var c = this.sandbox.createRange();
                    c.selectNodeContents(a),
                        c.collapse(!1);
                    var d = this.sandbox.getSelection();
                    d.removeAllRanges(),
                        d.addRange(c);
                    var e = this.sandbox.saveSelection();
                    c = this.sandbox.createRange(),
                        c.selectNode(a);
                    var f = c.createContextualFragment(a.innerHTML);
                    c.deleteContents(),
                        c.insertNode(f),
                        this.sandbox.fire("removedMarkupInContainer", c.commonAncestorContainer()),
                        this.sandbox.restoreSelection(e)
                }
            },
            a.WordsProcessor = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, b) {
            var c = b.getOption("basePath") + "css/close.png";
            this.name = a,
                this.sandbox = b,
                this.closeBannerTimeout = void 0,
                this.contextMenuContainer = null,
                this.bannerShown = 0,
                this.template = '<div id="giella_banner" style="padding: 12px 26px 10px 10px; border: 1px solid #c7c7c7; box-shadow: 0 0 5px rgba(0,0,0,.1); position: absolute; font-size: 12px; line-height: 1.33; font-family: Arial,Verdana,sans-serif; z-index: 9998; width: 152px; min-height: 60px; background-color: rgb(255, 255, 255); white-space: normal; left: 102%; top: 0; background-position: initial initial; background-repeat: initial initial; color: #3f3f3f;"><div style="overflow: hidden;"><a id="closeBanner" href="#" style="cursor:pointer; position: absolute; top: 12px; right: 10px; width: 10px; height: 10px; background: url(' + c + ') no-repeat 100% 50%;"></a><a id="giella__btn-more" style="font-size: 14px; cursor:pointer; text-decoration: underline; display: inline-block; margin-bottom: 10px; color: #1354a5;" href="http://www.webspellchecker.net/fcklicensed" target="_blank">Click to know more...</a></div>' + 'Spell checking provided by WebSpellChecker.net. <a id="giella__btn-hosted" style="cursor:pointer; color: #1456a3; text-decoration:underline; display: inline; font-size: 12px;" target="_blank" href="http://www.webspellchecker.net/fckhosted"> Hosted </a> and <a id="giella__btn-licensed" style="cursor:pointer; color: #1456a3; text-decoration:underline; display: inline; font-size: 12px;" target="_blank" href="http://www.webspellchecker.net/fcklicensed"> Licensed </a> spell-checking solutions.</div>'
        };
        b.prototype = {
                init: function() {
                    var a = this.sandbox;
                    this.sandbox.Template.create("giella_banner_tpl", this.template),
                        this.sandbox.subscribe("showBanner", function(a) {
                            this.showBannerHandler(a.contextMenuContainerSelector)
                        }, this),
                        this.sandbox.subscribe("hideBanner", function() {
                            this.hideBanner()
                        }, this),
                        a.getOption("sendBannerRequest") && a.IO.get(new a.IO.URL({
                            protocol: a.getOption("service_protocol"),
                            host: a.getOption("service_host"),
                            port: a.getOption("service_port"),
                            path: a.getOption("service_path")
                        }).addParameter("cmd", "getbanner").addParameter("run_mode", "web_service").addParameter("customerid", a.getOption("customer_id")).addParameter("format", "json"), function(b) {
                            b.banner ? a.setOption("showBanner", !0) : a.setOption("showBanner", !1)
                        }, function() {})
                },
                showBannerHandler: function(a) {
                    var b = this,
                        c = this.sandbox.UILib;
                    this.bannerShown = 2 == this.bannerShown ? 0 : this.bannerShown + 1,
                        b.sandbox.getOption("showBanner") && 1 == this.bannerShown && b.sandbox.addDeferredFunction("showBanner", {
                            single: !0,
                            delay: 100,
                            deferredFunction: function() {
                                var d = c.find(a)[0];
                                b.contextMenuContainer = d,
                                    d && (c.css(d, {
                                            overflow: "visible"
                                        }),
                                        b.showBanner(d)),
                                    c.on("mousedown", d, "#closeBanner", function() {
                                        b.hideBanner(),
                                            b.sandbox.setOption("showBanner", !1)
                                    })
                            }
                        })
                },
                actionLinks: function(a) {
                    var b = this,
                        c = a.target || a.srcElement;
                    c.href && ("closeBanner" === c.id ? (b.hideBanner(),
                        b.sandbox.setOption("showBanner", !1)) : (window.open(c.href, "_blank"),
                        b.contextMenuContainer && b.contextMenuContainer.focus()))
                },
                showBanner: function(a) {
                    var b = this,
                        c = this.sandbox.UILib,
                        d = b.sandbox.Template.render("giella_banner_tpl", {}),
                        e = c.proxy(b.actionLinks, b);
                    c.append(a, d),
                        c.off("mousedown", "#giella_banner", e),
                        c.one("mousedown", "#giella_banner", e)
                },
                hideBanner: function() {
                    var a = this.sandbox.UILib,
                        b = a.find("#giella_banner")[0];
                    b && (a.css(a.parent(b), {
                            overflow: ""
                        }),
                        a.remove(b))
                }
            },
            a.Banner = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, b) {
            this.name = a,
                this.sandbox = b
        };
        b.prototype = {
                init: function() {
                    var a = this;
                    a.sandbox.subscribe("keypress", function(a) {
                            this.handleKeypress(a.event)
                        }, a),
                        a.sandbox.subscribe("appStarted", function() {
                            a.sandbox.fire("addEventHandler", {
                                    element: this.getContainer(),
                                    event: "compositionstart",
                                    callback: function() {
                                        a.sandbox.setPaused(!0)
                                    }
                                }),
                                a.sandbox.fire("addEventHandler", {
                                    element: this.getContainer(),
                                    event: "compositionend",
                                    callback: function() {
                                        a.sandbox.setPaused(!1),
                                            a.sandbox.addDeferredFunction("collectWordsAfterWorkIME", {
                                                single: !0,
                                                delay: 0,
                                                deferredFunction: function() {
                                                    var b, c = a.sandbox.getSelection();
                                                    if (c.rangeCount() > 0) {
                                                        var d = c.getRangeAt(0);
                                                        b = multiLanguageMode ? d.commonAncestorContainer() : d,
                                                            a.sandbox.fire("collectWords", {
                                                                source: b
                                                            })
                                                    }
                                                }
                                            })
                                    }
                                })
                        }, a)
                },
                handleKeypress: function(a) {
                    var b = this;
                    (229 === a.keyCode || 0 === a.keyCode) && b.sandbox.fire("removeMarkupInSelectionNode")
                },
                getContainer: function() {
                    var a = this;
                    return a.sandbox.getOption("container")
                }
            },
            a.IME = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, b) {
            this.name = a,
                this.sandbox = b
        };
        b.prototype = {
                init: function() {
                    this.sandbox.subscribe("sentencesCollected", function(a) {
                            this.sentencesCollectedHandler(a.sentencesCollection)
                        }, this),
                        this.sandbox.subscribe("getGrammarSuggestionsList", function(a) {
                            this.getSuggestionsListHandler(a.phrase, a.lang)
                        }, this)
                },
                sentencesCollectedHandler: function(a) {
                    var b = this.sandbox.getOption("lang");
                    a.length > 0 && this.getPhraseInfo(a, b)
                },
                getSuggestionsListHandler: function(a, c) {
                    this.sandbox.fire("suggestionListSend", {
                        suggestionList: b.Dictionary.getPhrase(a, c).suggestions
                    })
                },
                getPhraseInfo: function(a, c) {
                    var d = this,
                        e = b.Dictionary;
                    this.sandbox.addDeferredFunction("getPhraseInfo", {
                        delay: 500,
                        collection: a,
                        partialItemsCount: 2,
                        deferredFunction: function(a) {
                            var b = this;
                            return d.sandbox.IO.get(new d.sandbox.IO.URL({
                                protocol: d.sandbox.getOption("service_protocol"),
                                host: d.sandbox.getOption("service_host"),
                                port: d.sandbox.getOption("service_port"),
                                path: d.sandbox.getOption("service_path")
                            }).addParameter("cmd", "grayt").addParameter("customerid", d.sandbox.getOption("customer_id")).addParameter("run_mode", "web_service").addParameter("format", "json").addParameter("out_type", "words").addParameter("version", "1.0").addParameter("slang", c).addParameter("text", a.join(" ")), function(b) {
                                for (var f = [], g = 0; g < b.length; g++)
                                    f.push(e.addPhrase(b[g], c));
                                for (var g = 0; g < a.length; g++)
                                    d.sandbox.fire("updateSentencesCache", {
                                        phrasesInfo: {
                                            sentence: a[g],
                                            phrases: f
                                        }
                                    });
                                d.sandbox.fireInAllApps("problemPhrasesFound", {
                                    phrases: f,
                                    lang: c
                                })
                            }, function(c) {
                                c.is_critical && (d.sandbox.setPaused(!0),
                                        d.sandbox.removeAllDeferredFunctions()),
                                    b.extendCollection(a)
                            }), !0
                        }
                    })
                }
            },
            b.Dictionary = b.Dictionary || function() {
                var a = {},
                    b = {},
                    c = "phrase_",
                    d = function(d, e) {
                        var f = d.phrase,
                            g = d.suggestions,
                            h = d.problem_id,
                            i = d.description;
                        return (!g || 0 === g.length || 1 === g.length && "" == g[0]) && (g = []),
                            a[e] = a[e] || {},
                            a[e][c + f] = {
                                phrase: f,
                                suggestions: g,
                                problemId: h
                            },
                            ("string" == typeof h || "number" == typeof h) && (b[h] = i || ""),
                            a[e][c + f]
                    };
                return {
                    addPhrase: function() {
                        return d.apply(this, arguments)
                    },
                    getPhrase: function(b, d) {
                        return a[d] && a[d][c + b]
                    },
                    getProblemDescription: function(a) {
                        return b[a]
                    },
                    each: function(c, d) {
                        if ("function" == typeof d)
                            for (var e in a[c])
                                d(a[c][e], b[a[c][e].problemId])
                    },
                    clear: function() {
                        a = {}
                    }
                }
            }(),
            a.GrammarDictionaryManager = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, b) {
            this.name = a,
                this.sandbox = b
        };
        b.prototype = {
                init: function() {
                    this.sandbox.subscribe("markupPhrase", function(a) {
                            this.markupPhrase(a.ranges)
                        }, this),
                        this.sandbox.subscribe("keypress", function(a) {
                            var b = this.sandbox.getOption("graytState");
                            b && this.handleKeypress(a.event)
                        }, this),
                        this.sandbox.subscribe("removeMarkupInSelectionNode, removeGrammarMarkupInSelectionNode", function(a) {
                            var b = this.sandbox.getOption("graytState");
                            b && this.removeMarkupInSelectionNode(a)
                        }, this),
                        this.sandbox.subscribe("removeMarkupInDocument", function() {
                            var a = this.sandbox.getOption("graytState");
                            a && this.removeMarkupInDocument()
                        }, this),
                        this.sandbox.subscribe("removeMarkupFromPhrases", function(a) {
                            this.removeMarkupFromPhrases(a.phrases)
                        }, this)
                },
                handleKeypress: function(a) {
                    var b, c, d = this,
                        e = this.sandbox.Utils,
                        f = 67,
                        g = 65,
                        h = [45],
                        i = [8, 13, 32, 187, 186, 188, 189, 190, 191, 192, 219, 220, 221, 222];
                    b = a.ctrlKey && a.keyCode === f,
                        c = a.ctrlKey && a.keyCode === g,
                        (!b && !c && a.keyCode > 40 && a.keyCode < 91 && e.indexOf(h, a.keyCode) < 0 || e.indexOf(i, a.keyCode) >= 0) && d.removeMarkupInSelectionNode()
                },
                markupPhrase: function(a) {
                    if (0 !== a.length) {
                        var b = this,
                            c = b.sandbox.getOption("documentContainer"),
                            d = b.sandbox.getOption("problem_grammar_node"),
                            e = b.sandbox.getOption("problem_grammar_data_attribute"),
                            f = b.sandbox.getOption("problem_grammar_class");
                        b.sandbox.getOption("lang");
                        var g = b.sandbox.Utils.getCurrentDocument(c).createElement(d);
                        this.sandbox.UILib.addClass(g, f);
                        for (var h = 0; h < a.length; h++) {
                            var i = a[h].commonAncestorContainer(),
                                j = b.sandbox.Utils.isEqualNode(i, e) ? [i] : b.sandbox.DOM.findNodeParents(i, d, e);
                            if (0 === j.length) {
                                var k = g.cloneNode(!0),
                                    l = a[h].toString();
                                l = b.sandbox.Utils.removeSpecialCharacters(l),
                                    l = b.sandbox.Utils.replaceSpecialCharacters(l),
                                    k.setAttribute(e, l),
                                    k.appendChild(a[h].extractContents()),
                                    a[h].insertNode(k),
                                    this.sandbox.fire("markupedNode", k);
                                for (var m = b.sandbox.DOM.findNodeChildren(k, d, e); m.length > 0;) {
                                    var n = m.shift();
                                    b.removeMarkup(n)
                                }
                            }
                        }
                    }
                },
                removeMarkupInDocument: function() {
                    var a = this,
                        b = a.sandbox.getOption("container"),
                        c = a.sandbox.getOption("problem_grammar_node"),
                        d = a.sandbox.getOption("problem_grammar_data_attribute"),
                        e = a.sandbox.DOM.query(b, c + "[" + d + "]");
                    a.removeMarkup(e),
                        this.sandbox.fire("updateSentencesCache", {})
                },
                removeMarkupFromPhrases: function(a) {
                    for (var b, c = this, d = this.sandbox.UILib, e = c.sandbox.getOption("container"), f = c.sandbox.getOption("problem_grammar_node"), g = c.sandbox.getOption("problem_grammar_data_attribute"), h = [], i = 0; i < a.length; i++)
                        h.push.apply(h, c.sandbox.DOM.query(e, f + "[" + g + '="' + a[i].phrase + '"]'));
                    c.removeMarkup(h),
                        d.each(h, function(a, e) {
                            b = d.attr(e, g),
                                c.sandbox.fire("updateSentencesCache", {
                                    phrase: b
                                })
                        })
                },
                removeMarkupInSelectionNode: function(a) {
                    function b(a) {
                        var b = [];
                        return b = j.arrayFilter.call(a, function(a) {
                                return j.isEqualNode(a, l)
                            }),
                            0 === b.length && (b = i.sandbox.DOM.findNodeParents(a[0], m, l)),
                            b
                    }
                    var c, d, e, f, g, h, i = this,
                        j = this.sandbox.Utils,
                        k = this.sandbox.UILib,
                        l = this.sandbox.getOption("problem_grammar_data_attribute"),
                        m = this.sandbox.getOption("problem_grammar_node"),
                        n = a && a.selectionNode,
                        o = a && a.removeInside,
                        p = a && a.forceBookmark,
                        q = this.sandbox.getSelection(),
                        r = this.sandbox.getOption("container"),
                        s = [],
                        t = [];
                    n ? (e = i.sandbox.createRange(),
                            e.selectNode(n),
                            s = e.getNodes(),
                            t = s) : q.rangeCount() > 0 && (e = q.getRangeAt(0),
                            c = e.startContainer(),
                            d = e.endContainer(),
                            f = e.startOffset(),
                            g = e.endOffset(),
                            s = this.getNeighbourGraytNodes(c, d, f, g),
                            t = e.getNodes(),
                            t = s.concat(t),
                            o && (s = t)),
                        t = b(t),
                        s = b(s),
                        t = j.arrayUnique(t),
                        s = j.arrayUnique(s);
                    for (var u = 0, v = t.length; v > u; u += 1)
                        h = k.attr(t[u], l),
                        this.sandbox.fire("updateSentencesCache", {
                            phrase: h
                        });
                    p && !this.sandbox.getOption("focused") && s.length > 0 && (r.focus(),
                        k.trigger("focus", r));
                    for (var u = 0, v = s.length; v > u; u += 1)
                        i.removeMarkup(s[u])
                },
                getNeighbourGraytNodes: function(a, b, c, d) {
                    function e(a, b, c) {
                        var d, e, g, h = i.sandbox.getOption("container"),
                            k = /[^\t-\r \u0085\u00A0\u1680\u180E\u2000-\u200B\u2028\u2029\u202F\u205F\u3000]+/g,
                            m = i.sandbox.getOption("punctuationRegExp");
                        if (b) {
                            g = new f(b, c, a, h);
                            do {
                                if (j.isEqualNode(g.currentNode, l)) {
                                    d = g.currentNode;
                                    break
                                }
                                if (e = j.removePunctuation(g.textWalkedThrough, m),
                                    a || (e = e.split("").reverse().join("")),
                                    k.lastIndex = 0,
                                    k.test(e) && k.lastIndex + 1 <= e.length)
                                    break
                            } while (g.getNext())
                        }
                        return d
                    }

                    function f(a, b, c, d) {
                        var e = c ? "nextSibling" : "previousSibling",
                            f = 3 === a.nodeType ? c ? a.nodeValue.substr(b, a.nodeValue.length) : a.nodeValue.substr(0, b) : "";
                        this.textWalkedThrough = f,
                            this.currentNode = a,
                            this.previousNode = null,
                            this.getNext = function() {
                                if (this.currentNode.childNodes.length > 0 && this.previousNode && this.currentNode.childNodes[c * (this.currentNode.childNodes.length - 1)] !== this.previousNode ? (this.previousNode = this.currentNode,
                                        this.currentNode = this.currentNode.childNodes[!c * (this.currentNode.childNodes.length - 1)]) : this.currentNode.childNodes.length > 0 && !this.previousNode && this.currentNode.childNodes[b - 1] ? (this.previousNode = this.currentNode,
                                        this.currentNode = this.currentNode.childNodes[b - 1]) : this.currentNode[e] ? (this.previousNode = this.currentNode,
                                        this.currentNode = this.currentNode[e]) : (this.previousNode = this.currentNode,
                                        this.currentNode = this.currentNode.parentNode),
                                    this.currentNode)
                                    switch (this.currentNode.nodeType) {
                                        case 1:
                                            this.currentNode === d && (this.currentNode = null);
                                            break;
                                        case 3:
                                            c ? this.textWalkedThrough += this.currentNode.nodeValue : this.textWalkedThrough = this.currentNode.nodeValue + this.textWalkedThrough
                                    }
                                return this.currentNode
                            },
                            this.reset = function() {
                                this.textWalkedThrough = f,
                                    this.currentNode = a,
                                    this.previousNode = null
                            }
                    }
                    var g, h, i = this,
                        j = this.sandbox.Utils,
                        k = (this.sandbox.UILib, []),
                        l = this.sandbox.getOption("problem_grammar_data_attribute");
                    return g = e(!1, a, c),
                        h = e(!0, b, d),
                        k = k.concat(g, h)
                },
                removeMarkup: function(a) {
                    var b, c = this.sandbox.getOption("focused"),
                        d = [].concat(a);
                    for (c && d.length > 0 && (b = this.sandbox.saveSelection()); d.length > 0;) {
                        var e = d.shift(),
                            f = this.sandbox.createRange();
                        f.selectNode(e);
                        var g = f.createContextualFragment(e.innerHTML);
                        f.deleteContents(),
                            this.sandbox.fire("removedMarkupInContainer", f.commonAncestorContainer()),
                            f.insertNode(g)
                    }
                    this.sandbox.restoreSelection(b)
                }
            },
            a.GrammarMarkup = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, b) {
            this.name = a,
                this.sandbox = b
        };
        b.prototype = {
                init: function() {
                    this.sandbox.subscribe("problemPhrasesFound", function(a) {
                        this.processGrammarProblem(a.phrases, a.lang)
                    }, this)
                },
                processGrammarProblem: function(a, b) {
                    var c = this,
                        d = c.sandbox.getOption("lang");
                    if (c.sandbox.getOption("uid"),
                        b != d)
                        return !1;
                    for (var e = [], f = 0; f < a.length; f++)
                        e.push(a[f].phrase);
                    0 !== e.length && c.sandbox.addDeferredFunction("findGrammarProblemRangesForMarkup", {
                        delay: 100,
                        collection: e,
                        partialItemsCount: 1,
                        deferredFunction: function(a) {
                            var b, d = c.sandbox.getOption("focused");
                            d && (b = c.sandbox.saveSelection());
                            var e = c.findPhraseRangesForMarkup(a);
                            c.sandbox.fire("markupPhrase", {
                                    ranges: e
                                }),
                                c.sandbox.restoreSelection(b)
                        }
                    })
                },
                findPhraseRangesForMarkup: function(a) {
                    var c, d = this.sandbox.createRange(),
                        e = this.sandbox.getOption("container");
                    d.selectNodeContents(e),
                        c = new b.Finder(this.sandbox),
                        c.collectBlockInfo(d.commonAncestorContainer());
                    for (var f = [], g = 0; g < a.length; g++)
                        for (c.lastIndex = 0; null !== c.findPhrase(a[g]);)
                            f.push(c.phraseRange);
                    return f.reverse()
                }
            },
            b.Finder = function(a) {
                this.newParts = {
                        getPos: function(a) {
                            for (; !this[a];)
                                a--;
                            return this[a]
                        }
                    },
                    this.resultText = "",
                    this.lastIndex = 0,
                    this.phraseRange = null,
                    this.reset = function() {
                        this.resultText = "",
                            this.lastIndex = 0,
                            this.phraseRange = null;
                        for (var a in this.newParts)
                            this.newParts.hasOwnProperty(a) && "getPos" !== a && delete this.newParts[a]
                    },
                    this.collectBlockInfo = function(b) {
                        function c(a, b, c) {
                            if (a !== b) {
                                var d = {
                                    node: c.el,
                                    start: f.resultText.length,
                                    end: f.resultText.length + b - a,
                                    offset: a
                                };
                                f.newParts[d.start] = d,
                                    f.newParts[d.end] = d,
                                    f.resultText += 0 == c.editable ? c.el.nodeValue.replace(/./g, " ").substring(a, b) : c.el.nodeValue.substring(a, b)
                            }
                        }
                        for (var d = [{
                                el: b,
                                editable: "false" == b.getAttribute("contenteditable") ? !1 : !0
                            }], e = d.shift(), f = this, g = a.getOption("blockElementsRegex"), h = a.getOption("ignoreElementsRegex"), i = a.getOption("problem_grammar_node"), j = a.getOption("problem_grammar_data_attribute"), k = new RegExp("(^|\\s)rangySelectionBoundary(\\s|$)"), l = 0, m = "", n = [], o = a.getOption("specialCharactersRegex"); e;) {
                            switch (e.el.nodeType) {
                                case 3:
                                    e.el.length && (l = e.indexOffset || 0,
                                        m = e.el.nodeValue,
                                        n = m.substring(l).match(o),
                                        n ? (c(l, l + n.index, e),
                                            e.indexOffset = l + n.index + n[0].length,
                                            d.splice(0, 0, e)) : (c(l, m.length, e),
                                            e.emptyCharsCountInPart = 0));
                                    break;
                                case 1:
                                    if (e.el.nodeName.toLowerCase() == i.toLowerCase() && e.el.getAttribute(j))
                                        this.resultText += e.el.getAttribute(j).replace(/./g, "_");
                                    else if (!k.test(a.UILib.attr(e.el, "className")) && !h.test(e.el.nodeName)) {
                                        for (var p = "false" == e.el.getAttribute("contenteditable") ? !1 : !0, q = 0; q < e.el.childNodes.length; q++)
                                            d.splice(q, 0, {
                                                el: e.el.childNodes[q],
                                                editable: p
                                            });
                                        e.el.nodeName.match(g) && (d.length > e.el.childNodes.length && d.splice(q, 0, {
                                                el: document.createTextNode(" "),
                                                editable: !0
                                            }),
                                            this.resultText.length > 0 && " " != this.resultText[this.resultText.length - 1] && d.splice(0, 0, {
                                                el: document.createTextNode(" "),
                                                editable: !0
                                            }))
                                    }
                            }
                            e = d.shift()
                        }
                        this.resultText = a.Utils.replaceSpecialCharacters(this.resultText)
                    },
                    this.findPhrase = function(b) {
                        var c = this.resultText.indexOf(b, this.lastIndex),
                            d = a.getOption("punctuationRegExp"),
                            e = /.\s\xA0/,
                            f = new RegExp("[" + e.source + d.source + "]", "g");
                        if (c > 0)
                            this.lastIndex = c + b.length,
                            c = this.resultText.charAt(c - 1).match(f) ? c : "skipped",
                            c = this.lastIndex === this.resultText.length || this.resultText.charAt(c + b.length).match(f) ? c : "skipped";
                        else {
                            if (0 !== c)
                                return null;
                            this.lastIndex = c + b.length,
                                c = this.resultText.charAt(c + b.length).match(f) ? c : "skipped"
                        }
                        if ("skipped" == c)
                            return this.findPhrase.call(this, b);
                        var g = a.createRange(),
                            h = this.newParts.getPos(c);
                        g.setStart(h.node, c - h.start + h.offset);
                        var i = this.newParts.getPos(c + b.length - 1);
                        return g.setEnd(i.node, c + b.length - i.start + i.offset),
                            g = a.Utils.fixRangeBoundaryPoints(g),
                            this.phraseRange = g,
                            this.phraseRange
                    }
            },
            a.GrammarPhrasesFinder = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, b) {
            this.name = a,
                this.sandbox = b
        };
        b.prototype = {
                init: function() {
                    this.cache = this.createCacheSentences(),
                        this.sandbox.subscribe("startGrammarCheck", function() {
                            this.startGrammarCheck()
                        }, this),
                        this.sandbox.subscribe("keypress", function(a) {
                            var b = this.sandbox.getOption("graytState");
                            b && this.handleKeypress(a.event)
                        }, this),
                        this.sandbox.subscribe("collectSentences", function(a) {
                            var b = this.sandbox.getOption("graytState");
                            b && this.findSentences(a.source)
                        }, this),
                        this.sandbox.subscribe("updateSentencesCache", function(a) {
                            this.handleCacheUpdate(a)
                        }, this),
                        this.sandbox.subscribe("graytStateChanged", function(a) {
                            a.state && this.sandbox.fire("updateSentencesCache", {
                                phrase: null
                            })
                        }, this)
                },
                handleCacheUpdate: function(a) {
                    var b = a.phrase,
                        c = a.phrasesInfo;
                    b ? this.cache.deleteSentencesByPhrase(b) : c ? this.cache.update(c.sentence, c.phrases) : this.cache.clear()
                },
                createCacheSentences: function() {
                    function a(c, d, e) {
                        var f, g = b.sandbox.getOption("punctuationRegExp"),
                            h = /.\s\xA0/,
                            i = new RegExp("[" + h.source + g.source + "]", "g");
                        if (e = e || 0,
                            f = c.indexOf(d, e),
                            f > 0)
                            e = f + d.length,
                            f = c.charAt(f - 1).match(i) ? f : "skipped",
                            f = e === c.length || c.charAt(f + d.length).match(i) ? f : "skipped";
                        else {
                            if (0 !== f)
                                return !1;
                            e = f + d.length,
                                f = c.charAt(f + d.length).match(i) ? f : "skipped"
                        }
                        return "skipped" == f ? a(c, d, e) : !0
                    }
                    var b = this,
                        c = {},
                        d = "sentence__";
                    return {
                        add: function(a) {
                            return c[d + a] = {
                                sentence: a,
                                phrases: []
                            }
                        },
                        get: function(a) {
                            return c[d + a]
                        },
                        deleteSentencesByPhrase: function(b) {
                            var d;
                            for (var e in c)
                                d = c[e],
                                a(d.sentence, b) && delete c[e]
                        },
                        update: function() {
                            var a = Object.prototype.toString.call(arguments[0]).slice(8, -1).toLowerCase(),
                                e = [];
                            if ("array" === a) {
                                for (var f = arguments[0], g = [], h = 0, i = (f.length,
                                        ""); i = f[h]; h++)
                                    if (c[d + i]) {
                                        var j = c[d + i].phrases;
                                        if (j && j.length > 0) {
                                            var k = b.sandbox.getOption("lang");
                                            g = g.concat(j)
                                        }
                                        c[d + i].stayAlive = !0
                                    } else {
                                        var l = this.add(i);
                                        l.stayAlive = !0,
                                            e.push(i)
                                    }
                                g = b.sandbox.Utils.arrayUnique(g, function(a, b) {
                                        return a.phrase === b.phrase
                                    }),
                                    b.sandbox.fireInAllApps("problemPhrasesFound", {
                                        phrases: g,
                                        lang: k
                                    });
                                for (var m in c)
                                    c[m].stayAlive ? delete c[m].stayAlive : delete c[m];
                                return e
                            }
                            if ("string" === a) {
                                var i = arguments[0],
                                    n = arguments[1] || [];
                                c[d + i] && (c[d + i].phrases = n)
                            }
                        },
                        isEmpty: function() {
                            return !!b.Utils.getKeys(c).length
                        },
                        clear: function() {
                            c = {}
                        }
                    }
                },
                findSentences: function(a) {
                    var b, c, d = this;
                    return this.sandbox.Utils.is(a, "String") && (b = this.collectSentencesFromString(a)),
                        this.sandbox.Utils.is(a, "Object") && (b = this.collectSentencesInRange(a)),
                        c = d.cache.update(b),
                        this.sandbox.fire("sentencesCollected", {
                            sentencesCollection: c
                        }),
                        c
                },
                collectSentencesInRange: function(a) {
                    var b = this.createStringForGrammarCheck(a.commonAncestorContainer());
                    return this.collectSentencesFromString(b)
                },
                createStringForGrammarCheck: function(a) {
                    for (var b = this.sandbox.UILib, c = "", d = [a], e = d.shift(), f = this.sandbox.getOption("blockElementsRegex"), g = this.sandbox.getOption("ignoreElementsRegex"), h = new RegExp("(^|\\s)rangySelectionBoundary(\\s|$)"); e;) {
                        switch (e.nodeType) {
                            case 3:
                                c += e.nodeValue;
                                break;
                            case 1:
                                if (!h.test(b.attr(e, "className")) && !e.nodeName.match(g)) {
                                    for (var i = 0; i < e.childNodes.length; i++)
                                        d.splice(i, 0, e.childNodes[i]);
                                    e.nodeName.match(f) && (d.length > e.childNodes.length && d.splice(i, 0, document.createTextNode(" ")),
                                        c.length > 0 && " " != c[c.length - 1] && d.splice(0, 0, document.createTextNode(" ")))
                                }
                        }
                        e = d.shift()
                    }
                    return c = this.sandbox.Utils.replaceSpecialCharacters(c),
                        c = this.sandbox.Utils.removeSpecialCharacters(c)
                },
                collectSentencesFromString: function(a) {
                    function b(a) {
                        function b(a) {
                            var b = /[\n|\t|\v|\f|\r]+/g;
                            return b.lastIndex = 0,
                                a.replace(b, " ")
                        }

                        function d(a, b) {
                            this.position = a,
                                this.offset = 5,
                                this.left = b.substr(this.position - 5, 5),
                                this.right = b.substr(this.position + 1, 6),
                                this.toString = this.left.concat(b.charAt(this.position), this.right)
                        }

                        function e(a, b, e) {
                            var i = new d(b, e);
                            /\d/g.test(i.left) || /[\n|\t|\v|\f|\r]+/g.test(i.left) || /[A-ZА-Я]/g.test(i.left) || (/^[\s\xA0]+(?=[A-ZА-Я]{1})/g.test(i.right) && /[^A-ZА-Яа-яa-zЁё0-9_]/g.test(i.right) || !/\b/.test(i.right)) && (h = e.substring(g, i.position + 1),
                                h = c.sandbox.Utils.trim(h),
                                f.push(h),
                                g = i.position + 1)
                        }
                        var f = [],
                            g = 0,
                            h = "",
                            i = /[.!?](?=[\s\xA0]?)/gm;
                        return i.lastIndex = 0,
                            a = c.sandbox.Utils.trim(a),
                            a = b(a),
                            a.replace(i, e),
                            f
                    }
                    var c = this;
                    return a = a.source || a,
                        b(a)
                },
                handleKeypress: function(a) {
                    var b = this;
                    (32 == a.keyCode || 13 == a.keyCode || 32 == a.charCode || 13 == a.charCode) && b.sandbox.addDeferredFunction("collectSentencesAfterKeypress", {
                            single: !0,
                            delay: 0,
                            deferredFunction: function() {
                                b.startGrammarCheck()
                            }
                        }),
                        b.sandbox.addDeferredFunction("collectSentencesAfter4Sec", {
                            single: !0,
                            delay: 4e3,
                            deferredFunction: function() {
                                b.startGrammarCheck()
                            }
                        })
                },
                startGrammarCheck: function() {
                    var a = this.sandbox.createRange(),
                        b = this.sandbox.getOption("container");
                    a.selectNodeContents(b),
                        this.sandbox.fire("collectSentences", {
                            source: a
                        })
                }
            },
            a.SentencesCollector = b
    }(GIELLA),
    function(a) {
        "use strict";
        var b = function(a, b) {
            this.name = a,
                this.sandbox = b
        };
        b.prototype = {
                init: function() {
                    this.sandbox.subscribe("replacePhrase", function(a) {
                            this.replacePhraseInSelection(a.phrase)
                        }, this),
                        this.sandbox.subscribe("ignorePhrase", function() {
                            this.ignorePhraseInSelection()
                        }, this),
                        this.sandbox.subscribe("ignoreAllPhrases", function() {
                            this.ignorePhraseInDocument()
                        }, this)
                },
                replacePhraseInSelection: function(a) {
                    for (var b = this.getGrammarNodesFromSelection(); b.length > 0;) {
                        var c = b.shift(),
                            d = this.sandbox.UILib.attr(c, this.sandbox.getOption("problem_grammar_data_attribute"));
                        this.sandbox.fire("updateSentencesCache", {
                                phrase: d
                            }),
                            this.replacePhraseByNode(c, a)
                    }
                },
                ignorePhraseInSelection: function() {
                    var a = this.getGrammarNodesFromSelection();
                    this.ignorePhrases(a)
                },
                ignorePhraseInDocument: function() {
                    for (var a = this.getGrammarNodesFromSelection(), b = this.sandbox.getOption("container"), c = this.sandbox.getOption("problem_grammar_node"), d = this.sandbox.getOption("problem_grammar_data_attribute"), e = []; a.length > 0;) {
                        var f = a.shift();
                        e.push.apply(e, this.sandbox.DOM.query(b, c + "[" + d + '="' + f.getAttribute(d) + '"]'))
                    }
                    this.ignorePhrases(e)
                },
                getGrammarNodesFromSelection: function() {
                    var a = this.sandbox.getSelection(),
                        b = a.anchorNode(),
                        c = this.sandbox.getOption("problem_grammar_node"),
                        d = this.sandbox.getOption("problem_grammar_data_attribute"),
                        e = this.sandbox.Utils.isEqualNode(b, d) ? [b] : this.sandbox.DOM.findNodeParents(b, c, d);
                    return e
                },
                ignorePhrases: function(b) {
                    var c = this.sandbox.saveSelection(),
                        d = this.sandbox.createRange();
                    for (a.DictionaryManager.Dictionary[this.sandbox.getOption("lang")],
                        this.sandbox.getOption("problem_grammar_data_attribute"),
                        this.sandbox.getOption("uid"); b.length > 0;) {
                        var e = b.shift();
                        d.selectNode(e);
                        var f = d.createContextualFragment(e.innerHTML);
                        d.deleteContents(),
                            d.insertNode(f),
                            this.sandbox.fire("removedMarkupInContainer", d.commonAncestorContainer())
                    }
                    this.sandbox.restoreSelection(c)
                },
                replacePhraseByNode: function(a, b) {
                    a.innerHTML = b;
                    var c = this.sandbox.createRange();
                    c.selectNodeContents(a),
                        c.collapse(!1);
                    var d = this.sandbox.getSelection();
                    d.removeAllRanges(),
                        d.addRange(c);
                    var e = this.sandbox.saveSelection();
                    c = this.sandbox.createRange(),
                        c.selectNode(a);
                    var f = c.createContextualFragment(a.innerHTML);
                    c.deleteContents(),
                        c.insertNode(f),
                        this.sandbox.fire("removedMarkupInContainer", c.commonAncestorContainer()),
                        this.sandbox.restoreSelection(e)
                }
            },
            a.SentencesProcessor = b
    }(GIELLA),
    GIELLA.CKGIELLA = function(a, b) {
        function c(a) {
            for (var b, c = n.getOption("charsToObserve"), d = a.node, e = 0; e < c.length; e += 1)
                b = n.Utils.findFirstNodeWithString(d, c[e].charCode),
                b && j({
                    charName: c[e].charName,
                    node: b
                })
        }

        function d() {
            b && b.call(window)
        }

        function e() {
            return m.allModulesReady ? (n.fire("startSpellCheck", {}),
                void 0) : !1
        }

        function f() {
            return m.allModulesReady ? (n.fire("startGrammarCheck", {}),
                void 0) : !1
        }

        function g(a, b) {
            function c(a, b) {
                var c, d;
                c = i.createStyleSheet(a),
                    d = c.ownerNode ? c.ownerNode : c.owningElement,
                    d.setAttribute("data-cke-temp", "cke_temp");
                for (var e in b)
                    c.addRule(e, b[e], -1)
            }

            function d(a) {
                var b = {},
                    c = n.UILib,
                    d = a.documentElement,
                    e = a.body,
                    f = "";
                return f = c.css(e, "background-color"),
                    f || (f = c.css(d, "background-color")),
                    f && (f = f.replace(/ /g, "").toLowerCase(),
                        f.indexOf("rgba(0,0,0,0)") < 0 && f.indexOf("transparent") < 0 && (b[".gramm-problem > .giella-misspell-word"] = "background-color: " + f + ";",
                            b[".gramm-problem > .red"] = "background-color: " + f + ";")),
                    b
            }

            function e(a, b) {
                var c = {},
                    d = a.getOption("misspelled_word_class"),
                    e = a.getOption("languageNodeName"),
                    f = a.getOption("languageAttributeName");
                for (var g in b)
                    c[e + "[" + f + "=" + g + "] ." + d] = b[g];
                return c
            }
            var f;
            if (a.getOption("basePath")) {
                for (var g = a.UILib, h = a.getOption("cssPath"), i = "iframe" == a.getOption("documentContainer").nodeName.toLowerCase() ? a.getOption("documentContainer").contentWindow.document : document, j = i.getElementsByTagName("link"), k = d(i), l = e(a, b), m = g.extend(k, l), o = 0; o < j.length; o++)
                    if (j[o].href == h)
                        return;
                if (document.createStyleSheet)
                    "complete" == i.readyState ? c(h, m) : i.onreadystatechange = function() {
                        "complete" == i.readyState && c(h, m)
                    };
                else {
                    f = document.createElement("link"),
                        f.setAttribute("rel", "stylesheet"),
                        f.setAttribute("type", "text/css"),
                        f.setAttribute("href", h),
                        f.setAttribute("data-cke-temp", "cke_temp"),
                        i.getElementsByTagName("head")[0].appendChild(f),
                        style = document.createElement("style"),
                        style.setAttribute("data-cke-temp", "cke_temp");
                    for (var p in m)
                        style.innerHTML += p + "{" + m[p] + "}";
                    i.getElementsByTagName("head")[0].appendChild(style)
                }
            }
        }

        function h() {
            var a, b, c = n.getSelection();
            if (c.rangeCount() > 0 && (a = c.getRangeAt(0),
                    b = a.toString(), !b && 0 === a.getNodes().length))
                try {
                    c.expand("word"),
                        n.fire("selectionIsChanged", {})
                } catch (d) {}
        }

        function i(a) {
            var b = ["startGrammarCheck", "markupPhrase", "removeMarkupFromPhrases", "removeGrammarMarkupInSelectionNode", "replacePhrase", "ignorePhrase", "ignoreAllPhrases", "sentencesCollected", "getGrammarSuggestionsList", "problemPhrasesFound", "collectSentences"],
                c = n.getOption("graytLangList"),
                d = n.getOption("lang");
            !a || d in c.ltr || d in c.rtl || (a = !1),
                n.setOption("graytState", a),
                n.fire("graytStateChanged", {
                    state: a
                }),
                n[a ? "unblockEvents" : "blockEvents"](b)
        }
        a.basePath = this.basePath;
        var j, k = a.graytAutoStartup;
        delete a.graytAutoStartup;
        var l = a.multiLanguageStyles;
        delete a.multiLanguageStyles;
        var m = new GIELLA(a),
            n = new GIELLA.Sandbox("CKGIELLAApp", m);
        g(n, l),
            GIELLA.CustomHandlers = GIELLA.CustomHandlers || {};
        for (var o in GIELLA.CustomHandlers)
            GIELLA.CustomHandlers.hasOwnProperty(o) && n.subscribe(o, GIELLA.CustomHandlers[o]);
        m.instanceManager.add(n);
        var p = {
            IME: GIELLA.IME,
            EventProxy: GIELLA.EventProxy,
            Banner: GIELLA.Banner,
            WordsCollector: GIELLA.WordsCollector,
            WordsFinder: GIELLA.WordsFinder,
            Dictionary: GIELLA.DictionaryManager,
            Markup: GIELLA.Markup,
            WordsProcessor: GIELLA.WordsProcessor,
            SentencesCollector: GIELLA.SentencesCollector,
            SentencesDictionary: GIELLA.GrammarDictionaryManager,
            GrammarPhrasesFinder: GIELLA.GrammarPhrasesFinder,
            SentencesProcessor: GIELLA.SentencesProcessor,
            GrammarMarkup: GIELLA.GrammarMarkup
        };
        n.subscribe("allModulesReady", d),
            n.subscribe("allModulesReady", e),
            n.subscribe("allModulesReady", function() {
                i(k),
                    f()
            }),
            n.subscribe("removedMarkupInContainer", c),
            n.subscribe("markupedNode", c),
            m.initModules(p);
        var q = n.UILib,
            r = n.getOption("container");
        return q.on("dblclick", r, h),
            n.Localization.loadLocalization(n.getOption("localization"), n),
            n.fire("addEventHandler", {
                element: r,
                event: "keydown",
                callback: function(a) {
                    n.fire("keypress", {
                        event: a
                    })
                }
            }),
            n.subscribe("commitOptions", function(a) {
                if (!n.Utils.objectIsEmpty(a.changedOptions)) {
                    a.changedOptions.lang && a.changedOptions.lang !== n.getOption("lang") && (n.fire("removeMarkupInDocument", {}),
                            n.removeAllDeferredFunctions()),
                        n.setPaused(!0);
                    var b = GIELLA.DictionaryManager.Dictionary,
                        c = n.getOption("lang");
                    b.each(c, function(a) {
                        a.getStatus(n.getOption("uid")) == GIELLA.DictionaryManager.wordStatus.inprocess && a.setStatus(GIELLA.DictionaryManager.wordStatus.unknown, n.getOption("uid"))
                    });
                    for (var d in a.changedOptions)
                        a.changedOptions.hasOwnProperty(d) && n.setOption(d, a.changedOptions[d]);
                    n.setPaused(!1),
                        i(k),
                        e(),
                        f()
                }
            }, this),
            n.fire("appStarted", {}), {
                tabToOpen: null,
                reloadMarkup: function() {
                    e(),
                        f()
                },
                addMarkupHandler: function(a) {
                    j = a
                },
                replaceSelectionNode: function(a) {
                    var b = a && a.word ? "replaceWord" : "replacePhrase";
                    n.fire(b, a)
                },
                getSuggestions: function(a, b) {
                    n.fire("getSuggestionsList", {
                        lang: a,
                        word: b
                    })
                },
                subscribe: function(a, b) {
                    n.subscribe(a, b)
                },
                fire: function(a, b) {
                    n.fire(a, b)
                },
                ignoreWord: function(a) {
                    n.fire("ignoreWord", a)
                },
                ignorePhrase: function(a) {
                    n.fire("ignorePhrase", a)
                },
                addWordToUserDictionary: function(a) {
                    n.fire("addWordToUserDictionary", {
                        word: a
                    })
                },
                ignoreAllWords: function(a) {
                    n.fire("ignoreAllWords", a)
                },
                removeMarkupInSelectionNode: function(a) {
                    var b = a && a.grammarOnly ? "removeGrammarMarkupInSelectionNode" : "removeMarkupInSelectionNode";
                    n.fire(b, a)
                },
                destroy: function() {
                    n.getOption("paused") && n.setPaused(!1),
                        n.fire("removeMarkupInDocument", {}),
                        n.fire("removeAllEventHandlers", {}),
                        n.setPaused(!0),
                        n.removeAllDeferredFunctions(),
                        m.instanceManager.remove(n.getOption("uid")),
                        m.removeBindings(),
                        q.off("dblclick", r, h);
                    for (var a in this)
                        this.hasOwnProperty(a) && delete this[a]
                },
                setMarkupPaused: function(a) {
                    a ? (n.setPaused(!0),
                        n.removeAllDeferredFunctions()) : (n.setPaused(!1),
                        e(),
                        f())
                },
                getLangList: function() {
                    return this.getGiellaLangList()
                },
                getGiellaLangList: function() {
                    return n.getOption("giellaLangList")
                },
                getGraytLangList: function() {
                    return n.getOption("graytLangList")
                },
                getApplicationConfig: function() {
                    return n.getOption(["ignore-all-caps-words", "ignore-domain-names", "ignore-words-with-mixed-cases", "ignore-words-with-numbers"])
                },
                getLang: function() {
                    return n.getOption("lang")
                },
                commitOption: function(a) {
                    n.fire("commitOptions", a)
                },
                getUserDictionaryName: function() {
                    return n.getOption("userDictionaryName")
                },
                createUserDictionary: function(a, b, c) {
                    n.fire("createUserDictionary", {
                        name: a,
                        onSuccess: b,
                        onError: c
                    })
                },
                restoreUserDictionary: function(a, b, c) {
                    n.fire("restoreUserDictionary", {
                        name: a,
                        onSuccess: b,
                        onError: c
                    })
                },
                renameUserDictionary: function(a, b, c) {
                    n.fire("renameUserDictionary", {
                        newName: a,
                        onSuccess: b,
                        onError: c
                    })
                },
                removeUserDictionary: function(a, b, c) {
                    n.fire("removeUserDictionary", {
                        name: a,
                        onSuccess: b,
                        onError: c
                    })
                },
                setUserDictionaryName: function(a) {
                    n.fire("setUserDictionaryName", {
                        name: a
                    })
                },
                isUserDictionaryExist: function() {
                    return "string" == typeof n.getOption("userDictionaryName")
                },
                removeMarkupFromString: function(a) {
                    return n.removeMarkupFromString(a)
                },
                getLogo: function() {
                    return n.getOption("basePath") + n.getOption("giellaLogo")
                },
                getVersion: function() {
                    return n.getOption("giellaVersion")
                },
                isGiellaNode: function(a) {
                    var b = n.getOption("data_attribute_name");
                    return n.Utils.isEqualNode(a, b)
                },
                isGraytNode: function(a) {
                    var b = n.getOption("problem_grammar_data_attribute");
                    return n.Utils.isEqualNode(a, b)
                },
                findGiellaNode: function(a) {
                    for (var b = 0; b < a.length; b++)
                        if (this.isGiellaNode(a[b]))
                            return a[b];
                    return null
                },
                getSelectionNode: function() {
                    var a, b = n.getSelection(),
                        c = b.anchorNode(),
                        d = n.getOption("misspelled_word_node"),
                        e = n.getOption("data_attribute_name"),
                        f = n.getOption("problem_grammar_node"),
                        g = n.getOption("problem_grammar_data_attribute");
                    return a = n.Utils.isEqualNode(c, e) ? c : n.DOM.findNodeParents(c, d, e)[0],
                        a || (a = n.Utils.isEqualNode(c, g) ? c : n.DOM.findNodeParents(c, f, g)[0]),
                        a
                },
                setCustomDictionary: function(a) {
                    n.setOption("customDictionary", a)
                },
                setUserDictionary: function(a) {
                    n.setOption("customDictionary", a)
                },
                getNodeAttribute: function() {
                    return this.getGiellaNodeAttributeName()
                },
                getGiellaNodeAttributeName: function() {
                    return n.getOption("data_attribute_name")
                },
                getGraytNodeAttributeName: function() {
                    return n.getOption("problem_grammar_data_attribute")
                },
                getLangAttribute: function() {
                    return n.getOption("data_lang_attribute")
                },
                getProblemDescriptionText: function(a, b) {
                    var c, d, e = GIELLA.GrammarDictionaryManager.Dictionary;
                    return c = e.getPhrase(a, b).problemId,
                        d = e.getProblemDescription(c)
                },
                getContainerNode: function() {
                    return n.getOption("container")
                },
                getCustomDictionary: function() {
                    return n.getOption("customDictionary")
                },
                getLocal: function(a) {
                    return n.Localization.getLocal(a, n.getOption("localization"))
                },
                showBanner: function(a) {
                    n.fire("showBanner", {
                        contextMenuContainerSelector: a
                    })
                },
                hideBanner: function() {
                    n.fire("hideBanner", {})
                }
            }
    },
    GIELLA.CKGIELLA.prototype.basePath = function() {
        var a = window.GIELLA_BASEPATH || "";
        if (!a)
            for (var b = document.getElementsByTagName("script"), c = 0; c < b.length; c++) {
                var d = b[c].src.match(/(^|.*[\\\/])ckgiella.js(?:\?.*)?$/i);
                if (d) {
                    a = d[1];
                    break
                }
            }
        if (-1 == a.indexOf(":/") && (a = 0 === a.indexOf("/") ? window.location.href.match(/^.*?:\/\/[^\/]*/)[0] + a : window.location.href.match(/^[^\?]*\/(?:)/)[0] + a), !a)
            throw "Path could not be automatically detected.";
        return a
    }();
