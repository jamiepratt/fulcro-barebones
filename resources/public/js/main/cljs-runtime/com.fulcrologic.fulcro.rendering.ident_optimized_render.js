goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__5043__auto__ = c;
if(cljs.core.truth_(and__5043__auto__)){
return ident;
} else {
return and__5043__auto__;
}
})())){
var map__58214 = app__$1;
var map__58214__$1 = cljs.core.__destructure_map(map__58214);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58214__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null, c));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__58217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__58218 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__58217,G__58218) : com.fulcrologic.fulcro.components.computed.call(null, G__58217,G__58218));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,2067214567,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__58224 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__58224) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null, G__58224));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-121149598,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__58226 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__58227 = null;
var count__58228 = (0);
var i__58229 = (0);
while(true){
if((i__58229 < count__58228)){
var c = chunk__58227.cljs$core$IIndexed$_nth$arity$2(null, i__58229);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__58317 = seq__58226;
var G__58318 = chunk__58227;
var G__58319 = count__58228;
var G__58320 = (i__58229 + (1));
seq__58226 = G__58317;
chunk__58227 = G__58318;
count__58228 = G__58319;
i__58229 = G__58320;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58226);
if(temp__5804__auto__){
var seq__58226__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58226__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58226__$1);
var G__58321 = cljs.core.chunk_rest(seq__58226__$1);
var G__58322 = c__5568__auto__;
var G__58323 = cljs.core.count(c__5568__auto__);
var G__58324 = (0);
seq__58226 = G__58321;
chunk__58227 = G__58322;
count__58228 = G__58323;
i__58229 = G__58324;
continue;
} else {
var c = cljs.core.first(seq__58226__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__58326 = cljs.core.next(seq__58226__$1);
var G__58327 = null;
var G__58328 = (0);
var G__58329 = (0);
seq__58226 = G__58326;
chunk__58227 = G__58327;
count__58228 = G__58328;
i__58229 = G__58329;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__58234 = app__$1;
var map__58234__$1 = cljs.core.__destructure_map(map__58234);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58234__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__58235 = cljs.core.deref(runtime_atom);
var map__58235__$1 = cljs.core.__destructure_map(map__58235);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__58236 = indexes;
var map__58236__$1 = cljs.core.__destructure_map(map__58236);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58236__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58236__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58236__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null, ident));
if(cljs.core.seq(classes)){
var seq__58238 = cljs.core.seq(classes);
var chunk__58239 = null;
var count__58240 = (0);
var i__58241 = (0);
while(true){
if((i__58241 < count__58240)){
var class$ = chunk__58239.cljs$core$IIndexed$_nth$arity$2(null, i__58241);
var seq__58256_58331 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null, class$)));
var chunk__58258_58332 = null;
var count__58259_58333 = (0);
var i__58260_58334 = (0);
while(true){
if((i__58260_58334 < count__58259_58333)){
var component_58335 = chunk__58258_58332.cljs$core$IIndexed$_nth$arity$2(null, i__58260_58334);
var component_ident_58336 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58335) : com.fulcrologic.fulcro.components.get_ident.call(null, component_58335));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58336,component_58335);


var G__58337 = seq__58256_58331;
var G__58338 = chunk__58258_58332;
var G__58339 = count__58259_58333;
var G__58340 = (i__58260_58334 + (1));
seq__58256_58331 = G__58337;
chunk__58258_58332 = G__58338;
count__58259_58333 = G__58339;
i__58260_58334 = G__58340;
continue;
} else {
var temp__5804__auto___58341 = cljs.core.seq(seq__58256_58331);
if(temp__5804__auto___58341){
var seq__58256_58342__$1 = temp__5804__auto___58341;
if(cljs.core.chunked_seq_QMARK_(seq__58256_58342__$1)){
var c__5568__auto___58343 = cljs.core.chunk_first(seq__58256_58342__$1);
var G__58344 = cljs.core.chunk_rest(seq__58256_58342__$1);
var G__58345 = c__5568__auto___58343;
var G__58346 = cljs.core.count(c__5568__auto___58343);
var G__58347 = (0);
seq__58256_58331 = G__58344;
chunk__58258_58332 = G__58345;
count__58259_58333 = G__58346;
i__58260_58334 = G__58347;
continue;
} else {
var component_58348 = cljs.core.first(seq__58256_58342__$1);
var component_ident_58349 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58348) : com.fulcrologic.fulcro.components.get_ident.call(null, component_58348));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58349,component_58348);


