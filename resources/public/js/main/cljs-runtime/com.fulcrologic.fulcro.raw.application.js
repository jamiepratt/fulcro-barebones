goog.provide('com.fulcrologic.fulcro.raw.application');
goog.scope(function(){
  com.fulcrologic.fulcro.raw.application.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Return the current basis time of the app.
 */
com.fulcrologic.fulcro.raw.application.basis_t = (function com$fulcrologic$fulcro$raw$application$basis_t(app__$1){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","basis-t","com.fulcrologic.fulcro.application/basis-t",-1038783437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
});
/**
 * Get the current value of the application state database. If called without arguments it will attempt to find the app
 * in the dynamically-bound comp/*app*, which is bound during render.
 */
com.fulcrologic.fulcro.raw.application.current_state = (function com$fulcrologic$fulcro$raw$application$current_state(app_or_component){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_component);
return cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1));
});
/**
 * Move the basis-t forward one tick. For internal use in internal algorithms. Fulcro
 *   uses this to add metadata to props so it can detect the newer of two version of props.
 */
com.fulcrologic.fulcro.raw.application.tick_BANG_ = (function com$fulcrologic$fulcro$raw$application$tick_BANG_(app__$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1),cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","basis-t","com.fulcrologic.fulcro.application/basis-t",-1038783437),cljs.core.inc);
});
/**
 * Force shared props to be recalculated. This updates the shared props on the app, and future renders will see the
 * updated values. This is a no-op if no shared-fn is defined on the app. If you're using React 16+ consider using
 * Context instead of shared.
 */
com.fulcrologic.fulcro.raw.application.update_shared_BANG_ = (function com$fulcrologic$fulcro$raw$application$update_shared_BANG_(p__57996){
var map__57997 = p__57996;
var map__57997__$1 = cljs.core.__destructure_map(map__57997);
var app__$1 = map__57997__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57997__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
try{var temp__5802__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
if(cljs.core.truth_(temp__5802__auto__)){
var shared_fn = temp__5802__auto__;
var shared = new cljs.core.Keyword("com.fulcrologic.fulcro.application","static-shared-props","com.fulcrologic.fulcro.application/static-shared-props",2140623498).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
var state = com.fulcrologic.fulcro.raw.application.current_state(app__$1);
var root_class = new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
var query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,state);
var v = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state,state);
var shared_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shared,(shared_fn.cljs$core$IFn$_invoke$arity$1 ? shared_fn.cljs$core$IFn$_invoke$arity$1(v) : shared_fn.call(null, v))], 0));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157),shared_props);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157),new cljs.core.Keyword("com.fulcrologic.fulcro.application","static-shared-props","com.fulcrologic.fulcro.application/static-shared-props",2140623498).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1))));
}
}catch (e57998){var e = e57998;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.application",null,59,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Cannot compute shared"], null);
}),null)),null,1235162332,null);
}});
/**
 * Returns true if the props queries directly by the root component of the app (if mounted) have changed since the last
 *   render.  This is a shallow analysis such that, for example, a join from root (in a normalized db) will be checked as a difference
 *   of idents that the root prop points to.  This can be used for determining if things like shared-fn need to be re-run,
 *   and if it would simply be quicker to keyframe render the entire tree.
 * 
 *   This is a naivé algorithm that is essentially `select-keys` on the root props. It does not interpret the query in
 *   any way.
 */
com.fulcrologic.fulcro.raw.application.root_props_changed_QMARK_ = (function com$fulcrologic$fulcro$raw$application$root_props_changed_QMARK_(app__$1){
var map__57999 = app__$1;
var map__57999__$1 = cljs.core.__destructure_map(map__57999);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57999__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57999__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__58000 = cljs.core.deref(runtime_atom);
var map__58000__$1 = cljs.core.__destructure_map(map__58000);
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58000__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58000__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
if(cljs.core.not(com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,cljs.core.deref(state_atom)))){
return true;
} else {
var state_map = cljs.core.deref(state_atom);
var prior_state_map = new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var root_props = new cljs.core.Keyword(null,"root-props","root-props",-1015460595).cljs$core$IFn$_invoke$arity$1(indexes);
var root_old = cljs.core.select_keys(prior_state_map,root_props);
var root_new = cljs.core.select_keys(state_map,root_props);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(root_old,root_new);
}
});
/**
 * Render the application immediately.  Prefer `schedule-render!`, which will ensure no more than 60fps.
 * 
 *   This is the central processing for render and cannot be overridden. `schedule-render!` will always invoke
 *   this function.  The optimized render is called by this function, which does extra bookkeeping and
 *   other supporting features common to all rendering.
 * 
 *   Options include:
 *   - `force-root?`: boolean.  When true disables all optimizations and forces a full root re-render.
 *   - anything your selected rendering optization system allows.  Shared props are updated via `shared-fn`
 *   only on `force-root?` and when (shallow) root props change.
 *   
 */
com.fulcrologic.fulcro.raw.application.render_BANG_ = (function com$fulcrologic$fulcro$raw$application$render_BANG_(var_args){
var G__58002 = arguments.length;
switch (G__58002) {
case 1:
return com.fulcrologic.fulcro.raw.application.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.application.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.application.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.raw.application.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),false], null));
}));

