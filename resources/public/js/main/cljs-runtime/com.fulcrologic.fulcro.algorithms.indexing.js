goog.provide('com.fulcrologic.fulcro.algorithms.indexing');
com.fulcrologic.fulcro.algorithms.indexing.index_query_STAR_ = (function com$fulcrologic$fulcro$algorithms$indexing$index_query_STAR_(prop__GT_classes,p__53777){
var map__53782 = p__53777;
var map__53782__$1 = cljs.core.__destructure_map(map__53782);
var ast = map__53782__$1;
var parent_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53782__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var parent_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var parent_key = com.fulcrologic.fulcro.raw.components.class__GT_registry_key(parent_component);
var parent_children__$1 = cljs.core.seq(parent_children);
var update_index = (function (idx,k,c){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
});
if(parent_children__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__53794){
var map__53795 = p__53794;
var map__53795__$1 = cljs.core.__destructure_map(map__53795);
var child_ast = map__53795__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53795__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53795__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53795__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__53796 = idx;
var G__53796__$1 = ((((cljs.core.vector_QMARK_(key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(key)))))?update_index(G__53796,dispatch_key,parent_key):G__53796);
var G__53796__$2 = ((((cljs.core.vector_QMARK_(key)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(key)))))?update_index(G__53796__$1,key,parent_key):G__53796__$1);
var G__53796__$3 = (((key instanceof cljs.core.Keyword))?update_index(G__53796__$2,key,parent_key):G__53796__$2);
if(cljs.core.seq(children)){
return (com.fulcrologic.fulcro.algorithms.indexing.index_query_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.indexing.index_query_STAR_.cljs$core$IFn$_invoke$arity$2(G__53796__$3,child_ast) : com.fulcrologic.fulcro.algorithms.indexing.index_query_STAR_.call(null, G__53796__$3,child_ast));
} else {
return G__53796__$3;
}
}),prop__GT_classes,parent_children__$1);
} else {
return prop__GT_classes;
}
});
/**
 * Create an index of the given component-annotated query. Returns a map from query keyword to the component
 *   class(es) that query for that keyword.
 */
com.fulcrologic.fulcro.algorithms.indexing.index_query = (function com$fulcrologic$fulcro$algorithms$indexing$index_query(query){
var ast = edn_query_language.core.query__GT_ast(query);
return com.fulcrologic.fulcro.algorithms.indexing.index_query_STAR_(cljs.core.PersistentArrayMap.EMPTY,ast);
});
/**
 * Return a set of keywords that are in the top-level of the given AST
 */
com.fulcrologic.fulcro.algorithms.indexing.top_level_keys = (function com$fulcrologic$fulcro$algorithms$indexing$top_level_keys(ast){
var map__53803 = ast;
var map__53803__$1 = cljs.core.__destructure_map(map__53803);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_)),children);
});
/**
 * Returns a set of all of the keys that appear in link refs `[:k '_]` in the entire ast.
 */
com.fulcrologic.fulcro.algorithms.indexing.link_query_props = (function com$fulcrologic$fulcro$algorithms$indexing$link_query_props(p__53808){
var map__53809 = p__53808;
var map__53809__$1 = cljs.core.__destructure_map(map__53809);
var ast = map__53809__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53809__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53809__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(com.fulcrologic.fulcro.algorithms.denormalize.link_ref_QMARK_(key)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(key)]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.indexing.link_query_props,children));
} else {
if(cljs.core.seq(children)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.indexing.link_query_props,children));
} else {
return cljs.core.PersistentHashSet.EMPTY;

}
}
});
/**
 * Index the root query (see index-query) and side-effect the result (`prop->classes`) into the given app.
 *   This function assumes the `root-class` has already been supplied to the app (i.e. is has been mounted).
 */
com.fulcrologic.fulcro.algorithms.indexing.index_root_BANG_ = (function com$fulcrologic$fulcro$algorithms$indexing$index_root_BANG_(app__$1){
var map__53830 = app__$1;
var map__53830__$1 = cljs.core.__destructure_map(map__53830);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53830__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53830__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__53832 = cljs.core.deref(runtime_atom);
var map__53832__$1 = cljs.core.__destructure_map(map__53832);
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53832__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
var state_map = cljs.core.deref(state_atom);
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var prop__GT_classes = com.fulcrologic.fulcro.algorithms.indexing.index_query(root_query);
var idents_in_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(edn_query_language.core.ident_QMARK_),cljs.core.keys(prop__GT_classes));
var root_props = com.fulcrologic.fulcro.algorithms.indexing.top_level_keys(ast);
var linked_props = com.fulcrologic.fulcro.algorithms.indexing.link_query_props(ast);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (s){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"root-props","root-props",-1015460595)], null),root_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"linked-props","linked-props",1547374714)], null),linked_props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035)], null),idents_in_joins),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717)], null),prop__GT_classes);
}));
});
com.fulcrologic.fulcro.algorithms.indexing.index_component_STAR_ = (function com$fulcrologic$fulcro$algorithms$indexing$index_component_STAR_(runtime_state,instance,ident,cls){
var k = com.fulcrologic.fulcro.raw.components.class__GT_registry_key(cls);
var G__53866 = runtime_state;
var G__53866__$1 = (cljs.core.truth_(k)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__53866,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"class->components","class->components",436435919),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),instance):G__53866);
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__53866__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224),ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),instance);
} else {
return G__53866__$1;
}
});
/**
 * Add a component instance to the app index. This adds the component to the `class->components` and
 * `ident->components` indexes.
 */
