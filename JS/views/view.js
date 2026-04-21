function updateView() {
    const app = document.getElementById("app");
    document.getElementById("subMenu").innerHTML = "";

    // if (model.app.currentPage === "logInPage") {
    //     app.innerHTML = logInPage();
    // }
    // same for the model: first i check if everything else works, then the login will be un-commented againb

    // else 
    if (model.app.currentPage === "homePage") {
        app.innerHTML = homeView();
    }

    else if (model.app.currentPage === "profilePage") {
        app.innerHTML = profilePage();
    }

    else if (model.app.currentPage === "myListsPage") {
        app.innerHTML = myListsPage();
    }

    else if (model.app.currentPage === "adminPage") {
        app.innerHTML = adminPage();
    }
}