(com.fulcrologic.fulcro.raw.application.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__58003){
var map__58004 = p__58003;
var map__58004__$1 = cljs.core.__destructure_map(map__58004);
var options = map__58004__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58004__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
com.fulcrologic.fulcro.raw.application.tick_BANG_(app__$1);

var map__58005 = app__$1;
var map__58005__$1 = cljs.core.__destructure_map(map__58005);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58005__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58005__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__58006 = (function (){var G__58007 = runtime_atom;
if((G__58007 == null)){
return null;
} else {
return cljs.core.deref(G__58007);
}
})();
var map__58006__$1 = cljs.core.__destructure_map(map__58006);
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58006__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
var before_render = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"before-render","before-render",71256781));
if(cljs.core.truth_(before_render)){
try{(before_render.cljs$core$IFn$_invoke$arity$2 ? before_render.cljs$core$IFn$_invoke$arity$2(app__$1,root_class) : before_render.call(null, app__$1,root_class));
}catch (e58008){var e_58137 = e58008;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.application",null,104,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_58137,"Transaction middleware threw an exception!"], null);
}),null)),null,1874375492,null);
}} else {
}

if(cljs.core.truth_(root_class)){
var core_render_BANG__58138 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"core-render!","core-render!",1128819499));
var root_props_changed_QMARK__58139 = com.fulcrologic.fulcro.raw.application.root_props_changed_QMARK_(app__$1);
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK__58139;
}
})())){
com.fulcrologic.fulcro.raw.application.update_shared_BANG_(app__$1);
} else {
}

if(cljs.core.truth_(core_render_BANG__58138)){
var G__58009_58140 = app__$1;
var G__58010_58141 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835),root_props_changed_QMARK__58139], null)], 0));
(core_render_BANG__58138.cljs$core$IFn$_invoke$arity$2 ? core_render_BANG__58138.cljs$core$IFn$_invoke$arity$2(G__58009_58140,G__58010_58141) : core_render_BANG__58138.call(null, G__58009_58140,G__58010_58141));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441),cljs.core.deref(state_atom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),cljs.core.PersistentHashSet.EMPTY], 0));
} else {
}

var batch_notifications = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"batch-notifications","batch-notifications",1250364860));
var notify_all_BANG_ = (function (){
var seq__58011 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword("com.fulcrologic.fulcro.application","render-listeners","com.fulcrologic.fulcro.application/render-listeners",-684979123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom))));
var chunk__58012 = null;
var count__58013 = (0);
var i__58014 = (0);
while(true){
if((i__58014 < count__58013)){
var render_listener = chunk__58012.cljs$core$IIndexed$_nth$arity$2(null, i__58014);
try{(render_listener.cljs$core$IFn$_invoke$arity$2 ? render_listener.cljs$core$IFn$_invoke$arity$2(app__$1,options) : render_listener.call(null, app__$1,options));
}catch (e58021){var e_58143 = e58021;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.application",null,121,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__58011,chunk__58012,count__58013,i__58014,e_58143,render_listener,batch_notifications,map__58005,map__58005__$1,runtime_atom,state_atom,map__58006,map__58006__$1,root_class,before_render,map__58004,map__58004__$1,options,force_root_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_58143,"Render listener failed. See https://book.fulcrologic.com/#err-render-listener-failed"], null);
});})(seq__58011,chunk__58012,count__58013,i__58014,e_58143,render_listener,batch_notifications,map__58005,map__58005__$1,runtime_atom,state_atom,map__58006,map__58006__$1,root_class,before_render,map__58004,map__58004__$1,options,force_root_QMARK_))
,null)),null,1168096246,null);
}

var G__58145 = seq__58011;
var G__58146 = chunk__58012;
var G__58147 = count__58013;
var G__58148 = (i__58014 + (1));
seq__58011 = G__58145;
chunk__58012 = G__58146;
count__58013 = G__58147;
i__58014 = G__58148;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58011);
if(temp__5804__auto__){
var seq__58011__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58011__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58011__$1);
var G__58149 = cljs.core.chunk_rest(seq__58011__$1);
var G__58150 = c__5568__auto__;
var G__58151 = cljs.core.count(c__5568__auto__);
var G__58152 = (0);
seq__58011 = G__58149;
chunk__58012 = G__58150;
count__58013 = G__58151;
i__58014 = G__58152;
continue;
} else {
var render_listener = cljs.core.first(seq__58011__$1);
try{(render_listener.cljs$core$IFn$_invoke$arity$2 ? render_listener.cljs$core$IFn$_invoke$arity$2(app__$1,options) : render_listener.call(null, app__$1,options));
}catch (e58026){var e_58153 = e58026;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.raw.application",null,121,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__58011,chunk__58012,count__58013,i__58014,e_58153,render_listener,seq__58011__$1,temp__5804__auto__,batch_notifications,map__58005,map__58005__$1,runtime_atom,state_atom,map__58006,map__58006__$1,root_class,before_render,map__58004,map__58004__$1,options,force_root_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_58153,"Render listener failed. See https://book.fulcrologic.com/#err-render-listener-failed"], null);
});})(seq__58011,chunk__58012,count__58013,i__58014,e_58153,render_listener,seq__58011__$1,temp__5804__auto__,batch_notifications,map__58005,map__58005__$1,runtime_atom,state_atom,map__58006,map__58006__$1,root_class,before_render,map__58004,map__58004__$1,options,force_root_QMARK_))
,null)),null,-966227162,null);
}

var G__58154 = cljs.core.next(seq__58011__$1);
var G__58155 = null;
var G__58156 = (0);
var G__58157 = (0);
seq__58011 = G__58154;
chunk__58012 = G__58155;
count__58013 = G__58156;
i__58014 = G__58157;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.truth_(batch_notifications)){
return (batch_notifications.cljs$core$IFn$_invoke$arity$1 ? batch_notifications.cljs$core$IFn$_invoke$arity$1(notify_all_BANG_) : batch_notifications.call(null, notify_all_BANG_));
} else {
return notify_all_BANG_();
}
}));

(com.fulcrologic.fulcro.raw.application.render_BANG_.cljs$lang$maxFixedArity = 2);

