/**
 * mangafox.js
 *
 * Version  1.0
 * Date     October 2013
 * Author   Marcus Mo (marcusmo88@gmail.com) 
 *
 * Bookmarklet to load all images in current chapter
 * into current page for single page viewing.
 * Adapts chapter navigation at top and
 * bottom of page as well.
 */

javascript:(function(w,d) {
  "use strict";

  // Function 1. Prefix number with leading zeros 
  function addzeros( num, size ) {
    // Convert number into string
    var s = num + "";

    // Pad out string
    while( s.length < size ) { s = "0" + s; }

    // Return string
    return s;
  }

  // Function 2: Remove leading zeros from string
  function removezeros( num ) {
    return ( parseInt(num) === 0 ) ? 0 : parseInt( String(num).replace( /^0+/, '' ) );
  }
  
  // Continue only if total_pages variable is defined in DOM
  if( typeof total_pages === 'undefined' || typeof current_page === 'undefined' ) {
  
    alert('Variable total_pages or current_page is not defined!');
  
  } else {

    // Get reference to #viewer
    var v     = d.getElementById('viewer'),                 // Reference to #viewer
        s     = d.getElementById('image').src,              // Get current img.src
        s_pre = s.match(/.+[A-Za-z_-](?=\d+\.jpg|png)/),    // Suffix
        s_num = s.match(/\d+(?=.jpg|png)/),                 // Current img number
        s_suf = s.match(/\.jpg|png$/),                      // Suffix
        current, 
        new_image;

    // Load in each new image sequentially into #viewer
    for( current = removezeros( s_num ) + 1; current <= total_pages; current++ ) {
      // Create new image element
      new_image = d.createElement('img');

      // Build new image source url
      new_image.src = s_pre + addzeros( current, 3 ) + s_suf;

      // Append to #viewer
      v.appendChild( new_image );
    }

    // Add navigation elements back in order
    // previous_chapter() and next_chapter() defined in page.min.js
    var nav_html = '<a href="javascript:void(0);" onclick="previous_chapter()" class="btn prev_page"><span></span>previous page</a>'
                 +   '<select id="top_chapter_list" style="width:350px;float:left;" onchange="change_chapter(this)">' 
                 +     d.getElementById('top_chapter_list').innerHTML
                 +   '</select>'
                 + '<a href="javascript:void(0);" onclick="next_chapter()" class="btn next_page"><span></span>next page</a>';
    
    d.getElementById('top_bar').innerHTML = nav_html;
    d.getElementById('bottom_bar').innerHTML = nav_html;
  }

})(window,document);
