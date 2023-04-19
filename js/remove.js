const oneSec = 1000
window.Tawk_API = window.Tawk_API || {};
window.onload = (event) => {
  setTimeout(lookInAllIframe, (oneSec * 1));
  setTimeout(lookInAllIframe, (oneSec * 3));
  setTimeout(lookInAllIframe, (oneSec * 5));
  setTimeout(lookInAllIframe, (oneSec * 7));
};
window.Tawk_API.onChatMaximized = function () {
  setTimeout(lookInAllIframe, (oneSec * 0.1));
  setTimeout(lookInAllIframe, (oneSec * 0.3));
  setTimeout(lookInAllIframe, (oneSec * 1));
};

function lookInAllIframe() {
  const frames = document.getElementsByTagName("iframe");
  if (frames) {
    for (let index = 0; index < frames.length; index++) {
      const frame = frames[index];
      var innerDoc = undefined
      try {
        innerDoc = frame.contentDocument || frame.contentWindow.document;
      } catch (error) { return }
      if (innerDoc)
        removeInternalDiv(innerDoc)
    }
  }
}

function removeInternalDiv(doc) {
  if (!doc)
    return
  var elements = doc.getElementsByClassName("tawk-branding")
  if (elements) {
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      element.innerHTML = "";
      if (element.href)
        element.href = "plantehouse.com"
      element.display = "none";
      element.remove();
    }
  }
}