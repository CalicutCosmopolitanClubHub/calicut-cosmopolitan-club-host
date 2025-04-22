const resultContainer = document.getElementById("result-div-previouse-leaders")
const container = document.getElementById("timeline-container");
const titleh3 = document.getElementById("heding-of-timeline")


// data fetching function 
const dataFetching = async () => {
    try {
      const response = await fetch("assets/json/cosmopolitan_club_leaders.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
const timeLineCreator = (data) =>{
    // Clear existing content
    container.innerHTML = "";
    const timelineData = data
    timelineData.forEach((item, index) => {
        
        // Left/Right alternating logic
        const isEven = index % 2 === 0;

        const emptyDiv = document.createElement("div");
        emptyDiv.className = "timeline-empty";

        const middleDiv = document.createElement("div");
        middleDiv.className = "timeline-middle";
        middleDiv.innerHTML = `<div class="timeline-circle"></div>`;

        const contentDiv = document.createElement("div");
        contentDiv.className = "timeline-component timeline-content";
        contentDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.designation} - ${item.year}</p>
        `;

        if (isEven) {
            container.appendChild(emptyDiv);
            container.appendChild(middleDiv);
            container.appendChild(contentDiv);
        } else {
            container.appendChild(contentDiv);
            container.appendChild(middleDiv);
            container.appendChild(emptyDiv);
        }
    });
}

//Loading function
$(document).ready(async function () {
    const data = await dataFetching();
    titleh3.innerHTML = "List of Previous Presidents";
    timeLineCreator(data.presidents)
});

const callPresident = async () =>{
    console.log("call presdient");
    titleh3.innerHTML = "List of Previous Presidents";
    const data = await dataFetching();
    timeLineCreator(data.presidents)
}


const callSecretaries = async () =>{
    console.log("call callSecretaries");
    titleh3.innerHTML = "List of Previous Secretaries";
    const data = await dataFetching();
    timeLineCreator(data.secretaries)
}