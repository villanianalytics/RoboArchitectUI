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
    .text("Generate Script")
    .appendTo("#" + formId);

  $("#" + formId).submit(function (event) {
    event.preventDefault();
    var output = $("#output").val();
    if (output == "linux") {
      generateCommandLinux(commands.linux);
    } else if (output == 'windows') {
      generateCommandWindows(commands.windows);
    } else if (output == 'mac') {
      generateCommandMac(commands.mac);
    }
  });
}

function generateCommandLinux(commandLine) {
  var command = [];
  var splittedCommand = commandLine.split(" ");
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

  var fileText = ["#!/bin/bash", command.join(" ")]
  download(fileText.join("\n"), "command.sh", "txt/plain");
}

function generateCommandWindows(commandLine) {
  var command = [];
  var splittedCommand = commandLine.split(" ");
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

  var fileText = ["@ECHO OFF", "Pushd \"%~dp0\"", command.join(" "), "popd", "PAUSE"]
  download(fileText.join("\n"), "command.bat", "txt/plain");
}

function generateCommandMac(commandLine) {
  var command = [];
  var splittedCommand = commandLine.split(" ");
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

  var fileText = ["#! /bin/bash", command.join(" ")]
  download(fileText.join("\n"), "command.command", "txt/plain");
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
          field.description,
          field.validate,
          field.maxlength,
          field.visible
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
          field.description,
          field.visible
        );
        break;
    }

    if (field.change) {
      addOnChange(
        field.id,
        field.change
      );
    }
  });
}

function createSelect(formId, id, name, label, required, options, description, visible) {
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

  if (!visible) {
    $("#div_" + id).hide();
  }
}

function createText(formId, id, name, label, placeholder, required, description, validate, maxlength, visible) {
  createDiv("div_" + id, formId, required);
  createLabel(id, label, "div_" + id);
  $("<input/>")
    .attr({
      type: "text",
      id: id,
      name: name,
      placeholder: placeholder,
      required: required,
      pattern: validate,
      maxlength: maxlength,
      class: "form-control"
    })
    .appendTo("#div_" + id);

  if (description) {
    createHelp(description, "div_" + id);
  }

  if (!visible) {
    $("#div_" + id).hide();
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

function addOnChange(elementId, changeFields) {
  $("#" + elementId).change(function () {
    changeFields.forEach(changeField => {
      if (changeField.value.includes(this.value)) {
        changeField.requiredIds.forEach(eleId => {
          $("#div_" + eleId).addClass("required");
          $("#" + eleId).prop("required", true);
        });
        changeField.showIds.forEach(eleId => {
          $("#div_" + eleId).show();
        });
      } else {
        changeField.requiredIds.forEach(eleId => {
          $("#div_" + eleId).removeClass("required");
          $("#" + eleId).prop("required", false);
        });
        changeField.showIds.forEach(eleId => {
          $("#div_" + eleId).hide();
          clearField($("#" + eleId));
        });
      }
    });
  });
}

function clearField(ele) {
  if (ele.is("input")) {
    ele.val("");
  }
  if (ele.is("select")) {
    ele.prop('selectedIndex', 0);
  }
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