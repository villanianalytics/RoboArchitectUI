$(document).ready(function () {
  console.log(data);
  var formsMap = {};
  data.forEach(command => {
    addCommand("commandOption", command.id, command.name);
    formsMap[command.id] = command;
  });

  $("#commandOption").change(function () {
    $("#forms").empty();
    $("#commandHelp").text("");

    var command = formsMap[this.value];
    if (command) {
      $("#commandHelp").text(command.description);
      createForm(command.id, command.fields);
      createFormSubmit(command.id, command.cmd);
    }
  });
});