var G__58350 = cljs.core.next(seq__58256_58342__$1);
var G__58351 = null;
var G__58352 = (0);
var G__58353 = (0);
seq__58256_58331 = G__58350;
chunk__58258_58332 = G__58351;
count__58259_58333 = G__58352;
i__58260_58334 = G__58353;
continue;
}
} else {
}
}
break;
}


var G__58354 = seq__58238;
var G__58355 = chunk__58239;
var G__58356 = count__58240;
var G__58357 = (i__58241 + (1));
seq__58238 = G__58354;
chunk__58239 = G__58355;
count__58240 = G__58356;
i__58241 = G__58357;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58238);
if(temp__5804__auto__){
var seq__58238__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58238__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58238__$1);
var G__58359 = cljs.core.chunk_rest(seq__58238__$1);
var G__58360 = c__5568__auto__;
var G__58361 = cljs.core.count(c__5568__auto__);
var G__58362 = (0);
seq__58238 = G__58359;
chunk__58239 = G__58360;
count__58240 = G__58361;
i__58241 = G__58362;
continue;
} else {
var class$ = cljs.core.first(seq__58238__$1);
var seq__58262_58363 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null, class$)));
var chunk__58264_58364 = null;
var count__58265_58365 = (0);
var i__58266_58366 = (0);
while(true){
if((i__58266_58366 < count__58265_58365)){
var component_58367 = chunk__58264_58364.cljs$core$IIndexed$_nth$arity$2(null, i__58266_58366);
var component_ident_58368 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58367) : com.fulcrologic.fulcro.components.get_ident.call(null, component_58367));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58368,component_58367);


var G__58369 = seq__58262_58363;
var G__58370 = chunk__58264_58364;
var G__58371 = count__58265_58365;
var G__58372 = (i__58266_58366 + (1));
seq__58262_58363 = G__58369;
chunk__58264_58364 = G__58370;
count__58265_58365 = G__58371;
i__58266_58366 = G__58372;
continue;
} else {
var temp__5804__auto___58373__$1 = cljs.core.seq(seq__58262_58363);
if(temp__5804__auto___58373__$1){
var seq__58262_58374__$1 = temp__5804__auto___58373__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58262_58374__$1)){
var c__5568__auto___58375 = cljs.core.chunk_first(seq__58262_58374__$1);
var G__58376 = cljs.core.chunk_rest(seq__58262_58374__$1);
var G__58377 = c__5568__auto___58375;
var G__58378 = cljs.core.count(c__5568__auto___58375);
var G__58379 = (0);
seq__58262_58363 = G__58376;
chunk__58264_58364 = G__58377;
count__58265_58365 = G__58378;
i__58266_58366 = G__58379;
continue;
} else {
var component_58380 = cljs.core.first(seq__58262_58374__$1);
var component_ident_58381 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58380) : com.fulcrologic.fulcro.components.get_ident.call(null, component_58380));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58381,component_58380);


var G__58383 = cljs.core.next(seq__58262_58374__$1);
var G__58384 = null;
var G__58385 = (0);
var G__58386 = (0);
seq__58262_58363 = G__58383;
chunk__58264_58364 = G__58384;
count__58265_58365 = G__58385;
i__58266_58366 = G__58386;
continue;
}
} else {
}
}
break;
}


