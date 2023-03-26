const refs = {
  openBtn: document.querySelector(".js-burger-open"),
  closeBtn: document.querySelector(".js-burger-close"),
  window: document.querySelector(".js-burger-window"),
};

refs.openBtn.addEventListener("click", (e) => {
  refs.window.classList.remove("visually-hidden");
});

refs.closeBtn.addEventListener("click", () => {
  refs.window.classList.add("visually-hidden");
});
