goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37142 = (function (f,blockable,meta37143){
this.f = f;
this.blockable = blockable;
this.meta37143 = meta37143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37144,meta37143__$1){
var self__ = this;
var _37144__$1 = this;
return (new cljs.core.async.t_cljs$core$async37142(self__.f,self__.blockable,meta37143__$1));
}));

(cljs.core.async.t_cljs$core$async37142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37144){
var self__ = this;
var _37144__$1 = this;
return self__.meta37143;
}));

(cljs.core.async.t_cljs$core$async37142.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37142.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37142.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37142.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37143","meta37143",2011265958,null)], null);
}));

(cljs.core.async.t_cljs$core$async37142.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37142");

(cljs.core.async.t_cljs$core$async37142.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37142");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37142.
 */
cljs.core.async.__GT_t_cljs$core$async37142 = (function cljs$core$async$__GT_t_cljs$core$async37142(f,blockable,meta37143){
return (new cljs.core.async.t_cljs$core$async37142(f,blockable,meta37143));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37141 = arguments.length;
switch (G__37141) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async37142(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37176 = arguments.length;
switch (G__37176) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37243 = arguments.length;
switch (G__37243) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37257 = arguments.length;
switch (G__37257) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_39413 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39413) : fn1.call(null, val_39413));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39413) : fn1.call(null, val_39413));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37261 = arguments.length;
switch (G__37261) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___39428 = n;
var x_39429 = (0);
while(true){
if((x_39429 < n__5636__auto___39428)){
(a[x_39429] = x_39429);

var G__39430 = (x_39429 + (1));
x_39429 = G__39430;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37262 = (function (flag,meta37263){
this.flag = flag;
this.meta37263 = meta37263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37264,meta37263__$1){
var self__ = this;
var _37264__$1 = this;
return (new cljs.core.async.t_cljs$core$async37262(self__.flag,meta37263__$1));
}));

(cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37264){
var self__ = this;
var _37264__$1 = this;
return self__.meta37263;
}));

(cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37263","meta37263",336908905,null)], null);
}));

(cljs.core.async.t_cljs$core$async37262.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37262");

(cljs.core.async.t_cljs$core$async37262.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37262");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37262.
 */
cljs.core.async.__GT_t_cljs$core$async37262 = (function cljs$core$async$__GT_t_cljs$core$async37262(flag,meta37263){
return (new cljs.core.async.t_cljs$core$async37262(flag,meta37263));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async37262(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37266 = (function (flag,cb,meta37267){
this.flag = flag;
this.cb = cb;
this.meta37267 = meta37267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37268,meta37267__$1){
var self__ = this;
var _37268__$1 = this;
return (new cljs.core.async.t_cljs$core$async37266(self__.flag,self__.cb,meta37267__$1));
}));

(cljs.core.async.t_cljs$core$async37266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37268){
var self__ = this;
var _37268__$1 = this;
return self__.meta37267;
}));

(cljs.core.async.t_cljs$core$async37266.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37266.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37267","meta37267",-1719174854,null)], null);
}));

