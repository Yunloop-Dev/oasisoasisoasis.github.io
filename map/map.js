<script>
	var $ = (jQuery),
		ggMap;
ymaps.ready(function() {
	openCity();
	openCopmaniesByType();
	if ($(window).innerWidth() > 767) {
		init();
		centerCity();
		centerPlace();
	} else {
		openCloseMobileMenu();
	}
});

function init() {
	var url = Drupal.settings.basePath + 'requests/ajax';
	ggMap = new ymaps.Map('map', {
		center: [62.6363139498408, 76.47798899609371],
		zoom: 3,
		controls: ['zoomControl']
	});
	$.ajax({
		type: "POST",
		url: url,
		data: '',
		success: function(data) {
			for (var i = 0, l = data.length; i < l; i++) {
				//makeClaster(createGeoobjects(data[i]));
				makeCollection(data[i]);
			}
		},
		dataType: "json"
	});

	function makeCollection(group) {
		var collection = new ymaps.GeoObjectCollection({}, {
			preset: group.style
		});
		ggMap.geoObjects.add(collection);
		for (var j = 0, m = group.items.length; j < m; j++) {
			createGeoobjectsForCollection(group.items[j], collection);
		}
	}

	function createGeoobjectsForCollection(item, collection) {
		var geoObject = new ymaps.Placemark(item.center, {
			hintContent: item.name,
			balloonContentHeader: item.name,
			balloonContentBody: item.bodytext
		});
		collection.add(geoObject);
	}
}

function centerCity() {
	$(".city").on("click", function() {
		var coordinates = [
			$(this).attr("data-city-lat"),
			$(this).attr("data-city-lon")
		];
		ggMap.setCenter(coordinates, 10);
	})
}

function centerPlace() {
	$(".adress").on("click", function() {
		var coordinates = [
			$(this).attr("data-place-lat"),
			$(this).attr("data-place-lon")
		];
		ggMap.setCenter(coordinates, 16);
	})
}

function openCity() {
	$(".city").on("click", function() {
		if ($(".active-city").prev().attr("data-city-id") !== $(this).attr("data-city-id")) {
			$(".active-city").slideUp().removeClass("active-city");
			$(this).next().slideDown().addClass("active-city");
		} else {
			$(this).next().slideUp().removeClass("active-city");
			ggMap.setCenter([62.6363139498408, 76.47798899609371], 3);
		}
		setTimeout(function() {
			$("#cities-wrap").scrollbar('resize');
		}, 500);
	})
}

function openCopmaniesByType() {
	$(".regular-header span").on("click", function() {
		var filterValue = $(this).attr("data-type-companies");
		$(this).toggleClass('active-button');
		$(this).parents(".regular-wrap").find(".place-item[data-company-type='" + filterValue + "']").parent().toggleClass('active-type-company');
		setTimeout(function() {
			$("#cities-wrap").scrollbar('resize');
		}, 500);
	})
}

function openCloseMobileMenu() {
	$(".mobile-menu").on("click", function() {
		var changeText = $(this).find("b");
		if ($(changeText).html() == "Открыть") {
			$("#navigation").animate({
				"top": "0"
			}, 500);
			$(changeText).html("Закрыть");
		} else {
			$("#navigation").animate({
				"top": "-185px"
			}, 500);
			$(changeText).html("Открыть");
		}
	})
}
$(window).on("ready resize", function() {
	var windowWidth = $(window).innerWidth();
	if (windowWidth > 767) {
		$("#map").css({
			width: (windowWidth - 321) + "px"
		});
		$("#cities-wrap").scrollbar();
	} else {
		$("#cities-wrap").scrollbar("destroy");
	}
})
$(document).on("ready", function() {
	$("a[href^='#']").each(function() {
		$(this).on("click", function(e) {
			var target = $(this).attr("href");
			$('html,body').stop().animate({
				scrollTop: $("" + target).offset().top
			}, 1000);
			e.preventDefault();
		});
	});
	$(".city-wrap").each(function() {
		var retailPlaces = $(this).find(".place-item[data-company-type='retail']"),
			calianPlaces = $(this).find(".place-item[data-company-type='try']");
		if (retailPlaces.length < 2) {
			$(this).find("span[data-type-companies='retail']").hide();
			if (retailPlaces.length > 0) {
				$(retailPlaces).each(function() {
					$(this).parent().addClass("active-type-company")
				});
			}
		}
		if (calianPlaces.length < 2) {
			$(this).find("span[data-type-companies='try']").hide();
			if (calianPlaces.length > 0) {
				$(calianPlaces).each(function() {
					$(this).parent().addClass("active-type-company")
				});
			}
		}
	})
}) </script>
