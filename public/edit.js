const titleInput = document.querySelector(".input-title");
const subTitleInput = document.querySelector(".input-subtitle");
const nameInput = document.querySelector(".input-author");
const contentInput = document.querySelector(".text-area");
const formDOM = document.querySelector(".form-control");
const alertDOM = document.querySelector(".form-alert");
const params = window.location.search;
const id = new URLSearchParams(params).get("id");
const showEditingIdea = async () => {
  try {
    const ideaData = await axios.get(`/api/v1/ideas/${id}`);
    const idea = ideaData.data;
    console.log(idea);

    titleInput.value = idea.title;
    subTitleInput.value = idea.subtitle;
    nameInput.value = idea.name;
    contentInput.value = idea.body;
  } catch (error) {}
};

showEditingIdea();

formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const titleVal = titleInput.value;
  const subtitleVal = subTitleInput.value;
  const authorVal = nameInput.value;
  const contentVal = contentInput.value;
  try {
    await axios.patch(`/api/v1/ideas/${id}`, {
      title: titleVal,
      subtitle: subtitleVal,
      name: authorVal,
      body: contentVal,
    });
   alertDOM.innerHTML = `<p class="success-notification">Successfully Updated. Thanks for Updating!</p>`;
  } catch (error) {
    alertDOM.innerHTML = `<p class="error-notification">Error, please try again</p>`;
  }
});
