export default {
    css: ({ dt }) => `
.p-treetable {
    position: relative;
}

.p-treetable table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

.p-treetable .p-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
}

.p-treetable .p-sortable-column .p-column-title,
.p-treetable .p-sortable-column .p-sortable-column-icon,
.p-treetable .p-sortable-column .p-sortable-column-badge {
    vertical-align: middle;
}

.p-treetable .p-sortable-column .p-sortable-column-icon {
    color: ${dt('treetable.sort.icon.color')};
    margin-left: 0.5rem;
    transition: color ${dt('transition.duration')};
}

.p-treetable .p-sortable-column .p-sortable-column-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 1rem;
    min-width: 1rem;
    line-height: 1rem;
    margin-left: 0.5rem;
}

.p-treetable .p-sortable-column:not(.p-highlight):hover {
    background: ${dt('treetable.header.cell.hover.background')};
    color: ${dt('treetable.header.cell.hover.color')};
}

.p-treetable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: ${dt('treetable.sort.icon.hover.color')};
}

.p-treetable .p-sortable-column.p-highlight {
    background: ${dt('highlight.background')};
    color: ${dt('highlight.color')};
}

.p-treetable .p-sortable-column:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: -1px;
}

.p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: ${dt('highlight.color')};
}

.p-treetable-responsive-scroll > .p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-responsive-scroll > .p-treetable-wrapper > table,
.p-treetable-auto-layout > .p-treetable-wrapper > table {
    table-layout: auto;
}

.p-treetable-hoverable-rows .p-treetable-tbody > tr {
    cursor: pointer;
}

.p-treetable-resizable>.p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-resizable .p-treetable-thead>tr>th,
.p-treetable-resizable .p-treetable-tfoot>tr>td,
.p-treetable-resizable .p-treetable-tbody>tr>td {
    overflow: hidden;
}

.p-treetable-resizable .p-resizable-column:not(.p-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
    display: none;
}

.p-treetable .p-column-resizer {
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

.p-treetable .p-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
    background: ${dt('treetable.resizer.color')};
}

.p-treetable .p-treetable-loading-overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

/* Scrollable */
.p-treetable-scrollable .p-treetable-wrapper {
    position: relative;
    overflow: auto;
}

.p-treetable-scrollable .p-treetable-table {
    display: block;
}



.p-treetable-scrollable .p-treetable-thead,
.p-treetable-scrollable .p-treetable-tbody,
.p-treetable-scrollable .p-treetable-tfoot {
    display: block;
}

.p-treetable-scrollable .p-treetable-thead>tr,
.p-treetable-scrollable .p-treetable-tbody>tr,
.p-treetable-scrollable .p-treetable-tfoot>tr {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
}

.p-treetable-scrollable .p-treetable-thead>tr>th,
.p-treetable-scrollable .p-treetable-tbody>tr>td,
.p-treetable-scrollable .p-treetable-tfoot>tr>td {
    display: flex;
    flex: 1 1 0;
    align-items: center;
}

.p-treetable-scrollable .p-treetable-thead {
    position: sticky;
    top: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-treetable-tfoot {
    position: sticky;
    bottom: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-frozen-column {
    position: sticky;
    background: inherit;
}

.p-treetable-scrollable th.p-frozen-column {
    z-index: 1;
}

.p-treetable-scrollable-both .p-treetable-thead>tr>th,
.p-treetable-scrollable-both .p-treetable-tbody>tr>td,
.p-treetable-scrollable-both .p-treetable-tfoot>tr>td,
.p-treetable-scrollable-horizontal .p-treetable-thead>tr>th .p-treetable-scrollable-horizontal .p-treetable-tbody>tr>td,
.p-treetable-scrollable-horizontal .p-treetable-tfoot>tr>td {
    flex: 0 0 auto;
}

.p-treetable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-treetable-flex-scrollable .p-treetable-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-treetable .p-treetable-scrollable-header {
    background: ${dt('treetable.header.background')};
}

.p-treetable .p-treetable-scrollable-footer {
    background: ${dt('treetable.footer.background')};
}

.p-treetable .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-treetable .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
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
    color: ${dt('treetable.header.cell.color')});
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

.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover {
    background: ${dt('treetable.row.hover.background')};
    color: ${dt('treetable.row.hover.color')};
}

.p-treetable-tbody > tr.p-highlight {
    background: ${dt('highlight.background')};
    color: ${dt('highlight.color')};
}

.p-treetable-tbody > tr:has(+ .p-highlight) > td {
    border-bottom-color: ${dt('treetable.body.cell.selected.border.color')});
}

.p-treetable-tbody > tr.p-highlight > td {
    border-bottom-color: ${dt('treetable.body.cell.selected.border.color')});
}

.p-treetable-tbody > tr:focus-visible {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: -1px;
}

.p-treetable-toggler {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: ${dt('treetable.toggle.color')};
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    margin-right: 0.5rem;
}

.p-treetable-toggler + .p-checkbox {
    vertical-align: middle;
    margin-right: 0.5rem;
}

.p-treetable-toggler + .p-checkbox + span {
    vertical-align: middle;
}

.p-treetable-toggler + .p-checkbox.p-indeterminate .p-checkbox-icon {
    color: ${dt('treetable.indeterminate.color')};
}

.p-treetable-toggler:enabled:hover {
    background: ${dt('treetable.toggle.hover.background')};
    color: ${dt('treetable.toggle.hover.color')};
}

.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler {
    color: ${dt('treetable.toggle.hover.color')};
    background: transparent;
}

.p-treetable-tbody > tr.p-highlight .p-treetable-toggler {
    color: inherit;
}

.p-treetable-tbody > tr.p-highlight .p-treetable-toggler:hover {
    background: ${dt('treetable.toggle.highlight.hover.background')};
    color: inherit;
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

.p-treetable .p-treetable-loading-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
}

.p-treetable-gridlines .p-treetable-header {
    border-width: 1px 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-top {
    border-width: 0 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-bottom {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-thead > tr > th {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr > td {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tfoot > tr > td {
    border-width: 1px;
}

.p-treetable-sm .p-treetable-header {
    padding: 0.65625rem 0.875rem;
}

.p-treetable-sm .p-treetable-thead > tr > th {
    padding: 0.375rem 0.5rem;
}

.p-treetable-sm .p-treetable-tbody > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable-sm .p-treetable-tfoot > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable-sm .p-treetable-footer {
    padding: 0.375rem 0.5rem;
}

.p-treetable-lg .p-treetable-header {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-thead > tr > th {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-tbody > tr > td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-tfoot > tr > td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-footer {
    padding: 0.9375rem 1.25rem;
}
`
};
