// Show Ideas DOMs
const ideasDOM = document.querySelector(".ideas");
const alertDOM = document.querySelector(".form-alert");
const inputitleDOM = document.querySelector(".input-title");
const inpusubtitleDOM = document.querySelector(".input-subtitle");
const inpuauthorDOM = document.querySelector(".input-author");
const contentDOM = document.querySelector(".text-area");


const formDOM = document.querySelector(".idea-form");

// ************* All Ideas veiw ***************** //

const showIdeas = async () => {
  try {
    const ideasData = await axios.get("/api/v1/ideas");
    const ideas = ideasData.data;
    console.log(ideas);
    if (ideas.length < 1) {
      return ideasDOM.innerHTML = "<h4>There are no Ideas in the list</h4>";
    }
    const allIdeas = ideas
      .map((idea) => {
        return `

        
        <div class="container">
          <div class="content-container">
              <div class="user-name-pic">
                  <img src="/user-pic.png" class="user-icon" alt="user">
                  <p class="author">By ${idea.name}</p>
              </div>
              <h2 class="title">${idea.title}</h2>
              <p class="subtitle">${idea.subtitle}</p>
              <p class="main-content">${idea.body}</p>
          </div>
     
          <div class="idea-delete-icons-container">
            <!-- edit link -->
            <a href="singleidea.html?id=${idea._id}"  class="edit-link">
            <img src="/edit.png" class="edit-delete-icon" alt="user">

            </a>
            <!-- delete btn -->
            <button type="button" class="delete-btn" data-id="${idea._id}">
            <img src="/delete.png" class="edit-delete-icon" alt="user">

            </button>
          </div>
          
        </div>
          
      
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

// ************* Create Ideas ***************** //


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

    alertDOM.innerHTML = `<p class="success-notification">Successfully shared. Thanks for sharing!</p>`;
    setTimeout(() =>{
      alertDOM.innerHTML = ""
    },5000)
    showIdeas();
    // console.log(titleVal, subtitleVal, authorVal, contentVal);
  } catch (error) {
    alertDOM.innerHTML = `<p class="error-notification">Error, please try again</p>`;
    setTimeout(() => {
      alertDOM.innerHTML = "";
    }, 5000);
  }
});

// ************* Delete Ideas ***************** //

ideasDOM.addEventListener("click", async (e) => {
    const el = e.target;
    const id = el.parentElement.dataset.id;
    try {
      await axios.delete(`/api/v1/ideas/${id}`);
      showIdeas();
    } catch (error) {
      console.log(error);
    }
 
});