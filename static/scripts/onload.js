define("onload",["layout/panel","layout/modal","utils/async-save-text","ui/popupmenu","ui/autocom_tagging","mvc/tours"],function(e,t,n,a,o,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){function a(e){var t={placeholder:"Click to select",closeOnSelect:!$(e).is("[MULTIPLE]"),dropdownAutoWidth:!0,containerCssClass:"select2-minwidth"};return e.select2(t)}jQuery.fn.select2&&(void 0===e&&(e=20),void 0===t&&(t=3e3),(n=n||$("select")).each(function(){var n=$(this).not("[multiple]"),o=n.find("option").length;o<e||o>t||n.hasClass("no-autocomplete")||a(n)}))}function u(){$("select[refresh_on_change='true']").off("change").change(function(){var e=$(this),t=e.val(),n=e.attr("refresh_on_change_values");if(n){n=n.split(",");var a=e.attr("last_selected_value");if(-1===$.inArray(t,n)&&-1===$.inArray(a,n))return}$(window).trigger("refresh_on_change"),$(document).trigger("convert_to_values"),e.get(0).form.submit()}),$(":checkbox[refresh_on_change='true']").off("click").click(function(){var e=$(this),t=e.val(),n=e.attr("refresh_on_change_values");if(n){n=n.split(",");var a=e.attr("last_selected_value");if(-1===$.inArray(t,n)&&-1===$.inArray(a,n))return}$(window).trigger("refresh_on_change"),e.get(0).form.submit()}),$("a[confirm]").off("click").click(function(){return confirm($(this).attr("confirm"))})}var l=r(e),s=r(t),f=r(n),d=r(a),p=r(o),h=r(i);window.jQuery=jQuery,window.$=jQuery,window._=_,window.Backbone=Backbone,window.panels=l.default,_.extend(window,s.default),window.async_save_text=f.default,window.make_popupmenu=d.default.make_popupmenu,window.make_popup_menus=d.default.make_popup_menus,window.init_tag_click_function=p.default,window.init_refresh_on_change=u,$(document).ready(function(){function e(){Galaxy.config?Galaxy.config.enable_webhooks&&$.getJSON(Galaxy.root+"api/webhooks/onload/all",function(e){_.each(e,function(e){e.activate&&e.script&&($("<script/>",{type:"text/javascript"}).text(e.script).appendTo("head"),$("<style/>",{type:"text/css"}).text(e.styles).appendTo("head"))})}):setTimeout(e,100)}u(),$.fn.tooltip&&($(".unified-panel-header [title]").tooltip({placement:"bottom"}),$("[title]").tooltip()),d.default.make_popup_menus(),c(20,1500),$("a").click(function(){var e=$(this),t=window.parent.frames&&window.parent.frames.galaxy_main;if("galaxy_main"==e.attr("target")&&!t){var n=e.attr("href");-1==n.indexOf("?")?n+="?":n+="&",n+="use_panels=True",e.attr("href",n),e.attr("target","_self")}return e}),h.default.activeGalaxyTourRunner(),e()})});