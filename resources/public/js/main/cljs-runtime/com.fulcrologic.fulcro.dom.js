goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__58032){
var vec__58034 = p__58032;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58034,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58034,(1),null);
var pair = vec__58034;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__58038){
var vec__58039 = p__58038;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58039,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58039,(1),null);
var pair = vec__58039;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__58044){
var vec__58045 = p__58044;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58045,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58045,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__58048 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58048,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__58048;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * This fn is outdated - it expects js/ReactDOMServer to be defined (used to be provided cljsjs.react.dom.server).
 *   It is better to do it yourself (under shadow-cljs):
 * 
 * ```clj
 * (ns ex (:require ["react-dom/server" :as react-dom-server] ...))
 * (react-dom-server/renderToString c)
 * ```
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__58052 = arguments.length;
switch (G__58052) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__58053 = component.refs;
var G__58053__$1 = (((G__58053 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__58053,name));
if((G__58053__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__58053__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5802__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5802__auto__)){
var ref = temp__5802__auto__;
var G__58058 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__58060 = (function (){var G__58061 = r;
if((G__58061 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__58061);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__58060) : ref.call(null, G__58060));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__58058) : factory.call(null, G__58058));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null, props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__58066 = arguments.length;
switch (G__58066) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___59501 = arguments.length;
var i__5770__auto___59502 = (0);
while(true){
if((i__5770__auto___59502 < len__5769__auto___59501)){
args_arr__5794__auto__.push((arguments[i__5770__auto___59502]));

var G__59503 = (i__5770__auto___59502 + (1));
i__5770__auto___59502 = G__59503;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq58063){
var G__58064 = cljs.core.first(seq58063);
var seq58063__$1 = cljs.core.next(seq58063);
var G__58065 = cljs.core.first(seq58063__$1);
var seq58063__$2 = cljs.core.next(seq58063__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58064,G__58065,seq58063__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__5043__auto__ = tag;
if(cljs.core.truth_(and__5043__auto__)){
var G__58075 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__58075) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null, G__58075));
} else {
return and__5043__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x58077_59504 = ctor.prototype;
(x58077_59504.onChange = (function (event){
var this$ = this;
var temp__5804__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null, event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x58077_59504.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__58076_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__58076_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5043__auto__ = state_value;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = element_value;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,187,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,-1917774216,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x58077_59504.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__59505__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__59505 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59506__i = 0, G__59506__a = new Array(arguments.length -  0);
while (G__59506__i < G__59506__a.length) {G__59506__a[G__59506__i] = arguments[G__59506__i + 0]; ++G__59506__i;}
  args = new cljs.core.IndexedSeq(G__59506__a,0,null);
} 
return G__59505__delegate.call(this,args);};
G__59505.cljs$lang$maxFixedArity = 0;
G__59505.cljs$lang$applyTo = (function (arglist__59507){
var args = cljs.core.seq(arglist__59507);
return G__59505__delegate(args);
});
G__59505.cljs$core$IFn$_invoke$arity$variadic = G__59505__delegate;
return G__59505;
})()
;
return (function() { 
var G__59508__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5802__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5802__auto__)){
var r = temp__5802__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__59508 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__59509__i = 0, G__59509__a = new Array(arguments.length -  1);
while (G__59509__i < G__59509__a.length) {G__59509__a[G__59509__i] = arguments[G__59509__i + 1]; ++G__59509__i;}
  children = new cljs.core.IndexedSeq(G__59509__a,0,null);
} 
return G__59508__delegate.call(this,props,children);};
G__59508.cljs$lang$maxFixedArity = 1;
G__59508.cljs$lang$applyTo = (function (arglist__59510){
var props = cljs.core.first(arglist__59510);
var children = cljs.core.rest(arglist__59510);
return G__59508__delegate(props,children);
});
G__59508.cljs$core$IFn$_invoke$arity$variadic = G__59508__delegate;
return G__59508;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__58084 = tag;
switch (G__58084) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58084)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__58087 = arguments.length;
switch (G__58087) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__58091 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__58092 = cljs.core.seq(vec__58091);
var first__58093 = cljs.core.first(seq__58092);
var seq__58092__$1 = cljs.core.next(seq__58092);
var head = first__58093;
var tail = seq__58092__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null, type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__58094 = (function (){var G__58095 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58095,tail);

return G__58095;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58094) : f.call(null, G__58094));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__58096 = (function (){var G__58097 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58097,args);

return G__58097;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58096) : f.call(null, G__58096));
} else {
if(cljs.core.object_QMARK_(head)){
var G__58098 = (function (){var G__58099 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58099,tail);

return G__58099;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58098) : f.call(null, G__58098));
} else {
if(cljs.core.map_QMARK_(head)){
var G__58100 = (function (){var G__58101 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__58101,tail);

return G__58101;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58100) : f.call(null, G__58100));
} else {
var G__58102 = (function (){var G__58103 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58103,args);

return G__58103;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58102) : f.call(null, G__58102));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__58105 = arguments.length;
switch (G__58105) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__58108 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__58109 = cljs.core.seq(vec__58108);
var first__58110 = cljs.core.first(seq__58109);
var seq__58109__$1 = cljs.core.next(seq__58109);
var head = first__58110;
var tail = seq__58109__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58111 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58111,tail);

return G__58111;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58112 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58112,args);

return G__58112;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58113 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58113,tail);

return G__58113;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58114 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__58114,tail);

return G__58114;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58115 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58115,args);

