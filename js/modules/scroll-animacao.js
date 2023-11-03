export default function initAnimacaoScroll() {
  const section = document.querySelectorAll("[data-anime='scroll']");
  let windowMetade;
  function animaScroll() {
    section.forEach(() => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  if (section.length) {
    windowMetade = window.innerHeight * 0.6;
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
