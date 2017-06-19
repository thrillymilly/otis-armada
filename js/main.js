$(function ($) {

	console.log("HELLO WORLD");

	function horizontalScroll(direction) {
		var scrollableWidth = (widthColumn * numColumns) - $(window).width();
		var alreadyScrolled = scrollableWidth - (widthColumn * (currentColumn - 1));

		if (direction == "left" && alreadyScrolled < scrollableWidth) {
			positionColumns = positionColumns - widthColumn;
			currentColumn--;
		}
		else if ( direction == "right" && alreadyScrolled > 0) {
			positionColumns = positionColumns + widthColumn;
			scrollableWidth - widthColumn;
			currentColumn++;
		}
		$( ".page-content" ).animate({scrollLeft: positionColumns }, 400);
	}

	$(document).ready(function($) {

		// home arrow navigation
		if ( $(window).width() > 550 ) {
			// get total number of colums
			window.numColumns = $(".total-project").length;
			// get width of single column
			window.widthColumn = $(".total-project").outerWidth();
			// set current column to 1 on first load
			window.currentColumn = 1;
			// set current position to 0 on first load
			window.positionColumns = 0;

			$(".arrow-left").click(function(event) {
				event.preventDefault();
				horizontalScroll('left');
			});
			$(".arrow-right").click(function(event) {
				event.preventDefault();
				horizontalScroll('right');
			});
			// $(document).on("wheel", function(event) {
			// 	event.preventDefault();
			// 	horizontalScroll('left');
			// });
			// $(document).on("wheel", function(event) {
			// 	event.preventDefault();
			// 	horizontalScroll('right');
			// });
      $(document).on("swiperight", function(event) {
				event.preventDefault();
				horizontalScroll('left');
			});
			$(document).on("swipeleft", function(event) {
				event.preventDefault();
				horizontalScroll('right');
			});
		} else if ($(window).width() < 550) {
			window.numColumns = $(".project").length;
			window.widthColumn = $(".project").outerWidth();
			window.currentColumn = 1;
			window.positionColumns = 0;

			$(".arrow-left").click(function(event) {
				event.preventDefault();
				horizontalScroll('left');
			});
			$(".arrow-right").click(function(event) {
				event.preventDefault();
				horizontalScroll('right');
			});
      $(document).on("swiperight", function(event) {
				event.preventDefault();
				horizontalScroll('left');
			});
			$(document).on("swipeleft", function(event) {
				event.preventDefault();
				horizontalScroll('right');
			})
		}
		// keyboard navigation
		$(document.documentElement).keyup(function (event) {
			// handle cursor keys
			if (event.keyCode === 37) {
				// go left
				if ( $( ".page-content" ).length) {
					horizontalScroll('left');
				}
				else if ($( ".page-project" ).length) {
					window.location.href = $( ".arrow-left" )[0].href;
				}
			}
			else if (event.keyCode === 39) {
				// go right
				if ( $( ".page-home" ).length){
          horizontalScroll('right')
        }
				else if ($( ".page-project" ).length) {
          window.location.href = $( ".arrow-right" )[0].href;
        }
      };
		});
	});
});
