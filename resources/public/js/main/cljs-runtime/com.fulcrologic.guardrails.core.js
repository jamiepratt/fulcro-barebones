goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
com.fulcrologic.guardrails.core.global_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
/**
 * Push a global context, accessible from all threads, onto a stack.
 * Used to add information to what guardrails will report when a function failed a check.
 */
com.fulcrologic.guardrails.core.enter_global_context_BANG_ = (function com$fulcrologic$guardrails$core$enter_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,ctx));
});
/**
 * Pops a global context (see `enter-global-context!`).
 * Should be passed the same context that was pushed, although is not enforced, as it's only to be easily compatible with fulcro-spec's hooks API.
 */
com.fulcrologic.guardrails.core.leave_global_context_BANG_ = (function com$fulcrologic$guardrails$core$leave_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.rest);
});
com.fulcrologic.guardrails.core.get_global_context = (function com$fulcrologic$guardrails$core$get_global_context(){
return cljs.core.first(cljs.core.deref(com.fulcrologic.guardrails.core.global_context));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__37043__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_49381){
var state_val_49382 = (state_49381[(1)]);
if((state_val_49382 === (7))){
var inst_49376 = (state_49381[(2)]);
var state_49381__$1 = state_49381;
var statearr_49386_49541 = state_49381__$1;
(statearr_49386_49541[(2)] = inst_49376);

(statearr_49386_49541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49382 === (1))){
var state_49381__$1 = state_49381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49381__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_49382 === (4))){
var inst_49378 = (state_49381[(2)]);
var state_49381__$1 = state_49381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49381__$1,inst_49378);
} else {
if((state_val_49382 === (6))){
var inst_49374 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_49381__$1 = state_49381;
var statearr_49392_49542 = state_49381__$1;
(statearr_49392_49542[(2)] = inst_49374);

(statearr_49392_49542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49382 === (3))){
var inst_49353 = (state_49381[(7)]);
var state_49381__$1 = state_49381;
if(cljs.core.truth_(inst_49353)){
var statearr_49397_49543 = state_49381__$1;
(statearr_49397_49543[(1)] = (5));

} else {
var statearr_49399_49544 = state_49381__$1;
(statearr_49399_49544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49382 === (12))){
var inst_49371 = (state_49381[(2)]);
var inst_49353 = inst_49371;
var state_49381__$1 = (function (){var statearr_49401 = state_49381;
(statearr_49401[(7)] = inst_49353);

return statearr_49401;
})();
var statearr_49402_49545 = state_49381__$1;
(statearr_49402_49545[(2)] = null);

(statearr_49402_49545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49382 === (2))){
var inst_49352 = (state_49381[(2)]);
var inst_49353 = inst_49352;
var state_49381__$1 = (function (){var statearr_49403 = state_49381;
(statearr_49403[(7)] = inst_49353);

return statearr_49403;
})();
var statearr_49404_49547 = state_49381__$1;
(statearr_49404_49547[(2)] = null);

(statearr_49404_49547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49382 === (11))){
var _ = (function (){var statearr_49407 = state_49381;
(statearr_49407[(4)] = cljs.core.rest((state_49381[(4)])));

return statearr_49407;
})();
var state_49381__$1 = state_49381;
var ex49400 = (state_49381__$1[(2)]);
var statearr_49409_49550 = state_49381__$1;
(statearr_49409_49550[(5)] = ex49400);


var statearr_49412_49551 = state_49381__$1;
(statearr_49412_49551[(1)] = (10));

(statearr_49412_49551[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49382 === (9))){
var inst_49368 = (state_49381[(2)]);
var state_49381__$1 = (function (){var statearr_49414 = state_49381;
(statearr_49414[(8)] = inst_49368);

return statearr_49414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49381__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_49382 === (5))){
var state_49381__$1 = state_49381;
var statearr_49415_49552 = state_49381__$1;
(statearr_49415_49552[(2)] = null);

(statearr_49415_49552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49382 === (10))){
var inst_49357 = (state_49381[(2)]);
var state_49381__$1 = (function (){var statearr_49416 = state_49381;
(statearr_49416[(9)] = inst_49357);

return statearr_49416;
})();
var statearr_49417_49553 = state_49381__$1;
(statearr_49417_49553[(2)] = null);

(statearr_49417_49553[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49382 === (8))){
var inst_49353 = (state_49381[(7)]);
var _ = (function (){var statearr_49418 = state_49381;
(statearr_49418[(4)] = cljs.core.cons((11),(state_49381[(4)])));

return statearr_49418;
})();
var inst_49365 = (inst_49353.cljs$core$IFn$_invoke$arity$0 ? inst_49353.cljs$core$IFn$_invoke$arity$0() : inst_49353.call(null, ));
var ___$1 = (function (){var statearr_49422 = state_49381;
(statearr_49422[(4)] = cljs.core.rest((state_49381[(4)])));

return statearr_49422;
})();
var state_49381__$1 = state_49381;
var statearr_49426_49556 = state_49381__$1;
(statearr_49426_49556[(2)] = inst_49365);

(statearr_49426_49556[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__36710__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__36710__auto____0 = (function (){
var statearr_49428 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49428[(0)] = com$fulcrologic$guardrails$core$state_machine__36710__auto__);

(statearr_49428[(1)] = (1));

return statearr_49428;
});
var com$fulcrologic$guardrails$core$state_machine__36710__auto____1 = (function (state_49381){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_49381);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e49431){var ex__36713__auto__ = e49431;
var statearr_49433_49560 = state_49381;
(statearr_49433_49560[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_49381[(4)]))){
var statearr_49434_49562 = state_49381;
(statearr_49434_49562[(1)] = cljs.core.first((state_49381[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49563 = state_49381;
state_49381 = G__49563;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__36710__auto__ = function(state_49381){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__36710__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__36710__auto____1.call(this,state_49381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__36710__auto____0;
com$fulcrologic$guardrails$core$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__36710__auto____1;
return com$fulcrologic$guardrails$core$state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_49435 = f__37044__auto__();
(statearr_49435[(6)] = c__37043__auto__);

return statearr_49435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));

return c__37043__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__49441 = data;
var map__49441__$1 = cljs.core.__destructure_map(map__49441);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49441__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49441__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49441__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49441__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49441__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49441__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49441__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49441__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5804__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5804__auto__)){
var err = temp__5804__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.tap = (((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.tap_GT_ !== 'undefined'))?(new cljs.core.Var((function (){
return cljs.core.tap_GT_;
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","tap>","cljs.core/tap>",895722640,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"tap>","tap>",1822490677,null),"cljs/core.cljs",20,1,11858,11858,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Sends x to any taps. Returns the result of *exec-tap-fn*, a Boolean value.",((cljs.core.tap_GT_)?cljs.core.tap_GT_.cljs$lang$test:null)]))):null);
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__49461,spec,value){
var map__49462 = p__49461;
var map__49462__$1 = cljs.core.__destructure_map(map__49462);
var tap_GT__QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49462__$1,new cljs.core.Keyword(null,"tap>?","tap>?",212454486));
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49462__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49462__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49462__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49462__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49462__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49462__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_49569 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__49570 = (function (){var and__5043__auto__ = args_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return vararg_QMARK_;
} else {
return and__5043__auto__;
}
})();
var varg_49571 = (cljs.core.truth_(vargs_QMARK__49570)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_49572 = (cljs.core.truth_(vargs_QMARK__49570)?((cljs.core.map_QMARK_(varg_49571))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_49571))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_49571))):value);
var valid_exception_49573 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_49572)){
} else {
var problem_49574 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_49572,expound_opts);
var description_49575 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_49574)].join('');
var context_49576 = com.fulcrologic.guardrails.core.get_global_context();
if(cljs.core.truth_((function (){var and__5043__auto__ = com.fulcrologic.guardrails.core.tap;
if(cljs.core.truth_(and__5043__auto__)){
return tap_GT__QMARK_;
} else {
return and__5043__auto__;
}
})())){
var G__49477_49577 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","explain-data","com.fulcrologic.guardrails/explain-data",-1120944464),cljs.spec.alpha.explain_data(spec,specable_args_49572)], null);
(com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1(G__49477_49577) : com.fulcrologic.guardrails.core.tap.call(null, G__49477_49577));
} else {
}

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_49573,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__49478 = description_49575;
if(cljs.core.truth_(context_49576)){
return ["\nContext: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context_49576),G__49478].join('');
} else {
return G__49478;
}
})(),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","context","com.fulcrologic.guardrails/context",-834538901),context_49576], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_49572], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_49575,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = callsite;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e49471){var e_49580 = e49471;
com.fulcrologic.guardrails.utils.report_exception(e_49580,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_49581 = (com.fulcrologic.guardrails.core.now_ms() - start_49569);
if((duration_49581 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_49581),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_49573))){
throw cljs.core.deref(valid_exception_49573);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
