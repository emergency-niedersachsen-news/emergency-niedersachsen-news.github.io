
// News speichern (in localStorage)
document.addEventListener("DOMContentLoaded", () => {
    const newsBox = document.getElementById("news-box");
    const newsData = localStorage.getItem("emergency_news");
    if (newsBox && newsData) {
        newsBox.innerHTML = `<p>${newsData}</p>`;
    }

    // Serverstatus faken (Demo)
    const status = document.getElementById("server-status");
    if (status) {
        setTimeout(() => {
            status.textContent = "✅ Online";
            status.style.color = "lightgreen";
        }, 1500);
    }

    // Login logik
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const pw = document.getElementById("password").value;
            const msg = document.getElementById("login-message");

            if (
                email === "***************************" &&
                pw === "*************************"
            ) {
                window.location.href = "admin.html";
            } else {
                msg.textContent = "❌ Login fehlgeschlagen!";
            }
        });
    }

    // News speichern
    const newsForm = document.getElementById("news-form");
    if (newsForm) {
        newsForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const content = document.getElementById("news-content").value;
            localStorage.setItem("emergency_news", content);
            document.getElementById("news-update-msg").textContent = "✅ News gespeichert!";
        });
    }
});
