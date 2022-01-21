function download(file, name) {
  let a = document.createElement("a");
  a.hidden = true;
  document.body.appendChild(a);
  a.href = file;
  a.download = name;
  a.click();
  a.remove();
}
