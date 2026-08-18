const modal = document.querySelector(".work-modal");
const modalImage = document.querySelector(".modal-image");
const modalImageSecondary = document.querySelector(".modal-image-secondary");
const modalPreview = document.querySelector(".modal-preview");
const modalCaseStudy = document.querySelector(".modal-case-study");
const modalPresentation = document.querySelector(".modal-presentation");
const modalPresentationLink = document.querySelector(".modal-presentation-link");
const modalSource = document.querySelector(".modal-source");
const modalSourceLink = document.querySelector(".modal-source-link");

function openModal(card) {
  modalImage.src = card.dataset.image;
  modalImage.alt = card.dataset.title;
  modalImageSecondary.src = card.dataset.imageSecondary || "";
  modalImageSecondary.alt = `${card.dataset.title} - second page`;
  modalImageSecondary.hidden = !card.dataset.imageSecondary;
  modalImage.classList.toggle("modal-image-small", card.classList.contains("gallery-card-1"));
  modalImage.classList.toggle("modal-image-padded", card.classList.contains("gallery-card-padded"));
  document.querySelector(".modal-title").textContent = card.dataset.title;
  document.querySelector(".modal-category").textContent = card.dataset.category;
  document.querySelector(".modal-meta").textContent = card.dataset.tools;
  document.querySelector(".modal-description").textContent = card.dataset.description;
  modalPreview.href = card.dataset.preview || "#";
  modalPreview.textContent = card.dataset.previewLabel || "Preview in Figma →";
  modalPreview.hidden = !card.dataset.preview;
  modalCaseStudy.href = card.dataset.caseStudy || "#";
  modalCaseStudy.textContent = card.dataset.caseStudyLabel || "View Case Study PDF →";
  modalCaseStudy.hidden = !card.dataset.caseStudy;
  modalPresentationLink.href = card.dataset.presentation || "#";
  modalPresentation.hidden = !card.dataset.presentation;
  modalSourceLink.href = card.dataset.source || "#";
  modalSource.hidden = !card.dataset.source;
  if (!modal.open) modal.showModal();
}

// ハッシュ（トップページの作品リンクなど）に対応するカードのモーダルを開く
function openModalFromHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;
  const card = document.getElementById(id);
  if (card && card.classList.contains("gallery-card")) openModal(card);
}

document.querySelectorAll(".gallery-card").forEach((card) => {
  card.addEventListener("click", () => {
    openModal(card);
    if (card.id) history.replaceState(null, "", `#${card.id}`);
  });
});

document.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => { if (event.target === modal) modal.close(); });
modal.addEventListener("close", () => {
  if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
});

window.addEventListener("hashchange", openModalFromHash);
openModalFromHash();
