goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42416 = arguments.length;
var i__5770__auto___42417 = (0);
while(true){
if((i__5770__auto___42417 < len__5769__auto___42416)){
args__5775__auto__.push((arguments[i__5770__auto___42417]));

var G__42418 = (i__5770__auto___42417 + (1));
i__5770__auto___42417 = G__42418;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41887){
var G__41888 = cljs.core.first(seq41887);
var seq41887__$1 = cljs.core.next(seq41887);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41888,seq41887__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41890 = cljs.core.seq(sources);
var chunk__41891 = null;
var count__41892 = (0);
var i__41893 = (0);
while(true){
if((i__41893 < count__41892)){
var map__41900 = chunk__41891.cljs$core$IIndexed$_nth$arity$2(null, i__41893);
var map__41900__$1 = cljs.core.__destructure_map(map__41900);
var src = map__41900__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41900__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41900__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41900__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41900__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41901){var e_42424 = e41901;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42424);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42424.message)].join('')));
}

var G__42425 = seq__41890;
var G__42426 = chunk__41891;
var G__42427 = count__41892;
var G__42428 = (i__41893 + (1));
seq__41890 = G__42425;
chunk__41891 = G__42426;
count__41892 = G__42427;
i__41893 = G__42428;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41890);
if(temp__5804__auto__){
var seq__41890__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41890__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41890__$1);
var G__42429 = cljs.core.chunk_rest(seq__41890__$1);
var G__42430 = c__5568__auto__;
var G__42431 = cljs.core.count(c__5568__auto__);
var G__42432 = (0);
seq__41890 = G__42429;
chunk__41891 = G__42430;
count__41892 = G__42431;
i__41893 = G__42432;
continue;
} else {
var map__41904 = cljs.core.first(seq__41890__$1);
var map__41904__$1 = cljs.core.__destructure_map(map__41904);
var src = map__41904__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41904__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41904__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41904__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41904__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41909){var e_42433 = e41909;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42433);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42433.message)].join('')));
}

var G__42434 = cljs.core.next(seq__41890__$1);
var G__42435 = null;
var G__42436 = (0);
var G__42437 = (0);
seq__41890 = G__42434;
chunk__41891 = G__42435;
count__41892 = G__42436;
i__41893 = G__42437;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__41916 = cljs.core.seq(js_requires);
var chunk__41917 = null;
var count__41918 = (0);
var i__41919 = (0);
while(true){
if((i__41919 < count__41918)){
var js_ns = chunk__41917.cljs$core$IIndexed$_nth$arity$2(null, i__41919);
var require_str_42451 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42451);


var G__42453 = seq__41916;
var G__42454 = chunk__41917;
var G__42455 = count__41918;
var G__42456 = (i__41919 + (1));
seq__41916 = G__42453;
chunk__41917 = G__42454;
count__41918 = G__42455;
i__41919 = G__42456;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41916);
if(temp__5804__auto__){
var seq__41916__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41916__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41916__$1);
var G__42457 = cljs.core.chunk_rest(seq__41916__$1);
var G__42458 = c__5568__auto__;
var G__42459 = cljs.core.count(c__5568__auto__);
var G__42460 = (0);
seq__41916 = G__42457;
chunk__41917 = G__42458;
count__41918 = G__42459;
i__41919 = G__42460;
continue;
} else {
var js_ns = cljs.core.first(seq__41916__$1);
var require_str_42461 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42461);


