export const createScoreContainer = () => {
    // Create score container
    const scoreContainer = document.createElement("div");
    scoreContainer.className = "score-container";
    scoreContainer.style.display = "flex";
    scoreContainer.style.flexDirection = "column";
    scoreContainer.style.alignItems = "center";

    const scoreDisplay = createScoreDisplay();
    const btnContainer = createBtnContainer();

    scoreContainer.appendChild(scoreDisplay);
    scoreContainer.appendChild(btnContainer);

    const container = document.querySelector(".container");
    container.appendChild(scoreContainer);
    //!!START SILENT

    // load initial score from the browser storage
    loadScore();
    //!!END
};

const createScoreDisplay = () => {
    // Create score display
    const scoreDisplay = document.createElement("div");
    scoreDisplay.className = "score-display";
    scoreDisplay.style.marginBottom = "10px";

    const scoreTitle = document.createElement("span");
    scoreTitle.innerText = "Popularity Score: ";

    const score = document.createElement("span");
    score.className = "score";
    score.innerText = "0";

    scoreDisplay.appendChild(scoreTitle);
    scoreDisplay.appendChild(score);

    return scoreDisplay;
};

const createBtnContainer = () => {
    // Create upvote/downvote buttons
    const btnContainer = document.createElement("div");

    const upvoteBtn = document.createElement("button");
    upvoteBtn.id = "upvote";
    upvoteBtn.innerText = "Upvote";

    const downvoteBtn = document.createElement("button");
    downvoteBtn.id = "downvote";
    downvoteBtn.innerText = "Downvote";
    downvoteBtn.style.marginLeft = "5px";

    btnContainer.appendChild(upvoteBtn);
    btnContainer.appendChild(downvoteBtn);

    upvoteBtn.addEventListener('click', vote);
    downvoteBtn.addEventListener('click', vote);

    return btnContainer;
};

const vote = e => {
    //!!ADD
    // const score = document.querySelector('.score');
    // let newScore = score.innerText;
    //!!END_ADD
    //!!START SILENT
    let newScore = localStorage.getItem("score");
    //!!END
    if (e.target.id === "upvote") {
        newScore = parseInt(newScore) + 1;
    } else {
        newScore = parseInt(newScore) - 1;
    }
    
    //!!ADD
    // // update score
    //!!END_ADD
    //!!START SILENT
    // update score in the browser storage
    //!!END
    updateScore(newScore);
};

export const resetScore = () => {
    // reset score to 0
    updateScore(0);
};

const updateScore = (newScore) => {
    const score = document.querySelector('.score');
    score.innerText = newScore;
    //!!START SILENT

    // update score in browser storage
    storeScore(newScore);
    //!!END
};

//!!START SILENT
const storeScore = (score) => {
    // update score in localStorage
    localStorage.setItem("score", score);
};

const loadScore = () => {
    // load score from localStorage
    if (localStorage.getItem("score")) {
        updateScore(localStorage.getItem("score"));
    }
};
//!!END
