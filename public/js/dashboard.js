document.addEventListener("DOMContentLoaded", () => {
  const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById("title-input").value.trim();
    const description = document.getElementById("blog-disc").value.trim();

    console.log('title', title); // i have a problem with title
    console.log('descrition', description)
    
    if (title && description) {
      const response = await fetch("api/blogs", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to create blog");
      }
    }
  };

  const deleteHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to delete blog");
      }
    }
  };

  document.querySelector(".create-blog").addEventListener("click", newFormHandler);
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", deleteHandler);
  });
});