var G__42462 = cljs.core.next(seq__41916__$1);
var G__42463 = null;
var G__42464 = (0);
var G__42465 = (0);
seq__41916 = G__42462;
chunk__41917 = G__42463;
count__41918 = G__42464;
i__41919 = G__42465;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41923){
var map__41925 = p__41923;
var map__41925__$1 = cljs.core.__destructure_map(map__41925);
var msg = map__41925__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41925__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41925__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41931(s__41932){
return (new cljs.core.LazySeq(null,(function (){
var s__41932__$1 = s__41932;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41932__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__41937 = cljs.core.first(xs__6360__auto__);
var map__41937__$1 = cljs.core.__destructure_map(map__41937);
var src = map__41937__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41937__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41937__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__41932__$1,map__41937,map__41937__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41925,map__41925__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41931_$_iter__41933(s__41934){
return (new cljs.core.LazySeq(null,((function (s__41932__$1,map__41937,map__41937__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41925,map__41925__$1,msg,info,reload_info){
return (function (){
var s__41934__$1 = s__41934;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__41934__$1);
if(temp__5804__auto____$1){
var s__41934__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41934__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41934__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41936 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41935 = (0);
while(true){
if((i__41935 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__41935);
cljs.core.chunk_append(b__41936,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42468 = (i__41935 + (1));
i__41935 = G__42468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41936),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41931_$_iter__41933(cljs.core.chunk_rest(s__41934__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41936),null);
}
} else {
var warning = cljs.core.first(s__41934__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41931_$_iter__41933(cljs.core.rest(s__41934__$2)));
}
} else {
return null;
}
break;
}
});})(s__41932__$1,map__41937,map__41937__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41925,map__41925__$1,msg,info,reload_info))
,null,null));
});})(s__41932__$1,map__41937,map__41937__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41925,map__41925__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41931(cljs.core.rest(s__41932__$1)));
} else {
var G__42469 = cljs.core.rest(s__41932__$1);
s__41932__$1 = G__42469;
continue;
}
} else {
var G__42473 = cljs.core.rest(s__41932__$1);
s__41932__$1 = G__42473;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__41938_42474 = cljs.core.seq(warnings);
var chunk__41939_42475 = null;
var count__41940_42476 = (0);
var i__41941_42477 = (0);
while(true){
if((i__41941_42477 < count__41940_42476)){
var map__41954_42478 = chunk__41939_42475.cljs$core$IIndexed$_nth$arity$2(null, i__41941_42477);
var map__41954_42479__$1 = cljs.core.__destructure_map(map__41954_42478);
var w_42480 = map__41954_42479__$1;
var msg_42481__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41954_42479__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41954_42479__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41954_42479__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41954_42479__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42484)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42482),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42483),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42481__$1)].join(''));


var G__42485 = seq__41938_42474;
var G__42486 = chunk__41939_42475;
var G__42487 = count__41940_42476;
var G__42488 = (i__41941_42477 + (1));
seq__41938_42474 = G__42485;
chunk__41939_42475 = G__42486;
count__41940_42476 = G__42487;
i__41941_42477 = G__42488;
continue;
} else {
var temp__5804__auto___42489 = cljs.core.seq(seq__41938_42474);
if(temp__5804__auto___42489){
var seq__41938_42490__$1 = temp__5804__auto___42489;
if(cljs.core.chunked_seq_QMARK_(seq__41938_42490__$1)){
var c__5568__auto___42491 = cljs.core.chunk_first(seq__41938_42490__$1);
var G__42492 = cljs.core.chunk_rest(seq__41938_42490__$1);
var G__42493 = c__5568__auto___42491;
var G__42494 = cljs.core.count(c__5568__auto___42491);
var G__42495 = (0);
seq__41938_42474 = G__42492;
chunk__41939_42475 = G__42493;
count__41940_42476 = G__42494;
i__41941_42477 = G__42495;
continue;
} else {
var map__41955_42496 = cljs.core.first(seq__41938_42490__$1);
var map__41955_42497__$1 = cljs.core.__destructure_map(map__41955_42496);
var w_42498 = map__41955_42497__$1;
var msg_42499__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41955_42497__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41955_42497__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41955_42497__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41955_42497__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42502)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42500),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42501),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42499__$1)].join(''));