var go_BANG__58158 = goog.functions.debounce((function (app__$1,options){
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_animation_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","render-scheduled?","com.fulcrologic.fulcro.application/render-scheduled?",1784576350),(function (){
return com.fulcrologic.fulcro.raw.application.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,options);
}));
}),(16));
/**
 * Schedule a render on the next animation frame.
 */
com.fulcrologic.fulcro.raw.application.schedule_render_BANG_ = (function com$fulcrologic$fulcro$raw$application$schedule_render_BANG_(var_args){
var G__58037 = arguments.length;
switch (G__58037) {
case 1:
return com.fulcrologic.fulcro.raw.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.raw.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),false], null));
}));

(com.fulcrologic.fulcro.raw.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,options){
return (go_BANG__58158.cljs$core$IFn$_invoke$arity$2 ? go_BANG__58158.cljs$core$IFn$_invoke$arity$2(app__$1,options) : go_BANG__58158.call(null, app__$1,options));
}));

(com.fulcrologic.fulcro.raw.application.schedule_render_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Default detection of network errors. Returns true if the status-code of the given result
 *   map is not 200.
 */
com.fulcrologic.fulcro.raw.application.default_remote_error_QMARK_ = (function com$fulcrologic$fulcro$raw$application$default_remote_error_QMARK_(p__58042){
var map__58043 = p__58042;
var map__58043__$1 = cljs.core.__destructure_map(map__58043);
var status_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58043__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code);
});
/**
 * The default query transform function.  It makes sure the following items on a component query
 *   are never sent to the server:
 * 
 *   - Props whose namespace is `ui`
 *   - Any prop or join that is namespaced to com.fulcrologic.fulcro*
 *   - Any ident (as a prop or join) whose table name is namespaced ui or com.fulcrologic.fulcro*
 * 
 *   Takes an AST and returns the modified AST.
 *   
 */
com.fulcrologic.fulcro.raw.application.default_global_eql_transform = (function com$fulcrologic$fulcro$raw$application$default_global_eql_transform(ast){
var kw_namespace = (function (k){
var and__5043__auto__ = (k instanceof cljs.core.Keyword);
if(and__5043__auto__){
return cljs.core.namespace(k);
} else {
return and__5043__auto__;
}
});
return com.fulcrologic.fulcro.data_fetch.elide_ast_nodes(ast,(function (k){
var ns = (function (){var G__58049 = k;
if((G__58049 == null)){
return null;
} else {
return kw_namespace(G__58049);
}
})();
var ident_ns = ((edn_query_language.core.ident_QMARK_(k))?(function (){var G__58050 = cljs.core.first(k);
if((G__58050 == null)){
return null;
} else {
return kw_namespace(G__58050);
}
})():null);
return ((((typeof ns === 'string') && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ui",ns)) || (clojure.string.starts_with_QMARK_(ns,"com.fulcrologic.fulcro.")))))) || (((typeof ident_ns === 'string') && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ui",ident_ns)) || (clojure.string.starts_with_QMARK_(ident_ns,"com.fulcrologic.fulcro.")))))));
}));
});
/**
 * Initialize the app state using `root` component's app state. This will deep merge against any data that is already
 *   in the state atom of the app. Can be called before `mount!`, in which case you should tell mount not to (re) initialize
 *   state.
 */
com.fulcrologic.fulcro.raw.application.initialize_state_BANG_ = (function com$fulcrologic$fulcro$raw$application$initialize_state_BANG_(app__$1,root){
if(cljs.core.truth_(goog.DEBUG)){
com.fulcrologic.fulcro.raw.components.check_component_registry_BANG_();
} else {
}

var initial_db = cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1));
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(root,initial_db);
var _ = com.fulcrologic.fulcro.algorithms.do_not_use.dev_check_query(root_query,com.fulcrologic.fulcro.raw.components.component_name);
var initial_tree = com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$1(root);
var db_from_ui = (cljs.core.truth_(root_query)?com.fulcrologic.fulcro.algorithms.merge.merge_alternate_union_elements(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(root_query,initial_tree,true,com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$1(initial_tree)),root):initial_tree);
var db = com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_db,db_from_ui], 0));
return cljs.core.reset_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1),db);
});
com.fulcrologic.fulcro.raw.application.default_tx_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_;

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
com.fulcrologic.fulcro.raw.application.FulcroApp = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.toString = (function (){
var self__ = this;
var _ = this;
return "#<FulcroApp>";
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5344__auto__,null);
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k58055,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__58067 = k58055;
switch (G__58067) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58055,else__5346__auto__);

}
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__58068){
var vec__58069 = p__58068;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58069,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58069,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null, ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#com.fulcrologic.fulcro.raw.application.FulcroApp{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58054){
var self__ = this;
var G__58054__$1 = this;
return (new cljs.core.RecordIter((0),G__58054__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new com.fulcrologic.fulcro.raw.application.FulcroApp(self__.__meta,self__.__extmap,self__.__hash));
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1421499580 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58056,other58057){
var self__ = this;
var this58056__$1 = this;
return (((!((other58057 == null)))) && ((((this58056__$1.constructor === other58057.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58056__$1.__extmap,other58057.__extmap)))));
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new com.fulcrologic.fulcro.raw.application.FulcroApp(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k58055){
var self__ = this;
var this__5350__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k58055);
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__58054){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__58072 = cljs.core.keyword_identical_QMARK_;
var expr__58073 = k__5352__auto__;
return (new com.fulcrologic.fulcro.raw.application.FulcroApp(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__58054),null));
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__58054){
var self__ = this;
var this__5342__auto____$1 = this;
return (new com.fulcrologic.fulcro.raw.application.FulcroApp(G__58054,self__.__extmap,self__.__hash));
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.cljs$lang$type = true);