var G__58387 = cljs.core.next(seq__58238__$1);
var G__58388 = null;
var G__58389 = (0);
var G__58390 = (0);
seq__58238 = G__58387;
chunk__58239 = G__58388;
count__58240 = G__58389;
i__58241 = G__58390;
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
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__58270 = app__$1;
var map__58270__$1 = cljs.core.__destructure_map(map__58270);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58270__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__58271 = cljs.core.deref(runtime_atom);
var map__58271__$1 = cljs.core.__destructure_map(map__58271);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58271__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__58272 = indexes;
var map__58272__$1 = cljs.core.__destructure_map(map__58272);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58272__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58272__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null, prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__58268_SHARP_,p2__58269_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__58268_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__58269_SHARP_) : class__GT_components.call(null, p2__58269_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__58273 = app__$1;
var map__58273__$1 = cljs.core.__destructure_map(map__58273);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58273__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58273__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__58274 = cljs.core.deref(runtime_atom);
var map__58274__$1 = cljs.core.__destructure_map(map__58274);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58274__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__58275 = indexes;
var map__58275__$1 = cljs.core.__destructure_map(map__58275);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58275__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58275__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58275__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58275__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__58277 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__58277__$1 = cljs.core.__destructure_map(map__58277);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58277__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58277__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__58278_58394 = cljs.core.seq(limited_to_render);
var chunk__58280_58395 = null;
var count__58281_58396 = (0);
var i__58282_58397 = (0);
while(true){
if((i__58282_58397 < count__58281_58396)){
var c_58398 = chunk__58280_58395.cljs$core$IIndexed$_nth$arity$2(null, i__58282_58397);
var ident_58400 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_58398) : com.fulcrologic.fulcro.components.get_ident.call(null, c_58398));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_58400,c_58398);


var G__58401 = seq__58278_58394;
var G__58402 = chunk__58280_58395;
var G__58403 = count__58281_58396;
var G__58404 = (i__58282_58397 + (1));
seq__58278_58394 = G__58401;
chunk__58280_58395 = G__58402;
count__58281_58396 = G__58403;
i__58282_58397 = G__58404;
continue;
} else {
var temp__5804__auto___58405 = cljs.core.seq(seq__58278_58394);
if(temp__5804__auto___58405){
var seq__58278_58406__$1 = temp__5804__auto___58405;
if(cljs.core.chunked_seq_QMARK_(seq__58278_58406__$1)){
var c__5568__auto___58407 = cljs.core.chunk_first(seq__58278_58406__$1);
var G__58408 = cljs.core.chunk_rest(seq__58278_58406__$1);
var G__58409 = c__5568__auto___58407;
var G__58410 = cljs.core.count(c__5568__auto___58407);
var G__58411 = (0);
seq__58278_58394 = G__58408;
chunk__58280_58395 = G__58409;
count__58281_58396 = G__58410;
i__58282_58397 = G__58411;
continue;
} else {
var c_58412 = cljs.core.first(seq__58278_58406__$1);
var ident_58413 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_58412) : com.fulcrologic.fulcro.components.get_ident.call(null, c_58412));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_58413,c_58412);


var G__58414 = cljs.core.next(seq__58278_58406__$1);
var G__58415 = null;
var G__58416 = (0);
var G__58417 = (0);
seq__58278_58394 = G__58414;
chunk__58280_58395 = G__58415;
count__58281_58396 = G__58416;
i__58282_58397 = G__58417;
continue;
}
} else {
}
}
break;
}

