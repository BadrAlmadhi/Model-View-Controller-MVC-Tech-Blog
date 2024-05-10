const commentFromHandler = async function (event) {
  event.preventDefault();

  const blog_id = document.getElementById("new-comment").value.trim();
  const commentDescription = document.getElementById('comment-description').value.trim();

  if (commentDescription) {
    
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        blog_id,
        commentDescription,
      }),
      headers: {
        content_Type: "application/json",
      },
    });
    document.location.reload();
  }
};

document
  .querySelector('.add-comment')
  .addEventListener("submit", commentFromHandler);
