goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40674 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null, this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_40674(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40676 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null, this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_40676(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__39450 = coll;
var G__39451 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39450,G__39451) : shadow.dom.lazy_native_coll_seq.call(null, G__39450,G__39451));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__39486 = arguments.length;
switch (G__39486) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__39498 = arguments.length;
switch (G__39498) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__39505 = arguments.length;
switch (G__39505) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__39514 = arguments.length;
switch (G__39514) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__39544 = arguments.length;
switch (G__39544) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__39552 = arguments.length;
switch (G__39552) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e39565){if((e39565 instanceof Object)){
var e = e39565;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39565;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__39573 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39574 = null;
var count__39575 = (0);
var i__39576 = (0);
while(true){
if((i__39576 < count__39575)){
var el = chunk__39574.cljs$core$IIndexed$_nth$arity$2(null, i__39576);
var handler_40683__$1 = ((function (seq__39573,chunk__39574,count__39575,i__39576,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__39573,chunk__39574,count__39575,i__39576,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40683__$1);


var G__40684 = seq__39573;
var G__40685 = chunk__39574;
var G__40686 = count__39575;
var G__40687 = (i__39576 + (1));
seq__39573 = G__40684;
chunk__39574 = G__40685;
count__39575 = G__40686;
i__39576 = G__40687;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39573);
if(temp__5804__auto__){
var seq__39573__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39573__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39573__$1);
var G__40688 = cljs.core.chunk_rest(seq__39573__$1);
var G__40689 = c__5568__auto__;
var G__40690 = cljs.core.count(c__5568__auto__);
var G__40691 = (0);
seq__39573 = G__40688;
chunk__39574 = G__40689;
count__39575 = G__40690;
i__39576 = G__40691;
continue;
} else {
var el = cljs.core.first(seq__39573__$1);
var handler_40692__$1 = ((function (seq__39573,chunk__39574,count__39575,i__39576,el,seq__39573__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__39573,chunk__39574,count__39575,i__39576,el,seq__39573__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40692__$1);


var G__40693 = cljs.core.next(seq__39573__$1);
var G__40694 = null;
var G__40695 = (0);
var G__40696 = (0);
seq__39573 = G__40693;
chunk__39574 = G__40694;
count__39575 = G__40695;
i__39576 = G__40696;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__39596 = arguments.length;
switch (G__39596) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__39618 = cljs.core.seq(events);
var chunk__39620 = null;
var count__39621 = (0);
var i__39622 = (0);
while(true){
if((i__39622 < count__39621)){
var vec__39635 = chunk__39620.cljs$core$IIndexed$_nth$arity$2(null, i__39622);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39635,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39635,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40698 = seq__39618;
var G__40699 = chunk__39620;
var G__40700 = count__39621;
var G__40701 = (i__39622 + (1));
seq__39618 = G__40698;
chunk__39620 = G__40699;
count__39621 = G__40700;
i__39622 = G__40701;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39618);
if(temp__5804__auto__){
var seq__39618__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39618__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39618__$1);
var G__40702 = cljs.core.chunk_rest(seq__39618__$1);
var G__40703 = c__5568__auto__;
var G__40704 = cljs.core.count(c__5568__auto__);
var G__40705 = (0);
seq__39618 = G__40702;
chunk__39620 = G__40703;
count__39621 = G__40704;
i__39622 = G__40705;
continue;
} else {
var vec__39640 = cljs.core.first(seq__39618__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39640,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39640,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40706 = cljs.core.next(seq__39618__$1);
var G__40707 = null;
var G__40708 = (0);
var G__40709 = (0);
seq__39618 = G__40706;
chunk__39620 = G__40707;
count__39621 = G__40708;
i__39622 = G__40709;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__39653 = cljs.core.seq(styles);
var chunk__39654 = null;
var count__39655 = (0);
var i__39656 = (0);
while(true){
if((i__39656 < count__39655)){
var vec__39670 = chunk__39654.cljs$core$IIndexed$_nth$arity$2(null, i__39656);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39670,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39670,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40710 = seq__39653;
var G__40711 = chunk__39654;
var G__40712 = count__39655;
var G__40713 = (i__39656 + (1));
seq__39653 = G__40710;
chunk__39654 = G__40711;
count__39655 = G__40712;
i__39656 = G__40713;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39653);
if(temp__5804__auto__){
var seq__39653__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39653__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39653__$1);
var G__40714 = cljs.core.chunk_rest(seq__39653__$1);
var G__40715 = c__5568__auto__;
var G__40716 = cljs.core.count(c__5568__auto__);
var G__40717 = (0);
seq__39653 = G__40714;
chunk__39654 = G__40715;
count__39655 = G__40716;
i__39656 = G__40717;
continue;
} else {
var vec__39678 = cljs.core.first(seq__39653__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39678,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39678,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40718 = cljs.core.next(seq__39653__$1);
var G__40719 = null;
var G__40720 = (0);
var G__40721 = (0);
seq__39653 = G__40718;
chunk__39654 = G__40719;
count__39655 = G__40720;
i__39656 = G__40721;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__39691_40722 = key;
var G__39691_40723__$1 = (((G__39691_40722 instanceof cljs.core.Keyword))?G__39691_40722.fqn:null);
switch (G__39691_40723__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_40725 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_40725,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_40725,"aria-");
}
})())){
el.setAttribute(ks_40725,value);
} else {
(el[ks_40725] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39824){
var map__39826 = p__39824;
var map__39826__$1 = cljs.core.__destructure_map(map__39826);
var props = map__39826__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39826__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39832 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39832,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39832,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39832,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39840 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39840,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39840;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39851 = arguments.length;
switch (G__39851) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39869){
var vec__39872 = p__39869;
var seq__39873 = cljs.core.seq(vec__39872);
var first__39874 = cljs.core.first(seq__39873);
var seq__39873__$1 = cljs.core.next(seq__39873);
var nn = first__39874;
var first__39874__$1 = cljs.core.first(seq__39873__$1);
var seq__39873__$2 = cljs.core.next(seq__39873__$1);
var np = first__39874__$1;
var nc = seq__39873__$2;
var node = vec__39872;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39879 = nn;
var G__39880 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39879,G__39880) : create_fn.call(null, G__39879,G__39880));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39883 = nn;
var G__39884 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39883,G__39884) : create_fn.call(null, G__39883,G__39884));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39888 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39888,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39888,(1),null);
var seq__39893_40727 = cljs.core.seq(node_children);
var chunk__39894_40728 = null;
var count__39895_40729 = (0);
var i__39896_40730 = (0);
while(true){
if((i__39896_40730 < count__39895_40729)){
var child_struct_40731 = chunk__39894_40728.cljs$core$IIndexed$_nth$arity$2(null, i__39896_40730);
var children_40732 = shadow.dom.dom_node(child_struct_40731);
if(cljs.core.seq_QMARK_(children_40732)){
var seq__39933_40733 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40732));
var chunk__39935_40734 = null;
var count__39936_40735 = (0);
var i__39937_40736 = (0);
while(true){
if((i__39937_40736 < count__39936_40735)){
var child_40737 = chunk__39935_40734.cljs$core$IIndexed$_nth$arity$2(null, i__39937_40736);
if(cljs.core.truth_(child_40737)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40737);


var G__40738 = seq__39933_40733;
var G__40739 = chunk__39935_40734;
var G__40740 = count__39936_40735;
var G__40741 = (i__39937_40736 + (1));
seq__39933_40733 = G__40738;
chunk__39935_40734 = G__40739;
count__39936_40735 = G__40740;
i__39937_40736 = G__40741;
continue;
} else {
var G__40742 = seq__39933_40733;
var G__40743 = chunk__39935_40734;
var G__40744 = count__39936_40735;
var G__40745 = (i__39937_40736 + (1));
seq__39933_40733 = G__40742;
chunk__39935_40734 = G__40743;
count__39936_40735 = G__40744;
i__39937_40736 = G__40745;
continue;
}
} else {
var temp__5804__auto___40746 = cljs.core.seq(seq__39933_40733);
if(temp__5804__auto___40746){
var seq__39933_40747__$1 = temp__5804__auto___40746;
if(cljs.core.chunked_seq_QMARK_(seq__39933_40747__$1)){
var c__5568__auto___40748 = cljs.core.chunk_first(seq__39933_40747__$1);
var G__40749 = cljs.core.chunk_rest(seq__39933_40747__$1);
var G__40750 = c__5568__auto___40748;
var G__40751 = cljs.core.count(c__5568__auto___40748);
var G__40752 = (0);
seq__39933_40733 = G__40749;
chunk__39935_40734 = G__40750;
count__39936_40735 = G__40751;
i__39937_40736 = G__40752;
continue;
} else {
var child_40753 = cljs.core.first(seq__39933_40747__$1);
if(cljs.core.truth_(child_40753)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40753);


var G__40754 = cljs.core.next(seq__39933_40747__$1);
var G__40755 = null;
var G__40756 = (0);
var G__40757 = (0);
seq__39933_40733 = G__40754;
chunk__39935_40734 = G__40755;
count__39936_40735 = G__40756;
i__39937_40736 = G__40757;
continue;
} else {
var G__40758 = cljs.core.next(seq__39933_40747__$1);
var G__40759 = null;
var G__40760 = (0);
var G__40761 = (0);
seq__39933_40733 = G__40758;
chunk__39935_40734 = G__40759;
count__39936_40735 = G__40760;
i__39937_40736 = G__40761;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40732);
}


var G__40762 = seq__39893_40727;
var G__40763 = chunk__39894_40728;
var G__40764 = count__39895_40729;
var G__40765 = (i__39896_40730 + (1));
seq__39893_40727 = G__40762;
chunk__39894_40728 = G__40763;
count__39895_40729 = G__40764;
i__39896_40730 = G__40765;
continue;
} else {
var temp__5804__auto___40766 = cljs.core.seq(seq__39893_40727);
if(temp__5804__auto___40766){
var seq__39893_40767__$1 = temp__5804__auto___40766;
if(cljs.core.chunked_seq_QMARK_(seq__39893_40767__$1)){
var c__5568__auto___40768 = cljs.core.chunk_first(seq__39893_40767__$1);
var G__40769 = cljs.core.chunk_rest(seq__39893_40767__$1);
var G__40770 = c__5568__auto___40768;
var G__40771 = cljs.core.count(c__5568__auto___40768);
var G__40772 = (0);
seq__39893_40727 = G__40769;
chunk__39894_40728 = G__40770;
count__39895_40729 = G__40771;
i__39896_40730 = G__40772;
continue;
} else {
var child_struct_40773 = cljs.core.first(seq__39893_40767__$1);
var children_40774 = shadow.dom.dom_node(child_struct_40773);
if(cljs.core.seq_QMARK_(children_40774)){
var seq__39962_40775 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40774));
var chunk__39964_40776 = null;
var count__39965_40777 = (0);
var i__39966_40778 = (0);
while(true){
if((i__39966_40778 < count__39965_40777)){
var child_40779 = chunk__39964_40776.cljs$core$IIndexed$_nth$arity$2(null, i__39966_40778);
if(cljs.core.truth_(child_40779)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40779);


var G__40780 = seq__39962_40775;
var G__40781 = chunk__39964_40776;
var G__40782 = count__39965_40777;
var G__40783 = (i__39966_40778 + (1));
seq__39962_40775 = G__40780;
chunk__39964_40776 = G__40781;
count__39965_40777 = G__40782;
i__39966_40778 = G__40783;
continue;
} else {
var G__40784 = seq__39962_40775;
var G__40785 = chunk__39964_40776;
var G__40786 = count__39965_40777;
var G__40787 = (i__39966_40778 + (1));
seq__39962_40775 = G__40784;
chunk__39964_40776 = G__40785;
count__39965_40777 = G__40786;
i__39966_40778 = G__40787;
continue;
}
} else {
var temp__5804__auto___40788__$1 = cljs.core.seq(seq__39962_40775);
if(temp__5804__auto___40788__$1){
var seq__39962_40789__$1 = temp__5804__auto___40788__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39962_40789__$1)){
var c__5568__auto___40790 = cljs.core.chunk_first(seq__39962_40789__$1);
var G__40791 = cljs.core.chunk_rest(seq__39962_40789__$1);
var G__40792 = c__5568__auto___40790;
var G__40793 = cljs.core.count(c__5568__auto___40790);
var G__40794 = (0);
seq__39962_40775 = G__40791;
chunk__39964_40776 = G__40792;
count__39965_40777 = G__40793;
i__39966_40778 = G__40794;
continue;
} else {
var child_40795 = cljs.core.first(seq__39962_40789__$1);
if(cljs.core.truth_(child_40795)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40795);


var G__40796 = cljs.core.next(seq__39962_40789__$1);
var G__40797 = null;
var G__40798 = (0);
var G__40799 = (0);
seq__39962_40775 = G__40796;
chunk__39964_40776 = G__40797;
count__39965_40777 = G__40798;
i__39966_40778 = G__40799;
continue;
} else {
var G__40800 = cljs.core.next(seq__39962_40789__$1);
var G__40801 = null;
var G__40802 = (0);
var G__40803 = (0);
seq__39962_40775 = G__40800;
chunk__39964_40776 = G__40801;
count__39965_40777 = G__40802;
i__39966_40778 = G__40803;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40774);
}


var G__40804 = cljs.core.next(seq__39893_40767__$1);
var G__40805 = null;
var G__40806 = (0);
var G__40807 = (0);
seq__39893_40727 = G__40804;
chunk__39894_40728 = G__40805;
count__39895_40729 = G__40806;
i__39896_40730 = G__40807;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__40049 = cljs.core.seq(node);
var chunk__40050 = null;
var count__40051 = (0);
var i__40052 = (0);
while(true){
if((i__40052 < count__40051)){
var n = chunk__40050.cljs$core$IIndexed$_nth$arity$2(null, i__40052);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__40808 = seq__40049;
var G__40809 = chunk__40050;
var G__40810 = count__40051;
var G__40811 = (i__40052 + (1));
seq__40049 = G__40808;
chunk__40050 = G__40809;
count__40051 = G__40810;
i__40052 = G__40811;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40049);
if(temp__5804__auto__){
var seq__40049__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40049__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40049__$1);
var G__40812 = cljs.core.chunk_rest(seq__40049__$1);
var G__40813 = c__5568__auto__;
var G__40814 = cljs.core.count(c__5568__auto__);
var G__40815 = (0);
seq__40049 = G__40812;
chunk__40050 = G__40813;
count__40051 = G__40814;
i__40052 = G__40815;
continue;
} else {
var n = cljs.core.first(seq__40049__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__40816 = cljs.core.next(seq__40049__$1);
var G__40817 = null;
var G__40818 = (0);
var G__40819 = (0);
seq__40049 = G__40816;
chunk__40050 = G__40817;
count__40051 = G__40818;
i__40052 = G__40819;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__40127 = arguments.length;
switch (G__40127) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__40139 = arguments.length;
switch (G__40139) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__40154 = arguments.length;
switch (G__40154) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40825 = arguments.length;
var i__5770__auto___40826 = (0);
while(true){
if((i__5770__auto___40826 < len__5769__auto___40825)){
args__5775__auto__.push((arguments[i__5770__auto___40826]));

var G__40827 = (i__5770__auto___40826 + (1));
i__5770__auto___40826 = G__40827;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__40215_40828 = cljs.core.seq(nodes);
var chunk__40216_40829 = null;
var count__40217_40830 = (0);
var i__40218_40831 = (0);
while(true){
if((i__40218_40831 < count__40217_40830)){
var node_40834 = chunk__40216_40829.cljs$core$IIndexed$_nth$arity$2(null, i__40218_40831);
fragment.appendChild(shadow.dom._to_dom(node_40834));


var G__40835 = seq__40215_40828;
var G__40836 = chunk__40216_40829;
var G__40837 = count__40217_40830;
var G__40838 = (i__40218_40831 + (1));
seq__40215_40828 = G__40835;
chunk__40216_40829 = G__40836;
count__40217_40830 = G__40837;
i__40218_40831 = G__40838;
continue;
} else {
var temp__5804__auto___40839 = cljs.core.seq(seq__40215_40828);
if(temp__5804__auto___40839){
var seq__40215_40840__$1 = temp__5804__auto___40839;
if(cljs.core.chunked_seq_QMARK_(seq__40215_40840__$1)){
var c__5568__auto___40841 = cljs.core.chunk_first(seq__40215_40840__$1);
var G__40842 = cljs.core.chunk_rest(seq__40215_40840__$1);
var G__40843 = c__5568__auto___40841;
var G__40844 = cljs.core.count(c__5568__auto___40841);
var G__40845 = (0);
seq__40215_40828 = G__40842;
chunk__40216_40829 = G__40843;
count__40217_40830 = G__40844;
i__40218_40831 = G__40845;
continue;
} else {
var node_40846 = cljs.core.first(seq__40215_40840__$1);
fragment.appendChild(shadow.dom._to_dom(node_40846));


var G__40847 = cljs.core.next(seq__40215_40840__$1);
var G__40848 = null;
var G__40849 = (0);
var G__40850 = (0);
seq__40215_40828 = G__40847;
chunk__40216_40829 = G__40848;
count__40217_40830 = G__40849;
i__40218_40831 = G__40850;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq40173){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40173));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40232_40852 = cljs.core.seq(scripts);
var chunk__40233_40853 = null;
var count__40234_40854 = (0);
var i__40235_40855 = (0);
while(true){
if((i__40235_40855 < count__40234_40854)){
var vec__40250_40856 = chunk__40233_40853.cljs$core$IIndexed$_nth$arity$2(null, i__40235_40855);
var script_tag_40857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40250_40856,(0),null);
var script_body_40858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40250_40856,(1),null);
eval(script_body_40858);


var G__40859 = seq__40232_40852;
var G__40860 = chunk__40233_40853;
var G__40861 = count__40234_40854;
var G__40862 = (i__40235_40855 + (1));
seq__40232_40852 = G__40859;
chunk__40233_40853 = G__40860;
count__40234_40854 = G__40861;
i__40235_40855 = G__40862;
continue;
} else {
var temp__5804__auto___40863 = cljs.core.seq(seq__40232_40852);
if(temp__5804__auto___40863){
var seq__40232_40864__$1 = temp__5804__auto___40863;
if(cljs.core.chunked_seq_QMARK_(seq__40232_40864__$1)){
var c__5568__auto___40865 = cljs.core.chunk_first(seq__40232_40864__$1);
var G__40866 = cljs.core.chunk_rest(seq__40232_40864__$1);
var G__40867 = c__5568__auto___40865;
var G__40868 = cljs.core.count(c__5568__auto___40865);
var G__40869 = (0);
seq__40232_40852 = G__40866;
chunk__40233_40853 = G__40867;
count__40234_40854 = G__40868;
i__40235_40855 = G__40869;
continue;
} else {
var vec__40258_40870 = cljs.core.first(seq__40232_40864__$1);
var script_tag_40871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40258_40870,(0),null);
var script_body_40872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40258_40870,(1),null);
eval(script_body_40872);


var G__40873 = cljs.core.next(seq__40232_40864__$1);
var G__40874 = null;
var G__40875 = (0);
var G__40876 = (0);
seq__40232_40852 = G__40873;
chunk__40233_40853 = G__40874;
count__40234_40854 = G__40875;
i__40235_40855 = G__40876;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__40261){
var vec__40262 = p__40261;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40262,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40262,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__40272 = arguments.length;
switch (G__40272) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__40290 = cljs.core.seq(style_keys);
var chunk__40291 = null;
var count__40292 = (0);
var i__40293 = (0);
while(true){
if((i__40293 < count__40292)){
var it = chunk__40291.cljs$core$IIndexed$_nth$arity$2(null, i__40293);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40879 = seq__40290;
var G__40880 = chunk__40291;
var G__40881 = count__40292;
var G__40882 = (i__40293 + (1));
seq__40290 = G__40879;
chunk__40291 = G__40880;
count__40292 = G__40881;
i__40293 = G__40882;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40290);
if(temp__5804__auto__){
var seq__40290__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40290__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40290__$1);
var G__40883 = cljs.core.chunk_rest(seq__40290__$1);
var G__40884 = c__5568__auto__;
var G__40885 = cljs.core.count(c__5568__auto__);
var G__40886 = (0);
seq__40290 = G__40883;
chunk__40291 = G__40884;
count__40292 = G__40885;
i__40293 = G__40886;
continue;
} else {
var it = cljs.core.first(seq__40290__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40887 = cljs.core.next(seq__40290__$1);
var G__40888 = null;
var G__40889 = (0);
var G__40890 = (0);
seq__40290 = G__40887;
chunk__40291 = G__40888;
count__40292 = G__40889;
i__40293 = G__40890;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k40316,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__40325 = k40316;
var G__40325__$1 = (((G__40325 instanceof cljs.core.Keyword))?G__40325.fqn:null);
switch (G__40325__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40316,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__40330){
var vec__40331 = p__40330;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40331,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40331,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null, ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40315){
var self__ = this;
var G__40315__$1 = this;
return (new cljs.core.RecordIter((0),G__40315__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40317,other40318){
var self__ = this;
var this40317__$1 = this;
return (((!((other40318 == null)))) && ((((this40317__$1.constructor === other40318.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40317__$1.x,other40318.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40317__$1.y,other40318.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40317__$1.__extmap,other40318.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k40316){
var self__ = this;
var this__5350__auto____$1 = this;
var G__40356 = k40316;
var G__40356__$1 = (((G__40356 instanceof cljs.core.Keyword))?G__40356.fqn:null);
switch (G__40356__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40316);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__40315){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__40361 = cljs.core.keyword_identical_QMARK_;
var expr__40362 = k__5352__auto__;
if(cljs.core.truth_((pred__40361.cljs$core$IFn$_invoke$arity$2 ? pred__40361.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__40362) : pred__40361.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__40362)))){
return (new shadow.dom.Coordinate(G__40315,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40361.cljs$core$IFn$_invoke$arity$2 ? pred__40361.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__40362) : pred__40361.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__40362)))){
return (new shadow.dom.Coordinate(self__.x,G__40315,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__40315),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__40315){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__40315,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__40321){
var extmap__5385__auto__ = (function (){var G__40373 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40321,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__40321)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40373);
} else {
return G__40373;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__40321),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__40321),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k40437,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__40454 = k40437;
var G__40454__$1 = (((G__40454 instanceof cljs.core.Keyword))?G__40454.fqn:null);
switch (G__40454__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40437,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__40455){
var vec__40456 = p__40455;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40456,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40456,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null, ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40436){
var self__ = this;
var G__40436__$1 = this;
return (new cljs.core.RecordIter((0),G__40436__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40438,other40439){
var self__ = this;
var this40438__$1 = this;
return (((!((other40439 == null)))) && ((((this40438__$1.constructor === other40439.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40438__$1.w,other40439.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40438__$1.h,other40439.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40438__$1.__extmap,other40439.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k40437){
var self__ = this;
var this__5350__auto____$1 = this;
var G__40467 = k40437;
var G__40467__$1 = (((G__40467 instanceof cljs.core.Keyword))?G__40467.fqn:null);
switch (G__40467__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40437);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__40436){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__40472 = cljs.core.keyword_identical_QMARK_;
var expr__40473 = k__5352__auto__;
if(cljs.core.truth_((pred__40472.cljs$core$IFn$_invoke$arity$2 ? pred__40472.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__40473) : pred__40472.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__40473)))){
return (new shadow.dom.Size(G__40436,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40472.cljs$core$IFn$_invoke$arity$2 ? pred__40472.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__40473) : pred__40472.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__40473)))){
return (new shadow.dom.Size(self__.w,G__40436,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__40436),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__40436){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40436,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40445){
var extmap__5385__auto__ = (function (){var G__40477 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40445,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40445)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40477);
} else {
return G__40477;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40445),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40445),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__40918 = (i + (1));
var G__40919 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40918;
ret = G__40919;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40495){
var vec__40497 = p__40495;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40497,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40497,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40502 = arguments.length;
switch (G__40502) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__40926 = ps;
var G__40927 = (i + (1));
el__$1 = G__40926;
i = G__40927;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__40530 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40530,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40530,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40530,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40533_40934 = cljs.core.seq(props);
var chunk__40534_40935 = null;
var count__40535_40936 = (0);
var i__40536_40937 = (0);
while(true){
if((i__40536_40937 < count__40535_40936)){
var vec__40547_40938 = chunk__40534_40935.cljs$core$IIndexed$_nth$arity$2(null, i__40536_40937);
var k_40939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40547_40938,(0),null);
var v_40940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40547_40938,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_40939);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40939),v_40940);


var G__40942 = seq__40533_40934;
var G__40943 = chunk__40534_40935;
var G__40944 = count__40535_40936;
var G__40945 = (i__40536_40937 + (1));
seq__40533_40934 = G__40942;
chunk__40534_40935 = G__40943;
count__40535_40936 = G__40944;
i__40536_40937 = G__40945;
continue;
} else {
var temp__5804__auto___40946 = cljs.core.seq(seq__40533_40934);
if(temp__5804__auto___40946){
var seq__40533_40947__$1 = temp__5804__auto___40946;
if(cljs.core.chunked_seq_QMARK_(seq__40533_40947__$1)){
var c__5568__auto___40948 = cljs.core.chunk_first(seq__40533_40947__$1);
var G__40949 = cljs.core.chunk_rest(seq__40533_40947__$1);
var G__40950 = c__5568__auto___40948;
var G__40951 = cljs.core.count(c__5568__auto___40948);
var G__40952 = (0);
seq__40533_40934 = G__40949;
chunk__40534_40935 = G__40950;
count__40535_40936 = G__40951;
i__40536_40937 = G__40952;
continue;
} else {
var vec__40550_40953 = cljs.core.first(seq__40533_40947__$1);
var k_40954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40550_40953,(0),null);
var v_40955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40550_40953,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_40954);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40954),v_40955);


var G__40956 = cljs.core.next(seq__40533_40947__$1);
var G__40957 = null;
var G__40958 = (0);
var G__40959 = (0);
seq__40533_40934 = G__40956;
chunk__40534_40935 = G__40957;
count__40535_40936 = G__40958;
i__40536_40937 = G__40959;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__40555 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40555,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40555,(1),null);
var seq__40558_40961 = cljs.core.seq(node_children);
var chunk__40560_40962 = null;
var count__40561_40963 = (0);
var i__40562_40964 = (0);
while(true){
if((i__40562_40964 < count__40561_40963)){
var child_struct_40965 = chunk__40560_40962.cljs$core$IIndexed$_nth$arity$2(null, i__40562_40964);
if((!((child_struct_40965 == null)))){
if(typeof child_struct_40965 === 'string'){
var text_40966 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40966),child_struct_40965].join(''));
} else {
var children_40967 = shadow.dom.svg_node(child_struct_40965);
if(cljs.core.seq_QMARK_(children_40967)){
var seq__40606_40968 = cljs.core.seq(children_40967);
var chunk__40608_40969 = null;
var count__40609_40970 = (0);
var i__40610_40971 = (0);
while(true){
if((i__40610_40971 < count__40609_40970)){
var child_40972 = chunk__40608_40969.cljs$core$IIndexed$_nth$arity$2(null, i__40610_40971);
if(cljs.core.truth_(child_40972)){
node.appendChild(child_40972);


var G__40973 = seq__40606_40968;
var G__40974 = chunk__40608_40969;
var G__40975 = count__40609_40970;
var G__40976 = (i__40610_40971 + (1));
seq__40606_40968 = G__40973;
chunk__40608_40969 = G__40974;
count__40609_40970 = G__40975;
i__40610_40971 = G__40976;
continue;
} else {
var G__40977 = seq__40606_40968;
var G__40978 = chunk__40608_40969;
var G__40979 = count__40609_40970;
var G__40980 = (i__40610_40971 + (1));
seq__40606_40968 = G__40977;
chunk__40608_40969 = G__40978;
count__40609_40970 = G__40979;
i__40610_40971 = G__40980;
continue;
}
} else {
var temp__5804__auto___40981 = cljs.core.seq(seq__40606_40968);
if(temp__5804__auto___40981){
var seq__40606_40982__$1 = temp__5804__auto___40981;
if(cljs.core.chunked_seq_QMARK_(seq__40606_40982__$1)){
var c__5568__auto___40983 = cljs.core.chunk_first(seq__40606_40982__$1);
var G__40984 = cljs.core.chunk_rest(seq__40606_40982__$1);
var G__40985 = c__5568__auto___40983;
var G__40986 = cljs.core.count(c__5568__auto___40983);
var G__40987 = (0);
seq__40606_40968 = G__40984;
chunk__40608_40969 = G__40985;
count__40609_40970 = G__40986;
i__40610_40971 = G__40987;
continue;
} else {
var child_40988 = cljs.core.first(seq__40606_40982__$1);
if(cljs.core.truth_(child_40988)){
node.appendChild(child_40988);


var G__40990 = cljs.core.next(seq__40606_40982__$1);
var G__40991 = null;
var G__40992 = (0);
var G__40993 = (0);
seq__40606_40968 = G__40990;
chunk__40608_40969 = G__40991;
count__40609_40970 = G__40992;
i__40610_40971 = G__40993;
continue;
} else {
var G__40994 = cljs.core.next(seq__40606_40982__$1);
var G__40995 = null;
var G__40996 = (0);
var G__40997 = (0);
seq__40606_40968 = G__40994;
chunk__40608_40969 = G__40995;
count__40609_40970 = G__40996;
i__40610_40971 = G__40997;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40967);
}
}


var G__40998 = seq__40558_40961;
var G__40999 = chunk__40560_40962;
var G__41000 = count__40561_40963;
var G__41001 = (i__40562_40964 + (1));
seq__40558_40961 = G__40998;
chunk__40560_40962 = G__40999;
count__40561_40963 = G__41000;
i__40562_40964 = G__41001;
continue;
} else {
var G__41003 = seq__40558_40961;
var G__41004 = chunk__40560_40962;
var G__41005 = count__40561_40963;
var G__41006 = (i__40562_40964 + (1));
seq__40558_40961 = G__41003;
chunk__40560_40962 = G__41004;
count__40561_40963 = G__41005;
i__40562_40964 = G__41006;
continue;
}
} else {
var temp__5804__auto___41007 = cljs.core.seq(seq__40558_40961);
if(temp__5804__auto___41007){
var seq__40558_41008__$1 = temp__5804__auto___41007;
if(cljs.core.chunked_seq_QMARK_(seq__40558_41008__$1)){
var c__5568__auto___41009 = cljs.core.chunk_first(seq__40558_41008__$1);
var G__41010 = cljs.core.chunk_rest(seq__40558_41008__$1);
var G__41011 = c__5568__auto___41009;
var G__41012 = cljs.core.count(c__5568__auto___41009);
var G__41013 = (0);
seq__40558_40961 = G__41010;
chunk__40560_40962 = G__41011;
count__40561_40963 = G__41012;
i__40562_40964 = G__41013;
continue;
} else {
var child_struct_41014 = cljs.core.first(seq__40558_41008__$1);
if((!((child_struct_41014 == null)))){
if(typeof child_struct_41014 === 'string'){
var text_41015 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41015),child_struct_41014].join(''));
} else {
var children_41016 = shadow.dom.svg_node(child_struct_41014);
if(cljs.core.seq_QMARK_(children_41016)){
var seq__40637_41017 = cljs.core.seq(children_41016);
var chunk__40639_41018 = null;
var count__40640_41019 = (0);
var i__40641_41020 = (0);
while(true){
if((i__40641_41020 < count__40640_41019)){
var child_41022 = chunk__40639_41018.cljs$core$IIndexed$_nth$arity$2(null, i__40641_41020);
if(cljs.core.truth_(child_41022)){
node.appendChild(child_41022);


var G__41023 = seq__40637_41017;
var G__41024 = chunk__40639_41018;
var G__41025 = count__40640_41019;
var G__41026 = (i__40641_41020 + (1));
seq__40637_41017 = G__41023;
chunk__40639_41018 = G__41024;
count__40640_41019 = G__41025;
i__40641_41020 = G__41026;
continue;
} else {
var G__41027 = seq__40637_41017;
var G__41028 = chunk__40639_41018;
var G__41029 = count__40640_41019;
var G__41030 = (i__40641_41020 + (1));
seq__40637_41017 = G__41027;
chunk__40639_41018 = G__41028;
count__40640_41019 = G__41029;
i__40641_41020 = G__41030;
continue;
}
} else {
var temp__5804__auto___41031__$1 = cljs.core.seq(seq__40637_41017);
if(temp__5804__auto___41031__$1){
var seq__40637_41032__$1 = temp__5804__auto___41031__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40637_41032__$1)){
var c__5568__auto___41033 = cljs.core.chunk_first(seq__40637_41032__$1);
var G__41034 = cljs.core.chunk_rest(seq__40637_41032__$1);
var G__41035 = c__5568__auto___41033;
var G__41036 = cljs.core.count(c__5568__auto___41033);
var G__41037 = (0);
seq__40637_41017 = G__41034;
chunk__40639_41018 = G__41035;
count__40640_41019 = G__41036;
i__40641_41020 = G__41037;
continue;
} else {
var child_41039 = cljs.core.first(seq__40637_41032__$1);
if(cljs.core.truth_(child_41039)){
node.appendChild(child_41039);


var G__41040 = cljs.core.next(seq__40637_41032__$1);
var G__41041 = null;
var G__41042 = (0);
var G__41043 = (0);
seq__40637_41017 = G__41040;
chunk__40639_41018 = G__41041;
count__40640_41019 = G__41042;
i__40641_41020 = G__41043;
continue;
} else {
var G__41044 = cljs.core.next(seq__40637_41032__$1);
var G__41045 = null;
var G__41046 = (0);
var G__41047 = (0);
seq__40637_41017 = G__41044;
chunk__40639_41018 = G__41045;
count__40640_41019 = G__41046;
i__40641_41020 = G__41047;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41016);
}
}


var G__41048 = cljs.core.next(seq__40558_41008__$1);
var G__41049 = null;
var G__41050 = (0);
var G__41051 = (0);
seq__40558_40961 = G__41048;
chunk__40560_40962 = G__41049;
count__40561_40963 = G__41050;
i__40562_40964 = G__41051;
continue;
} else {
var G__41052 = cljs.core.next(seq__40558_41008__$1);
var G__41053 = null;
var G__41054 = (0);
var G__41055 = (0);
seq__40558_40961 = G__41052;
chunk__40560_40962 = G__41053;
count__40561_40963 = G__41054;
i__40562_40964 = G__41055;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41056 = arguments.length;
var i__5770__auto___41057 = (0);
while(true){
if((i__5770__auto___41057 < len__5769__auto___41056)){
args__5775__auto__.push((arguments[i__5770__auto___41057]));

var G__41058 = (i__5770__auto___41057 + (1));
i__5770__auto___41057 = G__41058;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40646){
var G__40647 = cljs.core.first(seq40646);
var seq40646__$1 = cljs.core.next(seq40646);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40647,seq40646__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__40661 = arguments.length;
switch (G__40661) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__37043__auto___41061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_40666){
var state_val_40667 = (state_40666[(1)]);
if((state_val_40667 === (1))){
var state_40666__$1 = state_40666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40666__$1,(2),once_or_cleanup);
} else {
if((state_val_40667 === (2))){
var inst_40663 = (state_40666[(2)]);
var inst_40664 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40666__$1 = (function (){var statearr_40668 = state_40666;
(statearr_40668[(7)] = inst_40663);

return statearr_40668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40666__$1,inst_40664);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36710__auto__ = null;
var shadow$dom$state_machine__36710__auto____0 = (function (){
var statearr_40669 = [null,null,null,null,null,null,null,null];
(statearr_40669[(0)] = shadow$dom$state_machine__36710__auto__);

(statearr_40669[(1)] = (1));

return statearr_40669;
});
var shadow$dom$state_machine__36710__auto____1 = (function (state_40666){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_40666);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e40670){var ex__36713__auto__ = e40670;
var statearr_40671_41064 = state_40666;
(statearr_40671_41064[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_40666[(4)]))){
var statearr_40672_41065 = state_40666;
(statearr_40672_41065[(1)] = cljs.core.first((state_40666[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41066 = state_40666;
state_40666 = G__41066;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
shadow$dom$state_machine__36710__auto__ = function(state_40666){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36710__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36710__auto____1.call(this,state_40666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36710__auto____0;
shadow$dom$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36710__auto____1;
return shadow$dom$state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_40673 = f__37044__auto__();
(statearr_40673[(6)] = c__37043__auto___41061);

return statearr_40673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
