(function() {
  var NabaztagItemView;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  NabaztagItemView = (function() {
    __extends(NabaztagItemView, Backbone.View);
    function NabaztagItemView() {
      this.deleteClick = __bind(this.deleteClick, this);
      this.actionClick = __bind(this.actionClick, this);
      this.render = __bind(this.render, this);
      NabaztagItemView.__super__.constructor.apply(this, arguments);
    }
    NabaztagItemView.prototype.events = {
      'click .delete': "deleteClick",
      'click .action': 'actionClick'
    };
    NabaztagItemView.prototype.template = JST['nabaztag_item'];
    NabaztagItemView.prototype.initialize = function() {
      return this.model.bind('change', this.render);
    };
    NabaztagItemView.prototype.render = function() {
      var actionBtn, isConnected;
      $(this.el).html(this.template(this.model.toJSON()));
      actionBtn = $(this.el).find(".action");
      isConnected = this.model.get("connected");
      if (isConnected) {
        actionBtn.removeClass("disabled");
      } else {
        actionBtn.addClass("disabled");
      }
      return this;
    };
    NabaztagItemView.prototype.actionClick = function() {
      console.log("actionClick");
      if (this.model.get("connected")) {
        return router.navigate("nabaztag/action/" + this.model.id, true);
      }
    };
    NabaztagItemView.prototype.deleteClick = function() {
      return this.model.destroy({
        success: function() {
          return router.nabaztagCollection.remove(this.model);
        }
      });
    };
    return NabaztagItemView;
  })();
  this.NabaztagItemView = NabaztagItemView;
}).call(this);
