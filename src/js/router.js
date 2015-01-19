 define([
  "jquery",
  "underscore",
  "backbone"
], function($, _, Backbone) { 
  var Router = Backbone.Router.extend({

    routes: {
      "": "home",
      "movie/:id":                 "highlight",    // #/1
      
    },

    home: function() {


        


      

       var highlightModel = _.find(app.collections.questions.models, function(model) {
        
        return model.get("highlight") === true;
      });
       if(highlightModel) {
        highlightModel.set({"highlight": false});
       }
       
    },

    highlight: function(id) {

      
      if (app.collections.questions.toJSON().length == 0) {
        app.collections.questions.once("reset", function() {
          var detailModel = _.find(app.collections.questions.models, function(model) {
        
            return model.get("rowNumber") == id;
          });
          detailModel.set({"highlight": true});
          app.views.detailView = new app.views.DetailCard({model: detailModel});

          $(".iapp-page-wrap").append(app.views.detailView.render().el);
          app.views.detailView.postRender(app.views.detailView.render().$el);
        });
      }
      
    }

  });

 return new Router();
});