define(["utils/utils","mvc/upload/upload-model","mvc/upload/upload-settings","mvc/ui/ui-popover","mvc/ui/ui-select"],function(a,b,c,d,e){return Backbone.View.extend({status_classes:{init:"upload-icon-button fa fa-trash-o",queued:"upload-icon fa fa-spinner fa-spin",running:"upload-icon fa fa-spinner fa-spin",success:"upload-icon-button fa fa-check",error:"upload-icon-button fa fa-exclamation-triangle"},settings:null,select_genome:null,select_extension:null,initialize:function(a,b){this.app=a;var c=this;this.model=b.model,this.setElement(this._template(b.model)),this.settings=new d.View({title:"Upload configuration",container:this.$("#settings"),placement:"bottom"});var f=this.app.select_genome.value();this.select_genome=new e.View({css:"upload-genome",onchange:function(a){c.model.set("genome",a),c.app.updateGenome(a,!0)},data:c.app.list_genomes,container:this.$("#genome"),value:f}),this.model.set("genome",f);var g=this.app.select_extension.value();this.select_extension=new e.View({css:"upload-extension",onchange:function(a){c.model.set("extension",a),c.app.updateExtension(a,!0)},data:c.app.list_extensions,container:this.$("#extension"),value:g}),this.model.set("extension",g),this.$("#symbol").on("click",function(){c._removeRow()}),this.$("#extension-info").on("click",function(a){c.app.showExtensionInfo({$el:$(a.target),title:c.select_extension.text(),extension:c.select_extension.value()})}).on("mousedown",function(a){a.preventDefault()}),this.$("#settings").on("click",function(){c._showSettings()}).on("mousedown",function(a){a.preventDefault()}),this.$("#text-content").on("keyup",function(a){c.model.set("url_paste",$(a.target).val()),c.model.set("file_size",$(a.target).val().length)}),this.model.on("change:percentage",function(){c._refreshPercentage()}),this.model.on("change:status",function(){c._refreshStatus()}),this.model.on("change:info",function(){c._refreshInfo()}),this.model.on("change:genome",function(){c._refreshGenome()}),this.model.on("change:extension",function(){c._refreshExtension()}),this.model.on("change:file_size",function(){c._refreshFileSize()}),this.model.on("remove",function(){c.remove()}),this.app.collection.on("reset",function(){c.remove()})},render:function(){var b=this.model.get("file_name"),c=this.model.get("file_size"),d=this.model.get("file_mode");this.$("#title").html(b),this.$("#size").html(a.bytesToString(c)),this.$("#mode").removeClass().addClass("upload-mode").addClass("text-primary"),"new"==d&&(this.$("#text").css({width:this.$el.width()-16+"px",top:this.$el.height()-8+"px"}).show(),this.$el.height(this.$el.height()-8+this.$("#text").height()+16),this.$("#mode").addClass("fa fa-pencil")),"local"==d&&this.$("#mode").addClass("fa fa-laptop"),"ftp"==d&&this.$("#mode").addClass("fa fa-code-fork")},remove:function(){this.select_genome.remove(),this.select_extension.remove(),Backbone.View.prototype.remove.apply(this)},_refreshExtension:function(){this.select_extension.value(this.model.get("extension"))},_refreshGenome:function(){this.select_genome.value(this.model.get("genome"))},_refreshInfo:function(){var a=this.model.get("info");a?this.$("#info").html("<strong>Failed: </strong>"+a).show():this.$("#info").hide()},_refreshPercentage:function(){var a=parseInt(this.model.get("percentage"));this.$(".progress-bar").css({width:a+"%"}),this.$("#percentage").html(100!=a?a+"%":"Adding to history...")},_refreshStatus:function(){var a=this.model.get("status");this.$("#symbol").removeClass().addClass(this.status_classes[a]),this.model.set("enabled","init"==a);var b=this.model.get("enabled");this.$("#text-content").attr("disabled",!b),b?(this.select_genome.enable(),this.select_extension.enable()):(this.select_genome.disable(),this.select_extension.disable()),"success"==a&&(this.$el.addClass("success"),this.$("#percentage").html("100%")),"error"==a&&(this.$el.addClass("danger"),this.$(".progress").remove())},_refreshFileSize:function(){var b=this.model.get("file_size");this.$("#size").html(a.bytesToString(b))},_removeRow:function(){var a=this.model.get("status");("init"==a||"success"==a||"error"==a)&&this.app.collection.remove(this.model)},_showSettings:function(){this.settings.visible?this.settings.hide():(this.settings.empty(),this.settings.append(new c(this).$el),this.settings.show())},_template:function(a){return'<tr id="upload-row-'+a.id+'" class="upload-row"><td><div class="upload-text-column"><div id="mode"/><div id="title" class="upload-title"/><div id="text" class="text"><div class="text-info">You can tell Galaxy to download data from web by entering URL in this box (one per line). You can also directly paste the contents of a file.</div><textarea id="text-content" class="text-content form-control"/></div></div></td><td><div id="size" class="upload-size"/></td><td><div id="extension" class="upload-extension" style="float: left;"/>&nbsp;&nbsp<div id="extension-info" class="upload-icon-button fa fa-search"/></td><td><div id="genome" class="upload-genome"/></td><td><div id="settings" class="upload-icon-button fa fa-gear"/></td><td><div id="info" class="upload-info"><div class="progress"><div class="progress-bar progress-bar-success"/><div id="percentage" class="percentage">0%</div></div></div></td><td><div id="symbol" class="'+this.status_classes.init+'"/></td></tr>'}})});
//# sourceMappingURL=../../../../maps/mvc/upload/default/default-row.js.map