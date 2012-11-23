( function ( $ ) {
	'use strict';

	var ipaSil = {
		id: 'ipa-sil',
		name: 'Internation Phonetic Alphabet - SIL',
		description: 'Internation Phonetic Alphabet - SIL',
		date: '2012-11-23',
		URL: 'http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=UniIPAKeyboard',
		author: 'mapping by Martin Hosken and Lorna A. Priest; implementation by Amir E. Aharoni',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 2,
		patterns: [
			['B=', 'ʙ'],
			['f=', 'ɸ'],
			['b=', 'β'],

			['m>', 'ɱ'],
			['v<', 'ⱱ'],
			['v=', 'ʋ'],

			['t=', 'θ'],
			['d=', 'ð'],

			['r>', 'ɾ'],
			['l=', 'ɬ'],
			['l>', 'ɮ'],
			['r=', 'ɹ'],

			['s=', 'ʃ'],
			['z=', 'ʒ'],

			['t<', 'ʈ'],
			['d<', 'ɖ'],
			['n<', 'ɳ'],
			['r<', 'ɽ'],
			['s<', 'ʂ'],
			['z<', 'ʐ'],
			['R<', 'ɻ'],
			['l<', 'ɭ'],

			['j=', 'ɟ'],
			['n=', 'ɲ'],
			['c=', 'ç'],
			['j<', 'ʝ'],
			['L<', 'ʎ'],

			['g<', 'ɡ'],
			['n>', 'ŋ'],
			['g=', 'ɣ'],
			['w>', 'ɰ'],
			['L=', 'ʟ'],

			['G=', 'ɢ'],
			['N=', 'ɴ'],
			['R=', 'ʀ'],
			['x=', 'χ'],
			['R>', 'ʁ'],

			['h>', 'ħ'],
			['\\?<', 'ʕ'],

			['\\?=', 'ʔ'],
			['h<', 'ɦ'],

			['=<', '\u200d'] // Combining Grapheme Joiner
		]
	};
	$.ime.register( ipaSil );

} ( jQuery ) );