var G__42504 = cljs.core.next(seq__41938_42490__$1);
var G__42505 = null;
var G__42506 = (0);
var G__42507 = (0);
seq__41938_42474 = G__42504;
chunk__41939_42475 = G__42505;
count__41940_42476 = G__42506;
i__41941_42477 = G__42507;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41922_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41922_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41956){
var map__41957 = p__41956;
var map__41957__$1 = cljs.core.__destructure_map(map__41957);
var msg = map__41957__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41957__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41957__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__41958 = cljs.core.seq(updates);
var chunk__41960 = null;
var count__41961 = (0);
var i__41962 = (0);
while(true){
if((i__41962 < count__41961)){
var path = chunk__41960.cljs$core$IIndexed$_nth$arity$2(null, i__41962);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42120_42509 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42124_42510 = null;
var count__42125_42511 = (0);
var i__42126_42512 = (0);
while(true){
if((i__42126_42512 < count__42125_42511)){
var node_42513 = chunk__42124_42510.cljs$core$IIndexed$_nth$arity$2(null, i__42126_42512);
if(cljs.core.not(node_42513.shadow$old)){
var path_match_42514 = shadow.cljs.devtools.client.browser.match_paths(node_42513.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42514)){
var new_link_42515 = (function (){var G__42169 = node_42513.cloneNode(true);
G__42169.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42514),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42169;
})();
(node_42513.shadow$old = true);

(new_link_42515.onload = ((function (seq__42120_42509,chunk__42124_42510,count__42125_42511,i__42126_42512,seq__41958,chunk__41960,count__41961,i__41962,new_link_42515,path_match_42514,node_42513,path,map__41957,map__41957__$1,msg,updates,reload_info){
return (function (e){
var seq__42170_42516 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42172_42517 = null;
var count__42173_42518 = (0);
var i__42174_42519 = (0);
while(true){
if((i__42174_42519 < count__42173_42518)){
var map__42178_42520 = chunk__42172_42517.cljs$core$IIndexed$_nth$arity$2(null, i__42174_42519);
var map__42178_42521__$1 = cljs.core.__destructure_map(map__42178_42520);
var task_42522 = map__42178_42521__$1;
var fn_str_42523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42178_42521__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42178_42521__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42526 = goog.getObjectByName(fn_str_42523,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42524)].join(''));

(fn_obj_42526.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42526.cljs$core$IFn$_invoke$arity$2(path,new_link_42515) : fn_obj_42526.call(null, path,new_link_42515));


var G__42527 = seq__42170_42516;
var G__42528 = chunk__42172_42517;
var G__42529 = count__42173_42518;
var G__42530 = (i__42174_42519 + (1));
seq__42170_42516 = G__42527;
chunk__42172_42517 = G__42528;
count__42173_42518 = G__42529;
i__42174_42519 = G__42530;
continue;
} else {
var temp__5804__auto___42531 = cljs.core.seq(seq__42170_42516);
if(temp__5804__auto___42531){
var seq__42170_42532__$1 = temp__5804__auto___42531;
if(cljs.core.chunked_seq_QMARK_(seq__42170_42532__$1)){
var c__5568__auto___42533 = cljs.core.chunk_first(seq__42170_42532__$1);
var G__42534 = cljs.core.chunk_rest(seq__42170_42532__$1);
var G__42535 = c__5568__auto___42533;
var G__42536 = cljs.core.count(c__5568__auto___42533);
var G__42537 = (0);
seq__42170_42516 = G__42534;
chunk__42172_42517 = G__42535;
count__42173_42518 = G__42536;
i__42174_42519 = G__42537;
continue;
} else {
var map__42182_42538 = cljs.core.first(seq__42170_42532__$1);
var map__42182_42539__$1 = cljs.core.__destructure_map(map__42182_42538);
var task_42540 = map__42182_42539__$1;
var fn_str_42541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42182_42539__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42182_42539__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42543 = goog.getObjectByName(fn_str_42541,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42542)].join(''));

(fn_obj_42543.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42543.cljs$core$IFn$_invoke$arity$2(path,new_link_42515) : fn_obj_42543.call(null, path,new_link_42515));


var G__42544 = cljs.core.next(seq__42170_42532__$1);
var G__42545 = null;
var G__42546 = (0);
var G__42547 = (0);
seq__42170_42516 = G__42544;
chunk__42172_42517 = G__42545;
count__42173_42518 = G__42546;
i__42174_42519 = G__42547;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42513);
});})(seq__42120_42509,chunk__42124_42510,count__42125_42511,i__42126_42512,seq__41958,chunk__41960,count__41961,i__41962,new_link_42515,path_match_42514,node_42513,path,map__41957,map__41957__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42514], 0));

goog.dom.insertSiblingAfter(new_link_42515,node_42513);


var G__42548 = seq__42120_42509;
var G__42549 = chunk__42124_42510;
var G__42550 = count__42125_42511;
var G__42551 = (i__42126_42512 + (1));
seq__42120_42509 = G__42548;
chunk__42124_42510 = G__42549;
count__42125_42511 = G__42550;
i__42126_42512 = G__42551;
continue;
} else {
var G__42552 = seq__42120_42509;
var G__42553 = chunk__42124_42510;
var G__42554 = count__42125_42511;
var G__42555 = (i__42126_42512 + (1));
seq__42120_42509 = G__42552;
chunk__42124_42510 = G__42553;
count__42125_42511 = G__42554;
i__42126_42512 = G__42555;
continue;
}
} else {
var G__42556 = seq__42120_42509;
var G__42557 = chunk__42124_42510;
var G__42558 = count__42125_42511;
var G__42559 = (i__42126_42512 + (1));
seq__42120_42509 = G__42556;
chunk__42124_42510 = G__42557;
count__42125_42511 = G__42558;
i__42126_42512 = G__42559;
continue;
}
} else {
var temp__5804__auto___42560 = cljs.core.seq(seq__42120_42509);
if(temp__5804__auto___42560){
var seq__42120_42561__$1 = temp__5804__auto___42560;
if(cljs.core.chunked_seq_QMARK_(seq__42120_42561__$1)){
var c__5568__auto___42562 = cljs.core.chunk_first(seq__42120_42561__$1);
var G__42563 = cljs.core.chunk_rest(seq__42120_42561__$1);
var G__42564 = c__5568__auto___42562;
var G__42565 = cljs.core.count(c__5568__auto___42562);
var G__42566 = (0);
seq__42120_42509 = G__42563;
chunk__42124_42510 = G__42564;
count__42125_42511 = G__42565;
i__42126_42512 = G__42566;
continue;
} else {
var node_42567 = cljs.core.first(seq__42120_42561__$1);
if(cljs.core.not(node_42567.shadow$old)){
var path_match_42568 = shadow.cljs.devtools.client.browser.match_paths(node_42567.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42568)){
var new_link_42569 = (function (){var G__42185 = node_42567.cloneNode(true);
G__42185.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42568),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42185;
})();
(node_42567.shadow$old = true);

(new_link_42569.onload = ((function (seq__42120_42509,chunk__42124_42510,count__42125_42511,i__42126_42512,seq__41958,chunk__41960,count__41961,i__41962,new_link_42569,path_match_42568,node_42567,seq__42120_42561__$1,temp__5804__auto___42560,path,map__41957,map__41957__$1,msg,updates,reload_info){
return (function (e){
var seq__42192_42570 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42194_42571 = null;
var count__42195_42572 = (0);
var i__42196_42573 = (0);
while(true){
if((i__42196_42573 < count__42195_42572)){
var map__42214_42574 = chunk__42194_42571.cljs$core$IIndexed$_nth$arity$2(null, i__42196_42573);
var map__42214_42575__$1 = cljs.core.__destructure_map(map__42214_42574);
var task_42576 = map__42214_42575__$1;
var fn_str_42577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42214_42575__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42214_42575__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42579 = goog.getObjectByName(fn_str_42577,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42578)].join(''));

(fn_obj_42579.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42579.cljs$core$IFn$_invoke$arity$2(path,new_link_42569) : fn_obj_42579.call(null, path,new_link_42569));


var G__42580 = seq__42192_42570;
var G__42581 = chunk__42194_42571;
var G__42582 = count__42195_42572;
var G__42583 = (i__42196_42573 + (1));
seq__42192_42570 = G__42580;
chunk__42194_42571 = G__42581;
count__42195_42572 = G__42582;
i__42196_42573 = G__42583;
continue;
} else {
var temp__5804__auto___42584__$1 = cljs.core.seq(seq__42192_42570);
if(temp__5804__auto___42584__$1){
var seq__42192_42586__$1 = temp__5804__auto___42584__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42192_42586__$1)){
var c__5568__auto___42587 = cljs.core.chunk_first(seq__42192_42586__$1);
var G__42588 = cljs.core.chunk_rest(seq__42192_42586__$1);
var G__42589 = c__5568__auto___42587;
var G__42590 = cljs.core.count(c__5568__auto___42587);
var G__42591 = (0);
seq__42192_42570 = G__42588;
chunk__42194_42571 = G__42589;
count__42195_42572 = G__42590;
i__42196_42573 = G__42591;
continue;
} else {
var map__42216_42592 = cljs.core.first(seq__42192_42586__$1);
var map__42216_42593__$1 = cljs.core.__destructure_map(map__42216_42592);
var task_42594 = map__42216_42593__$1;
var fn_str_42595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42216_42593__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42216_42593__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42597 = goog.getObjectByName(fn_str_42595,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42596)].join(''));

(fn_obj_42597.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42597.cljs$core$IFn$_invoke$arity$2(path,new_link_42569) : fn_obj_42597.call(null, path,new_link_42569));


var G__42599 = cljs.core.next(seq__42192_42586__$1);
var G__42600 = null;
var G__42601 = (0);
var G__42602 = (0);
seq__42192_42570 = G__42599;
chunk__42194_42571 = G__42600;
count__42195_42572 = G__42601;
i__42196_42573 = G__42602;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42567);
});})(seq__42120_42509,chunk__42124_42510,count__42125_42511,i__42126_42512,seq__41958,chunk__41960,count__41961,i__41962,new_link_42569,path_match_42568,node_42567,seq__42120_42561__$1,temp__5804__auto___42560,path,map__41957,map__41957__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42568], 0));

goog.dom.insertSiblingAfter(new_link_42569,node_42567);


var G__42603 = cljs.core.next(seq__42120_42561__$1);
var G__42604 = null;
var G__42605 = (0);
var G__42606 = (0);
seq__42120_42509 = G__42603;
chunk__42124_42510 = G__42604;
count__42125_42511 = G__42605;
i__42126_42512 = G__42606;
continue;
} else {
var G__42607 = cljs.core.next(seq__42120_42561__$1);
var G__42608 = null;
var G__42609 = (0);
var G__42610 = (0);
seq__42120_42509 = G__42607;
chunk__42124_42510 = G__42608;
count__42125_42511 = G__42609;
i__42126_42512 = G__42610;
continue;
}
} else {
var G__42611 = cljs.core.next(seq__42120_42561__$1);
var G__42612 = null;
var G__42613 = (0);
var G__42614 = (0);
seq__42120_42509 = G__42611;
chunk__42124_42510 = G__42612;
count__42125_42511 = G__42613;
i__42126_42512 = G__42614;
continue;
}
}
} else {
}
}
break;
}


