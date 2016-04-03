
var instaSearch = angular.module('root', []);
instaSearch.controller('index', [
    '$scope',
    function ($scope) {
        $scope.search;
        var tag = $scope.search;
        var loadButton = document.getElementById('load-more');
        function loadInstagram(tagName) {
            var feed = new Instafeed({
                get: 'tagged',
                tagName: tagName,
                accessToken: '6678174.467ede5.205a03ebc4b74d4082823781c3149575',
                target: 'instafeed',
                sortBy: 'none',
                limit: 33,
                resolution: 'standard_resolution',
                template: '<a href="{{link}}"><img src="{{image}}" /><div class="timestamp">{{model.created_time}}</div><div class="info"><p class="location"><i class="icon-location"></i>{{location}}</p><p><i class="icon-comment"></i>{{caption}}</p><br><ul><li class="icon-heart">{{likes}} likes<li class="icon-chat">{{comments}} comments</div></ul></div></a>',
                filter: function(image) {

    var date = new Date(image.created_time*1000);

    d = date.getDate();
    m = date.getMonth();
/*    y = date.getFullYear();*/

    var month_names = new Array ( );
    month_names[month_names.length] = "Jan";
    month_names[month_names.length] = "Feb";
    month_names[month_names.length] = "Mar";
    month_names[month_names.length] = "Apr";
    month_names[month_names.length] = "May";
    month_names[month_names.length] = "Jun";
    month_names[month_names.length] = "Jul";
    month_names[month_names.length] = "Aug";
    month_names[month_names.length] = "Sep";
    month_names[month_names.length] = "Oct";
    month_names[month_names.length] = "Nov";
    month_names[month_names.length] = "Dec";

    var thetime = d + ' ' + month_names[m] + ' ';

    image.created_time = thetime;

    return true;
  }
            }).run();
        };

       
        loadInstagram('nycsubwaymusic');
        function clearFeed() {
            document.getElementById('instafeed').innerHTML = '';
        };


        $scope.searchTag = function () {
            clearFeed();
            tag = $scope.search;
            loadInstagram(tag);
        };

        /*data.enter().append(function(d) { return d })
        .style("opacity",0).transition().duration(1000).style("opacity",1)
*/
        $scope.clear = function () {
            $scope.search = '';
            document.getElementById('search').focus();
        };

        instaSearch.directive('ngEnter', function () {
            return function ($scope, element, attrs) {
                element.bind('keydown keypress', function (event) {
                    console.log('keypress')
                    if (event.which === 13) {
                        $scope.searchTag();
                        event.preventDefault();
                        return false;  
                    }
                });
            };
        });
    }
]);
      
   

/*SORT BY*///////////

$('#popular').click(function() {
resort('none');
});

$('#recent').click(function() {
resort('most-recent');
});

$('#like').click(function() {
resort('most-liked');
});

$('#comment').click(function() {
resort('most-commented');
});

function resort(sort) {

$('#instafeed a').remove();

    var instaFeed = new Instafeed({

    get: 'tagged',
    tagName: 'subwaymusic',
    userId: 6678174,
    accessToken: '6678174.467ede5.205a03ebc4b74d4082823781c3149575',
    target: 'instafeed',
    sortBy: sort,
    limit: 32,
    resolution: 'standard_resolution',
    template: '<a href="{{link}}"><img src="{{image}}" /><div class="timestamp">{{model.created_time}}</div><div class="info"><p class="location"><i class="icon-location"></i>{{location}}</p><p><i class="icon-comment"></i>{{caption}}</p><br><ul><li class="icon-heart">{{likes}} likes<li class="icon-chat">{{comments}} comments</div></ul></div></a>',
    filter: function(image)
    {

     var date = new Date(image.created_time*1000);

    d = date.getDate();
    m = date.getMonth();
/*    y = date.getFullYear();*/

    var month_names = new Array ( );
    month_names[month_names.length] = "Jan";
    month_names[month_names.length] = "Feb";
    month_names[month_names.length] = "Mar";
    month_names[month_names.length] = "Apr";
    month_names[month_names.length] = "May";
    month_names[month_names.length] = "Jun";
    month_names[month_names.length] = "Jul";
    month_names[month_names.length] = "Aug";
    month_names[month_names.length] = "Sep";
    month_names[month_names.length] = "Oct";
    month_names[month_names.length] = "Nov";
    month_names[month_names.length] = "Dec";

    var thetime = d + ' ' + month_names[m] + ' ';

    image.created_time = thetime;

    return true;
  }


}).run();

$.fn.extend({
  matchHeight: function(data){
    var maxHeight = 0;
    $(this).each(function() {
       maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });
   $(this).height(maxHeight);
  }
});

}


/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/
/**//**//**//**//**//**//**//**//**//**//**//**/
$(window).load( function() {

  $(".ninja-btn, .panel-overlay, .panel li a").click( function() {
    $(".ninja-btn, .panel-overlay, .panel").toggleClass("active");
    /* Check panel overlay */
    if ($(".panel-overlay").hasClass("active")) {
      $(".panel-overlay").fadeIn();
    } else {
      $(".panel-overlay").fadeOut();
    }
  }); 
  
});


$(window).on("load resize", function() {
  var menuHeightOffset = $(".panel").find("ul").height() /2;

  $(".left-off-canvas-menu").find("ul").css({
    "margin-top": -menuHeightOffset
  });
});

/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/
/**//**//**//**//**//**//**//**//**//**//**//**/






