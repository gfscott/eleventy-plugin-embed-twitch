module.exports = [
	// user channels
	{type: "User", str: "https://www.twitch.tv/vixella"},
	{type: "User, With http", str: "http://www.twitch.tv/vixella"},
	{type: "User, Without protocol", str: "www.twitch.tv/vixella"},
	{type: "User, With https, without www", str: "https://twitch.tv/vixella"},
	{type: "User, With http, without www", str: "http://twitch.tv/vixella"},
	// archived videos
	{type: "Archived", str: "https://www.twitch.tv/videos/597008599"},
	{type: "Archived, With http", str: "http://www.twitch.tv/videos/597008599"},
	{type: "Archived, Without protocol", str: "www.twitch.tv/videos/597008599"},
	{
		type: "Archived, With https, without www",
		str: "https://twitch.tv/videos/597008599",
	},
	{
		type: "Archived, With http, without www",
		str: "http://twitch.tv/videos/597008599",
	},
];
