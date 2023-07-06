var note = document.getElementById("note");
var savednote = [];
var num = 0;
savednote[0] = document.getElementById("note1");
savednote[1] = document.getElementById("note2");
savednote[2] = document.getElementById("note3");

function save() {
  savednote[num].value = note.value;
  note.value = "";
  num++;
}
