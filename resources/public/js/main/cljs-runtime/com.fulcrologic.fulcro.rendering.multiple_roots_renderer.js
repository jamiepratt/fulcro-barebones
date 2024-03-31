goog.provide('com.fulcrologic.fulcro.rendering.multiple_roots_renderer');
goog.scope(function(){
  com.fulcrologic.fulcro.rendering.multiple_roots_renderer.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * DEPRECATED: Floating roots can now be created with React hooks and hooks/use-component or hooks/use-fulcro.
 * 
 *   Register a mounted react component as a new root that should be managed. The
 *   options map can contain:
 * 
 *   - `:initialize?`: Should the initial state be pushed into the app state (if not already present)? Defaults
 *   to true, which causes it to happen once (on initial mount).
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$register_root_BANG_(var_args){
var G__59209 = arguments.length;
switch (G__59209) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__59211){
var map__59212 = p__59211;
var map__59212__$1 = cljs.core.__destructure_map(map__59212);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59212__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59212__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var app__$2 = (function (){var or__5045__auto__ = app__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null, class$));
var initialize_state_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"initialize-state!","initialize-state!",-1114074844));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var known_roots = (function (){var G__59213 = app__$2;
var G__59213__$1 = (((G__59213 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__59213));
var G__59213__$2 = (((G__59213__$1 == null))?null:cljs.core.deref(G__59213__$1));
if((G__59213__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__59213__$2);
}
})();
var initialized_QMARK_ = cljs.core.contains_QMARK_(known_roots,k);
if(cljs.core.truth_((function (){var and__5043__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (!(initialized_QMARK_));
} else {
return and__5043__auto__;
}
})())){
(initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2(app__$2,class$) : initialize_state_BANG_.call(null, app__$2,class$));

var G__59215_59305 = app__$2;
var G__59216_59306 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__59215_59305,G__59216_59306) : schedule_render_BANG_.call(null, G__59215_59305,G__59216_59306));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,94,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,62455567,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,96,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-reg-root-no-app"], null);
}),null)),null,-280026154,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__59220 = arguments.length;
switch (G__59220) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__59222){
var map__59223 = p__59222;
var map__59223__$1 = cljs.core.__destructure_map(map__59223);
var options = map__59223__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59223__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app__$2 = (function (){var or__5045__auto__ = app__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null, class$));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,107,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,-1809504655,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,109,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-dereg-root-no-app"], null);
}),null)),null,392013278,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app__$1,options){
var state_map = (function (){var G__59226 = app__$1;
var G__59226__$1 = (((G__59226 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__59226));
if((G__59226__$1 == null)){
return null;
} else {
return cljs.core.deref(G__59226__$1);
}
})();
var known_roots = (function (){var G__59227 = app__$1;
var G__59227__$1 = (((G__59227 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__59227));
var G__59227__$2 = (((G__59227__$1 == null))?null:cljs.core.deref(G__59227__$1));
if((G__59227__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__59227__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);

var seq__59228 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__59230 = null;
var count__59231 = (0);
var i__59232 = (0);
while(true){
if((i__59232 < count__59231)){
var k = chunk__59230.cljs$core$IIndexed$_nth$arity$2(null, i__59232);
var cls_59311 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null, k));
var query_59312 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_59311,state_map);
var root_props_59313 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_59312,state_map,state_map);
var seq__59248_59314 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__59249_59315 = null;
var count__59250_59316 = (0);
var i__59251_59317 = (0);
while(true){
if((i__59251_59317 < count__59250_59316)){
var root_59318 = chunk__59249_59315.cljs$core$IIndexed$_nth$arity$2(null, i__59251_59317);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_59318,root_props_59313);


var G__59319 = seq__59248_59314;
var G__59320 = chunk__59249_59315;
var G__59321 = count__59250_59316;
var G__59322 = (i__59251_59317 + (1));
seq__59248_59314 = G__59319;
chunk__59249_59315 = G__59320;
count__59250_59316 = G__59321;
i__59251_59317 = G__59322;
continue;
} else {
var temp__5804__auto___59324 = cljs.core.seq(seq__59248_59314);
if(temp__5804__auto___59324){
var seq__59248_59325__$1 = temp__5804__auto___59324;
if(cljs.core.chunked_seq_QMARK_(seq__59248_59325__$1)){
var c__5568__auto___59326 = cljs.core.chunk_first(seq__59248_59325__$1);
var G__59327 = cljs.core.chunk_rest(seq__59248_59325__$1);
var G__59328 = c__5568__auto___59326;
var G__59329 = cljs.core.count(c__5568__auto___59326);
var G__59330 = (0);
seq__59248_59314 = G__59327;
chunk__59249_59315 = G__59328;
count__59250_59316 = G__59329;
i__59251_59317 = G__59330;
continue;
} else {
var root_59331 = cljs.core.first(seq__59248_59325__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_59331,root_props_59313);


var G__59332 = cljs.core.next(seq__59248_59325__$1);
var G__59333 = null;
var G__59334 = (0);
var G__59335 = (0);
seq__59248_59314 = G__59332;
chunk__59249_59315 = G__59333;
count__59250_59316 = G__59334;
i__59251_59317 = G__59335;
continue;
}
} else {
}
}
break;
}


var G__59336 = seq__59228;
var G__59337 = chunk__59230;
var G__59338 = count__59231;
var G__59339 = (i__59232 + (1));
seq__59228 = G__59336;
chunk__59230 = G__59337;
count__59231 = G__59338;
i__59232 = G__59339;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__59228);
if(temp__5804__auto__){
var seq__59228__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59228__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__59228__$1);
var G__59340 = cljs.core.chunk_rest(seq__59228__$1);
var G__59341 = c__5568__auto__;
var G__59342 = cljs.core.count(c__5568__auto__);
var G__59343 = (0);
seq__59228 = G__59340;
chunk__59230 = G__59341;
count__59231 = G__59342;
i__59232 = G__59343;
continue;
} else {
var k = cljs.core.first(seq__59228__$1);
var cls_59344 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null, k));
var query_59345 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_59344,state_map);
var root_props_59346 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_59345,state_map,state_map);
var seq__59254_59347 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__59255_59348 = null;
var count__59256_59349 = (0);
var i__59257_59350 = (0);
while(true){
if((i__59257_59350 < count__59256_59349)){
var root_59352 = chunk__59255_59348.cljs$core$IIndexed$_nth$arity$2(null, i__59257_59350);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_59352,root_props_59346);


var G__59353 = seq__59254_59347;
var G__59354 = chunk__59255_59348;
var G__59355 = count__59256_59349;
var G__59356 = (i__59257_59350 + (1));
seq__59254_59347 = G__59353;
chunk__59255_59348 = G__59354;
count__59256_59349 = G__59355;
i__59257_59350 = G__59356;
continue;
} else {
var temp__5804__auto___59357__$1 = cljs.core.seq(seq__59254_59347);
if(temp__5804__auto___59357__$1){
var seq__59254_59358__$1 = temp__5804__auto___59357__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59254_59358__$1)){
var c__5568__auto___59359 = cljs.core.chunk_first(seq__59254_59358__$1);
var G__59360 = cljs.core.chunk_rest(seq__59254_59358__$1);
var G__59361 = c__5568__auto___59359;
var G__59362 = cljs.core.count(c__5568__auto___59359);
var G__59363 = (0);
seq__59254_59347 = G__59360;
chunk__59255_59348 = G__59361;
count__59256_59349 = G__59362;
i__59257_59350 = G__59363;
continue;
} else {
var root_59364 = cljs.core.first(seq__59254_59358__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_59364,root_props_59346);


var G__59365 = cljs.core.next(seq__59254_59358__$1);
var G__59366 = null;
var G__59367 = (0);
var G__59368 = (0);
seq__59254_59347 = G__59365;
chunk__59255_59348 = G__59366;
count__59256_59349 = G__59367;
i__59257_59350 = G__59368;
continue;
}
} else {
}
}
break;
}


