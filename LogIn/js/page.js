const postsParent = document.querySelector("#posts");
const loadingScreen = document.querySelector("#loading");

function logOut() {
  // 1: stergem tokenul din local storage
  localStorage.removeItem("token");
  // 2: dam refresh la pagina fara token
  handleLogOut();
}

fetch("https://backend-curs.herokuapp.com/posts", {
  headers: {
    Authorization: "Bearer " + localStorage.token,
  },
})
  .then((response) => response.json())
  .then((responseInJsonForm) => {
    responseInJsonForm.map((post, index) => {
      postsParent.innerHTML += `<p>${index + 1}. ${post.content.text}</p>`;
    });
    loadingScreen.style.display = "none";
  })
  .catch((eroareaPrimita) => console.log(eroareaPrimita));
