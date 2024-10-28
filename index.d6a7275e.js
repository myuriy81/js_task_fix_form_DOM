document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.className="field-label",t.setAttribute("for",e.id);var a=e.name.toUpperCase();t.textContent=a;var r=e.name.charAt(0).toUpperCase()+e.name.slice(1);e.setAttribute("placeholder",r),e.parentNode.insertBefore(t,e)});
//# sourceMappingURL=index.d6a7275e.js.map
