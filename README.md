Picaso.js
=========

Introduction
------------

This gem lets you showcase an album from Google+ (previously Picasa Web Albums)
on your own website. 

Usage
-----
1. Find your Google+ user id and album id
  - Go to the album Google+
  - Click on the rss feed for the album
  - Extract user id and album id from the URL
  
Example:

    https://plus.google.com/photos/117489843558070583795/albums/5683232756186942865
  
For the above URL the number after "/photos/" is the user id 
(117489843558070583795) and the number after "/albums/" is the album id 
(5683232756186942865)
  
2. Create a div with an id to load images for example
```html
    <div id="album">
    </div>
```
3. Call Picaso.js in the format picaso(jQuerySelectorForDiv, userID, albumID);
```html
    <script>
      picaso("#album","117489843558070583795","5683232756186942865");
    </script>
```
4. Style your gallery. Each image has the class 'photo'. Example:
```css
   #album .photo {
     height: 200px;
     box-shadow: 4px 0 4px 0 grey;
     padding: 5px;
   }
```
Dependencies
------------

Uses jQuery

Contributions
-------------

I'll welcome any contributions to this project.
