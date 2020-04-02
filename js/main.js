$(document).ready(function () {
  console.log(data);
  var formsMap = {};
  data.forEach(command => {
    addOption({
      value: command.id
    }, command.name, "#commandOption");

    formsMap[command.id] = command;
  });

  $("#commandOption").change(function () {
    $("#forms").empty();
    $("#commandHelp").text("");

    var command = formsMap[this.value];
    if (command) {
      $("#commandHelp").text(command.description);
      createForm(command.id, command.fields, "forms");
      createFormSubmit(command.id, command.cmd);
    }
    $(".roboreadonly").keydown(function (e) {
      e.preventDefault();
    });
  });


});