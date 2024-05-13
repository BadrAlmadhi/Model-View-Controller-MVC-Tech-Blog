const signupFormHandlers = async (event) => {
  event.preventDefault();

  const email = document.getElementById("signUp-email").value.trim();
  const password = document.getElementById("signUp-password").value.trim();
  const username = document.getElementById('signUp-username').value.trim();

  if (email && password && username) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email, password, username}),
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
