import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/init-tab-nav.js";
import Modal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initScrollAnimate from "./modules/animacao-scroll.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li','[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"');
modal.init();

// initTabNav();
// initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initScrollAnimate();

import _ from "lodash";
import $ from "jquery";

console.log($('nav'));