var G__42615 = seq__41958;
var G__42616 = chunk__41960;
var G__42617 = count__41961;
var G__42618 = (i__41962 + (1));
seq__41958 = G__42615;
chunk__41960 = G__42616;
count__41961 = G__42617;
i__41962 = G__42618;
continue;
} else {
var G__42619 = seq__41958;
var G__42620 = chunk__41960;
var G__42621 = count__41961;
var G__42622 = (i__41962 + (1));
seq__41958 = G__42619;
chunk__41960 = G__42620;
count__41961 = G__42621;
i__41962 = G__42622;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41958);
if(temp__5804__auto__){
var seq__41958__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41958__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41958__$1);
var G__42623 = cljs.core.chunk_rest(seq__41958__$1);
var G__42624 = c__5568__auto__;
var G__42625 = cljs.core.count(c__5568__auto__);
var G__42626 = (0);
seq__41958 = G__42623;
chunk__41960 = G__42624;
count__41961 = G__42625;
i__41962 = G__42626;
continue;
} else {
var path = cljs.core.first(seq__41958__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42218_42630 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42222_42631 = null;
var count__42223_42632 = (0);
var i__42224_42633 = (0);
while(true){
if((i__42224_42633 < count__42223_42632)){
var node_42634 = chunk__42222_42631.cljs$core$IIndexed$_nth$arity$2(null, i__42224_42633);
if(cljs.core.not(node_42634.shadow$old)){
var path_match_42635 = shadow.cljs.devtools.client.browser.match_paths(node_42634.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42635)){
var new_link_42636 = (function (){var G__42269 = node_42634.cloneNode(true);
G__42269.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42635),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42269;
})();
(node_42634.shadow$old = true);

(new_link_42636.onload = ((function (seq__42218_42630,chunk__42222_42631,count__42223_42632,i__42224_42633,seq__41958,chunk__41960,count__41961,i__41962,new_link_42636,path_match_42635,node_42634,path,seq__41958__$1,temp__5804__auto__,map__41957,map__41957__$1,msg,updates,reload_info){
return (function (e){
var seq__42276_42637 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42278_42638 = null;
var count__42279_42639 = (0);
var i__42280_42640 = (0);
while(true){
if((i__42280_42640 < count__42279_42639)){
var map__42287_42641 = chunk__42278_42638.cljs$core$IIndexed$_nth$arity$2(null, i__42280_42640);
var map__42287_42642__$1 = cljs.core.__destructure_map(map__42287_42641);
var task_42643 = map__42287_42642__$1;
var fn_str_42645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42287_42642__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42287_42642__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42648 = goog.getObjectByName(fn_str_42645,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42646)].join(''));

(fn_obj_42648.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42648.cljs$core$IFn$_invoke$arity$2(path,new_link_42636) : fn_obj_42648.call(null, path,new_link_42636));


var G__42649 = seq__42276_42637;
var G__42650 = chunk__42278_42638;
var G__42651 = count__42279_42639;
var G__42652 = (i__42280_42640 + (1));
seq__42276_42637 = G__42649;
chunk__42278_42638 = G__42650;
count__42279_42639 = G__42651;
i__42280_42640 = G__42652;
continue;
} else {
var temp__5804__auto___42653__$1 = cljs.core.seq(seq__42276_42637);
if(temp__5804__auto___42653__$1){
var seq__42276_42654__$1 = temp__5804__auto___42653__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42276_42654__$1)){
var c__5568__auto___42655 = cljs.core.chunk_first(seq__42276_42654__$1);
var G__42656 = cljs.core.chunk_rest(seq__42276_42654__$1);
var G__42657 = c__5568__auto___42655;
var G__42658 = cljs.core.count(c__5568__auto___42655);
var G__42659 = (0);
seq__42276_42637 = G__42656;
chunk__42278_42638 = G__42657;
count__42279_42639 = G__42658;
i__42280_42640 = G__42659;
continue;
} else {
var map__42293_42660 = cljs.core.first(seq__42276_42654__$1);
var map__42293_42661__$1 = cljs.core.__destructure_map(map__42293_42660);
var task_42662 = map__42293_42661__$1;
var fn_str_42663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42293_42661__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42293_42661__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42665 = goog.getObjectByName(fn_str_42663,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42664)].join(''));

(fn_obj_42665.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42665.cljs$core$IFn$_invoke$arity$2(path,new_link_42636) : fn_obj_42665.call(null, path,new_link_42636));


var G__42666 = cljs.core.next(seq__42276_42654__$1);
var G__42667 = null;
var G__42668 = (0);
var G__42669 = (0);
seq__42276_42637 = G__42666;
chunk__42278_42638 = G__42667;
count__42279_42639 = G__42668;
i__42280_42640 = G__42669;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42634);
});})(seq__42218_42630,chunk__42222_42631,count__42223_42632,i__42224_42633,seq__41958,chunk__41960,count__41961,i__41962,new_link_42636,path_match_42635,node_42634,path,seq__41958__$1,temp__5804__auto__,map__41957,map__41957__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42635], 0));

goog.dom.insertSiblingAfter(new_link_42636,node_42634);


var G__42670 = seq__42218_42630;
var G__42671 = chunk__42222_42631;
var G__42672 = count__42223_42632;
var G__42673 = (i__42224_42633 + (1));
seq__42218_42630 = G__42670;
chunk__42222_42631 = G__42671;
count__42223_42632 = G__42672;
i__42224_42633 = G__42673;
continue;
} else {
var G__42674 = seq__42218_42630;
var G__42675 = chunk__42222_42631;
var G__42676 = count__42223_42632;
var G__42677 = (i__42224_42633 + (1));
seq__42218_42630 = G__42674;
chunk__42222_42631 = G__42675;
count__42223_42632 = G__42676;
i__42224_42633 = G__42677;
continue;
}
} else {
var G__42679 = seq__42218_42630;
var G__42680 = chunk__42222_42631;
var G__42681 = count__42223_42632;
var G__42682 = (i__42224_42633 + (1));
seq__42218_42630 = G__42679;
chunk__42222_42631 = G__42680;
count__42223_42632 = G__42681;
i__42224_42633 = G__42682;
continue;
}
} else {
var temp__5804__auto___42683__$1 = cljs.core.seq(seq__42218_42630);
if(temp__5804__auto___42683__$1){
var seq__42218_42684__$1 = temp__5804__auto___42683__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42218_42684__$1)){
var c__5568__auto___42685 = cljs.core.chunk_first(seq__42218_42684__$1);
var G__42687 = cljs.core.chunk_rest(seq__42218_42684__$1);
var G__42688 = c__5568__auto___42685;
var G__42689 = cljs.core.count(c__5568__auto___42685);
var G__42690 = (0);
seq__42218_42630 = G__42687;
chunk__42222_42631 = G__42688;
count__42223_42632 = G__42689;
i__42224_42633 = G__42690;
continue;
} else {
var node_42691 = cljs.core.first(seq__42218_42684__$1);
if(cljs.core.not(node_42691.shadow$old)){
var path_match_42692 = shadow.cljs.devtools.client.browser.match_paths(node_42691.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42692)){
var new_link_42694 = (function (){var G__42296 = node_42691.cloneNode(true);
G__42296.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42692),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42296;
})();
(node_42691.shadow$old = true);

(new_link_42694.onload = ((function (seq__42218_42630,chunk__42222_42631,count__42223_42632,i__42224_42633,seq__41958,chunk__41960,count__41961,i__41962,new_link_42694,path_match_42692,node_42691,seq__42218_42684__$1,temp__5804__auto___42683__$1,path,seq__41958__$1,temp__5804__auto__,map__41957,map__41957__$1,msg,updates,reload_info){
return (function (e){
var seq__42297_42696 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42299_42697 = null;
var count__42300_42698 = (0);
var i__42301_42699 = (0);
while(true){
if((i__42301_42699 < count__42300_42698)){
var map__42309_42702 = chunk__42299_42697.cljs$core$IIndexed$_nth$arity$2(null, i__42301_42699);
var map__42309_42703__$1 = cljs.core.__destructure_map(map__42309_42702);
var task_42704 = map__42309_42703__$1;
var fn_str_42705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42309_42703__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42309_42703__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42707 = goog.getObjectByName(fn_str_42705,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42706)].join(''));

(fn_obj_42707.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42707.cljs$core$IFn$_invoke$arity$2(path,new_link_42694) : fn_obj_42707.call(null, path,new_link_42694));


var G__42709 = seq__42297_42696;
var G__42710 = chunk__42299_42697;
var G__42711 = count__42300_42698;
var G__42712 = (i__42301_42699 + (1));
seq__42297_42696 = G__42709;
chunk__42299_42697 = G__42710;
count__42300_42698 = G__42711;
i__42301_42699 = G__42712;
continue;
} else {
var temp__5804__auto___42713__$2 = cljs.core.seq(seq__42297_42696);
if(temp__5804__auto___42713__$2){
var seq__42297_42719__$1 = temp__5804__auto___42713__$2;
if(cljs.core.chunked_seq_QMARK_(seq__42297_42719__$1)){
var c__5568__auto___42721 = cljs.core.chunk_first(seq__42297_42719__$1);
var G__42722 = cljs.core.chunk_rest(seq__42297_42719__$1);
var G__42723 = c__5568__auto___42721;
var G__42724 = cljs.core.count(c__5568__auto___42721);
var G__42725 = (0);
seq__42297_42696 = G__42722;
chunk__42299_42697 = G__42723;
count__42300_42698 = G__42724;
i__42301_42699 = G__42725;
continue;
} else {
var map__42323_42726 = cljs.core.first(seq__42297_42719__$1);
var map__42323_42727__$1 = cljs.core.__destructure_map(map__42323_42726);
var task_42728 = map__42323_42727__$1;
var fn_str_42729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42323_42727__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42323_42727__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42733 = goog.getObjectByName(fn_str_42729,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42730)].join(''));

(fn_obj_42733.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42733.cljs$core$IFn$_invoke$arity$2(path,new_link_42694) : fn_obj_42733.call(null, path,new_link_42694));


var G__42734 = cljs.core.next(seq__42297_42719__$1);
var G__42735 = null;
var G__42736 = (0);
var G__42737 = (0);
seq__42297_42696 = G__42734;
chunk__42299_42697 = G__42735;
count__42300_42698 = G__42736;
i__42301_42699 = G__42737;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42691);
});})(seq__42218_42630,chunk__42222_42631,count__42223_42632,i__42224_42633,seq__41958,chunk__41960,count__41961,i__41962,new_link_42694,path_match_42692,node_42691,seq__42218_42684__$1,temp__5804__auto___42683__$1,path,seq__41958__$1,temp__5804__auto__,map__41957,map__41957__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42692], 0));

