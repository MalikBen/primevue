export default {
    css: ({ dt }) => `
.p-inplace-display {
    display: inline;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    border-radius: ${dt('rounded.base')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-inplace-display:not(.p-disabled):hover {
    background: ${dt('inplace.display.hover.background')};
    color: ${dt('inplace.display.hover.color')};
}

.p-inplace-display:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-inplace-content {
    display: inline;
}
    `
};