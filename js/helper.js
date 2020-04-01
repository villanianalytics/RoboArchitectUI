/** Helpers */
// Create option //
function addOption(attributes, text, idToAppend) {
    $("<option/>")
        .attr(attributes)
        .text(text)
        .appendTo(idToAppend);
}
// Create Div //
function createDiv(id, className, formName, required) {
    $("<div/>")
        .attr({
            class: className + (required ? " required" : ""),
            id: id
        })
        .appendTo(formName);
}
// Create Label //
function createLabel(id, label, appendTo) {
    $("<label/>")
        .attr({
            for: id,
            class: "control-label"
        })
        .text(label)
        .appendTo(appendTo);
}
// Create Help text //
function createHelp(help, appendTo) {
    $("<small/>")
        .attr({
            class: "form-text text-muted"
        })
        .text(help)
        .appendTo(appendTo);
}
// Create text //
function createText(formId, id, attributes, label, helperText, visible) {
    createDiv("div_" + id, "form-group", "#" + formId, attributes.required);
    createLabel(id, label, "#div_" + id);
    $("<input/>").attr(attributes).appendTo("#div_" + id);
    if (helperText) createHelp(helperText, "#div_" + id);
    if (!visible) $("#div_" + id).hide();
}
// Create select //
function createSelect(formId, id, attributes, label, helperText, visible, options) {
    createDiv("div_" + id, "form-group", "#" + formId, attributes.required);
    createLabel(id, label, "#div_" + id);
    $("<select/>").attr(attributes).appendTo("#div_" + id);
    options.forEach(option => addOption(option.attributes, option.text, "#" + id));
    if (helperText) createHelp(helperText, "#div_" + id);
    if (!visible) $("#div_" + id).hide();
}
// Create Line
function createLine(appendTo) {
    $("<hr/>")
        .attr({
            class: "mb-4"
        })
        .appendTo(appendTo);
}
// Create Button
function createButton(attributes, text, appendTo) {
    $("<button/>")
        .attr(attributes)
        .text(text)
        .appendTo(appendTo);
}
// Create TextArea
function createButton(attributes, text, appendTo) {
    $("<button/>")
        .attr(attributes)
        .text(text)
        .appendTo(appendTo);
}
// Clean element
function clearField(ele) {
    if (ele.is("input")) {
        ele.val("");
    }
    if (ele.is("select")) {
        ele.prop('selectedIndex', 0);
    }
}