goog.dom.insertSiblingAfter(new_link_42694,node_42691);


var G__42738 = cljs.core.next(seq__42218_42684__$1);
var G__42739 = null;
var G__42740 = (0);
var G__42741 = (0);
seq__42218_42630 = G__42738;
chunk__42222_42631 = G__42739;
count__42223_42632 = G__42740;
i__42224_42633 = G__42741;
continue;
} else {
var G__42742 = cljs.core.next(seq__42218_42684__$1);
var G__42743 = null;
var G__42744 = (0);
var G__42745 = (0);
seq__42218_42630 = G__42742;
chunk__42222_42631 = G__42743;
count__42223_42632 = G__42744;
i__42224_42633 = G__42745;
continue;
}
} else {
var G__42746 = cljs.core.next(seq__42218_42684__$1);
var G__42747 = null;
var G__42748 = (0);
var G__42749 = (0);
seq__42218_42630 = G__42746;
chunk__42222_42631 = G__42747;
count__42223_42632 = G__42748;
i__42224_42633 = G__42749;
continue;
}
}
} else {
}
}
break;
}


var G__42750 = cljs.core.next(seq__41958__$1);
var G__42751 = null;
var G__42752 = (0);
var G__42753 = (0);
seq__41958 = G__42750;
chunk__41960 = G__42751;
count__41961 = G__42752;
i__41962 = G__42753;
continue;
} else {
var G__42755 = cljs.core.next(seq__41958__$1);
var G__42756 = null;
var G__42757 = (0);
var G__42758 = (0);
seq__41958 = G__42755;
chunk__41960 = G__42756;
count__41961 = G__42757;
i__41962 = G__42758;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__42355){
var map__42357 = p__42355;
var map__42357__$1 = cljs.core.__destructure_map(map__42357);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42357__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__42359,done,error){
var map__42360 = p__42359;
var map__42360__$1 = cljs.core.__destructure_map(map__42360);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42360__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__42367,done,error){
var map__42369 = p__42367;
var map__42369__$1 = cljs.core.__destructure_map(map__42369);
var msg = map__42369__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42369__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42369__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42369__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42371){
var map__42372 = p__42371;
var map__42372__$1 = cljs.core.__destructure_map(map__42372);
var src = map__42372__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42372__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__42375 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42375) : done.call(null, G__42375));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__42376){
var map__42378 = p__42376;
var map__42378__$1 = cljs.core.__destructure_map(map__42378);
var msg__$1 = map__42378__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42378__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e42379){var ex = e42379;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__42383){
var map__42385 = p__42383;
var map__42385__$1 = cljs.core.__destructure_map(map__42385);
var env = map__42385__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42385__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__42403){
var map__42404 = p__42403;
var map__42404__$1 = cljs.core.__destructure_map(map__42404);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42404__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42404__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__42406){
var map__42407 = p__42406;
var map__42407__$1 = cljs.core.__destructure_map(map__42407);
var svc = map__42407__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42407__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
