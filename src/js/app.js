define([
  'require',
  'jquery',
  'imagesloaded',
  'brightcove',
  'isotope',
  'analytics',
  'underscore',
  'lib/BackboneRouter',
  'templates',
  'collections/movies',
  'models/tags',
  'models/config',
  'views/cardView',
  'views/detailView',
  'router',
  'jquery_ui_touch_punch'
  ], function(require, jQuery, imagesLoaded, brightcove, Isotope, Analytics, _, Backbone, templates, moviesCollection, tags, config, cardView, detailView, router) {

    


  var app = app || {};

  _.extend(app, {
    models: {},
    collections: {},
    views: {}
  });
  

  // App-wide View
  // ----

  app.views.AppView = Backbone.View.extend({
    el: ".iapp-page-wrap",
    events: {
      "click .modal-overlay": "removeHighlight",
      "click .iapp-filter-button": "setFilter",
      "click .iapp-filter-button-clear": "clearFilters"
    },

    initialize: function() {
      this.listenTo(this.collection, 'reset', this.addAll);
      this.listenTo(this.collection, 'change', this.showDetail);
      this.render();
      
    },

    addOne: function(question) {
      var view = new cardView({model: question});
      this.$cardWrap.append(view.render().el);
    },
    showDetail: function(model) {

      if(model.get("highlight")) {
        console.log(model);
        this.detailView =  new detailView({model: model});

        $(".iapp-page-wrap").append(this.detailView.render().el);
        
      }

      

    },

    template: templates["app-view.html"], 

    render: function() {
      this.$el.html(this.template({}));
      this.$cardWrap = this.$el.find("#card-wrap");
      this.collection.fetch({reset: true});
    },

    $cardWrap: {},

    addAll: function() {
      this.$cardWrap.empty();
      this.collection.each(this.addOne, this);
      this.renderFilters();
      var $cardWrap = this.$cardWrap;
      var credits = _.map(this.collection.toJSON(), function(item) {
        return item.photocredit;
      }).join(", ");
      this.$el.append('<p class="iapp-credits"><strong>Photos: </strong>' + credits);

      $cardWrap.imagesLoaded( function() {
        $cardWrap.isotope( {
          itemSelector: '.card',
          transitionDuration: (!config.isMobile) ? '0.4s' : 0,
          // layoutMode: 'fitRows'
        });
        $cardWrap.isotope("on", "layoutComplete", function(iso) {
          if (iso.filteredItems.length === 0) {
            if ($(".iapp-no-results-wrap").length === 0) {
              $cardWrap.after("<div class='iapp-no-results-wrap'><h3>You think a movie like that exists? Try again.</h3></div>");
            }
          } else {
            $(".iapp-no-results-wrap").remove();
          }

          
        });
      });

   

    },

    removeHighlight: function() {
      Analytics.click("closed card");
     this.detailView.model.set({"highlight": false});
    },
    addTimeStamp: function() {
      var objData = this.collection.toJSON();
      this.$el.find(".time-stamp").html(objData[0].timestamp);
    },

    filterItems: function(tagArray) {
      var filteredCollection = this.collection.filter(function(model) {
        var result;

        _.each(tagArray, function(tag) {
          if (_.contains(model.get("categories"), tag)){
            result = true;
          }
        });

        return result;
      });

      this.$cardWrap.empty();
      _.each(filteredCollection, function(item) {
        this.addOne(item);
      }, this);
    },

    filtersTemplate: templates["tags.html"],
    renderFilters: function() {
      this.$el.find(".iapp-filters-wrap").html(this.filtersTemplate({tags: tags}));
    },

    currentFilter: [],

    setFilter: function(e) {
      var $target = $(e.target);
      var newFilter = "." + $target.attr("data-filter");
      if (_.contains(this.currentFilter, newFilter)) {
        $target.removeClass("iapp-selected");
        this.currentFilter = _.without(this.currentFilter, newFilter);
      } else {
        
        $target.addClass("iapp-selected");

        this.currentFilter.push(newFilter);
        
      }
      // window.alert(this.currentFilter);
      var filterStr = "";
        _.each(this.currentFilter, function(filter) {
          filterStr += filter;
        });
      this.$cardWrap.isotope({ filter: filterStr });


      if (this.currentFilter.length > 0) {
          this.$el.find(".iapp-filter-button-clear").addClass("show");
        } else {
          this.$el.find(".iapp-filter-button-clear").removeClass("show");
        }
        
    },

    clearFilters: function(e) {
      this.currentFilter = [];
      this.$el.find(".iapp-filter-button-clear").removeClass("show");
      this.$el.find(".iapp-filters-wrap").find(".iapp-filter-button").removeClass("iapp-selected");
      this.$cardWrap.isotope({ filter: "" });
    }
  });

  
  app.init = function() {

    require( [ 'jquery-bridget/jquery.bridget' ],
      function() {
        // make Isotope a jQuery plugin
        $.bridget( 'isotope', Isotope );
        // app.collections.questions = new moviesCollection(); 
        app.views.appView = new app.views.AppView({collection: new moviesCollection()});
        Backbone.history.start();
      }
    );

    
    
    
  };

  return app;

});
