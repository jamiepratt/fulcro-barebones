goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing');

/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$remove_send_BANG_(p__53783,remote,txn_id,ele_idx){
var map__53785 = p__53783;
var map__53785__$1 = cljs.core.__destructure_map(map__53785);
var app__$1 = map__53785__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53785__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__53790 = cljs.core.deref(runtime_atom);
var map__53790__$1 = cljs.core.__destructure_map(map__53790);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53790__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var old_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var queue = cljs.core.filterv((function (p__53792){
var map__53793 = p__53792;
var map__53793__$1 = cljs.core.__destructure_map(map__53793);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53793__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53793__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
}),old_queue);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),queue);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remove_send_BANG_;
/**
 * Returns the remotes map from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$app__GT_remotes(app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517)], null);

return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
});
/**
 * Returns a set of the names of the remotes from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$app__GT_remote_names(app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

return cljs.core.set(cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)))));
});
/**
 * Splits the given send queue into two send queues:
 *   [parallel-items sequential-items].
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.extract_parallel = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$extract_parallel(sends){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53799){
return cljs.core.vector_QMARK_(G__53799);
})], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rest","rest",-1241696419)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null))], null);

var parallel_QMARK_ = (function (p__53804){
var map__53806 = p__53804;
var map__53806__$1 = cljs.core.__destructure_map(map__53806);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53806__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return cljs.core.boolean$((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535).cljs$core$IFn$_invoke$arity$1(options);
}
})());
});
var map__53802 = cljs.core.group_by(parallel_QMARK_,sends);
var map__53802__$1 = cljs.core.__destructure_map(map__53802);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53802__$1,true);
var sequential = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53802__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(parallel),cljs.core.vec(sequential)], null);
});
/**
 * Check if the given `test` predicate is true for an AST node or for all the immediate children of an AST tree.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$every_ast_QMARK_(ast_node_or_tree,test){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree))){
return cljs.core.every_QMARK_(test,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree));
} else {
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(ast_node_or_tree) : test.call(null, ast_node_or_tree));
}
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$mutation_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__53818_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__53818_SHARP_));
}));
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.query_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$query_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__53833_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__53833_SHARP_));
}));
});
/**
 * Sort function on a send queue. Leaves any active nodes in front, and sorts the remainder of the queue so that writes
 *   appear before reads, without changing the relative order in blocks of reads/writes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.sort_queue_writes_before_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$sort_queue_writes_before_reads(send_queue){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null);

var vec__53860 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_queue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53860,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53860,(1),null);
var id_sequence = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(n));
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),send_queue__$1));
var clusters = cljs.core.group_by(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.vec(send_queue__$1));
var map__53863 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,id){
var vec__53867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,id);
var seq__53868 = cljs.core.seq(vec__53867);
var first__53869 = cljs.core.first(seq__53868);
var seq__53868__$1 = cljs.core.next(seq__53868);
var map__53870 = first__53869;
var map__53870__$1 = cljs.core.__destructure_map(map__53870);
var n = map__53870__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53870__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var _ = seq__53868__$1;
var cluster = vec__53867;
if((ast == null)){
return result;
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.query_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.into,cluster);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.into,cluster);
} else {
return result;

}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.PersistentVector.EMPTY], null),id_sequence);
var map__53863__$1 = cljs.core.__destructure_map(map__53863);
var reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53863__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var writes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53863__$1,new cljs.core.Keyword(null,"writes","writes",-102226269));
var send_queue__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_queue,writes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reads], 0)));
return send_queue__$2;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$top_keys(p__53874){
var map__53875 = p__53874;
var map__53875__$1 = cljs.core.__destructure_map(map__53875);
var ast = map__53875__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53875__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53875__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53875__$1,new cljs.core.Keyword(null,"children","children",-940561982));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53878){
return cljs.core.coll_QMARK_(G__53878);
})], null),null)], null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),children);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$create_combined_node(app__$1,remote_name,p__53881){
var vec__53883 = p__53881;
var leader = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53883,(0),null);
var to_send = vec__53883;
var tx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__53886){
var map__53887 = p__53886;
var map__53887__$1 = cljs.core.__destructure_map(map__53887);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53887__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var tx = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(ast);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,tx);
}),cljs.core.PersistentVector.EMPTY,to_send);
var ast = edn_query_language.core.query__GT_ast(tx);
var options = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(leader);
var combined_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var combined_node_idx = (0);
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var combined_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),combined_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),combined_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),(function (combined_result){
var seq__53890 = cljs.core.seq(to_send);
var chunk__53891 = null;
var count__53892 = (0);
var i__53893 = (0);
while(true){
if((i__53893 < count__53892)){
var map__53905 = chunk__53891.cljs$core$IIndexed$_nth$arity$2(null, i__53893);
var map__53905__$1 = cljs.core.__destructure_map(map__53905);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53905__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null, combined_result));
} else {
}


var G__54536 = seq__53890;
var G__54537 = chunk__53891;
var G__54538 = count__53892;
var G__54539 = (i__53893 + (1));
seq__53890 = G__54536;
chunk__53891 = G__54537;
count__53892 = G__54538;
i__53893 = G__54539;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53890);
if(temp__5804__auto__){
var seq__53890__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53890__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53890__$1);
var G__54540 = cljs.core.chunk_rest(seq__53890__$1);
var G__54541 = c__5568__auto__;
var G__54542 = cljs.core.count(c__5568__auto__);
var G__54543 = (0);
seq__53890 = G__54540;
chunk__53891 = G__54541;
count__53892 = G__54542;
i__53893 = G__54543;
continue;
} else {
var map__53909 = cljs.core.first(seq__53890__$1);
var map__53909__$1 = cljs.core.__destructure_map(map__53909);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53909__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null, combined_result));
} else {
}


var G__54544 = cljs.core.next(seq__53890__$1);
var G__54545 = null;
var G__54546 = (0);
var G__54547 = (0);
seq__53890 = G__54544;
chunk__53891 = G__54545;
count__53892 = G__54546;
i__53893 = G__54547;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__53913){
var map__53916 = p__53913;
var map__53916__$1 = cljs.core.__destructure_map(map__53916);
var combined_result = map__53916__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53916__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,combined_node_id,combined_node_idx) : remove_BANG_.call(null, app__$1,remote_name,combined_node_id,combined_node_idx));

var seq__53921 = cljs.core.seq(to_send);
var chunk__53922 = null;
var count__53923 = (0);
var i__53924 = (0);
while(true){
if((i__53924 < count__53923)){
var map__53947 = chunk__53922.cljs$core$IIndexed$_nth$arity$2(null, i__53924);
var map__53947__$1 = cljs.core.__destructure_map(map__53947);
var ast__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53947__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53947__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_54548 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys(ast__$1)):body);
var result_54549 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_54548);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var map__53951_54550 = result_54549;
var map__53951_54551__$1 = cljs.core.__destructure_map(map__53951_54550);
var status_code_54552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53951_54551__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_54553__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53951_54551__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_54552)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_54553__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_54552));
}
}catch (e53950){var e_54554 = e53950;
}} else {
}

(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(result_54549) : result_handler.call(null, result_54549));


var G__54555 = seq__53921;
var G__54556 = chunk__53922;
var G__54557 = count__53923;
var G__54558 = (i__53924 + (1));
seq__53921 = G__54555;
chunk__53922 = G__54556;
count__53923 = G__54557;
i__53924 = G__54558;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53921);
if(temp__5804__auto__){
var seq__53921__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53921__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53921__$1);
var G__54559 = cljs.core.chunk_rest(seq__53921__$1);
var G__54560 = c__5568__auto__;
var G__54561 = cljs.core.count(c__5568__auto__);
var G__54562 = (0);
seq__53921 = G__54559;
chunk__53922 = G__54560;
count__53923 = G__54561;
i__53924 = G__54562;
continue;
} else {
var map__53954 = cljs.core.first(seq__53921__$1);
var map__53954__$1 = cljs.core.__destructure_map(map__53954);
var ast__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53954__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53954__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_54563 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys(ast__$1)):body);
var result_54564 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_54563);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var map__53962_54567 = result_54564;
var map__53962_54568__$1 = cljs.core.__destructure_map(map__53962_54567);
var status_code_54569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53962_54568__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_54570__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53962_54568__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_54569)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_54570__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_54569));
}
}catch (e53960){var e_54571 = e53960;
}} else {
}

(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(result_54564) : result_handler.call(null, result_54564));


var G__54572 = cljs.core.next(seq__53921__$1);
var G__54573 = null;
var G__54574 = (0);
var G__54575 = (0);
seq__53921 = G__54572;
chunk__53922 = G__54573;
count__53923 = G__54574;
i__53924 = G__54575;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
return combined_node;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$node_abort_id(n){
var or__5045__auto__ = (function (){var G__53970 = n;
var G__53970__$1 = (((G__53970 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(G__53970));
if((G__53970__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(G__53970__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__53971 = n;
var G__53971__$1 = (((G__53971 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(G__53971));
if((G__53971__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(G__53971__$1);
}
}
});
/**
 * Returns true if the given transaction node represents one or more mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$mutation_node_QMARK_(p__53976){
var map__53978 = p__53976;
var map__53978__$1 = cljs.core.__destructure_map(map__53978);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53978__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
return ((cljs.core.map_QMARK_(ast)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast))) || (cljs.core.boolean$(cljs.core.some((function (p1__53972_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__53972_SHARP_));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)))))));
});
/**
 * Returns true when ALL of the ::txn/send-node entries in `to-send` can be batched into an existing batch.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batchable_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$batchable_QMARK_(to_send,leader){
var abort_id = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(leader);
return cljs.core.boolean$(((cljs.core.seq(to_send)) && (((cljs.core.every_QMARK_((function (n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(abort_id,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(n));
}),to_send)) && (cljs.core.not(cljs.core.some(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_,to_send)))))));
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batch_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$batch_sends(app__$1,remote_name,send_queue){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__53996){
return cljs.core.map_QMARK_(G__53996);
}),(function (G__53996){
return cljs.core.contains_QMARK_(G__53996,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
})], null),(function (G__53996){
return ((cljs.core.map_QMARK_(G__53996)) && (cljs.core.contains_QMARK_(G__53996,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null)]))], null);

var prime_leader = cljs.core.first(send_queue);
var map__54019 = cljs.core.group_by((function (n){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batchable_QMARK_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prime_leader], null),n);
}),send_queue);
var map__54019__$1 = cljs.core.__destructure_map(map__54019);
var prime_candidates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54019__$1,true);
var to_defer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54019__$1,false);
var map__54020 = (function (){var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"batch","batch",-662921200),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remainder","remainder",1046186872),to_defer], null);
var queue = prime_candidates;
while(true){
var leader = cljs.core.first(queue);
var vec__54035 = cljs.core.split_with(((function (result,queue,leader,prime_leader,map__54019,map__54019__$1,prime_candidates,to_defer){
return (function (p1__53995_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(leader),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__53995_SHARP_));
});})(result,queue,leader,prime_leader,map__54019,map__54019__$1,prime_candidates,to_defer))
,queue);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54035,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54035,(1),null);
var combined_node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node(app__$1,remote_name,to_send);
var new_result = cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"batch","batch",-662921200),cljs.core.conj,combined_node);
if(cljs.core.seq(remainder)){
var G__54582 = new_result;
var G__54583 = remainder;
result = G__54582;
queue = G__54583;
continue;
} else {
return new_result;
}
break;
}
})();
var map__54020__$1 = cljs.core.__destructure_map(map__54020);
var batch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54020__$1,new cljs.core.Keyword(null,"batch","batch",-662921200));
var remainder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54020__$1,new cljs.core.Keyword(null,"remainder","remainder",1046186872));
var batch_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var batch_node_idx = (0);
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var batch_node = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),batch_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),batch_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","raw-body","com.fulcrologic.fulcro.algorithms.tx-processing/raw-body",-819595969),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__54060){
var map__54061 = p__54060;
var map__54061__$1 = cljs.core.__destructure_map(map__54061);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54061__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(ast);
}),batch)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),(function (){var or__5045__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(prime_leader);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299),batch,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),(function (combined_result){
var G__54064 = cljs.core.first(batch);
var map__54065 = G__54064;
var map__54065__$1 = cljs.core.__destructure_map(map__54065);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54065__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
var more_batch = cljs.core.next(batch);
var result = cljs.core.first(combined_result);
var more_result = cljs.core.next(combined_result);
var G__54064__$1 = G__54064;
var more_batch__$1 = more_batch;
var result__$1 = result;
var more_result__$1 = more_result;
while(true){
var map__54068 = G__54064__$1;
var map__54068__$1 = cljs.core.__destructure_map(map__54068);
var update_handler__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54068__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
var more_batch__$2 = more_batch__$1;
var result__$2 = result__$1;
var more_result__$2 = more_result__$1;
if(cljs.core.truth_(update_handler__$1)){
(update_handler__$1.cljs$core$IFn$_invoke$arity$1 ? update_handler__$1.cljs$core$IFn$_invoke$arity$1(result__$2) : update_handler__$1.call(null, result__$2));
} else {
}

if(((cljs.core.seq(more_batch__$2)) && (cljs.core.seq(more_result__$2)))){
var G__54584 = cljs.core.first(more_batch__$2);
var G__54585 = cljs.core.next(more_batch__$2);
var G__54586 = cljs.core.first(more_result__$2);
var G__54587 = cljs.core.next(more_result__$2);
G__54064__$1 = G__54584;
more_batch__$1 = G__54585;
result__$1 = G__54586;
more_result__$1 = G__54587;
continue;
} else {
return null;
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__54069){
var map__54070 = p__54069;
var map__54070__$1 = cljs.core.__destructure_map(map__54070);
var batch_result = map__54070__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54070__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,batch_node_id,batch_node_idx) : remove_BANG_.call(null, app__$1,remote_name,batch_node_id,batch_node_idx));

var G__54072 = cljs.core.first(batch);
var map__54073 = G__54072;
var map__54073__$1 = cljs.core.__destructure_map(map__54073);
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54073__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var more_batch = cljs.core.next(batch);
var result = cljs.core.first(body);
var more_result = cljs.core.next(body);
var G__54072__$1 = G__54072;
var more_batch__$1 = more_batch;
var result__$1 = result;
var more_result__$1 = more_result;
while(true){
var map__54076 = G__54072__$1;
var map__54076__$1 = cljs.core.__destructure_map(map__54076);
var result_handler__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54076__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var more_batch__$2 = more_batch__$1;
var result__$2 = result__$1;
var more_result__$2 = more_result__$1;
var G__54077_54590 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(batch_result,new cljs.core.Keyword(null,"body","body",-2049205669),result__$2);
(result_handler__$1.cljs$core$IFn$_invoke$arity$1 ? result_handler__$1.cljs$core$IFn$_invoke$arity$1(G__54077_54590) : result_handler__$1.call(null, G__54077_54590));

if(((cljs.core.seq(more_batch__$2)) && (cljs.core.seq(more_result__$2)))){
var G__54593 = cljs.core.first(more_batch__$2);
var G__54594 = cljs.core.next(more_batch__$2);
var G__54595 = cljs.core.first(more_result__$2);
var G__54596 = cljs.core.next(more_result__$2);
G__54072__$1 = G__54593;
more_batch__$1 = G__54594;
result__$1 = G__54595;
more_result__$1 = G__54596;
continue;
} else {
return null;
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
if((cljs.core.count(batch) > (1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,212,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Batched:",cljs.core.count(batch)], null);
}),null)),null,-1434267507,null);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),batch_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [batch_node], null),remainder)], null);
});
/**
 * Takes a send queue and returns a map containing a new combined send node that can act as a single network request,
 *   along with the updated send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$combine_sends(app__$1,remote_name,send_queue){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__54082){
return cljs.core.map_QMARK_(G__54082);
}),(function (G__54082){
return cljs.core.contains_QMARK_(G__54082,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
})], null),(function (G__54082){
return ((cljs.core.map_QMARK_(G__54082)) && (cljs.core.contains_QMARK_(G__54082,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null)]))], null);

if(cljs.core.seq(send_queue)){
var map__54096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes(app__$1),remote_name);
var map__54096__$1 = cljs.core.__destructure_map(map__54096);
var supports_raw_body_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54096__$1,new cljs.core.Keyword(null,"supports-raw-body?","supports-raw-body?",132893061));
var vec__54097 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var _active_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54097,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54097,(1),null);
var send_queue__$2 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.sort_queue_writes_before_reads(cljs.core.vec(send_queue__$1));
var id_to_send = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var vec__54100 = cljs.core.split_with((function (p1__54079_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_to_send,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__54079_SHARP_));
}),send_queue__$2);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54100,(0),null);
var to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54100,(1),null);
var leading_mutation_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_(cljs.core.first(to_send));
var batched_reads_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692),remote_name], null),false);
var batch_QMARK_ = (function (){var and__5043__auto__ = batched_reads_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return supports_raw_body_QMARK_;
} else {
return and__5043__auto__;
}
})();
if(((leading_mutation_QMARK_) || (cljs.core.not(batch_QMARK_)))){
if(cljs.core.seq(to_send)){
var combined_node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node(app__$1,remote_name,to_send);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),combined_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combined_node], null),to_defer)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),send_queue__$2], null);
}
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batch_sends(app__$1,remote_name,send_queue__$2);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.PersistentVector.EMPTY], null);
}
});
/**
 * Process the send against the user-defined remote. Catches exceptions and calls error handler with status code 500
 *   if the remote itself throws exceptions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$net_send_BANG_(app__$1,send_node,remote_name){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var b2__44625__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__44625__auto__)){
var remote = b2__44625__auto__;
var b2__44625__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote,new cljs.core.Keyword(null,"transmit!","transmit!",-107149039));
if(cljs.core.truth_(b2__44625__auto____$1)){
var transmit_BANG_ = b2__44625__auto____$1;
try{if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var temp__5802__auto___54612 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299).cljs$core$IFn$_invoke$arity$1(send_node);
if(cljs.core.truth_(temp__5802__auto___54612)){
var batch_54613 = temp__5802__auto___54612;
var seq__54175_54614 = cljs.core.seq(batch_54613);
var chunk__54176_54615 = null;
var count__54177_54616 = (0);
var i__54178_54617 = (0);
while(true){
if((i__54178_54617 < count__54177_54616)){
var element_node_54618 = chunk__54176_54615.cljs$core$IIndexed$_nth$arity$2(null, i__54178_54617);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_54619 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(element_node_54618));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_54618),tx_54619);
}catch (e54192){var e_54620 = e54192;
}} else {
}


var G__54621 = seq__54175_54614;
var G__54622 = chunk__54176_54615;
var G__54623 = count__54177_54616;
var G__54624 = (i__54178_54617 + (1));
seq__54175_54614 = G__54621;
chunk__54176_54615 = G__54622;
count__54177_54616 = G__54623;
i__54178_54617 = G__54624;
continue;
} else {
var temp__5804__auto___54625 = cljs.core.seq(seq__54175_54614);
if(temp__5804__auto___54625){
var seq__54175_54626__$1 = temp__5804__auto___54625;
if(cljs.core.chunked_seq_QMARK_(seq__54175_54626__$1)){
var c__5568__auto___54627 = cljs.core.chunk_first(seq__54175_54626__$1);
var G__54628 = cljs.core.chunk_rest(seq__54175_54626__$1);
var G__54629 = c__5568__auto___54627;
var G__54630 = cljs.core.count(c__5568__auto___54627);
var G__54631 = (0);
seq__54175_54614 = G__54628;
chunk__54176_54615 = G__54629;
count__54177_54616 = G__54630;
i__54178_54617 = G__54631;
continue;
} else {
var element_node_54632 = cljs.core.first(seq__54175_54626__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_54633 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(element_node_54632));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_54632),tx_54633);
}catch (e54197){var e_54634 = e54197;
}} else {
}


var G__54635 = cljs.core.next(seq__54175_54626__$1);
var G__54636 = null;
var G__54637 = (0);
var G__54638 = (0);
seq__54175_54614 = G__54635;
chunk__54176_54615 = G__54636;
count__54177_54616 = G__54637;
i__54178_54617 = G__54638;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_54639 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),tx_54639);
}catch (e54198){var e_54640 = e54198;
}} else {
}
}
}catch (e54171){var e_54641 = e54171;
}} else {
}

return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(remote,send_node) : transmit_BANG_.call(null, remote,send_node));
}catch (e54116){var e = e54116;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,256,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Send threw an exception for tx:",com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node)),"See https://book.fulcrologic.com/#err-txp-send-exc"], null);
}),null)),null,-1834718096,null);

try{if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var temp__5802__auto___54642 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299).cljs$core$IFn$_invoke$arity$1(send_node);
if(cljs.core.truth_(temp__5802__auto___54642)){
var batch_54643 = temp__5802__auto___54642;
var seq__54134_54644 = cljs.core.seq(batch_54643);
var chunk__54135_54645 = null;
var count__54136_54646 = (0);
var i__54137_54647 = (0);
while(true){
if((i__54137_54647 < count__54136_54646)){
var element_node_54648 = chunk__54135_54645.cljs$core$IIndexed$_nth$arity$2(null, i__54137_54647);
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_54648),"Transmit Exception");


var G__54649 = seq__54134_54644;
var G__54650 = chunk__54135_54645;
var G__54651 = count__54136_54646;
var G__54652 = (i__54137_54647 + (1));
seq__54134_54644 = G__54649;
chunk__54135_54645 = G__54650;
count__54136_54646 = G__54651;
i__54137_54647 = G__54652;
continue;
} else {
var temp__5804__auto___54653 = cljs.core.seq(seq__54134_54644);
if(temp__5804__auto___54653){
var seq__54134_54654__$1 = temp__5804__auto___54653;
if(cljs.core.chunked_seq_QMARK_(seq__54134_54654__$1)){
var c__5568__auto___54655 = cljs.core.chunk_first(seq__54134_54654__$1);
var G__54656 = cljs.core.chunk_rest(seq__54134_54654__$1);
var G__54657 = c__5568__auto___54655;
var G__54658 = cljs.core.count(c__5568__auto___54655);
var G__54659 = (0);
seq__54134_54644 = G__54656;
chunk__54135_54645 = G__54657;
count__54136_54646 = G__54658;
i__54137_54647 = G__54659;
continue;
} else {
var element_node_54660 = cljs.core.first(seq__54134_54654__$1);
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_54660),"Transmit Exception");


var G__54661 = cljs.core.next(seq__54134_54654__$1);
var G__54662 = null;
var G__54663 = (0);
var G__54664 = (0);
seq__54134_54644 = G__54661;
chunk__54135_54645 = G__54662;
count__54136_54646 = G__54663;
i__54137_54647 = G__54664;
continue;
}
} else {
}
}
break;
}
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),"Transmit Exception");
}
}catch (e54131){var e_54665__$1 = e54131;
}} else {
}

var G__54159 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"client-exception","client-exception",-1357213384),e], null);
var fexpr__54158 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__54158.cljs$core$IFn$_invoke$arity$1 ? fexpr__54158.cljs$core$IFn$_invoke$arity$1(G__54159) : fexpr__54158.call(null, G__54159));
}catch (e54123){var e__$1 = e54123;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,266,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,"Error handler failed to handle exception!"], null);
}),null)),null,1183660893,null);
}}} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,268,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name,"See https://book.fulcrologic.com/#err-txp-remote-lacks-transmit"], null);
}),null)),null,2032149297,null);

var G__54202 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__54201 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__54201.cljs$core$IFn$_invoke$arity$1 ? fexpr__54201.cljs$core$IFn$_invoke$arity$1(G__54202) : fexpr__54201.call(null, G__54202));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,268,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name,"See https://book.fulcrologic.com/#err-txp-remote-lacks-transmit"], null);
}),null)),null,754925280,null);

var G__54206 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__54205 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__54205.cljs$core$IFn$_invoke$arity$1 ? fexpr__54205.cljs$core$IFn$_invoke$arity$1(G__54206) : fexpr__54205.call(null, G__54206));
}
});
/**
 * Process the send queues against the remotes. Updates the send queues on the app and returns the updated send queues.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_send_queues_BANG_(p__54207){
var map__54208 = p__54207;
var map__54208__$1 = cljs.core.__destructure_map(map__54208);
var app__$1 = map__54208__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54208__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807)], null);

var send_queues = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_send_queues,remote){
var send_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$3(send_queues,remote,cljs.core.PersistentVector.EMPTY);
var vec__54209 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.extract_parallel(send_queue);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54209,(0),null);
var serial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54209,(1),null);
var front = cljs.core.first(serial);
var seq__54218_54667 = cljs.core.seq(p);
var chunk__54219_54668 = null;
var count__54220_54669 = (0);
var i__54221_54670 = (0);
while(true){
if((i__54221_54670 < count__54220_54669)){
var item_54671 = chunk__54219_54668.cljs$core$IIndexed$_nth$arity$2(null, i__54221_54670);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__54218_54667,chunk__54219_54668,count__54220_54669,i__54221_54670,item_54671,send_queue,vec__54209,p,serial,front,send_queues,remote_names,operations,map__54208,map__54208__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_54671,remote);
});})(seq__54218_54667,chunk__54219_54668,count__54220_54669,i__54221_54670,item_54671,send_queue,vec__54209,p,serial,front,send_queues,remote_names,operations,map__54208,map__54208__$1,app__$1,runtime_atom))
);


var G__54672 = seq__54218_54667;
var G__54673 = chunk__54219_54668;
var G__54674 = count__54220_54669;
var G__54675 = (i__54221_54670 + (1));
seq__54218_54667 = G__54672;
chunk__54219_54668 = G__54673;
count__54220_54669 = G__54674;
i__54221_54670 = G__54675;
continue;
} else {
var temp__5804__auto___54676 = cljs.core.seq(seq__54218_54667);
if(temp__5804__auto___54676){
var seq__54218_54677__$1 = temp__5804__auto___54676;
if(cljs.core.chunked_seq_QMARK_(seq__54218_54677__$1)){
var c__5568__auto___54678 = cljs.core.chunk_first(seq__54218_54677__$1);
var G__54679 = cljs.core.chunk_rest(seq__54218_54677__$1);
var G__54680 = c__5568__auto___54678;
var G__54681 = cljs.core.count(c__5568__auto___54678);
var G__54682 = (0);
seq__54218_54667 = G__54679;
chunk__54219_54668 = G__54680;
count__54220_54669 = G__54681;
i__54221_54670 = G__54682;
continue;
} else {
var item_54683 = cljs.core.first(seq__54218_54677__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__54218_54667,chunk__54219_54668,count__54220_54669,i__54221_54670,item_54683,seq__54218_54677__$1,temp__5804__auto___54676,send_queue,vec__54209,p,serial,front,send_queues,remote_names,operations,map__54208,map__54208__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_54683,remote);
});})(seq__54218_54667,chunk__54219_54668,count__54220_54669,i__54221_54670,item_54683,seq__54218_54677__$1,temp__5804__auto___54676,send_queue,vec__54209,p,serial,front,send_queues,remote_names,operations,map__54208,map__54208__$1,app__$1,runtime_atom))
);


var G__54684 = cljs.core.next(seq__54218_54677__$1);
var G__54685 = null;
var G__54686 = (0);
var G__54687 = (0);
seq__54218_54667 = G__54684;
chunk__54219_54668 = G__54685;
count__54220_54669 = G__54686;
i__54221_54670 = G__54687;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517).cljs$core$IFn$_invoke$arity$1(front))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,serial);
} else {
var map__54225 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends(app__$1,remote,serial);
var map__54225__$1 = cljs.core.__destructure_map(map__54225);
var send_queue__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54225__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54225__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,(function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,send_node,remote);
}));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,send_queue__$1);
}
}),cljs.core.PersistentArrayMap.EMPTY,remote_names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);

var seq__54226_54688 = cljs.core.seq(cljs.core.deref(operations));
var chunk__54227_54689 = null;
var count__54228_54690 = (0);
var i__54229_54691 = (0);
while(true){
if((i__54229_54691 < count__54228_54690)){
var op_54692 = chunk__54227_54689.cljs$core$IIndexed$_nth$arity$2(null, i__54229_54691);
(op_54692.cljs$core$IFn$_invoke$arity$0 ? op_54692.cljs$core$IFn$_invoke$arity$0() : op_54692.call(null, ));


var G__54693 = seq__54226_54688;
var G__54694 = chunk__54227_54689;
var G__54695 = count__54228_54690;
var G__54696 = (i__54229_54691 + (1));
seq__54226_54688 = G__54693;
chunk__54227_54689 = G__54694;
count__54228_54690 = G__54695;
i__54229_54691 = G__54696;
continue;
} else {
var temp__5804__auto___54697 = cljs.core.seq(seq__54226_54688);
if(temp__5804__auto___54697){
var seq__54226_54698__$1 = temp__5804__auto___54697;
if(cljs.core.chunked_seq_QMARK_(seq__54226_54698__$1)){
var c__5568__auto___54699 = cljs.core.chunk_first(seq__54226_54698__$1);
var G__54700 = cljs.core.chunk_rest(seq__54226_54698__$1);
var G__54701 = c__5568__auto___54699;
var G__54702 = cljs.core.count(c__5568__auto___54699);
var G__54703 = (0);
seq__54226_54688 = G__54700;
chunk__54227_54689 = G__54701;
count__54228_54690 = G__54702;
i__54229_54691 = G__54703;
continue;
} else {
var op_54704 = cljs.core.first(seq__54226_54698__$1);
(op_54704.cljs$core$IFn$_invoke$arity$0 ? op_54704.cljs$core$IFn$_invoke$arity$0() : op_54704.call(null, ));


var G__54705 = cljs.core.next(seq__54226_54698__$1);
var G__54706 = null;
var G__54707 = (0);
var G__54708 = (0);
seq__54226_54688 = G__54705;
chunk__54227_54689 = G__54706;
count__54228_54690 = G__54707;
i__54229_54691 = G__54708;
continue;
}
} else {
}
}
break;
}

return new_send_queues;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$tx_node(var_args){
var G__54235 = arguments.length;
switch (G__54235) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$1 = (function (tx){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2 = (function (tx,options){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var ast = edn_query_language.core.query__GT_ast(tx);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var elements = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$txfilt_STAR_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n));
})),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$__GT_txnode_STAR_(idx,ast_node){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477),ast_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),cljs.core.PersistentArrayMap.EMPTY], null);
}))),ast_nodes);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","created","com.fulcrologic.fulcro.algorithms.tx-processing/created",859806789),com.fulcrologic.fulcro.algorithms.do_not_use.now(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),tx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),elements], null);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$build_env(var_args){
var G__54239 = arguments.length;
switch (G__54239) {
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3 = (function (app__$1,p__54240,addl){
var map__54241 = p__54240;
var map__54241__$1 = cljs.core.__destructure_map(map__54241);
var tx_node = map__54241__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54241__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

var map__54242 = options;
var map__54242__$1 = cljs.core.__destructure_map(map__54242);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54242__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54242__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__54243 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1),new cljs.core.Keyword(null,"app","app",-560961707),app__$1], null)], 0));
var G__54243__$1 = (cljs.core.truth_(options)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54243,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options):G__54243);
var G__54243__$2 = (cljs.core.truth_(ref)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54243__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),ref):G__54243__$1);
if(cljs.core.truth_(component)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54243__$2,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__54243__$2;
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__54245){
var map__54247 = p__54245;
var map__54247__$1 = cljs.core.__destructure_map(map__54247);
var tx_node = map__54247__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54247__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$lang$maxFixedArity = 3);

/**
 * Run through the elements on the given tx-node and do the side-effect-free dispatch. This generates the dispatch map
 *   of things to do on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements(tx_node,env,dispatch_fn){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var do_dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements_$_run_STAR_(env__$1){
try{return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(env__$1) : dispatch_fn.call(null, env__$1));
}catch (e54248){var e = e54248;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,352,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Dispatch for mutation",(function (){var G__54250 = env__$1;
var G__54250__$1 = (((G__54250 == null))?null:new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(G__54250));
if((G__54250__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(G__54250__$1);
}
})(),"failed with an exception. No dispatch generated. See https://book.fulcrologic.com/#err-txp-mut-dispatch-exc"], null);
}),null)),null,232951766,null);

return cljs.core.PersistentArrayMap.EMPTY;
}});
var dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements_$_dispatch_STAR_(p__54251){
var map__54252 = p__54251;
var map__54252__$1 = cljs.core.__destructure_map(map__54252);
var ele = map__54252__$1;
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54252__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__54254 = original_ast_node;
var map__54254__$1 = cljs.core.__destructure_map(map__54254);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54254__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node);
var G__54256 = ele;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54256,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),do_dispatch(env__$1));
} else {
return G__54256;
}
});
var dispatch_all = (function (eles){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dispatch,eles);
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),dispatch_all);
});
/**
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.application_rendered_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$application_rendered_BANG_(p__54258,options){
var map__54259 = p__54258;
var map__54259__$1 = cljs.core.__destructure_map(map__54259);
var app__$1 = map__54259__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54259__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
if(cljs.core.truth_(cljs.core.some((function (p1__54257_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"after-render?","after-render?",595994030).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(p1__54257_SHARP_)));
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),(function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
}),queue);
}));

return (com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0)) : com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.call(null, app__$1,(0)));
} else {
return null;
}
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 * 
 *   Activation can be blocked by the tx-node options for things like waiting for the next render frame.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$activate_submissions_BANG_(p__54264){
var map__54265 = p__54264;
var map__54265__$1 = cljs.core.__destructure_map(map__54265);
var app__$1 = map__54265__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54265__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__54266 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var map__54266__$1 = cljs.core.__destructure_map(map__54266);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54266__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54266__$1,false);
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54262_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements(p1__54262_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__54262_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
}),ready);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),(function (p1__54263_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__54263_SHARP_,dispatched_nodes);
})),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),cljs.core.vec(blocked));
}));

return (com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.call(null, app__$1));
});
/**
 * Schedule activation of submitted transactions.  The default implementation copies all submitted transactions onto
 * the active queue and immediately does an active queue processing step.  If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_activation_BANG_(var_args){
var G__54272 = arguments.length;
switch (G__54272) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","activation-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/activation-scheduled?",-955561668),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.activate_submissions_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a processing of the active queue, which will advance the active transactions by a step.
 * If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_queue_processing_BANG_(var_args){
var G__54276 = arguments.length;
switch (G__54276) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","queue-processing-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/queue-processing-scheduled?",-2065549690),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule actual network activity. If `tm` is not supplied (in ms) it defaults to 0ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_sends_BANG_(var_args){
var G__54280 = arguments.length;
switch (G__54280) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","sends-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/sends-scheduled?",-844941333),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_send_queues_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Runs any incomplete and non-blocked optimistic operations on a node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.advance_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$advance_actions_BANG_(app__$1,p__54283){
var map__54284 = p__54283;
var map__54284__$1 = cljs.core.__destructure_map(map__54284);
var node = map__54284__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54284__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54284__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var reduction = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__54285,element){
var map__54286 = p__54285;
var map__54286__$1 = cljs.core.__destructure_map(map__54286);
var acc = map__54286__$1;
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54286__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var new_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54286__$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171));
if(cljs.core.truth_(done_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj,element);
} else {
var map__54288 = element;
var map__54288__$1 = cljs.core.__destructure_map(map__54288);
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54288__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54288__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54288__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54288__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var map__54289 = dispatch;
var map__54289__$1 = cljs.core.__destructure_map(map__54289);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54289__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var remote_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.set(cljs.core.keys(dispatch)));
var exec_QMARK_ = (function (){var and__5043__auto__ = action;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var or__5045__auto__ = done_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null, new cljs.core.Keyword(null,"action","action",-811238024)));
}
})());
} else {
return and__5043__auto__;
}
})();
var fully_complete_QMARK_ = (function (){var and__5043__auto__ = (function (){var or__5045__auto__ = exec_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null, new cljs.core.Keyword(null,"action","action",-811238024)));
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remote_set,complete_QMARK_));
} else {
return and__5043__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var state_before = cljs.core.deref(state);
var updated_element = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var done_QMARK___$1 = cljs.core.not(fully_complete_QMARK_);
var new_acc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),done_QMARK___$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_element)], null);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{if(cljs.core.truth_(action)){
(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null, env));
} else {
}
}catch (e54292){var e_54763 = e54292;
var mutation_symbol_54764 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,445,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_54763,"The `action` section of mutation",mutation_symbol_54764,"threw an exception. See https://book.fulcrologic.com/#err-txp-mut-action-exc"], null);
}),null)),null,-574380133,null);
}
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_54767 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_54767], null));
}catch (e54293){var e_54769 = e54293;
}} else {
}
} else {
}

return new_acc;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.PersistentVector.EMPTY], null),elements);
var new_elements = new cljs.core.Keyword(null,"new-elements","new-elements",-378003171).cljs$core$IFn$_invoke$arity$1(reduction);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$run_actions_BANG_(app__$1,p__54295){
var map__54296 = p__54295;
var map__54296__$1 = cljs.core.__destructure_map(map__54296);
var node = map__54296__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54296__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54296__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var new_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_elements,element){
var map__54297 = element;
var map__54297__$1 = cljs.core.__destructure_map(map__54297);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54297__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54297__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54297__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54297__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__54298 = dispatch;
var map__54298__$1 = cljs.core.__destructure_map(map__54298);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54298__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var exec_QMARK_ = (function (){var and__5043__auto__ = action;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null, new cljs.core.Keyword(null,"action","action",-811238024))));
} else {
return and__5043__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var state_before = cljs.core.deref(state);
var updated_node = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var new_acc = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_node);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null, env));
}catch (e54302){var e_54778 = e54302;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,478,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_54778,"The `action` section threw an exception for mutation: ",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-mut-action-exc2"], null);
}),null)),null,1063764400,null);
}
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_54779 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_54779], null));
}catch (e54307){var e_54780 = e54307;
}} else {
}
} else {
}

return new_acc;
}),cljs.core.PersistentVector.EMPTY,elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.fully_complete_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$fully_complete_QMARK_(app__$1,p__54310){
var map__54311 = p__54310;
var map__54311__$1 = cljs.core.__destructure_map(map__54311);
var tx_node = map__54311__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54311__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var element_complete_QMARK_ = (function (p__54312){
var map__54313 = p__54312;
var map__54313__$1 = cljs.core.__destructure_map(map__54313);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54313__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54313__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var active_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),null], null), null),remotes);
var desired_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(active_keys,cljs.core.set(cljs.core.keys(dispatch)));
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(desired_set,complete_QMARK_));
});
return cljs.core.every_QMARK_(element_complete_QMARK_,elements);
});
/**
 * Record a network result on the given txn/element.
 * If result-key is given it is used, otherwise defaults to ::txn/results. Also removes the network send from the send
 * queue so that remaining items can proceed, and schedules send processing.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$record_result_BANG_(var_args){
var G__54317 = arguments.length;
switch (G__54317) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (p__54319,txn_id,ele_idx,remote,result,result_key){
var map__54321 = p__54319;
var map__54321__$1 = cljs.core.__destructure_map(map__54321);
var app__$1 = map__54321__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54321__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var active_queue = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var txn_idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__54322){
var map__54323 = p__54322;
var map__54323__$1 = cljs.core.__destructure_map(map__54323);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54323__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),active_queue);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,516,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue! See https://book.fulcrologic.com/#err-txp-res-lacks-valid-node"], null);
}),null)),null,-308045563,null);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6);

/**
 * Add the ::txn/desired-ast-nodes and ::txn/transmitted-ast-nodes for `remote` to the tx-element based on the dispatch for the `remote` of the original mutation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.compute_desired_ast_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$compute_desired_ast_node(app__$1,remote,tx_node,tx_element){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

var map__54326 = tx_element;
var map__54326__$1 = cljs.core.__destructure_map(map__54326);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54326__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54326__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var state_before_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54326__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778));
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node,new cljs.core.Keyword(null,"state-before-action","state-before-action",104906671),state_before_action], null));
var remote_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,remote);
var remote_desire = (cljs.core.truth_(remote_fn)?(remote_fn.cljs$core$IFn$_invoke$arity$1 ? remote_fn.cljs$core$IFn$_invoke$arity$1(env) : remote_fn.call(null, env)):null);
var desired_ast = ((((remote_desire === false) || ((remote_desire == null))))?null:((remote_desire === true)?original_ast_node:((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"ast","ast",-860334068)))))?new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(remote_desire):((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"type","type",1174270348)))))?remote_desire:(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,537,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote dispatch for",remote,"returned an invalid value.",remote_desire,"See https://book.fulcrologic.com/#err-txp-remote-dispatch-invalid-res"], null);
}),null)),null,418452927,null);

return remote_desire;
})()

))));
var query_transform = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
var ast = (cljs.core.truth_((function (){var and__5043__auto__ = desired_ast;
if(cljs.core.truth_(and__5043__auto__)){
return query_transform;
} else {
return and__5043__auto__;
}
})())?(query_transform.cljs$core$IFn$_invoke$arity$1 ? query_transform.cljs$core$IFn$_invoke$arity$1(desired_ast) : query_transform.call(null, desired_ast)):desired_ast);
var G__54329 = tx_element;
var G__54329__$1 = (cljs.core.truth_(desired_ast)?cljs.core.assoc_in(G__54329,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425),remote], null),desired_ast):G__54329);
if(cljs.core.truth_(ast)){
return cljs.core.assoc_in(G__54329__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null),ast);
} else {
return G__54329__$1;
}
});
/**
 * Generate a new send node and add it to the appropriate send queue. Returns the new send node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG_(p__54336,p__54337,ele_idx,remote){
var map__54338 = p__54336;
var map__54338__$1 = cljs.core.__destructure_map(map__54338);
var app__$1 = map__54338__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54338__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__54339 = p__54337;
var map__54339__$1 = cljs.core.__destructure_map(map__54339);
var tx_node = map__54339__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54339__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54339__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54339__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),null)], null);

var update_handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG__$_progress_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG__$_result_handler_STAR_(result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var map__54349_54790 = result;
var map__54349_54791__$1 = cljs.core.__destructure_map(map__54349_54790);
var status_code_54792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54349_54791__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_54793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54349_54791__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_54792)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote,id,body_54793);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_54792));
}
}catch (e54342){var e_54794 = e54342;
}} else {
}
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote,id,ele_idx) : remove_BANG_.call(null, app__$1,remote,id,ele_idx));

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(1));

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([send_node], 0));

return send_node;
} else {
handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null));

return null;
}
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_element_sends_BANG_(app__$1,tx_node,p__54357){
var map__54358 = p__54357;
var map__54358__$1 = cljs.core.__destructure_map(map__54358);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54358__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54358__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54358__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),(function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.compute_desired_ast_node(app__$1,remote,node,tx_element);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.add_send_BANG_(app__$1,updated_node,idx,remote);

return updated_node;
}
}),tx_node,to_dispatch);
});
/**
 * Returns true if the given node has no active network operations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.idle_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$idle_node_QMARK_(p__54362){
var map__54363 = p__54362;
var map__54363__$1 = cljs.core.__destructure_map(map__54363);
var tx_node = map__54363__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54363__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return cljs.core.every_QMARK_((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$idle_node_QMARK__$_idle_QMARK__STAR_(p__54364){
var map__54365 = p__54364;
var map__54365__$1 = cljs.core.__destructure_map(map__54365);
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54365__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54365__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var in_progress = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(started_QMARK_,complete_QMARK_);
return cljs.core.empty_QMARK_(in_progress);
}),elements);
});
/**
 * Returns a txnode element iff it has remaining (remote) work that has not been queued. Returns nil if there
 * is no such element.
 * 
 *   remote-names is the set of legal remote names.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.element_with_work = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$element_with_work(remote_names,p__54366){
var map__54367 = p__54366;
var map__54367__$1 = cljs.core.__destructure_map(map__54367);
var element = map__54367__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54367__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54367__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198),null)], null);

var todo = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remote_names,cljs.core.set(cljs.core.keys(dispatch)));
var remaining = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(todo,started_QMARK_);
if(cljs.core.seq(remaining)){
return element;
} else {
return null;
}
});
/**
 * Assumes tx-node is to be processed pessimistically. Queues the next send if the node is currently idle
 *   on the network and there are any sends left to do. Adds to the send queue, and returns the updated
 *   tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_next_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_next_send_BANG_(app__$1,p__54369){
var map__54372 = p__54369;
var map__54372__$1 = cljs.core.__destructure_map(map__54372);
var tx_node = map__54372__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54372__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

if(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.idle_node_QMARK_(tx_node)){
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var with_work = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.element_with_work,remotes);
var element = cljs.core.some(with_work,elements);
if(cljs.core.truth_(element)){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_(app__$1,tx_node,element);
} else {
return tx_node;
}
} else {
return tx_node;
}
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_sends_BANG_(app__$1,p__54374){
var map__54375 = p__54374;
var map__54375__$1 = cljs.core.__destructure_map(map__54375);
var tx_node = map__54375__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54375__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54375__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

if(optimistic_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_(app__$1,node,element);
}),tx_node,elements);
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_next_send_BANG_(app__$1,tx_node);
}
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_result_BANG_(app__$1,tx_node,p__54379,remote){
var map__54380 = p__54379;
var map__54380__$1 = cljs.core.__destructure_map(map__54380);
var tx_element = map__54380__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54380__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54380__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54380__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54380__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54380__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

var result_54815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_54816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_54816)){
var env_54817 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_54815], null));
try{(handler_54816.cljs$core$IFn$_invoke$arity$1 ? handler_54816.cljs$core$IFn$_invoke$arity$1(env_54817) : handler_54816.call(null, env_54817));
}catch (e54381){var e_54821 = e54381;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,675,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_54821,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception. See https://book.fulcrologic.com/#err-txp-mut-res-action-exc"], null);
}),null)),null,1229469174,null);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$distribute_element_results_BANG_(app__$1,tx_node,p__54382){
var map__54383 = p__54382;
var map__54383__$1 = cljs.core.__destructure_map(map__54383);
var tx_element = map__54383__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54383__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54383__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null, remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
}),tx_element,cljs.core.keys(results));
});
/**
 * Walk all elements of the tx-node and call result dispatch handlers for any results that have
 *   not been distributed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$distribute_results_BANG_(app__$1,p__54384){
var map__54385 = p__54384;
var map__54385__$1 = cljs.core.__destructure_map(map__54385);
var tx_node = map__54385__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54385__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_element_results_BANG_(app__$1,tx_node,element);
}),elements));
});
/**
 * Report all progress items to any registered progress dispatch and clear them from the tx-node.
 *   Returns the updated tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.update_progress_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$update_progress_BANG_(app__$1,p__54386){
var map__54387 = p__54386;
var map__54387__$1 = cljs.core.__destructure_map(map__54387);
var tx_node = map__54387__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54387__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var get_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$update_progress_BANG__$_get_env_STAR_(remote,progress){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"progress","progress",244323547),progress], null));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,p__54388){
var map__54389 = p__54388;
var map__54389__$1 = cljs.core.__destructure_map(map__54389);
var element = map__54389__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54389__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54389__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54389__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54389__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var seq__54390_54834 = cljs.core.seq(progress);
var chunk__54391_54835 = null;
var count__54392_54836 = (0);
var i__54393_54837 = (0);
while(true){
if((i__54393_54837 < count__54392_54836)){
var vec__54402_54839 = chunk__54391_54835.cljs$core$IIndexed$_nth$arity$2(null, i__54393_54837);
var remote_54840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54402_54839,(0),null);
var value_54841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54402_54839,(1),null);
var env_54844 = get_env(remote_54840,value_54841);
var action_54845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_54845)){
try{(action_54845.cljs$core$IFn$_invoke$arity$1 ? action_54845.cljs$core$IFn$_invoke$arity$1(env_54844) : action_54845.call(null, env_54844));
}catch (e54405){var e_54848 = e54405;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,715,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__54390_54834,chunk__54391_54835,count__54392_54836,i__54393_54837,e_54848,env_54844,action_54845,vec__54402_54839,remote_54840,value_54841,map__54389,map__54389__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__54387,map__54387__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_54848,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-progress-action-exc"], null);
});})(seq__54390_54834,chunk__54391_54835,count__54392_54836,i__54393_54837,e_54848,env_54844,action_54845,vec__54402_54839,remote_54840,value_54841,map__54389,map__54389__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__54387,map__54387__$1,tx_node,elements))
,null)),null,2034419749,null);
}} else {
}


var G__54855 = seq__54390_54834;
var G__54856 = chunk__54391_54835;
var G__54857 = count__54392_54836;
var G__54858 = (i__54393_54837 + (1));
seq__54390_54834 = G__54855;
chunk__54391_54835 = G__54856;
count__54392_54836 = G__54857;
i__54393_54837 = G__54858;
continue;
} else {
var temp__5804__auto___54861 = cljs.core.seq(seq__54390_54834);
if(temp__5804__auto___54861){
var seq__54390_54864__$1 = temp__5804__auto___54861;
if(cljs.core.chunked_seq_QMARK_(seq__54390_54864__$1)){
var c__5568__auto___54865 = cljs.core.chunk_first(seq__54390_54864__$1);
var G__54867 = cljs.core.chunk_rest(seq__54390_54864__$1);
var G__54868 = c__5568__auto___54865;
var G__54869 = cljs.core.count(c__5568__auto___54865);
var G__54870 = (0);
seq__54390_54834 = G__54867;
chunk__54391_54835 = G__54868;
count__54392_54836 = G__54869;
i__54393_54837 = G__54870;
continue;
} else {
var vec__54406_54871 = cljs.core.first(seq__54390_54864__$1);
var remote_54872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54406_54871,(0),null);
var value_54873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54406_54871,(1),null);
var env_54874 = get_env(remote_54872,value_54873);
var action_54875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_54875)){
try{(action_54875.cljs$core$IFn$_invoke$arity$1 ? action_54875.cljs$core$IFn$_invoke$arity$1(env_54874) : action_54875.call(null, env_54874));
}catch (e54409){var e_54883 = e54409;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,715,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__54390_54834,chunk__54391_54835,count__54392_54836,i__54393_54837,e_54883,env_54874,action_54875,vec__54406_54871,remote_54872,value_54873,seq__54390_54864__$1,temp__5804__auto___54861,map__54389,map__54389__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__54387,map__54387__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_54883,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-progress-action-exc"], null);
});})(seq__54390_54834,chunk__54391_54835,count__54392_54836,i__54393_54837,e_54883,env_54874,action_54875,vec__54406_54871,remote_54872,value_54873,seq__54390_54864__$1,temp__5804__auto___54861,map__54389,map__54389__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__54387,map__54387__$1,tx_node,elements))
,null)),null,-244636170,null);
}} else {
}


var G__54884 = cljs.core.next(seq__54390_54864__$1);
var G__54885 = null;
var G__54886 = (0);
var G__54887 = (0);
seq__54390_54834 = G__54884;
chunk__54391_54835 = G__54885;
count__54392_54836 = G__54886;
i__54393_54837 = G__54887;
continue;
}
} else {
}
}
break;
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
}),tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_tx_node_BANG_(app__$1,p__54412){
var map__54413 = p__54412;
var map__54413__$1 = cljs.core.__destructure_map(map__54413);
var tx_node = map__54413__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54413__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903),null)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
if(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_results_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_sends_BANG_(app__$1,(function (){var G__54414 = tx_node;
var G__54414__$1 = ((optimistic_QMARK_)?com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app__$1,G__54414):G__54414);
if((!(optimistic_QMARK_))){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.advance_actions_BANG_(app__$1,G__54414__$1);
} else {
return G__54414__$1;
}
})())));
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.requested_refreshes = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$requested_refreshes(app__$1,queue){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__54416){
return cljs.core.coll_QMARK_(G__54416);
})], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.set_QMARK_], null);


return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (outer_acc,tx_node){
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,tx_node);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,element){
var map__54417 = element;
var map__54417__$1 = cljs.core.__destructure_map(map__54417);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54417__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var refresh = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(dispatch);
if(cljs.core.truth_(refresh)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.set((refresh.cljs$core$IFn$_invoke$arity$1 ? refresh.cljs$core$IFn$_invoke$arity$1(env) : refresh.call(null, env))));
} else {
return acc;
}
}),outer_acc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330).cljs$core$IFn$_invoke$arity$1(tx_node));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Given a tx node and the set of legal remotes: returns a set of remotes that are active on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remotes_active_on_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$remotes_active_on_node(p__54418,remotes){
var map__54419 = p__54418;
var map__54419__$1 = cljs.core.__destructure_map(map__54419);
var tx_node = map__54419__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54419__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

var active_on_element = (function (p__54420){
var map__54421 = p__54420;
var map__54421__$1 = cljs.core.__destructure_map(map__54421);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54421__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54421__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes__$1 = cljs.core.set(remotes);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes__$1,cljs.core.set(cljs.core.keys(dispatch))),complete_QMARK_);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,ele){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(acc,active_on_element(ele));
}),cljs.core.PersistentHashSet.EMPTY,elements);
});
/**
 * Calculate which remotes still have network activity to do on the given active queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.active_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$active_remotes(queue,remotes){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ra,n){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(ra,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remotes_active_on_node(n,remotes));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_queue_BANG_(p__54426){
var map__54428 = p__54426;
var map__54428__$1 = cljs.core.__destructure_map(map__54428);
var app__$1 = map__54428__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54428__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5802__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5802__auto__)){
var new_node = temp__5802__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.requested_refreshes(app__$1,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.active_remotes(new_queue,remotes);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : schedule_render_BANG_.call(null, app__$1));

return null;
});
/**
 * Run the optimistic action(s) of a transaction synchronously. It is primarily used to deal with controlled inputs, since they
 * have issues working asynchronously, so ideally the mutation in question will *not* have remote action (though they
 * are allowed to).
 * 
 * NOTE: any *remote* behaviors of `tx` will *still be async*.
 * 
 * This function:
 * 
 * * Runs the optimistic side of the mutation(s)
 * * IF (and only if) one or more of the mutations has more sections than just an `action` then it submits the mutation to the normal transaction queue,
 *   but with the optimistic part already done.
 * * This functions *does not* queue a render refresh (though if the normal transaction queue is updated, it will queue tx remote processing, which will trigger a UI refresh).
 * 
 * If you pass it an on-screen instance that has a query and ident, then this function tunnel updated UI props synchronously to that
 * component so it can refresh immediately and avoid DOM input issues.
 * 
 * Returns the new component props or the final state map if no component was used in the transaction.
 * 
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.transact_sync_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$transact_sync_BANG_(app__$1,tx,p__54431){
var map__54432 = p__54431;
var map__54432__$1 = cljs.core.__destructure_map(map__54432);
var options = map__54432__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54432__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54432__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var mutation_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(tx));
var ast_node__GT_operation = cljs.core.zipmap(mutation_nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ast_node){
return com.fulcrologic.fulcro.mutations.mutate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast_node], null));
}),mutation_nodes));
var map__54433 = cljs.core.group_by((function (p1__54430_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),null], null), null),cljs.core.set(cljs.core.keys((ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1 ? ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1(p1__54430_SHARP_) : ast_node__GT_operation.call(null, p1__54430_SHARP_)))));
}),mutation_nodes);
var map__54433__$1 = cljs.core.__destructure_map(map__54433);
var optimistic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54433__$1,true);
var mixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54433__$1,false);
var optimistic_tx_node = ((cljs.core.seq(optimistic))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),optimistic], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var mixed_tx_node = ((cljs.core.seq(mixed))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),mixed], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var resulting_node_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(optimistic_tx_node)){
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app__$1,optimistic_tx_node);
} else {
}

if(cljs.core.truth_(mixed_tx_node)){
var node_54934 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app__$1,mixed_tx_node);
var runtime_atom_54935 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.reset_BANG_(resulting_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node_54934));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom_54935,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_54934], 0));

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(20));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = component;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = (com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null, component));
if(cljs.core.truth_(and__5043__auto____$1)){
return com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(component);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var temp__5804__auto___54936 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"refresh-component!","refresh-component!",-872161039));
if(cljs.core.truth_(temp__5804__auto___54936)){
var refresh_component_BANG__54937 = temp__5804__auto___54936;
(refresh_component_BANG__54937.cljs$core$IFn$_invoke$arity$1 ? refresh_component_BANG__54937.cljs$core$IFn$_invoke$arity$1(component) : refresh_component_BANG__54937.call(null, component));
} else {
}
} else {
if(cljs.core.truth_(ref)){
var r_BANG__54938 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(r_BANG__54938)){
(r_BANG__54938.cljs$core$IFn$_invoke$arity$1 ? r_BANG__54938.cljs$core$IFn$_invoke$arity$1(app__$1) : r_BANG__54938.call(null, app__$1));
} else {
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,847,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Synchronous transaction was submitted on the app or a component without an ident. No UI refresh will happen. See https://book.fulcrologic.com/#warn-tx-missing-ident"], null);
}),null)),null,75711931,null);
} else {
}

}
}

return cljs.core.deref(resulting_node_id);
});
/**
 * Default (Fulcro-2 compatible) transaction submission. The options map can contain any additional options
 *   that might be used by the transaction processing (or UI refresh).
 * 
 *   Some that may be supported (depending on application settings):
 * 
 *   - `:optimistic?` - boolean. Should the transaction be processed optimistically?
 *   - `:ref` - ident. The component ident to include in the transaction env.
 *   - `:component` - React element. The instance of the component that should appear in the transaction env.
 *   - `:refresh` - Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - Vector of idents/keywords.  If the underlying rendering configured algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI.
 *  This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 * 
 *   WARNING: `:only-refresh` can cause missed refreshes because rendering is debounced. If you are using this for
 *         rapid-fire updates like drag-and-drop it is recommended that on the trailing edge (e.g. drop) of your sequence you
 *         force a normal refresh via `app/render!`.
 * 
 *   If the `options` include `:ref` (which comp/transact! sets), then it will be auto-included on the `:refresh` list.
 * 
 *   NOTE: Fulcro 2 'follow-on reads' are supported and are added to the `:refresh` entries. Your choice of rendering
 *   algorithm will influence their necessity.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$default_tx_BANG_(var_args){
var G__54436 = arguments.length;
switch (G__54436) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tx){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__54437,tx,p__54438){
var map__54439 = p__54437;
var map__54439__$1 = cljs.core.__destructure_map(map__54439);
var app__$1 = map__54439__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54439__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__54440 = p__54438;
var map__54440__$1 = cljs.core.__destructure_map(map__54440);
var options = map__54440__$1;
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54440__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

if(cljs.core.truth_(synchronous_QMARK_)){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.transact_sync_BANG_(app__$1,tx,options);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1);

var map__54442 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),true], null),options], 0));
var map__54442__$1 = cljs.core.__destructure_map(map__54442);
var options__$1 = map__54442__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54442__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54442__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54442__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54434_SHARP_){
return (((p1__54434_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__54434_SHARP_)));
}),tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var refresh__$1 = (function (){var G__54444 = cljs.core.set(refresh);
var G__54444__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__54444,follow_on_reads):G__54444);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54444__$1,ref);
} else {
return G__54444__$1;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (s){
var G__54445 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),(function (v,n){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(v),n);
}),node);
var G__54445__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__54445,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__54445);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__54445__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__54445__$1;
}
}));

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Abort any elements in the given send-queue that have the given abort id.
 * 
 *   Aborting will cause the network to abort (which will report a result), or if the item is not yet active a
 *   virtual result will still be sent for that node.
 * 
 *   Returns a new send-queue that no longer contains the aborted nodes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_elements_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_elements_BANG_(p__54454,send_queue,abort_id){
var map__54455 = p__54454;
var map__54455__$1 = cljs.core.__destructure_map(map__54455);
var remote = map__54455__$1;
var abort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54455__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
if(cljs.core.truth_(abort_BANG_)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__54456){
var map__54457 = p__54456;
var map__54457__$1 = cljs.core.__destructure_map(map__54457);
var send_node = map__54457__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54457__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54457__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var aid = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(aid,abort_id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,send_node);
} else {
if(cljs.core.truth_(active_QMARK_)){
(abort_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_BANG_.cljs$core$IFn$_invoke$arity$2(remote,abort_id) : abort_BANG_.call(null, remote,abort_id));

return result;
} else {
var G__54458_54963 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Cancelled",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__54458_54963) : result_handler.call(null, G__54458_54963));

return result;

}
}
}),cljs.core.PersistentVector.EMPTY,send_queue);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,925,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot abort network requests. The remote has no abort support! See https://book.fulcrologic.com/#err-txp-cant-abort"], null);
}),null)),null,-506402110,null);

return send_queue;
}
});
/**
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_BANG_(app__$1,abort_id){
var map__54461 = com.fulcrologic.fulcro.raw.components.any__GT_app(app__$1);
var map__54461__$1 = cljs.core.__destructure_map(map__54461);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54461__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var runtime_state = cljs.core.deref(runtime_atom);
var map__54462 = runtime_state;
var map__54462__$1 = cljs.core.__destructure_map(map__54462);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54462__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54462__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var remote_names = cljs.core.keys(send_queues);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,remote_name){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,remote_name,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_elements_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(remotes,remote_name),cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote_name),abort_id));
}),cljs.core.PersistentArrayMap.EMPTY,remote_names);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);
});
/**
 * Cause everything in the active network queue for remote to be cancelled. Any result that (finally) appears for aborted
 *   items will be ignored. This will cause a hard error to be "received" as the result for everything
 *   that is in the send queue of the given remote.
 * 
 *   This function is mainly meant for use in development mode when dealing with a buggy remote implementation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_remote_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_remote_BANG_(app_ish,remote){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_ish);
var map__54470 = com.fulcrologic.fulcro.raw.components.any__GT_app(app__$1);
var map__54470__$1 = cljs.core.__destructure_map(map__54470);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54470__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54470__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__54471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517),remote], null));
var map__54471__$1 = cljs.core.__destructure_map(map__54471);
var the_remote = map__54471__$1;
var abort_network_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54471__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
var old_send_queue = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([remote], 0));

var seq__54473 = cljs.core.seq(old_send_queue);
var chunk__54478 = null;
var count__54479 = (0);
var i__54480 = (0);
while(true){
if((i__54480 < count__54479)){
var map__54512 = chunk__54478.cljs$core$IIndexed$_nth$arity$2(null, i__54480);
var map__54512__$1 = cljs.core.__destructure_map(map__54512);
var send_node = map__54512__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54512__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54512__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__54481_54981 = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node));
var chunk__54482_54982 = null;
var count__54483_54983 = (0);
var i__54484_54984 = (0);
while(true){
if((i__54484_54984 < count__54483_54983)){
var aid_54985 = chunk__54482_54982.cljs$core$IIndexed$_nth$arity$2(null, i__54484_54984);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_54985) : abort_network_BANG_.call(null, the_remote,aid_54985));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__54481_54981,chunk__54482_54982,count__54483_54983,i__54484_54984,seq__54473,chunk__54478,count__54479,i__54480,aid_54985,map__54512,map__54512__$1,send_node,active_QMARK_,result_handler,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__54481_54981,chunk__54482_54982,count__54483_54983,i__54484_54984,seq__54473,chunk__54478,count__54479,i__54480,aid_54985,map__54512,map__54512__$1,send_node,active_QMARK_,result_handler,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-133768433,null);
}
} else {
}

var G__54521_54990 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__54521_54990) : result_handler.call(null, G__54521_54990));
}catch (e54520){var e_54995 = e54520;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__54481_54981,chunk__54482_54982,count__54483_54983,i__54484_54984,seq__54473,chunk__54478,count__54479,i__54480,e_54995,aid_54985,map__54512,map__54512__$1,send_node,active_QMARK_,result_handler,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_54995,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__54481_54981,chunk__54482_54982,count__54483_54983,i__54484_54984,seq__54473,chunk__54478,count__54479,i__54480,e_54995,aid_54985,map__54512,map__54512__$1,send_node,active_QMARK_,result_handler,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-1588623943,null);
}

var G__54996 = seq__54481_54981;
var G__54997 = chunk__54482_54982;
var G__54998 = count__54483_54983;
var G__54999 = (i__54484_54984 + (1));
seq__54481_54981 = G__54996;
chunk__54482_54982 = G__54997;
count__54483_54983 = G__54998;
i__54484_54984 = G__54999;
continue;
} else {
var temp__5804__auto___55000 = cljs.core.seq(seq__54481_54981);
if(temp__5804__auto___55000){
var seq__54481_55002__$1 = temp__5804__auto___55000;
if(cljs.core.chunked_seq_QMARK_(seq__54481_55002__$1)){
var c__5568__auto___55003 = cljs.core.chunk_first(seq__54481_55002__$1);
var G__55004 = cljs.core.chunk_rest(seq__54481_55002__$1);
var G__55005 = c__5568__auto___55003;
var G__55006 = cljs.core.count(c__5568__auto___55003);
var G__55007 = (0);
seq__54481_54981 = G__55004;
chunk__54482_54982 = G__55005;
count__54483_54983 = G__55006;
i__54484_54984 = G__55007;
continue;
} else {
var aid_55008 = cljs.core.first(seq__54481_55002__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_55008) : abort_network_BANG_.call(null, the_remote,aid_55008));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__54481_54981,chunk__54482_54982,count__54483_54983,i__54484_54984,seq__54473,chunk__54478,count__54479,i__54480,aid_55008,seq__54481_55002__$1,temp__5804__auto___55000,map__54512,map__54512__$1,send_node,active_QMARK_,result_handler,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__54481_54981,chunk__54482_54982,count__54483_54983,i__54484_54984,seq__54473,chunk__54478,count__54479,i__54480,aid_55008,seq__54481_55002__$1,temp__5804__auto___55000,map__54512,map__54512__$1,send_node,active_QMARK_,result_handler,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1728440899,null);
}
} else {
}

var G__54523_55013 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__54523_55013) : result_handler.call(null, G__54523_55013));
}catch (e54522){var e_55014 = e54522;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__54481_54981,chunk__54482_54982,count__54483_54983,i__54484_54984,seq__54473,chunk__54478,count__54479,i__54480,e_55014,aid_55008,seq__54481_55002__$1,temp__5804__auto___55000,map__54512,map__54512__$1,send_node,active_QMARK_,result_handler,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_55014,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__54481_54981,chunk__54482_54982,count__54483_54983,i__54484_54984,seq__54473,chunk__54478,count__54479,i__54480,e_55014,aid_55008,seq__54481_55002__$1,temp__5804__auto___55000,map__54512,map__54512__$1,send_node,active_QMARK_,result_handler,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,807674636,null);
}

var G__55017 = cljs.core.next(seq__54481_55002__$1);
var G__55018 = null;
var G__55019 = (0);
var G__55020 = (0);
seq__54481_54981 = G__55017;
chunk__54482_54982 = G__55018;
count__54483_54983 = G__55019;
i__54484_54984 = G__55020;
continue;
}
} else {
}
}
break;
}

var G__55022 = seq__54473;
var G__55023 = chunk__54478;
var G__55024 = count__54479;
var G__55025 = (i__54480 + (1));
seq__54473 = G__55022;
chunk__54478 = G__55023;
count__54479 = G__55024;
i__54480 = G__55025;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54473);
if(temp__5804__auto__){
var seq__54473__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54473__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54473__$1);
var G__55027 = cljs.core.chunk_rest(seq__54473__$1);
var G__55028 = c__5568__auto__;
var G__55029 = cljs.core.count(c__5568__auto__);
var G__55030 = (0);
seq__54473 = G__55027;
chunk__54478 = G__55028;
count__54479 = G__55029;
i__54480 = G__55030;
continue;
} else {
var map__54524 = cljs.core.first(seq__54473__$1);
var map__54524__$1 = cljs.core.__destructure_map(map__54524);
var send_node = map__54524__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54524__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54524__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__54474_55035 = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node));
var chunk__54475_55036 = null;
var count__54476_55037 = (0);
var i__54477_55038 = (0);
while(true){
if((i__54477_55038 < count__54476_55037)){
var aid_55041 = chunk__54475_55036.cljs$core$IIndexed$_nth$arity$2(null, i__54477_55038);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_55041) : abort_network_BANG_.call(null, the_remote,aid_55041));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__54474_55035,chunk__54475_55036,count__54476_55037,i__54477_55038,seq__54473,chunk__54478,count__54479,i__54480,aid_55041,map__54524,map__54524__$1,send_node,active_QMARK_,result_handler,seq__54473__$1,temp__5804__auto__,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__54474_55035,chunk__54475_55036,count__54476_55037,i__54477_55038,seq__54473,chunk__54478,count__54479,i__54480,aid_55041,map__54524,map__54524__$1,send_node,active_QMARK_,result_handler,seq__54473__$1,temp__5804__auto__,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-928769604,null);
}
} else {
}

var G__54530_55050 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__54530_55050) : result_handler.call(null, G__54530_55050));
}catch (e54529){var e_55054 = e54529;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__54474_55035,chunk__54475_55036,count__54476_55037,i__54477_55038,seq__54473,chunk__54478,count__54479,i__54480,e_55054,aid_55041,map__54524,map__54524__$1,send_node,active_QMARK_,result_handler,seq__54473__$1,temp__5804__auto__,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_55054,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__54474_55035,chunk__54475_55036,count__54476_55037,i__54477_55038,seq__54473,chunk__54478,count__54479,i__54480,e_55054,aid_55041,map__54524,map__54524__$1,send_node,active_QMARK_,result_handler,seq__54473__$1,temp__5804__auto__,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-1297843622,null);
}

var G__55055 = seq__54474_55035;
var G__55056 = chunk__54475_55036;
var G__55057 = count__54476_55037;
var G__55058 = (i__54477_55038 + (1));
seq__54474_55035 = G__55055;
chunk__54475_55036 = G__55056;
count__54476_55037 = G__55057;
i__54477_55038 = G__55058;
continue;
} else {
var temp__5804__auto___55059__$1 = cljs.core.seq(seq__54474_55035);
if(temp__5804__auto___55059__$1){
var seq__54474_55060__$1 = temp__5804__auto___55059__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54474_55060__$1)){
var c__5568__auto___55062 = cljs.core.chunk_first(seq__54474_55060__$1);
var G__55063 = cljs.core.chunk_rest(seq__54474_55060__$1);
var G__55064 = c__5568__auto___55062;
var G__55065 = cljs.core.count(c__5568__auto___55062);
var G__55066 = (0);
seq__54474_55035 = G__55063;
chunk__54475_55036 = G__55064;
count__54476_55037 = G__55065;
i__54477_55038 = G__55066;
continue;
} else {
var aid_55078 = cljs.core.first(seq__54474_55060__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_55078) : abort_network_BANG_.call(null, the_remote,aid_55078));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__54474_55035,chunk__54475_55036,count__54476_55037,i__54477_55038,seq__54473,chunk__54478,count__54479,i__54480,aid_55078,seq__54474_55060__$1,temp__5804__auto___55059__$1,map__54524,map__54524__$1,send_node,active_QMARK_,result_handler,seq__54473__$1,temp__5804__auto__,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__54474_55035,chunk__54475_55036,count__54476_55037,i__54477_55038,seq__54473,chunk__54478,count__54479,i__54480,aid_55078,seq__54474_55060__$1,temp__5804__auto___55059__$1,map__54524,map__54524__$1,send_node,active_QMARK_,result_handler,seq__54473__$1,temp__5804__auto__,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-1384632577,null);
}
} else {
}

var G__54532_55079 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__54532_55079) : result_handler.call(null, G__54532_55079));
}catch (e54531){var e_55080 = e54531;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__54474_55035,chunk__54475_55036,count__54476_55037,i__54477_55038,seq__54473,chunk__54478,count__54479,i__54480,e_55080,aid_55078,seq__54474_55060__$1,temp__5804__auto___55059__$1,map__54524,map__54524__$1,send_node,active_QMARK_,result_handler,seq__54473__$1,temp__5804__auto__,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_55080,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__54474_55035,chunk__54475_55036,count__54476_55037,i__54477_55038,seq__54473,chunk__54478,count__54479,i__54480,e_55080,aid_55078,seq__54474_55060__$1,temp__5804__auto___55059__$1,map__54524,map__54524__$1,send_node,active_QMARK_,result_handler,seq__54473__$1,temp__5804__auto__,app__$1,map__54470,map__54470__$1,state_atom,runtime_atom,map__54471,map__54471__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,695749860,null);
}

var G__55081 = cljs.core.next(seq__54474_55060__$1);
var G__55082 = null;
var G__55083 = (0);
var G__55084 = (0);
seq__54474_55035 = G__55081;
chunk__54475_55036 = G__55082;
count__54476_55037 = G__55083;
i__54477_55038 = G__55084;
continue;
}
} else {
}
}
break;
}

var G__55085 = cljs.core.next(seq__54473__$1);
var G__55086 = null;
var G__55087 = (0);
var G__55088 = (0);
seq__54473 = G__55085;
chunk__54478 = G__55086;
count__54479 = G__55087;
i__54480 = G__55088;
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
 * Modify the given fulcro app so that it does reads in batches when possible. Requires server support (which is
 *   provided by Fulcro's handle-api-request), and a remote that can handle raw requests (see the latest http-remote).
 * 
 *   Defaults to enabling batching on all remotes, but if any of your client-side remote code or servers do not support
 *   batching, pass the `remotes` option, which is a set of keywords that names the remotes on which batching should
 *   be enabled.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$with_batched_reads(var_args){
var G__54534 = arguments.length;
switch (G__54534) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2(app__$1,null);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,remotes){
var remotes__$1 = (function (){var or__5045__auto__ = remotes;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__54535 = app__$1;
var G__54535__$1 = (((G__54535 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__54535));
var G__54535__$2 = (((G__54535__$1 == null))?null:cljs.core.deref(G__54535__$1));
var G__54535__$3 = (((G__54535__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(G__54535__$2));
if((G__54535__$3 == null)){
return null;
} else {
return cljs.core.keys(G__54535__$3);
}
}
})();
var batching_enabled = ((cljs.core.seq(remotes__$1))?cljs.core.zipmap(remotes__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)):cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","tx!","com.fulcrologic.fulcro.algorithm/tx!",1081877133)], null),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","abort!","com.fulcrologic.fulcro.algorithm/abort!",1698846123)], null),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_BANG_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692)], null),batching_enabled);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.js.map
