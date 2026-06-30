function submitData() {
  let selected = [];

  document.querySelectorAll("input[type=checkbox]:checked")
    .forEach(cb => selected.push(cb.value));

  let text = document.querySelector("textarea").value;

  document.getElementById("popup-text").innerText =
    "📅 Auswahl:\n" +
    selected.join("\n") +
    "\n\n💬 Info:\n" +
    text;

  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