com.fulcrologic.fulcro.algorithms.indexing.index_component_BANG_ = (function com$fulcrologic$fulcro$algorithms$indexing$index_component_BANG_(this$){
var map__53871 = com.fulcrologic.fulcro.raw.components.any__GT_app(this$);
var map__53871__$1 = cljs.core.__destructure_map(map__53871);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53871__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var get_ident = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ident","ident",-742346)], 0));
var cls = com.fulcrologic.fulcro.raw.components.component_type(this$);
var props = com.fulcrologic.fulcro.raw.components.props(this$);
var ident = (cljs.core.truth_(get_ident)?(get_ident.cljs$core$IFn$_invoke$arity$2 ? get_ident.cljs$core$IFn$_invoke$arity$2(this$,props) : get_ident.call(null, this$,props)):null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5043__auto__ = ident;
if(cljs.core.truth_(and__5043__auto__)){
return (!(edn_query_language.core.ident_QMARK_(ident)));
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.indexing",null,97,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component",com.fulcrologic.fulcro.raw.components.component_name(this$),"supplied an invalid ident",ident,"using props",props,"See https://book.fulcrologic.com/#err-idx-invalid-ident"], null);
}),null)),null,1622055318,null);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = ident;
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.second(ident) == null);
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.algorithms.indexing",null,99,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(this$)),"'s ident (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident),") has a `nil` second element."," This warning can be safely ignored if that is intended."].join(''),"Props were",props], null);
}),null)),null,-508715637,null);
} else {
}
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,com.fulcrologic.fulcro.algorithms.indexing.index_component_STAR_,this$,ident,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cls], 0));
});
com.fulcrologic.fulcro.algorithms.indexing.drop_component_STAR_ = (function com$fulcrologic$fulcro$algorithms$indexing$drop_component_STAR_(runtime_state,instance,ident,cls){
var k = com.fulcrologic.fulcro.raw.components.class__GT_registry_key(cls);
var G__53882 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(runtime_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"class->components","class->components",436435919),k], null),cljs.core.disj,instance);
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__53882,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938),new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224),ident], null),cljs.core.disj,instance);
} else {
return G__53882;
}
});
/**
 * Remove the component instance from the indexes. If ident is supplied it uses that, otherwise it gets the
 *   ident from the component itself.
 */
com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_ = (function com$fulcrologic$fulcro$algorithms$indexing$drop_component_BANG_(var_args){
var G__53889 = arguments.length;
switch (G__53889) {
case 2:
return com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,ident){
var map__53898 = com.fulcrologic.fulcro.raw.components.any__GT_app(this$);
var map__53898__$1 = cljs.core.__destructure_map(map__53898);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53898__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var cls = com.fulcrologic.fulcro.raw.components.component_type(this$);
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return ident;
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"com.fulcrologic.fulcro.algorithms.indexing",null,121,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropping component from index",com.fulcrologic.fulcro.raw.components.component_name(cls),ident], null);
}),null)),null,778765482,null);
} else {
}

if(cljs.core.truth_(ident)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,com.fulcrologic.fulcro.algorithms.indexing.drop_component_STAR_,this$,ident,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cls], 0));
} else {
return null;
}
}));

(com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
var old_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$);
return com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_.cljs$core$IFn$_invoke$arity$2(this$,old_ident);
}));

(com.fulcrologic.fulcro.algorithms.indexing.drop_component_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Mutation: re-index the application (typically after a dynamic query change).
 */
com.fulcrologic.fulcro.algorithms.indexing.reindex = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.indexing","reindex","com.fulcrologic.fulcro.algorithms.indexing/reindex",1347487905,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.indexing","reindex","com.fulcrologic.fulcro.algorithms.indexing/reindex",1347487905,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$algorithms$indexing$action(p__53910){
var map__53914 = p__53910;
var map__53914__$1 = cljs.core.__destructure_map(map__53914);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__53919_53974 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__53920_53975 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__53920_53975);

try{if(cljs.core.truth_(app__$1)){
com.fulcrologic.fulcro.algorithms.indexing.index_root_BANG_(app__$1);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.indexing",null,134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to re-index root. App was not set in the mutation env. See https://book.fulcrologic.com/#err-idx-missing-app"], null);
}),null)),null,1218989357,null);
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__53919_53974);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__53928 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__53929 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__53929);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null, env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__53928);
}})], null);
}));

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.indexing.js.map
