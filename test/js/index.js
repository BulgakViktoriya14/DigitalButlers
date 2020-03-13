(function() {
	let header = document.querySelector(".header");
	let popup = document.querySelector(".container-menu");
	let containerTabs = document.querySelector(".tabs");
	let tabs = document.querySelectorAll(".tabs .tab")
	let length = tabs.length;
	let containerPanelTabs = document.querySelector(".tabs-content");
	let panelTabs = document.querySelectorAll(".tabs-content .tab-panel");
	let widthPanel;
	let translate = 0;

	function deleteActiveTab() {
		for(let i = 0; i < length; i++) {
			if(tabs[i].classList.contains("tab_active")) {
				tabs[i].classList.remove("tab_active");
				return;
			}
		}
	}
	function showTabs(number) {
		for(let i = 0; i < length; i++) {
			panelTabs[i].setAttribute("style", `transform: translateX(-${number}px)`);
		}
	}

	header.addEventListener("click", (e) => {
		if(e.target.classList.contains("menu-burger") || e.target.parentElement.classList.contains("menu-burger")) {
			popup.classList.add("menu_active");
		}
	})
	popup.addEventListener("click", (e) => {
		if(e.target.classList.contains("close") || e.target.parentElement.classList.contains("close")) {
			popup.classList.remove("menu_acive");
		}
	})
	containerTabs.addEventListener("click", (e) => {
		if(e.target.classList.contains("tab") && !e.target.classList.contains("tab_active")) {
			deleteActiveTab();
			e.target.classList.add("tab_active");
			widthPanel = panelTabs[0].clientWidth;
			let numberTab = e.target.getAttribute("id");
			translate = numberTab * widthPanel;
			showTabs(translate);
		}
	})
})();