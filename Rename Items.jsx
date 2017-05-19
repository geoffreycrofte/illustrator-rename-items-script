var ItemRenamer, itemRenamer;

ItemRenamer = (function() {
	function ItemRenamer() {

		if ( app.activeDocument.selection.length > 0 ) {

			this.replacements = [
				prompt( 'What would you like to replace?\nEmpty if you are renaming instead of replacing.', 'Eg: source.' ),
				prompt( 'What would you like to replace it with?\nUse %i placeholder to auto-increment naming. "name-%i" will name items: "name-1", "name-2", etc.', 'Eg: replacement, or replacement-%i' )
			];

			this.renameItems( app.activeDocument.selection );

		} else {
			alert( 'Select the items you would like to be renamed. You can select a Layer to rename all the items inside it.' );
		}
	}

	ItemRenamer.prototype.renameItems = function( items ) {
		var _i, _results, counting, regxp;

		_results = [];
		regxp    = new RegExp( '%i', 'i' );
		counting = this.replacements[1].match( regxp ) ? prompt( 'Start counting at:', '1' ) : 0;

		for (_i = 0; _i < items.length; _i++) {
			nb          = parseInt( _i ) + parseInt( counting );
			origin      = this.replacements[0];
			replacement = this.replacements[1].match( regxp ) ? this.replacements[1].replace( regxp, ( '' + nb ) ) : this.replacements[1];
			
			// Renaming.
			if ( origin === '' ) {
				_results.push( items[_i].name = replacement );
			}
			// Replacing.
			else {
				_results.push( items[_i].name = items[_i].name.replace( origin, replacement ) );
			}
		}

		return _results;
	};

	return ItemRenamer;

})();

itemRenamer = new ItemRenamer();
