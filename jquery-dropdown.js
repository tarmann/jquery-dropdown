;(function ( $, window, document, undefined ) {

    var pluginName = "dropdown",
        defaults = {
          expandedClass: 'expanded',
          // options: click, hover
          toggleOn: 'click', 
          closeOnBlur: true,
          
          elementLabelClass: '.sdui-dropdown-label',
          elementContentClass: '.sdui-dropdown-content',

          // callback
          open: function(){},
          close: function(){}
        };

    function Plugin ( element, options ) {
        this.element = element;
        
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
          this.initContentIndex();
          this.bindEvents();
        },

        initContentIndex: function(){
          this.$contentElement = $(this.settings.elementContentClass, this.element);
          this.$contentElement.attr('data-dropdown-index', this.$contentElement.css('z-index'));
        },

        increaseContentIndex: function(){
          // TODO: save previous state
          this.$contentElement.css('z-index', parseInt( this.$contentElement.css('z-index') ) + 1);
        },

        restoreContentIndex: function(){
          // TODO: restore
        },

        bindEvents: function(){
          var self = this;

          switch (this.settings.toggleOn) {
            case 'click':
              $(this.settings.elementLabelClass, this.element).click( function(e){
                self.toggle(e);
              });
              
              // on blur dropdown
              $('html').click(function(e){
                if(! $.contains(self.element, e.target)){
                  self.restoreContentIndex();

                  if( self.settings.closeOnBlur ){
                    $( self.element ).removeClass( self.settings.expandedClass );
                  }
                }
              });              
            break;

            case 'hover':
              $(this.element).hover(function(e){ self.toggle(e);
              }, function(e){ self.toggle(e); });
            break;
          }          
        },

        stopPropagation: function(e){
          e.stopPropagation();
        },

        toggle: function(e){
          this.increaseContentIndex();
          this.toggleElementClass(e);
          this.callback();
        },

        toggleElementClass: function(e){
            $( this.element ).toggleClass( this.settings.expandedClass );
            // TODO: on close, restore z-index
        },

        callback: function(){
            if($( this.element) .hasClass( this.settings.expandedClass )){
                this.settings.open( this.element );
            } else {
                this.settings.close( this.element );
            }
        }        
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );