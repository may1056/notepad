var note = document.getElementById("mainnote");
var savednote = [];
var num = 0;
savednote[0] = document.getElementById("note1");
savednote[1] = document.getElementById("note2");
savednote[2] = document.getElementById("note3");

function save() {
  if (note.value != "") {
    savednote[num].value = note.value;
    note.value = "";
    num++;
    localStorage.setItem(num, note);
  }
}
for (var i = 0; i < 3; i++) {
  print.localStorage(i);
}

function del(del) {
  alert(del.value);
}
