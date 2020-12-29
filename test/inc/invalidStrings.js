module.exports = [
	{type: "User, With prepended text", str: "foo https://www.twitch.tv/vixella"},
	{
		type: "User, With prepended text, with link",
		str: 'foo <a href="">https://www.twitch.tv/vixella</a>',
	},
	{
		type: "Archived, With prepended text",
		str: "foo https://www.twitch.tv/videos/597008599",
	},
	{
		type: "Archived, With prepended text, with link",
		str: 'foo <a href="">https://www.twitch.tv/videos/597008599</a>',
	},
];
