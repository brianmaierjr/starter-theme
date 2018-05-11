module.exports = {
	directoryName: "starter-theme",
	selectors: {
		accordion: ".accordion",
		mixItUp: ".mixitup",
		socialShare: ".social-link",
		sticky: ".sticky",
		slider: '.glide'
	},
	useVue: true,
	purgecssWhitelist: [
		"requestinfo",
		"menu-main-menu",
		"current_page_item",
		"fieldset",
		"legend",
		"label",
	],
	purgecssWhitelistPatterns: [
		/^elp(_.*)?$/,
		/^keep-nested-children/
	]
};
