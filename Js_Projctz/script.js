const search = document.getElementById("search");
const listItems = document.querySelectorAll("#list li");

search.addEventListener("keyup", () => {
  const value = search.value.toLowerCase();

  listItems.forEach((item) => {
    const text = item.textContent.toLowerCase();

    if (text.includes(value)) {
      item.classList.remove("hide");

      // highlight matched text
      const start = text.indexOf(value);
      const end = start + value.length;

      item.innerHTML =
        item.textContent.substring(0, start) +
        `<span class="highlight">${item.textContent.substring(start, end)}</span>` +
        item.textContent.substring(end);
    } else {
      item.classList.add("hide");
      item.innerHTML = item.textContent; // remove previous highlight
    }
  });
});
