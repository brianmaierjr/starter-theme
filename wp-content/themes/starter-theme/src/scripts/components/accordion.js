import Config from "themeConfig";
/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   Simple accordion pattern example
 */


// Helper Functions
function handleOpenAccordion(newTrigger) {
	var triggerForOpen = document.querySelector('.accordion__trigger[aria-expanded="true"]');
	var newTriggerID = newTrigger.getAttribute("aria-controls")
	var needToCloseOpenAccordion = triggerForOpen !== null ? newTriggerID !== triggerForOpen.getAttribute("aria-controls") : false;

	if (needToCloseOpenAccordion) {
		closeAccordion(triggerForOpen)
	}
}

function animateAccordion(trigger) {
	var panelID = trigger.getAttribute("aria-controls")
	var panel = document.getElementById(panelID)

	if (panel.classList.contains('open-accordion-panel')) {
		delayedClassRemoval(panel, 'open-accordion-panel')
		panel.style.maxHeight = null;
	} else {
		panel.classList.add('open-accordion-panel')
		panel.style.maxHeight = panel.scrollHeight + "px";
	}
}

function closeAccordion(trigger) {
	var openPanelID = trigger.getAttribute("aria-controls");
	var openPanel = document.getElementById(openPanelID);

	delayedClassRemoval(openPanel, 'open-accordion-panel')
	openPanel.style.maxHeight = null;
}


function delayedClassRemoval(el, classToRemove) {
	setTimeout(() => {
		el.classList.remove(classToRemove)
	}, 350)
}

// End of Helper Functions


// Begin Main Functionality
var accordionTriggers = document.getElementsByClassName("accordion__trigger");
var accordionPanels = document.getElementsByClassName("accordion__panel");
var i;


for (i = 0; i < accordionTriggers.length; i++) {
	accordionTriggers[i].addEventListener("click", function() {
		handleOpenAccordion(this);
		animateAccordion(this);
	});
}

Array.prototype.slice
	.call(document.querySelectorAll(Config.selectors.accordion))
	.forEach(function(accordion) {

		// Allow for multiple accordion sections to be expanded at the same time
		var allowMultiple = accordion.hasAttribute("data-allow-multiple");
		// Allow for each toggle to both open and close individually
		var allowToggle = allowMultiple ?
			allowMultiple :
			accordion.hasAttribute("data-allow-toggle");
		// Determine if the first section should be open by default
		var firstOpen = accordion.hasAttribute("data-first-open");

		// Create the array of toggle elements for the accordion group
		var triggers = Array.prototype.slice.call(
			accordion.querySelectorAll(".accordion__trigger")
		);
		var panels = Array.prototype.slice.call(
			accordion.querySelectorAll(".accordion__panel")
		);

		// Close all panels to begin, optionally leaving first one open
		for (var i = 0; i < panels.length; i++) {
			if (firstOpen && i == 0) {
				triggers[i].setAttribute("aria-expanded", "true");
				document.getElementById(triggers[i].getAttribute("aria-controls"));

			} else {
				triggers[i].setAttribute("aria-expanded", "false");
				document.getElementById(triggers[i].getAttribute("aria-controls"));

			}
		}

		accordion.addEventListener("click", function(event) {
			var target = event.target;

			if (target.classList.contains("accordion__trigger")) {
				// Check if the current toggle is expanded.
				var isExpanded = target.getAttribute("aria-expanded") == "true";
				var active = accordion.querySelector('[aria-expanded="true"]');

				// without allowMultiple, close the open accordion
				if (!allowMultiple && active && active !== target) {
					// Set the expanded state on the triggering element
					active.setAttribute("aria-expanded", "false");
					// Hide the accordion sections, using aria-controls to specify the desired section
					document.getElementById(active.getAttribute("aria-controls"));

					// When toggling is not allowed, clean up disabled state
					if (!allowToggle) {
						active.removeAttribute("aria-disabled");
					}
				}

				if (!isExpanded) {
					// Set the expanded state on the triggering element
					target.setAttribute("aria-expanded", "true");
					// Hide the accordion sections, using aria-controls to specify the desired section
					document.getElementById(target.getAttribute("aria-controls"));

					// If toggling is not allowed, set disabled state on trigger
					if (!allowToggle) {
						target.setAttribute("aria-disabled", "true");
					}
				} else if (allowToggle && isExpanded) {
					// Set the expanded state on the triggering element
					target.setAttribute("aria-expanded", "false");
					// Hide the accordion sections, using aria-controls to specify the desired section
					document.getElementById(target.getAttribute("aria-controls"));
				}
				event.preventDefault();
			}
		});

		// Bind keyboard behaviors on the main accordion container
		accordion.addEventListener("keydown", function(event) {
			var target = event.target;
			var key = event.which.toString();
			// 33 = Page Up, 34 = Page Down
			var ctrlModifier = event.ctrlKey && key.match(/33|34/);

			// Is this coming from an accordion header?
			if (target.classList.contains("accordion__trigger")) {
				// Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
				// 38 = Up, 40 = Down
				if (key.match(/38|40/) || ctrlModifier) {
					var index = triggers.indexOf(target);
					var direction = key.match(/34|40/) ? 1 : -1;
					var length = triggers.length;
					var newIndex = (index + length + direction) % length;

					triggers[newIndex].focus();

					event.preventDefault();
				} else if (key.match(/35|36/)) {
					// 35 = End, 36 = Home keyboard operations
					switch (key) {
						// Go to first accordion
						case "36":
							triggers[0].focus();
							break;
							// Go to last accordion
						case "35":
							triggers[triggers.length - 1].focus();
							break;
					}

					event.preventDefault();
				}
			} else if (ctrlModifier) {
				// Control + Page Up/ Page Down keyboard operations
				// Catches events that happen inside of panels
				panels.forEach(function(panel, index) {
					if (panel.contains(target)) {
						triggers[index].focus();

						event.preventDefault();
					}
				});
			}
		});

		// Minor setup: will set disabled state, via aria-disabled, to an
		// expanded/ active accordion which is not allowed to be toggled close
		if (!allowToggle) {
			// Get the first expanded/ active accordion
			var expanded = accordion.querySelector('[aria-expanded="true"]');

			// If an expanded/ active accordion is found, disable
			if (expanded) {
				expanded.setAttribute("aria-disabled", "true");
			}
		}
	});
