// function updateView() {
// 	const appElement = document.getElementById("app");
// 	if (!appElement) return;

// 	appElement.innerHTML = homeView();
// }

// there is already in view.js ...

function selectMain(key) {
    model.app.currentPage = key;
    updateView();
}

updateView();