function addCommand(selectId, comamndId, commandValue) {
  $("<option/>")
    .attr({
      value: comamndId
    })
    .text(commandValue)
    .appendTo("#" + selectId);
}

function createFormSubmit(formId, commands) {
  $("<hr/>")
    .attr({
      class: "mb-4"
    })
    .appendTo("#" + formId);

  $("<button/>")
    .attr({
      type: "submit",
      class: "btn btn-primary btn-lg btn-block"
    })
    .text("Submit")
    .appendTo("#" + formId);

  $("#" + formId).submit(function (event) {
    event.preventDefault();

    var command = [];
    var splittedCommand = commands.linux.split(" ");
    splittedCommand.forEach(comd => {
      if (comd.startsWith("/")) {
        var ele = $("#" + comd.substr(1));
        if (ele && ele.val()) {
          command.push(comd + '="' + ele.val() + '"');
        }
      } else {
        command.push(comd);
      }
    });

    download(command.join(" "), "test.txt", "txt/plain");
  });
}

function createForm(formId, fields) {
  $("<form/>")
    .attr({
      id: formId
    })
    .appendTo("#forms");

  fields.forEach(field => {
    switch (field.type) {
      case "text":
        createText(
          formId,
          field.id,
          field.id,
          field.label,
          field.placeholder,
          field.required,
          field.description
        );
        break;
      case "select":
        createSelect(
          formId,
          field.id,
          field.id,
          field.label,
          field.required,
          field.options,
          field.description
        );
        break;
    }

    if (field.change) {
      addOnChange(
        field.id,
        field.change.showIds,
        field.change.requiredIds,
        field.change.value
      );
    }
  });
}

function createSelect(formId, id, name, label, required, options, description) {
  createDiv("div_" + id, formId, required);
  createLabel(id, label, "div_" + id);
  $("<select/>")
    .attr({
      type: "text",
      id: id,
      name: name,
      required: required,
      class: "form-control"
    })
    .appendTo("#div_" + id);

  options.forEach(option => {
    $("<option/>")
      .attr({
        value: option.value
      })
      .text(option.text)
      .appendTo("#" + id);
  });

  if (description) {
    createHelp(description, "div_" + id);
  }
}

function createText(formId, id, name, label, placeholder, required, description) {
  createDiv("div_" + id, formId, required);
  createLabel(id, label, "div_" + id);
  $("<input/>")
    .attr({
      type: "text",
      id: id,
      name: name,
      placeholder: placeholder,
      required: required,
      class: "form-control"
    })
    .appendTo("#div_" + id);
  if (description) {
    createHelp(description, "div_" + id);
  }
}

function createDiv(id, formName, required) {
  $("<div/>")
    .attr({
      class: "form-group" + (required ? " required" : ""),
      id: id
    })
    .appendTo("#" + formName);
}

function createLabel(id, label, appendTo) {
  $("<label/>")
    .attr({
      for: id,
      class: "control-label"
    })
    .text(label)
    .appendTo("#" + appendTo);
}

function createHelp(help, appendTo) {
  $("<small/>")
    .attr({
      class: "form-text text-muted"
    })
    .text(help)
    .appendTo("#" + appendTo);
}

function addOnChange(elementId, showIds, requiredIds, value) {
  $("#" + elementId).change(function () {
    if ($("#" + elementId).val() == value) {
      requiredIds.forEach(eleId => {
        $("#div_" + eleId).addClass("required");
        $("#" + eleId).prop("required", true);
      });
      showIds.forEach(eleId => {
        $("#div_" + eleId).show();
      });
    } else {
      requiredIds.forEach(eleId => {
        $("#div_" + eleId).removeClass("required");
        $("#" + eleId).prop("required", false);
      });
      showIds.forEach(eleId => {
        $("#div_" + eleId).hide();
      });
    }
  });
}

function download(data, filename, type) {
  var file = new Blob([data], {
    type: type
  });
  if (window.navigator.msSaveOrOpenBlob)
    window.navigator.msSaveOrOpenBlob(file, filename);
  else {
    var a = document.createElement("a"),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}