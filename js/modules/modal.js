export default class Modal {
  constructor(openBtn, closeBtn, containerModal) {
    this.botaoAbrir = document.querySelector(openBtn);
    this.botaoFechar = document.querySelector(closeBtn);
    this.containerModal = document.querySelector(containerModal);
    this.toggleModal = this.toggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
    this.eventToggleModal = this.eventToggleModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === event.currentTarget) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
