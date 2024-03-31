goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39600){
var map__39602 = p__39600;
var map__39602__$1 = cljs.core.__destructure_map(map__39602);
var m = map__39602__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39602__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39602__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39612_40021 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39613_40022 = null;
var count__39614_40023 = (0);
var i__39615_40024 = (0);
while(true){
if((i__39615_40024 < count__39614_40023)){
var f_40026 = chunk__39613_40022.cljs$core$IIndexed$_nth$arity$2(null, i__39615_40024);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40026], 0));


var G__40027 = seq__39612_40021;
var G__40028 = chunk__39613_40022;
var G__40029 = count__39614_40023;
var G__40030 = (i__39615_40024 + (1));
seq__39612_40021 = G__40027;
chunk__39613_40022 = G__40028;
count__39614_40023 = G__40029;
i__39615_40024 = G__40030;
continue;
} else {
var temp__5804__auto___40031 = cljs.core.seq(seq__39612_40021);
if(temp__5804__auto___40031){
var seq__39612_40032__$1 = temp__5804__auto___40031;
if(cljs.core.chunked_seq_QMARK_(seq__39612_40032__$1)){
var c__5568__auto___40033 = cljs.core.chunk_first(seq__39612_40032__$1);
var G__40034 = cljs.core.chunk_rest(seq__39612_40032__$1);
var G__40035 = c__5568__auto___40033;
var G__40036 = cljs.core.count(c__5568__auto___40033);
var G__40037 = (0);
seq__39612_40021 = G__40034;
chunk__39613_40022 = G__40035;
count__39614_40023 = G__40036;
i__39615_40024 = G__40037;
continue;
} else {
var f_40038 = cljs.core.first(seq__39612_40032__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40038], 0));


var G__40039 = cljs.core.next(seq__39612_40032__$1);
var G__40040 = null;
var G__40041 = (0);
var G__40042 = (0);
seq__39612_40021 = G__40039;
chunk__39613_40022 = G__40040;
count__39614_40023 = G__40041;
i__39615_40024 = G__40042;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40043 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40043], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40043)))?cljs.core.second(arglists_40043):arglists_40043)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39644_40045 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39645_40046 = null;
var count__39646_40047 = (0);
var i__39647_40048 = (0);
while(true){
if((i__39647_40048 < count__39646_40047)){
var vec__39673_40053 = chunk__39645_40046.cljs$core$IIndexed$_nth$arity$2(null, i__39647_40048);
var name_40054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39673_40053,(0),null);
var map__39676_40055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39673_40053,(1),null);
var map__39676_40056__$1 = cljs.core.__destructure_map(map__39676_40055);
var doc_40057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676_40056__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676_40056__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40054], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40058], 0));

if(cljs.core.truth_(doc_40057)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40057], 0));
} else {
}


var G__40061 = seq__39644_40045;
var G__40062 = chunk__39645_40046;
var G__40063 = count__39646_40047;
var G__40064 = (i__39647_40048 + (1));
seq__39644_40045 = G__40061;
chunk__39645_40046 = G__40062;
count__39646_40047 = G__40063;
i__39647_40048 = G__40064;
continue;
} else {
var temp__5804__auto___40065 = cljs.core.seq(seq__39644_40045);
if(temp__5804__auto___40065){
var seq__39644_40066__$1 = temp__5804__auto___40065;
if(cljs.core.chunked_seq_QMARK_(seq__39644_40066__$1)){
var c__5568__auto___40067 = cljs.core.chunk_first(seq__39644_40066__$1);
var G__40068 = cljs.core.chunk_rest(seq__39644_40066__$1);
var G__40069 = c__5568__auto___40067;
var G__40070 = cljs.core.count(c__5568__auto___40067);
var G__40071 = (0);
seq__39644_40045 = G__40068;
chunk__39645_40046 = G__40069;
count__39646_40047 = G__40070;
i__39647_40048 = G__40071;
continue;
} else {
var vec__39682_40072 = cljs.core.first(seq__39644_40066__$1);
var name_40073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39682_40072,(0),null);
var map__39685_40074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39682_40072,(1),null);
var map__39685_40075__$1 = cljs.core.__destructure_map(map__39685_40074);
var doc_40076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39685_40075__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39685_40075__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40073], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40077], 0));

if(cljs.core.truth_(doc_40076)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40076], 0));
} else {
}


var G__40080 = cljs.core.next(seq__39644_40066__$1);
var G__40081 = null;
var G__40082 = (0);
var G__40083 = (0);
seq__39644_40045 = G__40080;
chunk__39645_40046 = G__40081;
count__39646_40047 = G__40082;
i__39647_40048 = G__40083;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39692 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39693 = null;
var count__39694 = (0);
var i__39695 = (0);
while(true){
if((i__39695 < count__39694)){
var role = chunk__39693.cljs$core$IIndexed$_nth$arity$2(null, i__39695);
var temp__5804__auto___40087__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___40087__$1)){
var spec_40088 = temp__5804__auto___40087__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40088)], 0));
} else {
}