(com.fulcrologic.fulcro.raw.application.FulcroApp.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"com.fulcrologic.fulcro.raw.application/FulcroApp",null,(1),null));
}));

(com.fulcrologic.fulcro.raw.application.FulcroApp.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"com.fulcrologic.fulcro.raw.application/FulcroApp");
}));

/**
 * Positional factory function for com.fulcrologic.fulcro.raw.application/FulcroApp.
 */
com.fulcrologic.fulcro.raw.application.__GT_FulcroApp = (function com$fulcrologic$fulcro$raw$application$__GT_FulcroApp(){
return (new com.fulcrologic.fulcro.raw.application.FulcroApp(null,null,null));
});

/**
 * Factory function for com.fulcrologic.fulcro.raw.application/FulcroApp, taking a map of keywords to field values.
 */
com.fulcrologic.fulcro.raw.application.map__GT_FulcroApp = (function com$fulcrologic$fulcro$raw$application$map__GT_FulcroApp(G__58059){
var extmap__5385__auto__ = (function (){var G__58078 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__58059);
if(cljs.core.record_QMARK_(G__58059)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58078);
} else {
return G__58078;
}
})();
return (new com.fulcrologic.fulcro.raw.application.FulcroApp(null,cljs.core.not_empty(extmap__5385__auto__),null));
});

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(com.fulcrologic.fulcro.raw.application.FulcroApp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_app,writer,_opts){
var _app__$1 = this;
return cljs.core._write(writer,"#<FulcroApp>");
}));
/**
 * Create a new Fulcro application. See com.fulcrologic.fulcro.application/fulcro-app for the React-based initializer,
 *   which describes all supported options.
 * 
 *   This version creates an app that is not attached to React, and has no default root or optimized render. The
 *   map of initial options is the same *except* that react-centric options are obviously ignore, and also:
 * 
 * * `:optimized-render!` - A `(fn ([app]) ([app txn-options]))` that can analyze the state of the application and optimally refresh the screen. Defaults to a no-op.
 *   This function is normally called from core-render!, and therefore is useless unless you define a `core-render!` that calls it.
 * * `:core-render!` - A (fn [app txn-options] side-effect) that is called by schedule render. If you fail to supply this on a raw app, then
 *   NO rendering will happen; however, render listeners will still be called.
 * * `:batch-notifications` - A side-effecting function `(fn [notify-all])` that can surround a batch of render notifiations with a context. The only
 *   argument to this function is `notify-all`, which is a function that will do the actual notifications. This is useful when using render
 *   notifications with React hooks, and need to tell React that a bunch of state changes need to happen together. The
 *   normal setting for this (if you're using hooks and render listeners) is
 *   `(fn [render!] (react-dom/unstable_batchedUpdates render!))` or
 *   `(fn [render!] (react-native/unstable_batchedUpdates render!))`.
 * * `:refresh-component!` - A (fn [component]) that is used by synchronous transactions to attempt to refresh the UI
 *   of `component`. This has no definition for non-react applications, and cannot work without you defining this.
 * 
 *   Note that raw apps are not mounted, but are instead ready to be used immediately.  If you want to use inspect, then
 *   you must call `(inspect/client-started! app)` yourself.
 * 
 *   Indexing is available, but normally runs from React lifecycle, so unless you're using this with React indexes will be non-managed.
 *   
 */
