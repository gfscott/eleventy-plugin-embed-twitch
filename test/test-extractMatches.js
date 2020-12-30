const test = require("ava");
const patternPresent = require("../lib/spotPattern.js");
const extractMatches = require("../lib/extractMatches.js");
const {user, archive} = require("./inc/validStrings.js");

/**
 * ================================================
 * USER STANDARD TESTS: No inline options specified
 * ------------------------------------------------
 */
let userInlineOptionsFalse = {
	id: "vixella",
	type: "channel",
	options: {},
};

user.forEach(function(obj) {
	/**
   * TEST: Recognizes valid strings wrapped in paragraph tags
   */
	test(
		`${obj.type} ideal case`,
		(t) => {
			let idealCase = `<p>${obj.str}</p>`;
			t.deepEqual(
				extractMatches(patternPresent(idealCase)),
				userInlineOptionsFalse,
			);
		},
	);

	/**
   * TEST: Recognizes valid strings wrapped in paragraph tags, with
   * additional whitespace
   */
	test(
		`${obj.type} with whitespace`,
		(t) => {
			let withWhitespace = `<p>
        ${obj.str}
      </p>`;
			t.deepEqual(
				extractMatches(patternPresent(withWhitespace)),
				userInlineOptionsFalse,
			);
		},
	);

	/**
   * TEST: Recognizes valid strings wrapped in paragraph and anchor tags
   */
	test(
		`${obj.type} with links`,
		(t) => {
			let withLinks = `<p><a href="">${obj.str}</a></p>`;
			t.deepEqual(
				extractMatches(patternPresent(withLinks)),
				userInlineOptionsFalse,
			);
		},
	);

	/**
   * TEST: Recognizes valid strings wrapped in paragraph and anchor tags,
   * with additional whitespace
   */
	test(
		`${obj.type} with links and whitespace`,
		(t) => {
			let withLinksAndWhitespace = `<p>
        <a href="">
          ${obj.str}
        </a>
      </p>`;
			t.deepEqual(
				extractMatches(patternPresent(withLinksAndWhitespace)),
				userInlineOptionsFalse,
			);
		},
	);
});

/**
 * ===================================================
 * ARCHIVE STANDARD TESTS: No inline options specified
 * ---------------------------------------------------
 */

let archiveInlineOptionsFalse = {
	id: "597008599",
	type: "video",
	options: {},
};

archive.forEach(function(obj) {
	/**
   * TEST: Recognizes valid strings wrapped in paragraph tags
   */
	test(
		`${obj.type} ideal case`,
		(t) => {
			let idealCase = `<p>${obj.str}</p>`;
			t.deepEqual(
				extractMatches(patternPresent(idealCase)),
				archiveInlineOptionsFalse,
			);
		},
	);

	/**
   * TEST: Recognizes valid strings wrapped in paragraph tags, with
   * additional whitespace
   */
	test(
		`${obj.type} with whitespace`,
		(t) => {
			let withWhitespace = `<p>
        ${obj.str}
      </p>`;
			t.deepEqual(
				extractMatches(patternPresent(withWhitespace)),
				archiveInlineOptionsFalse,
			);
		},
	);

	/**
   * TEST: Recognizes valid strings wrapped in paragraph and anchor tags
   */
	test(
		`${obj.type} with links`,
		(t) => {
			let withLinks = `<p><a href="">${obj.str}</a></p>`;
			t.deepEqual(
				extractMatches(patternPresent(withLinks)),
				archiveInlineOptionsFalse,
			);
		},
	);

	/**
   * TEST: Recognizes valid strings wrapped in paragraph and anchor tags,
   * with additional whitespace
   */
	test(
		`${obj.type} with links and whitespace`,
		(t) => {
			let withLinksAndWhitespace = `<p>
        <a href="">
          ${obj.str}
        </a>
      </p>`;
			t.deepEqual(
				extractMatches(patternPresent(withLinksAndWhitespace)),
				archiveInlineOptionsFalse,
			);
		},
	);
});


/**
 * =============================================
 * USER STANDARD TESTS: Inline options specified
 * ---------------------------------------------
 */
