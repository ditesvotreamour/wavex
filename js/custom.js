jQuery(function(e){"use strict";jQuery(".about-player").appear(),jQuery(document.body).on("appear",".about-player",function(e,a){var u,t;jQuery(this).each(function(){jQuery(this).data("delay")?(u=jQuery(this).data("delay"),t=u):t=0,jQuery(this).delay(t).queue(function(){jQuery(this).addClass("animated").clearQueue()})})}),jQuery(".animate").appear(),jQuery(document.body).on("appear",".animate",function(e,a){var u,t;jQuery(this).each(function(){jQuery(this).data("delay")?(u=jQuery(this).data("delay"),t=u):t=0,jQuery(this).delay(t).queue(function(){jQuery(this).addClass("animated").clearQueue()})})})}),jQuery;