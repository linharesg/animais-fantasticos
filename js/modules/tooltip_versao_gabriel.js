export default function initTooltip() {}

const tooltips = document.querySelectorAll("[data-tooltip]");
tooltips.forEach((tooptip) =>
  tooptip.addEventListener("mouseenter", abrirTooltip)
);
tooltips.forEach((tooptip) =>
  tooptip.addEventListener("mouseleave", fecharTooltip)
);

function fecharTooltip() {
  console.log(this);
  this.querySelector("div:has(.tooltip)").remove();
}

function abrirTooltip(event) {
  console.log(this);
  const tooltip = document.createElement("div");
  tooltip.innerHTML = `
  <div class="tooltip">
    <p>Localização</p>
    <span>span1</span>
    <span>span2</span>
    <br>
    <span>span3</span>
    <hr>
  </div>
  `;
  this.appendChild(tooltip);
}
