// function updateView() {
// 	const appElement = document.getElementById("app");
// 	if (!appElement) return;

// 	appElement.innerHTML = homeView();
// }

// there is already in view.js ...

function selectMain(key) {
    model.app.currentPage = key;
	if (key === "myListsPage" && model.app.selectedListId === null && model.lists.length > 0) {
        model.app.selectedListId = model.lists[0].id;
    }
    updateView();
}

updateView();