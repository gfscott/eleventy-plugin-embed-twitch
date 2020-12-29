module.exports = [
  {type: 'User, With prepended text', str: 'foo https://www.twitch.tv/vixella'},
  {type: 'User, With prepended text, with link', str: 'foo <a href="">https://www.twitch.tv/vixella</a>'},
  {type: 'User, With appended text', str: 'https://www.twitch.tv/vixella bar'},
  {type: 'User, With appended text, with link', str: '<a href="">https://www.twitch.tv/vixella</a> bar'},
  {type: 'Archived, With prepended text', str: 'foo https://www.twitch.tv/videos/597008599'},
  {type: 'Archived, With prepended text, with link', str: 'foo <a href="">https://www.twitch.tv/videos/597008599</a>'},
  {type: 'Archived, With appended text', str: 'https://www.twitch.tv/videos/597008599 bar'},
  {type: 'Archived, With appended text, with link', str: '<a href="">https://www.twitch.tv/videos/597008599</a> bar'},
];
