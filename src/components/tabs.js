const tabDiv = document.querySelector(".tabs-container");

const Tabs = (topics) => {

  //labels//

  const someTopics = document.createElement("div");
  const tab1 = document.createElement("div");
  const tab2 = document.createElement("div");
  const tab3 = document.createElement("div");

  //heirarchy// 

  someTopics.classList.add("topics");
  tab1.classList.add("tab");
  tab2.classList.add("tab");
  tab3.classList.add("tab");


  tabDiv.appendChild(someTopics);
  someTopics.appendChild(tab1);
  someTopics.appendChild(tab2);
  someTopics.appendChild(tab3);

const tops = topics.split(',');
tab1.textContent = tops[0];
tab2.textContent = tops[1];
tab3.textContent = tops[2];
  


  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  return someTopics;
}
console.log(Tabs('javascript', 'bootstrap', 'technology'));


const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }

