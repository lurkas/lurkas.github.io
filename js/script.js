/*var instaFeed = new Instafeed({
    get: 'tagged',
    tagName: 'nycsubwaymusic',
    userId: 6678174,
    accessToken: '6678174.467ede5.205a03ebc4b74d4082823781c3149575',
    target: 'instafeed',
    sortBy: 'most-liked',
    limit: 32,
    resolution: 'standard_resolution',
    template: '<a href="{{link}}"><img src="{{image}}" /><div id="filter">{{model.filter}}</div><div class="info"><p class="location"><i class="icon-location"></i>{{location}}</p><p><i class="icon-comment"></i>{{caption}}</p><br><ul><li class="icon-heart">{{likes}} likes<li class="icon-chat">{{comments}} comments<li class="timestamp">{{model.created_time}}</div></ul></div></a>',
    filter: function(image)
    {

    var date = new Date(image.created_time*1000);

    d = date.getDate();
    m = date.getMonth();
    y = date.getFullYear();

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

    var thetime = d + ' ' + month_names[m] + ' ' + y;

    image.created_time = thetime;

    return true;
  }


}).run();

$.fn.extend({
    matchHeight: function (data) {
        var maxHeight = 0;
        $(this).each(function () {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });
        $(this).height(maxHeight);
    }
});


*/


//when user clicks on one of the neighborhoods in #filter,
//photos will filter based on that neighborhood selected
$("ul").on("change", function() {
	// Find out what the user selected and save to a variable
	var selectedLi = $("ul").val();

	// if selectedLocation = default
	if (selectedLi === 'like') {
		// Fade in all thumbnails
		$("a").fadeIn(350);
	// else
	} else {
		$("a").fadeOut(350, function () {
			// Show all thumbnails with the corresponding class
			$('#f-' + selectedLi).fadeIn(350);
		});
	}
});
