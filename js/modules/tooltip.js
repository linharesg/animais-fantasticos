export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    const currentTooltipWith = +getComputedStyle(this.tooltipBox).width.replace("px","");
    if (event.pageX + currentTooltipWith + 60 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - currentTooltipWith - 20 + "px";
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    }
  }

  onMouseLeave() {
    this.tooltipBox.remove();
    this.tooltipBox.removeEventListener("mouseleave", this.onMouseLeave);
    this.tooltipBox.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseOver(event) {
    this.criarTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
