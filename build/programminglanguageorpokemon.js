javascript:(function(c){"use strict";function b(a,b){-1!=c.inArray(b,database.pokemon)?a.append(" is a Pokemon"):a.append(" is a Programming Language")}function d(){var a=c("#fight").find(".subject");return{el:a,t:a.html()}}function e(){var a;c(".choice").on("click",function(){a=d();b(a.el,a.t);e()});c(".again").on("click",function(){a=d();e();b(a.el,a.t)})}var f=d();e();b(f.el,f.t)})(jQuery);
