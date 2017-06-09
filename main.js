<!--
jQuery(function ($) {
<!--

	function horizontalScroll(direction) {
		var scrollableWidth = (widthColumn*nrColumns)-$(window).width();
		var alreadyScrolled = scrollableWidth-(widthColumn*(currentColumn-1));

		if (direction=="left" && alreadyScrolled<scrollableWidth) {
			positionColumns = positionColumns - widthColumn;
			currentColumn--;
		}
		else if (direction=="right" && alreadyScrolled>0) {
			positionColumns = positionColumns + widthColumn;
			scrollableWidth - widthColumn;
			currentColumn++;
		}
		$( "#content" ).animate({
			scrollLeft: positionColumns
		}, 300);
	}

	$(window).resize(function() {
		/////////////////////////////////////////
		// home adjustments

		if ( $("#content").is(":visible")) {
			// first reset styles to original state from stylesheet
			$(".page-home").attr('style','');
			$(".btn-overlay").attr('style','');
			$(".scroll-container").attr('style','');
			if ( $( ".page-home" ).length && $(document).width() > 767) {
				// adjust columnheights to viewport
				$(".page-home").height($(window).height()-$("#header").height());
				$(".project").each(function(){
					$(".btn-overlay",this).height($("article",this).height()+($(".scroll-container", this).innerHeight()-$(".scroll-container", this).height()));
					$(".scroll-container", this).height($(".page-home").height()-($(".scroll-container", this).innerHeight()-$(".scroll-container", this).height()));
				});
			}
		}
	});

	$(window).load(function() {
		/////////////////////////////////////////
		$(window).resize();
	});
//-->


	// generate links for social buttons
	$(document).ready(function(){
		//Get the URL of this page and encode it for the url
		var share_url = encodeURIComponent(window.location);
		//Get the title of this page and encode it for the url
		var share_title  = encodeURIComponent(document.title);
		//Get the URL of the homepage and encode it for the url
		//var share_source  = encodeURIComponent(document.domain);

		//function create_share_btns(){
			// facebook <a href="#">&gt;</a>
			$("a.btn_facebook").attr("href","http://www.facebook.com/share.php?u="+share_url+"&amp;title="+share_title);
			//document.write('<a href="http://www.facebook.com/share.php?u='+share_url+'&amp;title='+share_title+'" class="social">Ã„â€”</a>');
			// twitter
			$("a.btn_twitter").attr("href","http://twitter.com/home?status="+share_title+"+"+share_url);
			//document.write('<a href="http://twitter.com/home?status='+share_title+'+'+share_url+'" class="social">Ã„â€¢</a>');
			// linkedin
			//document.write('<a href="http://www.linkedin.com/shareArticle?mini=true&url='+share_url+'&amp;title='+share_title+'&amp;source='+share_source+'" class="social">Ã„ </a>');
		//}

		// Bind a new event to link
		$("a.btn_social").click(function(e){
			//Tell browser not to follow that link
			e.preventDefault();
			// Get URL
			var social_url = $(this).attr("href");
			//Trigger a new window, in the middle of the page
			window.open(social_url + '&', 'sharewindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

		});
	});





});
//-->
