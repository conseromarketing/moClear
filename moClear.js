/**
* Author: uienvy.com
* Plugin Site: http://uienvy.com/dev/plugins#moClear
* Date: 4/2/12
* Time: 3:04 PM
* Add clickable clear elements to input fields
* @options - btnClass: dynamically created clearing button class. Default: moClear_btn
* @use: jQuery("input").moClear() and add the CSS for your btnClass. Example to follow below.
 *
 * btnClass CSS Styling Instructions
 * Note: absolute positioning with 8px top and right positioning are the default positioning.
 * To override these stylings please add the !important operator after these CSS declarations
 *
 * btnClass CSS Styling Example:
     .moClear_btn {
         padding: 6px;
         background: url(path/to/image.png);
         position: fixed !important;
         top: 10px !important;
         right: 10px !important;
     }
 *
 *
*
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* */
(function($){
    jQuery.fn.moClear = function(options){

    // Default settings
        defaults = {
            btnClass: 'moClear_btn'
        }

    // Extend default settings if options exist
        options = $.extend(defaults, options);

    // Kickoff the plugin code
        return this.each(function(i, e){

    // Set plugin variables
            var $this = $(this),
                clearEl = '<a style="display:none;position:absolute;top:8px;right:8px;" class="'+defaults.btnClass+'"></a>',
                dVal = $(this).attr('placeholder');

    // Wrap input with wrapper
            $this.wrap('<div style="display:inline-block;position:relative;"></div>');

    // Append a clearing element
            $this.after(clearEl);

    // On focus show clearing element
            $this.focus(function(){
                if( $this.val() != '' ){
                    $this.parent().find('.'+defaults.btnClass).fadeIn(150);
                }
            });

    // On blur hide clearing element
            $this.blur(function(){
                if( $this.val() != '' ){
                    $this.parent().find('.'+defaults.btnClass).fadeOut(150);
                }
            });

    // Handle keyUp on input element
            $this.keyup(function(){

                if( $this.val() != '' ){

                    $this.parent().find('.'+defaults.btnClass).fadeIn(150);

                } else if( $this.val() === '' ) {

                    $this.parent().find('.'+defaults.btnClass).fadeOut(150);

                }
            });

    // btnClass Click handler
            $this.parent().find('.'+defaults.btnClass).click(function(){
                $(this).hide();
                $this.val('');
                $this.focus();
            });

        });

    };
})(jQuery);