const pattern = /<p>(?:\s*)(?:<a(?:.*)>)?(?:\s*)(?:https?:\/\/)?(?:w{3}\.)?(?:twitch\.tv)\/(\S*)(\s*)(<\/a>)?([\S\s]*?)<\/p>/g;

module.exports = function(str) {
	return str.match(pattern);
};
