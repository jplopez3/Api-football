

mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
const list = new mdc.list.MDCList.attachTo(document.querySelector('.mdc-list-group'));
//list.wrapFocus = true;

const listItemRipples = list.listElements.map((listItemEl) => new mdc.ripple.MDCRipple(listItemEl));


