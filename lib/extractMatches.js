const parseInlineOptions = require("./parseInlineOptions.js");
const pattern = /<p>(?:\s*)(?:<a(?:.*)>)?(?:\s*)(?:https?:\/\/)?(?:w{3}\.)?(?:twitch\.tv)\/(\S+)(?:\s*)(?:<\/a>)?([\S\s]*?)<\/p>/;

module.exports = function(str) {
	let [, target, inlineOptions] = pattern.exec(str);
	let out = {};
	if (isArchivedVideo(target)) {
		out.type = "video";
		out.id = getArchiveVideoId(target);
	} else {
		out.type = "channel";
		out.id = removeTrailingAnchorTag(target);
	}
	out.options = parseInlineOptions(inlineOptions);
	return out;
};

/**
 * --------------------------------------------------------
 * HELPER FUNCTIONS
 * --------------------------------------------------------
 */

// archive video partial URL pattern
const archivedVideoPattern = /videos\/(\d+)/;

// Check whether the URL is for an archived video
function isArchivedVideo(str) {
	return archivedVideoPattern.test(str);
}
// Return the archived video ID
function getArchiveVideoId(str) {
	return archivedVideoPattern.exec(str)[1];
}
/**
 * In order to accept inline options, it's possible that the main 
 * URL pattern regex returns the channel id as "{username}</a>",
 * with a trailing anchor tag. This function strips the tag in
 * those cases.
 */
function removeTrailingAnchorTag(str) {
	const anchorPattern = /(\S+)<\/a>/;
	return anchorPattern.test(str) ? anchorPattern.exec(str)[1] : str;
}