com.fulcrologic.fulcro.raw.application.fulcro_app = (function com$fulcrologic$fulcro$raw$application$fulcro_app(var_args){
var G__58080 = arguments.length;
switch (G__58080) {
case 0:
return com.fulcrologic.fulcro.raw.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.raw.application.fulcro_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.application.fulcro_app.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.raw.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.raw.application.fulcro_app.cljs$core$IFn$_invoke$arity$1 = (function (p__58081){
var map__58082 = p__58081;
var map__58082__$1 = cljs.core.__destructure_map(map__58082);
var options = map__58082__$1;
var default_result_action_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
var external_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"external-config","external-config",-471423941));
var batch_notifications = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"batch-notifications","batch-notifications",1250364860));
var global_error_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"global-error-action","global-error-action",-924822372));
var render_middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"render-middleware","render-middleware",1183628797));
var unmount_root_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"unmount-root!","unmount-root!",1516744861));
var client_did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226));
var initial_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"initial-db","initial-db",1939835102));
var query_transform_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273));
var props_middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"props-middleware","props-middleware",358176739));
var load_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"load-mutation","load-mutation",-2132703225));
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312));
var core_render_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"core-render!","core-render!",1128819499));
var client_will_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"client-will-mount","client-will-mount",-2138714037));
var hydrate_root_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"hydrate-root!","hydrate-root!",-184171028));
var batching_enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692));
var global_eql_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
var before_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"before-render","before-render",71256781));
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var load_marker_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105));
var refresh_component_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"refresh-component!","refresh-component!",-872161039));
var render_root_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"render-root!","render-root!",820937651));
var optimized_render_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"optimized-render!","optimized-render!",1504010964));
var submit_transaction_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"submit-transaction!","submit-transaction!",554065589));
var abort_transaction_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"abort-transaction!","abort-transaction!",-1430666634));
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"root-class","root-class",-267672298));
var remote_error_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58082__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var tx_BANG_ = (function (){var or__5045__auto__ = submit_transaction_BANG_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_;
}
})();
return com.fulcrologic.fulcro.raw.application.map__GT_FulcroApp(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625),com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = initial_db;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105),load_marker_default,new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692),(function (){var or__5045__auto__ = batching_enabled;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),(function (){var or__5045__auto__ = client_did_mount;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951).cljs$core$IFn$_invoke$arity$1(options);
}
})(),new cljs.core.Keyword(null,"client-will-mount","client-will-mount",-2138714037),client_will_mount,new cljs.core.Keyword(null,"external-config","external-config",-471423941),external_config,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273),query_transform_default,new cljs.core.Keyword(null,"load-mutation","load-mutation",-2132703225),load_mutation], null),new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),(function (){var G__58083 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","initialize-state!","com.fulcrologic.fulcro.algorithm/initialize-state!",738545984),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","render!","com.fulcrologic.fulcro.algorithm/render!",-551944092),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","shared-fn","com.fulcrologic.fulcro.algorithm/shared-fn",1998173092),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","default-result-action!","com.fulcrologic.fulcro.algorithm/default-result-action!",762427430),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","props-middleware","com.fulcrologic.fulcro.algorithm/props-middleware",-1561487353),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","batch-notifications","com.fulcrologic.fulcro.algorithm/batch-notifications",-1122314904),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","schedule-render!","com.fulcrologic.fulcro.algorithm/schedule-render!",-881414518),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","abort!","com.fulcrologic.fulcro.algorithm/abort!",1698846123),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","refresh-component!","com.fulcrologic.fulcro.algorithm/refresh-component!",1486365069),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","tx!","com.fulcrologic.fulcro.algorithm/tx!",1081877133),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","core-render!","com.fulcrologic.fulcro.algorithm/core-render!",-1245238577),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","global-eql-transform","com.fulcrologic.fulcro.algorithm/global-eql-transform",2048820336),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","drop-component!","com.fulcrologic.fulcro.algorithm/drop-component!",2089631024),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","hydrate-root!","com.fulcrologic.fulcro.algorithm/hydrate-root!",-974092720),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","index-component!","com.fulcrologic.fulcro.algorithm/index-component!",1187330736),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","unmount-root!","com.fulcrologic.fulcro.algorithm/unmount-root!",-841125583),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","remote-error?","com.fulcrologic.fulcro.algorithm/remote-error?",-1675354477),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","render-root!","com.fulcrologic.fulcro.algorithm/render-root!",1033047),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","global-error-action","com.fulcrologic.fulcro.algorithm/global-error-action",1947538456),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","optimized-render!","com.fulcrologic.fulcro.algorithm/optimized-render!",-902323400),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","render-middleware","com.fulcrologic.fulcro.algorithm/render-middleware",-1105723495),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","index-root!","com.fulcrologic.fulcro.algorithm/index-root!",1394342330),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","merge*","com.fulcrologic.fulcro.algorithm/merge*",-1505158659)],[com.fulcrologic.fulcro.raw.application.initialize_state_BANG_,com.fulcrologic.fulcro.raw.application.render_BANG_,shared_fn,(function (){var or__5045__auto__ = default_result_action_BANG_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.mutations.default_result_action_BANG_;
}
})(),props_middleware,batch_notifications,com.fulcrologic.fulcro.raw.application.schedule_render_BANG_,(function (){var or__5045__auto__ = abort_transaction_BANG_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.abort_BANG_;
}
})(),refresh_component_BANG_,tx_BANG_,(function (){var or__5045__auto__ = core_render_BANG_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.identity;
}
})(),(function (){var or__5045__auto__ = global_eql_transform;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.raw.application.default_global_eql_transform;
}
})(),com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_,hydrate_root_BANG_,com.fulcrologic.fulcro.algorithms.indexing.index_component_BANG_,unmount_root_BANG_,(function (){var or__5045__auto__ = remote_error_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.raw.application.default_remote_error_QMARK_;
}
})(),render_root_BANG_,global_error_action,(function (){var or__5045__auto__ = optimized_render_BANG_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.identity;
}
})(),render_middleware,com.fulcrologic.fulcro.algorithms.indexing.index_root_BANG_,com.fulcrologic.fulcro.algorithms.merge.merge_STAR_]);
if(cljs.core.fn_QMARK_(before_render)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58083,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","before-render","com.fulcrologic.fulcro.algorithm/before-render",1977784433),before_render);
} else {
return G__58083;
}
})(),new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","queue-processing-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/queue-processing-scheduled?",-2065549690),new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441),new cljs.core.Keyword("com.fulcrologic.fulcro.application","static-shared-props","com.fulcrologic.fulcro.application/static-shared-props",2140623498),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","sends-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/sends-scheduled?",-844941333),new cljs.core.Keyword("com.fulcrologic.fulcro.application","render-listeners","com.fulcrologic.fulcro.application/render-listeners",-684979123),new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119),new cljs.core.Keyword("com.fulcrologic.fulcro.application","basis-t","com.fulcrologic.fulcro.application/basis-t",-1038783437),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new cljs.core.Keyword("com.fulcrologic.fulcro.application","mutate","com.fulcrologic.fulcro.application/mutate",-406635431),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-factory","com.fulcrologic.fulcro.application/root-factory",1202626682),new cljs.core.Keyword("com.fulcrologic.fulcro.application","shared-props","com.fulcrologic.fulcro.application/shared-props",-554105157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","activation-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/activation-scheduled?",-955561668),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517),new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005)],[null,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.PersistentArrayMap.EMPTY,shared,false,(function (){var G__58086 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_BANG_,com.fulcrologic.fulcro.algorithms.tx_processing.default_tx_BANG_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58086,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","after-render","com.fulcrologic.fulcro.algorithms.tx-processing/after-render",349495132),com.fulcrologic.fulcro.algorithms.tx_processing.application_rendered_BANG_);
} else {
return G__58086;
}
})(),root_class,(1),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,com.fulcrologic.fulcro.mutations.mutate,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,false,(function (){var or__5045__auto__ = remotes;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transmit!","transmit!",-107149039),(function (p__58088){
var map__58089 = p__58088;
var map__58089__$1 = cljs.core.__destructure_map(map__58089);
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58089__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.raw.application",null,306,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote requested, but no remote defined."], null);
}),null)),null,-1436761371,null);