var G__40090 = seq__39692;
var G__40091 = chunk__39693;
var G__40092 = count__39694;
var G__40093 = (i__39695 + (1));
seq__39692 = G__40090;
chunk__39693 = G__40091;
count__39694 = G__40092;
i__39695 = G__40093;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__39692);
if(temp__5804__auto____$1){
var seq__39692__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39692__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39692__$1);
var G__40096 = cljs.core.chunk_rest(seq__39692__$1);
var G__40097 = c__5568__auto__;
var G__40098 = cljs.core.count(c__5568__auto__);
var G__40099 = (0);
seq__39692 = G__40096;
chunk__39693 = G__40097;
count__39694 = G__40098;
i__39695 = G__40099;
continue;
} else {
var role = cljs.core.first(seq__39692__$1);
var temp__5804__auto___40100__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___40100__$2)){
var spec_40102 = temp__5804__auto___40100__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40102)], 0));
} else {
}


var G__40103 = cljs.core.next(seq__39692__$1);
var G__40104 = null;
var G__40105 = (0);
var G__40106 = (0);
seq__39692 = G__40103;
chunk__39693 = G__40104;
count__39694 = G__40105;
i__39695 = G__40106;
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
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40119 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40120 = cljs.core.ex_cause(t);
via = G__40119;
t = G__40120;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39846 = datafied_throwable;
var map__39846__$1 = cljs.core.__destructure_map(map__39846);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39846__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39846__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39846__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39848 = cljs.core.last(via);
var map__39848__$1 = cljs.core.__destructure_map(map__39848);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39848__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39848__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39848__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39849 = data;
var map__39849__$1 = cljs.core.__destructure_map(map__39849);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39849__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39849__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39849__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39850 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39850__$1 = cljs.core.__destructure_map(map__39850);
var top_data = map__39850__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39850__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39857 = phase;
var G__39857__$1 = (((G__39857 instanceof cljs.core.Keyword))?G__39857.fqn:null);
switch (G__39857__$1) {
case "read-source":
var map__39863 = data;
var map__39863__$1 = cljs.core.__destructure_map(map__39863);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39863__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39863__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39864 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39864__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39864,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39864);
var G__39864__$2 = (cljs.core.truth_((function (){var fexpr__39866 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39866.cljs$core$IFn$_invoke$arity$1 ? fexpr__39866.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39866.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39864__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39864__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39864__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39864__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39868 = top_data;
var G__39868__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39868,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39868);
var G__39868__$2 = (cljs.core.truth_((function (){var fexpr__39871 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39871.cljs$core$IFn$_invoke$arity$1 ? fexpr__39871.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39871.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39868__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39868__$1);
var G__39868__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39868__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39868__$2);
var G__39868__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39868__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39868__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39868__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39868__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39876 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39876,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39876,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39876,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39876,(3),null);
var G__39882 = top_data;
var G__39882__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39882,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39882);
var G__39882__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39882__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39882__$1);
var G__39882__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39882__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39882__$2);
var G__39882__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39882__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39882__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39882__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39882__$4;
}

break;
case "execution":
var vec__39898 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39898,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39898,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39898,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39898,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39835_SHARP_){
var or__5045__auto__ = (p1__39835_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__39915 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39915.cljs$core$IFn$_invoke$arity$1 ? fexpr__39915.cljs$core$IFn$_invoke$arity$1(p1__39835_SHARP_) : fexpr__39915.call(null, p1__39835_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__39917 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39917__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39917,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39917);
var G__39917__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39917__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39917__$1);
var G__39917__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39917__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39917__$2);
var G__39917__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39917__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39917__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39917__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39917__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39857__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39926){
var map__39928 = p__39926;
var map__39928__$1 = cljs.core.__destructure_map(map__39928);
var triage_data = map__39928__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39928__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39928__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39928__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39928__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39928__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39928__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39928__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39928__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39943 = phase;
var G__39943__$1 = (((G__39943 instanceof cljs.core.Keyword))?G__39943.fqn:null);
switch (G__39943__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39946 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39947 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39948 = loc;
var G__39949 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39952_40178 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39953_40179 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39954_40180 = true;
var _STAR_print_fn_STAR__temp_val__39955_40181 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39954_40180);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39955_40181);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39924_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39924_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39953_40179);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39952_40178);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39946,G__39947,G__39948,G__39949) : format.call(null, G__39946,G__39947,G__39948,G__39949));

break;
case "macroexpansion":
var G__39969 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39970 = cause_type;
var G__39971 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39972 = loc;
var G__39973 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39969,G__39970,G__39971,G__39972,G__39973) : format.call(null, G__39969,G__39970,G__39971,G__39972,G__39973));

break;
case "compile-syntax-check":
var G__39975 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39976 = cause_type;
var G__39977 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39978 = loc;
var G__39979 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39975,G__39976,G__39977,G__39978,G__39979) : format.call(null, G__39975,G__39976,G__39977,G__39978,G__39979));

break;
case "compilation":
var G__39982 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39983 = cause_type;
var G__39984 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39985 = loc;
var G__39986 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39982,G__39983,G__39984,G__39985,G__39986) : format.call(null, G__39982,G__39983,G__39984,G__39985,G__39986));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39989 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39990 = symbol;
var G__39991 = loc;
var G__39992 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39996_40186 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39997_40187 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39998_40188 = true;
var _STAR_print_fn_STAR__temp_val__39999_40189 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39998_40188);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39999_40189);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39925_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39925_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39997_40187);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39996_40186);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39989,G__39990,G__39991,G__39992) : format.call(null, G__39989,G__39990,G__39991,G__39992));
} else {
var G__40005 = "Execution error%s at %s(%s).\n%s\n";
var G__40006 = cause_type;
var G__40007 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40008 = loc;
var G__40009 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40005,G__40006,G__40007,G__40008,G__40009) : format.call(null, G__40005,G__40006,G__40007,G__40008,G__40009));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39943__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
