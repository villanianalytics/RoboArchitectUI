/** Create Form */
function createForm(formId, fields, idToAttach) {
  $("<form/>")
    .attr({
      id: formId
    })
    .appendTo("#" + idToAttach);

  fields.forEach(field => {
    switch (field.type) {
      case "text":
        createText(
          formId,
          field.id,
          field.attributes,
          field.label,
          field.helper,
          field.visible
        );
        break;
      case "select":
        createSelect(
          formId,
          field.id,
          field.attributes,
          field.label,
          field.helper,
          field.visible,
          field.options
        );
        break;
      case "modal":
        createModal(
          formId,
          field.id,
          field.label,
          field.required,
          field.description,
          field.visible,
          field.subfields
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
/** On field change */
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

function createModal(formId, id, label, required, description, visible, subFields) {
  createDiv("div_" + id, "form-group", "#" + formId, required);
  createLabel(id, label, "#div_" + id);
  $("<textarea/>")
    .attr({
      id: id,
      name: name,
      required: required,
      readonly: true,
      rows: subFields.length,
      class: "form-control"
    })
    .appendTo("#div_" + id);

  $("<br />").appendTo("#div_" + id);

  $("<button/>")
    .attr({
      type: "button",
      class: "btn btn-outline-secondary btn-lg btn-block",
      id: "btn" + id,
      "data-toggle": "modal",
      "data-target": "#modal_" + id
    })
    .text("Edit configuration")
    .appendTo("#div_" + id);

  $("<p />").appendTo("#div_" + id);

  createFileUpload(id, "div_" + id, "File upload", id);

  $("<div>").attr({
    id: "modal_" + id,
    class: "modal fade",
    "aria-labelledby": label,
    "aria-hidden": "true"
  }).appendTo("#div_" + id);

  createModalBody(id, label);
  createForm("form_" + id, subFields, "modalBody_" + id);
  createModalSubmit("form_" + id, "form_" + id, "modal" + id, id);

  if (description) {
    createHelp(description, "div_" + id);
  }

  if (!visible) {
    $("#div_" + id).hide();
  }
}

function createFileUpload(id, idToAttachm, label, textAreaId) {
  $("<input>").attr({
    type: "file",
    id: "fileupload_" + id,
    style: "display: none;",
  }).appendTo("#" + idToAttachm);

  $("<button>").attr({
    type: "button",
    id: "btnupload_" + id,
    class: "btn btn-outline-secondary btn-lg btn-block",
  }).text(label).appendTo("#" + idToAttachm);

  $("#btnupload_" + id).click(function () {
    $("#fileupload_" + id).click();
  });

  $("#fileupload_" + id).on('change', function () {
    fileChosen(this, $("#" + textAreaId));
  });
}

function readTextFile(file, callback, encoding) {
  var reader = new FileReader();
  reader.addEventListener('load', function (e) {
    callback(this.result);
  });
  if (encoding) reader.readAsText(file, encoding);
  else reader.readAsText(file);
}

function fileChosen(input, output) {
  if (input.files && input.files[0]) {
    readTextFile(
      input.files[0],
      function (str) {
        output.val(str);
      }
    );
  }
}

function createModalSubmit(id, idToAttach, modalId, textAreaId) {
  $("<hr/>")
    .attr({
      class: "mb-4"
    })
    .appendTo("#" + idToAttach);
  $("<button/>")
    .attr({
      type: "submit",
      class: "btn btn-primary btn-lg btn-block"
    })
    .text("Generate")
    .appendTo("#" + idToAttach)

  $("#" + id).submit(function (event) {
    event.preventDefault();
    $("#" + textAreaId).val($(this).serialize().replace(/\&/g, "\n"));
    $('#' + modalId).modal('toggle');
  });
}

function createModalBody(id, label) {
  var html = '<div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content">';
  html += '<div class="modal-header">';
  html += '<h5 class="modal-title">' + label + '</h5>';
  html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
  html += '</div>';
  html += '<div class="modal-body" id="modalBody_' + id + '">';
  html += '</div>';
  html += '</div></div></div>';

  $("#modal_" + id).html(html);
}

/** Form Submit */
function createFormSubmit(formId, commands) {
  createLine("#" + formId);
  createButton({
    type: "submit",
    class: "btn btn-primary btn-lg btn-block"
  }, "Generate Script", "#" + formId);

  $("#" + formId).submit(function (event) {
    event.preventDefault();
    var output = $("#output").val();
    var zip = new JSZip();

    if (output == "linux") {
      generateCommandLinux(commands.linux, zip);
    } else if (output == 'windows') {
      generateCommandWindows(commands.windows, zip);
    } else if (output == 'mac') {
      generateCommandMac(commands.mac, zip);
    }

    zip.generateAsync({
        type: "blob"
      })
      .then(function (content) {
        saveAs(content, "command.zip");
      });
  });
}

function getCommand(commandLine, zip) {
  var command = [];
  var splittedCommand = commandLine.split(" ");
  splittedCommand.forEach(comd => {
    if (!comd.startsWith("/")) {
      command.push(comd);
      return;
    }

    var ele = $("#" + comd.substr(1));
    if (ele && ele.val()) {
      if (ele.is("textarea")) {
        zip.file(ele[0].id + ".txt", ele[0].val());
        command.push(comd + '="' + ele[0].id + ".txt" + '"');
      } else {
        command.push(comd + '="' + ele.val() + '"');
      }
    }
  });

  return command.join(" ");
}

function generateCommandLinux(commandLine, zip) {
  var fileText = ["#! /bin/bash", getCommand(commandLine, zip)]
  zip.file("command.sh", fileText.join("\n"));
}

function generateCommandWindows(commandLine, zip) {
  var fileText = ["@ECHO OFF", "Pushd \"%~dp0\"", getCommand(commandLine, zip), "popd", "PAUSE"]
  zip.file("command.bat", fileText.join("\n"));
}

function generateCommandMac(commandLine, zip) {
  var fileText = ["#! /bin/bash", getCommand(commandLine, zip)]
  zip.file("command.command", fileText.join("\n"));
}