var G__59369 = cljs.core.next(seq__59228__$1);
var G__59370 = null;
var G__59371 = (0);
var G__59372 = (0);
seq__59228 = G__59369;
chunk__59230 = G__59370;
count__59231 = G__59371;
i__59232 = G__59372;
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
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_stale_components_BANG_(app__$1,options){
var map__59261 = app__$1;
var map__59261__$1 = cljs.core.__destructure_map(map__59261);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59261__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59262 = cljs.core.deref(runtime_atom);
var map__59262__$1 = cljs.core.__destructure_map(map__59262);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59262__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__59263 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__59263__$1 = cljs.core.__destructure_map(map__59263);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59263__$1,true);
var seq__59265 = cljs.core.seq(limited_idents);
var chunk__59266 = null;
var count__59267 = (0);
var i__59268 = (0);
while(true){
if((i__59268 < count__59267)){
var i = chunk__59266.cljs$core$IIndexed$_nth$arity$2(null, i__59268);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__59374 = seq__59265;
var G__59375 = chunk__59266;
var G__59376 = count__59267;
var G__59377 = (i__59268 + (1));
seq__59265 = G__59374;
chunk__59266 = G__59375;
count__59267 = G__59376;
i__59268 = G__59377;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__59265);
if(temp__5804__auto__){
var seq__59265__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59265__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__59265__$1);
var G__59378 = cljs.core.chunk_rest(seq__59265__$1);
var G__59379 = c__5568__auto__;
var G__59380 = cljs.core.count(c__5568__auto__);
var G__59381 = (0);
seq__59265 = G__59378;
chunk__59266 = G__59379;
count__59267 = G__59380;
i__59268 = G__59381;
continue;
} else {
var i = cljs.core.first(seq__59265__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__59382 = cljs.core.next(seq__59265__$1);
var G__59383 = null;
var G__59384 = (0);
var G__59385 = (0);
seq__59265 = G__59382;
chunk__59266 = G__59383;
count__59267 = G__59384;
i__59268 = G__59385;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}
});
/**
 * DEPRECATED: Floating roots can now be created with React hooks and hooks/use-component or hooks/use-fulcro.
 * 
 * The top-level call for using this optimized render in your application.
 * 
 * If `:force-root? true` is passed in options, then it just forces a keyframe root render.
 * 
 * This renderer always does a keyframe render *unless* an `:only-refresh` option is passed to the stack
 * (usually as an option on `(transact! this [(f)] {:only-refresh [...idents...]})`. In that case the renderer
 * will ignore *all* data diffing and will target refresh only to the on-screen components that have the listed
 * ident(s). This allows you to get component-local state refresh rates on transactions that are responding to
 * events that should really only affect a known set of components (like the input field).
 * 
 * This option does *not* currently support using query keywords in the refresh set. Only idents.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_BANG_(var_args){
var G__59272 = arguments.length;
switch (G__59272) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__59274){
var map__59275 = p__59274;
var map__59275__$1 = cljs.core.__destructure_map(map__59275);
var options = map__59275__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59275__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59275__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_(app__$1,options);
}catch (e59277){var e = e59277;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,158,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-1407554971,null);

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Generate a plain React class that can render a Fulcro UIRoot. NOTE: The UIRoot must register/deregister itself
 *   in the component lifecycle:
 * 
 *   ```
 *   (defsc UIRoot [this props]
 *  {:componentDidMount     (fn [this] (mroot/register-root! this))
 *   :componentWillUnmount  (fn [this] (mroot/deregister-root! this))
 *   :initial-state {}
 *   :query [root-like-query]}
 *  ...)
 *   ```
 * 
 *   The `fulcro-app` is the app under which this root will be rendered. Create different factories if you have more than
 *   one mounted app.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_react_class = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_react_class(UIRoot,fulcro_app){
var cls = (function (){
return null;
});
var ui_root = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIRoot);
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.goog$module$goog$object.extend(cls.prototype,module$node_modules$react$index.Component.prototype,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this$ = this;
var js_props = this$.props;
var app__59180__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return fulcro_app;
}
})();
var _STAR_app_STAR__orig_val__59285 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__59286 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_app_STAR__temp_val__59287 = app__59180__auto__;
var _STAR_shared_STAR__temp_val__59288 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__59180__auto__);
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__59287);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__59288);

try{var state_map = (function (){var G__59289 = fulcro_app;
var G__59289__$1 = (((G__59289 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__59289));
if((G__59289__$1 == null)){
return null;
} else {
return cljs.core.deref(G__59289__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIRoot,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__59291 = props;
var G__59292 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__59291,G__59292) : ui_root.call(null, G__59291,G__59292));
}finally {(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__59286);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__59285);
}})], null)));

return cls;
});
/**
 * Create a factory that renders a floating root in a normal Fulcro context (body of a Fulcro component). This factory
 * has the same sync constraints as normal `component/factory` functions. See `components/with-parent-context`.
 * 
 *   `UIClass`: A class that will behave as a floating root. NOTE: that class MUST have a mount/unmount hook
 *   to regsiter/deregister itself as a root.
 * 
 *   `options`: An options map. Same as for `component/factory`. Note, however, that this factory will *not* receive
 *   props, so a `:keyfn` would have to be based on something else.
 * 
 *   You normally do not pass any props to this factory because it is controlling the component and feeding props from
 *   the database. Props sent to this factory are only used by the wrapper, however, `:react-key` is useful if you
 *   have a bunch of sibling roots and need to set the react key for each.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_factory(var_args){
var G__59295 = arguments.length;
switch (G__59295) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1 = (function (UIClass){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(UIClass,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2 = (function (UIClass,options){
var constructor$ = (function (){
return null;
});
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIClass);
var render = (function (this$){
var state_map = (function (){var G__59297 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__59297__$1 = (((G__59297 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__59297));
if((G__59297__$1 == null)){
return null;
} else {
return cljs.core.deref(G__59297__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__59298 = (function (){var or__5045__auto__ = props;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__59299 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null, this$));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__59298,G__59299) : ui_factory.call(null, G__59298,G__59299));
});
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
