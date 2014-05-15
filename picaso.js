function picaso(domElement, userId, albumId){
  $(document).ready(function() {  
    var userId = userId || "117489843558070583795";
    var albumId = albumId || "5683232756186942865";
    var domElement = domElement || "#album";
  
    var feed = "https://picasaweb.google.com/data/feed/base/user/" + userId + "/albumid/" + albumId + "?alt=json";
    var response = jQuery.ajax({
      url: feed,
      success: function() {
        var album = eval('(' + response.responseText + ')');
        for (entry in album.feed.entry) {
          $(domElement).append("<img class='photo' src='"+ album.feed.entry[entry].media$group.media$thumbnail[2].url + "'/>");
        }
      }
    });

  }); 
}