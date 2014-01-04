define([
"jquery",
"underscore",
"backbone",
"jquery_cs_slider",
"modernizer",
"jquery_ui",
"js_plugin_slider",
"js_resolve_slider",
"juicy_slider",
"text!Templates/home.html"],
function($,
_,
Backbone,
jquery_cs_slider,
modernizer,
jquery_ui,
js_plugin_slider,
js_resolve_slider,
juicy_slider,
HomeTemplate){

	var homeView = Backbone.View.extend({
		el:"#homeContainer",
		template:_.template(HomeTemplate),
		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(this.template);
			// $('#da-slider').cslider({
			// 	autoplay	: true,
			// 	bgincrement	: 450
			// });
			 $('#myslider0').juicyslider({
                    width: '100%',
                    height: 400,
                    mask : 'none',
                    autoplay: 4000,
                    shuffle: true
                });
		},
		show:function(){
			this.$el.show();
		},
		hide:function(){
			this.$el.hide();
		}
	});
	return homeView;
});