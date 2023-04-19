window.Tawk_API = window.Tawk_API || {};
window.Tawk_API.onChatMaximized = function(){
  const oneSec = 1000
  setTimeout(lookInAllIframe, (oneSec * 0.2));
  setTimeout(lookInAllIframe, (oneSec * 1));
};

function lookInAllIframe() {
  const frames = document.getElementsByTagName("iframe");
  if (frames) {
    for (let index = 0; index < frames.length; index++) {
      const frame = frames[index];
      const innerDoc = frame.contentDocument || frame.contentWindow.document;
      if (innerDoc)
        removeInternalDiv(innerDoc)
    }
  }
}

function removeInternalDiv(doc) {
  if (!doc)
    return
  var elements = doc.getElementsByClassName("tawk-branding")
  console.log(elements)
  if (elements) {
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      console.log(element)
      element.innerHTML = "";
      if (element.href)
        element.href = "#"
    }
  }
}