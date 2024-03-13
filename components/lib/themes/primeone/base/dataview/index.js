export default {
    css: ({ dt }) => `
.p-dataview .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-dataview .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-dataview-header {
    background: ${dt('dataview.header.background')};
    color: ${dt('dataview.header.color')};
    border: 1px solid ${dt('dataview.header.border.color')};
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-dataview-content {
    background: ${dt('dataview.content.background')};
    color: ${dt('dataview.content.color')};
    border: 0 none;
    padding: 0;
}

.p-dataview-footer {
    background: ${dt('dataview.footer.background')};
    color: ${dt('dataview.footer.color')};
    border: 1px solid ${dt('dataview.footer.border.color')};
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-dataview-layout-options.p-selectbutton .p-button svg {
    position: relative;
}
`
};
