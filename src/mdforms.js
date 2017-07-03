/**
 *  Nette jQuery skeleton extensions
 *  (c) Radovan Kepak
 *
 *  @author Radovan Kepák <kepak@atlascon.cz>
 *  @depends nette.ajax.js
 *------------------------------------------------------------------------------------------*/

if (!$.nette)
	throw 'nette.skeleton.js requires nette.ajax.js for proper work';

$.nette.ext('custom.input', {
	init: function () {
		this.ext('snippets').after($.proxy(function ($el) {
			this.setup($el);
		}, this));

		this.setup(document.body);
	}
}, {
	/** Find all classes, setup them */
	setup: function (container) {
		$(container).find('div.material > input.material:not([type=file]),div.material > textarea.material').each(function () {
			//Setup input
			$(this).on('focus', function () {
				$(this).parent().addClass('is-active');
			}).on('blur', function () {
				$(this).parent().removeClass('is-active');
			}).on('change', function () {
				$(this).parent('div.material')[this.value ? 'addClass' : 'removeClass']('is-filled');
			});

			//Setup parent
			$(this).trigger('change');
			$(this).parent().addClass('js');
		});

		$(container).find('div.material > select.material').each(function () {
			$(this).parent().addClass('is-filled js');
		});

		$(container).find('div.material > label > input[type=checkbox]').each(function () {
			$(this).parent().addClass('checkbox');
		});
	}
});
