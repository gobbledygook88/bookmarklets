/**
 * programminglanguageorpokemon.js
 *
 * Version  1.0
 * Date     October 2013
 * Author   Marcus Mo (marcusmo88@gmail.com) 
 *
 * Bookmarklet to display answer while
 * playing the game.
 */

javascript:(function($) {
  "use strict";

  // Function 1: Checks whether an subject is a
  // pokemon or a programming langauge
  function isA(el,t) { 
    if( $.inArray(t,database.pokemon) != -1 ) {
      el.append(' is a Pokemon') 
    } else {
      el.append(' is a Programming Language')
    }
  }

  // Function 2: Query DOM for newly created elements
  function requery() {
    var subjectEl = $('#fight').find('.subject');
    
    return {
      el: subjectEl,
      t:  subjectEl.html()
    }
  }
  
  // Function 3: Configures click events
  function rebind() { 
    var data;

    // Choice clicks
    $('.choice').on('click',function() {
      data = requery();
     
      // Check subject
      isA( data.el, data.t );

      // Must call rebind again since the DOM
      // has been erased and appended to again
      rebind();
    });
   
    // End of game, replay button
    $('.again').on('click',function() {
      data = requery();
      rebind();
      isA( data.el, data.t );
    });
  }
  
  // Initialisation function calls
  var data = requery();
  rebind();
  isA( data.el, data.t );

})(jQuery);
