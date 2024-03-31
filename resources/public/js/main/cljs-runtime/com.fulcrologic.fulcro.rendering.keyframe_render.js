goog.provide('com.fulcrologic.fulcro.rendering.keyframe_render');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
/**
 * This function renders given state map over top of the current app. This allows you to render previews of state **without
 *   actually changing the app state**. Used by Inspect for DOM preview. Forces a root-based render with no props diff optimization.
 *   The app must already be mounted. Returns the result of render.
 */
com.fulcrologic.fulcro.rendering.keyframe_render.render_state_BANG_ = (function com$fulcrologic$fulcro$rendering$keyframe_render$render_state_BANG_(app__$1,state_map){
com.fulcrologic.fulcro.components.enable_forced_refresh_BANG_((1000));

var _STAR_app_STAR__orig_val__58165 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__58166 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_app_STAR__temp_val__58167 = app__$1;
var _STAR_shared_STAR__temp_val__58168 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__$1);
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__58167);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58168);

try{var map__58170 = app__$1;
var map__58170__$1 = cljs.core.__destructure_map(map__58170);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58170__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__58171 = cljs.core.deref(runtime_atom);
var map__58171__$1 = cljs.core.__destructure_map(map__58171);
var root_factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58171__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-factory","com.fulcrologic.fulcro.application/root-factory",1202626682));
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58171__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
var mount_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58171__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672));
var r_BANG_ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render-root!","render-root!",820937651));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return module$node_modules$react_dom$index.render;
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,state_map);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map):state_map);
if(cljs.core.truth_((function (){var and__5043__auto__ = r_BANG_;
if(cljs.core.truth_(and__5043__auto__)){
return root_factory;
} else {
return and__5043__auto__;
}
})())){
var G__58173 = (root_factory.cljs$core$IFn$_invoke$arity$1 ? root_factory.cljs$core$IFn$_invoke$arity$1(data_tree) : root_factory.call(null, data_tree));
var G__58174 = mount_node;
return (r_BANG_.cljs$core$IFn$_invoke$arity$2 ? r_BANG_.cljs$core$IFn$_invoke$arity$2(G__58173,G__58174) : r_BANG_.call(null, G__58173,G__58174));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58166);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__58165);
}});
/**
 * Render the UI. The keyframe render runs a full UI query and then asks React to render the root component.
 *   The optimizations for this kind of render are purely those provided by `defsc`'s default
 *   shouldComponentUpdate, which causes component to act like React PureComponent (though the props compare in cljs
 *   is often faster).
 * 
 *   If `:hydrate?` is true it will use the React hydrate functionality (on browsers) to render over
 *   server-rendered content in the DOM.
 * 
 *   If `:force-root? true` is included in the options map then not only will this do a keyframe update, it will also
 *   force all components to return `true` from `shouldComponentUpdate`.
 */
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$keyframe_render$render_BANG_(app__$1,p__58177){
var map__58178 = p__58177;
var map__58178__$1 = cljs.core.__destructure_map(map__58178);
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var hydrate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185));
var map__58180 = app__$1;
var map__58180__$1 = cljs.core.__destructure_map(map__58180);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58180__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58180__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__58181 = cljs.core.deref(runtime_atom);
var map__58181__$1 = cljs.core.__destructure_map(map__58181);
var root_factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-factory","com.fulcrologic.fulcro.application/root-factory",1202626682));
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
var mount_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58181__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672));
var r_BANG_ = (cljs.core.truth_(hydrate_QMARK_)?(function (){var or__5045__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"hydrate-root!","hydrate-root!",-184171028));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = module$node_modules$react_dom$index.hydrate;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return module$node_modules$react_dom$index.render;
}
}
})():(function (){var or__5045__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render-root!","render-root!",820937651));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return module$node_modules$react_dom$index.render;
}
})());
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,state_map);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map):state_map);
var app_root = (cljs.core.truth_(root_factory)?(function (){
if(cljs.core.truth_(force_root_QMARK_)){
com.fulcrologic.fulcro.components.enable_forced_refresh_BANG_((1000));
} else {
}

var _STAR_app_STAR__orig_val__58183 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_parent_STAR__orig_val__58184 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_shared_STAR__orig_val__58185 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_app_STAR__temp_val__58186 = app__$1;
var _STAR_parent_STAR__temp_val__58187 = null;
var _STAR_shared_STAR__temp_val__58188 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__$1);
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__58186);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58187);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58188);

try{var G__58189 = (root_factory.cljs$core$IFn$_invoke$arity$1 ? root_factory.cljs$core$IFn$_invoke$arity$1(data_tree) : root_factory.call(null, data_tree));
var G__58190 = mount_node;
return (r_BANG_.cljs$core$IFn$_invoke$arity$2 ? r_BANG_.cljs$core$IFn$_invoke$arity$2(G__58189,G__58190) : r_BANG_.call(null, G__58189,G__58190));
}finally {(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58185);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58184);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__58183);
}})()
:null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005),app_root);

return app_root;
});

//# sourceMappingURL=com.fulcrologic.fulcro.rendering.keyframe_render.js.map