return G__58115;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59514 = arguments.length;
var i__5770__auto___59515 = (0);
while(true){
if((i__5770__auto___59515 < len__5769__auto___59514)){
args__5775__auto__.push((arguments[i__5770__auto___59515]));

var G__59516 = (i__5770__auto___59515 + (1));
i__5770__auto___59515 = G__59516;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58124 = conformed_args__56602__auto__;
var map__58124__$1 = cljs.core.__destructure_map(map__58124);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58124__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq58121){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58121));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59517 = arguments.length;
var i__5770__auto___59518 = (0);
while(true){
if((i__5770__auto___59518 < len__5769__auto___59517)){
args__5775__auto__.push((arguments[i__5770__auto___59518]));

var G__59519 = (i__5770__auto___59518 + (1));
i__5770__auto___59518 = G__59519;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58129 = conformed_args__56602__auto__;
var map__58129__$1 = cljs.core.__destructure_map(map__58129);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58129__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58129__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58129__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq58127){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58127));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59520 = arguments.length;
var i__5770__auto___59521 = (0);
while(true){
if((i__5770__auto___59521 < len__5769__auto___59520)){
args__5775__auto__.push((arguments[i__5770__auto___59521]));

var G__59522 = (i__5770__auto___59521 + (1));
i__5770__auto___59521 = G__59522;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58131 = conformed_args__56602__auto__;
var map__58131__$1 = cljs.core.__destructure_map(map__58131);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58131__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58131__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58131__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq58130){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58130));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59523 = arguments.length;
var i__5770__auto___59524 = (0);
while(true){
if((i__5770__auto___59524 < len__5769__auto___59523)){
args__5775__auto__.push((arguments[i__5770__auto___59524]));

var G__59525 = (i__5770__auto___59524 + (1));
i__5770__auto___59524 = G__59525;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58133 = conformed_args__56602__auto__;
var map__58133__$1 = cljs.core.__destructure_map(map__58133);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq58132){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58132));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59526 = arguments.length;
var i__5770__auto___59527 = (0);
while(true){
if((i__5770__auto___59527 < len__5769__auto___59526)){
args__5775__auto__.push((arguments[i__5770__auto___59527]));

var G__59528 = (i__5770__auto___59527 + (1));
i__5770__auto___59527 = G__59528;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58136 = conformed_args__56602__auto__;
var map__58136__$1 = cljs.core.__destructure_map(map__58136);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58136__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58136__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58136__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq58134){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58134));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59529 = arguments.length;
var i__5770__auto___59530 = (0);
while(true){
if((i__5770__auto___59530 < len__5769__auto___59529)){
args__5775__auto__.push((arguments[i__5770__auto___59530]));

var G__59531 = (i__5770__auto___59530 + (1));
i__5770__auto___59530 = G__59531;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58144 = conformed_args__56602__auto__;
var map__58144__$1 = cljs.core.__destructure_map(map__58144);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58144__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58144__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58144__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq58142){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58142));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59534 = arguments.length;
var i__5770__auto___59535 = (0);
while(true){
if((i__5770__auto___59535 < len__5769__auto___59534)){
args__5775__auto__.push((arguments[i__5770__auto___59535]));

var G__59536 = (i__5770__auto___59535 + (1));
i__5770__auto___59535 = G__59536;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58161 = conformed_args__56602__auto__;
var map__58161__$1 = cljs.core.__destructure_map(map__58161);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq58159){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58159));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59538 = arguments.length;
var i__5770__auto___59539 = (0);
while(true){
if((i__5770__auto___59539 < len__5769__auto___59538)){
args__5775__auto__.push((arguments[i__5770__auto___59539]));

var G__59540 = (i__5770__auto___59539 + (1));
i__5770__auto___59539 = G__59540;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58164 = conformed_args__56602__auto__;
var map__58164__$1 = cljs.core.__destructure_map(map__58164);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq58162){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58162));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59543 = arguments.length;
var i__5770__auto___59544 = (0);
while(true){
if((i__5770__auto___59544 < len__5769__auto___59543)){
args__5775__auto__.push((arguments[i__5770__auto___59544]));

var G__59545 = (i__5770__auto___59544 + (1));
i__5770__auto___59544 = G__59545;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58172 = conformed_args__56602__auto__;
var map__58172__$1 = cljs.core.__destructure_map(map__58172);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq58169){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58169));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59546 = arguments.length;
var i__5770__auto___59547 = (0);
while(true){
if((i__5770__auto___59547 < len__5769__auto___59546)){
args__5775__auto__.push((arguments[i__5770__auto___59547]));

var G__59548 = (i__5770__auto___59547 + (1));
i__5770__auto___59547 = G__59548;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58179 = conformed_args__56602__auto__;
var map__58179__$1 = cljs.core.__destructure_map(map__58179);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58179__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq58175){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58175));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59549 = arguments.length;
var i__5770__auto___59550 = (0);
while(true){
if((i__5770__auto___59550 < len__5769__auto___59549)){
args__5775__auto__.push((arguments[i__5770__auto___59550]));

var G__59551 = (i__5770__auto___59550 + (1));
i__5770__auto___59550 = G__59551;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58191 = conformed_args__56602__auto__;
var map__58191__$1 = cljs.core.__destructure_map(map__58191);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq58182){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58182));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59552 = arguments.length;
var i__5770__auto___59553 = (0);
while(true){
if((i__5770__auto___59553 < len__5769__auto___59552)){
args__5775__auto__.push((arguments[i__5770__auto___59553]));

var G__59554 = (i__5770__auto___59553 + (1));
i__5770__auto___59553 = G__59554;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58193 = conformed_args__56602__auto__;
var map__58193__$1 = cljs.core.__destructure_map(map__58193);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq58192){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58192));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59555 = arguments.length;
var i__5770__auto___59556 = (0);
while(true){
if((i__5770__auto___59556 < len__5769__auto___59555)){
args__5775__auto__.push((arguments[i__5770__auto___59556]));

var G__59557 = (i__5770__auto___59556 + (1));
i__5770__auto___59556 = G__59557;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58198 = conformed_args__56602__auto__;
var map__58198__$1 = cljs.core.__destructure_map(map__58198);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq58196){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58196));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59558 = arguments.length;
var i__5770__auto___59559 = (0);
while(true){
if((i__5770__auto___59559 < len__5769__auto___59558)){
args__5775__auto__.push((arguments[i__5770__auto___59559]));

var G__59560 = (i__5770__auto___59559 + (1));
i__5770__auto___59559 = G__59560;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58200 = conformed_args__56602__auto__;
var map__58200__$1 = cljs.core.__destructure_map(map__58200);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58200__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq58199){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58199));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59561 = arguments.length;
var i__5770__auto___59562 = (0);
while(true){
if((i__5770__auto___59562 < len__5769__auto___59561)){
args__5775__auto__.push((arguments[i__5770__auto___59562]));

var G__59563 = (i__5770__auto___59562 + (1));
i__5770__auto___59562 = G__59563;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58203 = conformed_args__56602__auto__;
var map__58203__$1 = cljs.core.__destructure_map(map__58203);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58203__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58203__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq58202){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58202));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59564 = arguments.length;
var i__5770__auto___59565 = (0);
while(true){
if((i__5770__auto___59565 < len__5769__auto___59564)){
args__5775__auto__.push((arguments[i__5770__auto___59565]));

var G__59566 = (i__5770__auto___59565 + (1));
i__5770__auto___59565 = G__59566;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58206 = conformed_args__56602__auto__;
var map__58206__$1 = cljs.core.__destructure_map(map__58206);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq58205){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58205));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59567 = arguments.length;
var i__5770__auto___59568 = (0);
while(true){
if((i__5770__auto___59568 < len__5769__auto___59567)){
args__5775__auto__.push((arguments[i__5770__auto___59568]));

var G__59569 = (i__5770__auto___59568 + (1));
i__5770__auto___59568 = G__59569;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58208 = conformed_args__56602__auto__;
var map__58208__$1 = cljs.core.__destructure_map(map__58208);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58208__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq58207){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58207));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59570 = arguments.length;
var i__5770__auto___59571 = (0);
while(true){
if((i__5770__auto___59571 < len__5769__auto___59570)){
args__5775__auto__.push((arguments[i__5770__auto___59571]));

var G__59572 = (i__5770__auto___59571 + (1));
i__5770__auto___59571 = G__59572;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58210 = conformed_args__56602__auto__;
var map__58210__$1 = cljs.core.__destructure_map(map__58210);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq58209){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58209));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59573 = arguments.length;
var i__5770__auto___59574 = (0);
while(true){
if((i__5770__auto___59574 < len__5769__auto___59573)){
args__5775__auto__.push((arguments[i__5770__auto___59574]));

var G__59575 = (i__5770__auto___59574 + (1));
i__5770__auto___59574 = G__59575;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58212 = conformed_args__56602__auto__;
var map__58212__$1 = cljs.core.__destructure_map(map__58212);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58212__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq58211){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58211));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59576 = arguments.length;
var i__5770__auto___59577 = (0);
while(true){
if((i__5770__auto___59577 < len__5769__auto___59576)){
args__5775__auto__.push((arguments[i__5770__auto___59577]));

var G__59578 = (i__5770__auto___59577 + (1));
i__5770__auto___59577 = G__59578;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58215 = conformed_args__56602__auto__;
var map__58215__$1 = cljs.core.__destructure_map(map__58215);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq58213){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58213));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59579 = arguments.length;
var i__5770__auto___59580 = (0);
while(true){
if((i__5770__auto___59580 < len__5769__auto___59579)){
args__5775__auto__.push((arguments[i__5770__auto___59580]));

var G__59581 = (i__5770__auto___59580 + (1));
i__5770__auto___59580 = G__59581;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58219 = conformed_args__56602__auto__;
var map__58219__$1 = cljs.core.__destructure_map(map__58219);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq58216){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58216));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59582 = arguments.length;
var i__5770__auto___59583 = (0);
while(true){
if((i__5770__auto___59583 < len__5769__auto___59582)){
args__5775__auto__.push((arguments[i__5770__auto___59583]));

var G__59584 = (i__5770__auto___59583 + (1));
i__5770__auto___59583 = G__59584;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58221 = conformed_args__56602__auto__;
var map__58221__$1 = cljs.core.__destructure_map(map__58221);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58221__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58221__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58221__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq58220){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58220));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59585 = arguments.length;
var i__5770__auto___59586 = (0);
while(true){
if((i__5770__auto___59586 < len__5769__auto___59585)){
args__5775__auto__.push((arguments[i__5770__auto___59586]));

var G__59587 = (i__5770__auto___59586 + (1));
i__5770__auto___59586 = G__59587;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58223 = conformed_args__56602__auto__;
var map__58223__$1 = cljs.core.__destructure_map(map__58223);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58223__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq58222){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58222));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59588 = arguments.length;
var i__5770__auto___59589 = (0);
while(true){
if((i__5770__auto___59589 < len__5769__auto___59588)){
args__5775__auto__.push((arguments[i__5770__auto___59589]));

var G__59590 = (i__5770__auto___59589 + (1));
i__5770__auto___59589 = G__59590;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58230 = conformed_args__56602__auto__;
var map__58230__$1 = cljs.core.__destructure_map(map__58230);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq58225){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58225));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59592 = arguments.length;
var i__5770__auto___59593 = (0);
while(true){
if((i__5770__auto___59593 < len__5769__auto___59592)){
args__5775__auto__.push((arguments[i__5770__auto___59593]));

var G__59594 = (i__5770__auto___59593 + (1));
i__5770__auto___59593 = G__59594;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58232 = conformed_args__56602__auto__;
var map__58232__$1 = cljs.core.__destructure_map(map__58232);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq58231){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58231));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59595 = arguments.length;
var i__5770__auto___59596 = (0);
while(true){
if((i__5770__auto___59596 < len__5769__auto___59595)){
args__5775__auto__.push((arguments[i__5770__auto___59596]));

var G__59597 = (i__5770__auto___59596 + (1));
i__5770__auto___59596 = G__59597;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58237 = conformed_args__56602__auto__;
var map__58237__$1 = cljs.core.__destructure_map(map__58237);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58237__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58237__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58237__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq58233){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58233));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59599 = arguments.length;
var i__5770__auto___59600 = (0);
while(true){
if((i__5770__auto___59600 < len__5769__auto___59599)){
args__5775__auto__.push((arguments[i__5770__auto___59600]));

var G__59601 = (i__5770__auto___59600 + (1));
i__5770__auto___59600 = G__59601;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58249 = conformed_args__56602__auto__;
var map__58249__$1 = cljs.core.__destructure_map(map__58249);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58249__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58249__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58249__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq58248){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58248));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59606 = arguments.length;
var i__5770__auto___59607 = (0);
while(true){
if((i__5770__auto___59607 < len__5769__auto___59606)){
args__5775__auto__.push((arguments[i__5770__auto___59607]));

var G__59608 = (i__5770__auto___59607 + (1));
i__5770__auto___59607 = G__59608;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58284 = conformed_args__56602__auto__;
var map__58284__$1 = cljs.core.__destructure_map(map__58284);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq58276){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58276));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59611 = arguments.length;
var i__5770__auto___59612 = (0);
while(true){
if((i__5770__auto___59612 < len__5769__auto___59611)){
args__5775__auto__.push((arguments[i__5770__auto___59612]));

var G__59613 = (i__5770__auto___59612 + (1));
i__5770__auto___59612 = G__59613;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58290 = conformed_args__56602__auto__;
var map__58290__$1 = cljs.core.__destructure_map(map__58290);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq58285){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58285));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59614 = arguments.length;
var i__5770__auto___59615 = (0);
while(true){
if((i__5770__auto___59615 < len__5769__auto___59614)){
args__5775__auto__.push((arguments[i__5770__auto___59615]));

var G__59616 = (i__5770__auto___59615 + (1));
i__5770__auto___59615 = G__59616;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58293 = conformed_args__56602__auto__;
var map__58293__$1 = cljs.core.__destructure_map(map__58293);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq58291){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58291));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59617 = arguments.length;
var i__5770__auto___59618 = (0);
while(true){
if((i__5770__auto___59618 < len__5769__auto___59617)){
args__5775__auto__.push((arguments[i__5770__auto___59618]));

var G__59619 = (i__5770__auto___59618 + (1));
i__5770__auto___59618 = G__59619;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58299 = conformed_args__56602__auto__;
var map__58299__$1 = cljs.core.__destructure_map(map__58299);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq58298){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58298));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59620 = arguments.length;
var i__5770__auto___59621 = (0);
while(true){
if((i__5770__auto___59621 < len__5769__auto___59620)){
args__5775__auto__.push((arguments[i__5770__auto___59621]));

var G__59622 = (i__5770__auto___59621 + (1));
i__5770__auto___59621 = G__59622;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58305 = conformed_args__56602__auto__;
var map__58305__$1 = cljs.core.__destructure_map(map__58305);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq58304){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58304));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59624 = arguments.length;
var i__5770__auto___59625 = (0);
while(true){
if((i__5770__auto___59625 < len__5769__auto___59624)){
args__5775__auto__.push((arguments[i__5770__auto___59625]));

var G__59626 = (i__5770__auto___59625 + (1));
i__5770__auto___59625 = G__59626;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58309 = conformed_args__56602__auto__;
var map__58309__$1 = cljs.core.__destructure_map(map__58309);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq58306){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58306));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59627 = arguments.length;
var i__5770__auto___59628 = (0);
while(true){
if((i__5770__auto___59628 < len__5769__auto___59627)){
args__5775__auto__.push((arguments[i__5770__auto___59628]));

var G__59629 = (i__5770__auto___59628 + (1));
i__5770__auto___59628 = G__59629;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58314 = conformed_args__56602__auto__;
var map__58314__$1 = cljs.core.__destructure_map(map__58314);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58314__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58314__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58314__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq58313){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58313));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59631 = arguments.length;
var i__5770__auto___59632 = (0);
while(true){
if((i__5770__auto___59632 < len__5769__auto___59631)){
args__5775__auto__.push((arguments[i__5770__auto___59632]));

var G__59633 = (i__5770__auto___59632 + (1));
i__5770__auto___59632 = G__59633;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58316 = conformed_args__56602__auto__;
var map__58316__$1 = cljs.core.__destructure_map(map__58316);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq58315){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58315));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59634 = arguments.length;
var i__5770__auto___59635 = (0);
while(true){
if((i__5770__auto___59635 < len__5769__auto___59634)){
args__5775__auto__.push((arguments[i__5770__auto___59635]));

var G__59638 = (i__5770__auto___59635 + (1));
i__5770__auto___59635 = G__59638;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58330 = conformed_args__56602__auto__;
var map__58330__$1 = cljs.core.__destructure_map(map__58330);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58330__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58330__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58330__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq58325){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58325));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59639 = arguments.length;
var i__5770__auto___59640 = (0);
while(true){
if((i__5770__auto___59640 < len__5769__auto___59639)){
args__5775__auto__.push((arguments[i__5770__auto___59640]));

var G__59641 = (i__5770__auto___59640 + (1));
i__5770__auto___59640 = G__59641;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58382 = conformed_args__56602__auto__;
var map__58382__$1 = cljs.core.__destructure_map(map__58382);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58382__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58382__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58382__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq58358){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58358));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59642 = arguments.length;
var i__5770__auto___59643 = (0);
while(true){
if((i__5770__auto___59643 < len__5769__auto___59642)){
args__5775__auto__.push((arguments[i__5770__auto___59643]));

var G__59644 = (i__5770__auto___59643 + (1));
i__5770__auto___59643 = G__59644;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58399 = conformed_args__56602__auto__;
var map__58399__$1 = cljs.core.__destructure_map(map__58399);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58399__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58399__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58399__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq58393){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58393));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59645 = arguments.length;
var i__5770__auto___59646 = (0);
while(true){
if((i__5770__auto___59646 < len__5769__auto___59645)){
args__5775__auto__.push((arguments[i__5770__auto___59646]));

var G__59647 = (i__5770__auto___59646 + (1));
i__5770__auto___59646 = G__59647;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58437 = conformed_args__56602__auto__;
var map__58437__$1 = cljs.core.__destructure_map(map__58437);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq58422){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58422));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59648 = arguments.length;
var i__5770__auto___59649 = (0);
while(true){
if((i__5770__auto___59649 < len__5769__auto___59648)){
args__5775__auto__.push((arguments[i__5770__auto___59649]));

var G__59650 = (i__5770__auto___59649 + (1));
i__5770__auto___59649 = G__59650;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58473 = conformed_args__56602__auto__;
var map__58473__$1 = cljs.core.__destructure_map(map__58473);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq58461){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58461));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59651 = arguments.length;
var i__5770__auto___59652 = (0);
while(true){
if((i__5770__auto___59652 < len__5769__auto___59651)){
args__5775__auto__.push((arguments[i__5770__auto___59652]));

var G__59653 = (i__5770__auto___59652 + (1));
i__5770__auto___59652 = G__59653;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58475 = conformed_args__56602__auto__;
var map__58475__$1 = cljs.core.__destructure_map(map__58475);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq58474){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58474));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59654 = arguments.length;
var i__5770__auto___59655 = (0);
while(true){
if((i__5770__auto___59655 < len__5769__auto___59654)){
args__5775__auto__.push((arguments[i__5770__auto___59655]));

var G__59656 = (i__5770__auto___59655 + (1));
i__5770__auto___59655 = G__59656;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58477 = conformed_args__56602__auto__;
var map__58477__$1 = cljs.core.__destructure_map(map__58477);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq58476){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58476));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59657 = arguments.length;
var i__5770__auto___59658 = (0);
while(true){
if((i__5770__auto___59658 < len__5769__auto___59657)){
args__5775__auto__.push((arguments[i__5770__auto___59658]));

var G__59659 = (i__5770__auto___59658 + (1));
i__5770__auto___59658 = G__59659;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58484 = conformed_args__56602__auto__;
var map__58484__$1 = cljs.core.__destructure_map(map__58484);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq58480){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58480));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59660 = arguments.length;
var i__5770__auto___59661 = (0);
while(true){
if((i__5770__auto___59661 < len__5769__auto___59660)){
args__5775__auto__.push((arguments[i__5770__auto___59661]));

var G__59662 = (i__5770__auto___59661 + (1));
i__5770__auto___59661 = G__59662;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58487 = conformed_args__56602__auto__;
var map__58487__$1 = cljs.core.__destructure_map(map__58487);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58487__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq58486){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58486));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59663 = arguments.length;
var i__5770__auto___59664 = (0);
while(true){
if((i__5770__auto___59664 < len__5769__auto___59663)){
args__5775__auto__.push((arguments[i__5770__auto___59664]));

var G__59665 = (i__5770__auto___59664 + (1));
i__5770__auto___59664 = G__59665;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58491 = conformed_args__56602__auto__;
var map__58491__$1 = cljs.core.__destructure_map(map__58491);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58491__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58491__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58491__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq58488){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58488));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59666 = arguments.length;
var i__5770__auto___59667 = (0);
while(true){
if((i__5770__auto___59667 < len__5769__auto___59666)){
args__5775__auto__.push((arguments[i__5770__auto___59667]));

var G__59668 = (i__5770__auto___59667 + (1));
i__5770__auto___59667 = G__59668;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58499 = conformed_args__56602__auto__;
var map__58499__$1 = cljs.core.__destructure_map(map__58499);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58499__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58499__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq58496){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58496));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59669 = arguments.length;
var i__5770__auto___59670 = (0);
while(true){
if((i__5770__auto___59670 < len__5769__auto___59669)){
args__5775__auto__.push((arguments[i__5770__auto___59670]));

var G__59671 = (i__5770__auto___59670 + (1));
i__5770__auto___59670 = G__59671;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58505 = conformed_args__56602__auto__;
var map__58505__$1 = cljs.core.__destructure_map(map__58505);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58505__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58505__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58505__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq58503){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58503));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59672 = arguments.length;
var i__5770__auto___59673 = (0);
while(true){
if((i__5770__auto___59673 < len__5769__auto___59672)){
args__5775__auto__.push((arguments[i__5770__auto___59673]));

var G__59674 = (i__5770__auto___59673 + (1));
i__5770__auto___59673 = G__59674;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58516 = conformed_args__56602__auto__;
var map__58516__$1 = cljs.core.__destructure_map(map__58516);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq58510){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58510));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59675 = arguments.length;
var i__5770__auto___59676 = (0);
while(true){
if((i__5770__auto___59676 < len__5769__auto___59675)){
args__5775__auto__.push((arguments[i__5770__auto___59676]));

var G__59677 = (i__5770__auto___59676 + (1));
i__5770__auto___59676 = G__59677;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58522 = conformed_args__56602__auto__;
var map__58522__$1 = cljs.core.__destructure_map(map__58522);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq58520){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58520));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59678 = arguments.length;
var i__5770__auto___59679 = (0);
while(true){
if((i__5770__auto___59679 < len__5769__auto___59678)){
args__5775__auto__.push((arguments[i__5770__auto___59679]));

var G__59680 = (i__5770__auto___59679 + (1));
i__5770__auto___59679 = G__59680;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58529 = conformed_args__56602__auto__;
var map__58529__$1 = cljs.core.__destructure_map(map__58529);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq58525){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58525));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59681 = arguments.length;
var i__5770__auto___59682 = (0);
while(true){
if((i__5770__auto___59682 < len__5769__auto___59681)){
args__5775__auto__.push((arguments[i__5770__auto___59682]));

var G__59683 = (i__5770__auto___59682 + (1));
i__5770__auto___59682 = G__59683;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58536 = conformed_args__56602__auto__;
var map__58536__$1 = cljs.core.__destructure_map(map__58536);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq58531){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58531));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59684 = arguments.length;
var i__5770__auto___59685 = (0);
while(true){
if((i__5770__auto___59685 < len__5769__auto___59684)){
args__5775__auto__.push((arguments[i__5770__auto___59685]));

var G__59686 = (i__5770__auto___59685 + (1));
i__5770__auto___59685 = G__59686;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58540 = conformed_args__56602__auto__;
var map__58540__$1 = cljs.core.__destructure_map(map__58540);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58540__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58540__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58540__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq58538){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58538));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59687 = arguments.length;
var i__5770__auto___59688 = (0);
while(true){
if((i__5770__auto___59688 < len__5769__auto___59687)){
args__5775__auto__.push((arguments[i__5770__auto___59688]));

var G__59689 = (i__5770__auto___59688 + (1));
i__5770__auto___59688 = G__59689;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58550 = conformed_args__56602__auto__;
var map__58550__$1 = cljs.core.__destructure_map(map__58550);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58550__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58550__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58550__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq58544){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58544));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59690 = arguments.length;
var i__5770__auto___59691 = (0);
while(true){
if((i__5770__auto___59691 < len__5769__auto___59690)){
args__5775__auto__.push((arguments[i__5770__auto___59691]));

var G__59692 = (i__5770__auto___59691 + (1));
i__5770__auto___59691 = G__59692;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58552 = conformed_args__56602__auto__;
var map__58552__$1 = cljs.core.__destructure_map(map__58552);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58552__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58552__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58552__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq58551){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58551));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59693 = arguments.length;
var i__5770__auto___59694 = (0);
while(true){
if((i__5770__auto___59694 < len__5769__auto___59693)){
args__5775__auto__.push((arguments[i__5770__auto___59694]));

var G__59695 = (i__5770__auto___59694 + (1));
i__5770__auto___59694 = G__59695;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58554 = conformed_args__56602__auto__;
var map__58554__$1 = cljs.core.__destructure_map(map__58554);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58554__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58554__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58554__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq58553){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58553));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59696 = arguments.length;
var i__5770__auto___59697 = (0);
while(true){
if((i__5770__auto___59697 < len__5769__auto___59696)){
args__5775__auto__.push((arguments[i__5770__auto___59697]));

var G__59698 = (i__5770__auto___59697 + (1));
i__5770__auto___59697 = G__59698;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58556 = conformed_args__56602__auto__;
var map__58556__$1 = cljs.core.__destructure_map(map__58556);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq58555){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58555));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59699 = arguments.length;
var i__5770__auto___59700 = (0);
while(true){
if((i__5770__auto___59700 < len__5769__auto___59699)){
args__5775__auto__.push((arguments[i__5770__auto___59700]));

var G__59701 = (i__5770__auto___59700 + (1));
i__5770__auto___59700 = G__59701;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58558 = conformed_args__56602__auto__;
var map__58558__$1 = cljs.core.__destructure_map(map__58558);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq58557){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58557));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59702 = arguments.length;
var i__5770__auto___59703 = (0);
while(true){
if((i__5770__auto___59703 < len__5769__auto___59702)){
args__5775__auto__.push((arguments[i__5770__auto___59703]));

var G__59704 = (i__5770__auto___59703 + (1));
i__5770__auto___59703 = G__59704;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58560 = conformed_args__56602__auto__;
var map__58560__$1 = cljs.core.__destructure_map(map__58560);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58560__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58560__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58560__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq58559){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58559));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59705 = arguments.length;
var i__5770__auto___59706 = (0);
while(true){
if((i__5770__auto___59706 < len__5769__auto___59705)){
args__5775__auto__.push((arguments[i__5770__auto___59706]));

var G__59707 = (i__5770__auto___59706 + (1));
i__5770__auto___59706 = G__59707;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58564 = conformed_args__56602__auto__;
var map__58564__$1 = cljs.core.__destructure_map(map__58564);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq58563){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58563));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59708 = arguments.length;
var i__5770__auto___59709 = (0);
while(true){
if((i__5770__auto___59709 < len__5769__auto___59708)){
args__5775__auto__.push((arguments[i__5770__auto___59709]));

var G__59710 = (i__5770__auto___59709 + (1));
i__5770__auto___59709 = G__59710;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58586 = conformed_args__56602__auto__;
var map__58586__$1 = cljs.core.__destructure_map(map__58586);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq58583){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58583));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59711 = arguments.length;
var i__5770__auto___59712 = (0);
while(true){
if((i__5770__auto___59712 < len__5769__auto___59711)){
args__5775__auto__.push((arguments[i__5770__auto___59712]));

var G__59713 = (i__5770__auto___59712 + (1));
i__5770__auto___59712 = G__59713;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58588 = conformed_args__56602__auto__;
var map__58588__$1 = cljs.core.__destructure_map(map__58588);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq58587){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58587));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59714 = arguments.length;
var i__5770__auto___59715 = (0);
while(true){
if((i__5770__auto___59715 < len__5769__auto___59714)){
args__5775__auto__.push((arguments[i__5770__auto___59715]));

var G__59716 = (i__5770__auto___59715 + (1));
i__5770__auto___59715 = G__59716;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58596 = conformed_args__56602__auto__;
var map__58596__$1 = cljs.core.__destructure_map(map__58596);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq58591){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58591));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59717 = arguments.length;
var i__5770__auto___59718 = (0);
while(true){
if((i__5770__auto___59718 < len__5769__auto___59717)){
args__5775__auto__.push((arguments[i__5770__auto___59718]));

var G__59719 = (i__5770__auto___59718 + (1));
i__5770__auto___59718 = G__59719;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58600 = conformed_args__56602__auto__;
var map__58600__$1 = cljs.core.__destructure_map(map__58600);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq58599){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58599));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59720 = arguments.length;
var i__5770__auto___59721 = (0);
while(true){
if((i__5770__auto___59721 < len__5769__auto___59720)){
args__5775__auto__.push((arguments[i__5770__auto___59721]));

var G__59722 = (i__5770__auto___59721 + (1));
i__5770__auto___59721 = G__59722;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58606 = conformed_args__56602__auto__;
var map__58606__$1 = cljs.core.__destructure_map(map__58606);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58606__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58606__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq58605){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58605));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59723 = arguments.length;
var i__5770__auto___59724 = (0);
while(true){
if((i__5770__auto___59724 < len__5769__auto___59723)){
args__5775__auto__.push((arguments[i__5770__auto___59724]));

var G__59725 = (i__5770__auto___59724 + (1));
i__5770__auto___59724 = G__59725;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58611 = conformed_args__56602__auto__;
var map__58611__$1 = cljs.core.__destructure_map(map__58611);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58611__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58611__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58611__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq58609){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58609));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59726 = arguments.length;
var i__5770__auto___59727 = (0);
while(true){
if((i__5770__auto___59727 < len__5769__auto___59726)){
args__5775__auto__.push((arguments[i__5770__auto___59727]));

var G__59728 = (i__5770__auto___59727 + (1));
i__5770__auto___59727 = G__59728;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58614 = conformed_args__56602__auto__;
var map__58614__$1 = cljs.core.__destructure_map(map__58614);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq58613){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58613));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59729 = arguments.length;
var i__5770__auto___59730 = (0);
while(true){
if((i__5770__auto___59730 < len__5769__auto___59729)){
args__5775__auto__.push((arguments[i__5770__auto___59730]));

var G__59731 = (i__5770__auto___59730 + (1));
i__5770__auto___59730 = G__59731;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58618 = conformed_args__56602__auto__;
var map__58618__$1 = cljs.core.__destructure_map(map__58618);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq58616){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58616));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59732 = arguments.length;
var i__5770__auto___59733 = (0);
while(true){
if((i__5770__auto___59733 < len__5769__auto___59732)){
args__5775__auto__.push((arguments[i__5770__auto___59733]));

var G__59734 = (i__5770__auto___59733 + (1));
i__5770__auto___59733 = G__59734;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58623 = conformed_args__56602__auto__;
var map__58623__$1 = cljs.core.__destructure_map(map__58623);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq58622){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58622));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59735 = arguments.length;
var i__5770__auto___59736 = (0);
while(true){
if((i__5770__auto___59736 < len__5769__auto___59735)){
args__5775__auto__.push((arguments[i__5770__auto___59736]));

var G__59737 = (i__5770__auto___59736 + (1));
i__5770__auto___59736 = G__59737;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58634 = conformed_args__56602__auto__;
var map__58634__$1 = cljs.core.__destructure_map(map__58634);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq58626){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58626));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59738 = arguments.length;
var i__5770__auto___59739 = (0);
while(true){
if((i__5770__auto___59739 < len__5769__auto___59738)){
args__5775__auto__.push((arguments[i__5770__auto___59739]));

var G__59740 = (i__5770__auto___59739 + (1));
i__5770__auto___59739 = G__59740;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58637 = conformed_args__56602__auto__;
var map__58637__$1 = cljs.core.__destructure_map(map__58637);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq58636){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58636));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59741 = arguments.length;
var i__5770__auto___59742 = (0);
while(true){
if((i__5770__auto___59742 < len__5769__auto___59741)){
args__5775__auto__.push((arguments[i__5770__auto___59742]));

var G__59743 = (i__5770__auto___59742 + (1));
i__5770__auto___59742 = G__59743;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58641 = conformed_args__56602__auto__;
var map__58641__$1 = cljs.core.__destructure_map(map__58641);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq58640){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58640));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59744 = arguments.length;
var i__5770__auto___59745 = (0);
while(true){
if((i__5770__auto___59745 < len__5769__auto___59744)){
args__5775__auto__.push((arguments[i__5770__auto___59745]));

var G__59746 = (i__5770__auto___59745 + (1));
i__5770__auto___59745 = G__59746;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58657 = conformed_args__56602__auto__;
var map__58657__$1 = cljs.core.__destructure_map(map__58657);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq58648){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58648));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59747 = arguments.length;
var i__5770__auto___59748 = (0);
while(true){
if((i__5770__auto___59748 < len__5769__auto___59747)){
args__5775__auto__.push((arguments[i__5770__auto___59748]));

var G__59749 = (i__5770__auto___59748 + (1));
i__5770__auto___59748 = G__59749;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58659 = conformed_args__56602__auto__;
var map__58659__$1 = cljs.core.__destructure_map(map__58659);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq58658){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58658));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59750 = arguments.length;
var i__5770__auto___59751 = (0);
while(true){
if((i__5770__auto___59751 < len__5769__auto___59750)){
args__5775__auto__.push((arguments[i__5770__auto___59751]));

var G__59752 = (i__5770__auto___59751 + (1));
i__5770__auto___59751 = G__59752;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58665 = conformed_args__56602__auto__;
var map__58665__$1 = cljs.core.__destructure_map(map__58665);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq58662){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58662));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59753 = arguments.length;
var i__5770__auto___59754 = (0);
while(true){
if((i__5770__auto___59754 < len__5769__auto___59753)){
args__5775__auto__.push((arguments[i__5770__auto___59754]));

var G__59755 = (i__5770__auto___59754 + (1));
i__5770__auto___59754 = G__59755;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58673 = conformed_args__56602__auto__;
var map__58673__$1 = cljs.core.__destructure_map(map__58673);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58673__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58673__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58673__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq58666){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58666));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59756 = arguments.length;
var i__5770__auto___59757 = (0);
while(true){
if((i__5770__auto___59757 < len__5769__auto___59756)){
args__5775__auto__.push((arguments[i__5770__auto___59757]));

var G__59758 = (i__5770__auto___59757 + (1));
i__5770__auto___59757 = G__59758;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58683 = conformed_args__56602__auto__;
var map__58683__$1 = cljs.core.__destructure_map(map__58683);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq58680){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58680));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59759 = arguments.length;
var i__5770__auto___59760 = (0);
while(true){
if((i__5770__auto___59760 < len__5769__auto___59759)){
args__5775__auto__.push((arguments[i__5770__auto___59760]));

var G__59761 = (i__5770__auto___59760 + (1));
i__5770__auto___59760 = G__59761;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58691 = conformed_args__56602__auto__;
var map__58691__$1 = cljs.core.__destructure_map(map__58691);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58691__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq58686){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58686));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59762 = arguments.length;
var i__5770__auto___59763 = (0);
while(true){
if((i__5770__auto___59763 < len__5769__auto___59762)){
args__5775__auto__.push((arguments[i__5770__auto___59763]));

var G__59764 = (i__5770__auto___59763 + (1));
i__5770__auto___59763 = G__59764;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58703 = conformed_args__56602__auto__;
var map__58703__$1 = cljs.core.__destructure_map(map__58703);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq58696){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58696));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59765 = arguments.length;
var i__5770__auto___59766 = (0);
while(true){
if((i__5770__auto___59766 < len__5769__auto___59765)){
args__5775__auto__.push((arguments[i__5770__auto___59766]));

var G__59767 = (i__5770__auto___59766 + (1));
i__5770__auto___59766 = G__59767;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58714 = conformed_args__56602__auto__;
var map__58714__$1 = cljs.core.__destructure_map(map__58714);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq58712){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58712));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59768 = arguments.length;
var i__5770__auto___59769 = (0);
while(true){
if((i__5770__auto___59769 < len__5769__auto___59768)){
args__5775__auto__.push((arguments[i__5770__auto___59769]));

var G__59770 = (i__5770__auto___59769 + (1));
i__5770__auto___59769 = G__59770;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58724 = conformed_args__56602__auto__;
var map__58724__$1 = cljs.core.__destructure_map(map__58724);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq58717){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58717));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59771 = arguments.length;
var i__5770__auto___59772 = (0);
while(true){
if((i__5770__auto___59772 < len__5769__auto___59771)){
args__5775__auto__.push((arguments[i__5770__auto___59772]));

var G__59773 = (i__5770__auto___59772 + (1));
i__5770__auto___59772 = G__59773;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58726 = conformed_args__56602__auto__;
var map__58726__$1 = cljs.core.__destructure_map(map__58726);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq58725){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58725));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59774 = arguments.length;
var i__5770__auto___59775 = (0);
while(true){
if((i__5770__auto___59775 < len__5769__auto___59774)){
args__5775__auto__.push((arguments[i__5770__auto___59775]));

var G__59776 = (i__5770__auto___59775 + (1));
i__5770__auto___59775 = G__59776;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58736 = conformed_args__56602__auto__;
var map__58736__$1 = cljs.core.__destructure_map(map__58736);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq58732){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58732));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59777 = arguments.length;
var i__5770__auto___59778 = (0);
while(true){
if((i__5770__auto___59778 < len__5769__auto___59777)){
args__5775__auto__.push((arguments[i__5770__auto___59778]));

var G__59779 = (i__5770__auto___59778 + (1));
i__5770__auto___59778 = G__59779;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58738 = conformed_args__56602__auto__;
var map__58738__$1 = cljs.core.__destructure_map(map__58738);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq58737){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58737));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59780 = arguments.length;
var i__5770__auto___59781 = (0);
while(true){
if((i__5770__auto___59781 < len__5769__auto___59780)){
args__5775__auto__.push((arguments[i__5770__auto___59781]));

var G__59782 = (i__5770__auto___59781 + (1));
i__5770__auto___59781 = G__59782;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58745 = conformed_args__56602__auto__;
var map__58745__$1 = cljs.core.__destructure_map(map__58745);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58745__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq58741){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58741));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59783 = arguments.length;
var i__5770__auto___59784 = (0);
while(true){
if((i__5770__auto___59784 < len__5769__auto___59783)){
args__5775__auto__.push((arguments[i__5770__auto___59784]));

var G__59785 = (i__5770__auto___59784 + (1));
i__5770__auto___59784 = G__59785;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58749 = conformed_args__56602__auto__;
var map__58749__$1 = cljs.core.__destructure_map(map__58749);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58749__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58749__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58749__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq58747){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58747));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59786 = arguments.length;
var i__5770__auto___59787 = (0);
while(true){
if((i__5770__auto___59787 < len__5769__auto___59786)){
args__5775__auto__.push((arguments[i__5770__auto___59787]));

var G__59788 = (i__5770__auto___59787 + (1));
i__5770__auto___59787 = G__59788;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58754 = conformed_args__56602__auto__;
var map__58754__$1 = cljs.core.__destructure_map(map__58754);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq58751){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58751));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59789 = arguments.length;
var i__5770__auto___59790 = (0);
while(true){
if((i__5770__auto___59790 < len__5769__auto___59789)){
args__5775__auto__.push((arguments[i__5770__auto___59790]));

var G__59791 = (i__5770__auto___59790 + (1));
i__5770__auto___59790 = G__59791;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58762 = conformed_args__56602__auto__;
var map__58762__$1 = cljs.core.__destructure_map(map__58762);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq58759){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58759));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59792 = arguments.length;
var i__5770__auto___59793 = (0);
while(true){
if((i__5770__auto___59793 < len__5769__auto___59792)){
args__5775__auto__.push((arguments[i__5770__auto___59793]));

var G__59794 = (i__5770__auto___59793 + (1));
i__5770__auto___59793 = G__59794;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58767 = conformed_args__56602__auto__;
var map__58767__$1 = cljs.core.__destructure_map(map__58767);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq58764){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58764));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59795 = arguments.length;
var i__5770__auto___59796 = (0);
while(true){
if((i__5770__auto___59796 < len__5769__auto___59795)){
args__5775__auto__.push((arguments[i__5770__auto___59796]));

var G__59797 = (i__5770__auto___59796 + (1));
i__5770__auto___59796 = G__59797;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58785 = conformed_args__56602__auto__;
var map__58785__$1 = cljs.core.__destructure_map(map__58785);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58785__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58785__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58785__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq58775){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58775));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59798 = arguments.length;
var i__5770__auto___59799 = (0);
while(true){
if((i__5770__auto___59799 < len__5769__auto___59798)){
args__5775__auto__.push((arguments[i__5770__auto___59799]));

var G__59800 = (i__5770__auto___59799 + (1));
i__5770__auto___59799 = G__59800;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58796 = conformed_args__56602__auto__;
var map__58796__$1 = cljs.core.__destructure_map(map__58796);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58796__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58796__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58796__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq58795){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58795));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59801 = arguments.length;
var i__5770__auto___59802 = (0);
while(true){
if((i__5770__auto___59802 < len__5769__auto___59801)){
args__5775__auto__.push((arguments[i__5770__auto___59802]));

var G__59803 = (i__5770__auto___59802 + (1));
i__5770__auto___59802 = G__59803;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58806 = conformed_args__56602__auto__;
var map__58806__$1 = cljs.core.__destructure_map(map__58806);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58806__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58806__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58806__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq58802){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58802));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59804 = arguments.length;
var i__5770__auto___59805 = (0);
while(true){
if((i__5770__auto___59805 < len__5769__auto___59804)){
args__5775__auto__.push((arguments[i__5770__auto___59805]));

var G__59806 = (i__5770__auto___59805 + (1));
i__5770__auto___59805 = G__59806;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58814 = conformed_args__56602__auto__;
var map__58814__$1 = cljs.core.__destructure_map(map__58814);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq58810){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58810));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59807 = arguments.length;
var i__5770__auto___59808 = (0);
while(true){
if((i__5770__auto___59808 < len__5769__auto___59807)){
args__5775__auto__.push((arguments[i__5770__auto___59808]));

var G__59809 = (i__5770__auto___59808 + (1));
i__5770__auto___59808 = G__59809;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58816 = conformed_args__56602__auto__;
var map__58816__$1 = cljs.core.__destructure_map(map__58816);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58816__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58816__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58816__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq58815){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58815));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59810 = arguments.length;
var i__5770__auto___59811 = (0);
while(true){
if((i__5770__auto___59811 < len__5769__auto___59810)){
args__5775__auto__.push((arguments[i__5770__auto___59811]));

var G__59812 = (i__5770__auto___59811 + (1));
i__5770__auto___59811 = G__59812;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58828 = conformed_args__56602__auto__;
var map__58828__$1 = cljs.core.__destructure_map(map__58828);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58828__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58828__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58828__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq58820){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58820));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59813 = arguments.length;
var i__5770__auto___59814 = (0);
while(true){
if((i__5770__auto___59814 < len__5769__auto___59813)){
args__5775__auto__.push((arguments[i__5770__auto___59814]));

var G__59815 = (i__5770__auto___59814 + (1));
i__5770__auto___59814 = G__59815;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58833 = conformed_args__56602__auto__;
var map__58833__$1 = cljs.core.__destructure_map(map__58833);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq58830){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58830));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59816 = arguments.length;
var i__5770__auto___59817 = (0);
while(true){
if((i__5770__auto___59817 < len__5769__auto___59816)){
args__5775__auto__.push((arguments[i__5770__auto___59817]));

var G__59818 = (i__5770__auto___59817 + (1));
i__5770__auto___59817 = G__59818;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58839 = conformed_args__56602__auto__;
var map__58839__$1 = cljs.core.__destructure_map(map__58839);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq58836){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58836));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59819 = arguments.length;
var i__5770__auto___59820 = (0);
while(true){
if((i__5770__auto___59820 < len__5769__auto___59819)){
args__5775__auto__.push((arguments[i__5770__auto___59820]));

var G__59821 = (i__5770__auto___59820 + (1));
i__5770__auto___59820 = G__59821;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58848 = conformed_args__56602__auto__;
var map__58848__$1 = cljs.core.__destructure_map(map__58848);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58848__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58848__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58848__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq58841){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58841));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59822 = arguments.length;
var i__5770__auto___59823 = (0);
while(true){
if((i__5770__auto___59823 < len__5769__auto___59822)){
args__5775__auto__.push((arguments[i__5770__auto___59823]));

var G__59824 = (i__5770__auto___59823 + (1));
i__5770__auto___59823 = G__59824;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58853 = conformed_args__56602__auto__;
var map__58853__$1 = cljs.core.__destructure_map(map__58853);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58853__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq58850){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58850));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59825 = arguments.length;
var i__5770__auto___59826 = (0);
while(true){
if((i__5770__auto___59826 < len__5769__auto___59825)){
args__5775__auto__.push((arguments[i__5770__auto___59826]));

var G__59827 = (i__5770__auto___59826 + (1));
i__5770__auto___59826 = G__59827;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58861 = conformed_args__56602__auto__;
var map__58861__$1 = cljs.core.__destructure_map(map__58861);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58861__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58861__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58861__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq58856){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58856));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59828 = arguments.length;
var i__5770__auto___59829 = (0);
while(true){
if((i__5770__auto___59829 < len__5769__auto___59828)){
args__5775__auto__.push((arguments[i__5770__auto___59829]));

var G__59830 = (i__5770__auto___59829 + (1));
i__5770__auto___59829 = G__59830;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58865 = conformed_args__56602__auto__;
var map__58865__$1 = cljs.core.__destructure_map(map__58865);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq58862){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58862));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59831 = arguments.length;
var i__5770__auto___59832 = (0);
while(true){
if((i__5770__auto___59832 < len__5769__auto___59831)){
args__5775__auto__.push((arguments[i__5770__auto___59832]));

var G__59833 = (i__5770__auto___59832 + (1));
i__5770__auto___59832 = G__59833;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58872 = conformed_args__56602__auto__;
var map__58872__$1 = cljs.core.__destructure_map(map__58872);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq58866){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58866));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59834 = arguments.length;
var i__5770__auto___59835 = (0);
while(true){
if((i__5770__auto___59835 < len__5769__auto___59834)){
args__5775__auto__.push((arguments[i__5770__auto___59835]));

var G__59836 = (i__5770__auto___59835 + (1));
i__5770__auto___59835 = G__59836;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58889 = conformed_args__56602__auto__;
var map__58889__$1 = cljs.core.__destructure_map(map__58889);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58889__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58889__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58889__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq58877){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58877));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59837 = arguments.length;
var i__5770__auto___59838 = (0);
while(true){
if((i__5770__auto___59838 < len__5769__auto___59837)){
args__5775__auto__.push((arguments[i__5770__auto___59838]));

var G__59839 = (i__5770__auto___59838 + (1));
i__5770__auto___59838 = G__59839;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58891 = conformed_args__56602__auto__;
var map__58891__$1 = cljs.core.__destructure_map(map__58891);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq58890){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58890));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59840 = arguments.length;
var i__5770__auto___59841 = (0);
while(true){
if((i__5770__auto___59841 < len__5769__auto___59840)){
args__5775__auto__.push((arguments[i__5770__auto___59841]));

var G__59842 = (i__5770__auto___59841 + (1));
i__5770__auto___59841 = G__59842;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58897 = conformed_args__56602__auto__;
var map__58897__$1 = cljs.core.__destructure_map(map__58897);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58897__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58897__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58897__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq58893){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58893));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59843 = arguments.length;
var i__5770__auto___59844 = (0);
while(true){
if((i__5770__auto___59844 < len__5769__auto___59843)){
args__5775__auto__.push((arguments[i__5770__auto___59844]));

var G__59845 = (i__5770__auto___59844 + (1));
i__5770__auto___59844 = G__59845;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58901 = conformed_args__56602__auto__;
var map__58901__$1 = cljs.core.__destructure_map(map__58901);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq58899){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58899));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59846 = arguments.length;
var i__5770__auto___59847 = (0);
while(true){
if((i__5770__auto___59847 < len__5769__auto___59846)){
args__5775__auto__.push((arguments[i__5770__auto___59847]));

var G__59848 = (i__5770__auto___59847 + (1));
i__5770__auto___59847 = G__59848;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58905 = conformed_args__56602__auto__;
var map__58905__$1 = cljs.core.__destructure_map(map__58905);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58905__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58905__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58905__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq58903){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58903));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59849 = arguments.length;
var i__5770__auto___59850 = (0);
while(true){
if((i__5770__auto___59850 < len__5769__auto___59849)){
args__5775__auto__.push((arguments[i__5770__auto___59850]));

var G__59851 = (i__5770__auto___59850 + (1));
i__5770__auto___59850 = G__59851;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58914 = conformed_args__56602__auto__;
var map__58914__$1 = cljs.core.__destructure_map(map__58914);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58914__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58914__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58914__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq58910){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58910));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59852 = arguments.length;
var i__5770__auto___59853 = (0);
while(true){
if((i__5770__auto___59853 < len__5769__auto___59852)){
args__5775__auto__.push((arguments[i__5770__auto___59853]));

var G__59854 = (i__5770__auto___59853 + (1));
i__5770__auto___59853 = G__59854;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58924 = conformed_args__56602__auto__;
var map__58924__$1 = cljs.core.__destructure_map(map__58924);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58924__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58924__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58924__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq58919){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58919));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59855 = arguments.length;
var i__5770__auto___59856 = (0);
while(true){
if((i__5770__auto___59856 < len__5769__auto___59855)){
args__5775__auto__.push((arguments[i__5770__auto___59856]));

var G__59857 = (i__5770__auto___59856 + (1));
i__5770__auto___59856 = G__59857;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58932 = conformed_args__56602__auto__;
var map__58932__$1 = cljs.core.__destructure_map(map__58932);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58932__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58932__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58932__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq58926){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58926));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59858 = arguments.length;
var i__5770__auto___59859 = (0);
while(true){
if((i__5770__auto___59859 < len__5769__auto___59858)){
args__5775__auto__.push((arguments[i__5770__auto___59859]));

var G__59860 = (i__5770__auto___59859 + (1));
i__5770__auto___59859 = G__59860;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58939 = conformed_args__56602__auto__;
var map__58939__$1 = cljs.core.__destructure_map(map__58939);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58939__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq58933){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58933));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59861 = arguments.length;
var i__5770__auto___59862 = (0);
while(true){
if((i__5770__auto___59862 < len__5769__auto___59861)){
args__5775__auto__.push((arguments[i__5770__auto___59862]));

var G__59863 = (i__5770__auto___59862 + (1));
i__5770__auto___59862 = G__59863;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58946 = conformed_args__56602__auto__;
var map__58946__$1 = cljs.core.__destructure_map(map__58946);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58946__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58946__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58946__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq58944){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58944));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59864 = arguments.length;
var i__5770__auto___59865 = (0);
while(true){
if((i__5770__auto___59865 < len__5769__auto___59864)){
args__5775__auto__.push((arguments[i__5770__auto___59865]));

var G__59866 = (i__5770__auto___59865 + (1));
i__5770__auto___59865 = G__59866;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58948 = conformed_args__56602__auto__;
var map__58948__$1 = cljs.core.__destructure_map(map__58948);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58948__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58948__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58948__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq58947){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58947));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59867 = arguments.length;
var i__5770__auto___59868 = (0);
while(true){
if((i__5770__auto___59868 < len__5769__auto___59867)){
args__5775__auto__.push((arguments[i__5770__auto___59868]));

var G__59869 = (i__5770__auto___59868 + (1));
i__5770__auto___59868 = G__59869;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58957 = conformed_args__56602__auto__;
var map__58957__$1 = cljs.core.__destructure_map(map__58957);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58957__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58957__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58957__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq58953){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58953));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59870 = arguments.length;
var i__5770__auto___59871 = (0);
while(true){
if((i__5770__auto___59871 < len__5769__auto___59870)){
args__5775__auto__.push((arguments[i__5770__auto___59871]));

var G__59872 = (i__5770__auto___59871 + (1));
i__5770__auto___59871 = G__59872;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58960 = conformed_args__56602__auto__;
var map__58960__$1 = cljs.core.__destructure_map(map__58960);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58960__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58960__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58960__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq58959){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58959));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59873 = arguments.length;
var i__5770__auto___59874 = (0);
while(true){
if((i__5770__auto___59874 < len__5769__auto___59873)){
args__5775__auto__.push((arguments[i__5770__auto___59874]));

var G__59875 = (i__5770__auto___59874 + (1));
i__5770__auto___59874 = G__59875;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58965 = conformed_args__56602__auto__;
var map__58965__$1 = cljs.core.__destructure_map(map__58965);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58965__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58965__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58965__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq58961){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58961));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59876 = arguments.length;
var i__5770__auto___59877 = (0);
while(true){
if((i__5770__auto___59877 < len__5769__auto___59876)){
args__5775__auto__.push((arguments[i__5770__auto___59877]));

var G__59878 = (i__5770__auto___59877 + (1));
i__5770__auto___59877 = G__59878;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58972 = conformed_args__56602__auto__;
var map__58972__$1 = cljs.core.__destructure_map(map__58972);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58972__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58972__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58972__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq58969){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58969));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59879 = arguments.length;
var i__5770__auto___59880 = (0);
while(true){
if((i__5770__auto___59880 < len__5769__auto___59879)){
args__5775__auto__.push((arguments[i__5770__auto___59880]));

var G__59881 = (i__5770__auto___59880 + (1));
i__5770__auto___59880 = G__59881;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58981 = conformed_args__56602__auto__;
var map__58981__$1 = cljs.core.__destructure_map(map__58981);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq58977){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58977));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59882 = arguments.length;
var i__5770__auto___59883 = (0);
while(true){
if((i__5770__auto___59883 < len__5769__auto___59882)){
args__5775__auto__.push((arguments[i__5770__auto___59883]));

var G__59884 = (i__5770__auto___59883 + (1));
i__5770__auto___59883 = G__59884;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58988 = conformed_args__56602__auto__;
var map__58988__$1 = cljs.core.__destructure_map(map__58988);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58988__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58988__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58988__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq58983){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58983));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59885 = arguments.length;
var i__5770__auto___59886 = (0);
while(true){
if((i__5770__auto___59886 < len__5769__auto___59885)){
args__5775__auto__.push((arguments[i__5770__auto___59886]));

var G__59887 = (i__5770__auto___59886 + (1));
i__5770__auto___59886 = G__59887;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58995 = conformed_args__56602__auto__;
var map__58995__$1 = cljs.core.__destructure_map(map__58995);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58995__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58995__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58995__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq58990){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58990));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59888 = arguments.length;
var i__5770__auto___59889 = (0);
while(true){
if((i__5770__auto___59889 < len__5769__auto___59888)){
args__5775__auto__.push((arguments[i__5770__auto___59889]));

var G__59890 = (i__5770__auto___59889 + (1));
i__5770__auto___59889 = G__59890;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59000 = conformed_args__56602__auto__;
var map__59000__$1 = cljs.core.__destructure_map(map__59000);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59000__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59000__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59000__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq58996){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58996));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59891 = arguments.length;
var i__5770__auto___59892 = (0);
while(true){
if((i__5770__auto___59892 < len__5769__auto___59891)){
args__5775__auto__.push((arguments[i__5770__auto___59892]));

var G__59893 = (i__5770__auto___59892 + (1));
i__5770__auto___59892 = G__59893;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59010 = conformed_args__56602__auto__;
var map__59010__$1 = cljs.core.__destructure_map(map__59010);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq59006){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59006));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59894 = arguments.length;
var i__5770__auto___59895 = (0);
while(true){
if((i__5770__auto___59895 < len__5769__auto___59894)){
args__5775__auto__.push((arguments[i__5770__auto___59895]));

var G__59896 = (i__5770__auto___59895 + (1));
i__5770__auto___59895 = G__59896;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59023 = conformed_args__56602__auto__;
var map__59023__$1 = cljs.core.__destructure_map(map__59023);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59023__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59023__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59023__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq59014){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59014));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59897 = arguments.length;
var i__5770__auto___59898 = (0);
while(true){
if((i__5770__auto___59898 < len__5769__auto___59897)){
args__5775__auto__.push((arguments[i__5770__auto___59898]));

var G__59899 = (i__5770__auto___59898 + (1));
i__5770__auto___59898 = G__59899;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59037 = conformed_args__56602__auto__;
var map__59037__$1 = cljs.core.__destructure_map(map__59037);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq59028){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59028));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59900 = arguments.length;
var i__5770__auto___59901 = (0);
while(true){
if((i__5770__auto___59901 < len__5769__auto___59900)){
args__5775__auto__.push((arguments[i__5770__auto___59901]));

var G__59902 = (i__5770__auto___59901 + (1));
i__5770__auto___59901 = G__59902;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59039 = conformed_args__56602__auto__;
var map__59039__$1 = cljs.core.__destructure_map(map__59039);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59039__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59039__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59039__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq59038){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59038));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59903 = arguments.length;
var i__5770__auto___59904 = (0);
while(true){
if((i__5770__auto___59904 < len__5769__auto___59903)){
args__5775__auto__.push((arguments[i__5770__auto___59904]));

var G__59905 = (i__5770__auto___59904 + (1));
i__5770__auto___59904 = G__59905;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59047 = conformed_args__56602__auto__;
var map__59047__$1 = cljs.core.__destructure_map(map__59047);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59047__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59047__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59047__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq59042){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59042));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59906 = arguments.length;
var i__5770__auto___59907 = (0);
while(true){
if((i__5770__auto___59907 < len__5769__auto___59906)){
args__5775__auto__.push((arguments[i__5770__auto___59907]));

var G__59908 = (i__5770__auto___59907 + (1));
i__5770__auto___59907 = G__59908;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59056 = conformed_args__56602__auto__;
var map__59056__$1 = cljs.core.__destructure_map(map__59056);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59056__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59056__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59056__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq59052){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59052));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59909 = arguments.length;
var i__5770__auto___59910 = (0);
while(true){
if((i__5770__auto___59910 < len__5769__auto___59909)){
args__5775__auto__.push((arguments[i__5770__auto___59910]));

var G__59911 = (i__5770__auto___59910 + (1));
i__5770__auto___59910 = G__59911;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59068 = conformed_args__56602__auto__;
var map__59068__$1 = cljs.core.__destructure_map(map__59068);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59068__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59068__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq59062){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59062));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59912 = arguments.length;
var i__5770__auto___59913 = (0);
while(true){
if((i__5770__auto___59913 < len__5769__auto___59912)){
args__5775__auto__.push((arguments[i__5770__auto___59913]));

var G__59914 = (i__5770__auto___59913 + (1));
i__5770__auto___59913 = G__59914;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59081 = conformed_args__56602__auto__;
var map__59081__$1 = cljs.core.__destructure_map(map__59081);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59081__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59081__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59081__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq59075){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59075));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59915 = arguments.length;
var i__5770__auto___59916 = (0);
while(true){
if((i__5770__auto___59916 < len__5769__auto___59915)){
args__5775__auto__.push((arguments[i__5770__auto___59916]));

var G__59917 = (i__5770__auto___59916 + (1));
i__5770__auto___59916 = G__59917;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59092 = conformed_args__56602__auto__;
var map__59092__$1 = cljs.core.__destructure_map(map__59092);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59092__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59092__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59092__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq59091){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59091));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59918 = arguments.length;
var i__5770__auto___59919 = (0);
while(true){
if((i__5770__auto___59919 < len__5769__auto___59918)){
args__5775__auto__.push((arguments[i__5770__auto___59919]));

var G__59920 = (i__5770__auto___59919 + (1));
i__5770__auto___59919 = G__59920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59100 = conformed_args__56602__auto__;
var map__59100__$1 = cljs.core.__destructure_map(map__59100);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59100__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59100__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59100__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq59095){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59095));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59921 = arguments.length;
var i__5770__auto___59922 = (0);
while(true){
if((i__5770__auto___59922 < len__5769__auto___59921)){
args__5775__auto__.push((arguments[i__5770__auto___59922]));

var G__59923 = (i__5770__auto___59922 + (1));
i__5770__auto___59922 = G__59923;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59106 = conformed_args__56602__auto__;
var map__59106__$1 = cljs.core.__destructure_map(map__59106);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59106__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59106__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59106__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq59102){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59102));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59924 = arguments.length;
var i__5770__auto___59925 = (0);
while(true){
if((i__5770__auto___59925 < len__5769__auto___59924)){
args__5775__auto__.push((arguments[i__5770__auto___59925]));

var G__59926 = (i__5770__auto___59925 + (1));
i__5770__auto___59925 = G__59926;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59113 = conformed_args__56602__auto__;
var map__59113__$1 = cljs.core.__destructure_map(map__59113);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59113__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq59109){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59109));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59927 = arguments.length;
var i__5770__auto___59928 = (0);
while(true){
if((i__5770__auto___59928 < len__5769__auto___59927)){
args__5775__auto__.push((arguments[i__5770__auto___59928]));

var G__59929 = (i__5770__auto___59928 + (1));
i__5770__auto___59928 = G__59929;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59121 = conformed_args__56602__auto__;
var map__59121__$1 = cljs.core.__destructure_map(map__59121);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq59120){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59120));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59930 = arguments.length;
var i__5770__auto___59931 = (0);
while(true){
if((i__5770__auto___59931 < len__5769__auto___59930)){
args__5775__auto__.push((arguments[i__5770__auto___59931]));

var G__59932 = (i__5770__auto___59931 + (1));
i__5770__auto___59931 = G__59932;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59130 = conformed_args__56602__auto__;
var map__59130__$1 = cljs.core.__destructure_map(map__59130);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59130__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59130__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59130__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq59124){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59124));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59933 = arguments.length;
var i__5770__auto___59934 = (0);
while(true){
if((i__5770__auto___59934 < len__5769__auto___59933)){
args__5775__auto__.push((arguments[i__5770__auto___59934]));

var G__59935 = (i__5770__auto___59934 + (1));
i__5770__auto___59934 = G__59935;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59140 = conformed_args__56602__auto__;
var map__59140__$1 = cljs.core.__destructure_map(map__59140);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59140__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59140__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq59133){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59133));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59936 = arguments.length;
var i__5770__auto___59937 = (0);
while(true){
if((i__5770__auto___59937 < len__5769__auto___59936)){
args__5775__auto__.push((arguments[i__5770__auto___59937]));

var G__59938 = (i__5770__auto___59937 + (1));
i__5770__auto___59937 = G__59938;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59157 = conformed_args__56602__auto__;
var map__59157__$1 = cljs.core.__destructure_map(map__59157);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59157__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59157__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59157__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq59145){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59145));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59939 = arguments.length;
var i__5770__auto___59940 = (0);
while(true){
if((i__5770__auto___59940 < len__5769__auto___59939)){
args__5775__auto__.push((arguments[i__5770__auto___59940]));

var G__59941 = (i__5770__auto___59940 + (1));
i__5770__auto___59940 = G__59941;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59161 = conformed_args__56602__auto__;
var map__59161__$1 = cljs.core.__destructure_map(map__59161);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq59158){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59158));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59942 = arguments.length;
var i__5770__auto___59943 = (0);
while(true){
if((i__5770__auto___59943 < len__5769__auto___59942)){
args__5775__auto__.push((arguments[i__5770__auto___59943]));

var G__59944 = (i__5770__auto___59943 + (1));
i__5770__auto___59943 = G__59944;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59171 = conformed_args__56602__auto__;
var map__59171__$1 = cljs.core.__destructure_map(map__59171);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59171__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59171__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59171__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq59170){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59170));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59945 = arguments.length;
var i__5770__auto___59946 = (0);
while(true){
if((i__5770__auto___59946 < len__5769__auto___59945)){
args__5775__auto__.push((arguments[i__5770__auto___59946]));

var G__59947 = (i__5770__auto___59946 + (1));
i__5770__auto___59946 = G__59947;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59179 = conformed_args__56602__auto__;
var map__59179__$1 = cljs.core.__destructure_map(map__59179);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59179__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59179__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59179__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq59174){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59174));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59948 = arguments.length;
var i__5770__auto___59949 = (0);
while(true){
if((i__5770__auto___59949 < len__5769__auto___59948)){
args__5775__auto__.push((arguments[i__5770__auto___59949]));

var G__59950 = (i__5770__auto___59949 + (1));
i__5770__auto___59949 = G__59950;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59183 = conformed_args__56602__auto__;
var map__59183__$1 = cljs.core.__destructure_map(map__59183);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59183__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59183__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59183__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq59181){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59181));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59951 = arguments.length;
var i__5770__auto___59952 = (0);
while(true){
if((i__5770__auto___59952 < len__5769__auto___59951)){
args__5775__auto__.push((arguments[i__5770__auto___59952]));

var G__59953 = (i__5770__auto___59952 + (1));
i__5770__auto___59952 = G__59953;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59192 = conformed_args__56602__auto__;
var map__59192__$1 = cljs.core.__destructure_map(map__59192);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59192__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59192__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59192__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq59188){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59188));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59954 = arguments.length;
var i__5770__auto___59955 = (0);
while(true){
if((i__5770__auto___59955 < len__5769__auto___59954)){
args__5775__auto__.push((arguments[i__5770__auto___59955]));

var G__59956 = (i__5770__auto___59955 + (1));
i__5770__auto___59955 = G__59956;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59203 = conformed_args__56602__auto__;
var map__59203__$1 = cljs.core.__destructure_map(map__59203);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59203__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59203__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq59197){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59197));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59957 = arguments.length;
var i__5770__auto___59958 = (0);
while(true){
if((i__5770__auto___59958 < len__5769__auto___59957)){
args__5775__auto__.push((arguments[i__5770__auto___59958]));

var G__59959 = (i__5770__auto___59958 + (1));
i__5770__auto___59958 = G__59959;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59205 = conformed_args__56602__auto__;
var map__59205__$1 = cljs.core.__destructure_map(map__59205);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq59204){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59204));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59960 = arguments.length;
var i__5770__auto___59961 = (0);
while(true){
if((i__5770__auto___59961 < len__5769__auto___59960)){
args__5775__auto__.push((arguments[i__5770__auto___59961]));

var G__59962 = (i__5770__auto___59961 + (1));
i__5770__auto___59961 = G__59962;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59207 = conformed_args__56602__auto__;
var map__59207__$1 = cljs.core.__destructure_map(map__59207);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59207__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59207__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59207__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq59206){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59206));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59963 = arguments.length;
var i__5770__auto___59964 = (0);
while(true){
if((i__5770__auto___59964 < len__5769__auto___59963)){
args__5775__auto__.push((arguments[i__5770__auto___59964]));

var G__59965 = (i__5770__auto___59964 + (1));
i__5770__auto___59964 = G__59965;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59214 = conformed_args__56602__auto__;
var map__59214__$1 = cljs.core.__destructure_map(map__59214);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq59210){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59210));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59966 = arguments.length;
var i__5770__auto___59967 = (0);
while(true){
if((i__5770__auto___59967 < len__5769__auto___59966)){
args__5775__auto__.push((arguments[i__5770__auto___59967]));

var G__59968 = (i__5770__auto___59967 + (1));
i__5770__auto___59967 = G__59968;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59218 = conformed_args__56602__auto__;
var map__59218__$1 = cljs.core.__destructure_map(map__59218);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59218__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59218__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq59217){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59217));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59969 = arguments.length;
var i__5770__auto___59970 = (0);
while(true){
if((i__5770__auto___59970 < len__5769__auto___59969)){
args__5775__auto__.push((arguments[i__5770__auto___59970]));

var G__59971 = (i__5770__auto___59970 + (1));
i__5770__auto___59970 = G__59971;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59224 = conformed_args__56602__auto__;
var map__59224__$1 = cljs.core.__destructure_map(map__59224);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq59221){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59221));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59972 = arguments.length;
var i__5770__auto___59973 = (0);
while(true){
if((i__5770__auto___59973 < len__5769__auto___59972)){
args__5775__auto__.push((arguments[i__5770__auto___59973]));

var G__59974 = (i__5770__auto___59973 + (1));
i__5770__auto___59973 = G__59974;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59234 = conformed_args__56602__auto__;
var map__59234__$1 = cljs.core.__destructure_map(map__59234);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59234__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59234__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59234__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq59225){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59225));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59975 = arguments.length;
var i__5770__auto___59976 = (0);
while(true){
if((i__5770__auto___59976 < len__5769__auto___59975)){
args__5775__auto__.push((arguments[i__5770__auto___59976]));

var G__59977 = (i__5770__auto___59976 + (1));
i__5770__auto___59976 = G__59977;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59240 = conformed_args__56602__auto__;
var map__59240__$1 = cljs.core.__destructure_map(map__59240);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59240__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59240__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59240__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq59239){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59239));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59978 = arguments.length;
var i__5770__auto___59979 = (0);
while(true){
if((i__5770__auto___59979 < len__5769__auto___59978)){
args__5775__auto__.push((arguments[i__5770__auto___59979]));

var G__59980 = (i__5770__auto___59979 + (1));
i__5770__auto___59979 = G__59980;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59246 = conformed_args__56602__auto__;
var map__59246__$1 = cljs.core.__destructure_map(map__59246);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59246__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59246__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq59245){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59245));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59981 = arguments.length;
var i__5770__auto___59982 = (0);
while(true){
if((i__5770__auto___59982 < len__5769__auto___59981)){
args__5775__auto__.push((arguments[i__5770__auto___59982]));

var G__59983 = (i__5770__auto___59982 + (1));
i__5770__auto___59982 = G__59983;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59252 = conformed_args__56602__auto__;
var map__59252__$1 = cljs.core.__destructure_map(map__59252);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59252__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59252__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59252__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq59247){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59247));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59984 = arguments.length;
var i__5770__auto___59985 = (0);
while(true){
if((i__5770__auto___59985 < len__5769__auto___59984)){
args__5775__auto__.push((arguments[i__5770__auto___59985]));

var G__59986 = (i__5770__auto___59985 + (1));
i__5770__auto___59985 = G__59986;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59258 = conformed_args__56602__auto__;
var map__59258__$1 = cljs.core.__destructure_map(map__59258);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59258__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59258__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59258__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq59253){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59253));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59987 = arguments.length;
var i__5770__auto___59988 = (0);
while(true){
if((i__5770__auto___59988 < len__5769__auto___59987)){
args__5775__auto__.push((arguments[i__5770__auto___59988]));

var G__59989 = (i__5770__auto___59988 + (1));
i__5770__auto___59988 = G__59989;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59260 = conformed_args__56602__auto__;
var map__59260__$1 = cljs.core.__destructure_map(map__59260);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq59259){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59259));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59990 = arguments.length;
var i__5770__auto___59991 = (0);
while(true){
if((i__5770__auto___59991 < len__5769__auto___59990)){
args__5775__auto__.push((arguments[i__5770__auto___59991]));

var G__59992 = (i__5770__auto___59991 + (1));
i__5770__auto___59991 = G__59992;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59269 = conformed_args__56602__auto__;
var map__59269__$1 = cljs.core.__destructure_map(map__59269);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59269__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59269__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59269__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq59264){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59264));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59993 = arguments.length;
var i__5770__auto___59994 = (0);
while(true){
if((i__5770__auto___59994 < len__5769__auto___59993)){
args__5775__auto__.push((arguments[i__5770__auto___59994]));

var G__59995 = (i__5770__auto___59994 + (1));
i__5770__auto___59994 = G__59995;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59273 = conformed_args__56602__auto__;
var map__59273__$1 = cljs.core.__destructure_map(map__59273);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59273__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59273__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59273__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq59270){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59270));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59996 = arguments.length;
var i__5770__auto___59997 = (0);
while(true){
if((i__5770__auto___59997 < len__5769__auto___59996)){
args__5775__auto__.push((arguments[i__5770__auto___59997]));

var G__59998 = (i__5770__auto___59997 + (1));
i__5770__auto___59997 = G__59998;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59278 = conformed_args__56602__auto__;
var map__59278__$1 = cljs.core.__destructure_map(map__59278);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59278__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59278__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59278__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq59276){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59276));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___59999 = arguments.length;
var i__5770__auto___60000 = (0);
while(true){
if((i__5770__auto___60000 < len__5769__auto___59999)){
args__5775__auto__.push((arguments[i__5770__auto___60000]));

var G__60001 = (i__5770__auto___60000 + (1));
i__5770__auto___60000 = G__60001;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59281 = conformed_args__56602__auto__;
var map__59281__$1 = cljs.core.__destructure_map(map__59281);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq59280){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59280));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60002 = arguments.length;
var i__5770__auto___60003 = (0);
while(true){
if((i__5770__auto___60003 < len__5769__auto___60002)){
args__5775__auto__.push((arguments[i__5770__auto___60003]));

var G__60004 = (i__5770__auto___60003 + (1));
i__5770__auto___60003 = G__60004;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59283 = conformed_args__56602__auto__;
var map__59283__$1 = cljs.core.__destructure_map(map__59283);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59283__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59283__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59283__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq59282){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59282));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60005 = arguments.length;
var i__5770__auto___60006 = (0);
while(true){
if((i__5770__auto___60006 < len__5769__auto___60005)){
args__5775__auto__.push((arguments[i__5770__auto___60006]));

var G__60007 = (i__5770__auto___60006 + (1));
i__5770__auto___60006 = G__60007;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59290 = conformed_args__56602__auto__;
var map__59290__$1 = cljs.core.__destructure_map(map__59290);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq59284){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59284));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60008 = arguments.length;
var i__5770__auto___60009 = (0);
while(true){
if((i__5770__auto___60009 < len__5769__auto___60008)){
args__5775__auto__.push((arguments[i__5770__auto___60009]));

var G__60010 = (i__5770__auto___60009 + (1));
i__5770__auto___60009 = G__60010;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59296 = conformed_args__56602__auto__;
var map__59296__$1 = cljs.core.__destructure_map(map__59296);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59296__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59296__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59296__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq59293){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59293));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60011 = arguments.length;
var i__5770__auto___60012 = (0);
while(true){
if((i__5770__auto___60012 < len__5769__auto___60011)){
args__5775__auto__.push((arguments[i__5770__auto___60012]));

var G__60013 = (i__5770__auto___60012 + (1));
i__5770__auto___60012 = G__60013;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59301 = conformed_args__56602__auto__;
var map__59301__$1 = cljs.core.__destructure_map(map__59301);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59301__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59301__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59301__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq59300){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59300));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60014 = arguments.length;
var i__5770__auto___60015 = (0);
while(true){
if((i__5770__auto___60015 < len__5769__auto___60014)){
args__5775__auto__.push((arguments[i__5770__auto___60015]));

var G__60016 = (i__5770__auto___60015 + (1));
i__5770__auto___60015 = G__60016;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59304 = conformed_args__56602__auto__;
var map__59304__$1 = cljs.core.__destructure_map(map__59304);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59304__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59304__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59304__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq59303){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59303));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60017 = arguments.length;
var i__5770__auto___60018 = (0);
while(true){
if((i__5770__auto___60018 < len__5769__auto___60017)){
args__5775__auto__.push((arguments[i__5770__auto___60018]));

var G__60019 = (i__5770__auto___60018 + (1));
i__5770__auto___60018 = G__60019;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59309 = conformed_args__56602__auto__;
var map__59309__$1 = cljs.core.__destructure_map(map__59309);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq59307){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59307));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60020 = arguments.length;
var i__5770__auto___60021 = (0);
while(true){
if((i__5770__auto___60021 < len__5769__auto___60020)){
args__5775__auto__.push((arguments[i__5770__auto___60021]));

var G__60022 = (i__5770__auto___60021 + (1));
i__5770__auto___60021 = G__60022;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59323 = conformed_args__56602__auto__;
var map__59323__$1 = cljs.core.__destructure_map(map__59323);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59323__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59323__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59323__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq59310){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59310));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60023 = arguments.length;
var i__5770__auto___60024 = (0);
while(true){
if((i__5770__auto___60024 < len__5769__auto___60023)){
args__5775__auto__.push((arguments[i__5770__auto___60024]));

var G__60025 = (i__5770__auto___60024 + (1));
i__5770__auto___60024 = G__60025;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59373 = conformed_args__56602__auto__;
var map__59373__$1 = cljs.core.__destructure_map(map__59373);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59373__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59373__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59373__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq59351){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59351));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60026 = arguments.length;
var i__5770__auto___60027 = (0);
while(true){
if((i__5770__auto___60027 < len__5769__auto___60026)){
args__5775__auto__.push((arguments[i__5770__auto___60027]));

var G__60028 = (i__5770__auto___60027 + (1));
i__5770__auto___60027 = G__60028;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59390 = conformed_args__56602__auto__;
var map__59390__$1 = cljs.core.__destructure_map(map__59390);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59390__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59390__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59390__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq59386){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59386));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60029 = arguments.length;
var i__5770__auto___60030 = (0);
while(true){
if((i__5770__auto___60030 < len__5769__auto___60029)){
args__5775__auto__.push((arguments[i__5770__auto___60030]));

var G__60031 = (i__5770__auto___60030 + (1));
i__5770__auto___60030 = G__60031;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59394 = conformed_args__56602__auto__;
var map__59394__$1 = cljs.core.__destructure_map(map__59394);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq59392){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59392));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60032 = arguments.length;
var i__5770__auto___60033 = (0);
while(true){
if((i__5770__auto___60033 < len__5769__auto___60032)){
args__5775__auto__.push((arguments[i__5770__auto___60033]));

var G__60034 = (i__5770__auto___60033 + (1));
i__5770__auto___60033 = G__60034;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59398 = conformed_args__56602__auto__;
var map__59398__$1 = cljs.core.__destructure_map(map__59398);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq59397){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59397));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60035 = arguments.length;
var i__5770__auto___60036 = (0);
while(true){
if((i__5770__auto___60036 < len__5769__auto___60035)){
args__5775__auto__.push((arguments[i__5770__auto___60036]));

var G__60037 = (i__5770__auto___60036 + (1));
i__5770__auto___60036 = G__60037;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59400 = conformed_args__56602__auto__;
var map__59400__$1 = cljs.core.__destructure_map(map__59400);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq59399){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59399));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60038 = arguments.length;
var i__5770__auto___60039 = (0);
while(true){
if((i__5770__auto___60039 < len__5769__auto___60038)){
args__5775__auto__.push((arguments[i__5770__auto___60039]));

var G__60040 = (i__5770__auto___60039 + (1));
i__5770__auto___60039 = G__60040;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59404 = conformed_args__56602__auto__;
var map__59404__$1 = cljs.core.__destructure_map(map__59404);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59404__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59404__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59404__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq59401){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59401));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60041 = arguments.length;
var i__5770__auto___60042 = (0);
while(true){
if((i__5770__auto___60042 < len__5769__auto___60041)){
args__5775__auto__.push((arguments[i__5770__auto___60042]));

var G__60043 = (i__5770__auto___60042 + (1));
i__5770__auto___60042 = G__60043;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59408 = conformed_args__56602__auto__;
var map__59408__$1 = cljs.core.__destructure_map(map__59408);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq59407){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59407));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60044 = arguments.length;
var i__5770__auto___60045 = (0);
while(true){
if((i__5770__auto___60045 < len__5769__auto___60044)){
args__5775__auto__.push((arguments[i__5770__auto___60045]));

var G__60046 = (i__5770__auto___60045 + (1));
i__5770__auto___60045 = G__60046;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59421 = conformed_args__56602__auto__;
var map__59421__$1 = cljs.core.__destructure_map(map__59421);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59421__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59421__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59421__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq59414){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59414));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60047 = arguments.length;
var i__5770__auto___60048 = (0);
while(true){
if((i__5770__auto___60048 < len__5769__auto___60047)){
args__5775__auto__.push((arguments[i__5770__auto___60048]));

var G__60049 = (i__5770__auto___60048 + (1));
i__5770__auto___60048 = G__60049;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59423 = conformed_args__56602__auto__;
var map__59423__$1 = cljs.core.__destructure_map(map__59423);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59423__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59423__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59423__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq59422){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59422));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60050 = arguments.length;
var i__5770__auto___60051 = (0);
while(true){
if((i__5770__auto___60051 < len__5769__auto___60050)){
args__5775__auto__.push((arguments[i__5770__auto___60051]));

var G__60052 = (i__5770__auto___60051 + (1));
i__5770__auto___60051 = G__60052;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59429 = conformed_args__56602__auto__;
var map__59429__$1 = cljs.core.__destructure_map(map__59429);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59429__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59429__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59429__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq59426){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59426));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60053 = arguments.length;
var i__5770__auto___60054 = (0);
while(true){
if((i__5770__auto___60054 < len__5769__auto___60053)){
args__5775__auto__.push((arguments[i__5770__auto___60054]));

var G__60055 = (i__5770__auto___60054 + (1));
i__5770__auto___60054 = G__60055;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59436 = conformed_args__56602__auto__;
var map__59436__$1 = cljs.core.__destructure_map(map__59436);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59436__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59436__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59436__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq59433){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59433));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60056 = arguments.length;
var i__5770__auto___60057 = (0);
while(true){
if((i__5770__auto___60057 < len__5769__auto___60056)){
args__5775__auto__.push((arguments[i__5770__auto___60057]));

var G__60058 = (i__5770__auto___60057 + (1));
i__5770__auto___60057 = G__60058;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59441 = conformed_args__56602__auto__;
var map__59441__$1 = cljs.core.__destructure_map(map__59441);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59441__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59441__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59441__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq59438){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59438));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60059 = arguments.length;
var i__5770__auto___60060 = (0);
while(true){
if((i__5770__auto___60060 < len__5769__auto___60059)){
args__5775__auto__.push((arguments[i__5770__auto___60060]));

var G__60061 = (i__5770__auto___60060 + (1));
i__5770__auto___60060 = G__60061;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59444 = conformed_args__56602__auto__;
var map__59444__$1 = cljs.core.__destructure_map(map__59444);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59444__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59444__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59444__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq59442){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59442));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60062 = arguments.length;
var i__5770__auto___60063 = (0);
while(true){
if((i__5770__auto___60063 < len__5769__auto___60062)){
args__5775__auto__.push((arguments[i__5770__auto___60063]));

var G__60064 = (i__5770__auto___60063 + (1));
i__5770__auto___60063 = G__60064;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59448 = conformed_args__56602__auto__;
var map__59448__$1 = cljs.core.__destructure_map(map__59448);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq59446){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59446));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60065 = arguments.length;
var i__5770__auto___60066 = (0);
while(true){
if((i__5770__auto___60066 < len__5769__auto___60065)){
args__5775__auto__.push((arguments[i__5770__auto___60066]));

var G__60067 = (i__5770__auto___60066 + (1));
i__5770__auto___60066 = G__60067;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59452 = conformed_args__56602__auto__;
var map__59452__$1 = cljs.core.__destructure_map(map__59452);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq59451){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59451));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60068 = arguments.length;
var i__5770__auto___60069 = (0);
while(true){
if((i__5770__auto___60069 < len__5769__auto___60068)){
args__5775__auto__.push((arguments[i__5770__auto___60069]));

var G__60070 = (i__5770__auto___60069 + (1));
i__5770__auto___60069 = G__60070;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59456 = conformed_args__56602__auto__;
var map__59456__$1 = cljs.core.__destructure_map(map__59456);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq59455){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59455));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60071 = arguments.length;
var i__5770__auto___60072 = (0);
while(true){
if((i__5770__auto___60072 < len__5769__auto___60071)){
args__5775__auto__.push((arguments[i__5770__auto___60072]));

var G__60073 = (i__5770__auto___60072 + (1));
i__5770__auto___60072 = G__60073;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59460 = conformed_args__56602__auto__;
var map__59460__$1 = cljs.core.__destructure_map(map__59460);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59460__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59460__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59460__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq59459){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59459));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60074 = arguments.length;
var i__5770__auto___60075 = (0);
while(true){
if((i__5770__auto___60075 < len__5769__auto___60074)){
args__5775__auto__.push((arguments[i__5770__auto___60075]));

var G__60076 = (i__5770__auto___60075 + (1));
i__5770__auto___60075 = G__60076;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59462 = conformed_args__56602__auto__;
var map__59462__$1 = cljs.core.__destructure_map(map__59462);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq59461){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59461));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60077 = arguments.length;
var i__5770__auto___60078 = (0);
while(true){
if((i__5770__auto___60078 < len__5769__auto___60077)){
args__5775__auto__.push((arguments[i__5770__auto___60078]));

var G__60079 = (i__5770__auto___60078 + (1));
i__5770__auto___60078 = G__60079;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59464 = conformed_args__56602__auto__;
var map__59464__$1 = cljs.core.__destructure_map(map__59464);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59464__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59464__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59464__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq59463){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59463));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60080 = arguments.length;
var i__5770__auto___60081 = (0);
while(true){
if((i__5770__auto___60081 < len__5769__auto___60080)){
args__5775__auto__.push((arguments[i__5770__auto___60081]));

var G__60082 = (i__5770__auto___60081 + (1));
i__5770__auto___60081 = G__60082;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59466 = conformed_args__56602__auto__;
var map__59466__$1 = cljs.core.__destructure_map(map__59466);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59466__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59466__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59466__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq59465){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59465));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60083 = arguments.length;
var i__5770__auto___60084 = (0);
while(true){
if((i__5770__auto___60084 < len__5769__auto___60083)){
args__5775__auto__.push((arguments[i__5770__auto___60084]));

var G__60085 = (i__5770__auto___60084 + (1));
i__5770__auto___60084 = G__60085;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59469 = conformed_args__56602__auto__;
var map__59469__$1 = cljs.core.__destructure_map(map__59469);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59469__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59469__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59469__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq59468){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59468));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60086 = arguments.length;
var i__5770__auto___60087 = (0);
while(true){
if((i__5770__auto___60087 < len__5769__auto___60086)){
args__5775__auto__.push((arguments[i__5770__auto___60087]));

var G__60088 = (i__5770__auto___60087 + (1));
i__5770__auto___60087 = G__60088;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59471 = conformed_args__56602__auto__;
var map__59471__$1 = cljs.core.__destructure_map(map__59471);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59471__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59471__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59471__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq59470){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59470));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60089 = arguments.length;
var i__5770__auto___60090 = (0);
while(true){
if((i__5770__auto___60090 < len__5769__auto___60089)){
args__5775__auto__.push((arguments[i__5770__auto___60090]));

var G__60091 = (i__5770__auto___60090 + (1));
i__5770__auto___60090 = G__60091;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59474 = conformed_args__56602__auto__;
var map__59474__$1 = cljs.core.__destructure_map(map__59474);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59474__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59474__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59474__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq59472){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59472));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60092 = arguments.length;
var i__5770__auto___60093 = (0);
while(true){
if((i__5770__auto___60093 < len__5769__auto___60092)){
args__5775__auto__.push((arguments[i__5770__auto___60093]));

var G__60094 = (i__5770__auto___60093 + (1));
i__5770__auto___60093 = G__60094;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59476 = conformed_args__56602__auto__;
var map__59476__$1 = cljs.core.__destructure_map(map__59476);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59476__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59476__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59476__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq59475){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59475));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60095 = arguments.length;
var i__5770__auto___60096 = (0);
while(true){
if((i__5770__auto___60096 < len__5769__auto___60095)){
args__5775__auto__.push((arguments[i__5770__auto___60096]));

var G__60097 = (i__5770__auto___60096 + (1));
i__5770__auto___60096 = G__60097;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59478 = conformed_args__56602__auto__;
var map__59478__$1 = cljs.core.__destructure_map(map__59478);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59478__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59478__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59478__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq59477){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59477));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60098 = arguments.length;
var i__5770__auto___60099 = (0);
while(true){
if((i__5770__auto___60099 < len__5769__auto___60098)){
args__5775__auto__.push((arguments[i__5770__auto___60099]));

var G__60100 = (i__5770__auto___60099 + (1));
i__5770__auto___60099 = G__60100;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59481 = conformed_args__56602__auto__;
var map__59481__$1 = cljs.core.__destructure_map(map__59481);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq59480){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59480));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60101 = arguments.length;
var i__5770__auto___60102 = (0);
while(true){
if((i__5770__auto___60102 < len__5769__auto___60101)){
args__5775__auto__.push((arguments[i__5770__auto___60102]));

var G__60103 = (i__5770__auto___60102 + (1));
i__5770__auto___60102 = G__60103;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59484 = conformed_args__56602__auto__;
var map__59484__$1 = cljs.core.__destructure_map(map__59484);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59484__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59484__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq59483){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59483));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60104 = arguments.length;
var i__5770__auto___60105 = (0);
while(true){
if((i__5770__auto___60105 < len__5769__auto___60104)){
args__5775__auto__.push((arguments[i__5770__auto___60105]));

var G__60106 = (i__5770__auto___60105 + (1));
i__5770__auto___60105 = G__60106;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59486 = conformed_args__56602__auto__;
var map__59486__$1 = cljs.core.__destructure_map(map__59486);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq59485){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59485));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60107 = arguments.length;
var i__5770__auto___60108 = (0);
while(true){
if((i__5770__auto___60108 < len__5769__auto___60107)){
args__5775__auto__.push((arguments[i__5770__auto___60108]));

var G__60109 = (i__5770__auto___60108 + (1));
i__5770__auto___60108 = G__60109;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59488 = conformed_args__56602__auto__;
var map__59488__$1 = cljs.core.__destructure_map(map__59488);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq59487){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59487));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60110 = arguments.length;
var i__5770__auto___60111 = (0);
while(true){
if((i__5770__auto___60111 < len__5769__auto___60110)){
args__5775__auto__.push((arguments[i__5770__auto___60111]));

var G__60112 = (i__5770__auto___60111 + (1));
i__5770__auto___60111 = G__60112;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59490 = conformed_args__56602__auto__;
var map__59490__$1 = cljs.core.__destructure_map(map__59490);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59490__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59490__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59490__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq59489){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59489));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60113 = arguments.length;
var i__5770__auto___60114 = (0);
while(true){
if((i__5770__auto___60114 < len__5769__auto___60113)){
args__5775__auto__.push((arguments[i__5770__auto___60114]));

var G__60115 = (i__5770__auto___60114 + (1));
i__5770__auto___60114 = G__60115;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59492 = conformed_args__56602__auto__;
var map__59492__$1 = cljs.core.__destructure_map(map__59492);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59492__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59492__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59492__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq59491){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59491));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60116 = arguments.length;
var i__5770__auto___60117 = (0);
while(true){
if((i__5770__auto___60117 < len__5769__auto___60116)){
args__5775__auto__.push((arguments[i__5770__auto___60117]));

var G__60118 = (i__5770__auto___60117 + (1));
i__5770__auto___60117 = G__60118;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59494 = conformed_args__56602__auto__;
var map__59494__$1 = cljs.core.__destructure_map(map__59494);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59494__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59494__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59494__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq59493){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59493));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60119 = arguments.length;
var i__5770__auto___60120 = (0);
while(true){
if((i__5770__auto___60120 < len__5769__auto___60119)){
args__5775__auto__.push((arguments[i__5770__auto___60120]));

var G__60121 = (i__5770__auto___60120 + (1));
i__5770__auto___60120 = G__60121;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59496 = conformed_args__56602__auto__;
var map__59496__$1 = cljs.core.__destructure_map(map__59496);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59496__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59496__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59496__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq59495){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59495));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60122 = arguments.length;
var i__5770__auto___60123 = (0);
while(true){
if((i__5770__auto___60123 < len__5769__auto___60122)){
args__5775__auto__.push((arguments[i__5770__auto___60123]));

var G__60124 = (i__5770__auto___60123 + (1));
i__5770__auto___60123 = G__60124;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__56602__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59498 = conformed_args__56602__auto__;
var map__59498__$1 = cljs.core.__destructure_map(map__59498);
var css__56605__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59498__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__56604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59498__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__56603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59498__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__56604__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__56604__auto__);
var attrs_value__56606__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__56603__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__56606__auto__], null),children__56604__auto____$1),css__56605__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq59497){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59497));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