(cljs.core.async.t_cljs$core$async37266.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37266");

(cljs.core.async.t_cljs$core$async37266.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37266");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37266.
 */
cljs.core.async.__GT_t_cljs$core$async37266 = (function cljs$core$async$__GT_t_cljs$core$async37266(flag,cb,meta37267){
return (new cljs.core.async.t_cljs$core$async37266(flag,cb,meta37267));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async37266(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37276_SHARP_){
var G__37279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37276_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37279) : fret.call(null, G__37279));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37277_SHARP_){
var G__37280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37277_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37280) : fret.call(null, G__37280));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39431 = (i + (1));
i = G__39431;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39432 = arguments.length;
var i__5770__auto___39433 = (0);
while(true){
if((i__5770__auto___39433 < len__5769__auto___39432)){
args__5775__auto__.push((arguments[i__5770__auto___39433]));

var G__39435 = (i__5770__auto___39433 + (1));
i__5770__auto___39433 = G__39435;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37284){
var map__37285 = p__37284;
var map__37285__$1 = cljs.core.__destructure_map(map__37285);
var opts = map__37285__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37282){
var G__37283 = cljs.core.first(seq37282);
var seq37282__$1 = cljs.core.next(seq37282);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37283,seq37282__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37288 = arguments.length;
switch (G__37288) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37043__auto___39437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_37331){
var state_val_37332 = (state_37331[(1)]);
if((state_val_37332 === (7))){
var inst_37325 = (state_37331[(2)]);
var state_37331__$1 = state_37331;
var statearr_37334_39438 = state_37331__$1;
(statearr_37334_39438[(2)] = inst_37325);

(statearr_37334_39438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (1))){
var state_37331__$1 = state_37331;
var statearr_37335_39439 = state_37331__$1;
(statearr_37335_39439[(2)] = null);

(statearr_37335_39439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (4))){
var inst_37296 = (state_37331[(7)]);
var inst_37296__$1 = (state_37331[(2)]);
var inst_37306 = (inst_37296__$1 == null);
var state_37331__$1 = (function (){var statearr_37337 = state_37331;
(statearr_37337[(7)] = inst_37296__$1);

return statearr_37337;
})();
if(cljs.core.truth_(inst_37306)){
var statearr_37338_39440 = state_37331__$1;
(statearr_37338_39440[(1)] = (5));

} else {
var statearr_37339_39441 = state_37331__$1;
(statearr_37339_39441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (13))){
var state_37331__$1 = state_37331;
var statearr_37340_39442 = state_37331__$1;
(statearr_37340_39442[(2)] = null);

(statearr_37340_39442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (6))){
var inst_37296 = (state_37331[(7)]);
var state_37331__$1 = state_37331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37331__$1,(11),to,inst_37296);
} else {
if((state_val_37332 === (3))){
var inst_37328 = (state_37331[(2)]);
var state_37331__$1 = state_37331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37331__$1,inst_37328);
} else {
if((state_val_37332 === (12))){
var state_37331__$1 = state_37331;
var statearr_37342_39443 = state_37331__$1;
(statearr_37342_39443[(2)] = null);

(statearr_37342_39443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (2))){
var state_37331__$1 = state_37331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37331__$1,(4),from);
} else {
if((state_val_37332 === (11))){
var inst_37318 = (state_37331[(2)]);
var state_37331__$1 = state_37331;
if(cljs.core.truth_(inst_37318)){
var statearr_37343_39447 = state_37331__$1;
(statearr_37343_39447[(1)] = (12));

} else {
var statearr_37344_39448 = state_37331__$1;
(statearr_37344_39448[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (9))){
var state_37331__$1 = state_37331;
var statearr_37345_39449 = state_37331__$1;
(statearr_37345_39449[(2)] = null);

(statearr_37345_39449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (5))){
var state_37331__$1 = state_37331;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37346_39452 = state_37331__$1;
(statearr_37346_39452[(1)] = (8));

} else {
var statearr_37347_39453 = state_37331__$1;
(statearr_37347_39453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (14))){
var inst_37323 = (state_37331[(2)]);
var state_37331__$1 = state_37331;
var statearr_37348_39454 = state_37331__$1;
(statearr_37348_39454[(2)] = inst_37323);

(statearr_37348_39454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (10))){
var inst_37315 = (state_37331[(2)]);
var state_37331__$1 = state_37331;
var statearr_37350_39455 = state_37331__$1;
(statearr_37350_39455[(2)] = inst_37315);

(statearr_37350_39455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37332 === (8))){
var inst_37311 = cljs.core.async.close_BANG_(to);
var state_37331__$1 = state_37331;
var statearr_37351_39456 = state_37331__$1;
(statearr_37351_39456[(2)] = inst_37311);

(statearr_37351_39456[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__36710__auto__ = null;
var cljs$core$async$state_machine__36710__auto____0 = (function (){
var statearr_37352 = [null,null,null,null,null,null,null,null];
(statearr_37352[(0)] = cljs$core$async$state_machine__36710__auto__);

(statearr_37352[(1)] = (1));

return statearr_37352;
});
var cljs$core$async$state_machine__36710__auto____1 = (function (state_37331){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_37331);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e37353){var ex__36713__auto__ = e37353;
var statearr_37354_39457 = state_37331;
(statearr_37354_39457[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_37331[(4)]))){
var statearr_37355_39458 = state_37331;
(statearr_37355_39458[(1)] = cljs.core.first((state_37331[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39459 = state_37331;
state_37331 = G__39459;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$state_machine__36710__auto__ = function(state_37331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36710__auto____1.call(this,state_37331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36710__auto____0;
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36710__auto____1;
return cljs$core$async$state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_37356 = f__37044__auto__();
(statearr_37356[(6)] = c__37043__auto___39437);

return statearr_37356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__37358){
var vec__37359 = p__37358;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37359,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37359,(1),null);
var job = vec__37359;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37043__auto___39460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_37367){
var state_val_37368 = (state_37367[(1)]);
if((state_val_37368 === (1))){
var state_37367__$1 = state_37367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37367__$1,(2),res,v);
} else {
if((state_val_37368 === (2))){
var inst_37364 = (state_37367[(2)]);
var inst_37365 = cljs.core.async.close_BANG_(res);
var state_37367__$1 = (function (){var statearr_37369 = state_37367;
(statearr_37369[(7)] = inst_37364);

return statearr_37369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37367__$1,inst_37365);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0 = (function (){
var statearr_37370 = [null,null,null,null,null,null,null,null];
(statearr_37370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__);

(statearr_37370[(1)] = (1));

return statearr_37370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1 = (function (state_37367){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_37367);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e37372){var ex__36713__auto__ = e37372;
var statearr_37373_39461 = state_37367;
(statearr_37373_39461[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_37367[(4)]))){
var statearr_37374_39462 = state_37367;
(statearr_37374_39462[(1)] = cljs.core.first((state_37367[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39463 = state_37367;
state_37367 = G__39463;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__ = function(state_37367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1.call(this,state_37367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_37375 = f__37044__auto__();
(statearr_37375[(6)] = c__37043__auto___39460);

return statearr_37375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37376){
var vec__37377 = p__37376;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37377,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37377,(1),null);
var job = vec__37377;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___39464 = n;
var __39465 = (0);
while(true){
if((__39465 < n__5636__auto___39464)){
var G__37381_39466 = type;
var G__37381_39467__$1 = (((G__37381_39466 instanceof cljs.core.Keyword))?G__37381_39466.fqn:null);
switch (G__37381_39467__$1) {
case "compute":
var c__37043__auto___39469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39465,c__37043__auto___39469,G__37381_39466,G__37381_39467__$1,n__5636__auto___39464,jobs,results,process__$1,async){
return (function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = ((function (__39465,c__37043__auto___39469,G__37381_39466,G__37381_39467__$1,n__5636__auto___39464,jobs,results,process__$1,async){
return (function (state_37394){
var state_val_37395 = (state_37394[(1)]);
if((state_val_37395 === (1))){
var state_37394__$1 = state_37394;
var statearr_37396_39470 = state_37394__$1;
(statearr_37396_39470[(2)] = null);

(statearr_37396_39470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (2))){
var state_37394__$1 = state_37394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37394__$1,(4),jobs);
} else {
if((state_val_37395 === (3))){
var inst_37392 = (state_37394[(2)]);
var state_37394__$1 = state_37394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37394__$1,inst_37392);
} else {
if((state_val_37395 === (4))){
var inst_37384 = (state_37394[(2)]);
var inst_37385 = process__$1(inst_37384);
var state_37394__$1 = state_37394;
if(cljs.core.truth_(inst_37385)){
var statearr_37398_39471 = state_37394__$1;
(statearr_37398_39471[(1)] = (5));

} else {
var statearr_37399_39472 = state_37394__$1;
(statearr_37399_39472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (5))){
var state_37394__$1 = state_37394;
var statearr_37400_39473 = state_37394__$1;
(statearr_37400_39473[(2)] = null);

(statearr_37400_39473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (6))){
var state_37394__$1 = state_37394;
var statearr_37401_39474 = state_37394__$1;
(statearr_37401_39474[(2)] = null);

(statearr_37401_39474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (7))){
var inst_37390 = (state_37394[(2)]);
var state_37394__$1 = state_37394;
var statearr_37402_39475 = state_37394__$1;
(statearr_37402_39475[(2)] = inst_37390);

(statearr_37402_39475[(1)] = (3));


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
});})(__39465,c__37043__auto___39469,G__37381_39466,G__37381_39467__$1,n__5636__auto___39464,jobs,results,process__$1,async))
;
return ((function (__39465,switch__36709__auto__,c__37043__auto___39469,G__37381_39466,G__37381_39467__$1,n__5636__auto___39464,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0 = (function (){
var statearr_37404 = [null,null,null,null,null,null,null];
(statearr_37404[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__);

(statearr_37404[(1)] = (1));

return statearr_37404;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1 = (function (state_37394){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_37394);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e37405){var ex__36713__auto__ = e37405;
var statearr_37406_39477 = state_37394;
(statearr_37406_39477[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_37394[(4)]))){
var statearr_37407_39478 = state_37394;
(statearr_37407_39478[(1)] = cljs.core.first((state_37394[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39479 = state_37394;
state_37394 = G__39479;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__ = function(state_37394){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1.call(this,state_37394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__;
})()
;})(__39465,switch__36709__auto__,c__37043__auto___39469,G__37381_39466,G__37381_39467__$1,n__5636__auto___39464,jobs,results,process__$1,async))
})();
var state__37045__auto__ = (function (){var statearr_37408 = f__37044__auto__();
(statearr_37408[(6)] = c__37043__auto___39469);

return statearr_37408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
});})(__39465,c__37043__auto___39469,G__37381_39466,G__37381_39467__$1,n__5636__auto___39464,jobs,results,process__$1,async))
);


break;
case "async":
var c__37043__auto___39481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39465,c__37043__auto___39481,G__37381_39466,G__37381_39467__$1,n__5636__auto___39464,jobs,results,process__$1,async){
return (function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = ((function (__39465,c__37043__auto___39481,G__37381_39466,G__37381_39467__$1,n__5636__auto___39464,jobs,results,process__$1,async){
return (function (state_37421){
var state_val_37422 = (state_37421[(1)]);
if((state_val_37422 === (1))){
var state_37421__$1 = state_37421;
var statearr_37424_39483 = state_37421__$1;
(statearr_37424_39483[(2)] = null);

(statearr_37424_39483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (2))){
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37421__$1,(4),jobs);
} else {
if((state_val_37422 === (3))){
var inst_37419 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37421__$1,inst_37419);
} else {
if((state_val_37422 === (4))){
var inst_37411 = (state_37421[(2)]);
var inst_37412 = async(inst_37411);
var state_37421__$1 = state_37421;
if(cljs.core.truth_(inst_37412)){
var statearr_37425_39487 = state_37421__$1;
(statearr_37425_39487[(1)] = (5));

} else {
var statearr_37426_39488 = state_37421__$1;
(statearr_37426_39488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (5))){
var state_37421__$1 = state_37421;
var statearr_37427_39489 = state_37421__$1;
(statearr_37427_39489[(2)] = null);

(statearr_37427_39489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (6))){
var state_37421__$1 = state_37421;
var statearr_37428_39490 = state_37421__$1;
(statearr_37428_39490[(2)] = null);

(statearr_37428_39490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37422 === (7))){
var inst_37417 = (state_37421[(2)]);
var state_37421__$1 = state_37421;
var statearr_37430_39491 = state_37421__$1;
(statearr_37430_39491[(2)] = inst_37417);

(statearr_37430_39491[(1)] = (3));


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
});})(__39465,c__37043__auto___39481,G__37381_39466,G__37381_39467__$1,n__5636__auto___39464,jobs,results,process__$1,async))
;
return ((function (__39465,switch__36709__auto__,c__37043__auto___39481,G__37381_39466,G__37381_39467__$1,n__5636__auto___39464,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0 = (function (){
var statearr_37431 = [null,null,null,null,null,null,null];
(statearr_37431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__);

(statearr_37431[(1)] = (1));

return statearr_37431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1 = (function (state_37421){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_37421);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e37432){var ex__36713__auto__ = e37432;
var statearr_37433_39492 = state_37421;
(statearr_37433_39492[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_37421[(4)]))){
var statearr_37434_39493 = state_37421;
(statearr_37434_39493[(1)] = cljs.core.first((state_37421[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39494 = state_37421;
state_37421 = G__39494;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__ = function(state_37421){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1.call(this,state_37421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__;
})()
;})(__39465,switch__36709__auto__,c__37043__auto___39481,G__37381_39466,G__37381_39467__$1,n__5636__auto___39464,jobs,results,process__$1,async))
})();
var state__37045__auto__ = (function (){var statearr_37435 = f__37044__auto__();
(statearr_37435[(6)] = c__37043__auto___39481);

return statearr_37435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
});})(__39465,c__37043__auto___39481,G__37381_39466,G__37381_39467__$1,n__5636__auto___39464,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37381_39467__$1)].join('')));

}

var G__39496 = (__39465 + (1));
__39465 = G__39496;
continue;
} else {
}
break;
}

var c__37043__auto___39497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_37458){
var state_val_37459 = (state_37458[(1)]);
if((state_val_37459 === (7))){
var inst_37454 = (state_37458[(2)]);
var state_37458__$1 = state_37458;
var statearr_37461_39499 = state_37458__$1;
(statearr_37461_39499[(2)] = inst_37454);

(statearr_37461_39499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37459 === (1))){
var state_37458__$1 = state_37458;
var statearr_37462_39500 = state_37458__$1;
(statearr_37462_39500[(2)] = null);

(statearr_37462_39500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37459 === (4))){
var inst_37439 = (state_37458[(7)]);
var inst_37439__$1 = (state_37458[(2)]);
var inst_37440 = (inst_37439__$1 == null);
var state_37458__$1 = (function (){var statearr_37463 = state_37458;
(statearr_37463[(7)] = inst_37439__$1);

return statearr_37463;
})();
if(cljs.core.truth_(inst_37440)){
var statearr_37464_39501 = state_37458__$1;
(statearr_37464_39501[(1)] = (5));

} else {
var statearr_37465_39502 = state_37458__$1;
(statearr_37465_39502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37459 === (6))){
var inst_37439 = (state_37458[(7)]);
var inst_37444 = (state_37458[(8)]);
var inst_37444__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37445 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37446 = [inst_37439,inst_37444__$1];
var inst_37447 = (new cljs.core.PersistentVector(null,2,(5),inst_37445,inst_37446,null));
var state_37458__$1 = (function (){var statearr_37467 = state_37458;
(statearr_37467[(8)] = inst_37444__$1);

return statearr_37467;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37458__$1,(8),jobs,inst_37447);
} else {
if((state_val_37459 === (3))){
var inst_37456 = (state_37458[(2)]);
var state_37458__$1 = state_37458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37458__$1,inst_37456);
} else {
if((state_val_37459 === (2))){
var state_37458__$1 = state_37458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37458__$1,(4),from);
} else {
if((state_val_37459 === (9))){
var inst_37451 = (state_37458[(2)]);
var state_37458__$1 = (function (){var statearr_37468 = state_37458;
(statearr_37468[(9)] = inst_37451);

return statearr_37468;
})();
var statearr_37469_39504 = state_37458__$1;
(statearr_37469_39504[(2)] = null);

(statearr_37469_39504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37459 === (5))){
var inst_37442 = cljs.core.async.close_BANG_(jobs);
var state_37458__$1 = state_37458;
var statearr_37470_39506 = state_37458__$1;
(statearr_37470_39506[(2)] = inst_37442);

(statearr_37470_39506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37459 === (8))){
var inst_37444 = (state_37458[(8)]);
var inst_37449 = (state_37458[(2)]);
var state_37458__$1 = (function (){var statearr_37471 = state_37458;
(statearr_37471[(10)] = inst_37449);

return statearr_37471;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37458__$1,(9),results,inst_37444);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0 = (function (){
var statearr_37473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__);

(statearr_37473[(1)] = (1));

return statearr_37473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1 = (function (state_37458){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_37458);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e37474){var ex__36713__auto__ = e37474;
var statearr_37475_39507 = state_37458;
(statearr_37475_39507[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_37458[(4)]))){
var statearr_37476_39508 = state_37458;
(statearr_37476_39508[(1)] = cljs.core.first((state_37458[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39509 = state_37458;
state_37458 = G__39509;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__ = function(state_37458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1.call(this,state_37458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_37477 = f__37044__auto__();
(statearr_37477[(6)] = c__37043__auto___39497);

return statearr_37477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));


var c__37043__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_37517){
var state_val_37518 = (state_37517[(1)]);
if((state_val_37518 === (7))){
var inst_37513 = (state_37517[(2)]);
var state_37517__$1 = state_37517;
var statearr_37519_39510 = state_37517__$1;
(statearr_37519_39510[(2)] = inst_37513);

(statearr_37519_39510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (20))){
var state_37517__$1 = state_37517;
var statearr_37520_39511 = state_37517__$1;
(statearr_37520_39511[(2)] = null);

(statearr_37520_39511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (1))){
var state_37517__$1 = state_37517;
var statearr_37521_39512 = state_37517__$1;
(statearr_37521_39512[(2)] = null);

(statearr_37521_39512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (4))){
var inst_37480 = (state_37517[(7)]);
var inst_37480__$1 = (state_37517[(2)]);
var inst_37481 = (inst_37480__$1 == null);
var state_37517__$1 = (function (){var statearr_37522 = state_37517;
(statearr_37522[(7)] = inst_37480__$1);

return statearr_37522;
})();
if(cljs.core.truth_(inst_37481)){
var statearr_37523_39515 = state_37517__$1;
(statearr_37523_39515[(1)] = (5));

} else {
var statearr_37524_39516 = state_37517__$1;
(statearr_37524_39516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (15))){
var inst_37495 = (state_37517[(8)]);
var state_37517__$1 = state_37517;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37517__$1,(18),to,inst_37495);
} else {
if((state_val_37518 === (21))){
var inst_37508 = (state_37517[(2)]);
var state_37517__$1 = state_37517;
var statearr_37527_39517 = state_37517__$1;
(statearr_37527_39517[(2)] = inst_37508);

(statearr_37527_39517[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (13))){
var inst_37510 = (state_37517[(2)]);
var state_37517__$1 = (function (){var statearr_37528 = state_37517;
(statearr_37528[(9)] = inst_37510);

return statearr_37528;
})();
var statearr_37529_39518 = state_37517__$1;
(statearr_37529_39518[(2)] = null);

(statearr_37529_39518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (6))){
var inst_37480 = (state_37517[(7)]);
var state_37517__$1 = state_37517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37517__$1,(11),inst_37480);
} else {
if((state_val_37518 === (17))){
var inst_37503 = (state_37517[(2)]);
var state_37517__$1 = state_37517;
if(cljs.core.truth_(inst_37503)){
var statearr_37530_39519 = state_37517__$1;
(statearr_37530_39519[(1)] = (19));

} else {
var statearr_37531_39520 = state_37517__$1;
(statearr_37531_39520[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (3))){
var inst_37515 = (state_37517[(2)]);
var state_37517__$1 = state_37517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37517__$1,inst_37515);
} else {
if((state_val_37518 === (12))){
var inst_37492 = (state_37517[(10)]);
var state_37517__$1 = state_37517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37517__$1,(14),inst_37492);
} else {
if((state_val_37518 === (2))){
var state_37517__$1 = state_37517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37517__$1,(4),results);
} else {
if((state_val_37518 === (19))){
var state_37517__$1 = state_37517;
var statearr_37532_39525 = state_37517__$1;
(statearr_37532_39525[(2)] = null);

(statearr_37532_39525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (11))){
var inst_37492 = (state_37517[(2)]);
var state_37517__$1 = (function (){var statearr_37533 = state_37517;
(statearr_37533[(10)] = inst_37492);

return statearr_37533;
})();
var statearr_37534_39526 = state_37517__$1;
(statearr_37534_39526[(2)] = null);

(statearr_37534_39526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (9))){
var state_37517__$1 = state_37517;
var statearr_37535_39527 = state_37517__$1;
(statearr_37535_39527[(2)] = null);

(statearr_37535_39527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (5))){
var state_37517__$1 = state_37517;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37536_39528 = state_37517__$1;
(statearr_37536_39528[(1)] = (8));

} else {
var statearr_37537_39529 = state_37517__$1;
(statearr_37537_39529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (14))){
var inst_37495 = (state_37517[(8)]);
var inst_37497 = (state_37517[(11)]);
var inst_37495__$1 = (state_37517[(2)]);
var inst_37496 = (inst_37495__$1 == null);
var inst_37497__$1 = cljs.core.not(inst_37496);
var state_37517__$1 = (function (){var statearr_37538 = state_37517;
(statearr_37538[(8)] = inst_37495__$1);

(statearr_37538[(11)] = inst_37497__$1);

return statearr_37538;
})();
if(inst_37497__$1){
var statearr_37539_39534 = state_37517__$1;
(statearr_37539_39534[(1)] = (15));

} else {
var statearr_37540_39535 = state_37517__$1;
(statearr_37540_39535[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (16))){
var inst_37497 = (state_37517[(11)]);
var state_37517__$1 = state_37517;
var statearr_37541_39536 = state_37517__$1;
(statearr_37541_39536[(2)] = inst_37497);

(statearr_37541_39536[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (10))){
var inst_37488 = (state_37517[(2)]);
var state_37517__$1 = state_37517;
var statearr_37542_39537 = state_37517__$1;
(statearr_37542_39537[(2)] = inst_37488);

(statearr_37542_39537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (18))){
var inst_37500 = (state_37517[(2)]);
var state_37517__$1 = state_37517;
var statearr_37543_39538 = state_37517__$1;
(statearr_37543_39538[(2)] = inst_37500);

(statearr_37543_39538[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (8))){
var inst_37485 = cljs.core.async.close_BANG_(to);
var state_37517__$1 = state_37517;
var statearr_37545_39539 = state_37517__$1;
(statearr_37545_39539[(2)] = inst_37485);

(statearr_37545_39539[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0 = (function (){
var statearr_37547 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37547[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__);

(statearr_37547[(1)] = (1));

return statearr_37547;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1 = (function (state_37517){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_37517);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e37548){var ex__36713__auto__ = e37548;
var statearr_37549_39540 = state_37517;
(statearr_37549_39540[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_37517[(4)]))){
var statearr_37550_39541 = state_37517;
(statearr_37550_39541[(1)] = cljs.core.first((state_37517[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39543 = state_37517;
state_37517 = G__39543;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__ = function(state_37517){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1.call(this,state_37517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36710__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_37551 = f__37044__auto__();
(statearr_37551[(6)] = c__37043__auto__);

return statearr_37551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));

return c__37043__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37553 = arguments.length;
switch (G__37553) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37555 = arguments.length;
switch (G__37555) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37560 = arguments.length;
switch (G__37560) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__37043__auto___39548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_37586){
var state_val_37588 = (state_37586[(1)]);
if((state_val_37588 === (7))){
var inst_37582 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
var statearr_37594_39549 = state_37586__$1;
(statearr_37594_39549[(2)] = inst_37582);

(statearr_37594_39549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (1))){
var state_37586__$1 = state_37586;
var statearr_37595_39551 = state_37586__$1;
(statearr_37595_39551[(2)] = null);

(statearr_37595_39551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (4))){
var inst_37563 = (state_37586[(7)]);
var inst_37563__$1 = (state_37586[(2)]);
var inst_37564 = (inst_37563__$1 == null);
var state_37586__$1 = (function (){var statearr_37596 = state_37586;
(statearr_37596[(7)] = inst_37563__$1);

return statearr_37596;
})();
if(cljs.core.truth_(inst_37564)){
var statearr_37597_39553 = state_37586__$1;
(statearr_37597_39553[(1)] = (5));

} else {
var statearr_37598_39554 = state_37586__$1;
(statearr_37598_39554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (13))){
var state_37586__$1 = state_37586;
var statearr_37600_39555 = state_37586__$1;
(statearr_37600_39555[(2)] = null);

(statearr_37600_39555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (6))){
var inst_37563 = (state_37586[(7)]);
var inst_37569 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37563) : p.call(null, inst_37563));
var state_37586__$1 = state_37586;
if(cljs.core.truth_(inst_37569)){
var statearr_37604_39556 = state_37586__$1;
(statearr_37604_39556[(1)] = (9));

} else {
var statearr_37606_39557 = state_37586__$1;
(statearr_37606_39557[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (3))){
var inst_37584 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37586__$1,inst_37584);
} else {
if((state_val_37588 === (12))){
var state_37586__$1 = state_37586;
var statearr_37610_39558 = state_37586__$1;
(statearr_37610_39558[(2)] = null);

(statearr_37610_39558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (2))){
var state_37586__$1 = state_37586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37586__$1,(4),ch);
} else {
if((state_val_37588 === (11))){
var inst_37563 = (state_37586[(7)]);
var inst_37573 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37586__$1,(8),inst_37573,inst_37563);
} else {
if((state_val_37588 === (9))){
var state_37586__$1 = state_37586;
var statearr_37615_39559 = state_37586__$1;
(statearr_37615_39559[(2)] = tc);

(statearr_37615_39559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (5))){
var inst_37566 = cljs.core.async.close_BANG_(tc);
var inst_37567 = cljs.core.async.close_BANG_(fc);
var state_37586__$1 = (function (){var statearr_37617 = state_37586;
(statearr_37617[(8)] = inst_37566);

return statearr_37617;
})();
var statearr_37620_39560 = state_37586__$1;
(statearr_37620_39560[(2)] = inst_37567);

(statearr_37620_39560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (14))){
var inst_37580 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
var statearr_37622_39561 = state_37586__$1;
(statearr_37622_39561[(2)] = inst_37580);

(statearr_37622_39561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (10))){
var state_37586__$1 = state_37586;
var statearr_37624_39562 = state_37586__$1;
(statearr_37624_39562[(2)] = fc);

(statearr_37624_39562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37588 === (8))){
var inst_37575 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
if(cljs.core.truth_(inst_37575)){
var statearr_37628_39563 = state_37586__$1;
(statearr_37628_39563[(1)] = (12));

} else {
var statearr_37629_39564 = state_37586__$1;
(statearr_37629_39564[(1)] = (13));

}

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
}
}
});
return (function() {
var cljs$core$async$state_machine__36710__auto__ = null;
var cljs$core$async$state_machine__36710__auto____0 = (function (){
var statearr_37634 = [null,null,null,null,null,null,null,null,null];
(statearr_37634[(0)] = cljs$core$async$state_machine__36710__auto__);

(statearr_37634[(1)] = (1));

return statearr_37634;
});
var cljs$core$async$state_machine__36710__auto____1 = (function (state_37586){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_37586);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e37636){var ex__36713__auto__ = e37636;
var statearr_37637_39566 = state_37586;
(statearr_37637_39566[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_37586[(4)]))){
var statearr_37641_39567 = state_37586;
(statearr_37641_39567[(1)] = cljs.core.first((state_37586[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39568 = state_37586;
state_37586 = G__39568;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$state_machine__36710__auto__ = function(state_37586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36710__auto____1.call(this,state_37586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36710__auto____0;
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36710__auto____1;
return cljs$core$async$state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_37644 = f__37044__auto__();
(statearr_37644[(6)] = c__37043__auto___39548);

return statearr_37644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37043__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_37680){
var state_val_37681 = (state_37680[(1)]);
if((state_val_37681 === (7))){
var inst_37676 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
var statearr_37687_39569 = state_37680__$1;
(statearr_37687_39569[(2)] = inst_37676);

(statearr_37687_39569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (1))){
var inst_37652 = init;
var inst_37656 = inst_37652;
var state_37680__$1 = (function (){var statearr_37690 = state_37680;
(statearr_37690[(7)] = inst_37656);

return statearr_37690;
})();
var statearr_37692_39570 = state_37680__$1;
(statearr_37692_39570[(2)] = null);

(statearr_37692_39570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (4))){
var inst_37659 = (state_37680[(8)]);
var inst_37659__$1 = (state_37680[(2)]);
var inst_37660 = (inst_37659__$1 == null);
var state_37680__$1 = (function (){var statearr_37694 = state_37680;
(statearr_37694[(8)] = inst_37659__$1);

return statearr_37694;
})();
if(cljs.core.truth_(inst_37660)){
var statearr_37696_39571 = state_37680__$1;
(statearr_37696_39571[(1)] = (5));

} else {
var statearr_37699_39572 = state_37680__$1;
(statearr_37699_39572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (6))){
var inst_37659 = (state_37680[(8)]);
var inst_37664 = (state_37680[(9)]);
var inst_37656 = (state_37680[(7)]);
var inst_37664__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37656,inst_37659) : f.call(null, inst_37656,inst_37659));
var inst_37665 = cljs.core.reduced_QMARK_(inst_37664__$1);
var state_37680__$1 = (function (){var statearr_37702 = state_37680;
(statearr_37702[(9)] = inst_37664__$1);

return statearr_37702;
})();
if(inst_37665){
var statearr_37705_39577 = state_37680__$1;
(statearr_37705_39577[(1)] = (8));

} else {
var statearr_37707_39578 = state_37680__$1;
(statearr_37707_39578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (3))){
var inst_37678 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37680__$1,inst_37678);
} else {
if((state_val_37681 === (2))){
var state_37680__$1 = state_37680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37680__$1,(4),ch);
} else {
if((state_val_37681 === (9))){
var inst_37664 = (state_37680[(9)]);
var inst_37656 = inst_37664;
var state_37680__$1 = (function (){var statearr_37709 = state_37680;
(statearr_37709[(7)] = inst_37656);

return statearr_37709;
})();
var statearr_37712_39579 = state_37680__$1;
(statearr_37712_39579[(2)] = null);

(statearr_37712_39579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (5))){
var inst_37656 = (state_37680[(7)]);
var state_37680__$1 = state_37680;
var statearr_37715_39580 = state_37680__$1;
(statearr_37715_39580[(2)] = inst_37656);

(statearr_37715_39580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (10))){
var inst_37674 = (state_37680[(2)]);
var state_37680__$1 = state_37680;
var statearr_37717_39581 = state_37680__$1;
(statearr_37717_39581[(2)] = inst_37674);

(statearr_37717_39581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37681 === (8))){
var inst_37664 = (state_37680[(9)]);
var inst_37670 = cljs.core.deref(inst_37664);
var state_37680__$1 = state_37680;
var statearr_37721_39583 = state_37680__$1;
(statearr_37721_39583[(2)] = inst_37670);

(statearr_37721_39583[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__36710__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36710__auto____0 = (function (){
var statearr_37727 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37727[(0)] = cljs$core$async$reduce_$_state_machine__36710__auto__);

(statearr_37727[(1)] = (1));

return statearr_37727;
});
var cljs$core$async$reduce_$_state_machine__36710__auto____1 = (function (state_37680){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_37680);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e37729){var ex__36713__auto__ = e37729;
var statearr_37730_39584 = state_37680;
(statearr_37730_39584[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_37680[(4)]))){
var statearr_37731_39585 = state_37680;
(statearr_37731_39585[(1)] = cljs.core.first((state_37680[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39587 = state_37680;
state_37680 = G__39587;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36710__auto__ = function(state_37680){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36710__auto____1.call(this,state_37680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36710__auto____0;
cljs$core$async$reduce_$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36710__auto____1;
return cljs$core$async$reduce_$_state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_37735 = f__37044__auto__();
(statearr_37735[(6)] = c__37043__auto__);

return statearr_37735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));

return c__37043__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__37043__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_37748){
var state_val_37749 = (state_37748[(1)]);
if((state_val_37749 === (1))){
var inst_37741 = cljs.core.async.reduce(f__$1,init,ch);
var state_37748__$1 = state_37748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37748__$1,(2),inst_37741);
} else {
if((state_val_37749 === (2))){
var inst_37743 = (state_37748[(2)]);
var inst_37744 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37743) : f__$1.call(null, inst_37743));
var state_37748__$1 = state_37748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37748__$1,inst_37744);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36710__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36710__auto____0 = (function (){
var statearr_37756 = [null,null,null,null,null,null,null];
(statearr_37756[(0)] = cljs$core$async$transduce_$_state_machine__36710__auto__);

(statearr_37756[(1)] = (1));

return statearr_37756;
});
var cljs$core$async$transduce_$_state_machine__36710__auto____1 = (function (state_37748){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_37748);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e37761){var ex__36713__auto__ = e37761;
var statearr_37762_39589 = state_37748;
(statearr_37762_39589[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_37748[(4)]))){
var statearr_37764_39590 = state_37748;
(statearr_37764_39590[(1)] = cljs.core.first((state_37748[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39592 = state_37748;
state_37748 = G__39592;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36710__auto__ = function(state_37748){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36710__auto____1.call(this,state_37748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36710__auto____0;
cljs$core$async$transduce_$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36710__auto____1;
return cljs$core$async$transduce_$_state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_37768 = f__37044__auto__();
(statearr_37768[(6)] = c__37043__auto__);

return statearr_37768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));

return c__37043__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__37778 = arguments.length;
switch (G__37778) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37043__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_37816){
var state_val_37817 = (state_37816[(1)]);
if((state_val_37817 === (7))){
var inst_37793 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37823_39597 = state_37816__$1;
(statearr_37823_39597[(2)] = inst_37793);

(statearr_37823_39597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (1))){
var inst_37786 = cljs.core.seq(coll);
var inst_37787 = inst_37786;
var state_37816__$1 = (function (){var statearr_37827 = state_37816;
(statearr_37827[(7)] = inst_37787);

return statearr_37827;
})();
var statearr_37828_39599 = state_37816__$1;
(statearr_37828_39599[(2)] = null);

(statearr_37828_39599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (4))){
var inst_37787 = (state_37816[(7)]);
var inst_37791 = cljs.core.first(inst_37787);
var state_37816__$1 = state_37816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37816__$1,(7),ch,inst_37791);
} else {
if((state_val_37817 === (13))){
var inst_37810 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37832_39601 = state_37816__$1;
(statearr_37832_39601[(2)] = inst_37810);

(statearr_37832_39601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (6))){
var inst_37797 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
if(cljs.core.truth_(inst_37797)){
var statearr_37834_39603 = state_37816__$1;
(statearr_37834_39603[(1)] = (8));

} else {
var statearr_37836_39604 = state_37816__$1;
(statearr_37836_39604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (3))){
var inst_37814 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37816__$1,inst_37814);
} else {
if((state_val_37817 === (12))){
var state_37816__$1 = state_37816;
var statearr_37840_39606 = state_37816__$1;
(statearr_37840_39606[(2)] = null);

(statearr_37840_39606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (2))){
var inst_37787 = (state_37816[(7)]);
var state_37816__$1 = state_37816;
if(cljs.core.truth_(inst_37787)){
var statearr_37843_39607 = state_37816__$1;
(statearr_37843_39607[(1)] = (4));

} else {
var statearr_37846_39608 = state_37816__$1;
(statearr_37846_39608[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (11))){
var inst_37807 = cljs.core.async.close_BANG_(ch);
var state_37816__$1 = state_37816;
var statearr_37848_39609 = state_37816__$1;
(statearr_37848_39609[(2)] = inst_37807);

(statearr_37848_39609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (9))){
var state_37816__$1 = state_37816;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37851_39610 = state_37816__$1;
(statearr_37851_39610[(1)] = (11));

} else {
var statearr_37853_39611 = state_37816__$1;
(statearr_37853_39611[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (5))){
var inst_37787 = (state_37816[(7)]);
var state_37816__$1 = state_37816;
var statearr_37855_39616 = state_37816__$1;
(statearr_37855_39616[(2)] = inst_37787);

(statearr_37855_39616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (10))){
var inst_37812 = (state_37816[(2)]);
var state_37816__$1 = state_37816;
var statearr_37858_39617 = state_37816__$1;
(statearr_37858_39617[(2)] = inst_37812);

(statearr_37858_39617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37817 === (8))){
var inst_37787 = (state_37816[(7)]);
var inst_37801 = cljs.core.next(inst_37787);
var inst_37787__$1 = inst_37801;
var state_37816__$1 = (function (){var statearr_37861 = state_37816;
(statearr_37861[(7)] = inst_37787__$1);

return statearr_37861;
})();
var statearr_37862_39619 = state_37816__$1;
(statearr_37862_39619[(2)] = null);

(statearr_37862_39619[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__36710__auto__ = null;
var cljs$core$async$state_machine__36710__auto____0 = (function (){
var statearr_37868 = [null,null,null,null,null,null,null,null];
(statearr_37868[(0)] = cljs$core$async$state_machine__36710__auto__);

(statearr_37868[(1)] = (1));

return statearr_37868;
});
var cljs$core$async$state_machine__36710__auto____1 = (function (state_37816){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_37816);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e37870){var ex__36713__auto__ = e37870;
var statearr_37873_39626 = state_37816;
(statearr_37873_39626[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_37816[(4)]))){
var statearr_37875_39627 = state_37816;
(statearr_37875_39627[(1)] = cljs.core.first((state_37816[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39628 = state_37816;
state_37816 = G__39628;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$state_machine__36710__auto__ = function(state_37816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36710__auto____1.call(this,state_37816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36710__auto____0;
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36710__auto____1;
return cljs$core$async$state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_37880 = f__37044__auto__();
(statearr_37880[(6)] = c__37043__auto__);

return statearr_37880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));

return c__37043__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37890 = arguments.length;
switch (G__37890) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_39638 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null, _));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_39638(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_39643 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_39643(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_39652 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null, m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_39652(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_39660 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null, m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_39660(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37917 = (function (ch,cs,meta37918){
this.ch = ch;
this.cs = cs;
this.meta37918 = meta37918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37919,meta37918__$1){
var self__ = this;
var _37919__$1 = this;
return (new cljs.core.async.t_cljs$core$async37917(self__.ch,self__.cs,meta37918__$1));
}));

(cljs.core.async.t_cljs$core$async37917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37919){
var self__ = this;
var _37919__$1 = this;
return self__.meta37918;
}));

(cljs.core.async.t_cljs$core$async37917.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37917.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37917.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37917.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37917.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37918","meta37918",704225931,null)], null);
}));

(cljs.core.async.t_cljs$core$async37917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37917");

(cljs.core.async.t_cljs$core$async37917.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37917.
 */
cljs.core.async.__GT_t_cljs$core$async37917 = (function cljs$core$async$__GT_t_cljs$core$async37917(ch,cs,meta37918){
return (new cljs.core.async.t_cljs$core$async37917(ch,cs,meta37918));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async37917(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37043__auto___39677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_38086){
var state_val_38087 = (state_38086[(1)]);
if((state_val_38087 === (7))){
var inst_38082 = (state_38086[(2)]);
var state_38086__$1 = state_38086;
var statearr_38095_39681 = state_38086__$1;
(statearr_38095_39681[(2)] = inst_38082);

(statearr_38095_39681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (20))){
var inst_37974 = (state_38086[(7)]);
var inst_37990 = cljs.core.first(inst_37974);
var inst_37991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37990,(0),null);
var inst_37992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37990,(1),null);
var state_38086__$1 = (function (){var statearr_38097 = state_38086;
(statearr_38097[(8)] = inst_37991);

return statearr_38097;
})();
if(cljs.core.truth_(inst_37992)){
var statearr_38098_39686 = state_38086__$1;
(statearr_38098_39686[(1)] = (22));

} else {
var statearr_38099_39687 = state_38086__$1;
(statearr_38099_39687[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (27))){
var inst_38026 = (state_38086[(9)]);
var inst_37935 = (state_38086[(10)]);
var inst_38031 = (state_38086[(11)]);
var inst_38024 = (state_38086[(12)]);
var inst_38031__$1 = cljs.core._nth(inst_38024,inst_38026);
var inst_38035 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38031__$1,inst_37935,done);
var state_38086__$1 = (function (){var statearr_38104 = state_38086;
(statearr_38104[(11)] = inst_38031__$1);

return statearr_38104;
})();
if(cljs.core.truth_(inst_38035)){
var statearr_38105_39688 = state_38086__$1;
(statearr_38105_39688[(1)] = (30));

} else {
var statearr_38106_39689 = state_38086__$1;
(statearr_38106_39689[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (1))){
var state_38086__$1 = state_38086;
var statearr_38110_39690 = state_38086__$1;
(statearr_38110_39690[(2)] = null);

(statearr_38110_39690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (24))){
var inst_37974 = (state_38086[(7)]);
var inst_38001 = (state_38086[(2)]);
var inst_38002 = cljs.core.next(inst_37974);
var inst_37948 = inst_38002;
var inst_37949 = null;
var inst_37950 = (0);
var inst_37951 = (0);
var state_38086__$1 = (function (){var statearr_38112 = state_38086;
(statearr_38112[(13)] = inst_37949);

(statearr_38112[(14)] = inst_37950);

(statearr_38112[(15)] = inst_37948);

(statearr_38112[(16)] = inst_38001);

(statearr_38112[(17)] = inst_37951);

return statearr_38112;
})();
var statearr_38113_39696 = state_38086__$1;
(statearr_38113_39696[(2)] = null);

(statearr_38113_39696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (39))){
var state_38086__$1 = state_38086;
var statearr_38121_39697 = state_38086__$1;
(statearr_38121_39697[(2)] = null);

(statearr_38121_39697[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (4))){
var inst_37935 = (state_38086[(10)]);
var inst_37935__$1 = (state_38086[(2)]);
var inst_37936 = (inst_37935__$1 == null);
var state_38086__$1 = (function (){var statearr_38122 = state_38086;
(statearr_38122[(10)] = inst_37935__$1);

return statearr_38122;
})();
if(cljs.core.truth_(inst_37936)){
var statearr_38124_39702 = state_38086__$1;
(statearr_38124_39702[(1)] = (5));

} else {
var statearr_38125_39707 = state_38086__$1;
(statearr_38125_39707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (15))){
var inst_37949 = (state_38086[(13)]);
var inst_37950 = (state_38086[(14)]);
var inst_37948 = (state_38086[(15)]);
var inst_37951 = (state_38086[(17)]);
var inst_37970 = (state_38086[(2)]);
var inst_37971 = (inst_37951 + (1));
var tmp38117 = inst_37949;
var tmp38118 = inst_37950;
var tmp38119 = inst_37948;
var inst_37948__$1 = tmp38119;
var inst_37949__$1 = tmp38117;
var inst_37950__$1 = tmp38118;
var inst_37951__$1 = inst_37971;
var state_38086__$1 = (function (){var statearr_38126 = state_38086;
(statearr_38126[(13)] = inst_37949__$1);

(statearr_38126[(18)] = inst_37970);

(statearr_38126[(14)] = inst_37950__$1);

(statearr_38126[(15)] = inst_37948__$1);

(statearr_38126[(17)] = inst_37951__$1);

return statearr_38126;
})();
var statearr_38127_39717 = state_38086__$1;
(statearr_38127_39717[(2)] = null);

(statearr_38127_39717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (21))){
var inst_38005 = (state_38086[(2)]);
var state_38086__$1 = state_38086;
var statearr_38131_39718 = state_38086__$1;
(statearr_38131_39718[(2)] = inst_38005);

(statearr_38131_39718[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (31))){
var inst_38031 = (state_38086[(11)]);
var inst_38038 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_38031);
var state_38086__$1 = state_38086;
var statearr_38139_39723 = state_38086__$1;
(statearr_38139_39723[(2)] = inst_38038);

(statearr_38139_39723[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (32))){
var inst_38026 = (state_38086[(9)]);
var inst_38023 = (state_38086[(19)]);
var inst_38024 = (state_38086[(12)]);
var inst_38025 = (state_38086[(20)]);
var inst_38040 = (state_38086[(2)]);
var inst_38042 = (inst_38026 + (1));
var tmp38128 = inst_38023;
var tmp38129 = inst_38024;
var tmp38130 = inst_38025;
var inst_38023__$1 = tmp38128;
var inst_38024__$1 = tmp38129;
var inst_38025__$1 = tmp38130;
var inst_38026__$1 = inst_38042;
var state_38086__$1 = (function (){var statearr_38141 = state_38086;
(statearr_38141[(9)] = inst_38026__$1);

(statearr_38141[(21)] = inst_38040);

(statearr_38141[(19)] = inst_38023__$1);

(statearr_38141[(12)] = inst_38024__$1);

(statearr_38141[(20)] = inst_38025__$1);

return statearr_38141;
})();
var statearr_38142_39727 = state_38086__$1;
(statearr_38142_39727[(2)] = null);

(statearr_38142_39727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (40))){
var inst_38054 = (state_38086[(22)]);
var inst_38058 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_38054);
var state_38086__$1 = state_38086;
var statearr_38147_39728 = state_38086__$1;
(statearr_38147_39728[(2)] = inst_38058);

(statearr_38147_39728[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (33))){
var inst_38045 = (state_38086[(23)]);
var inst_38047 = cljs.core.chunked_seq_QMARK_(inst_38045);
var state_38086__$1 = state_38086;
if(inst_38047){
var statearr_38148_39736 = state_38086__$1;
(statearr_38148_39736[(1)] = (36));

} else {
var statearr_38152_39741 = state_38086__$1;
(statearr_38152_39741[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (13))){
var inst_37964 = (state_38086[(24)]);
var inst_37967 = cljs.core.async.close_BANG_(inst_37964);
var state_38086__$1 = state_38086;
var statearr_38154_39745 = state_38086__$1;
(statearr_38154_39745[(2)] = inst_37967);

(statearr_38154_39745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (22))){
var inst_37991 = (state_38086[(8)]);
var inst_37998 = cljs.core.async.close_BANG_(inst_37991);
var state_38086__$1 = state_38086;
var statearr_38158_39746 = state_38086__$1;
(statearr_38158_39746[(2)] = inst_37998);

(statearr_38158_39746[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (36))){
var inst_38045 = (state_38086[(23)]);
var inst_38049 = cljs.core.chunk_first(inst_38045);
var inst_38050 = cljs.core.chunk_rest(inst_38045);
var inst_38051 = cljs.core.count(inst_38049);
var inst_38023 = inst_38050;
var inst_38024 = inst_38049;
var inst_38025 = inst_38051;
var inst_38026 = (0);
var state_38086__$1 = (function (){var statearr_38160 = state_38086;
(statearr_38160[(9)] = inst_38026);

(statearr_38160[(19)] = inst_38023);

(statearr_38160[(12)] = inst_38024);

(statearr_38160[(20)] = inst_38025);

return statearr_38160;
})();
var statearr_38161_39762 = state_38086__$1;
(statearr_38161_39762[(2)] = null);

(statearr_38161_39762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (41))){
var inst_38045 = (state_38086[(23)]);
var inst_38061 = (state_38086[(2)]);
var inst_38062 = cljs.core.next(inst_38045);
var inst_38023 = inst_38062;
var inst_38024 = null;
var inst_38025 = (0);
var inst_38026 = (0);
var state_38086__$1 = (function (){var statearr_38162 = state_38086;
(statearr_38162[(9)] = inst_38026);

(statearr_38162[(25)] = inst_38061);

(statearr_38162[(19)] = inst_38023);

(statearr_38162[(12)] = inst_38024);

(statearr_38162[(20)] = inst_38025);

return statearr_38162;
})();
var statearr_38163_39772 = state_38086__$1;
(statearr_38163_39772[(2)] = null);

(statearr_38163_39772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (43))){
var state_38086__$1 = state_38086;
var statearr_38164_39773 = state_38086__$1;
(statearr_38164_39773[(2)] = null);

(statearr_38164_39773[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (29))){
var inst_38070 = (state_38086[(2)]);
var state_38086__$1 = state_38086;
var statearr_38165_39778 = state_38086__$1;
(statearr_38165_39778[(2)] = inst_38070);

(statearr_38165_39778[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (44))){
var inst_38079 = (state_38086[(2)]);
var state_38086__$1 = (function (){var statearr_38170 = state_38086;
(statearr_38170[(26)] = inst_38079);

return statearr_38170;
})();
var statearr_38171_39782 = state_38086__$1;
(statearr_38171_39782[(2)] = null);

(statearr_38171_39782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (6))){
var inst_38015 = (state_38086[(27)]);
var inst_38014 = cljs.core.deref(cs);
var inst_38015__$1 = cljs.core.keys(inst_38014);
var inst_38016 = cljs.core.count(inst_38015__$1);
var inst_38017 = cljs.core.reset_BANG_(dctr,inst_38016);
var inst_38022 = cljs.core.seq(inst_38015__$1);
var inst_38023 = inst_38022;
var inst_38024 = null;
var inst_38025 = (0);
var inst_38026 = (0);
var state_38086__$1 = (function (){var statearr_38172 = state_38086;
(statearr_38172[(28)] = inst_38017);

(statearr_38172[(9)] = inst_38026);

(statearr_38172[(27)] = inst_38015__$1);

(statearr_38172[(19)] = inst_38023);

(statearr_38172[(12)] = inst_38024);

(statearr_38172[(20)] = inst_38025);

return statearr_38172;
})();
var statearr_38174_39789 = state_38086__$1;
(statearr_38174_39789[(2)] = null);

(statearr_38174_39789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (28))){
var inst_38045 = (state_38086[(23)]);
var inst_38023 = (state_38086[(19)]);
var inst_38045__$1 = cljs.core.seq(inst_38023);
var state_38086__$1 = (function (){var statearr_38175 = state_38086;
(statearr_38175[(23)] = inst_38045__$1);

return statearr_38175;
})();
if(inst_38045__$1){
var statearr_38176_39798 = state_38086__$1;
(statearr_38176_39798[(1)] = (33));

} else {
var statearr_38177_39799 = state_38086__$1;
(statearr_38177_39799[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (25))){
var inst_38026 = (state_38086[(9)]);
var inst_38025 = (state_38086[(20)]);
var inst_38028 = (inst_38026 < inst_38025);
var inst_38029 = inst_38028;
var state_38086__$1 = state_38086;
if(cljs.core.truth_(inst_38029)){
var statearr_38178_39804 = state_38086__$1;
(statearr_38178_39804[(1)] = (27));

} else {
var statearr_38179_39809 = state_38086__$1;
(statearr_38179_39809[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (34))){
var state_38086__$1 = state_38086;
var statearr_38180_39810 = state_38086__$1;
(statearr_38180_39810[(2)] = null);

(statearr_38180_39810[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (17))){
var state_38086__$1 = state_38086;
var statearr_38181_39811 = state_38086__$1;
(statearr_38181_39811[(2)] = null);

(statearr_38181_39811[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (3))){
var inst_38084 = (state_38086[(2)]);
var state_38086__$1 = state_38086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38086__$1,inst_38084);
} else {
if((state_val_38087 === (12))){
var inst_38010 = (state_38086[(2)]);
var state_38086__$1 = state_38086;
var statearr_38182_39816 = state_38086__$1;
(statearr_38182_39816[(2)] = inst_38010);

(statearr_38182_39816[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (2))){
var state_38086__$1 = state_38086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38086__$1,(4),ch);
} else {
if((state_val_38087 === (23))){
var state_38086__$1 = state_38086;
var statearr_38183_39817 = state_38086__$1;
(statearr_38183_39817[(2)] = null);

(statearr_38183_39817[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (35))){
var inst_38068 = (state_38086[(2)]);
var state_38086__$1 = state_38086;
var statearr_38185_39818 = state_38086__$1;
(statearr_38185_39818[(2)] = inst_38068);

(statearr_38185_39818[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (19))){
var inst_37974 = (state_38086[(7)]);
var inst_37981 = cljs.core.chunk_first(inst_37974);
var inst_37982 = cljs.core.chunk_rest(inst_37974);
var inst_37983 = cljs.core.count(inst_37981);
var inst_37948 = inst_37982;
var inst_37949 = inst_37981;
var inst_37950 = inst_37983;
var inst_37951 = (0);
var state_38086__$1 = (function (){var statearr_38187 = state_38086;
(statearr_38187[(13)] = inst_37949);

(statearr_38187[(14)] = inst_37950);

(statearr_38187[(15)] = inst_37948);

(statearr_38187[(17)] = inst_37951);

return statearr_38187;
})();
var statearr_38188_39819 = state_38086__$1;
(statearr_38188_39819[(2)] = null);

(statearr_38188_39819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (11))){
var inst_37974 = (state_38086[(7)]);
var inst_37948 = (state_38086[(15)]);
var inst_37974__$1 = cljs.core.seq(inst_37948);
var state_38086__$1 = (function (){var statearr_38189 = state_38086;
(statearr_38189[(7)] = inst_37974__$1);

return statearr_38189;
})();
if(inst_37974__$1){
var statearr_38190_39821 = state_38086__$1;
(statearr_38190_39821[(1)] = (16));

} else {
var statearr_38191_39822 = state_38086__$1;
(statearr_38191_39822[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (9))){
var inst_38012 = (state_38086[(2)]);
var state_38086__$1 = state_38086;
var statearr_38192_39823 = state_38086__$1;
(statearr_38192_39823[(2)] = inst_38012);

(statearr_38192_39823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (5))){
var inst_37946 = cljs.core.deref(cs);
var inst_37947 = cljs.core.seq(inst_37946);
var inst_37948 = inst_37947;
var inst_37949 = null;
var inst_37950 = (0);
var inst_37951 = (0);
var state_38086__$1 = (function (){var statearr_38193 = state_38086;
(statearr_38193[(13)] = inst_37949);

(statearr_38193[(14)] = inst_37950);

(statearr_38193[(15)] = inst_37948);

(statearr_38193[(17)] = inst_37951);

return statearr_38193;
})();
var statearr_38194_39825 = state_38086__$1;
(statearr_38194_39825[(2)] = null);

(statearr_38194_39825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (14))){
var state_38086__$1 = state_38086;
var statearr_38195_39828 = state_38086__$1;
(statearr_38195_39828[(2)] = null);

(statearr_38195_39828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (45))){
var inst_38076 = (state_38086[(2)]);
var state_38086__$1 = state_38086;
var statearr_38196_39829 = state_38086__$1;
(statearr_38196_39829[(2)] = inst_38076);

(statearr_38196_39829[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (26))){
var inst_38015 = (state_38086[(27)]);
var inst_38072 = (state_38086[(2)]);
var inst_38073 = cljs.core.seq(inst_38015);
var state_38086__$1 = (function (){var statearr_38197 = state_38086;
(statearr_38197[(29)] = inst_38072);

return statearr_38197;
})();
if(inst_38073){
var statearr_38198_39831 = state_38086__$1;
(statearr_38198_39831[(1)] = (42));

} else {
var statearr_38199_39836 = state_38086__$1;
(statearr_38199_39836[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (16))){
var inst_37974 = (state_38086[(7)]);
var inst_37979 = cljs.core.chunked_seq_QMARK_(inst_37974);
var state_38086__$1 = state_38086;
if(inst_37979){
var statearr_38200_39837 = state_38086__$1;
(statearr_38200_39837[(1)] = (19));

} else {
var statearr_38201_39838 = state_38086__$1;
(statearr_38201_39838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (38))){
var inst_38065 = (state_38086[(2)]);
var state_38086__$1 = state_38086;
var statearr_38202_39839 = state_38086__$1;
(statearr_38202_39839[(2)] = inst_38065);

(statearr_38202_39839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (30))){
var state_38086__$1 = state_38086;
var statearr_38203_39841 = state_38086__$1;
(statearr_38203_39841[(2)] = null);

(statearr_38203_39841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (10))){
var inst_37949 = (state_38086[(13)]);
var inst_37951 = (state_38086[(17)]);
var inst_37963 = cljs.core._nth(inst_37949,inst_37951);
var inst_37964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37963,(0),null);
var inst_37965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37963,(1),null);
var state_38086__$1 = (function (){var statearr_38204 = state_38086;
(statearr_38204[(24)] = inst_37964);

return statearr_38204;
})();
if(cljs.core.truth_(inst_37965)){
var statearr_38205_39842 = state_38086__$1;
(statearr_38205_39842[(1)] = (13));

} else {
var statearr_38206_39844 = state_38086__$1;
(statearr_38206_39844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (18))){
var inst_38008 = (state_38086[(2)]);
var state_38086__$1 = state_38086;
var statearr_38207_39847 = state_38086__$1;
(statearr_38207_39847[(2)] = inst_38008);

(statearr_38207_39847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (42))){
var state_38086__$1 = state_38086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38086__$1,(45),dchan);
} else {
if((state_val_38087 === (37))){
var inst_37935 = (state_38086[(10)]);
var inst_38045 = (state_38086[(23)]);
var inst_38054 = (state_38086[(22)]);
var inst_38054__$1 = cljs.core.first(inst_38045);
var inst_38055 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38054__$1,inst_37935,done);
var state_38086__$1 = (function (){var statearr_38208 = state_38086;
(statearr_38208[(22)] = inst_38054__$1);

return statearr_38208;
})();
if(cljs.core.truth_(inst_38055)){
var statearr_38209_39852 = state_38086__$1;
(statearr_38209_39852[(1)] = (39));

} else {
var statearr_38210_39853 = state_38086__$1;
(statearr_38210_39853[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (8))){
var inst_37950 = (state_38086[(14)]);
var inst_37951 = (state_38086[(17)]);
var inst_37956 = (inst_37951 < inst_37950);
var inst_37957 = inst_37956;
var state_38086__$1 = state_38086;
if(cljs.core.truth_(inst_37957)){
var statearr_38211_39855 = state_38086__$1;
(statearr_38211_39855[(1)] = (10));

} else {
var statearr_38212_39856 = state_38086__$1;
(statearr_38212_39856[(1)] = (11));

}

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
var cljs$core$async$mult_$_state_machine__36710__auto__ = null;
var cljs$core$async$mult_$_state_machine__36710__auto____0 = (function (){
var statearr_38213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38213[(0)] = cljs$core$async$mult_$_state_machine__36710__auto__);

(statearr_38213[(1)] = (1));

return statearr_38213;
});
var cljs$core$async$mult_$_state_machine__36710__auto____1 = (function (state_38086){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_38086);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e38214){var ex__36713__auto__ = e38214;
var statearr_38215_39859 = state_38086;
(statearr_38215_39859[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_38086[(4)]))){
var statearr_38216_39860 = state_38086;
(statearr_38216_39860[(1)] = cljs.core.first((state_38086[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39861 = state_38086;
state_38086 = G__39861;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36710__auto__ = function(state_38086){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36710__auto____1.call(this,state_38086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36710__auto____0;
cljs$core$async$mult_$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36710__auto____1;
return cljs$core$async$mult_$_state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_38217 = f__37044__auto__();
(statearr_38217[(6)] = c__37043__auto___39677);

return statearr_38217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38221 = arguments.length;
switch (G__38221) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_39865 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null, m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_39865(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_39870 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null, m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_39870(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_39875 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null, m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_39875(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_39881 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null, m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_39881(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_39885 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null, m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_39885(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39897 = arguments.length;
var i__5770__auto___39901 = (0);
while(true){
if((i__5770__auto___39901 < len__5769__auto___39897)){
args__5775__auto__.push((arguments[i__5770__auto___39901]));

var G__39902 = (i__5770__auto___39901 + (1));
i__5770__auto___39901 = G__39902;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38232){
var map__38233 = p__38232;
var map__38233__$1 = cljs.core.__destructure_map(map__38233);
var opts = map__38233__$1;
var statearr_38234_39909 = state;
(statearr_38234_39909[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38235_39912 = state;
(statearr_38235_39912[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_38240_39916 = state;
(statearr_38240_39916[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38226){
var G__38227 = cljs.core.first(seq38226);
var seq38226__$1 = cljs.core.next(seq38226);
var G__38228 = cljs.core.first(seq38226__$1);
var seq38226__$2 = cljs.core.next(seq38226__$1);
var G__38229 = cljs.core.first(seq38226__$2);
var seq38226__$3 = cljs.core.next(seq38226__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38227,G__38228,G__38229,seq38226__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38249 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38250){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38250 = meta38250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38251,meta38250__$1){
var self__ = this;
var _38251__$1 = this;
return (new cljs.core.async.t_cljs$core$async38249(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38250__$1));
}));

(cljs.core.async.t_cljs$core$async38249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38251){
var self__ = this;
var _38251__$1 = this;
return self__.meta38250;
}));

(cljs.core.async.t_cljs$core$async38249.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38249.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38249.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38249.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38249.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38249.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38249.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38249.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38250","meta38250",-726773671,null)], null);
}));

(cljs.core.async.t_cljs$core$async38249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38249");

(cljs.core.async.t_cljs$core$async38249.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38249.
 */
cljs.core.async.__GT_t_cljs$core$async38249 = (function cljs$core$async$__GT_t_cljs$core$async38249(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38250){
return (new cljs.core.async.t_cljs$core$async38249(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38250));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async38249(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__37043__auto___39927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_38355){
var state_val_38356 = (state_38355[(1)]);
if((state_val_38356 === (7))){
var inst_38311 = (state_38355[(2)]);
var state_38355__$1 = state_38355;
if(cljs.core.truth_(inst_38311)){
var statearr_38357_39929 = state_38355__$1;
(statearr_38357_39929[(1)] = (8));

} else {
var statearr_38358_39930 = state_38355__$1;
(statearr_38358_39930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (20))){
var inst_38304 = (state_38355[(7)]);
var state_38355__$1 = state_38355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38355__$1,(23),out,inst_38304);
} else {
if((state_val_38356 === (1))){
var inst_38287 = calc_state();
var inst_38288 = cljs.core.__destructure_map(inst_38287);
var inst_38289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38288,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38288,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38288,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38292 = inst_38287;
var state_38355__$1 = (function (){var statearr_38359 = state_38355;
(statearr_38359[(8)] = inst_38291);

(statearr_38359[(9)] = inst_38292);

(statearr_38359[(10)] = inst_38289);

(statearr_38359[(11)] = inst_38290);

return statearr_38359;
})();
var statearr_38360_39931 = state_38355__$1;
(statearr_38360_39931[(2)] = null);

(statearr_38360_39931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (24))){
var inst_38295 = (state_38355[(12)]);
var inst_38292 = inst_38295;
var state_38355__$1 = (function (){var statearr_38365 = state_38355;
(statearr_38365[(9)] = inst_38292);

return statearr_38365;
})();
var statearr_38366_39932 = state_38355__$1;
(statearr_38366_39932[(2)] = null);

(statearr_38366_39932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (4))){
var inst_38304 = (state_38355[(7)]);
var inst_38306 = (state_38355[(13)]);
var inst_38303 = (state_38355[(2)]);
var inst_38304__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38303,(0),null);
var inst_38305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38303,(1),null);
var inst_38306__$1 = (inst_38304__$1 == null);
var state_38355__$1 = (function (){var statearr_38369 = state_38355;
(statearr_38369[(7)] = inst_38304__$1);

(statearr_38369[(14)] = inst_38305);

(statearr_38369[(13)] = inst_38306__$1);

return statearr_38369;
})();
if(cljs.core.truth_(inst_38306__$1)){
var statearr_38370_39939 = state_38355__$1;
(statearr_38370_39939[(1)] = (5));

} else {
var statearr_38371_39940 = state_38355__$1;
(statearr_38371_39940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (15))){
var inst_38296 = (state_38355[(15)]);
var inst_38325 = (state_38355[(16)]);
var inst_38325__$1 = cljs.core.empty_QMARK_(inst_38296);
var state_38355__$1 = (function (){var statearr_38373 = state_38355;
(statearr_38373[(16)] = inst_38325__$1);

return statearr_38373;
})();
if(inst_38325__$1){
var statearr_38374_39941 = state_38355__$1;
(statearr_38374_39941[(1)] = (17));

} else {
var statearr_38375_39942 = state_38355__$1;
(statearr_38375_39942[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (21))){
var inst_38295 = (state_38355[(12)]);
var inst_38292 = inst_38295;
var state_38355__$1 = (function (){var statearr_38377 = state_38355;
(statearr_38377[(9)] = inst_38292);

return statearr_38377;
})();
var statearr_38378_39944 = state_38355__$1;
(statearr_38378_39944[(2)] = null);

(statearr_38378_39944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (13))){
var inst_38318 = (state_38355[(2)]);
var inst_38319 = calc_state();
var inst_38292 = inst_38319;
var state_38355__$1 = (function (){var statearr_38379 = state_38355;
(statearr_38379[(17)] = inst_38318);

(statearr_38379[(9)] = inst_38292);

return statearr_38379;
})();
var statearr_38380_39945 = state_38355__$1;
(statearr_38380_39945[(2)] = null);

(statearr_38380_39945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (22))){
var inst_38349 = (state_38355[(2)]);
var state_38355__$1 = state_38355;
var statearr_38381_39950 = state_38355__$1;
(statearr_38381_39950[(2)] = inst_38349);

(statearr_38381_39950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (6))){
var inst_38305 = (state_38355[(14)]);
var inst_38309 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38305,change);
var state_38355__$1 = state_38355;
var statearr_38382_39951 = state_38355__$1;
(statearr_38382_39951[(2)] = inst_38309);

(statearr_38382_39951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (25))){
var state_38355__$1 = state_38355;
var statearr_38383_39956 = state_38355__$1;
(statearr_38383_39956[(2)] = null);

(statearr_38383_39956[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (17))){
var inst_38297 = (state_38355[(18)]);
var inst_38305 = (state_38355[(14)]);
var inst_38328 = (inst_38297.cljs$core$IFn$_invoke$arity$1 ? inst_38297.cljs$core$IFn$_invoke$arity$1(inst_38305) : inst_38297.call(null, inst_38305));
var inst_38332 = cljs.core.not(inst_38328);
var state_38355__$1 = state_38355;
var statearr_38384_39958 = state_38355__$1;
(statearr_38384_39958[(2)] = inst_38332);

(statearr_38384_39958[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (3))){
var inst_38353 = (state_38355[(2)]);
var state_38355__$1 = state_38355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38355__$1,inst_38353);
} else {
if((state_val_38356 === (12))){
var state_38355__$1 = state_38355;
var statearr_38385_39959 = state_38355__$1;
(statearr_38385_39959[(2)] = null);

(statearr_38385_39959[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (2))){
var inst_38295 = (state_38355[(12)]);
var inst_38292 = (state_38355[(9)]);
var inst_38295__$1 = cljs.core.__destructure_map(inst_38292);
var inst_38296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38295__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38295__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38295__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38355__$1 = (function (){var statearr_38387 = state_38355;
(statearr_38387[(18)] = inst_38297);

(statearr_38387[(12)] = inst_38295__$1);

(statearr_38387[(15)] = inst_38296);

return statearr_38387;
})();
return cljs.core.async.ioc_alts_BANG_(state_38355__$1,(4),inst_38298);
} else {
if((state_val_38356 === (23))){
var inst_38340 = (state_38355[(2)]);
var state_38355__$1 = state_38355;
if(cljs.core.truth_(inst_38340)){
var statearr_38389_39960 = state_38355__$1;
(statearr_38389_39960[(1)] = (24));

} else {
var statearr_38390_39961 = state_38355__$1;
(statearr_38390_39961[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (19))){
var inst_38335 = (state_38355[(2)]);
var state_38355__$1 = state_38355;
var statearr_38391_39968 = state_38355__$1;
(statearr_38391_39968[(2)] = inst_38335);

(statearr_38391_39968[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (11))){
var inst_38305 = (state_38355[(14)]);
var inst_38315 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38305);
var state_38355__$1 = state_38355;
var statearr_38392_39974 = state_38355__$1;
(statearr_38392_39974[(2)] = inst_38315);

(statearr_38392_39974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (9))){
var inst_38305 = (state_38355[(14)]);
var inst_38296 = (state_38355[(15)]);
var inst_38322 = (state_38355[(19)]);
var inst_38322__$1 = (inst_38296.cljs$core$IFn$_invoke$arity$1 ? inst_38296.cljs$core$IFn$_invoke$arity$1(inst_38305) : inst_38296.call(null, inst_38305));
var state_38355__$1 = (function (){var statearr_38394 = state_38355;
(statearr_38394[(19)] = inst_38322__$1);

return statearr_38394;
})();
if(cljs.core.truth_(inst_38322__$1)){
var statearr_38396_39980 = state_38355__$1;
(statearr_38396_39980[(1)] = (14));

} else {
var statearr_38397_39981 = state_38355__$1;
(statearr_38397_39981[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (5))){
var inst_38306 = (state_38355[(13)]);
var state_38355__$1 = state_38355;
var statearr_38401_39987 = state_38355__$1;
(statearr_38401_39987[(2)] = inst_38306);

(statearr_38401_39987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (14))){
var inst_38322 = (state_38355[(19)]);
var state_38355__$1 = state_38355;
var statearr_38402_39988 = state_38355__$1;
(statearr_38402_39988[(2)] = inst_38322);

(statearr_38402_39988[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (26))){
var inst_38345 = (state_38355[(2)]);
var state_38355__$1 = state_38355;
var statearr_38403_39993 = state_38355__$1;
(statearr_38403_39993[(2)] = inst_38345);

(statearr_38403_39993[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (16))){
var inst_38337 = (state_38355[(2)]);
var state_38355__$1 = state_38355;
if(cljs.core.truth_(inst_38337)){
var statearr_38404_39994 = state_38355__$1;
(statearr_38404_39994[(1)] = (20));

} else {
var statearr_38405_39995 = state_38355__$1;
(statearr_38405_39995[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (10))){
var inst_38351 = (state_38355[(2)]);
var state_38355__$1 = state_38355;
var statearr_38406_40000 = state_38355__$1;
(statearr_38406_40000[(2)] = inst_38351);

(statearr_38406_40000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (18))){
var inst_38325 = (state_38355[(16)]);
var state_38355__$1 = state_38355;
var statearr_38407_40001 = state_38355__$1;
(statearr_38407_40001[(2)] = inst_38325);

(statearr_38407_40001[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38356 === (8))){
var inst_38304 = (state_38355[(7)]);
var inst_38313 = (inst_38304 == null);
var state_38355__$1 = state_38355;
if(cljs.core.truth_(inst_38313)){
var statearr_38408_40002 = state_38355__$1;
(statearr_38408_40002[(1)] = (11));

} else {
var statearr_38409_40003 = state_38355__$1;
(statearr_38409_40003[(1)] = (12));

}

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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__36710__auto__ = null;
var cljs$core$async$mix_$_state_machine__36710__auto____0 = (function (){
var statearr_38410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38410[(0)] = cljs$core$async$mix_$_state_machine__36710__auto__);

(statearr_38410[(1)] = (1));

return statearr_38410;
});
var cljs$core$async$mix_$_state_machine__36710__auto____1 = (function (state_38355){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_38355);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e38411){var ex__36713__auto__ = e38411;
var statearr_38412_40004 = state_38355;
(statearr_38412_40004[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_38355[(4)]))){
var statearr_38413_40010 = state_38355;
(statearr_38413_40010[(1)] = cljs.core.first((state_38355[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40011 = state_38355;
state_38355 = G__40011;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36710__auto__ = function(state_38355){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36710__auto____1.call(this,state_38355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36710__auto____0;
cljs$core$async$mix_$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36710__auto____1;
return cljs$core$async$mix_$_state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_38414 = f__37044__auto__();
(statearr_38414[(6)] = c__37043__auto___39927);

return statearr_38414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_40013 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_40013(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_40014 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null, p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_40014(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_40015 = (function() {
var G__40016 = null;
var G__40016__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null, p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__40016__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null, p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__40016 = function(p,v){
switch(arguments.length){
case 1:
return G__40016__1.call(this,p);
case 2:
return G__40016__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40016.cljs$core$IFn$_invoke$arity$1 = G__40016__1;
G__40016.cljs$core$IFn$_invoke$arity$2 = G__40016__2;
return G__40016;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38428 = arguments.length;
switch (G__38428) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40015(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40015(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38432 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38433){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38433 = meta38433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38434,meta38433__$1){
var self__ = this;
var _38434__$1 = this;
return (new cljs.core.async.t_cljs$core$async38432(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38433__$1));
}));

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38434){
var self__ = this;
var _38434__$1 = this;
return self__.meta38433;
}));

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38433","meta38433",1756670527,null)], null);
}));

(cljs.core.async.t_cljs$core$async38432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38432");

(cljs.core.async.t_cljs$core$async38432.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38432.
 */
cljs.core.async.__GT_t_cljs$core$async38432 = (function cljs$core$async$__GT_t_cljs$core$async38432(ch,topic_fn,buf_fn,mults,ensure_mult,meta38433){
return (new cljs.core.async.t_cljs$core$async38432(ch,topic_fn,buf_fn,mults,ensure_mult,meta38433));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__38431 = arguments.length;
switch (G__38431) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__38429_SHARP_){
if(cljs.core.truth_((p1__38429_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38429_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38429_SHARP_.call(null, topic)))){
return p1__38429_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38429_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async38432(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__37043__auto___40078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_38516){
var state_val_38517 = (state_38516[(1)]);
if((state_val_38517 === (7))){
var inst_38512 = (state_38516[(2)]);
var state_38516__$1 = state_38516;
var statearr_38518_40079 = state_38516__$1;
(statearr_38518_40079[(2)] = inst_38512);

(statearr_38518_40079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (20))){
var state_38516__$1 = state_38516;
var statearr_38522_40084 = state_38516__$1;
(statearr_38522_40084[(2)] = null);

(statearr_38522_40084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (1))){
var state_38516__$1 = state_38516;
var statearr_38523_40085 = state_38516__$1;
(statearr_38523_40085[(2)] = null);

(statearr_38523_40085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (24))){
var inst_38493 = (state_38516[(7)]);
var inst_38503 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38493);
var state_38516__$1 = state_38516;
var statearr_38524_40086 = state_38516__$1;
(statearr_38524_40086[(2)] = inst_38503);

(statearr_38524_40086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (4))){
var inst_38445 = (state_38516[(8)]);
var inst_38445__$1 = (state_38516[(2)]);
var inst_38446 = (inst_38445__$1 == null);
var state_38516__$1 = (function (){var statearr_38525 = state_38516;
(statearr_38525[(8)] = inst_38445__$1);

return statearr_38525;
})();
if(cljs.core.truth_(inst_38446)){
var statearr_38526_40089 = state_38516__$1;
(statearr_38526_40089[(1)] = (5));

} else {
var statearr_38527_40094 = state_38516__$1;
(statearr_38527_40094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (15))){
var inst_38487 = (state_38516[(2)]);
var state_38516__$1 = state_38516;
var statearr_38528_40095 = state_38516__$1;
(statearr_38528_40095[(2)] = inst_38487);

(statearr_38528_40095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (21))){
var inst_38508 = (state_38516[(2)]);
var state_38516__$1 = (function (){var statearr_38529 = state_38516;
(statearr_38529[(9)] = inst_38508);

return statearr_38529;
})();
var statearr_38530_40101 = state_38516__$1;
(statearr_38530_40101[(2)] = null);

(statearr_38530_40101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (13))){
var inst_38469 = (state_38516[(10)]);
var inst_38471 = cljs.core.chunked_seq_QMARK_(inst_38469);
var state_38516__$1 = state_38516;
if(inst_38471){
var statearr_38531_40107 = state_38516__$1;
(statearr_38531_40107[(1)] = (16));

} else {
var statearr_38532_40108 = state_38516__$1;
(statearr_38532_40108[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (22))){
var inst_38500 = (state_38516[(2)]);
var state_38516__$1 = state_38516;
if(cljs.core.truth_(inst_38500)){
var statearr_38533_40109 = state_38516__$1;
(statearr_38533_40109[(1)] = (23));

} else {
var statearr_38534_40110 = state_38516__$1;
(statearr_38534_40110[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (6))){
var inst_38445 = (state_38516[(8)]);
var inst_38493 = (state_38516[(7)]);
var inst_38495 = (state_38516[(11)]);
var inst_38493__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38445) : topic_fn.call(null, inst_38445));
var inst_38494 = cljs.core.deref(mults);
var inst_38495__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38494,inst_38493__$1);
var state_38516__$1 = (function (){var statearr_38535 = state_38516;
(statearr_38535[(7)] = inst_38493__$1);

(statearr_38535[(11)] = inst_38495__$1);

return statearr_38535;
})();
if(cljs.core.truth_(inst_38495__$1)){
var statearr_38536_40115 = state_38516__$1;
(statearr_38536_40115[(1)] = (19));

} else {
var statearr_38537_40116 = state_38516__$1;
(statearr_38537_40116[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (25))){
var inst_38505 = (state_38516[(2)]);
var state_38516__$1 = state_38516;
var statearr_38538_40117 = state_38516__$1;
(statearr_38538_40117[(2)] = inst_38505);

(statearr_38538_40117[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (17))){
var inst_38469 = (state_38516[(10)]);
var inst_38478 = cljs.core.first(inst_38469);
var inst_38479 = cljs.core.async.muxch_STAR_(inst_38478);
var inst_38480 = cljs.core.async.close_BANG_(inst_38479);
var inst_38481 = cljs.core.next(inst_38469);
var inst_38455 = inst_38481;
var inst_38456 = null;
var inst_38457 = (0);
var inst_38458 = (0);
var state_38516__$1 = (function (){var statearr_38539 = state_38516;
(statearr_38539[(12)] = inst_38458);

(statearr_38539[(13)] = inst_38456);

(statearr_38539[(14)] = inst_38480);

(statearr_38539[(15)] = inst_38455);

(statearr_38539[(16)] = inst_38457);

return statearr_38539;
})();
var statearr_38540_40121 = state_38516__$1;
(statearr_38540_40121[(2)] = null);

(statearr_38540_40121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (3))){
var inst_38514 = (state_38516[(2)]);
var state_38516__$1 = state_38516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38516__$1,inst_38514);
} else {
if((state_val_38517 === (12))){
var inst_38489 = (state_38516[(2)]);
var state_38516__$1 = state_38516;
var statearr_38541_40122 = state_38516__$1;
(statearr_38541_40122[(2)] = inst_38489);

(statearr_38541_40122[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (2))){
var state_38516__$1 = state_38516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38516__$1,(4),ch);
} else {
if((state_val_38517 === (23))){
var state_38516__$1 = state_38516;
var statearr_38542_40123 = state_38516__$1;
(statearr_38542_40123[(2)] = null);

(statearr_38542_40123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (19))){
var inst_38445 = (state_38516[(8)]);
var inst_38495 = (state_38516[(11)]);
var inst_38498 = cljs.core.async.muxch_STAR_(inst_38495);
var state_38516__$1 = state_38516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38516__$1,(22),inst_38498,inst_38445);
} else {
if((state_val_38517 === (11))){
var inst_38469 = (state_38516[(10)]);
var inst_38455 = (state_38516[(15)]);
var inst_38469__$1 = cljs.core.seq(inst_38455);
var state_38516__$1 = (function (){var statearr_38543 = state_38516;
(statearr_38543[(10)] = inst_38469__$1);

return statearr_38543;
})();
if(inst_38469__$1){
var statearr_38544_40128 = state_38516__$1;
(statearr_38544_40128[(1)] = (13));

} else {
var statearr_38545_40129 = state_38516__$1;
(statearr_38545_40129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (9))){
var inst_38491 = (state_38516[(2)]);
var state_38516__$1 = state_38516;
var statearr_38546_40130 = state_38516__$1;
(statearr_38546_40130[(2)] = inst_38491);

(statearr_38546_40130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (5))){
var inst_38452 = cljs.core.deref(mults);
var inst_38453 = cljs.core.vals(inst_38452);
var inst_38454 = cljs.core.seq(inst_38453);
var inst_38455 = inst_38454;
var inst_38456 = null;
var inst_38457 = (0);
var inst_38458 = (0);
var state_38516__$1 = (function (){var statearr_38547 = state_38516;
(statearr_38547[(12)] = inst_38458);

(statearr_38547[(13)] = inst_38456);

(statearr_38547[(15)] = inst_38455);

(statearr_38547[(16)] = inst_38457);

return statearr_38547;
})();
var statearr_38548_40136 = state_38516__$1;
(statearr_38548_40136[(2)] = null);

(statearr_38548_40136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (14))){
var state_38516__$1 = state_38516;
var statearr_38552_40137 = state_38516__$1;
(statearr_38552_40137[(2)] = null);

(statearr_38552_40137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (16))){
var inst_38469 = (state_38516[(10)]);
var inst_38473 = cljs.core.chunk_first(inst_38469);
var inst_38474 = cljs.core.chunk_rest(inst_38469);
var inst_38475 = cljs.core.count(inst_38473);
var inst_38455 = inst_38474;
var inst_38456 = inst_38473;
var inst_38457 = inst_38475;
var inst_38458 = (0);
var state_38516__$1 = (function (){var statearr_38553 = state_38516;
(statearr_38553[(12)] = inst_38458);

(statearr_38553[(13)] = inst_38456);

(statearr_38553[(15)] = inst_38455);

(statearr_38553[(16)] = inst_38457);

return statearr_38553;
})();
var statearr_38554_40140 = state_38516__$1;
(statearr_38554_40140[(2)] = null);

(statearr_38554_40140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (10))){
var inst_38458 = (state_38516[(12)]);
var inst_38456 = (state_38516[(13)]);
var inst_38455 = (state_38516[(15)]);
var inst_38457 = (state_38516[(16)]);
var inst_38463 = cljs.core._nth(inst_38456,inst_38458);
var inst_38464 = cljs.core.async.muxch_STAR_(inst_38463);
var inst_38465 = cljs.core.async.close_BANG_(inst_38464);
var inst_38466 = (inst_38458 + (1));
var tmp38549 = inst_38456;
var tmp38550 = inst_38455;
var tmp38551 = inst_38457;
var inst_38455__$1 = tmp38550;
var inst_38456__$1 = tmp38549;
var inst_38457__$1 = tmp38551;
var inst_38458__$1 = inst_38466;
var state_38516__$1 = (function (){var statearr_38555 = state_38516;
(statearr_38555[(17)] = inst_38465);

(statearr_38555[(12)] = inst_38458__$1);

(statearr_38555[(13)] = inst_38456__$1);

(statearr_38555[(15)] = inst_38455__$1);

(statearr_38555[(16)] = inst_38457__$1);

return statearr_38555;
})();
var statearr_38556_40142 = state_38516__$1;
(statearr_38556_40142[(2)] = null);

(statearr_38556_40142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (18))){
var inst_38484 = (state_38516[(2)]);
var state_38516__$1 = state_38516;
var statearr_38557_40143 = state_38516__$1;
(statearr_38557_40143[(2)] = inst_38484);

(statearr_38557_40143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38517 === (8))){
var inst_38458 = (state_38516[(12)]);
var inst_38457 = (state_38516[(16)]);
var inst_38460 = (inst_38458 < inst_38457);
var inst_38461 = inst_38460;
var state_38516__$1 = state_38516;
if(cljs.core.truth_(inst_38461)){
var statearr_38558_40144 = state_38516__$1;
(statearr_38558_40144[(1)] = (10));

} else {
var statearr_38559_40145 = state_38516__$1;
(statearr_38559_40145[(1)] = (11));

}

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
}
});
return (function() {
var cljs$core$async$state_machine__36710__auto__ = null;
var cljs$core$async$state_machine__36710__auto____0 = (function (){
var statearr_38560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38560[(0)] = cljs$core$async$state_machine__36710__auto__);

(statearr_38560[(1)] = (1));

return statearr_38560;
});
var cljs$core$async$state_machine__36710__auto____1 = (function (state_38516){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_38516);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e38562){var ex__36713__auto__ = e38562;
var statearr_38563_40149 = state_38516;
(statearr_38563_40149[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_38516[(4)]))){
var statearr_38564_40150 = state_38516;
(statearr_38564_40150[(1)] = cljs.core.first((state_38516[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40151 = state_38516;
state_38516 = G__40151;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$state_machine__36710__auto__ = function(state_38516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36710__auto____1.call(this,state_38516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36710__auto____0;
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36710__auto____1;
return cljs$core$async$state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_38565 = f__37044__auto__();
(statearr_38565[(6)] = c__37043__auto___40078);

return statearr_38565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38567 = arguments.length;
switch (G__38567) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38572 = arguments.length;
switch (G__38572) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__38578 = arguments.length;
switch (G__38578) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__37043__auto___40164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_38661){
var state_val_38662 = (state_38661[(1)]);
if((state_val_38662 === (7))){
var state_38661__$1 = state_38661;
var statearr_38663_40166 = state_38661__$1;
(statearr_38663_40166[(2)] = null);

(statearr_38663_40166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (1))){
var state_38661__$1 = state_38661;
var statearr_38666_40167 = state_38661__$1;
(statearr_38666_40167[(2)] = null);

(statearr_38666_40167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (4))){
var inst_38582 = (state_38661[(7)]);
var inst_38581 = (state_38661[(8)]);
var inst_38584 = (inst_38582 < inst_38581);
var state_38661__$1 = state_38661;
if(cljs.core.truth_(inst_38584)){
var statearr_38667_40168 = state_38661__$1;
(statearr_38667_40168[(1)] = (6));

} else {
var statearr_38668_40169 = state_38661__$1;
(statearr_38668_40169[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (15))){
var inst_38641 = (state_38661[(9)]);
var inst_38646 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38641);
var state_38661__$1 = state_38661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38661__$1,(17),out,inst_38646);
} else {
if((state_val_38662 === (13))){
var inst_38641 = (state_38661[(9)]);
var inst_38641__$1 = (state_38661[(2)]);
var inst_38642 = cljs.core.some(cljs.core.nil_QMARK_,inst_38641__$1);
var state_38661__$1 = (function (){var statearr_38670 = state_38661;
(statearr_38670[(9)] = inst_38641__$1);

return statearr_38670;
})();
if(cljs.core.truth_(inst_38642)){
var statearr_38671_40172 = state_38661__$1;
(statearr_38671_40172[(1)] = (14));

} else {
var statearr_38672_40174 = state_38661__$1;
(statearr_38672_40174[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (6))){
var state_38661__$1 = state_38661;
var statearr_38673_40175 = state_38661__$1;
(statearr_38673_40175[(2)] = null);

(statearr_38673_40175[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (17))){
var inst_38648 = (state_38661[(2)]);
var state_38661__$1 = (function (){var statearr_38678 = state_38661;
(statearr_38678[(10)] = inst_38648);

return statearr_38678;
})();
var statearr_38679_40177 = state_38661__$1;
(statearr_38679_40177[(2)] = null);

(statearr_38679_40177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (3))){
var inst_38653 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38661__$1,inst_38653);
} else {
if((state_val_38662 === (12))){
var _ = (function (){var statearr_38680 = state_38661;
(statearr_38680[(4)] = cljs.core.rest((state_38661[(4)])));

return statearr_38680;
})();
var state_38661__$1 = state_38661;
var ex38677 = (state_38661__$1[(2)]);
var statearr_38681_40182 = state_38661__$1;
(statearr_38681_40182[(5)] = ex38677);


if((ex38677 instanceof Object)){
var statearr_38682_40183 = state_38661__$1;
(statearr_38682_40183[(1)] = (11));

(statearr_38682_40183[(5)] = null);

} else {
throw ex38677;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (2))){
var inst_38580 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38581 = cnt;
var inst_38582 = (0);
var state_38661__$1 = (function (){var statearr_38683 = state_38661;
(statearr_38683[(7)] = inst_38582);

(statearr_38683[(8)] = inst_38581);

(statearr_38683[(11)] = inst_38580);

return statearr_38683;
})();
var statearr_38684_40184 = state_38661__$1;
(statearr_38684_40184[(2)] = null);

(statearr_38684_40184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (11))){
var inst_38606 = (state_38661[(2)]);
var inst_38607 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38661__$1 = (function (){var statearr_38685 = state_38661;
(statearr_38685[(12)] = inst_38606);

return statearr_38685;
})();
var statearr_38686_40185 = state_38661__$1;
(statearr_38686_40185[(2)] = inst_38607);

(statearr_38686_40185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (9))){
var inst_38582 = (state_38661[(7)]);
var _ = (function (){var statearr_38687 = state_38661;
(statearr_38687[(4)] = cljs.core.cons((12),(state_38661[(4)])));

return statearr_38687;
})();
var inst_38613 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38582) : chs__$1.call(null, inst_38582));
var inst_38614 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38582) : done.call(null, inst_38582));
var inst_38615 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38613,inst_38614);
var ___$1 = (function (){var statearr_38688 = state_38661;
(statearr_38688[(4)] = cljs.core.rest((state_38661[(4)])));

return statearr_38688;
})();
var state_38661__$1 = state_38661;
var statearr_38689_40190 = state_38661__$1;
(statearr_38689_40190[(2)] = inst_38615);

(statearr_38689_40190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (5))){
var inst_38633 = (state_38661[(2)]);
var state_38661__$1 = (function (){var statearr_38690 = state_38661;
(statearr_38690[(13)] = inst_38633);

return statearr_38690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38661__$1,(13),dchan);
} else {
if((state_val_38662 === (14))){
var inst_38644 = cljs.core.async.close_BANG_(out);
var state_38661__$1 = state_38661;
var statearr_38691_40191 = state_38661__$1;
(statearr_38691_40191[(2)] = inst_38644);

(statearr_38691_40191[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (16))){
var inst_38651 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
var statearr_38692_40192 = state_38661__$1;
(statearr_38692_40192[(2)] = inst_38651);

(statearr_38692_40192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (10))){
var inst_38582 = (state_38661[(7)]);
var inst_38618 = (state_38661[(2)]);
var inst_38627 = (inst_38582 + (1));
var inst_38582__$1 = inst_38627;
var state_38661__$1 = (function (){var statearr_38693 = state_38661;
(statearr_38693[(14)] = inst_38618);

(statearr_38693[(7)] = inst_38582__$1);

return statearr_38693;
})();
var statearr_38694_40193 = state_38661__$1;
(statearr_38694_40193[(2)] = null);

(statearr_38694_40193[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (8))){
var inst_38631 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
var statearr_38695_40194 = state_38661__$1;
(statearr_38695_40194[(2)] = inst_38631);

(statearr_38695_40194[(1)] = (5));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36710__auto__ = null;
var cljs$core$async$state_machine__36710__auto____0 = (function (){
var statearr_38696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38696[(0)] = cljs$core$async$state_machine__36710__auto__);

(statearr_38696[(1)] = (1));

return statearr_38696;
});
var cljs$core$async$state_machine__36710__auto____1 = (function (state_38661){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_38661);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e38697){var ex__36713__auto__ = e38697;
var statearr_38698_40195 = state_38661;
(statearr_38698_40195[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_38661[(4)]))){
var statearr_38699_40196 = state_38661;
(statearr_38699_40196[(1)] = cljs.core.first((state_38661[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40197 = state_38661;
state_38661 = G__40197;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$state_machine__36710__auto__ = function(state_38661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36710__auto____1.call(this,state_38661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36710__auto____0;
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36710__auto____1;
return cljs$core$async$state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_38700 = f__37044__auto__();
(statearr_38700[(6)] = c__37043__auto___40164);

return statearr_38700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38703 = arguments.length;
switch (G__38703) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37043__auto___40199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_38746){
var state_val_38747 = (state_38746[(1)]);
if((state_val_38747 === (7))){
var inst_38722 = (state_38746[(7)]);
var inst_38723 = (state_38746[(8)]);
var inst_38722__$1 = (state_38746[(2)]);
var inst_38723__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38722__$1,(0),null);
var inst_38724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38722__$1,(1),null);
var inst_38725 = (inst_38723__$1 == null);
var state_38746__$1 = (function (){var statearr_38748 = state_38746;
(statearr_38748[(7)] = inst_38722__$1);

(statearr_38748[(9)] = inst_38724);

(statearr_38748[(8)] = inst_38723__$1);

return statearr_38748;
})();
if(cljs.core.truth_(inst_38725)){
var statearr_38749_40200 = state_38746__$1;
(statearr_38749_40200[(1)] = (8));

} else {
var statearr_38750_40201 = state_38746__$1;
(statearr_38750_40201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (1))){
var inst_38704 = cljs.core.vec(chs);
var inst_38705 = inst_38704;
var state_38746__$1 = (function (){var statearr_38751 = state_38746;
(statearr_38751[(10)] = inst_38705);

return statearr_38751;
})();
var statearr_38752_40202 = state_38746__$1;
(statearr_38752_40202[(2)] = null);

(statearr_38752_40202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (4))){
var inst_38705 = (state_38746[(10)]);
var state_38746__$1 = state_38746;
return cljs.core.async.ioc_alts_BANG_(state_38746__$1,(7),inst_38705);
} else {
if((state_val_38747 === (6))){
var inst_38742 = (state_38746[(2)]);
var state_38746__$1 = state_38746;
var statearr_38753_40203 = state_38746__$1;
(statearr_38753_40203[(2)] = inst_38742);

(statearr_38753_40203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (3))){
var inst_38744 = (state_38746[(2)]);
var state_38746__$1 = state_38746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38746__$1,inst_38744);
} else {
if((state_val_38747 === (2))){
var inst_38705 = (state_38746[(10)]);
var inst_38715 = cljs.core.count(inst_38705);
var inst_38716 = (inst_38715 > (0));
var state_38746__$1 = state_38746;
if(cljs.core.truth_(inst_38716)){
var statearr_38755_40204 = state_38746__$1;
(statearr_38755_40204[(1)] = (4));

} else {
var statearr_38756_40205 = state_38746__$1;
(statearr_38756_40205[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (11))){
var inst_38705 = (state_38746[(10)]);
var inst_38735 = (state_38746[(2)]);
var tmp38754 = inst_38705;
var inst_38705__$1 = tmp38754;
var state_38746__$1 = (function (){var statearr_38757 = state_38746;
(statearr_38757[(11)] = inst_38735);

(statearr_38757[(10)] = inst_38705__$1);

return statearr_38757;
})();
var statearr_38758_40206 = state_38746__$1;
(statearr_38758_40206[(2)] = null);

(statearr_38758_40206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (9))){
var inst_38723 = (state_38746[(8)]);
var state_38746__$1 = state_38746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38746__$1,(11),out,inst_38723);
} else {
if((state_val_38747 === (5))){
var inst_38740 = cljs.core.async.close_BANG_(out);
var state_38746__$1 = state_38746;
var statearr_38761_40207 = state_38746__$1;
(statearr_38761_40207[(2)] = inst_38740);

(statearr_38761_40207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (10))){
var inst_38738 = (state_38746[(2)]);
var state_38746__$1 = state_38746;
var statearr_38763_40208 = state_38746__$1;
(statearr_38763_40208[(2)] = inst_38738);

(statearr_38763_40208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38747 === (8))){
var inst_38722 = (state_38746[(7)]);
var inst_38724 = (state_38746[(9)]);
var inst_38705 = (state_38746[(10)]);
var inst_38723 = (state_38746[(8)]);
var inst_38730 = (function (){var cs = inst_38705;
var vec__38718 = inst_38722;
var v = inst_38723;
var c = inst_38724;
return (function (p1__38701_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38701_SHARP_);
});
})();
var inst_38731 = cljs.core.filterv(inst_38730,inst_38705);
var inst_38705__$1 = inst_38731;
var state_38746__$1 = (function (){var statearr_38765 = state_38746;
(statearr_38765[(10)] = inst_38705__$1);

return statearr_38765;
})();
var statearr_38767_40209 = state_38746__$1;
(statearr_38767_40209[(2)] = null);

(statearr_38767_40209[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36710__auto__ = null;
var cljs$core$async$state_machine__36710__auto____0 = (function (){
var statearr_38769 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38769[(0)] = cljs$core$async$state_machine__36710__auto__);

(statearr_38769[(1)] = (1));

return statearr_38769;
});
var cljs$core$async$state_machine__36710__auto____1 = (function (state_38746){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_38746);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e38770){var ex__36713__auto__ = e38770;
var statearr_38771_40210 = state_38746;
(statearr_38771_40210[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_38746[(4)]))){
var statearr_38772_40211 = state_38746;
(statearr_38772_40211[(1)] = cljs.core.first((state_38746[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40212 = state_38746;
state_38746 = G__40212;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$state_machine__36710__auto__ = function(state_38746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36710__auto____1.call(this,state_38746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36710__auto____0;
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36710__auto____1;
return cljs$core$async$state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_38775 = f__37044__auto__();
(statearr_38775[(6)] = c__37043__auto___40199);

return statearr_38775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38777 = arguments.length;
switch (G__38777) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37043__auto___40219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_38801){
var state_val_38802 = (state_38801[(1)]);
if((state_val_38802 === (7))){
var inst_38783 = (state_38801[(7)]);
var inst_38783__$1 = (state_38801[(2)]);
var inst_38784 = (inst_38783__$1 == null);
var inst_38785 = cljs.core.not(inst_38784);
var state_38801__$1 = (function (){var statearr_38803 = state_38801;
(statearr_38803[(7)] = inst_38783__$1);

return statearr_38803;
})();
if(inst_38785){
var statearr_38804_40220 = state_38801__$1;
(statearr_38804_40220[(1)] = (8));

} else {
var statearr_38805_40221 = state_38801__$1;
(statearr_38805_40221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (1))){
var inst_38778 = (0);
var state_38801__$1 = (function (){var statearr_38809 = state_38801;
(statearr_38809[(8)] = inst_38778);

return statearr_38809;
})();
var statearr_38810_40222 = state_38801__$1;
(statearr_38810_40222[(2)] = null);

(statearr_38810_40222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (4))){
var state_38801__$1 = state_38801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38801__$1,(7),ch);
} else {
if((state_val_38802 === (6))){
var inst_38796 = (state_38801[(2)]);
var state_38801__$1 = state_38801;
var statearr_38811_40223 = state_38801__$1;
(statearr_38811_40223[(2)] = inst_38796);

(statearr_38811_40223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (3))){
var inst_38798 = (state_38801[(2)]);
var inst_38799 = cljs.core.async.close_BANG_(out);
var state_38801__$1 = (function (){var statearr_38812 = state_38801;
(statearr_38812[(9)] = inst_38798);

return statearr_38812;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38801__$1,inst_38799);
} else {
if((state_val_38802 === (2))){
var inst_38778 = (state_38801[(8)]);
var inst_38780 = (inst_38778 < n);
var state_38801__$1 = state_38801;
if(cljs.core.truth_(inst_38780)){
var statearr_38813_40227 = state_38801__$1;
(statearr_38813_40227[(1)] = (4));

} else {
var statearr_38814_40228 = state_38801__$1;
(statearr_38814_40228[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (11))){
var inst_38778 = (state_38801[(8)]);
var inst_38788 = (state_38801[(2)]);
var inst_38789 = (inst_38778 + (1));
var inst_38778__$1 = inst_38789;
var state_38801__$1 = (function (){var statearr_38815 = state_38801;
(statearr_38815[(8)] = inst_38778__$1);

(statearr_38815[(10)] = inst_38788);

return statearr_38815;
})();
var statearr_38816_40230 = state_38801__$1;
(statearr_38816_40230[(2)] = null);

(statearr_38816_40230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (9))){
var state_38801__$1 = state_38801;
var statearr_38820_40231 = state_38801__$1;
(statearr_38820_40231[(2)] = null);

(statearr_38820_40231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (5))){
var state_38801__$1 = state_38801;
var statearr_38828_40236 = state_38801__$1;
(statearr_38828_40236[(2)] = null);

(statearr_38828_40236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (10))){
var inst_38793 = (state_38801[(2)]);
var state_38801__$1 = state_38801;
var statearr_38829_40242 = state_38801__$1;
(statearr_38829_40242[(2)] = inst_38793);

(statearr_38829_40242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38802 === (8))){
var inst_38783 = (state_38801[(7)]);
var state_38801__$1 = state_38801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38801__$1,(11),out,inst_38783);
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
});
return (function() {
var cljs$core$async$state_machine__36710__auto__ = null;
var cljs$core$async$state_machine__36710__auto____0 = (function (){
var statearr_38833 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38833[(0)] = cljs$core$async$state_machine__36710__auto__);

(statearr_38833[(1)] = (1));

return statearr_38833;
});
var cljs$core$async$state_machine__36710__auto____1 = (function (state_38801){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_38801);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e38834){var ex__36713__auto__ = e38834;
var statearr_38835_40249 = state_38801;
(statearr_38835_40249[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_38801[(4)]))){
var statearr_38840_40253 = state_38801;
(statearr_38840_40253[(1)] = cljs.core.first((state_38801[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40257 = state_38801;
state_38801 = G__40257;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$state_machine__36710__auto__ = function(state_38801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36710__auto____1.call(this,state_38801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36710__auto____0;
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36710__auto____1;
return cljs$core$async$state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_38847 = f__37044__auto__();
(statearr_38847[(6)] = c__37043__auto___40219);

return statearr_38847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38871 = (function (f,ch,meta38853,_,fn1,meta38872){
this.f = f;
this.ch = ch;
this.meta38853 = meta38853;
this._ = _;
this.fn1 = fn1;
this.meta38872 = meta38872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38873,meta38872__$1){
var self__ = this;
var _38873__$1 = this;
return (new cljs.core.async.t_cljs$core$async38871(self__.f,self__.ch,self__.meta38853,self__._,self__.fn1,meta38872__$1));
}));

(cljs.core.async.t_cljs$core$async38871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38873){
var self__ = this;
var _38873__$1 = this;
return self__.meta38872;
}));

(cljs.core.async.t_cljs$core$async38871.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38871.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38848_SHARP_){
var G__38874 = (((p1__38848_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38848_SHARP_) : self__.f.call(null, p1__38848_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38874) : f1.call(null, G__38874));
});
}));

(cljs.core.async.t_cljs$core$async38871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38853","meta38853",-175609637,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38852","cljs.core.async/t_cljs$core$async38852",-1665774361,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38872","meta38872",187624136,null)], null);
}));

(cljs.core.async.t_cljs$core$async38871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38871");

(cljs.core.async.t_cljs$core$async38871.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38871.
 */
cljs.core.async.__GT_t_cljs$core$async38871 = (function cljs$core$async$__GT_t_cljs$core$async38871(f,ch,meta38853,_,fn1,meta38872){
return (new cljs.core.async.t_cljs$core$async38871(f,ch,meta38853,_,fn1,meta38872));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38852 = (function (f,ch,meta38853){
this.f = f;
this.ch = ch;
this.meta38853 = meta38853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38854,meta38853__$1){
var self__ = this;
var _38854__$1 = this;
return (new cljs.core.async.t_cljs$core$async38852(self__.f,self__.ch,meta38853__$1));
}));

(cljs.core.async.t_cljs$core$async38852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38854){
var self__ = this;
var _38854__$1 = this;
return self__.meta38853;
}));

(cljs.core.async.t_cljs$core$async38852.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38852.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38852.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async38871(self__.f,self__.ch,self__.meta38853,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38875 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38875) : self__.f.call(null, G__38875));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38852.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38853","meta38853",-175609637,null)], null);
}));

(cljs.core.async.t_cljs$core$async38852.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38852");

(cljs.core.async.t_cljs$core$async38852.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38852");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38852.
 */
cljs.core.async.__GT_t_cljs$core$async38852 = (function cljs$core$async$__GT_t_cljs$core$async38852(f,ch,meta38853){
return (new cljs.core.async.t_cljs$core$async38852(f,ch,meta38853));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async38852(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38876 = (function (f,ch,meta38877){
this.f = f;
this.ch = ch;
this.meta38877 = meta38877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38878,meta38877__$1){
var self__ = this;
var _38878__$1 = this;
return (new cljs.core.async.t_cljs$core$async38876(self__.f,self__.ch,meta38877__$1));
}));

(cljs.core.async.t_cljs$core$async38876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38878){
var self__ = this;
var _38878__$1 = this;
return self__.meta38877;
}));

(cljs.core.async.t_cljs$core$async38876.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38876.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38876.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38876.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38876.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38876.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38877","meta38877",237635945,null)], null);
}));

(cljs.core.async.t_cljs$core$async38876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38876");

(cljs.core.async.t_cljs$core$async38876.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38876.
 */
cljs.core.async.__GT_t_cljs$core$async38876 = (function cljs$core$async$__GT_t_cljs$core$async38876(f,ch,meta38877){
return (new cljs.core.async.t_cljs$core$async38876(f,ch,meta38877));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async38876(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38881 = (function (p,ch,meta38882){
this.p = p;
this.ch = ch;
this.meta38882 = meta38882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38883,meta38882__$1){
var self__ = this;
var _38883__$1 = this;
return (new cljs.core.async.t_cljs$core$async38881(self__.p,self__.ch,meta38882__$1));
}));

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38883){
var self__ = this;
var _38883__$1 = this;
return self__.meta38882;
}));

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38882","meta38882",119064182,null)], null);
}));

(cljs.core.async.t_cljs$core$async38881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38881");

(cljs.core.async.t_cljs$core$async38881.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38881.
 */
cljs.core.async.__GT_t_cljs$core$async38881 = (function cljs$core$async$__GT_t_cljs$core$async38881(p,ch,meta38882){
return (new cljs.core.async.t_cljs$core$async38881(p,ch,meta38882));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async38881(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__38898 = arguments.length;
switch (G__38898) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37043__auto___40289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_38919){
var state_val_38920 = (state_38919[(1)]);
if((state_val_38920 === (7))){
var inst_38915 = (state_38919[(2)]);
var state_38919__$1 = state_38919;
var statearr_38921_40296 = state_38919__$1;
(statearr_38921_40296[(2)] = inst_38915);

(statearr_38921_40296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (1))){
var state_38919__$1 = state_38919;
var statearr_38922_40297 = state_38919__$1;
(statearr_38922_40297[(2)] = null);

(statearr_38922_40297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (4))){
var inst_38901 = (state_38919[(7)]);
var inst_38901__$1 = (state_38919[(2)]);
var inst_38902 = (inst_38901__$1 == null);
var state_38919__$1 = (function (){var statearr_38925 = state_38919;
(statearr_38925[(7)] = inst_38901__$1);

return statearr_38925;
})();
if(cljs.core.truth_(inst_38902)){
var statearr_38926_40298 = state_38919__$1;
(statearr_38926_40298[(1)] = (5));

} else {
var statearr_38927_40299 = state_38919__$1;
(statearr_38927_40299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (6))){
var inst_38901 = (state_38919[(7)]);
var inst_38906 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38901) : p.call(null, inst_38901));
var state_38919__$1 = state_38919;
if(cljs.core.truth_(inst_38906)){
var statearr_38928_40300 = state_38919__$1;
(statearr_38928_40300[(1)] = (8));

} else {
var statearr_38930_40301 = state_38919__$1;
(statearr_38930_40301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (3))){
var inst_38917 = (state_38919[(2)]);
var state_38919__$1 = state_38919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38919__$1,inst_38917);
} else {
if((state_val_38920 === (2))){
var state_38919__$1 = state_38919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38919__$1,(4),ch);
} else {
if((state_val_38920 === (11))){
var inst_38909 = (state_38919[(2)]);
var state_38919__$1 = state_38919;
var statearr_38931_40304 = state_38919__$1;
(statearr_38931_40304[(2)] = inst_38909);

(statearr_38931_40304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (9))){
var state_38919__$1 = state_38919;
var statearr_38932_40305 = state_38919__$1;
(statearr_38932_40305[(2)] = null);

(statearr_38932_40305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (5))){
var inst_38904 = cljs.core.async.close_BANG_(out);
var state_38919__$1 = state_38919;
var statearr_38933_40306 = state_38919__$1;
(statearr_38933_40306[(2)] = inst_38904);

(statearr_38933_40306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (10))){
var inst_38912 = (state_38919[(2)]);
var state_38919__$1 = (function (){var statearr_38934 = state_38919;
(statearr_38934[(8)] = inst_38912);

return statearr_38934;
})();
var statearr_38935_40307 = state_38919__$1;
(statearr_38935_40307[(2)] = null);

(statearr_38935_40307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38920 === (8))){
var inst_38901 = (state_38919[(7)]);
var state_38919__$1 = state_38919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38919__$1,(11),out,inst_38901);
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
});
return (function() {
var cljs$core$async$state_machine__36710__auto__ = null;
var cljs$core$async$state_machine__36710__auto____0 = (function (){
var statearr_38945 = [null,null,null,null,null,null,null,null,null];
(statearr_38945[(0)] = cljs$core$async$state_machine__36710__auto__);

(statearr_38945[(1)] = (1));

return statearr_38945;
});
var cljs$core$async$state_machine__36710__auto____1 = (function (state_38919){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_38919);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e38946){var ex__36713__auto__ = e38946;
var statearr_38947_40310 = state_38919;
(statearr_38947_40310[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_38919[(4)]))){
var statearr_38948_40311 = state_38919;
(statearr_38948_40311[(1)] = cljs.core.first((state_38919[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40312 = state_38919;
state_38919 = G__40312;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$state_machine__36710__auto__ = function(state_38919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36710__auto____1.call(this,state_38919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36710__auto____0;
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36710__auto____1;
return cljs$core$async$state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_38950 = f__37044__auto__();
(statearr_38950[(6)] = c__37043__auto___40289);

return statearr_38950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38952 = arguments.length;
switch (G__38952) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37043__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_39016){
var state_val_39017 = (state_39016[(1)]);
if((state_val_39017 === (7))){
var inst_39012 = (state_39016[(2)]);
var state_39016__$1 = state_39016;
var statearr_39020_40322 = state_39016__$1;
(statearr_39020_40322[(2)] = inst_39012);

(statearr_39020_40322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (20))){
var inst_38982 = (state_39016[(7)]);
var inst_38993 = (state_39016[(2)]);
var inst_38994 = cljs.core.next(inst_38982);
var inst_38966 = inst_38994;
var inst_38967 = null;
var inst_38968 = (0);
var inst_38969 = (0);
var state_39016__$1 = (function (){var statearr_39021 = state_39016;
(statearr_39021[(8)] = inst_38993);

(statearr_39021[(9)] = inst_38969);

(statearr_39021[(10)] = inst_38966);

(statearr_39021[(11)] = inst_38968);

(statearr_39021[(12)] = inst_38967);

return statearr_39021;
})();
var statearr_39022_40323 = state_39016__$1;
(statearr_39022_40323[(2)] = null);

(statearr_39022_40323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (1))){
var state_39016__$1 = state_39016;
var statearr_39023_40324 = state_39016__$1;
(statearr_39023_40324[(2)] = null);

(statearr_39023_40324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (4))){
var inst_38955 = (state_39016[(13)]);
var inst_38955__$1 = (state_39016[(2)]);
var inst_38956 = (inst_38955__$1 == null);
var state_39016__$1 = (function (){var statearr_39024 = state_39016;
(statearr_39024[(13)] = inst_38955__$1);

return statearr_39024;
})();
if(cljs.core.truth_(inst_38956)){
var statearr_39025_40326 = state_39016__$1;
(statearr_39025_40326[(1)] = (5));

} else {
var statearr_39026_40327 = state_39016__$1;
(statearr_39026_40327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (15))){
var state_39016__$1 = state_39016;
var statearr_39030_40328 = state_39016__$1;
(statearr_39030_40328[(2)] = null);

(statearr_39030_40328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (21))){
var state_39016__$1 = state_39016;
var statearr_39031_40329 = state_39016__$1;
(statearr_39031_40329[(2)] = null);

(statearr_39031_40329[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (13))){
var inst_38969 = (state_39016[(9)]);
var inst_38966 = (state_39016[(10)]);
var inst_38968 = (state_39016[(11)]);
var inst_38967 = (state_39016[(12)]);
var inst_38976 = (state_39016[(2)]);
var inst_38977 = (inst_38969 + (1));
var tmp39027 = inst_38966;
var tmp39028 = inst_38968;
var tmp39029 = inst_38967;
var inst_38966__$1 = tmp39027;
var inst_38967__$1 = tmp39029;
var inst_38968__$1 = tmp39028;
var inst_38969__$1 = inst_38977;
var state_39016__$1 = (function (){var statearr_39032 = state_39016;
(statearr_39032[(9)] = inst_38969__$1);

(statearr_39032[(14)] = inst_38976);

(statearr_39032[(10)] = inst_38966__$1);

(statearr_39032[(11)] = inst_38968__$1);

(statearr_39032[(12)] = inst_38967__$1);

return statearr_39032;
})();
var statearr_39033_40334 = state_39016__$1;
(statearr_39033_40334[(2)] = null);

(statearr_39033_40334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (22))){
var state_39016__$1 = state_39016;
var statearr_39034_40335 = state_39016__$1;
(statearr_39034_40335[(2)] = null);

(statearr_39034_40335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (6))){
var inst_38955 = (state_39016[(13)]);
var inst_38964 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38955) : f.call(null, inst_38955));
var inst_38965 = cljs.core.seq(inst_38964);
var inst_38966 = inst_38965;
var inst_38967 = null;
var inst_38968 = (0);
var inst_38969 = (0);
var state_39016__$1 = (function (){var statearr_39035 = state_39016;
(statearr_39035[(9)] = inst_38969);

(statearr_39035[(10)] = inst_38966);

(statearr_39035[(11)] = inst_38968);

(statearr_39035[(12)] = inst_38967);

return statearr_39035;
})();
var statearr_39043_40336 = state_39016__$1;
(statearr_39043_40336[(2)] = null);

(statearr_39043_40336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (17))){
var inst_38982 = (state_39016[(7)]);
var inst_38986 = cljs.core.chunk_first(inst_38982);
var inst_38987 = cljs.core.chunk_rest(inst_38982);
var inst_38988 = cljs.core.count(inst_38986);
var inst_38966 = inst_38987;
var inst_38967 = inst_38986;
var inst_38968 = inst_38988;
var inst_38969 = (0);
var state_39016__$1 = (function (){var statearr_39044 = state_39016;
(statearr_39044[(9)] = inst_38969);

(statearr_39044[(10)] = inst_38966);

(statearr_39044[(11)] = inst_38968);

(statearr_39044[(12)] = inst_38967);

return statearr_39044;
})();
var statearr_39046_40339 = state_39016__$1;
(statearr_39046_40339[(2)] = null);

(statearr_39046_40339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (3))){
var inst_39014 = (state_39016[(2)]);
var state_39016__$1 = state_39016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39016__$1,inst_39014);
} else {
if((state_val_39017 === (12))){
var inst_39002 = (state_39016[(2)]);
var state_39016__$1 = state_39016;
var statearr_39047_40341 = state_39016__$1;
(statearr_39047_40341[(2)] = inst_39002);

(statearr_39047_40341[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (2))){
var state_39016__$1 = state_39016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39016__$1,(4),in$);
} else {
if((state_val_39017 === (23))){
var inst_39010 = (state_39016[(2)]);
var state_39016__$1 = state_39016;
var statearr_39048_40342 = state_39016__$1;
(statearr_39048_40342[(2)] = inst_39010);

(statearr_39048_40342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (19))){
var inst_38997 = (state_39016[(2)]);
var state_39016__$1 = state_39016;
var statearr_39058_40343 = state_39016__$1;
(statearr_39058_40343[(2)] = inst_38997);

(statearr_39058_40343[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (11))){
var inst_38966 = (state_39016[(10)]);
var inst_38982 = (state_39016[(7)]);
var inst_38982__$1 = cljs.core.seq(inst_38966);
var state_39016__$1 = (function (){var statearr_39059 = state_39016;
(statearr_39059[(7)] = inst_38982__$1);

return statearr_39059;
})();
if(inst_38982__$1){
var statearr_39060_40344 = state_39016__$1;
(statearr_39060_40344[(1)] = (14));

} else {
var statearr_39061_40345 = state_39016__$1;
(statearr_39061_40345[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (9))){
var inst_39004 = (state_39016[(2)]);
var inst_39005 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39016__$1 = (function (){var statearr_39062 = state_39016;
(statearr_39062[(15)] = inst_39004);

return statearr_39062;
})();
if(cljs.core.truth_(inst_39005)){
var statearr_39063_40346 = state_39016__$1;
(statearr_39063_40346[(1)] = (21));

} else {
var statearr_39066_40347 = state_39016__$1;
(statearr_39066_40347[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (5))){
var inst_38958 = cljs.core.async.close_BANG_(out);
var state_39016__$1 = state_39016;
var statearr_39069_40348 = state_39016__$1;
(statearr_39069_40348[(2)] = inst_38958);

(statearr_39069_40348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (14))){
var inst_38982 = (state_39016[(7)]);
var inst_38984 = cljs.core.chunked_seq_QMARK_(inst_38982);
var state_39016__$1 = state_39016;
if(inst_38984){
var statearr_39070_40349 = state_39016__$1;
(statearr_39070_40349[(1)] = (17));

} else {
var statearr_39071_40350 = state_39016__$1;
(statearr_39071_40350[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (16))){
var inst_39000 = (state_39016[(2)]);
var state_39016__$1 = state_39016;
var statearr_39079_40351 = state_39016__$1;
(statearr_39079_40351[(2)] = inst_39000);

(statearr_39079_40351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (10))){
var inst_38969 = (state_39016[(9)]);
var inst_38967 = (state_39016[(12)]);
var inst_38974 = cljs.core._nth(inst_38967,inst_38969);
var state_39016__$1 = state_39016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39016__$1,(13),out,inst_38974);
} else {
if((state_val_39017 === (18))){
var inst_38982 = (state_39016[(7)]);
var inst_38991 = cljs.core.first(inst_38982);
var state_39016__$1 = state_39016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39016__$1,(20),out,inst_38991);
} else {
if((state_val_39017 === (8))){
var inst_38969 = (state_39016[(9)]);
var inst_38968 = (state_39016[(11)]);
var inst_38971 = (inst_38969 < inst_38968);
var inst_38972 = inst_38971;
var state_39016__$1 = state_39016;
if(cljs.core.truth_(inst_38972)){
var statearr_39081_40352 = state_39016__$1;
(statearr_39081_40352[(1)] = (10));

} else {
var statearr_39082_40353 = state_39016__$1;
(statearr_39082_40353[(1)] = (11));

}

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
var cljs$core$async$mapcat_STAR__$_state_machine__36710__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36710__auto____0 = (function (){
var statearr_39083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39083[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36710__auto__);

(statearr_39083[(1)] = (1));

return statearr_39083;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36710__auto____1 = (function (state_39016){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_39016);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e39086){var ex__36713__auto__ = e39086;
var statearr_39087_40357 = state_39016;
(statearr_39087_40357[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_39016[(4)]))){
var statearr_39088_40358 = state_39016;
(statearr_39088_40358[(1)] = cljs.core.first((state_39016[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40359 = state_39016;
state_39016 = G__40359;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36710__auto__ = function(state_39016){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36710__auto____1.call(this,state_39016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36710__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36710__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_39094 = f__37044__auto__();
(statearr_39094[(6)] = c__37043__auto__);

return statearr_39094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));

return c__37043__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39097 = arguments.length;
switch (G__39097) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39103 = arguments.length;
switch (G__39103) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39113 = arguments.length;
switch (G__39113) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37043__auto___40370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_39142){
var state_val_39143 = (state_39142[(1)]);
if((state_val_39143 === (7))){
var inst_39137 = (state_39142[(2)]);
var state_39142__$1 = state_39142;
var statearr_39146_40371 = state_39142__$1;
(statearr_39146_40371[(2)] = inst_39137);

(statearr_39146_40371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39143 === (1))){
var inst_39117 = null;
var state_39142__$1 = (function (){var statearr_39147 = state_39142;
(statearr_39147[(7)] = inst_39117);

return statearr_39147;
})();
var statearr_39148_40372 = state_39142__$1;
(statearr_39148_40372[(2)] = null);

(statearr_39148_40372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39143 === (4))){
var inst_39122 = (state_39142[(8)]);
var inst_39122__$1 = (state_39142[(2)]);
var inst_39123 = (inst_39122__$1 == null);
var inst_39124 = cljs.core.not(inst_39123);
var state_39142__$1 = (function (){var statearr_39149 = state_39142;
(statearr_39149[(8)] = inst_39122__$1);

return statearr_39149;
})();
if(inst_39124){
var statearr_39150_40374 = state_39142__$1;
(statearr_39150_40374[(1)] = (5));

} else {
var statearr_39151_40375 = state_39142__$1;
(statearr_39151_40375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39143 === (6))){
var state_39142__$1 = state_39142;
var statearr_39152_40376 = state_39142__$1;
(statearr_39152_40376[(2)] = null);

(statearr_39152_40376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39143 === (3))){
var inst_39139 = (state_39142[(2)]);
var inst_39140 = cljs.core.async.close_BANG_(out);
var state_39142__$1 = (function (){var statearr_39153 = state_39142;
(statearr_39153[(9)] = inst_39139);

return statearr_39153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39142__$1,inst_39140);
} else {
if((state_val_39143 === (2))){
var state_39142__$1 = state_39142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39142__$1,(4),ch);
} else {
if((state_val_39143 === (11))){
var inst_39122 = (state_39142[(8)]);
var inst_39131 = (state_39142[(2)]);
var inst_39117 = inst_39122;
var state_39142__$1 = (function (){var statearr_39154 = state_39142;
(statearr_39154[(10)] = inst_39131);

(statearr_39154[(7)] = inst_39117);

return statearr_39154;
})();
var statearr_39155_40377 = state_39142__$1;
(statearr_39155_40377[(2)] = null);

(statearr_39155_40377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39143 === (9))){
var inst_39122 = (state_39142[(8)]);
var state_39142__$1 = state_39142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39142__$1,(11),out,inst_39122);
} else {
if((state_val_39143 === (5))){
var inst_39117 = (state_39142[(7)]);
var inst_39122 = (state_39142[(8)]);
var inst_39126 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39122,inst_39117);
var state_39142__$1 = state_39142;
if(inst_39126){
var statearr_39161_40378 = state_39142__$1;
(statearr_39161_40378[(1)] = (8));

} else {
var statearr_39162_40379 = state_39142__$1;
(statearr_39162_40379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39143 === (10))){
var inst_39134 = (state_39142[(2)]);
var state_39142__$1 = state_39142;
var statearr_39163_40380 = state_39142__$1;
(statearr_39163_40380[(2)] = inst_39134);

(statearr_39163_40380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39143 === (8))){
var inst_39117 = (state_39142[(7)]);
var tmp39156 = inst_39117;
var inst_39117__$1 = tmp39156;
var state_39142__$1 = (function (){var statearr_39164 = state_39142;
(statearr_39164[(7)] = inst_39117__$1);

return statearr_39164;
})();
var statearr_39165_40381 = state_39142__$1;
(statearr_39165_40381[(2)] = null);

(statearr_39165_40381[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36710__auto__ = null;
var cljs$core$async$state_machine__36710__auto____0 = (function (){
var statearr_39167 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39167[(0)] = cljs$core$async$state_machine__36710__auto__);

(statearr_39167[(1)] = (1));

return statearr_39167;
});
var cljs$core$async$state_machine__36710__auto____1 = (function (state_39142){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_39142);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e39168){var ex__36713__auto__ = e39168;
var statearr_39169_40383 = state_39142;
(statearr_39169_40383[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_39142[(4)]))){
var statearr_39170_40384 = state_39142;
(statearr_39170_40384[(1)] = cljs.core.first((state_39142[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40385 = state_39142;
state_39142 = G__40385;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$state_machine__36710__auto__ = function(state_39142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36710__auto____1.call(this,state_39142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36710__auto____0;
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36710__auto____1;
return cljs$core$async$state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_39177 = f__37044__auto__();
(statearr_39177[(6)] = c__37043__auto___40370);

return statearr_39177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39186 = arguments.length;
switch (G__39186) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37043__auto___40388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_39249){
var state_val_39250 = (state_39249[(1)]);
if((state_val_39250 === (7))){
var inst_39245 = (state_39249[(2)]);
var state_39249__$1 = state_39249;
var statearr_39257_40390 = state_39249__$1;
(statearr_39257_40390[(2)] = inst_39245);

(statearr_39257_40390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (1))){
var inst_39193 = (new Array(n));
var inst_39194 = inst_39193;
var inst_39195 = (0);
var state_39249__$1 = (function (){var statearr_39258 = state_39249;
(statearr_39258[(7)] = inst_39195);

(statearr_39258[(8)] = inst_39194);

return statearr_39258;
})();
var statearr_39259_40392 = state_39249__$1;
(statearr_39259_40392[(2)] = null);

(statearr_39259_40392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (4))){
var inst_39198 = (state_39249[(9)]);
var inst_39198__$1 = (state_39249[(2)]);
var inst_39199 = (inst_39198__$1 == null);
var inst_39200 = cljs.core.not(inst_39199);
var state_39249__$1 = (function (){var statearr_39260 = state_39249;
(statearr_39260[(9)] = inst_39198__$1);

return statearr_39260;
})();
if(inst_39200){
var statearr_39261_40393 = state_39249__$1;
(statearr_39261_40393[(1)] = (5));

} else {
var statearr_39262_40394 = state_39249__$1;
(statearr_39262_40394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (15))){
var inst_39226 = (state_39249[(2)]);
var state_39249__$1 = state_39249;
var statearr_39263_40395 = state_39249__$1;
(statearr_39263_40395[(2)] = inst_39226);

(statearr_39263_40395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (13))){
var state_39249__$1 = state_39249;
var statearr_39264_40396 = state_39249__$1;
(statearr_39264_40396[(2)] = null);

(statearr_39264_40396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (6))){
var inst_39195 = (state_39249[(7)]);
var inst_39222 = (inst_39195 > (0));
var state_39249__$1 = state_39249;
if(cljs.core.truth_(inst_39222)){
var statearr_39265_40397 = state_39249__$1;
(statearr_39265_40397[(1)] = (12));

} else {
var statearr_39266_40398 = state_39249__$1;
(statearr_39266_40398[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (3))){
var inst_39247 = (state_39249[(2)]);
var state_39249__$1 = state_39249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39249__$1,inst_39247);
} else {
if((state_val_39250 === (12))){
var inst_39194 = (state_39249[(8)]);
var inst_39224 = cljs.core.vec(inst_39194);
var state_39249__$1 = state_39249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39249__$1,(15),out,inst_39224);
} else {
if((state_val_39250 === (2))){
var state_39249__$1 = state_39249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39249__$1,(4),ch);
} else {
if((state_val_39250 === (11))){
var inst_39216 = (state_39249[(2)]);
var inst_39217 = (new Array(n));
var inst_39194 = inst_39217;
var inst_39195 = (0);
var state_39249__$1 = (function (){var statearr_39271 = state_39249;
(statearr_39271[(7)] = inst_39195);

(statearr_39271[(10)] = inst_39216);

(statearr_39271[(8)] = inst_39194);

return statearr_39271;
})();
var statearr_39272_40399 = state_39249__$1;
(statearr_39272_40399[(2)] = null);

(statearr_39272_40399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (9))){
var inst_39194 = (state_39249[(8)]);
var inst_39214 = cljs.core.vec(inst_39194);
var state_39249__$1 = state_39249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39249__$1,(11),out,inst_39214);
} else {
if((state_val_39250 === (5))){
var inst_39195 = (state_39249[(7)]);
var inst_39203 = (state_39249[(11)]);
var inst_39198 = (state_39249[(9)]);
var inst_39194 = (state_39249[(8)]);
var inst_39202 = (inst_39194[inst_39195] = inst_39198);
var inst_39203__$1 = (inst_39195 + (1));
var inst_39204 = (inst_39203__$1 < n);
var state_39249__$1 = (function (){var statearr_39273 = state_39249;
(statearr_39273[(11)] = inst_39203__$1);

(statearr_39273[(12)] = inst_39202);

return statearr_39273;
})();
if(cljs.core.truth_(inst_39204)){
var statearr_39278_40400 = state_39249__$1;
(statearr_39278_40400[(1)] = (8));

} else {
var statearr_39279_40401 = state_39249__$1;
(statearr_39279_40401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (14))){
var inst_39229 = (state_39249[(2)]);
var inst_39243 = cljs.core.async.close_BANG_(out);
var state_39249__$1 = (function (){var statearr_39284 = state_39249;
(statearr_39284[(13)] = inst_39229);

return statearr_39284;
})();
var statearr_39288_40402 = state_39249__$1;
(statearr_39288_40402[(2)] = inst_39243);

(statearr_39288_40402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (10))){
var inst_39220 = (state_39249[(2)]);
var state_39249__$1 = state_39249;
var statearr_39289_40403 = state_39249__$1;
(statearr_39289_40403[(2)] = inst_39220);

(statearr_39289_40403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39250 === (8))){
var inst_39203 = (state_39249[(11)]);
var inst_39194 = (state_39249[(8)]);
var tmp39283 = inst_39194;
var inst_39194__$1 = tmp39283;
var inst_39195 = inst_39203;
var state_39249__$1 = (function (){var statearr_39290 = state_39249;
(statearr_39290[(7)] = inst_39195);

(statearr_39290[(8)] = inst_39194__$1);

return statearr_39290;
})();
var statearr_39291_40404 = state_39249__$1;
(statearr_39291_40404[(2)] = null);

(statearr_39291_40404[(1)] = (2));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36710__auto__ = null;
var cljs$core$async$state_machine__36710__auto____0 = (function (){
var statearr_39292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39292[(0)] = cljs$core$async$state_machine__36710__auto__);

(statearr_39292[(1)] = (1));

return statearr_39292;
});
var cljs$core$async$state_machine__36710__auto____1 = (function (state_39249){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_39249);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e39293){var ex__36713__auto__ = e39293;
var statearr_39294_40405 = state_39249;
(statearr_39294_40405[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_39249[(4)]))){
var statearr_39295_40406 = state_39249;
(statearr_39295_40406[(1)] = cljs.core.first((state_39249[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40407 = state_39249;
state_39249 = G__40407;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$state_machine__36710__auto__ = function(state_39249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36710__auto____1.call(this,state_39249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36710__auto____0;
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36710__auto____1;
return cljs$core$async$state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_39299 = f__37044__auto__();
(statearr_39299[(6)] = c__37043__auto___40388);

return statearr_39299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39301 = arguments.length;
switch (G__39301) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37043__auto___40409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37044__auto__ = (function (){var switch__36709__auto__ = (function (state_39346){
var state_val_39347 = (state_39346[(1)]);
if((state_val_39347 === (7))){
var inst_39342 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
var statearr_39348_40410 = state_39346__$1;
(statearr_39348_40410[(2)] = inst_39342);

(statearr_39348_40410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (1))){
var inst_39302 = [];
var inst_39303 = inst_39302;
var inst_39304 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39346__$1 = (function (){var statearr_39349 = state_39346;
(statearr_39349[(7)] = inst_39303);

(statearr_39349[(8)] = inst_39304);

return statearr_39349;
})();
var statearr_39350_40413 = state_39346__$1;
(statearr_39350_40413[(2)] = null);

(statearr_39350_40413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (4))){
var inst_39307 = (state_39346[(9)]);
var inst_39307__$1 = (state_39346[(2)]);
var inst_39308 = (inst_39307__$1 == null);
var inst_39309 = cljs.core.not(inst_39308);
var state_39346__$1 = (function (){var statearr_39351 = state_39346;
(statearr_39351[(9)] = inst_39307__$1);

return statearr_39351;
})();
if(inst_39309){
var statearr_39352_40414 = state_39346__$1;
(statearr_39352_40414[(1)] = (5));

} else {
var statearr_39353_40415 = state_39346__$1;
(statearr_39353_40415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (15))){
var inst_39303 = (state_39346[(7)]);
var inst_39334 = cljs.core.vec(inst_39303);
var state_39346__$1 = state_39346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39346__$1,(18),out,inst_39334);
} else {
if((state_val_39347 === (13))){
var inst_39329 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
var statearr_39354_40419 = state_39346__$1;
(statearr_39354_40419[(2)] = inst_39329);

(statearr_39354_40419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (6))){
var inst_39303 = (state_39346[(7)]);
var inst_39331 = inst_39303.length;
var inst_39332 = (inst_39331 > (0));
var state_39346__$1 = state_39346;
if(cljs.core.truth_(inst_39332)){
var statearr_39355_40420 = state_39346__$1;
(statearr_39355_40420[(1)] = (15));

} else {
var statearr_39356_40421 = state_39346__$1;
(statearr_39356_40421[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (17))){
var inst_39339 = (state_39346[(2)]);
var inst_39340 = cljs.core.async.close_BANG_(out);
var state_39346__$1 = (function (){var statearr_39357 = state_39346;
(statearr_39357[(10)] = inst_39339);

return statearr_39357;
})();
var statearr_39358_40422 = state_39346__$1;
(statearr_39358_40422[(2)] = inst_39340);

(statearr_39358_40422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (3))){
var inst_39344 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39346__$1,inst_39344);
} else {
if((state_val_39347 === (12))){
var inst_39303 = (state_39346[(7)]);
var inst_39322 = cljs.core.vec(inst_39303);
var state_39346__$1 = state_39346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39346__$1,(14),out,inst_39322);
} else {
if((state_val_39347 === (2))){
var state_39346__$1 = state_39346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39346__$1,(4),ch);
} else {
if((state_val_39347 === (11))){
var inst_39303 = (state_39346[(7)]);
var inst_39311 = (state_39346[(11)]);
var inst_39307 = (state_39346[(9)]);
var inst_39319 = inst_39303.push(inst_39307);
var tmp39359 = inst_39303;
var inst_39303__$1 = tmp39359;
var inst_39304 = inst_39311;
var state_39346__$1 = (function (){var statearr_39361 = state_39346;
(statearr_39361[(7)] = inst_39303__$1);

(statearr_39361[(8)] = inst_39304);

(statearr_39361[(12)] = inst_39319);

return statearr_39361;
})();
var statearr_39362_40423 = state_39346__$1;
(statearr_39362_40423[(2)] = null);

(statearr_39362_40423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (9))){
var inst_39304 = (state_39346[(8)]);
var inst_39315 = cljs.core.keyword_identical_QMARK_(inst_39304,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_39346__$1 = state_39346;
var statearr_39366_40424 = state_39346__$1;
(statearr_39366_40424[(2)] = inst_39315);

(statearr_39366_40424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (5))){
var inst_39304 = (state_39346[(8)]);
var inst_39312 = (state_39346[(13)]);
var inst_39311 = (state_39346[(11)]);
var inst_39307 = (state_39346[(9)]);
var inst_39311__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39307) : f.call(null, inst_39307));
var inst_39312__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39311__$1,inst_39304);
var state_39346__$1 = (function (){var statearr_39367 = state_39346;
(statearr_39367[(13)] = inst_39312__$1);

(statearr_39367[(11)] = inst_39311__$1);

return statearr_39367;
})();
if(inst_39312__$1){
var statearr_39368_40425 = state_39346__$1;
(statearr_39368_40425[(1)] = (8));

} else {
var statearr_39369_40426 = state_39346__$1;
(statearr_39369_40426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (14))){
var inst_39311 = (state_39346[(11)]);
var inst_39307 = (state_39346[(9)]);
var inst_39324 = (state_39346[(2)]);
var inst_39325 = [];
var inst_39326 = inst_39325.push(inst_39307);
var inst_39303 = inst_39325;
var inst_39304 = inst_39311;
var state_39346__$1 = (function (){var statearr_39370 = state_39346;
(statearr_39370[(7)] = inst_39303);

(statearr_39370[(14)] = inst_39326);

(statearr_39370[(8)] = inst_39304);

(statearr_39370[(15)] = inst_39324);

return statearr_39370;
})();
var statearr_39374_40427 = state_39346__$1;
(statearr_39374_40427[(2)] = null);

(statearr_39374_40427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (16))){
var state_39346__$1 = state_39346;
var statearr_39375_40428 = state_39346__$1;
(statearr_39375_40428[(2)] = null);

(statearr_39375_40428[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (10))){
var inst_39317 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
if(cljs.core.truth_(inst_39317)){
var statearr_39376_40429 = state_39346__$1;
(statearr_39376_40429[(1)] = (11));

} else {
var statearr_39377_40430 = state_39346__$1;
(statearr_39377_40430[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (18))){
var inst_39336 = (state_39346[(2)]);
var state_39346__$1 = state_39346;
var statearr_39378_40431 = state_39346__$1;
(statearr_39378_40431[(2)] = inst_39336);

(statearr_39378_40431[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39347 === (8))){
var inst_39312 = (state_39346[(13)]);
var state_39346__$1 = state_39346;
var statearr_39379_40432 = state_39346__$1;
(statearr_39379_40432[(2)] = inst_39312);

(statearr_39379_40432[(1)] = (10));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36710__auto__ = null;
var cljs$core$async$state_machine__36710__auto____0 = (function (){
var statearr_39380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39380[(0)] = cljs$core$async$state_machine__36710__auto__);

(statearr_39380[(1)] = (1));

return statearr_39380;
});
var cljs$core$async$state_machine__36710__auto____1 = (function (state_39346){
while(true){
var ret_value__36711__auto__ = (function (){try{while(true){
var result__36712__auto__ = switch__36709__auto__(state_39346);
if(cljs.core.keyword_identical_QMARK_(result__36712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36712__auto__;
}
break;
}
}catch (e39381){var ex__36713__auto__ = e39381;
var statearr_39382_40433 = state_39346;
(statearr_39382_40433[(2)] = ex__36713__auto__);


if(cljs.core.seq((state_39346[(4)]))){
var statearr_39383_40434 = state_39346;
(statearr_39383_40434[(1)] = cljs.core.first((state_39346[(4)])));

} else {
throw ex__36713__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40435 = state_39346;
state_39346 = G__40435;
continue;
} else {
return ret_value__36711__auto__;
}
break;
}
});
cljs$core$async$state_machine__36710__auto__ = function(state_39346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36710__auto____1.call(this,state_39346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36710__auto____0;
cljs$core$async$state_machine__36710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36710__auto____1;
return cljs$core$async$state_machine__36710__auto__;
})()
})();
var state__37045__auto__ = (function (){var statearr_39384 = f__37044__auto__();
(statearr_39384[(6)] = c__37043__auto___40409);

return statearr_39384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37045__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