var G__58090 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(418),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__58090) : result_handler.call(null, G__58090));
})], null)], null);
}
})(),null]))], null));
}));

(com.fulcrologic.fulcro.raw.application.fulcro_app.cljs$lang$maxFixedArity = 1);

/**
 * Returns true if the given `x` is a Fulcro application.
 */
com.fulcrologic.fulcro.raw.application.fulcro_app_QMARK_ = (function com$fulcrologic$fulcro$raw$application$fulcro_app_QMARK_(x){
return (x instanceof com.fulcrologic.fulcro.raw.application.FulcroApp);
});
/**
 * Attempt to abort the send queue entries with the given abort ID.
 * 
 *   NOTE: This can be redefined on an application. If you change your transaction processing routing, then the built-in
 *   version will not work, and this docstring does not apply.
 * 
 *   Will notify any aborted operations (e.g. result-handler
 *   will be invoked, remote-error? will be used to decide if you consider that an error, etc.).
 *   The result map from an abort will include `{::txn/aborted? true}`, but will not include `:status-code` or `:body`.
 * 
 *   This function affects both started and non-started items in the send queues, but will not affect submissions that have not yet
 *   made it to the network processing layer (things still in top-level transaction submission queue).
 * 
 *   So the sequence of calls:
 * 
 *   ```
 *   (comp/transact! this `[(f)] {:abort-id :a})
 *   (app/abort! this :a)
 *   ```
 * 
 *   will cancel anything active with abort id `:a`, but since you've held the thread the entire time the submission of
 *   mutation `(f)` is still on the submission queue and will not be aborted.
 * 
 *   - `app-ish`: Anything that can be coerced to an app with comp/any->app.
 *   - `abort-id`: The abort ID of the operations to be aborted.
 *   
 */
com.fulcrologic.fulcro.raw.application.abort_BANG_ = (function com$fulcrologic$fulcro$raw$application$abort_BANG_(app_ish,abort_id){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_ish);
var temp__5804__auto___58194 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
if(cljs.core.truth_(temp__5804__auto___58194)){
var abort_BANG__58195 = temp__5804__auto___58194;
(abort_BANG__58195.cljs$core$IFn$_invoke$arity$2 ? abort_BANG__58195.cljs$core$IFn$_invoke$arity$2(app__$1,abort_id) : abort_BANG__58195.call(null, app__$1,abort_id));
} else {
}

return null;
});
/**
 * Add (or replace) a render listener named `nm`. `listener` is a `(fn [app options] )` that will be called
 * after each render.
 * 
 * See the `:batch-notifications` option of the application, which can be set when using certain verions of React to
 * improve performance and reduce over-rendering.
 */
com.fulcrologic.fulcro.raw.application.add_render_listener_BANG_ = (function com$fulcrologic$fulcro$raw$application$add_render_listener_BANG_(app__$1,nm,listener){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","render-listeners","com.fulcrologic.fulcro.application/render-listeners",-684979123),nm], null),listener);
});
/**
 * Remove the render listener named `nm`.
 */
com.fulcrologic.fulcro.raw.application.remove_render_listener_BANG_ = (function com$fulcrologic$fulcro$raw$application$remove_render_listener_BANG_(app__$1,nm){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1),cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","render-listeners","com.fulcrologic.fulcro.application/render-listeners",-684979123),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nm], 0));
});
/**
 * Returns a new instance from `fulcro-app` that is pre-configured to use synchronous transaction processing
 * and no rendering. This is particularly useful when you want to write integration tests around a Fulcro
 * app so that the tests need no async support. The `faux-root` must be a component (which need have no body).
 * 
 * The returned application will be properly initialized, and will have the initial state declared in `faux-component`
 * already merged into the app's state (i.e. the returned app is ready for operations).
 * 
 * `options` can be anything from `fulcro-app`, but :submit-transaction!, :render-root!, and
 * :optimized-render! are ignored.
 */
