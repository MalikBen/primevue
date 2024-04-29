export default {
    css: ({ dt }) => `
.p-treetable {
    position: relative;
}

.p-treetable-table {
    border-spacing: 0px;
    width: 100%;
}

.p-treetable-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
}

.p-treetable-column-title,
.p-treetable-sort-icon,
.p-treetable-sort-badge {
    vertical-align: middle;
}

.p-treetable-sort-icon {
    color: ${dt('treetable.sort.icon.color')};
    margin-left: 0.5rem;
    transition: color ${dt('transition.duration')};
}

.p-treetable-sort-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 1rem;
    min-width: 1rem;
    line-height: 1rem;
    margin-left: 0.5rem;
}

.p-treetable-sortable-column:not(.p-treetable-column-sorted):hover {
    background: ${dt('treetable.header.cell.hover.background')};
    color: ${dt('treetable.header.cell.hover.color')};
}

.p-treetable-sortable-column:not(.p-treetable-column-sorted):hover .p-treetable-sort-icon {
    color: ${dt('treetable.sort.icon.hover.color')};
}

.p-treetable-column-sorted {
    background: ${dt('highlight.background')};
    color: ${dt('highlight.color')};
}

.p-treetable-sortable-column:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: -1px;
}

.p-treetable-column-sorted .p-treetable-sort-icon {
    color: ${dt('highlight.color')};
}

.p-treetable-hoverable .p-treetable-selectable-row {
    cursor: pointer;
}

.p-treetable-scrollable > .p-treetable-table-container {
    position: relative;
}

.p-treetable-scrollable-table > .p-treetable-thead {
    top: 0;
    z-index: 1;
}

.p-treetable-scrollable-table > .p-treetable-frozen-tbody {
    position: sticky;
    z-index: 1;
}

.p-treetable-scrollable-table>.p-treetable-tfoot {
    bottom: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-treetable-frozen-column {
    position: sticky;
    background: inherit;
}

.p-treetable-scrollable th.p-treetable-frozen-column {
    z-index: 1;
}

.p-treetable-scrollable > .p-treetable-table-container > .p-treetable-table > .p-treetable-thead,
.p-treetable-scrollable > .p-treetable-table-container > .p-virtualscroller > .p-treetable-table > .p-treetable-thead {
    background: ${dt('treetable.header.cell.background')};
}

.p-treetable-scrollable > .p-treetable-table-container > .p-treetable-table > .p-treetable-tfoot,
.p-treetable-scrollable > .p-treetable-table-container > .p-virtualscroller > .p-treetable-table > .p-treetable-tfoot {
    background: ${dt('treetable.footer.cell.background')};
}

.p-treetable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-treetable-flex-scrollable>.p-treetable-table-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-treetable-scrollable-table > .p-treetable-tbody > .p-treetable-row-group-header {
    position: sticky;
    z-index: 1;
}

/* Resizable */
.p-treetable-resizable-table > .p-treetable-thead > tr > th,
.p-treetable-resizable-table > .p-treetable-tfoot > tr > td,
.p-treetable-resizable-table > .p-treetable-tbody > tr > td {
    overflow: hidden;
    white-space: nowrap;
}

.p-treetable-resizable-table > .p-treetable-thead > tr > th.p-treetable-resizable-column:not(.p-treetable-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-treetable-resizable-table-fit > .p-treetable-thead > tr > th.p-treetable-resizable-column:last-child .p-treetable-column-resizer {
    display: none;
}

.p-treetable-column-resizer {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    width: 0.5rem;
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

.p-treetable-column-header-content {
    display: flex;
    align-items: center;
}

.p-treetable-column-resize-indicator {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
    background: ${dt('treetable.resizer.color')};
}

.p-treetable-row-reorder-indicator-up,
.p-treetable-row-reorder-indicator-down {
    position: absolute;
    display: none;
}

.p-treetable-reorderable-column,
.p-treetable-reorderable-row-handle {
    cursor: move;
}

.p-treetable-mask {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.p-treetable-virtualscroller-spacer {
    display: flex;
}

.p-treetable .p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    top: 0;
    left: 0;
}

.p-treetable-paginator-top {
    border: solid ${dt('treetable.header.border.color')};
    border-width: 0 0 1px 0;
}

.p-treetable-header {
    background: ${dt('treetable.header.background')};
    color: ${dt('treetable.header.color')};
    border: 1px solid ${dt('treetable.header.border.color')};
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-treetable-footer {
    background: ${dt('treetable.footer.background')};
    color: ${dt('treetable.footer.color')};
    border: 1px solid ${dt('treetable.footer.border.color')};
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-treetable-thead > tr > th {
    text-align: left;
    padding: 0.75rem 1rem;
    background: ${dt('treetable.header.cell.background')};
    border: 1px solid ${dt('treetable.header.cell.border.color')};
    border-width: 0 0 1px 0;
    color: ${dt('treetable.header.cell.color')};
    font-weight: 600;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-treetable-tbody > tr {
    outline-color: transparent;
    background: ${dt('treetable.row.background')};
    color: ${dt('treetable.row.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-treetable-tbody > tr > td {
    text-align: left;
    border: 1px solid ${dt('treetable.body.cell.border.color')};
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
}

.p-treetable-hoverable .p-treetable-tbody > tr:not(.p-treetable-row-selected):hover {
    background: ${dt('treetable.row.hover.background')};
    color: ${dt('treetable.row.hover.color')};
}

.p-treetable-tbody > tr.p-treetable-row-selected {
    background: ${dt('highlight.background')};
    color: ${dt('highlight.color')};
}

.p-treetable-tbody > tr:has(+ .p-treetable-row-selected) > td {
    border-bottom-color: ${dt('treetable.body.cell.selected.border.color')};
}

.p-treetable-tbody > tr.p-treetable-row-selectedt > td {
    border-bottom-color: ${dt('treetable.body.cell.selected.border.color')};
}

.p-treetable-tbody > tr:focus-visible {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: -1px;
}

.p-treetable-tbody > tr.p-treetable-contextmenu-row-selected {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: -1px;
}

.p-treetable-tfoot > tr > td {
    text-align: left;
    padding: 0.75rem 1rem;
    border: 1px solid ${dt('treetable.footer.cell.border.color')};
    border-width: 0 0 1px 0;
    font-weight: 600;
    color: ${dt('treetable.footer.cell.color')};
    background: ${dt('treetable.footer.cell.background')};
}

.p-treetable-loading-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
}

.p-treetable-gridlines .p-treetable-header {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-paginator-top {
    border-width: 0 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-paginator-bottom {
    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: ${dt('treetable.footer.border.color')};
}

.p-treetable-gridlines .p-treetable-thead > tr > th {
    border-width: 1px 0 1px 1px;
}

.p-treetable-gridlines .p-treetable-thead > tr > th:last-child {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr > td {
    border-width: 1px 0 0 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr > td:last-child {
    border-width: 1px 1px 0 1px;
}

p-treetable-gridlines .p-treetable-tbody > tr:last-child>td {
    border-width: 1px 0 1px 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr:last-child > td:last-child {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tfoot>tr>td {
    border-width: 1px 0 1px 1px;
}

.p-treetable-gridlines .p-treetable-tfoot > tr > td:last-child {
    border-width: 1px 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-thead +.p-treetable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-thead + .p-treetable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-thead):has(.p-treetable-tbody) .p-treetable-tbody > tr > td {
    border-width: 0 0 1px 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-thead):has(.p-treetable-tbody) .p-treetable-tbody > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-tbody):has(.p-treetable-tfoot) .p-treetable-tbody > tr:last-child > td {
    border-width: 0 0 0 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-tbody):has(.p-treetable-tfoot) .p-treetable-tbody > tr:last-child > td:last-child {
    border-width: 0 1px 0 1px;
}

.p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd {
    background: ${dt('treetable.row.striped.background')});
}

.p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd.p-highlight {
    background: ${dt('highlight.background')});
    color: ${dt('highlight.color')});
}

.p-treetable.p-treetable-sm .p-treetable-header {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-thead > tr > th {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-footer {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-lg .p-treetable-header {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-thead > tr > th {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-tbody>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-tfoot>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-footer {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-row-toggle-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: ${dt('treetable.row.action.color')};
    border: 0 none;
    background: transparent;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    user-select: none;
}

.p-treetable-row-toggle-button:enabled:hover {
    color: ${dt('treetable.row.action.hover.color')};
    background: ${dt('treetable.row.action.hover.background')};
}

.p-treetable-row-toggle-button:focus-visible {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: 2px;
}

.p-treetable-tbody > tr.p-treetable-row-selected .p-treetable-row-toggle-button:hover{
    background: ${dt('treetable.row.action.highlight.hover.background')};
    color: inherit;
}
`
};