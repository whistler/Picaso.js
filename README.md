Picaso.js
=========

Introduction
------------

This gem lets you showcase an album from Picasa Web Albums on your own website. 
Work is underway to make it look pretty.

Settings
--------

Picaso.js can displays one complete album on your web site, to configure it to use 
it with your album, go to the album on Picasa Web Albums and click on the rss feed
for the album, the url would look something like this:

    https://picasaweb.google.com/data/feed/base/user/117489843558070583795/albumid/5683232756186942865?alt=json&kind=photo&hl=en_US
    
The number after '/user/' is your user id and the number after '/albumid/' is, you figure
it out right your album id. Just change the following two lines to your own user and album. 

    var userId = "your_user_id";
    var albumId = "your_album_id";

Dependencies
------------

Uses jQuery

Contributions
-------------

I'll welcome any contributions to this project.