com.fulcrologic.fulcro.raw.application.headless_synchronous_app = (function com$fulcrologic$fulcro$raw$application$headless_synchronous_app(var_args){
var G__58107 = arguments.length;
switch (G__58107) {
case 1:
return com.fulcrologic.fulcro.raw.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.raw.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.raw.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$1 = (function (faux_root){
return com.fulcrologic.fulcro.raw.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$2(faux_root,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.raw.application.headless_synchronous_app.cljs$core$IFn$_invoke$arity$2 = (function (faux_root,options){
var app__$1 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-root!","render-root!",820937651),cljs.core.constantly(true),new cljs.core.Keyword(null,"optimized-render!","optimized-render!",1504010964),cljs.core.constantly(true)], null)], 0))));
com.fulcrologic.fulcro.raw.application.initialize_state_BANG_(app__$1,faux_root);

return app__$1;
}));

(com.fulcrologic.fulcro.raw.application.headless_synchronous_app.cljs$lang$maxFixedArity = 2);

/**
 * Add/replace a remote on the given app. `remote-name` is a keyword, and `remote` is a Fulcro remote (map containing
 *   at least `transmit!`).
 * 
 *   This function is *generally* safe to call at any time. Requests that are in-flight on an old version of the remote will complete
 *   on that remote, and any that are queued will be processed by the new one; however, if the old remote supported abort
 *   operations then an abort on in-flight requests of the old remote will not work (since you're replaced the remote that the details
 *   about that request).
 * 
 *   This function changes the content of the application's runtime atom so you do not need to capture the return value, which
 *   is the app you passed in.
 */
com.fulcrologic.fulcro.raw.application.set_remote_BANG_ = (function com$fulcrologic$fulcro$raw$application$set_remote_BANG_(app__$1,remote_name,remote){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517),remote_name], null),remote);

return app__$1;
});
/**
 * Uses `fdn/traced-db->tree` to get the props of the subtree at `root-key`. If `prior-props` are not stale, those are
 * returned instead.
 */
com.fulcrologic.fulcro.raw.application.get_root_subtree_props = (function com$fulcrologic$fulcro$raw$application$get_root_subtree_props(app__$1,root_key,component,prior_props){
var state_map = com.fulcrologic.fulcro.raw.application.current_state(app__$1);
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.denormalize.possibly_stale_QMARK_(state_map,prior_props))){
var query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(component);
return com.fulcrologic.fulcro.algorithms.denormalize.traced_db__GT_tree(state_map,root_key,query);
} else {
return prior_props;
}
});
/**
 * A helper for `add-root!` and similar. Populates the initial state for a subtree depending on `initialize?` and `keep-existing?`
 * 
 * :keep-existing? - A boolean. If true, then the state will not be initialized if there
 * is already data at the `root-key`.
 *   
 */
com.fulcrologic.fulcro.raw.application.maybe_merge_new_root_BANG_ = (function com$fulcrologic$fulcro$raw$application$maybe_merge_new_root_BANG_(app__$1,root_key,component,p__58116){
var map__58117 = p__58116;
var map__58117__$1 = cljs.core.__destructure_map(map__58117);
var keep_existing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58117__$1,new cljs.core.Keyword(null,"keep-existing?","keep-existing?",-916245180));
var initial_params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58117__$1,new cljs.core.Keyword(null,"initial-params","initial-params",1980851682),cljs.core.PersistentArrayMap.EMPTY);
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58117__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
if(cljs.core.truth_((function (){var and__5043__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var and__5043__auto____$1 = keep_existing_QMARK_;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.contains_QMARK_(com.fulcrologic.fulcro.raw.application.current_state(app__$1),root_key);
} else {
return and__5043__auto____$1;
}
})());
} else {
return and__5043__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1),(function com$fulcrologic$fulcro$raw$application$maybe_merge_new_root_BANG__$_use_root_merge_STAR_(s){
return com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$core$IFn$_invoke$arity$variadic(s,component,com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(component,initial_params),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_key], null)], 0));
}));
} else {
return null;
}
});
/**
 * Use a root key and component as a subtree managed by Fulcro. This establishes props updates to non-React UI,
 * and is not rendered by normal Fulcro rendering. You can integrate with React using `use-root` from the hooks ns.
 * 
 * The `root-key` must be a unique (namespace recommended) key among all keys used within the application,
 * since the root of the database is where it will live.
 * 
 * The `component` should be a real Fulcro component or a generated normalizing component from `nc` (or similar).
 * 
 * The options map can contain:
 * 
 * * `:initialize?` - Pass true if you want the initial state of component to be merged into app state.
 * * `:keep-existing?` - Only valid if `initialize?` is true. When true, indicates initialize should only
 *                       be done if there isn't already state at the component's ident in the database.
 * * `:initial-params` - The parameters to pass to the component's `get-initial-state` when initializing.
 * * `:receive-props` - REQUIRED: The function to call when the props change in the Fulcro state. This is a
 *                      `(fn [props] )` where the props will be the component props (sans the root-key).
 * * `:listener-id` - The ID used for the render listener that is added by this function. Defaults to
 *                    the root-key, but you can override it with this option.
 * 
 * NOTE: This function tracks prior props and is capable of a very fast staleness check. It will not call your callback
 * unless it detects an actual change to the data of interest to your UI.
 *   
 */
com.fulcrologic.fulcro.raw.application.add_root_BANG_ = (function com$fulcrologic$fulcro$raw$application$add_root_BANG_(app__$1,root_key,component,p__58118){
var map__58119 = p__58118;
var map__58119__$1 = cljs.core.__destructure_map(map__58119);
var options = map__58119__$1;
var receive_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58119__$1,new cljs.core.Keyword(null,"receive-props","receive-props",-391890642));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58119__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var keep_existing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58119__$1,new cljs.core.Keyword(null,"keep-existing?","keep-existing?",-916245180));
var initial_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58119__$1,new cljs.core.Keyword(null,"initial-params","initial-params",1980851682));
com.fulcrologic.fulcro.raw.application.maybe_merge_new_root_BANG_(app__$1,root_key,component,options);

var prior_props = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var get_props = (function (){
return com.fulcrologic.fulcro.raw.application.get_root_subtree_props(app__$1,root_key,component,cljs.core.deref(prior_props));
});
var listener_id = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"listener-id","listener-id",-895218711).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_key;
}
})();
var G__58120_58201 = get_props();
(receive_props.cljs$core$IFn$_invoke$arity$1 ? receive_props.cljs$core$IFn$_invoke$arity$1(G__58120_58201) : receive_props.call(null, G__58120_58201));

return com.fulcrologic.fulcro.raw.application.add_render_listener_BANG_(app__$1,listener_id,(function com$fulcrologic$fulcro$raw$application$add_root_BANG__$_use_root_render_listener_STAR_(app__$2,_){
var props = get_props();
if((props === cljs.core.deref(prior_props))){
return null;
} else {
cljs.core.reset_BANG_(prior_props,props);

return (receive_props.cljs$core$IFn$_invoke$arity$1 ? receive_props.cljs$core$IFn$_invoke$arity$1(props) : receive_props.call(null, props));
}
}));
});
/**
 * Remove a root key managed subtree from Fulcro. Does not garbage collect, just stops updating the callback.
 */
