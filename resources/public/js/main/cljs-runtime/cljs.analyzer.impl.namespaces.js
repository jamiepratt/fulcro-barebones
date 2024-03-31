goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__41574 = libspec;
var seq__41575 = cljs.core.seq(vec__41574);
var first__41576 = cljs.core.first(seq__41575);
var seq__41575__$1 = cljs.core.next(seq__41575);
var lib = first__41576;
var spec = seq__41575__$1;
var libspec__$1 = vec__41574;
var vec__41577 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41577,(0),null);
var vec__41580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41577,(1),null);
var seq__41581 = cljs.core.seq(vec__41580);
var first__41582 = cljs.core.first(seq__41581);
var seq__41581__$1 = cljs.core.next(seq__41581);
var _ = first__41582;
var first__41582__$1 = cljs.core.first(seq__41581__$1);
var seq__41581__$2 = cljs.core.next(seq__41581__$1);
var alias = first__41582__$1;
var post_spec = seq__41581__$2;
var post = vec__41580;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__41583 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41583,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__41583;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__41585 = cljs.core.seq(new_as_aliases);
var chunk__41586 = null;
var count__41587 = (0);
var i__41588 = (0);
while(true){
if((i__41588 < count__41587)){
var vec__41595 = chunk__41586.cljs$core$IIndexed$_nth$arity$2(null, i__41588);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41595,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41595,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__41620 = seq__41585;
var G__41621 = chunk__41586;
var G__41622 = count__41587;
var G__41623 = (i__41588 + (1));
seq__41585 = G__41620;
chunk__41586 = G__41621;
count__41587 = G__41622;
i__41588 = G__41623;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41585);
if(temp__5804__auto__){
var seq__41585__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41585__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41585__$1);
var G__41624 = cljs.core.chunk_rest(seq__41585__$1);
var G__41625 = c__5568__auto__;
var G__41626 = cljs.core.count(c__5568__auto__);
var G__41627 = (0);
seq__41585 = G__41624;
chunk__41586 = G__41625;
count__41587 = G__41626;
i__41588 = G__41627;
continue;
} else {
var vec__41599 = cljs.core.first(seq__41585__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41599,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41599,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__41628 = cljs.core.next(seq__41585__$1);
var G__41629 = null;
var G__41630 = (0);
var G__41631 = (0);
seq__41585 = G__41628;
chunk__41586 = G__41629;
count__41587 = G__41630;
i__41588 = G__41631;
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
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__41603 = arguments.length;
switch (G__41603) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__41604 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__41604__$1 = cljs.core.__destructure_map(map__41604);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41604__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41604__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__41605 = ret__$1;
var G__41605__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41605,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__41605);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41605__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__41605__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__41606,p__41607){
var map__41608 = p__41606;
var map__41608__$1 = cljs.core.__destructure_map(map__41608);
var ret__$1 = map__41608__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41608__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__41609 = p__41607;
var seq__41610 = cljs.core.seq(vec__41609);
var first__41611 = cljs.core.first(seq__41610);
var seq__41610__$1 = cljs.core.next(seq__41610);
var spec_key = first__41611;
var libspecs = seq__41610__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__41612 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__41612__$1 = cljs.core.__destructure_map(map__41612);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41612__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41612__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__41613 = ret__$1;
var G__41613__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41613,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__41613);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41613__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__41613__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
