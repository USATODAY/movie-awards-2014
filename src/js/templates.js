define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app-view.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1 class="iapp-page-header">2014 Oscar nominated (and not-so-nominated) Movie Guide</h1>\n<p class="iapp-page-chatter">Oscar season is officially here, and if you’re like some of us wannabe movie buffs, you may have let a few of 2014’s most notable movies slip through the cracks. USA TODAY\'s 2014 Movie Guide to the rescue. Just click the filters and get as specific as you want. Who knows? Your new favorite flick may be out there and you didn’t even know it. If you want to stick to award-worthy films, click “Oscar nominated.”</p>\n<p class="time-stamp"></p>\n<div class="iapp-filters-wrap"></div> \n<div id="card-wrap"></div>\n<p class="iapp-credits"><strong>Credits:</strong> Ryan Carey-Mahoney, Mitchell Thorson, Lori Grisham, USA TODAY</p>\n\n<div class="modal-overlay"></div>';

}
return __p
};

this["JST"]["card-back.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '  <div class="card card-detail">\n\n    <div class="close-card"></div>\n\n  <div class="iapp-vid-wrap">\n    \n    \n\n    ';
 if(brightcoveid !== "") { ;
__p += '\n    <!-- Start of Brightcove Player -->\n\n    <div style="display:none">\n\n    </div>\n    <!--\n    By use of this code snippet, I agree to the Brightcove Publisher T and C \n    found at https://accounts.brightcove.com/en/terms-and-conditions/. \n    -->\n\n    \n\n    <object id="myExperience' +
((__t = (brightcoveid)) == null ? '' : __t) +
'" class="BrightcoveExperience">\n      <param name="bgcolor" value="#FFFFFF" />\n      <param name="width" value="640" />\n      <param name="height" value="390" />\n      <param name="playerID" value="3987831214001" />\n      <param name="playerKey" value="AQ~~,AAAABvaL8JE~,ufBHq_I6FnymJRV25NtXQUepW01Qlwaa" />\n      <param name="isSlim" value="true" />\n      <param name="dynamicStreaming" value="true" />\n       <param name="forceHTML" value="true" />\n        \n      <param name="@videoPlayer" value="' +
((__t = (brightcoveid)) == null ? '' : __t) +
'" />\n    </object>\n\n    <!-- \n    This script tag will cause the Brightcove Players defined above it to be created as soon\n    as the line is read by the browser. If you wish to have the player instantiated only after\n    the rest of the HTML is processed and the page load is complete, remove the line.\n    -->\n    <script type="text/javascript">brightcove.createExperiences();</script>\n\n    <!-- End of Brightcove Player -->​\n\n    ';
 } else { ;
__p += '\n\n    <iframe width="100%" height="100%" src="' +
((__t = ( trailerlink )) == null ? '' : __t) +
'" frameborder="0" allowfullscreen></iframe>\n\n    ';
};
__p += '\n  </div>\n\n    <h2 class="card-back-header">' +
((__t = ( movietitle )) == null ? '' : __t) +
' </h2>\n    <p class="iapp-summary">' +
((__t = ( summary )) == null ? '' : __t) +
'</p>\n\n    ';
 if (usatodayreview.length > 0) { ;
__p += '\n    \n    <a href="' +
((__t = ( usatodayreview )) == null ? '' : __t) +
'" class="read-more-link" target="_blank">Read USA TODAY\'s review</a>\n\n    ';
 } ;
__p += '\n    <div id="social">\n\n      ';
 
      var encodedURL = encodeURIComponent(window.location.href);
      var redirectUrl = "http://www.gannett-cdn.com/experiments/usatoday/_common/_dialogs/fb-share-done.html";
      var encodedURL2 = encodeURI(window.location.href + "/%23" + rowNumber);
      var encodedStr = encodeURIComponent("You should probably watch… " + movietitle + ", filtered just for you by our editors #2014movieguide");
      var encodedTitle = encodeURIComponent("2014 Oscar-nominated (and not-so-nominated) Movie Guide");
      var encodedQuestion = encodeURIComponent(movietitle);
      var fbRedirectUrl = encodeURIComponent("http://www.gannett-cdn.com/usatoday/_common/_dialogs/fb-share-done.html");

      var tweetUrl = "https://twitter.com/intent/tweet?url=" + encodedURL + "&text=" + encodedStr; 
      var fbUrl = "javascript: var sTop=window.screen.height/2-(218);var sLeft=window.screen.width/2-(313);window.open('https://www.facebook.com/dialog/feed?display=popup&app_id=215046668549694&link=" + encodedURL2 + "&picture=" + basepath + "fb-post.jpg&name=" + encodedTitle + "&description=" + encodedQuestion + "&redirect_uri=http://www.gannett-cdn.com/usatoday/_common/_dialogs/fb-share-done.html','sharer','toolbar=0,status=0,width=580,height=400,top='+sTop+',left='+sLeft);Analytics.click('Facebook share');void(0);";

      var fb2 = "javascript: var sTop=window.screen.height/2-(218);var sLeft=window.screen.width/2-(313);window.open('https://www.facebook.com/dialog/feed?display=popup&app_id=215046668549694&link=" + encodedURL2 + "&picture=" + basepath + "fb-post.jpg&name=" + encodedTitle +"&description=" + "Movie guide" + "&redirect_uri="+ window.location.href + "','sharer','toolbar=0,status=0,width=580,height=400,top='+sTop+',left='+sLeft);Analytics.click('Facebook share');void(0);";


      var emailURL = "mailto:?body=" + encodedQuestion +  "%0d%0d" + encodedURL +"&subject=" + encodedTitle;
      ;
__p += '\n    \n      <a class="twitter-share" href="' +
((__t = ( tweetUrl )) == null ? '' : __t) +
'" class=\'social-link\' id=\'twitter-share\'> <img src=\'http://www.gannett-cdn.com/experiments/usatoday/2014/10/ebola-questions/img/twitter.svg\' alt="twitter" class="social-icon"></a>\n      ';
 if (false) { ;
__p += '\n      <a class="facebook-share" href="';
 print("https://www.facebook.com/dialog/feed?display=popup&app_id=215046668549694&link=" + encodedURL2 + "&picture=" + basepath + "fb-post.jpg&name=" + encodedTitle +"&description=" + encodedQuestion + "&redirect_uri=" + fbRedirectUrl);
__p += '"><img src=\'http://www.gannett-cdn.com/experiments/usatoday/2014/10/ebola-questions/img/fb.svg\' alt="facebook" class="social-icon"></a>\n\n      ';
 };
__p += '\n      <a href="' +
((__t = ( emailURL )) == null ? '' : __t) +
'" target="sharer" class="social-link" id="email-share"><img src="http://www.gannett-cdn.com/experiments/usatoday/2014/10/ebola-questions/img/email.svg" alt="email" class="social-icon">\n        </a>\n    </div>\n  </div>';

}
return __p
};

this["JST"]["card-front.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '   <div class="category-bar">\n  \n   </div>\n   <div class="title-overlay"><h2>' +
((__t = ( movietitle )) == null ? '' : __t) +
'</h2></div>\n  <img class="cover-img" src="';
 print(basepath + photoname) ;
__p += '" alt="' +
((__t = ( movietitle)) == null ? '' : __t) +
'">\n';

}
return __p
};

this["JST"]["tags.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(tags, function(tag) {
  var tagClass;
    tag == ":(" ? tagClass="sad" : tagClass = tag.toLowerCase().replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g,"").replace(/\s+/g, "-");
    
  ;
__p += '\n\n<div class="iapp-filter-button" data-filter="' +
((__t = ( tagClass )) == null ? '' : __t) +
'">' +
((__t = ( tag )) == null ? '' : __t) +
'</div>\n\n\n';
 }); ;
__p += '\n\n<div class="iapp-filter-button-clear">Clear Filters</div>';

}
return __p
};

  return this["JST"];

});