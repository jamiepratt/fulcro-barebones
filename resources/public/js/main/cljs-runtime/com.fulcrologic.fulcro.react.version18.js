goog.provide('com.fulcrologic.fulcro.react.version18');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Returns the options that need to be passed to the Fulcro app constructor. See also `with-react18`.
 */
com.fulcrologic.fulcro.react.version18.react18_options = (function com$fulcrologic$fulcro$react$version18$react18_options(){
var reactRoot = cljs.core.volatile_BANG_(null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-root!","render-root!",820937651),(function (ui_root,mount_node){
if(cljs.core.truth_(cljs.core.deref(reactRoot))){
} else {
cljs.core.vreset_BANG_(reactRoot,module$node_modules$react_dom$client.createRoot(mount_node));
}

cljs.core.deref(reactRoot).render(ui_root);

return cljs.core.deref(reactRoot);
}),new cljs.core.Keyword(null,"hydrate-root!","hydrate-root!",-184171028),(function (ui_root,mount_node){
return module$node_modules$react_dom$client.hydrateRoot(mount_node,ui_root);
})], null);
});
/**
 * Alters the rendering to support React 18
 */
com.fulcrologic.fulcro.react.version18.with_react18 = (function com$fulcrologic$fulcro$react$version18$with_react18(app__$1){
var reactRoot = cljs.core.volatile_BANG_(null);
return cljs.core.assoc_in(cljs.core.assoc_in(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","render-root!","com.fulcrologic.fulcro.algorithm/render-root!",1033047)], null),(function (ui_root,mount_node){
if(cljs.core.truth_(cljs.core.deref(reactRoot))){
} else {
cljs.core.vreset_BANG_(reactRoot,module$node_modules$react_dom$client.createRoot(mount_node));
}

cljs.core.deref(reactRoot).render(ui_root);

return cljs.core.deref(reactRoot);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","hydrate-root!","com.fulcrologic.fulcro.algorithm/hydrate-root!",-974092720)], null),(function (ui_root,mount_node){
return module$node_modules$react_dom$client.hydrateRoot(mount_node,ui_root);
}));
});

//# sourceMappingURL=com.fulcrologic.fulcro.react.version18.js.map
