// ============================
// ELEMENT
// ============================

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

const login = document.getElementById("login");
const register = document.getElementById("register");

// ============================
// PINDAH FORM
// ============================

showRegister.onclick = () => {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
};

showLogin.onclick = () => {
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
};

// ============================
// REGISTER
// ============================

register.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if(password !== confirm){
        alert("Konfirmasi password tidak sama.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const cek = users.find(user => user.email === email);

    if(cek){
        alert("Email sudah digunakan.");
        return;
    }

    users.push({
        username,
        email,
        password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Register berhasil.");

    register.reset();

    registerForm.classList.remove("active");
    loginForm.classList.add("active");

});

// ============================
// LOGIN
// ============================

login.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.email === email && u.password === password);

    if(!user){
        alert("Email atau Password salah.");
        return;
    }

    localStorage.setItem("isLogin","true");

    localStorage.setItem("username",user.username);

    localStorage.setItem("email",user.email);

    window.location.href="dashboard.html";

});

// ============================
// SHOW PASSWORD
// ============================

function togglePassword(id,icon){

    const input=document.getElementById(id);

    if(input.type==="password"){

        input.type="text";

        icon.innerHTML="🙈";

    }else{

        input.type="password";

        icon.innerHTML="👁";

    }

}