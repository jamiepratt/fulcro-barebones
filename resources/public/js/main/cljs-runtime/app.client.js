goog.provide('app.client');
var module$node_modules$$wavesurfer$react$dist$index=shadow.js.require("module$node_modules$$wavesurfer$react$dist$index", {});
app.client.ui_wavesurfer = com.fulcrologic.fulcro.algorithms.react_interop.react_factory(module$node_modules$$wavesurfer$react$dist$index.WavesurferPlayer);

var options__53666__auto___63584 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","list","root/list",761982781),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null, this$));
console.log("Render root");

return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Application"]),app.client.ui_wavesurfer(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"audio/Dialog_13_626f0465..264c74a138db.mp3",new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"waveColor","waveColor",945628547),"violet"], null))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Root = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__53666__auto___63584,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Root,new cljs.core.Keyword("app.client","Root","app.client/Root",1677331554),options__53666__auto___63584);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.react.version18.with_react18(com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0());
}
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Root,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
