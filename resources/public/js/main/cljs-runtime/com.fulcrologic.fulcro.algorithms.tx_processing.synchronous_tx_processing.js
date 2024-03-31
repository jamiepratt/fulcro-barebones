goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx !== 'undefined')){
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}

/**
 * Get the current thread id on the JVM. Returns 0 on JS.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.current_thread_id = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$current_thread_id(){
return (0);
});
/**
 * Returns true if the current thread is running non-nested transaction processing code.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.top_level_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$top_level_QMARK_(p__56350){
var map__56351 = p__56350;
var map__56351__$1 = cljs.core.__destructure_map(map__56351);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56351__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,cljs.core.PersistentVector.EMPTY)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_submission_queue_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56681 = arguments.length;
var i__5770__auto___56682 = (0);
while(true){
if((i__5770__auto___56682 < len__5769__auto___56681)){
args__5775__auto__.push((arguments[i__5770__auto___56682]));

var G__56683 = (i__5770__auto___56682 + (1));
i__5770__auto___56682 = G__56683;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$lang$applyTo = (function (seq56355){
var G__56356 = cljs.core.first(seq56355);
var seq56355__$1 = cljs.core.next(seq56355);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56356,seq56355__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_submission_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_submission_queue_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$submission_queue(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_post_processing_steps_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56688 = arguments.length;
var i__5770__auto___56689 = (0);
while(true){
if((i__5770__auto___56689 < len__5769__auto___56688)){
args__5775__auto__.push((arguments[i__5770__auto___56689]));

var G__56690 = (i__5770__auto___56689 + (1));
i__5770__auto___56689 = G__56690;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$lang$applyTo = (function (seq56369){
var G__56370 = cljs.core.first(seq56369);
var seq56369__$1 = cljs.core.next(seq56369);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56370,seq56369__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_post_processing_steps_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_post_processing_steps_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$post_processing_steps(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_active_queue_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56695 = arguments.length;
var i__5770__auto___56696 = (0);
while(true){
if((i__5770__auto___56696 < len__5769__auto___56695)){
args__5775__auto__.push((arguments[i__5770__auto___56696]));

var G__56697 = (i__5770__auto___56696 + (1));
i__5770__auto___56696 = G__56697;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$lang$applyTo = (function (seq56374){
var G__56375 = cljs.core.first(seq56374);
var seq56374__$1 = cljs.core.next(seq56374);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56375,seq56374__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_active_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_active_queue_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$active_queue(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_send_queue_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56700 = arguments.length;
var i__5770__auto___56701 = (0);
while(true){
if((i__5770__auto___56701 < len__5769__auto___56700)){
args__5775__auto__.push((arguments[i__5770__auto___56701]));

var G__56702 = (i__5770__auto___56701 + (1));
i__5770__auto___56701 = G__56702;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,remote,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$lang$applyTo = (function (seq56381){
var G__56382 = cljs.core.first(seq56381);
var seq56381__$1 = cljs.core.next(seq56381);
var G__56383 = cljs.core.first(seq56381__$1);
var seq56381__$2 = cljs.core.next(seq56381__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56382,G__56383,seq56381__$2);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_send_queue_BANG_(app__$1,remote,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$send_queue(app__$1,remote){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)));
});
/**
 * Add `f` as a function that will run after the current transaction has been fully processed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_after_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_after_BANG_(app__$1,f){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),f], 0));
});
/**
 * Is there post processing to do?
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$post_processing_QMARK_(app__$1){
return cljs.core.boolean$(cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1)));
});
/**
 * Runs the queued post processing steps until the post-processing queue is empty.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.do_post_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$do_post_processing_BANG_(app__$1){
var steps = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1);
while(true){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_post_processing_steps_BANG_(app__$1,cljs.core.PersistentVector.EMPTY);

var seq__56385_56709 = cljs.core.seq(steps);
var chunk__56386_56710 = null;
var count__56387_56711 = (0);
var i__56388_56712 = (0);
while(true){
if((i__56388_56712 < count__56387_56711)){
var f_56713 = chunk__56386_56710.cljs$core$IIndexed$_nth$arity$2(null, i__56388_56712);
try{(f_56713.cljs$core$IFn$_invoke$arity$0 ? f_56713.cljs$core$IFn$_invoke$arity$0() : f_56713.call(null, ));
}catch (e56391){var e_56714 = e56391;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,144,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56385_56709,chunk__56386_56710,count__56387_56711,i__56388_56712,steps,e_56714,f_56713){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_56714,"Post processing step failed. See https://book.fulcrologic.com/#err-stp-postproc-failed"], null);
});})(seq__56385_56709,chunk__56386_56710,count__56387_56711,i__56388_56712,steps,e_56714,f_56713))
,null)),null,1811046533,null);
}

var G__56717 = seq__56385_56709;
var G__56718 = chunk__56386_56710;
var G__56719 = count__56387_56711;
var G__56720 = (i__56388_56712 + (1));
seq__56385_56709 = G__56717;
chunk__56386_56710 = G__56718;
count__56387_56711 = G__56719;
i__56388_56712 = G__56720;
continue;
} else {
var temp__5804__auto___56721 = cljs.core.seq(seq__56385_56709);
if(temp__5804__auto___56721){
var seq__56385_56722__$1 = temp__5804__auto___56721;
if(cljs.core.chunked_seq_QMARK_(seq__56385_56722__$1)){
var c__5568__auto___56725 = cljs.core.chunk_first(seq__56385_56722__$1);
var G__56726 = cljs.core.chunk_rest(seq__56385_56722__$1);
var G__56727 = c__5568__auto___56725;
var G__56728 = cljs.core.count(c__5568__auto___56725);
var G__56729 = (0);
seq__56385_56709 = G__56726;
chunk__56386_56710 = G__56727;
count__56387_56711 = G__56728;
i__56388_56712 = G__56729;
continue;
} else {
var f_56730 = cljs.core.first(seq__56385_56722__$1);
try{(f_56730.cljs$core$IFn$_invoke$arity$0 ? f_56730.cljs$core$IFn$_invoke$arity$0() : f_56730.call(null, ));
}catch (e56394){var e_56731 = e56394;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,144,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56385_56709,chunk__56386_56710,count__56387_56711,i__56388_56712,steps,e_56731,f_56730,seq__56385_56722__$1,temp__5804__auto___56721){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_56731,"Post processing step failed. See https://book.fulcrologic.com/#err-stp-postproc-failed"], null);
});})(seq__56385_56709,chunk__56386_56710,count__56387_56711,i__56388_56712,steps,e_56731,f_56730,seq__56385_56722__$1,temp__5804__auto___56721))
,null)),null,920552125,null);
}

var G__56732 = cljs.core.next(seq__56385_56722__$1);
var G__56733 = null;
var G__56734 = (0);
var G__56735 = (0);
seq__56385_56709 = G__56732;
chunk__56386_56710 = G__56733;
count__56387_56711 = G__56734;
i__56388_56712 = G__56735;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto__ = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1));
if(temp__5804__auto__){
var next_steps = temp__5804__auto__;
var G__56736 = next_steps;
steps = G__56736;
continue;
} else {
return null;
}
break;
}
});
/**
 * Returns true if the current thread is in the midst of running the optimistic actions of a new transaction.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.in_transaction_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$in_transaction_QMARK_(p__56398){
var map__56400 = p__56398;
var map__56400__$1 = cljs.core.__destructure_map(map__56400);
var app__$1 = map__56400__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56400__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,cljs.core.PersistentVector.EMPTY)));
});
/**
 * Is the current thread running the TX queue?
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.current_thread_running_tx_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$current_thread_running_tx_QMARK_(p__56402){
var map__56403 = p__56402;
var map__56403__$1 = cljs.core.__destructure_map(map__56403);
var app__$1 = map__56403__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56403__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,cljs.core.PersistentVector.EMPTY)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.current_thread_id());
});
/**
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.release_post_render_tasks_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$release_post_render_tasks_BANG_(app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
}),queue);
})], 0));
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$dispatch_result_BANG_(app__$1,tx_node,p__56405,remote){
var map__56406 = p__56405;
var map__56406__$1 = cljs.core.__destructure_map(map__56406);
var tx_element = map__56406__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var result_56743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_56744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_56744)){
var env_56746 = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_56743], null));
try{(handler_56744.cljs$core$IFn$_invoke$arity$1 ? handler_56744.cljs$core$IFn$_invoke$arity$1(env_56746) : handler_56744.call(null, env_56746));
}catch (e56409){var e_56752 = e56409;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,182,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_56752,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception. See https://book.fulcrologic.com/#err-stp-res-action-exc"], null);
}),null)),null,1269501055,null);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$distribute_element_results_BANG_(app__$1,tx_node,p__56414){
var map__56415 = p__56414;
var map__56415__$1 = cljs.core.__destructure_map(map__56415);
var tx_element = map__56415__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56415__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56415__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null, remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
}),tx_element,cljs.core.keys(results));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$node_index(queue,txn_id){
var n = cljs.core.count(queue);
var idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__56420){
var map__56421 = p__56420;
var map__56421__$1 = cljs.core.__destructure_map(map__56421);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56421__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),queue);
if((idx < n)){
return idx;
} else {
return null;
}
});
/**
 * Side-effects against the app state to distribute the result for txn-id element at ele-idx. This will call the result
 * handler and mark that remote as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$distribute_results_BANG_(app__$1,txn_id,ele_idx){
var active_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var idx = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index(active_queue,txn_id);
var tx_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,idx);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx], null),(function (p1__56423_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_element_results_BANG_(app__$1,tx_node,p1__56423_SHARP_);
})], 0));
});
/**
 * Deal with a network result on the given txn/element.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$record_result_BANG_(var_args){
var G__56428 = arguments.length;
switch (G__56428) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (app__$1,txn_id,ele_idx,remote,result,result_key){
var active_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var txn_idx = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index(active_queue,txn_id);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,225,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue! See https://book.fulcrologic.com/#err-stp-res-lacks-valid-node"], null);
}),null)),null,-705325637,null);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result], 0));

return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_results_BANG_(app__$1,txn_id,ele_idx);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6);

/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$remove_send_BANG_(app__$1,remote,txn_id,ele_idx){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,remote,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (old_queue){
return cljs.core.filterv((function (p__56440){
var map__56441 = p__56440;
var map__56441__$1 = cljs.core.__destructure_map(map__56441);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56441__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56441__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
}),old_queue);
})], 0));
});
/**
 * Generate a new send node and add it to the appropriate send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG_(app__$1,p__56443,ele_idx,remote){
var map__56444 = p__56443;
var map__56444__$1 = cljs.core.__destructure_map(map__56444);
var tx_node = map__56444__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56444__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56444__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var update_handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG__$_progress_handler_STAR_(result){
var id__56127__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__56127__auto__,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.current_thread_id()], 0));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

var G__56448 = app__$1;
var G__56449 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2(G__56448,G__56449) : com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.call(null, G__56448,G__56449));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__56127__auto__,cljs.core.pop);
}});
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG__$_result_handler_STAR_(result){
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
try{var map__56454_56770 = result;
var map__56454_56771__$1 = cljs.core.__destructure_map(map__56454_56770);
var status_code_56772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56454_56771__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_56773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56454_56771__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_56772)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote,id,body_56773);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_56772));
}
}catch (e56453){var e_56776 = e56453;
}} else {
}
} else {
}

var id__56127__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__56127__auto__,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.current_thread_id()], 0));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_(app__$1,remote,id,ele_idx);

var G__56456 = app__$1;
var G__56457 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2(G__56456,G__56457) : com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.call(null, G__56456,G__56457));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__56127__auto__,cljs.core.pop);
}});
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,remote,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),send_node], 0));
} else {
com.fulcrologic.fulcro.algorithms.scheduling.defer((function (){
return handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null));
}),(1));
}

return null;
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$queue_element_sends_BANG_(app__$1,tx_node,p__56461){
var map__56463 = p__56461;
var map__56463__$1 = cljs.core.__destructure_map(map__56463);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56463__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56463__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56463__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),(function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.compute_desired_ast_node(app__$1,remote,node,tx_element);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.add_send_BANG_(app__$1,updated_node,idx,remote);

return updated_node;
}
}),tx_node,to_dispatch);
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$queue_sends_BANG_(app__$1,p__56472){
var map__56473 = p__56472;
var map__56473__$1 = cljs.core.__destructure_map(map__56473);
var tx_node = map__56473__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56473__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56473__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_element_sends_BANG_(app__$1,node,element);
}),tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_tx_node_BANG_(app__$1,p__56476){
var map__56478 = p__56476;
var map__56478__$1 = cljs.core.__destructure_map(map__56478);
var tx_node = map__56478__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56478__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
if(com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_sends_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,tx_node)));
}
});
/**
 * Process the send queues against the remotes, which will cause idle remotes with queued work to issue network requests.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_send_queues_BANG_(app__$1){
var _STAR_remove_send_STAR__orig_val__56488 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var _STAR_remove_send_STAR__temp_val__56489 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_;
(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_ = _STAR_remove_send_STAR__temp_val__56489);

try{var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__56492_56791 = cljs.core.seq(remote_names);
var chunk__56493_56792 = null;
var count__56494_56793 = (0);
var i__56495_56794 = (0);
while(true){
if((i__56495_56794 < count__56494_56793)){
var remote_56795 = chunk__56493_56792.cljs$core$IIndexed$_nth$arity$2(null, i__56495_56794);
var send_queue_56796 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_56795);
var vec__56533_56797 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.extract_parallel(send_queue_56796);
var p_56798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56533_56797,(0),null);
var serial_56799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56533_56797,(1),null);
var front_56800 = cljs.core.first(serial_56799);
var seq__56541_56803 = cljs.core.seq(p_56798);
var chunk__56542_56804 = null;
var count__56543_56805 = (0);
var i__56544_56806 = (0);
while(true){
if((i__56544_56806 < count__56543_56805)){
var item_56807 = chunk__56542_56804.cljs$core$IIndexed$_nth$arity$2(null, i__56544_56806);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56541_56803,chunk__56542_56804,count__56543_56805,i__56544_56806,seq__56492_56791,chunk__56493_56792,count__56494_56793,i__56495_56794,item_56807,send_queue_56796,vec__56533_56797,p_56798,serial_56799,front_56800,remote_56795,remote_names,operations,_STAR_remove_send_STAR__orig_val__56488,_STAR_remove_send_STAR__temp_val__56489){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_56807,remote_56795);
});})(seq__56541_56803,chunk__56542_56804,count__56543_56805,i__56544_56806,seq__56492_56791,chunk__56493_56792,count__56494_56793,i__56495_56794,item_56807,send_queue_56796,vec__56533_56797,p_56798,serial_56799,front_56800,remote_56795,remote_names,operations,_STAR_remove_send_STAR__orig_val__56488,_STAR_remove_send_STAR__temp_val__56489))
);


var G__56810 = seq__56541_56803;
var G__56811 = chunk__56542_56804;
var G__56812 = count__56543_56805;
var G__56813 = (i__56544_56806 + (1));
seq__56541_56803 = G__56810;
chunk__56542_56804 = G__56811;
count__56543_56805 = G__56812;
i__56544_56806 = G__56813;
continue;
} else {
var temp__5804__auto___56814 = cljs.core.seq(seq__56541_56803);
if(temp__5804__auto___56814){
var seq__56541_56815__$1 = temp__5804__auto___56814;
if(cljs.core.chunked_seq_QMARK_(seq__56541_56815__$1)){
var c__5568__auto___56816 = cljs.core.chunk_first(seq__56541_56815__$1);
var G__56817 = cljs.core.chunk_rest(seq__56541_56815__$1);
var G__56818 = c__5568__auto___56816;
var G__56819 = cljs.core.count(c__5568__auto___56816);
var G__56820 = (0);
seq__56541_56803 = G__56817;
chunk__56542_56804 = G__56818;
count__56543_56805 = G__56819;
i__56544_56806 = G__56820;
continue;
} else {
var item_56821 = cljs.core.first(seq__56541_56815__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56541_56803,chunk__56542_56804,count__56543_56805,i__56544_56806,seq__56492_56791,chunk__56493_56792,count__56494_56793,i__56495_56794,item_56821,seq__56541_56815__$1,temp__5804__auto___56814,send_queue_56796,vec__56533_56797,p_56798,serial_56799,front_56800,remote_56795,remote_names,operations,_STAR_remove_send_STAR__orig_val__56488,_STAR_remove_send_STAR__temp_val__56489){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_56821,remote_56795);
});})(seq__56541_56803,chunk__56542_56804,count__56543_56805,i__56544_56806,seq__56492_56791,chunk__56493_56792,count__56494_56793,i__56495_56794,item_56821,seq__56541_56815__$1,temp__5804__auto___56814,send_queue_56796,vec__56533_56797,p_56798,serial_56799,front_56800,remote_56795,remote_names,operations,_STAR_remove_send_STAR__orig_val__56488,_STAR_remove_send_STAR__temp_val__56489))
);


var G__56822 = cljs.core.next(seq__56541_56815__$1);
var G__56823 = null;
var G__56824 = (0);
var G__56825 = (0);
seq__56541_56803 = G__56822;
chunk__56542_56804 = G__56823;
count__56543_56805 = G__56824;
i__56544_56806 = G__56825;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517).cljs$core$IFn$_invoke$arity$1(front_56800))){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_56795,serial_56799);
} else {
var map__56553_56826 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends(app__$1,remote_56795,serial_56799);
var map__56553_56827__$1 = cljs.core.__destructure_map(map__56553_56826);
var send_queue_56828__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56553_56827__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node_56829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56553_56827__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node_56829)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56492_56791,chunk__56493_56792,count__56494_56793,i__56495_56794,map__56553_56826,map__56553_56827__$1,send_queue_56828__$1,send_node_56829,send_queue_56796,vec__56533_56797,p_56798,serial_56799,front_56800,remote_56795,remote_names,operations,_STAR_remove_send_STAR__orig_val__56488,_STAR_remove_send_STAR__temp_val__56489){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,send_node_56829,remote_56795);
});})(seq__56492_56791,chunk__56493_56792,count__56494_56793,i__56495_56794,map__56553_56826,map__56553_56827__$1,send_queue_56828__$1,send_node_56829,send_queue_56796,vec__56533_56797,p_56798,serial_56799,front_56800,remote_56795,remote_names,operations,_STAR_remove_send_STAR__orig_val__56488,_STAR_remove_send_STAR__temp_val__56489))
);
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_56795,send_queue_56828__$1);
}


var G__56830 = seq__56492_56791;
var G__56831 = chunk__56493_56792;
var G__56832 = count__56494_56793;
var G__56833 = (i__56495_56794 + (1));
seq__56492_56791 = G__56830;
chunk__56493_56792 = G__56831;
count__56494_56793 = G__56832;
i__56495_56794 = G__56833;
continue;
} else {
var temp__5804__auto___56834 = cljs.core.seq(seq__56492_56791);
if(temp__5804__auto___56834){
var seq__56492_56835__$1 = temp__5804__auto___56834;
if(cljs.core.chunked_seq_QMARK_(seq__56492_56835__$1)){
var c__5568__auto___56836 = cljs.core.chunk_first(seq__56492_56835__$1);
var G__56837 = cljs.core.chunk_rest(seq__56492_56835__$1);
var G__56838 = c__5568__auto___56836;
var G__56839 = cljs.core.count(c__5568__auto___56836);
var G__56840 = (0);
seq__56492_56791 = G__56837;
chunk__56493_56792 = G__56838;
count__56494_56793 = G__56839;
i__56495_56794 = G__56840;
continue;
} else {
var remote_56841 = cljs.core.first(seq__56492_56835__$1);
var send_queue_56842 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_56841);
var vec__56554_56843 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.extract_parallel(send_queue_56842);
var p_56844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56554_56843,(0),null);
var serial_56845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56554_56843,(1),null);
var front_56846 = cljs.core.first(serial_56845);
var seq__56557_56847 = cljs.core.seq(p_56844);
var chunk__56558_56848 = null;
var count__56559_56849 = (0);
var i__56560_56850 = (0);
while(true){
if((i__56560_56850 < count__56559_56849)){
var item_56851 = chunk__56558_56848.cljs$core$IIndexed$_nth$arity$2(null, i__56560_56850);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56557_56847,chunk__56558_56848,count__56559_56849,i__56560_56850,seq__56492_56791,chunk__56493_56792,count__56494_56793,i__56495_56794,item_56851,send_queue_56842,vec__56554_56843,p_56844,serial_56845,front_56846,remote_56841,seq__56492_56835__$1,temp__5804__auto___56834,remote_names,operations,_STAR_remove_send_STAR__orig_val__56488,_STAR_remove_send_STAR__temp_val__56489){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_56851,remote_56841);
});})(seq__56557_56847,chunk__56558_56848,count__56559_56849,i__56560_56850,seq__56492_56791,chunk__56493_56792,count__56494_56793,i__56495_56794,item_56851,send_queue_56842,vec__56554_56843,p_56844,serial_56845,front_56846,remote_56841,seq__56492_56835__$1,temp__5804__auto___56834,remote_names,operations,_STAR_remove_send_STAR__orig_val__56488,_STAR_remove_send_STAR__temp_val__56489))
);


var G__56852 = seq__56557_56847;
var G__56853 = chunk__56558_56848;
var G__56854 = count__56559_56849;
var G__56855 = (i__56560_56850 + (1));
seq__56557_56847 = G__56852;
chunk__56558_56848 = G__56853;
count__56559_56849 = G__56854;
i__56560_56850 = G__56855;
continue;
} else {
var temp__5804__auto___56856__$1 = cljs.core.seq(seq__56557_56847);
if(temp__5804__auto___56856__$1){
var seq__56557_56857__$1 = temp__5804__auto___56856__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56557_56857__$1)){
var c__5568__auto___56858 = cljs.core.chunk_first(seq__56557_56857__$1);
var G__56859 = cljs.core.chunk_rest(seq__56557_56857__$1);
var G__56860 = c__5568__auto___56858;
var G__56861 = cljs.core.count(c__5568__auto___56858);
var G__56862 = (0);
seq__56557_56847 = G__56859;
chunk__56558_56848 = G__56860;
count__56559_56849 = G__56861;
i__56560_56850 = G__56862;
continue;
} else {
var item_56863 = cljs.core.first(seq__56557_56857__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56557_56847,chunk__56558_56848,count__56559_56849,i__56560_56850,seq__56492_56791,chunk__56493_56792,count__56494_56793,i__56495_56794,item_56863,seq__56557_56857__$1,temp__5804__auto___56856__$1,send_queue_56842,vec__56554_56843,p_56844,serial_56845,front_56846,remote_56841,seq__56492_56835__$1,temp__5804__auto___56834,remote_names,operations,_STAR_remove_send_STAR__orig_val__56488,_STAR_remove_send_STAR__temp_val__56489){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_56863,remote_56841);
});})(seq__56557_56847,chunk__56558_56848,count__56559_56849,i__56560_56850,seq__56492_56791,chunk__56493_56792,count__56494_56793,i__56495_56794,item_56863,seq__56557_56857__$1,temp__5804__auto___56856__$1,send_queue_56842,vec__56554_56843,p_56844,serial_56845,front_56846,remote_56841,seq__56492_56835__$1,temp__5804__auto___56834,remote_names,operations,_STAR_remove_send_STAR__orig_val__56488,_STAR_remove_send_STAR__temp_val__56489))
);


var G__56864 = cljs.core.next(seq__56557_56857__$1);
var G__56865 = null;
var G__56866 = (0);
var G__56867 = (0);
seq__56557_56847 = G__56864;
chunk__56558_56848 = G__56865;
count__56559_56849 = G__56866;
i__56560_56850 = G__56867;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517).cljs$core$IFn$_invoke$arity$1(front_56846))){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_56841,serial_56845);
} else {
var map__56566_56868 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends(app__$1,remote_56841,serial_56845);
var map__56566_56869__$1 = cljs.core.__destructure_map(map__56566_56868);
var send_queue_56870__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56566_56869__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node_56871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56566_56869__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node_56871)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56492_56791,chunk__56493_56792,count__56494_56793,i__56495_56794,map__56566_56868,map__56566_56869__$1,send_queue_56870__$1,send_node_56871,send_queue_56842,vec__56554_56843,p_56844,serial_56845,front_56846,remote_56841,seq__56492_56835__$1,temp__5804__auto___56834,remote_names,operations,_STAR_remove_send_STAR__orig_val__56488,_STAR_remove_send_STAR__temp_val__56489){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,send_node_56871,remote_56841);
});})(seq__56492_56791,chunk__56493_56792,count__56494_56793,i__56495_56794,map__56566_56868,map__56566_56869__$1,send_queue_56870__$1,send_node_56871,send_queue_56842,vec__56554_56843,p_56844,serial_56845,front_56846,remote_56841,seq__56492_56835__$1,temp__5804__auto___56834,remote_names,operations,_STAR_remove_send_STAR__orig_val__56488,_STAR_remove_send_STAR__temp_val__56489))
);
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_56841,send_queue_56870__$1);
}


var G__56872 = cljs.core.next(seq__56492_56835__$1);
var G__56873 = null;
var G__56874 = (0);
var G__56875 = (0);
seq__56492_56791 = G__56872;
chunk__56493_56792 = G__56873;
count__56494_56793 = G__56874;
i__56495_56794 = G__56875;
continue;
}
} else {
}
}
break;
}

var seq__56572 = cljs.core.seq(cljs.core.deref(operations));
var chunk__56573 = null;
var count__56574 = (0);
var i__56575 = (0);
while(true){
if((i__56575 < count__56574)){
var op = chunk__56573.cljs$core$IIndexed$_nth$arity$2(null, i__56575);
(op.cljs$core$IFn$_invoke$arity$0 ? op.cljs$core$IFn$_invoke$arity$0() : op.call(null, ));


var G__56876 = seq__56572;
var G__56877 = chunk__56573;
var G__56878 = count__56574;
var G__56879 = (i__56575 + (1));
seq__56572 = G__56876;
chunk__56573 = G__56877;
count__56574 = G__56878;
i__56575 = G__56879;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56572);
if(temp__5804__auto__){
var seq__56572__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56572__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56572__$1);
var G__56880 = cljs.core.chunk_rest(seq__56572__$1);
var G__56881 = c__5568__auto__;
var G__56882 = cljs.core.count(c__5568__auto__);
var G__56883 = (0);
seq__56572 = G__56880;
chunk__56573 = G__56881;
count__56574 = G__56882;
i__56575 = G__56883;
continue;
} else {
var op = cljs.core.first(seq__56572__$1);
(op.cljs$core$IFn$_invoke$arity$0 ? op.cljs$core$IFn$_invoke$arity$0() : op.call(null, ));


var G__56884 = cljs.core.next(seq__56572__$1);
var G__56885 = null;
var G__56886 = (0);
var G__56887 = (0);
seq__56572 = G__56884;
chunk__56573 = G__56885;
count__56574 = G__56886;
i__56575 = G__56887;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_ = _STAR_remove_send_STAR__orig_val__56488);
}});
/**
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_queue_BANG_(p__56583){
var map__56584 = p__56583;
var map__56584__$1 = cljs.core.__destructure_map(map__56584);
var app__$1 = map__56584__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56584__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56584__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var old_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5802__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5802__auto__)){
var new_node = temp__5802__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
}),cljs.core.PersistentVector.EMPTY,old_queue);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes(app__$1,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes(new_queue,remotes);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_queue,com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,346,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Old queue changed! See https://book.fulcrologic.com/#err-stp-old-queue-chng"], null);
}),null)),null,-1263053225,null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_active_queue_BANG_(app__$1,new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_send_queues_BANG_(app__$1);

return null;
});
/**
 * Returns true if the submission queue has work on it that can proceed without any restrictions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$available_work_QMARK_(app__$1){
var map__56587 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue(app__$1));
var map__56587__$1 = cljs.core.__destructure_map(map__56587);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56587__$1,false);
return cljs.core.boolean$(cljs.core.seq(ready));
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 * 
 *   Activation can be blocked by the tx-node options for things like waiting for the next render frame.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$activate_submissions_BANG_(app__$1){
var map__56591 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue(app__$1));
var map__56591__$1 = cljs.core.__destructure_map(map__56591);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56591__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56591__$1,false);
var _ = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_submission_queue_BANG_(app__$1,cljs.core.vec(blocked));
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56590_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(p1__56590_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__56590_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
}),ready);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),dispatched_nodes], 0));

return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_queue_BANG_(app__$1);
});
/**
 * Runs the submission queue. If the submission queue's optimistic actions submit more to the submission queue, then those
 * are processed as well until the submission queue remains empty. This can start network requests.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_all_immediate_work_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_all_immediate_work_BANG_(app__$1){
try{return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.activate_submissions_BANG_(app__$1);
}catch (e56593){var e = e56593;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,379,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Error processing tx queue! See https://book.fulcrologic.com/#err-stp-err-processing-tx-q"], null);
}),null)),null,1938989633,null);
}});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_queue_BANG_(app__$1,p__56595){
while(true){
var map__56596 = p__56595;
var map__56596__$1 = cljs.core.__destructure_map(map__56596);
var options = map__56596__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56596__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56596__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
while(true){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_all_immediate_work_BANG_(app__$1);

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_(app__$1)){
continue;
} else {
}
break;
}

if(cljs.core.truth_((function (){var and__5043__auto__ = synchronous_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return component;
} else {
return and__5043__auto__;
}
})())){
var temp__5804__auto___56888 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"refresh-component!","refresh-component!",-872161039));
if(cljs.core.truth_(temp__5804__auto___56888)){
var refresh_component_BANG__56889 = temp__5804__auto___56888;
(refresh_component_BANG__56889.cljs$core$IFn$_invoke$arity$1 ? refresh_component_BANG__56889.cljs$core$IFn$_invoke$arity$1(component) : refresh_component_BANG__56889.call(null, component));
} else {
}
} else {
var temp__5804__auto___56890 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(temp__5804__auto___56890)){
var render_BANG__56891 = temp__5804__auto___56890;
(render_BANG__56891.cljs$core$IFn$_invoke$arity$2 ? render_BANG__56891.cljs$core$IFn$_invoke$arity$2(app__$1,options) : render_BANG__56891.call(null, app__$1,options));
} else {
}
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.release_post_render_tasks_BANG_(app__$1);

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_(app__$1)){
var G__56892 = app__$1;
var G__56893 = cljs.core.PersistentArrayMap.EMPTY;
app__$1 = G__56892;
p__56595 = G__56893;
continue;
} else {
return null;
}
break;
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$sync_tx_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56894 = arguments.length;
var i__5770__auto___56895 = (0);
while(true){
if((i__5770__auto___56895 < len__5769__auto___56894)){
args__5775__auto__.push((arguments[i__5770__auto___56895]));

var G__56896 = (i__5770__auto___56895 + (1));
i__5770__auto___56895 = G__56896;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("BREAKING CHANGE. Please use `with-synchronous-transaction` to add sync transaction support to your Fulcro app",cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$lang$applyTo = (function (seq56601){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56601));
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$submit_sync_tx_BANG_(var_args){
var G__56610 = arguments.length;
switch (G__56610) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tx){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__56612,tx,options){
var map__56613 = p__56612;
var map__56613__$1 = cljs.core.__destructure_map(map__56613);
var app__$1 = map__56613__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56613__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56614 = options;
var map__56614__$1 = cljs.core.__destructure_map(map__56614);
var options__$1 = map__56614__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56614__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56614__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56614__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56608_SHARP_){
return (((p1__56608_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__56608_SHARP_)));
}),tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var refresh__$1 = (function (){var G__56619 = cljs.core.set(refresh);
var G__56619__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__56619,follow_on_reads):G__56619);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56619__$1,ref);
} else {
return G__56619__$1;
}
})();
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),node], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (s){
var G__56620 = s;
var G__56620__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__56620,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__56620);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__56620__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__56620__$1;
}
}));

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.in_transaction_QMARK_(app__$1)){
} else {
var id__56127__auto___56898 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__56127__auto___56898,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.current_thread_id()], 0));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_(app__$1,options__$1);
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__56127__auto___56898,cljs.core.pop);
}}

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.abort_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$abort_BANG_(app_ish,abort_id){
var map__56623 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_ish);
var map__56623__$1 = cljs.core.__destructure_map(map__56623);
var app__$1 = map__56623__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56623__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var runtime_state = cljs.core.deref(runtime_atom);
var map__56624 = runtime_state;
var map__56624__$1 = cljs.core.__destructure_map(map__56624);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56624__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517));
var seq__56627 = cljs.core.seq(remotes);
var chunk__56628 = null;
var count__56629 = (0);
var i__56630 = (0);
while(true){
if((i__56630 < count__56629)){
var vec__56643 = chunk__56628.cljs$core$IIndexed$_nth$arity$2(null, i__56630);
var remote_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56643,(0),null);
var remote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56643,(1),null);
var send_queue_56899 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_name);
var new_queue_56900 = com.fulcrologic.fulcro.algorithms.tx_processing.abort_elements_BANG_(remote,send_queue_56899,abort_id);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_name,new_queue_56900);


var G__56901 = seq__56627;
var G__56902 = chunk__56628;
var G__56903 = count__56629;
var G__56904 = (i__56630 + (1));
seq__56627 = G__56901;
chunk__56628 = G__56902;
count__56629 = G__56903;
i__56630 = G__56904;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56627);
if(temp__5804__auto__){
var seq__56627__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56627__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56627__$1);
var G__56905 = cljs.core.chunk_rest(seq__56627__$1);
var G__56906 = c__5568__auto__;
var G__56907 = cljs.core.count(c__5568__auto__);
var G__56908 = (0);
seq__56627 = G__56905;
chunk__56628 = G__56906;
count__56629 = G__56907;
i__56630 = G__56908;
continue;
} else {
var vec__56648 = cljs.core.first(seq__56627__$1);
var remote_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56648,(0),null);
var remote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56648,(1),null);
var send_queue_56909 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_name);
var new_queue_56910 = com.fulcrologic.fulcro.algorithms.tx_processing.abort_elements_BANG_(remote,send_queue_56909,abort_id);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_name,new_queue_56910);


var G__56911 = cljs.core.next(seq__56627__$1);
var G__56912 = null;
var G__56913 = (0);
var G__56914 = (0);
seq__56627 = G__56911;
chunk__56628 = G__56912;
count__56629 = G__56913;
i__56630 = G__56914;
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
 * Installs synchronous transaction processing on a fulcro application.
 * 
 *   ```
 *   (defonce app (stx/with-synchronous-transactions
 *               (app/fulcro-app {...})))
 *   ```
 * 
 *   Passing a set of `batching-remotes` (a sequence of remote names) will enable automatic load
 *   batching on the listed remotes. Transactions are not currently batched, and *pessimistic transaction are NOT supported*.
 * 
 *   This plug-in attempts to do as much work as possible synchronously, including the processing of "remotes" that
 *   can behave synchronously. This processing system
 *   preserves transactional ordering semantics for nested submissions, but cannot guarantee that the overall sequence of
 *   operations will exactly match what you'd see if using the standard tx processing.
 * 
 *   The options map you can pass to `transact!` supports most of the same things as the standard tx processing, with the significant exception of
 *   `:optimistic? false` (pessimistic transactions). It also *always* assumes synchronous operation, though the
 *   `synchronous?` option (if used) does imply that only the current component should be refreshed in the UI as an additinoal
 *   optimization.
 * 
 *   - `:ref` - ident. The component ident to include in the transaction env.
 *   - `:component` - React element. The instance of the component that should appear in the transaction env.
 *   - `:synchronous?` - When true, causes the rendering to only refresh the calling component (if possible), since the implication
 *   is for fast-as-possible refresh semantics, even though this tx processing is already sync.
 *   - `:refresh` - A hint. Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - A hint. Vector of idents/keywords.  If the underlying configured rendering algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI, and they may be refreshed immediately on
 *  `transact!`. This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 * 
 *   If the `options` include `:ref` (which comp/transact! sets), then it will be auto-included on the `:refresh` list.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$with_synchronous_transactions(var_args){
var G__56658 = arguments.length;
switch (G__56658) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$core$IFn$_invoke$arity$2(app__$1,null);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,batching_remotes){
var remotes = cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1))));
var send_queues = cljs.core.zipmap(remotes,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
})));
var batching_enabled = cljs.core.zipmap(batching_remotes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692)], null),batching_enabled),new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","tx!","com.fulcrologic.fulcro.algorithm/tx!",1081877133),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","abort!","com.fulcrologic.fulcro.algorithm/abort!",1698846123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.abort_BANG_], 0)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),send_queues], null));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.js.map
