define(["require","jquery","imagesloaded","isotope","analytics","underscore","backbone","lib/BackboneRouter","templates","collections/movies"],function(e,i,t,o,s,n,l,a,r,d){var c=c||{};n.extend(c,{models:{},collections:{},views:{}});var h=!0;return c.views.AppView=a.View.extend({el:"body",events:{"click .modal-overlay":"removeHighlight"},initialize:function(){this.listenTo(c.collections.questions,"reset",this.addAll),c.collections.questions.fetch({reset:!0})},addOne:function(e){var i=new c.views.QuestionCard({model:e});this.$cardWrap.append(i.render().el)},$cardWrap:$("#card-wrap"),addAll:function(){this.$cardWrap.empty(),c.collections.questions.each(this.addOne,this);var e=this.$cardWrap;e.imagesLoaded(function(){e.isotope({itemSelector:".card",transitionDuration:h?0:"0.4s"})})},removeHighlight:function(){s.click("closed card"),c.views.detailView.model.set({highlight:!1})},addTimeStamp:function(){var e=c.collections.questions.toJSON();this.$el.find(".time-stamp").html(e[0].timestamp)},filterItems:function(e){var i=c.collections.questions.filter(function(i){var t;return n.each(e,function(e){n.contains(i.get("categories"),e)&&(t=!0)}),t});this.$cardWrap.empty(),n.each(i,function(e){this.addOne(e)},this)}}),c.views.QuestionCard=a.View.extend({tagName:"div",className:function(){var e=this.model.get("categories"),i="card small-card";return n.each(e,function(e){i+=" "+e}),i},events:{click:"setHighlight"},template:r["card-front.html"],initialize:function(){this.listenTo(this.model,"change",this.showDetail)},render:function(){return this.$el.html(this.template(this.model.attributes)),n.each(this.model.attributes.category,function(e){this.$el.addClass(e),this.$el.attr("data-category",e)},this),this},setHighlight:function(){s.click("opened card"),this.model.set({highlight:!0})},showDetail:function(){this.model.get("highlight")&&(c.views.detailView&&c.views.detailView.remove(),c.views.detailView=new c.views.DetailCard({model:this.model}),$(".page-wrap").append(c.views.detailView.render().el),c.views.detailView.postRender(c.views.detailView.render().$el))}}),c.views.DetailCard=a.View.extend({tagName:"div",className:"modal",template:r["card-back.html"],events:{"click .close-card":"removeHighlight"},initialize:function(){c.router.navigate("movie/"+this.model.get("rowNumber")),this.listenTo(this.model,"change",this.removeCard)},render:function(){return this.$el.empty(),this.$el.html(this.template(this.model.attributes)),this},postRender:function(e){n.defer(function(){$(".modal-overlay").addClass("show"),e.addClass("modal-show")},e)},removeCard:function(){if(!this.model.get("highlight")){$(".modal-overlay").removeClass("show"),this.$el.removeClass("modal-show"),n.defer(function(){c.router.navigate("movie")});var e=this;n.delay(function(){e.remove()},500)}},removeHighlight:function(){this.model.set({highlight:!1})}}),c.Router=a.Router.extend({routes:{"":"home","movie/:id":"highlight"},home:function(){var e=n.find(c.collections.questions.models,function(e){return e.get("highlight")===!0});e&&e.set({highlight:!1})},highlight:function(e){console.log(c.collections.questions),n.defer(function(){console.log(c.collections.questions);var i=n.find(c.collections.questions.models,function(i){return i.get("rowNumber")==e});i.set({highlight:!0}),c.views.detailView=new c.views.DetailCard({model:i}),$(".page-wrap").append(c.views.detailView.render().el),c.views.detailView.postRender(c.views.detailView.render().$el)})}}),c.init=function(){e(["jquery-bridget/jquery.bridget"],function(){$.bridget("isotope",o),c.collections.questions=new d,c.views.appView=new c.views.AppView,c.router=new c.Router,a.history.start()})},c});