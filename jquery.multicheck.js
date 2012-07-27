(function($){
    $.multicheck = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("multicheck", base);
        
        base.init = function(){
            base.options = $.extend({},$.multicheck.defaultOptions, options);
            
            // Put your initialization code here
            base.children = $('input[data-name='+base.$el.data('name')+'][data-check=child]');
            
            base.$el.live('change', base.parentOnCheckUncheck);
            base.children.live('change', base.childOnCheckUncheck);
        };
        
      
        base.childOnCheckUncheck = function(event) {
        	var all = true
        	,	atleast1 = false;
        	
        	base.children.each(function() {
        		if(this.checked) {
        			if(all) {
        				all = true;
        			}
        			atleast1 = true;
        		} else {
        			all = false;
        		}
        	})
        	
        	if(!all && atleast1) {
        		base.$el.attr({"checked" : true}).css({"opacity" : 0.5})
        	}
        	else if(all) {
        		base.$el.attr({"checked" : true}).css({"opacity" : 1})
        	}
        	else {
        		base.$el.removeAttr("checked").css({"opacity" : 1})
        	}
        }
        
        base.parentOnCheckUncheck = function(event) {
			var el = event.target;
			
			if(el.checked)
				base.children.attr({"checked": true});
			else
				base.children.removeAttr("checked");
        }
        
        // Run initializer
        base.init();
    };
    
    $.multicheck.defaultOptions = {};
    
    $.fn.multicheck = function(options){
        return this.each(function(){
            (new $.multicheck(this, options));
        });
    };
    
    // This function breaks the chain, but returns
    // the multicheck if it has been attached to the object.
    $.fn.getmulticheck = function(){
        return this.data("multicheck");
    };
    
})(jQuery);
