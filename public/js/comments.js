const commentFromHandler = async function (event) {
  event.preventDefault();

  const blog_id = document.querySelector('.add-comment input').value.trim();
  const commentDescription = document.getElementById('comment-description').value.trim();

  console.log('New Cooemnt', blog_id);
  console.log('Description:', commentDescription)

  if (commentDescription) {
    
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        blog_id,
        commentDescription,
      }),
      headers: {
        "Content-Type": "application/json", 
      },
    });
    document.location.reload();
  }
};

document
  .querySelector('.add-comment')
  .addEventListener("click", commentFromHandler);
