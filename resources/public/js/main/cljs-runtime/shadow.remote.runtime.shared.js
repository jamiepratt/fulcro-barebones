goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__36845){
var map__36849 = p__36845;
var map__36849__$1 = cljs.core.__destructure_map(map__36849);
var runtime = map__36849__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36849__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_37033 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_37033)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__36868 = runtime;
var G__36869 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_37033);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__36868,G__36869) : shadow.remote.runtime.shared.process.call(null, G__36868,G__36869));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__36875,res){
var map__36876 = p__36875;
var map__36876__$1 = cljs.core.__destructure_map(map__36876);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36876__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36876__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__36878 = res;
var G__36878__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36878,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__36878);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36878__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__36878__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__36886 = arguments.length;
switch (G__36886) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__36904,msg,handlers,timeout_after_ms){
var map__36905 = p__36904;
var map__36905__$1 = cljs.core.__destructure_map(map__36905);
var runtime = map__36905__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36905__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37040 = arguments.length;
var i__5770__auto___37041 = (0);
while(true){
if((i__5770__auto___37041 < len__5769__auto___37040)){
args__5775__auto__.push((arguments[i__5770__auto___37041]));

var G__37042 = (i__5770__auto___37041 + (1));
i__5770__auto___37041 = G__37042;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__36914,ev,args){
var map__36915 = p__36914;
var map__36915__$1 = cljs.core.__destructure_map(map__36915);
var runtime = map__36915__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36915__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__36916 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36919 = null;
var count__36920 = (0);
var i__36921 = (0);
while(true){
if((i__36921 < count__36920)){
var ext = chunk__36919.cljs$core$IIndexed$_nth$arity$2(null, i__36921);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37047 = seq__36916;
var G__37048 = chunk__36919;
var G__37049 = count__36920;
var G__37050 = (i__36921 + (1));
seq__36916 = G__37047;
chunk__36919 = G__37048;
count__36920 = G__37049;
i__36921 = G__37050;
continue;
} else {
var G__37051 = seq__36916;
var G__37052 = chunk__36919;
var G__37053 = count__36920;
var G__37054 = (i__36921 + (1));
seq__36916 = G__37051;
chunk__36919 = G__37052;
count__36920 = G__37053;
i__36921 = G__37054;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36916);
if(temp__5804__auto__){
var seq__36916__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36916__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36916__$1);
var G__37055 = cljs.core.chunk_rest(seq__36916__$1);
var G__37056 = c__5568__auto__;
var G__37057 = cljs.core.count(c__5568__auto__);
var G__37058 = (0);
seq__36916 = G__37055;
chunk__36919 = G__37056;
count__36920 = G__37057;
i__36921 = G__37058;
continue;
} else {
var ext = cljs.core.first(seq__36916__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37059 = cljs.core.next(seq__36916__$1);
var G__37060 = null;
var G__37061 = (0);
var G__37062 = (0);
seq__36916 = G__37059;
chunk__36919 = G__37060;
count__36920 = G__37061;
i__36921 = G__37062;
continue;
} else {
var G__37065 = cljs.core.next(seq__36916__$1);
var G__37066 = null;
var G__37067 = (0);
var G__37068 = (0);
seq__36916 = G__37065;
chunk__36919 = G__37066;
count__36920 = G__37067;
i__36921 = G__37068;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq36906){
var G__36907 = cljs.core.first(seq36906);
var seq36906__$1 = cljs.core.next(seq36906);
var G__36908 = cljs.core.first(seq36906__$1);
var seq36906__$2 = cljs.core.next(seq36906__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36907,G__36908,seq36906__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__36928,p__36929){
var map__36930 = p__36928;
var map__36930__$1 = cljs.core.__destructure_map(map__36930);
var runtime = map__36930__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36930__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36931 = p__36929;
var map__36931__$1 = cljs.core.__destructure_map(map__36931);
var msg = map__36931__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36931__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__36932 = cljs.core.deref(state_ref);
var map__36932__$1 = cljs.core.__destructure_map(map__36932);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36932__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36932__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__36933,msg){
var map__36934 = p__36933;
var map__36934__$1 = cljs.core.__destructure_map(map__36934);
var runtime = map__36934__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36934__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__36935,key,p__36936){
var map__36937 = p__36935;
var map__36937__$1 = cljs.core.__destructure_map(map__36937);
var state = map__36937__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36937__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__36938 = p__36936;
var map__36938__$1 = cljs.core.__destructure_map(map__36938);
var spec = map__36938__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36938__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36938__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__36943,key,spec){
var map__36944 = p__36943;
var map__36944__$1 = cljs.core.__destructure_map(map__36944);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36944__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__36945_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__36945_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__36946_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__36946_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__36947_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__36947_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__36948_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__36948_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__36949_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__36949_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__36951,key){
var map__36952 = p__36951;
var map__36952__$1 = cljs.core.__destructure_map(map__36952);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36952__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__36954,msg){
var map__36955 = p__36954;
var map__36955__$1 = cljs.core.__destructure_map(map__36955);
var runtime = map__36955__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36955__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__36956,p__36957){
var map__36958 = p__36956;
var map__36958__$1 = cljs.core.__destructure_map(map__36958);
var runtime = map__36958__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36958__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36959 = p__36957;
var map__36959__$1 = cljs.core.__destructure_map(map__36959);
var msg = map__36959__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__36960 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36962 = null;
var count__36963 = (0);
var i__36964 = (0);
while(true){
if((i__36964 < count__36963)){
var map__36970 = chunk__36962.cljs$core$IIndexed$_nth$arity$2(null, i__36964);
var map__36970__$1 = cljs.core.__destructure_map(map__36970);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36970__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__37111 = seq__36960;
var G__37112 = chunk__36962;
var G__37113 = count__36963;
var G__37114 = (i__36964 + (1));
seq__36960 = G__37111;
chunk__36962 = G__37112;
count__36963 = G__37113;
i__36964 = G__37114;
continue;
} else {
var G__37115 = seq__36960;
var G__37116 = chunk__36962;
var G__37117 = count__36963;
var G__37118 = (i__36964 + (1));
seq__36960 = G__37115;
chunk__36962 = G__37116;
count__36963 = G__37117;
i__36964 = G__37118;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36960);
if(temp__5804__auto__){
var seq__36960__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36960__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36960__$1);
var G__37119 = cljs.core.chunk_rest(seq__36960__$1);
var G__37120 = c__5568__auto__;
var G__37121 = cljs.core.count(c__5568__auto__);
var G__37122 = (0);
seq__36960 = G__37119;
chunk__36962 = G__37120;
count__36963 = G__37121;
i__36964 = G__37122;
continue;
} else {
var map__36971 = cljs.core.first(seq__36960__$1);
var map__36971__$1 = cljs.core.__destructure_map(map__36971);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36971__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__37123 = cljs.core.next(seq__36960__$1);
var G__37124 = null;
var G__37125 = (0);
var G__37126 = (0);
seq__36960 = G__37123;
chunk__36962 = G__37124;
count__36963 = G__37125;
i__36964 = G__37126;
continue;
} else {
var G__37127 = cljs.core.next(seq__36960__$1);
var G__37128 = null;
var G__37129 = (0);
var G__37130 = (0);
seq__36960 = G__37127;
chunk__36962 = G__37128;
count__36963 = G__37129;
i__36964 = G__37130;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
