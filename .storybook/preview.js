export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	layout: "centered",
	controls: {
		expanded: true,
	},
	options: {
		storySort: {
			order: [
				"Design system",
					["Introduction", "Colors"],
				"Components",
					["Layout"]
			]
		}
	},
	previewTabs: {
		'storybook/docs/panel': { index: -1 }
	}
}