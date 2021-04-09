const headerDiv = document.querySelector(".header-container");
const Header = (title, date, temp) => {
  //labels//
  const header = document.createElement("div")
  const dateSpan = document.createElement("span");
  const headerH1 = document.createElement("h1");
  const headerTemp = document.createElement("span")

  //heirarchy//

  headerDiv.appendChild(header);
  header.appendChild(dateSpan);
  header.appendChild(headerH1);
  header.appendChild(headerTemp);

  header.classList.add("header");
  dateSpan.classList.add("date");
  headerTemp.classList.add("temp");

  dateSpan.textContent = date;
  headerH1.textContent = title;
  headerTemp.textContent = temp;

  return header;
  
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}
console.log(Header("hello", "4/34/3030", "55"));

const headerAppender = (selector) => {
  headerDiv.appendChild(selector);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
}


export { Header, headerAppender}
