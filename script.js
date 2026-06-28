
document.addEventListener("DOMContentLoaded", function () {
    
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            let nameField = document.getElementById("name");
            let emailField = document.getElementById("email");
            if (nameField && emailField) {
                let name = nameField.value.trim();
                let email = emailField.value.trim();
                if (name === "" || email === "") {
                    alert("Please fill all fields");
                    event.preventDefault();
                } else {
                    alert("🎉 Success! Your message has been validated.");
                }
            }
        });
    }

    
    const topBarContainer = document.querySelector('.top-bar .container');
    if (topBarContainer) {
        const toggleBtn = document.createElement('button');
        toggleBtn.id = "themeToggleBtn";
        toggleBtn.innerHTML = "🌓 Toggle Theme";
        toggleBtn.style = "background:none; border:1px solid rgba(255,255,255,0.4); color:white; font-size:0.75rem; padding:3px 10px; cursor:pointer; border-radius:4px; font-weight:600; transition: all 0.3s ease;";
        topBarContainer.appendChild(toggleBtn);

        toggleBtn.addEventListener('click', function () {
            const currentBg = document.body.style.backgroundColor;
            if (currentBg === 'rgb(30, 45, 39)' || currentBg === '#1e2d27') {
                document.body.style.backgroundColor = 'var(--bg-primary)';
                document.body.style.color = 'var(--text-dark)';
            } else {
                document.body.style.backgroundColor = '#1e2d27';
                document.body.style.color = '#fdfbf7';
            }
        });
    }
});