var seq__58286 = cljs.core.seq(limited_idents);
var chunk__58287 = null;
var count__58288 = (0);
var i__58289 = (0);
while(true){
if((i__58289 < count__58288)){
var i = chunk__58287.cljs$core$IIndexed$_nth$arity$2(null, i__58289);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__58418 = seq__58286;
var G__58419 = chunk__58287;
var G__58420 = count__58288;
var G__58421 = (i__58289 + (1));
seq__58286 = G__58418;
chunk__58287 = G__58419;
count__58288 = G__58420;
i__58289 = G__58421;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58286);
if(temp__5804__auto__){
var seq__58286__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58286__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58286__$1);
var G__58423 = cljs.core.chunk_rest(seq__58286__$1);
var G__58424 = c__5568__auto__;
var G__58425 = cljs.core.count(c__5568__auto__);
var G__58426 = (0);
seq__58286 = G__58423;
chunk__58287 = G__58424;
count__58288 = G__58425;
i__58289 = G__58426;
continue;
} else {
var i = cljs.core.first(seq__58286__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__58427 = cljs.core.next(seq__58286__$1);
var G__58428 = null;
var G__58429 = (0);
var G__58430 = (0);
seq__58286 = G__58427;
chunk__58287 = G__58428;
count__58288 = G__58429;
i__58289 = G__58430;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__58292 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__58292__$1 = cljs.core.__destructure_map(map__58292);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__58294_58433 = cljs.core.seq(all_idents);
var chunk__58295_58434 = null;
var count__58296_58435 = (0);
var i__58297_58436 = (0);
while(true){
if((i__58297_58436 < count__58296_58435)){
var i_58438 = chunk__58295_58434.cljs$core$IIndexed$_nth$arity$2(null, i__58297_58436);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_58438);


var G__58439 = seq__58294_58433;
var G__58440 = chunk__58295_58434;
var G__58441 = count__58296_58435;
var G__58442 = (i__58297_58436 + (1));
seq__58294_58433 = G__58439;
chunk__58295_58434 = G__58440;
count__58296_58435 = G__58441;
i__58297_58436 = G__58442;
continue;
} else {
var temp__5804__auto___58443 = cljs.core.seq(seq__58294_58433);
if(temp__5804__auto___58443){
var seq__58294_58444__$1 = temp__5804__auto___58443;
if(cljs.core.chunked_seq_QMARK_(seq__58294_58444__$1)){
var c__5568__auto___58445 = cljs.core.chunk_first(seq__58294_58444__$1);
var G__58446 = cljs.core.chunk_rest(seq__58294_58444__$1);
var G__58447 = c__5568__auto___58445;
var G__58448 = cljs.core.count(c__5568__auto___58445);
var G__58449 = (0);
seq__58294_58433 = G__58446;
chunk__58295_58434 = G__58447;
count__58296_58435 = G__58448;
i__58297_58436 = G__58449;
continue;
} else {
var i_58450 = cljs.core.first(seq__58294_58444__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_58450);


var G__58451 = cljs.core.next(seq__58294_58444__$1);
var G__58452 = null;
var G__58453 = (0);
var G__58454 = (0);
seq__58294_58433 = G__58451;
chunk__58295_58434 = G__58452;
count__58296_58435 = G__58453;
i__58297_58436 = G__58454;
continue;
}
} else {
}
}
break;
}

var seq__58300 = cljs.core.seq(extra_to_force);
var chunk__58301 = null;
var count__58302 = (0);
var i__58303 = (0);
while(true){
if((i__58303 < count__58302)){
var c = chunk__58301.cljs$core$IIndexed$_nth$arity$2(null, i__58303);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null, c)),c);


var G__58457 = seq__58300;
var G__58458 = chunk__58301;
var G__58459 = count__58302;
var G__58460 = (i__58303 + (1));
seq__58300 = G__58457;
chunk__58301 = G__58458;
count__58302 = G__58459;
i__58303 = G__58460;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58300);
if(temp__5804__auto__){
var seq__58300__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58300__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58300__$1);
var G__58463 = cljs.core.chunk_rest(seq__58300__$1);
var G__58464 = c__5568__auto__;
var G__58465 = cljs.core.count(c__5568__auto__);
var G__58466 = (0);
seq__58300 = G__58463;
chunk__58301 = G__58464;
count__58302 = G__58465;
i__58303 = G__58466;
continue;
} else {
var c = cljs.core.first(seq__58300__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null, c)),c);


var G__58467 = cljs.core.next(seq__58300__$1);
var G__58468 = null;
var G__58469 = (0);
var G__58470 = (0);
seq__58300 = G__58467;
chunk__58301 = G__58468;
count__58302 = G__58469;
i__58303 = G__58470;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * DEPRECATED: Careful use of hooks/use-component will give a much more optimized experience, and async rendering in
 * React 18 may break with this renderer. Use at your own risk with React 18+.
 * 
 *   The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__58308 = arguments.length;
switch (G__58308) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__58310){
var map__58311 = p__58310;
var map__58311__$1 = cljs.core.__destructure_map(map__58311);
var options = map__58311__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58311__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58311__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e58312){var e = e58312;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-1290370265,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
