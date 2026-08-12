const modal = document.querySelector(".work-modal");
const modalImage = document.querySelector(".modal-image");

document.querySelectorAll(".gallery-card").forEach((card) => {
  card.addEventListener("click", () => {
    modalImage.src = card.dataset.image;
    modalImage.alt = card.dataset.title;
    modalImage.classList.toggle("modal-image-small", card.classList.contains("gallery-card-1"));
    modalImage.classList.toggle("modal-image-padded", card.classList.contains("gallery-card-padded"));
    document.querySelector(".modal-title").textContent = card.dataset.title;
    document.querySelector(".modal-category").textContent = card.dataset.category;
    document.querySelector(".modal-meta").textContent = `${card.dataset.year}  /  ${card.dataset.tools}`;
    document.querySelector(".modal-description").textContent = card.dataset.description;
    modal.showModal();
  });
});

document.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => { if (event.target === modal) modal.close(); });