com.fulcrologic.fulcro.raw.application.remove_root_BANG_ = (function com$fulcrologic$fulcro$raw$application$remove_root_BANG_(app__$1,root_key){
return com.fulcrologic.fulcro.raw.application.remove_render_listener_BANG_(app__$1,root_key);
});
/**
 * Helper for `add-component!` and similar. Populates the component state depending on `initialize?` and `keep-existing?`.
 * 
 * `app` - The app
 * `component` - A component (e.g. from `nc`)
 * `component-data` - A tree of data that matches the shape of the component's query.
 * `initialize?` is true by default.
 * `:keep-existing?` - A boolean (default false). If true, then the state of the component will not be initialized if there
 * is already data at the component's ident (which will be computed using the initial entity provided).
 *   
 */
com.fulcrologic.fulcro.raw.application.maybe_merge_new_component_BANG_ = (function com$fulcrologic$fulcro$raw$application$maybe_merge_new_component_BANG_(app__$1,component,component_data,p__58122){
var map__58123 = p__58122;
var map__58123__$1 = cljs.core.__destructure_map(map__58123);
var keep_existing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58123__$1,new cljs.core.Keyword(null,"keep-existing?","keep-existing?",-916245180));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58123__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true);
if(cljs.core.truth_((function (){var and__5043__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var and__5043__auto____$1 = keep_existing_QMARK_;
if(cljs.core.truth_(and__5043__auto____$1)){
return com.fulcrologic.fulcro.raw.components.has_active_state_QMARK_(com.fulcrologic.fulcro.raw.application.current_state(app__$1),com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component,component_data));
} else {
return and__5043__auto____$1;
}
})());
} else {
return and__5043__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1),com.fulcrologic.fulcro.algorithms.merge.merge_component,component,component_data);
} else {
return null;
}
});
/**
 * Use a component (that has initial state) as a subtree managed by Fulcro. This establishes props updates to non-React UI,
 * and is not rendered by normal Fulcro rendering.
 * 
 * The `component` should be a real Fulcro component or a generated normalizing component from `nc` (or similar) that
 * has initial state. .
 * 
 * The options map can contain:
 * 
 * * `:initialize?` - Pass true if you want the initial state of component to be merged into app state.
 * * `:keep-existing?` - Only valid if `initialize?` is true. When true, indicates initialize should only
 *                       be done if there isn't already state at the component's ident in the database.
 * * `:initial-params` - The parameters to pass to the component's `get-initial-state` when initializing.
 * * `:receive-props` - REQUIRED: The function to call when the props change in the Fulcro state. This is a
 *                      `(fn [props] )` where the props will be the component props.
 * * `:ident` - Only needed if you are NOT initializing state, AND the component has a dynamic ident.
 * * `:listener-id` - The ID used for the render listener that is added by this function. Defaults to
 *                    component ident, but you can override it with this option. If you do override,
 *                    use `remove-render-listener!` instead of `remove-component!` to remove the listener.
 *   
 */
com.fulcrologic.fulcro.raw.application.add_component_BANG_ = (function com$fulcrologic$fulcro$raw$application$add_component_BANG_(app__$1,component,p__58125){
var map__58126 = p__58125;
var map__58126__$1 = cljs.core.__destructure_map(map__58126);
var options = map__58126__$1;
var receive_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58126__$1,new cljs.core.Keyword(null,"receive-props","receive-props",-391890642));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58126__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var keep_existing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58126__$1,new cljs.core.Keyword(null,"keep-existing?","keep-existing?",-916245180));
var initial_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58126__$1,new cljs.core.Keyword(null,"initial-params","initial-params",1980851682));
var initial_entity = com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(component,initial_params);
var ident = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component,initial_entity);
}
})();
var prior_props = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var get_props = (function (){
return com.fulcrologic.fulcro.raw.components.get_traced_props(com.fulcrologic.fulcro.raw.application.current_state(app__$1),component,ident,cljs.core.deref(prior_props));
});
var listener_id = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"listener-id","listener-id",-895218711).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ident;
}
})();
com.fulcrologic.fulcro.raw.application.maybe_merge_new_component_BANG_(app__$1,component,initial_entity,options);

var G__58128_58204 = get_props();
(receive_props.cljs$core$IFn$_invoke$arity$1 ? receive_props.cljs$core$IFn$_invoke$arity$1(G__58128_58204) : receive_props.call(null, G__58128_58204));

return com.fulcrologic.fulcro.raw.application.add_render_listener_BANG_(app__$1,listener_id,(function (app__$2,_){
var props = get_props();
if((cljs.core.deref(prior_props) === props)){
return null;
} else {
cljs.core.reset_BANG_(prior_props,props);

return (receive_props.cljs$core$IFn$_invoke$arity$1 ? receive_props.cljs$core$IFn$_invoke$arity$1(props) : receive_props.call(null, props));
}
}));
});
/**
 * Remove a root key managed subtree from Fulcro. Does not GC the state, just stops sending props updates on render.
 */
com.fulcrologic.fulcro.raw.application.remove_component_BANG_ = (function com$fulcrologic$fulcro$raw$application$remove_component_BANG_(app__$1,component){
var initial_entity = com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentArrayMap.EMPTY);
var ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component,initial_entity);
return com.fulcrologic.fulcro.raw.application.remove_render_listener_BANG_(app__$1,ident);
});

//# sourceMappingURL=com.fulcrologic.fulcro.raw.application.js.map