let userInlineOptionsTrue = {
	id: "vixella",
	type: "channel",
	options: {
		aspectRatio: "4:3",
		autoplay: true,
		closedCaptions: true,
	},
};

user.forEach(function(obj) {
	/**
   * TEST: Recognizes valid strings wrapped in paragraph tags
   */
	test(
		`${obj.type} ideal case, with inline options`,
		(t) => {
			let idealCase = `<p>${obj.str} 4:3 cc autoplay</p>`;
			t.deepEqual(
				extractMatches(patternPresent(idealCase)),
				userInlineOptionsTrue,
			);
		},
	);

	/**
   * TEST: Recognizes valid strings wrapped in paragraph tags, with
   * additional whitespace
   */
	test(
		`${obj.type} with whitespace, with inline options`,
		(t) => {
			let withWhitespace = `<p>
        ${obj.str} 4:3 cc 
        autoplay
      </p>`;
			t.deepEqual(
				extractMatches(patternPresent(withWhitespace)),
				userInlineOptionsTrue,
			);
		},
	);

	/**
   * TEST: Recognizes valid strings wrapped in paragraph and anchor tags
   */
	test(
		`${obj.type} with links, with inline options`,
		(t) => {
			let withLinks = `<p><a href="">${obj.str}</a> 4:3 cc auto</p>`;
			t.deepEqual(
				extractMatches(patternPresent(withLinks)),
				userInlineOptionsTrue,
			);
		},
	);

	/**
   * TEST: Recognizes valid strings wrapped in paragraph and anchor tags,
   * with additional whitespace
   */
	test(
		`${obj.type} with links and whitespace, with inline options`,
		(t) => {
			let withLinksAndWhitespace = `<p>
        <a href="">
          ${obj.str}
        </a> 4:3 auto
        cc
      </p>`;
			t.deepEqual(
				extractMatches(patternPresent(withLinksAndWhitespace)),
				userInlineOptionsTrue,
			);
		},
	);
});

/**
 * ================================================
 * ARCHIVE STANDARD TESTS: Inline options specified
 * ------------------------------------------------
 */

let archiveInlineOptionsTrue = {
	id: "597008599",
	type: "video",
	options: {
		aspectRatio: "4:3",
		autoplay: true,
		closedCaptions: true,
	},
};

archive.forEach(function(obj) {
	/**
   * TEST: Recognizes valid strings wrapped in paragraph tags
   */
	test(
		`${obj.type} ideal case, with inline options`,
		(t) => {
			let idealCase = `<p>${obj.str} 4:3 autoplay cc</p>`;
			t.deepEqual(
				extractMatches(patternPresent(idealCase)),
				archiveInlineOptionsTrue,
			);
		},
	);

	/**
   * TEST: Recognizes valid strings wrapped in paragraph tags, with
   * additional whitespace
   */
	test(
		`${obj.type} with whitespace, with inline options`,
		(t) => {
			let withWhitespace = `<p>
        ${obj.str} 4:3 auto
        CC
      </p>`;
			t.deepEqual(
				extractMatches(patternPresent(withWhitespace)),
				archiveInlineOptionsTrue,
			);
		},
	);

	/**
   * TEST: Recognizes valid strings wrapped in paragraph and anchor tags
   */
	test(
		`${obj.type} with links, with inline options`,
		(t) => {
			let withLinks = `<p><a href="">${obj.str}</a> autoplay 4:3 cc</p>`;
			t.deepEqual(
				extractMatches(patternPresent(withLinks)),
				archiveInlineOptionsTrue,
			);
		},
	);

	/**
   * TEST: Recognizes valid strings wrapped in paragraph and anchor tags,
   * with additional whitespace
   */
	test(
		`${obj.type} with links and whitespace, with inline options`,
		(t) => {
			let withLinksAndWhitespace = `<p>
        <a href="">
          ${obj.str}
        </a> auto
        CC 4:3
      </p>`;
			t.deepEqual(
				extractMatches(patternPresent(withLinksAndWhitespace)),
				archiveInlineOptionsTrue,
			);
		},
	);
});
