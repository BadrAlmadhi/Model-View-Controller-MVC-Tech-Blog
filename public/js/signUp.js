const signupFormHandlers = async (event) => {
  event.preventDefault();

  const email = document.getElementById("signUp-email").value.trim();
  const password = document.getElementById("signUp-password").value.trim();

  if (email && password) {
    const response = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Filed to sign up");
    }
  }
};

document
  .querySelector(".signUp-form")
  .addEventListener("submit", signupFormHandlers);
