'use strict';

Array.prototype.slice.call(document.getElementsByTagName('select')).forEach(function(el){
  jQuery(el).select2();
});