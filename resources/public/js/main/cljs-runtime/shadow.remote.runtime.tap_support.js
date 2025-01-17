goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__40571,p__40572){
var map__40573 = p__40571;
var map__40573__$1 = cljs.core.__destructure_map(map__40573);
var svc = map__40573__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40573__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40573__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40573__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40574 = p__40572;
var map__40574__$1 = cljs.core.__destructure_map(map__40574);
var msg = map__40574__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40574__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40574__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40574__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40574__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__40586,p__40587){
var map__40589 = p__40586;
var map__40589__$1 = cljs.core.__destructure_map(map__40589);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40589__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__40590 = p__40587;
var map__40590__$1 = cljs.core.__destructure_map(map__40590);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40590__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__40593,p__40594){
var map__40596 = p__40593;
var map__40596__$1 = cljs.core.__destructure_map(map__40596);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40596__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40596__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40597 = p__40594;
var map__40597__$1 = cljs.core.__destructure_map(map__40597);
var msg = map__40597__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40597__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__40600,tid){
var map__40601 = p__40600;
var map__40601__$1 = cljs.core.__destructure_map(map__40601);
var svc = map__40601__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40601__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__40617 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__40618 = null;
var count__40619 = (0);
var i__40620 = (0);
while(true){
if((i__40620 < count__40619)){
var vec__40631 = chunk__40618.cljs$core$IIndexed$_nth$arity$2(null, i__40620);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40631,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40631,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40648 = seq__40617;
var G__40649 = chunk__40618;
var G__40650 = count__40619;
var G__40651 = (i__40620 + (1));
seq__40617 = G__40648;
chunk__40618 = G__40649;
count__40619 = G__40650;
i__40620 = G__40651;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40617);
if(temp__5804__auto__){
var seq__40617__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40617__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40617__$1);
var G__40652 = cljs.core.chunk_rest(seq__40617__$1);
var G__40653 = c__5568__auto__;
var G__40654 = cljs.core.count(c__5568__auto__);
var G__40655 = (0);
seq__40617 = G__40652;
chunk__40618 = G__40653;
count__40619 = G__40654;
i__40620 = G__40655;
continue;
} else {
var vec__40634 = cljs.core.first(seq__40617__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40634,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40634,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40656 = cljs.core.next(seq__40617__$1);
var G__40657 = null;
var G__40658 = (0);
var G__40659 = (0);
seq__40617 = G__40656;
chunk__40618 = G__40657;
count__40619 = G__40658;
i__40620 = G__40659;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__40602_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__40602_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__40603_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__40603_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__40604_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__40604_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__40605_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__40605_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__40644){
var map__40645 = p__40644;
var map__40645__$1 = cljs.core.__destructure_map(map__40645);
var svc = map__40645__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40645__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40645__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
