/*! form-create v1.3 | github https://github.com/xaboy/form-create | author xaboy */
!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var n = t();
        for (var r in n)
            ("object" == typeof exports ? exports : e)[r] = n[r]
    }
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t),
                i.l = !0,
                i.exports
        }
        var n = {};
        return t.m = e,
            t.c = n,
            t.d = function(e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }
            ,
            t.n = function(e) {
                var n = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                ;
                return t.d(n, "a", n),
                    n
            }
            ,
            t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            t.p = "",
            t(t.s = 8)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.make = void 0;
        var r = n(1)
            , i = function(e, t) {
            return function(n, r) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                    , u = o();
                return u.type = e,
                    u.title = n,
                    u.field = r,
                    u.value = i,
                    new a(u,t)
            }
        }
            , o = function() {
            return {
                props: {},
                event: {},
                validate: [],
                options: [],
                slot: {}
            }
        }
            , a = function(e, t) {
            var n = this;
            this.rule = e,
                t.forEach(function(e) {
                    n[e] = u[e]
                })
        }
            , u = {};
        ["props", "event", "slot"].forEach(function(e) {
            u[e] = function(t) {
                return this.rule[e] = Object.assign(this.rule[e], t),
                    this
            }
        }),
            ["validate", "options"].forEach(function(e) {
                u[e] = function(t) {
                    return (0,
                        r.isArray)(t) || (t = [t]),
                        this.rule[e] = this.rule[e].concat(t),
                        this
                }
            }),
            a.prototype.getRule = function() {
                return this.rule
            }
            ,
            a.prototype.setValue = function(e) {
                return this.rule.value = e,
                    this
            }
            ,
            a.prototype.model = function(e, t) {
                t || (t = this.rule.field),
                    this.rule.model = function(n) {
                        e[t] = n
                    }
            }
            ,
            t.default = i,
            t.make = a
    }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                , i = [].concat
                , o = Object.assign
                , a = Object.prototype.toString
                , u = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Missing parameter";
                throw new Error(e)
            }
                , s = function(e) {
                return "[object Date]" === a.call(e)
            }
                , l = function(e) {
                return "[object Object]" === a.call(e)
            }
                , d = function(e) {
                return "[object Function]" === a.call(e)
            }
                , c = function(e) {
                return "[object String]" === a.call(e)
            }
                , f = Array.isArray
                , p = function(e) {
                return "object" === (void 0 === e ? "undefined" : r(e)) && null !== e && 1 === e.nodeType && !l(e)
            }
                , h = function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , r = !1;
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var o = n[i];
                        if ((r = f(o)) || l(o)) {
                            var a = void 0 === t[i];
                            r ? (r = !1,
                            a && (t[i] = [])) : a && (t[i] = {}),
                                e(t[i], o)
                        } else
                            t[i] = o
                    }
                return t
            }
                , m = function() {
                var e = 0;
                return function() {
                    return e++
                }
            }()
                , v = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date
                    , n = {
                    "M+": t.getMonth() + 1,
                    "d+": t.getDate(),
                    "h+": t.getHours(),
                    "m+": t.getMinutes(),
                    "s+": t.getSeconds(),
                    "q+": Math.floor((t.getMonth() + 3) / 3),
                    S: t.getMilliseconds()
                };
                /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
                for (var r in n)
                    new RegExp("(" + r + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[r] : ("00" + n[r]).substr(("" + n[r]).length)));
                return e
            };
            t.concat = i,
                t.assign = o,
                t.toString = a,
                t.throwIfMissing = u,
                t.isPlainObject = l,
                t.isDate = s,
                t.isFunction = d,
                t.isString = c,
                t.isArray = f,
                t.deepExtend = h,
                t.isElement = p,
                t.uniqueId = m,
                t.dateFormat = v
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1)
                , i = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , t = function(e, t) {
                    o.call(this, e, t)
                };
                return t.prototype = Object.create(o.prototype),
                    Object.assign(t.prototype, e),
                    t.prototype.constructor = t,
                    t
            }
                , o = function(e, t) {
                var n = t.model
                    , i = t.field
                    , o = t.type
                    , a = t.title
                    , u = void 0 === a ? "" : a
                    , s = t.options
                    , l = void 0 === s ? [] : s
                    , d = t.props
                    , c = void 0 === d ? {} : d
                    , f = t.validate
                    , p = void 0 === f ? [] : f
                    , h = t.event
                    , m = void 0 === h ? {} : h
                    , v = t.value
                    , g = void 0 === v ? "" : v
                    , y = t.slot
                    , k = void 0 === y ? {} : y;
                i = i.toString(),
                    this.type = o,
                    this.model = n,
                    this.value = g,
                    this.rule = {
                        title: u,
                        options: l,
                        props: c,
                        slot: k,
                        validate: (0,
                            r.isArray)(p) ? p : [p],
                        event: Object.keys(m).reduce(function(e, t) {
                            return e["on-" + t] = m[t],
                                e
                        }, {})
                    },
                    this.field = i,
                    this.vm = e,
                    this.unique = (0,
                        r.uniqueId)(),
                    this.refName = i + "" + this.unique,
                    this.el = {},
                    this.init()
            };
            o.prototype = {
                init: function() {},
                toParseValue: function(e) {
                    return e.toString()
                },
                toTrueValue: function(e) {
                    return e
                },
                setValue: function(e) {
                    this.vm.changeTrueData(this.field, e)
                },
                getValue: function() {
                    return this.vm.getTrueDataValue(this.field)
                },
                setParseValue: function(e) {
                    this.setValue(this.toTrueValue(e))
                },
                watchTrueValue: function(e) {
                    this.vm.changeFormData(this.field, this.toParseValue(e.value))
                },
                mounted: function() {
                    this.el = this.vm.$refs[this.refName]
                }
            },
                t.default = i
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(5)
                , o = r(i)
                , a = n(6)
                , u = r(a)
                , s = function(e) {
                var t = function(e, t, n) {
                    l.call(this, e, t, n)
                };
                return t.prototype = Object.create(l.prototype),
                    Object.assign(t.prototype, e),
                    t.prototype.constructor = t,
                    t
            }
                , l = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                this.handler = t,
                    this.options = n,
                    this.vm = e,
                    this.cvm = o.default.instance(e.$createElement),
                    this.event = t.rule.event,
                    this.init()
            };
            l.prototype = {
                props: u.default.instance(),
                init: function() {},
                parse: function() {
                    throw new Error("请实现parse方法")
                },
                inputProps: function() {
                    var e = this
                        , t = this.handler
                        , n = t.refName
                        , r = t.unique
                        , i = t.field
                        , o = t.rule.props;
                    return this.props.props(Object.assign(o, {
                        model: "formData." + i,
                        value: this.vm.formData[i],
                        elementId: n
                    })).ref(n).key("fip" + r).on(this.event).on("input", function(t) {
                        e.vm.$emit("input", t),
                            e.vm.$set(e.vm.formData, i, t)
                    })
                }
            },
                t.default = s
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.getMaker = t.timeStampToDate = t.getGlobalApi = t.createHandler = t.formCreateStyle = t.getConfig = t.getComponent = void 0;
            var i = n(1)
                , o = n(10)
                , a = r(o)
                , u = n(11)
                , s = r(u)
                , l = n(12)
                , d = r(l)
                , c = n(13)
                , f = r(c)
                , p = n(14)
                , h = r(p)
                , m = n(15)
                , v = r(m)
                , g = n(16)
                , y = r(g)
                , k = n(17)
                , b = r(k)
                , _ = n(18)
                , O = r(_)
                , w = n(19)
                , P = r(w)
                , D = n(20)
                , x = r(D)
                , S = n(7)
                , M = r(S)
                , V = n(21)
                , j = r(V)
                , I = n(22)
                , F = r(I)
                , T = n(23)
                , E = r(T)
                , R = {
                hidden: x.default,
                input: h.default,
                radio: y.default,
                checkbox: s.default,
                switch: O.default,
                select: b.default,
                datepicker: f.default,
                timepicker: P.default,
                inputnumber: v.default,
                colorpicker: d.default,
                upload: M.default,
                cascader: a.default,
                rate: j.default,
                slider: F.default,
                frame: E.default
            }
                , A = function(e) {
                if (void 0 === R[e])
                    throw new Error(e + " 表单类型不存在");
                return R[e]
            }
                , $ = function() {
                return {
                    el: null,
                    form: {
                        inline: !1,
                        labelPosition: "right",
                        labelWidth: 125,
                        showMessage: !0,
                        autocomplete: "off"
                    },
                    upload: {
                        beforeUpload: function() {},
                        onProgress: function(e, t, n) {},
                        onSuccess: function(e, t, n) {},
                        onError: function(e, t, n) {},
                        onPreview: function(e) {},
                        onRemove: function(e, t) {},
                        onFormatError: function(e, t) {},
                        onExceededSize: function(e, t) {},
                        handleIcon: "ios-eye-outline",
                        allowRemove: !0
                    },
                    onSubmit: function(e) {},
                    submitBtn: {
                        type: "primary",
                        size: "large",
                        shape: void 0,
                        long: !0,
                        htmlType: "button",
                        disabled: !1,
                        icon: "ios-upload",
                        innerText: "提交",
                        loading: !1
                    },
                    mounted: function() {}
                }
            }
                , C = function(e, t, n) {
                var r = A(t.type)
                    , i = new r.handler(e,t);
                return i.render = new r.render(e,i,n),
                    i
            }
                , H = function(e) {
                var t = e.vm;
                return {
                    formData: function() {
                        var t = {};
                        return e.fields().map(function(n) {
                            n = n.toString(),
                                t[n] = e.handlers[n].getValue()
                        }),
                            t
                    },
                    getValue: function(t) {
                        t = t.toString();
                        var n = e.handlers[t];
                        if (void 0 !== n)
                            return n.getValue();
                        console.error(t + " 字段不存在!")
                    },
                    changeField: function(n, r) {
                        n = n.toString();
                        var o = e.handlers[n];
                        void 0 === o ? console.error(n + " 字段不存在!") : (0,
                            i.isFunction)(r) ? r(t.getTrueData(n), function(e) {
                            o.setValue(e)
                        }) : o.setValue(r)
                    },
                    removeField: function(t) {
                        e.removeField(t.toString())
                    },
                    validate: function(t, n) {
                        e.getFormRef().validate(function(e) {
                            !0 === e ? t && t() : n && n()
                        })
                    },
                    validateField: function(t, n) {
                        e.getFormRef().validateField(t.toString(), n)
                    },
                    resetFields: function() {
                        e.getFormRef().resetFields(),
                            t.$nextTick(function() {
                                e.getFormRef().resetFields()
                            })
                    },
                    destroy: function() {
                        t.$el.remove(),
                            t.$destroy()
                    },
                    fields: function() {
                        return e.fields()
                    },
                    append: function(t, n) {
                        e.append(t, n, !1)
                    },
                    prepend: function(t, n) {
                        e.append(t, n, !0)
                    },
                    submit: function(t) {
                        var n = this;
                        this.validate(function() {
                            var r = n.formData();
                            (0,
                                i.isFunction)(t) ? t(r) : e.options.onSubmit && e.options.onSubmit(r)
                        })
                    },
                    model: function(t, n) {
                        n ? (0,
                            i.isArray)(n) || (n = [n]) : n = this.fields(),
                            n.forEach(function(n) {
                                var r = e.handlers[n];
                                if (!r)
                                    throw new Error(n + "字段不存在");
                                r.model = function(e) {
                                    t[n] = e
                                }
                                    ,
                                    r.model(r.vm.getTrueData(n))
                            })
                    },
                    submitStatus: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                            , n = (0,
                            i.deepExtend)(Object.create(null), e);
                        t.changeButtonProps(n)
                    },
                    btn: {
                        loading: function() {
                            t.changeButtonProps({
                                loading: !0
                            })
                        },
                        finish: function() {
                            t.changeButtonProps({
                                loading: !1
                            })
                        }
                    },
                    closeModal: function() {
                        t.$Modal.remove()
                    }
                }
            }
                , N = function(e) {
                if ((0,
                    i.isDate)(e))
                    return e;
                var t = new Date(e);
                return "Invalid Date" === t.toString() ? e : t
            }
                , L = function() {
                var e = Object.keys(R).reduce(function(e, t) {
                    return e[t] = R[t].make,
                        e
                }, {});
                return e.number = R.inputnumber.make,
                    e.time = R.timepicker.make,
                    e.date = R.datepicker.make,
                    e.color = R.colorpicker.make,
                    e
            };
            t.getComponent = A,
                t.getConfig = $,
                t.formCreateStyle = ".form-create{padding:25px;} .fc-upload-btn,.fc-files{display: inline-block;width: 58px;height: 58px;text-align: center;line-height: 60px;border: 1px solid transparent;border-radius: 4px;overflow: hidden;background: #fff;position: relative;box-shadow: 0 1px 1px rgba(0,0,0,.2);margin-right: 4px;box-sizing: border-box;} .fc-files>.ivu-icon{transform: translateY(20%);}.fc-files img{width:100%;height:100%;display:inline-block;vertical-align: top;}.fc-upload .ivu-upload{display: inline-block;}.fc-upload-btn{border: 1px dashed #dddee1;}.fc-upload .fc-upload-cover{ display: none; position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,.6); }.fc-upload .fc-upload-cover i{ color: #fff; font-size: 20px; cursor: pointer; margin: 0 2px; }.fc-files:hover .fc-upload-cover{ display: block; }.fc-upload .ivu-upload-list-file{ display: inline-block;float: left; }.fc-upload .ivu-upload-list{ position: absolute;left: 0; }.fc-spin-icon-load{animation: ani-fc-spin 1s linear infinite;} @-webkit-keyframes ani-fc-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ani-fc-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",
                t.createHandler = C,
                t.getGlobalApi = H,
                t.timeStampToDate = N,
                t.getMaker = L
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1)
                , i = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0,
                    r.throwIfMissing)("缺少参数:createElement");
                this.$h = e
            }
                , o = null
                , a = null;
            i.instance = function(e) {
                return !1 == o instanceof i && (o = new i(e)),
                    o
            }
                ,
                i.setVm = function(e) {
                    a = e
                }
                ,
                i.clearVm = function() {
                    a = null
                }
                ,
                i.prototype = {
                    make: function(e, t, n) {
                        (0,
                            r.isString)(t) && (t = {
                            domProps: {
                                innerHTML: t
                            }
                        });
                        var i = this.$h(e, t, this.getVNode(n));
                        return null !== a && (i.context = a),
                            i
                    },
                    getVNode: function(e) {
                        return (0,
                            r.isFunction)(e) ? e() : e
                    }
                };
            var u = {
                modal: "Modal",
                progress: "i-progress",
                button: "i-button",
                icon: "Icon",
                span: "span",
                slider: "Slider",
                rate: "Rate",
                upload: "Upload",
                cascader: "Cascader",
                colorPicker: "Color-Picker",
                timePicker: "Time-Picker",
                datePicker: "Date-Picker",
                switch: "i-switch",
                option: "i-option",
                select: "i-select",
                checkbox: "Checkbox",
                checkboxGroup: "Checkbox-Group",
                radio: "Radio",
                radioGroup: "Radio-Group",
                inputNumber: "Input-Number",
                input: "i-input",
                formItem: "Form-Item",
                form: "i-form"
            };
            Object.keys(u).forEach(function(e) {
                i.prototype[e] = function(t, n) {
                    return this.make(u[e], t, n)
                }
            }),
                t.default = i
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(1)
                , o = function() {
                this._data = this._initData(),
                    this._prev = null
            }
                , a = null;
            o.instance = function() {
                return !1 == a instanceof o && (a = new o),
                    a
            }
                ,
                o.prototype = {
                    _initData: function() {
                        return {
                            class: {},
                            style: {},
                            attrs: {},
                            props: {},
                            domProps: {},
                            on: {},
                            nativeOn: {},
                            directives: [],
                            scopedSlots: {},
                            slot: void 0,
                            key: void 0,
                            ref: void 0
                        }
                    },
                    class: function() {
                        var e = this
                            , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0,
                            i.throwIfMissing)("缺少参数:classList")
                            , n = arguments[1];
                        return (0,
                            i.isArray)(t) ? t.map(function(t) {
                            e._data.class[t.toString()] = !0
                        }) : (0,
                            i.isPlainObject)(t) ? this._data.class = (0,
                            i.assign)({}, this._data.class, t) : this._data.class[t.toString()] = void 0 === n || n,
                            this
                    },
                    directives: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0,
                            i.throwIfMissing)("缺少参数:directives");
                        return this._data.directives = i.concat.call.apply(i.concat, r(this._data.directives).concat(r(e))),
                            this
                    },
                    init: function() {
                        this._data = this._initData()
                    },
                    get: function() {
                        return this._prev = this._data,
                            this.init(),
                            this._prev
                    },
                    getPrev: function() {
                        return this._prev
                    }
                };
            var u = ["ref", "key", "slot"]
                , s = ["scopedSlots", "nativeOn", "on", "domProps", "props", "attrs", "style"];
            u.forEach(function(e) {
                o.prototype[e] = function(t) {
                    return this._data[e] = t,
                        this
                }
            }),
                s.forEach(function(e) {
                    o.prototype[e] = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0,
                            i.throwIfMissing)("缺少参数:" + e)
                            , n = arguments[1];
                        return (0,
                            i.isPlainObject)(t) ? this._data[e] = (0,
                            i.assign)({}, this._data[e], t) : this._data[e][t.toString()] = n,
                            this
                    }
                }),
                t.default = o
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function i(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var o = n(2)
                , a = r(o)
                , u = n(3)
                , s = r(u)
                , l = n(1)
                , d = n(0)
                , c = r(d)
                , f = (0,
                a.default)({
                init: function() {
                    var e = this.rule.props;
                    e.defaultFileList = [],
                        e.showUploadList = !1,
                        e.uploadType = e.uploadType ? e.uploadType : "file",
                    "file" === e.uploadType && void 0 === e.handleIcon && (e.handleIcon = !1),
                        this.parseValue = []
                },
                toParseValue: function(e) {
                    var t = this
                        , n = (0,
                        l.isArray)(e) ? e : e ? [e] : [];
                    return this.parseValue.splice(0, this.parseValue.length),
                        n.forEach(function(e) {
                            return t.push(e)
                        }),
                        this.rule.props.defaultFileList = this.parseValue,
                        this.parseValue
                },
                mounted: function() {
                    this.el = this.vm.$refs[this.refName] || {},
                    void 0 === this.el.fileList && (this.el.fileList = []),
                        this.changeParseValue(this.el.fileList)
                },
                push: function(e) {
                    this.parseValue.push({
                        url: e,
                        name: this.getFileName(e)
                    })
                },
                toTrueValue: function(e) {
                    if (!e)
                        return [];
                    var t = e.map(function(e) {
                        return e.url
                    }).filter(function(e) {
                        return void 0 !== e
                    });
                    return this.rule.props.maxLength <= 1 ? t[0] || "" : t
                },
                changeParseValue: function(e) {
                    this.parseValue = e,
                        this.vm.getTrueData(this.field).rule.props.defaultFileList = e
                },
                watchTrueValue: function(e) {
                    var t = !0;
                    e.rule.props.defaultFileList.forEach(function(e) {
                        t = t && (void 0 === e.percentage || "finished" === e.status)
                    }),
                    t && this.vm.changeFormData(this.field, this.toParseValue(e.value))
                },
                getFileName: function(e) {
                    var t = e.split("/")
                        , n = t[t.length - 1]
                        , r = n.indexOf(".");
                    return -1 === r ? n : n.substr(0, r)
                }
            })
                , p = ["beforeUpload", "onProgress", "onPreview", "onRemove", "onFormatError", "onExceededSize", "onError"]
                , h = (0,
                s.default)({
                init: function() {
                    var e = this
                        , t = this.handler;
                    this.uploadOptions = Object.assign(Object.create(null), this.options.upload, t.rule.props),
                        this.issetIcon = this.uploadOptions.allowRemove || this.uploadOptions.handleIcon;
                    var n = p.reduce(function(t, n) {
                        return t[n] = function() {
                            for (var t, r = arguments.length, i = Array(r), o = 0; o < r; o++)
                                i[o] = arguments[o];
                            if (e.uploadOptions[n])
                                return (t = e.uploadOptions[n]).call.apply(t, [null].concat(i))
                        }
                            ,
                            t
                    }, {});
                    this.propsData = this.props.props(this.uploadOptions).props("onSuccess", function(n, r, i) {
                        var o = e.uploadOptions.onSuccess.call(null, n, r, i);
                        o && (r.url = o,
                            r.name = t.getFileName(o))
                    }).props(n).ref(t.refName).key("fip" + t.unique).get()
                },
                defaultOnHandle: function(e) {
                    this.vm.$Modal.info({
                        title: "预览",
                        render: function(t) {
                            return t("img", {
                                attrs: {
                                    src: e
                                },
                                style: "width: 100%"
                            })
                        }
                    })
                },
                onHandle: function(e) {
                    var t = this.uploadOptions.onHandle;
                    if (t)
                        return t(e);
                    this.defaultOnHandle(e)
                },
                parse: function() {
                    var e = this
                        , t = this.handler
                        , n = t.rule
                        , r = t.unique;
                    this.uploadOptions = Object.assign(Object.create(null), this.options.upload, n.props),
                    !0 === this.uploadOptions.handleIcon && (this.uploadOptions.handleIcon = "ios-eye-outline");
                    var o = this.vm.formData[this.handler.field]
                        , a = [].concat(i(o.map(function(t, n) {
                        return void 0 === t.status || "finished" === t.status ? e.makeUploadView(t.url, "" + n + r, n) : t.showProgress ? e.makeProgress(t, "" + n + r) : void 0
                    })));
                    return a.push(this.makeUploadBtn(r, !this.uploadOptions.maxLength || this.uploadOptions.maxLength > this.vm.formData[this.handler.field].length)),
                        [this.cvm.make("div", {
                            key: "div4" + r,
                            class: {
                                "fc-upload": !0
                            }
                        }, a)]
                },
                makeUploadView: function(e, t, n) {
                    var r = this;
                    return this.cvm.make("div", {
                        key: "div1" + t,
                        class: {
                            "fc-files": !0
                        }
                    }, function() {
                        var i = [];
                        return "image" === r.handler.rule.props.uploadType ? i.push(r.cvm.make("img", {
                            key: "img" + t,
                            attrs: {
                                src: e
                            }
                        })) : i.push(r.cvm.icon({
                            key: "file" + t,
                            props: {
                                type: "document-text",
                                size: 40
                            }
                        })),
                        r.issetIcon && i.push(r.makeIcons(e, t, n)),
                            i
                    })
                },
                makeIcons: function(e, t, n) {
                    var r = this;
                    return this.cvm.make("div", {
                        key: "div2" + t,
                        class: {
                            "fc-upload-cover": !0
                        }
                    }, function() {
                        var i = [];
                        return r.uploadOptions.handleIcon && i.push(r.makeHandleIcon(e, t, n)),
                        !0 === r.uploadOptions.allowRemove && i.push(r.makeRemoveIcon(e, t, n)),
                            i
                    })
                },
                makeProgress: function(e, t) {
                    return this.cvm.make("div", {
                        key: "div3" + t,
                        class: {
                            "fc-files": !0
                        }
                    }, [this.cvm.progress({
                        key: "upp" + t,
                        props: {
                            percent: e.percentage,
                            hideInfo: !0
                        }
                    })])
                },
                makeUploadBtn: function(e, t) {
                    return this.cvm.upload(this.propsData, !0 === t ? [this.cvm.make("div", {
                        key: "div5" + e,
                        class: {
                            "fc-upload-btn": !0
                        }
                    }, [this.cvm.icon({
                        key: "upi" + e,
                        props: {
                            type: "camera",
                            size: 20
                        }
                    })])] : [])
                },
                makeRemoveIcon: function(e, t, n) {
                    var r = this;
                    return this.cvm.icon({
                        key: "upri" + t + n,
                        props: {
                            type: "ios-trash-outline"
                        },
                        nativeOn: {
                            click: function() {
                                r.handler.el.fileList.splice(n, 1),
                                    r.handler.changeParseValue(r.handler.el.fileList)
                            }
                        }
                    })
                },
                makeHandleIcon: function(e, t, n) {
                    var r = this;
                    return this.cvm.icon({
                        key: "uphi" + t + n,
                        props: {
                            type: this.uploadOptions.handleIcon.toString()
                        },
                        nativeOn: {
                            click: function() {
                                r.onHandle(e)
                            }
                        }
                    })
                }
            })
                , m = (0,
                c.default)("upload", ["props", "validate"])
                , v = {
                handler: f,
                render: h,
                make: m
            };
            t.default = v,
                t.handler = f,
                t.render = h,
                t.make = m
        }
        , function(e, t, n) {
            "use strict";
            var r = n(9)
                , i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
            "undefined" != typeof window && (window.formCreate = i.default,
            window.Vue && (window.iview || window.iView) && window.Vue.use(i.default)),
                e.exports.default = e.exports = i.default
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(1)
                , o = n(4)
                , a = n(24)
                , u = r(a)
                , s = n(25)
                , l = r(s)
                , d = n(0)
                , c = (0,
                o.getMaker)()
                , f = function e(t, n) {
                !this instanceof e && throwIfMissing("formCreate is a constructor and should be called with the `new` keyword");
                var r = (0,
                    i.deepExtend)((0,
                    i.deepExtend)(Object.create(null), (0,
                    o.getConfig)()), n);
                this.rules = Array.isArray(t) ? t : [],
                    this.handlers = {},
                    this.fRender = {},
                    this.formData = {},
                    this.validate = {},
                    this.trueData = {},
                    this.fieldList = [],
                    r.el = r.el ? (0,
                        i.isElement)(r.el) ? r.el : document.querySelector(r.el) : window.document.body,
                    this.options = r
            };
            f.createStyle = function() {
                if (null === document.getElementById("form-create-style")) {
                    var e = document.createElement("style");
                    e.id = "form-create-style",
                        e.innerText = o.formCreateStyle,
                        document.getElementsByTagName("head")[0].appendChild(e)
                }
            }
                ,
                f.create = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                        , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.Vue
                        , r = (0,
                        i.isElement)(t) ? {
                        el: t
                    } : t
                        , o = new f(e,(0,
                        i.deepExtend)(Object.create(null), r));
                    o.create(n);
                    return o.fCreateApi
                }
                ,
                f.install = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    f.createStyle(),
                        e.prototype.$formCreate = function(n, r) {
                            return f.create(n, (0,
                                i.deepExtend)((0,
                                i.deepExtend)(Object.create(null), r), t), e)
                        }
                        ,
                        e.prototype.$formCreate.version = "1.3.0",
                        e.prototype.$formCreate.maker = c
                }
                ,
                f.prototype = {
                    checkRule: function(e) {
                        return e.type = void 0 === e.type ? "hidden" : e.type.toLowerCase(),
                        e.field || (e.field = ""),
                            e
                    },
                    setHandler: function(e) {
                        var t = e.rule
                            , n = e.field;
                        this.handlers[n] = e,
                            this.formData[n] = e.toParseValue(e.value),
                            this.validate[n] = t.validate,
                            this.trueData[n] = {
                                value: e.toTrueValue(this.formData[n]),
                                rule: e.rule
                            }
                    },
                    init: function(e) {
                        var t = this;
                        this.vm = e,
                            this.rules.forEach(function(e, n) {
                                e instanceof d.make && (t.rules[n] = e.getRule())
                            }),
                            this.rules.filter(function(e) {
                                return void 0 !== e.field
                            }).forEach(function(e) {
                                e = t.checkRule(e);
                                var n = (0,
                                    o.createHandler)(t.vm, e, t.options);
                                -1 === t.fieldList.indexOf(n.field) ? (t.setHandler(n),
                                    t.fieldList.push(n.field)) : console.error(n.field + " 字段已存在")
                            }),
                            this.fCreateApi = (0,
                                o.getGlobalApi)(this),
                            e.$set(e, "formData", this.formData),
                            e.$set(e, "trueData", this.trueData),
                            e.$set(e, "buttonProps", this.options.submitBtn),
                            this.fRender = new u.default(this)
                    },
                    create: function(e) {
                        var t = e.extend(this.component())
                            , n = (new t).$mount();
                        return this.options.el.appendChild(n.$el),
                            n
                    },
                    component: function() {
                        return (0,
                            l.default)(this)
                    },
                    append: function(e, t, n) {
                        e instanceof d.make && (e = e.getRule());
                        var r = (0,
                            i.deepExtend)(Object.create(null), this.checkRule(e))
                            , a = (0,
                            o.createHandler)(this.vm, r, this.options);
                        if (-1 !== Object.keys(this.handlers).indexOf(a.field))
                            throw new Error(r.field + "字段已存在");
                        this.vm.setField(a.field),
                            this.fRender.setRender(a, t || "", n),
                            this.setHandler(a),
                            this.addHandlerWatch(a),
                            this.vm.$nextTick(function() {
                                a.mounted()
                            })
                    },
                    removeField: function(e) {
                        if (void 0 === this.handlers[e])
                            throw new Error(e + "字段不存在");
                        this.vm.removeFormData(e),
                            delete this.handlers[e],
                            delete this.validate[e],
                            this.fRender.removeRender(e),
                            delete this.formData[e],
                            delete this.trueData[e]
                    },
                    addHandlerWatch: function(e) {
                        var t = this
                            , n = e.field
                            , r = this.vm.$watch("formData." + n, function(t, n) {
                            void 0 !== e ? e.setParseValue(t) : r()
                        }, {
                            deep: !0
                        })
                            , i = this.vm.$watch("trueData." + n, function(r, o) {
                            if (void 0 !== e) {
                                var a = JSON.stringify(r);
                                t.vm.jsonData[n] !== a && (t.vm.jsonData[n] = a,
                                e.model && e.model(t.vm.getTrueData(n)),
                                    e.watchTrueValue(r))
                            } else
                                i()
                        }, {
                            deep: !0
                        })
                    },
                    getFormRef: function() {
                        return this.vm.$refs[this.fRender.refName]
                    },
                    fields: function() {
                        return Object.keys(this.formData)
                    }
                },
                t.default = {
                    install: f.install,
                    default: f,
                    create: f.create,
                    maker: c,
                    version: "1.3.0"
                }
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(1)
                , l = n(0)
                , d = r(l)
                , c = (0,
                o.default)({
                init: function() {
                    var e = this.rule;
                    e.props.data || (e.props.data = []),
                    (0,
                        s.isArray)(this.value) || (this.value = [])
                },
                toTrueValue: function() {
                    return void 0 === this.el.value ? this.vm.getFormData(this.field) : this.el.value
                },
                toParseValue: function(e) {
                    return (0,
                        s.isArray)(e) ? Array.from(e) : []
                }
            })
                , f = (0,
                u.default)({
                parse: function() {
                    return [this.cvm.cascader(this.inputProps().get())]
                }
            })
                , p = (0,
                d.default)("cascader", ["props", "event", "validate"])
                , h = {
                handler: c,
                render: f,
                make: p
            };
            t.default = h,
                t.handler = c,
                t.render = f,
                t.make = p
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(1)
                , l = n(0)
                , d = r(l)
                , c = (0,
                o.default)({
                toParseValue: function(e) {
                    return !1 === (0,
                        s.isArray)(e) && (e = [e]),
                        e = e.map(function(e) {
                            return e.toString()
                        }),
                        this.rule.options.filter(function(t) {
                            return -1 !== e.indexOf(t.value)
                        }).map(function(e) {
                            return e.label
                        })
                },
                toTrueValue: function(e) {
                    var t = this.rule.options.filter(function(t) {
                        return -1 !== e.indexOf(t.label)
                    }).map(function(e) {
                        return e.value
                    });
                    return 1 === this.rule.options.length ? void 0 === t[0] ? "" : t[0] : t
                }
            })
                , f = (0,
                u.default)({
                parse: function() {
                    var e = this
                        , t = this.handler
                        , n = t.unique
                        , r = t.rule.options;
                    return [this.cvm.checkboxGroup(this.inputProps().get(), function() {
                        return r.map(function(t, r) {
                            return e.cvm.checkbox({
                                props: t,
                                key: "copt" + r + n
                            })
                        })
                    })]
                }
            })
                , p = (0,
                d.default)("checkbox", ["options", "props", "event", "validate"])
                , h = {
                handler: c,
                render: f,
                make: p
            };
            t.default = h,
                t.handler = c,
                t.render = f,
                t.make = p
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(0)
                , l = r(s)
                , d = (0,
                o.default)({})
                , c = (0,
                u.default)({
                parse: function() {
                    return [this.cvm.colorPicker(this.inputProps().get())]
                }
            })
                , f = (0,
                l.default)("colorpicker", ["props", "event", "validate"])
                , p = {
                handler: d,
                render: c,
                make: f
            };
            t.default = p,
                t.handler = d,
                t.render = c,
                t.make = f
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(1)
                , l = n(4)
                , d = n(0)
                , c = r(d)
                , f = (0,
                o.default)({
                init: function() {
                    var e = this.rule.props;
                    e.type = e.type ? e.type : "date",
                    void 0 === e.startDate && (e.startDate = (0,
                        l.timeStampToDate)(e.startDate))
                },
                toParseValue: function(e) {
                    var t = (0,
                        s.isArray)(e)
                        , n = this.rule.props
                        , r = void 0;
                    return -1 !== ["daterange", "datetimerange"].indexOf(n.type) ? r = t ? e.map(function(e) {
                        return e ? (0,
                            l.timeStampToDate)(e) : ""
                    }) : ["", ""] : "date" === n.type && !0 === n.multiple ? r = e.toString() : (r = t ? r = e[0] || "" : e,
                        r = r ? (0,
                            l.timeStampToDate)(r) : ""),
                        r
                },
                toTrueValue: function() {
                    return this.el.publicStringValue
                }
            })
                , p = (0,
                u.default)({
                parse: function() {
                    return [this.cvm.datePicker(this.inputProps().get())]
                }
            })
                , h = (0,
                c.default)("datepicker", ["props", "event", "validate"])
                , m = {
                handler: f,
                render: p,
                make: h
            };
            t.default = m,
                t.handler = f,
                t.render = p,
                t.make = h
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(0)
                , l = r(s)
                , d = (0,
                o.default)({})
                , c = (0,
                u.default)({
                parse: function() {
                    return [this.cvm.input(this.inputProps().get())]
                }
            })
                , f = (0,
                l.default)("input", ["props", "event", "validate", "slot"])
                , p = {
                handler: d,
                render: c,
                make: f
            };
            t.default = p,
                t.handler = d,
                t.render = c,
                t.make = f
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(0)
                , l = r(s)
                , d = (0,
                o.default)({
                toParseValue: function(e) {
                    var t = parseFloat(e);
                    return Number.isNaN(t) && (t = ""),
                        t
                }
            })
                , c = (0,
                u.default)({
                parse: function() {
                    return [this.cvm.inputNumber(this.inputProps().get())]
                }
            })
                , f = (0,
                l.default)("inputnumber", ["props", "event", "validate"])
                , p = {
                handler: d,
                render: c,
                make: f
            };
            t.default = p,
                t.handler = d,
                t.render = c,
                t.make = f
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(0)
                , l = r(s)
                , d = (0,
                o.default)({
                toParseValue: function(e) {
                    return e = e.toString(),
                        this.rule.options.filter(function(t) {
                            return t.value.toString() === e
                        }).reduce(function(e, t) {
                            return t.label
                        }, "")
                },
                toTrueValue: function(e) {
                    return e = e.toString(),
                        this.rule.options.filter(function(t) {
                            return t.label.toString() === e
                        }).reduce(function(e, t) {
                            return t.value
                        }, "")
                }
            })
                , c = (0,
                u.default)({
                parse: function() {
                    var e = this
                        , t = this.handler
                        , n = t.unique
                        , r = t.rule.options;
                    return [this.cvm.radioGroup(this.inputProps().get(), function() {
                        return r.map(function(t, r) {
                            return e.cvm.radio({
                                props: t,
                                key: "ropt" + r + n
                            })
                        })
                    })]
                }
            })
                , f = (0,
                l.default)("radio", ["options", "props", "event", "validate"])
                , p = {
                handler: d,
                render: c,
                make: f
            };
            t.default = p,
                t.handler = d,
                t.render = c,
                t.make = f
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(1)
                , l = n(0)
                , d = r(l)
                , c = (0,
                o.default)({
                toParseValue: function(e) {
                    var t = (0,
                        s.isArray)(e);
                    return !0 === this.rule.props.multiple ? Array.from(!0 === t ? e : [e]) : !0 === t ? e[0] || "" : e
                },
                toTrueValue: function(e) {
                    return (0,
                        s.isArray)(e) ? Array.from(e) : e
                }
            })
                , f = (0,
                u.default)({
                parse: function() {
                    var e = this
                        , t = this.handler
                        , n = t.unique
                        , r = t.rule.options;
                    return [this.cvm.select(this.inputProps().get(), function() {
                        return r.map(function(t, r) {
                            return e.cvm.option({
                                props: t,
                                key: "sopt" + r + n
                            })
                        })
                    })]
                }
            })
                , p = (0,
                d.default)("select", ["options", "props", "event", "validate"])
                , h = {
                handler: c,
                render: f,
                make: p
            };
            t.default = h,
                t.handler = c,
                t.render = f,
                t.make = p
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(0)
                , l = r(s)
                , d = (0,
                o.default)({
                init: function() {
                    void 0 === this.rule.slot && (this.rule.slot = {})
                }
            })
                , c = (0,
                u.default)({
                parse: function() {
                    var e = this.handler.rule.slot;
                    return this.propsData = this.inputProps().scopedSlots({
                        open: function() {
                            return e.open
                        },
                        close: function() {
                            return e.close
                        }
                    }).get(),
                        [this.cvm.switch(this.propsData)]
                }
            })
                , f = (0,
                l.default)("switch", ["slot", "props", "event", "validate"])
                , p = {
                handler: d,
                render: c,
                make: f
            };
            t.default = p,
                t.handler = d,
                t.render = c,
                t.make = f
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(1)
                , l = n(4)
                , d = n(0)
                , c = r(d)
                , f = (0,
                o.default)({
                init: function() {
                    var e = this.rule.props;
                    e.type || (e.type = "time"),
                    void 0 === e.confirm && (e.confirm = !0)
                },
                toParseValue: function(e) {
                    var t = this
                        , n = void 0
                        , r = (0,
                        s.isArray)(e);
                    return "timerange" === this.rule.props.type ? n = r ? e.map(function(e) {
                        return e ? t.getTime((0,
                            l.timeStampToDate)(e)) : ""
                    }) : ["", ""] : (r && (e = e[0]),
                        n = e ? this.getTime((0,
                            l.timeStampToDate)(e)) : ""),
                        n
                },
                toTrueValue: function() {
                    return this.el.publicStringValue
                },
                getTime: function(e) {
                    return (0,
                        s.isDate)(e) ? (0,
                        s.dateFormat)("hh:mm:ss", e) : e
                }
            })
                , p = (0,
                u.default)({
                parse: function() {
                    return [this.cvm.timePicker(this.inputProps().get())]
                }
            })
                , h = (0,
                c.default)("timepicker", ["props", "event", "validate"])
                , m = {
                handler: f,
                render: p,
                make: h
            };
            t.default = m,
                t.handler = f,
                t.render = p,
                t.make = h
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(0)
                , l = r(s)
                , d = (0,
                o.default)({
                init: function() {
                    this.rule.props = {}
                }
            })
                , c = (0,
                u.default)({
                parse: function() {
                    return []
                }
            })
                , f = function() {
                var e = (0,
                    l.default)("hidden", []);
                return e.bind(e, "")
            }()
                , p = {
                handler: d,
                render: c,
                make: f
            };
            t.default = p,
                t.handler = d,
                t.render = c,
                t.make = f
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(0)
                , l = r(s)
                , d = (0,
                o.default)({
                toParseValue: function(e) {
                    var t = parseFloat(e);
                    return Number.isNaN(t) && (t = 0),
                        t
                }
            })
                , c = (0,
                u.default)({
                parse: function() {
                    return [this.cvm.rate(this.inputProps().get())]
                }
            })
                , f = (0,
                l.default)("rate", ["props", "event", "validate"])
                , p = {
                handler: d,
                render: c,
                make: f
            };
            t.default = p,
                t.handler = d,
                t.render = c,
                t.make = f
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(1)
                , l = n(0)
                , d = r(l)
                , c = (0,
                o.default)({
                init: function() {
                    this.rule.props.min = void 0 === this.rule.props.min ? 0 : parseFloat(this.rule.props.min) || 0
                },
                toParseValue: function(e) {
                    var t = (0,
                        s.isArray)(e)
                        , n = this.rule.props
                        , r = n.min;
                    return !0 === n.range ? t ? e : [r, parseFloat(e) || r] : t ? parseFloat(e[0]) || r : parseFloat(e)
                }
            })
                , f = (0,
                u.default)({
                parse: function() {
                    return [this.cvm.slider(this.inputProps().get())]
                }
            })
                , p = (0,
                d.default)("slider", ["props", "event", "validate"])
                , h = {
                handler: c,
                render: f,
                make: p
            };
            t.default = h,
                t.handler = c,
                t.render = f,
                t.make = p
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.make = t.render = t.handler = void 0;
            var i = n(2)
                , o = r(i)
                , a = n(3)
                , u = r(a)
                , s = n(1)
                , l = n(0)
                , d = r(l)
                , c = n(7)
                , f = (0,
                o.default)({
                init: function() {
                    var e = this.rule.props;
                    e.type || (e.type = "input"),
                    e.icon || (e.icon = "folder"),
                    e.width || (e.width = "500px"),
                    e.height || (e.height = "370px"),
                    void 0 === e.spin && (e.spin = !0),
                    e.title || (e.title = "请选择" + this.rule.title),
                    e.maxLength || (e.maxLength = 0),
                        e.multiple = "1" !== e.maxLength.toString(),
                        "file" === e.type && void 0 === e.handleIcon ? e.handleIcon = !1 : e.handleIcon = !0 === e.handleIcon || void 0 === e.handleIcon ? "ios-eye-outline" : e.handleIcon,
                    void 0 === e.allowRemove && (e.allowRemove = !0)
                },
                toParseValue: function(e) {
                    var t = void 0
                        , n = e
                        , r = (0,
                        s.isArray)(n);
                    return t = "" === n ? [] : r ? n : [n],
                        this.parseValue = t,
                        t
                },
                toTrueValue: function(e) {
                    return !0 === this.rule.props.multiple ? e : void 0 === e[0] ? "" : e[0]
                }
            })
                , p = {
                onOpen: "on-open",
                onChange: "on-change",
                onOk: "on-ok"
            }
                , h = (0,
                u.default)({
                init: function() {
                    var e = this
                        , t = this.handler.field
                        , n = !1;
                    this.vm.$watch("formData." + t, function() {
                        !0 === n && e.onChange(),
                            n = !0
                    }),
                        this._props = this.handler.rule.props,
                        this.issetIcon = !1 !== this._props.handleIcon || !0 === this._props.allowRemove
                },
                parse: function() {
                    var e = this._props.type;
                    return "image" === e ? this.makeGroup(this.makeImage()) : "file" === e ? this.makeGroup(this.makeFile()) : this.makeInput()
                },
                makeInput: function(e) {
                    var t = this
                        , n = this.handler.unique
                        , r = this.inputProps().props({
                        type: "text",
                        value: this.handler.parseValue.toString(),
                        icon: this._props.icon,
                        readonly: !0
                    }).on("on-click", function() {
                        t.showModel()
                    }).key("ifit" + n).style({
                        display: !0 === e ? "none" : "inline-block"
                    }).get();
                    return [this.cvm.input(r)]
                },
                makeGroup: function(e) {
                    var t = this.handler.unique
                        , n = this.handler.field;
                    return [this.cvm.make("div", {
                        key: "ifgp1" + t,
                        class: {
                            "fc-upload fc-frame": !0
                        },
                        ref: this.handler.refName,
                        props: {
                            value: this.vm.formData[n]
                        }
                    }, e), this.makeInput(!0)]
                },
                makeImage: function() {
                    var e = this
                        , t = this.handler.unique
                        , n = this.handler.parseValue.map(function(n, r) {
                        return e.cvm.make("div", {
                            key: "ifid1" + t + r,
                            class: {
                                "fc-files": !0
                            }
                        }, [e.cvm.make("img", {
                            key: "ifim" + t + r,
                            attrs: {
                                src: n
                            }
                        }), e.makeIcons(n, t, r)])
                    });
                    return n.push(this.makeBtn()),
                        n
                },
                makeFile: function() {
                    var e = this
                        , t = this.handler.unique
                        , n = this.handler.parseValue.map(function(n, r) {
                        return e.cvm.make("div", {
                            key: "iffd2" + t + r,
                            class: {
                                "fc-files": !0
                            }
                        }, [e.cvm.icon({
                            key: "iff" + t + r,
                            props: {
                                type: "document-text",
                                size: 40
                            }
                        }), e.makeIcons(n, t, r)])
                    });
                    return n.push(this.makeBtn()),
                        n
                },
                makeBtn: function() {
                    var e = this
                        , t = this.handler.rule.props;
                    if (!(t.maxLength > 0 && this.handler.parseValue.length >= t.maxLength)) {
                        var n = this.handler.unique;
                        return this.cvm.make("div", {
                            key: "ifbd3" + n,
                            class: {
                                "fc-upload-btn": !0
                            },
                            on: {
                                click: function() {
                                    e.showModel()
                                }
                            }
                        }, [this.cvm.icon({
                            key: "ifbi" + n,
                            props: {
                                type: this._props.icon,
                                size: 20
                            }
                        })])
                    }
                },
                makeSpin: function() {
                    if (!0 === this._props.spin) {
                        var e = this.handler.unique;
                        return this.cvm.make("Spin", {
                            props: {
                                fix: !0
                            },
                            key: "ifsp" + e,
                            class: {
                                "fc-spin": !0
                            }
                        }, [this.cvm.icon({
                            props: {
                                type: "load-c",
                                size: 18
                            },
                            class: {
                                "fc-spin-icon-load": !0
                            },
                            key: "ifspi" + e
                        }), this.cvm.make("div", {
                            domProps: {
                                innerHTML: "加载中..."
                            },
                            key: "ifspd" + e
                        })])
                    }
                },
                makeIcons: function(e, t, n) {
                    var r = this;
                    if (!0 === this.issetIcon)
                        return this.cvm.make("div", {
                            key: "ifis" + t + n,
                            class: {
                                "fc-upload-cover": !0
                            }
                        }, function() {
                            var i = [];
                            return !1 !== r._props.handleIcon && i.push(r.makeHandleIcon(e, t, n)),
                            !0 === r._props.allowRemove && i.push(r.makeRemoveIcon(e, t, n)),
                                i
                        })
                },
                makeRemoveIcon: function(e, t, n) {
                    var r = this;
                    return this.cvm.icon({
                        key: "ifri" + t + n,
                        props: {
                            type: "ios-trash-outline"
                        },
                        nativeOn: {
                            click: function() {
                                !1 !== r.onRemove(e) && r.handler.parseValue.splice(n, 1)
                            }
                        }
                    })
                },
                makeHandleIcon: function(e, t, n) {
                    var r = this
                        , i = this._props;
                    return this.cvm.icon({
                        key: "ifhi" + t + n,
                        props: {
                            type: i.handleIcon.toString()
                        },
                        nativeOn: {
                            click: function() {
                                r.onHandle(e)
                            }
                        }
                    })
                },
                onRemove: function(e) {
                    var t = this.handler.rule.event["on-remove"];
                    if (t)
                        return t(e, this.handler.getValue())
                },
                onHandle: function(e) {
                    var t = this.handler.rule.event["on-handle"];
                    if (t)
                        return t(e);
                    this.defaultOnHandle(e)
                },
                showModel: function() {
                    var e = this
                        , t = !1 !== this.onOpen()
                        , n = this._props
                        , r = n.width
                        , i = n.height
                        , o = n.src
                        , a = n.title;
                    t && this.vm.$Modal.info({
                        title: a,
                        render: function() {
                            return [e.makeSpin(), e.cvm.make("iframe", {
                                attrs: {
                                    src: o
                                },
                                style: {
                                    height: i,
                                    border: "0 none",
                                    width: "100%"
                                },
                                on: {
                                    load: function() {
                                        !0 === e._props.spin && document.getElementsByClassName("fc-spin")[0].remove()
                                    }
                                },
                                key: "ifmd" + (0,
                                    s.uniqueId)()
                            })]
                        },
                        onOk: function() {
                            e.onOk()
                        },
                        width: r
                    })
                }
            });
            h.prototype.defaultOnHandle = c.render.prototype.defaultOnHandle,
                Object.keys(p).forEach(function(e) {
                    h.prototype[e] = function() {
                        var e = this.handler.rule.event["on-open"];
                        if (e)
                            return e(this.handler.getValue())
                    }
                });
            var m = (0,
                d.default)("frame", ["props", "event", "validate"])
                , v = {
                handler: f,
                render: h,
                make: m
            };
            t.default = v,
                t.handler = f,
                t.render = h,
                t.make = m
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(5)
                , o = r(i)
                , a = n(6)
                , u = r(a)
                , s = n(1)
                , l = function(e) {
                var t = e.vm
                    , n = e.options
                    , r = e.fieldList
                    , i = e.handlers
                    , a = e.formData
                    , l = e.validate
                    , d = e.fCreateApi;
                this.vm = t,
                    this.options = n,
                    this.handlers = i,
                    this.renderSort = r,
                    this.renders = this.renderSort.reduce(function(e, t) {
                        return e[t] = i[t].render,
                            e
                    }, {}),
                    this.form = {
                        model: a,
                        rules: l
                    },
                    this.fCreateApi = d,
                    this.cvm = o.default.instance(t.$createElement),
                    this.props = u.default.instance(),
                    this.unique = (0,
                        s.uniqueId)(),
                    this.refName = "cForm" + this.unique
            };
            l.prototype = {
                parse: function(e) {
                    var t = this;
                    o.default.setVm(e);
                    var n = this.unique
                        , r = this.props.props(Object.assign({}, this.options.form, this.form)).ref(this.refName).class("form-create", !0).key(n).get()
                        , i = this.renderSort.map(function(e) {
                        var r = t.renders[e]
                            , i = r.handler
                            , o = i.key;
                        if ("hidden" !== i.rule.type)
                            return t.makeFormItem(r.handler, r.parse(), "fItem" + o + n)
                    });
                    return !1 !== this.options.submitBtn && i.push(this.makeSubmitBtn(n)),
                        this.cvm.form(r, i)
                },
                makeFormItem: function(e, t) {
                    var n = e.rule
                        , r = e.refName
                        , i = e.unique
                        , o = e.field
                        , a = this.props.props({
                        prop: o,
                        label: n.title,
                        labelFor: r,
                        rules: n.validate
                    }).key(i).get();
                    return this.cvm.formItem(a, t)
                },
                makeSubmitBtn: function(e) {
                    var t = this;
                    return this.cvm.button({
                        key: "fbtn" + e,
                        props: this.vm.buttonProps,
                        on: {
                            click: function() {
                                t.fCreateApi.submit()
                            }
                        }
                    }, [this.cvm.span(this.options.submitBtn.innerText)])
                },
                removeRender: function(e) {
                    delete this.renders[e],
                        this.renderSort.splice(this.renderSort.indexOf(e), 1)
                },
                setRender: function(e, t, n) {
                    this.renders[e.field] = e.render,
                    void 0 !== t && this.changeSort(e.field, t, n)
                },
                changeSort: function(e, t, n) {
                    var r = this.renderSort.indexOf(t.toString());
                    -1 !== r ? this.renderSort.splice(!1 === n ? r + 1 : r, 0, e) : n ? this.renderSort.unshift(e) : this.renderSort.push(e)
                }
            },
                t.default = l
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function(e) {
                return {
                    name: "form-create",
                    data: function() {
                        return {
                            formData: {},
                            buttonProps: {},
                            trueData: {},
                            jsonData: {}
                        }
                    },
                    render: function() {
                        return e.fRender.parse(e.vm)
                    },
                    created: function() {
                        e.init(this)
                    },
                    methods: {
                        changeFormData: function(e, t) {
                            this.$set(this.formData, e, t)
                        },
                        changeTrueData: function(e, t) {
                            this.$set(this.trueData[e], "value", t)
                        },
                        getTrueDataValue: function(e) {
                            return this.trueData[e].value
                        },
                        getTrueData: function(e) {
                            return this.trueData[e]
                        },
                        getFormData: function(e) {
                            return this.formData[e]
                        },
                        removeFormData: function(e) {
                            this.$delete(this.formData, e),
                                this.$delete(this.trueData, e)
                        },
                        changeButtonProps: function(e) {
                            this.$set(this, "buttonProps", Object.assign(this.buttonProps, e))
                        },
                        setField: function(e) {
                            this.$set(this.formData, e, ""),
                                this.$set(this.trueData, e, {})
                        }
                    },
                    mounted: function() {
                        var t = this;
                        Object.keys(this.formData).map(function(n) {
                            var r = e.handlers[n];
                            r.model && r.model(t.getTrueData(n)),
                                e.addHandlerWatch(r),
                                r.mounted()
                        }),
                        e.options.mounted && e.options.mounted()
                    }
                }
            };
            t.default = r
        }
    ])
});
