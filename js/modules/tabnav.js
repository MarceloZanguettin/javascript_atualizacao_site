export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu); // fazendo com que selecione cada li de dentro do js-tabmenu
    this.tabContent = document.querySelectorAll(content); // fazendo com que selecione cada section
    this.activeClass = "ativo";
  }

  // Ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass); // retira de todos os section a classe ativo, criado uma função dentro de outra função
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      // função que irá ler ao ler o click na imagem irá acionar a função activeTab() na section do js-content
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
