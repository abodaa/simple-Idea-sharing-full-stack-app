// Show Ideas DOMs
const ideasDOM = document.querySelector(".ideas");
const alertDOM = document.querySelector(".form-alert");
const inputitleDOM = document.querySelector(".input-title");
const inpusubtitleDOM = document.querySelector(".input-subtitle");
const inpuauthorDOM = document.querySelector(".input-author");
const contentDOM = document.querySelector(".text-area");

const formDOM = document.querySelector(".idea-form");

const showIdeas = async () => {
  try {
    const ideasData = await axios.get("/api/v1/ideas");
    const ideas = ideasData.data;
    // console.log(ideas);
    if (ideas.length < 1) {
      ideasDOM.innerHTML = "<h4>There are no Ideas in the list</h4>";
    }
    const allIdeas = ideas
      .map((idea) => {
        return `
     <p class="author">By ${idea.name}</p>
        <h2 class="title">${idea.title}</h2>
    <p class="subtitle">${idea.subtitle}</p>
     <p class="main-content">${idea.body}</p>
     <div>---------------</div>
    `;
      })
      .join("");
    ideasDOM.innerHTML = allIdeas;
  } catch (error) {
    ideasDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>';
  }
};

showIdeas();

formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const titleVal = inputitleDOM.value;
  const subtitleVal = inpusubtitleDOM.value;
  const authorVal = inpuauthorDOM.value;
  const contentVal = contentDOM.value;
  try {
    await axios.post("/api/v1/ideas", {
      title: titleVal,
      subtitle: subtitleVal,
      name: authorVal,
      body: contentVal,
    });

    alertDOM.innerHTML = `success!`;
    showIdeas();
    // console.log(titleVal, subtitleVal, authorVal, contentVal);
  } catch (error) {
    alertDOM.innerHTML = `error, please try again`;
  }
});
