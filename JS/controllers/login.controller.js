function updateView() {
    const app = document.getElementById("app");

    if (model.app.currentPage === "logInPage") {
        app.innerHTML = logInPage();
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


function login() {
    if (!email) {
        alert("Skriv inn e-post");
        return;
    }

    const user = model.users.find(u => u.emailAddress === email);

    if (user && user.isActive) {
        model.app.currentUser = user;
        model.app.currentPage ="profilePage";
    } else {
        alert("Feil e-post eller bruker er deaktivert");
    }

    updateView();
}

function register() {
    const input = model.inputs.registerPage;

    if (input.password !== input.confirmPassword) {
        alert("Passord matcher ikke");
        return;
    }

    const newUser = {
        id: "user_" + Date.now(),
        userName: input.email,
        emailAddress: input.email,
        role: "Free",
        lists: 0,
        isActive: true,
    };

    model.users.push(newUser);
    model.app.currentUser = newUser;
    model.app.currentPage = "profilePage";

    updateView();
}

function goTo(page) {
    model.app.currentPage = page;
    updateView();
}

updateView();
