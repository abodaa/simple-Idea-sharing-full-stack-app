const titleInput = document.querySelector(".input-title");
const subTitleInput = document.querySelector(".input-subtitle");
const nameInput = document.querySelector(".input-author");
const contentInput = document.querySelector(".text-area");
const formDOM = document.querySelector(".form");
const alertDOM = document.querySelector("form-alert");
const params = window.location.search;
const id = new URLSearchParams(params).get("id");
const showEditingIdea = async () => {
  const ideaData = await axios.get(`/api/v1/ideas/${id}`);
  const idea = ideaData.data;
  console.log(idea);

  titleInput.innerHTML = idea.title;
  subTitleInput.innerHTML = idea.subtitle;
  nameInput.innerHTML = idea.name;
  contentInput.innerHTML = idea.body;
};

showEditingIdea();

formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const titleVal = titleInput.value;
    const subtitleVal = subTitleInput.value;
    const authorVal = nameInput.value;
    const contentVal = contentInput.value;

    await axios.patch(`/api/v1/ideas/:${id}`, {
      title: titleVal,
      subtitle: subtitleVal,
      name: authorVal,
      body: contentVal,
    });
  } catch (error) {
    alertDOM.innerHTML = `<p class="error-notification">Error, please try again</p>`;
  }
});
