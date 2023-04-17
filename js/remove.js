function onloadRemove() {
  const oneSec = 1000
  //setInterval - for again and again
  setTimeout(
    function () {
      alert("hi")
      const frames = document.getElementsByTagName("iframe");
      if (frames) {
        for (let index = 0; index < frames.length; index++) {
          const frame = frames[index];
          const innerDoc = frame.contentDocument || frame.contentWindow.document;
          if (innerDoc)
            removeInternalDiv(innerDoc)
        }
      }
      alert("bye")
    }, (oneSec * 5));
}

function removeInternalDiv(doc) {
  if (!doc)
    return
  var elements = doc.getElementsByClassName("tawk-card tawk-card-inverse tawk-card-xsmall tawk-footer tawk-flex-none")
  console.log(elements)
  if (elements) {
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      console.log(element)
      element.remove()
    }
  }
}