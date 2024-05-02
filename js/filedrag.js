/*
filedrag.js - HTML5 File Drag & Drop demonstration
Featured on SitePoint.com
Developed by Craig Buckler (@craigbuckler) of OptimalWorks.net
*/
(function () {
  // getElementById
  function $id(id) {
    return document.getElementById(id);
  }

  // file drag hover
  function FileDragHover(e) {
    e.stopPropagation();
    e.preventDefault();
    e.target.className = e.type == "dragover" ? "hover" : "";
  }

  // file selection
  function FileSelectHandler(e) {
    // cancel event and hover styling
    FileDragHover(e);
  }

  // initialize
  function Init() {
    var fileselect = $id("fileselect"),
      filedrag = $id("filedrag"),
      submitbutton = $id("submitbutton");

    // file select
    fileselect.addEventListener("change", FileSelectHandler, false);

    // is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {
      // file drop
      filedrag.addEventListener("dragover", FileDragHover, false);
      filedrag.addEventListener("dragleave", FileDragHover, false);
      filedrag.addEventListener("drop", FileSelectHandler, false);
      filedrag.style.display = "block";

      // remove submit button
      submitbutton.style.display = "none";
    }
  }

  // call initialization file
  if (window.File && window.FileList && window.FileReader) {
    Init();
  }
})();
