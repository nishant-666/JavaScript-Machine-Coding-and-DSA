document.getElementById("add-comment").addEventListener("click", function () {
  const text = document.getElementById("new-comment").value;
  if (text) {
    addComment(text);
    document.getElementById("new-comment").value = "";
  }
});

function addComment(
  text,
  parentElement = document.getElementById("comments-container")
) {
  const comment = document.createElement("div");
  comment.classList.add("comment");

  const commentText = document.createElement("p");
  commentText.textContent = text;
  comment.appendChild(commentText);

  const replyButton = document.createElement("span");
  replyButton.textContent = "Reply";
  replyButton.classList.add("reply-button");
  replyButton.addEventListener("click", function () {
    const replyTextarea = document.createElement("textarea");
    replyTextarea.classList.add("reply-textarea");
    comment.appendChild(replyTextarea);

    const replySubmit = document.createElement("button");
    replySubmit.textContent = "Submit";
    replySubmit.classList.add("reply-submit");
    replySubmit.addEventListener("click", function () {
      if (replyTextarea.value) {
        addComment(replyTextarea.value, comment.querySelector(".replies"));
        comment.removeChild(replyTextarea);
        comment.removeChild(replySubmit);
      }
    });
    comment.appendChild(replySubmit);
  });
  comment.appendChild(replyButton);

  const replies = document.createElement("div");
  replies.classList.add("replies");
  comment.appendChild(replies);

  parentElement.appendChild(comment);
}
