'use strict';
let convert = function ($){
    console.log('Converting short URIs');
    let attributeContainers = Array.prototype.slice.call($.querySelectorAll('div.collapsible-content > div > span > span.html-attribute'));

    let uriSpans = attributeContainers.map(function (htmlAttribute) {
      var name = htmlAttribute.querySelector('.html-attribute-name');
      return name && name.textContent == 'URI' ? htmlAttribute.querySelector('.html-attribute-value') : null;
    }).filter(Boolean);

    uriSpans.forEach(function (span, index) {
      let parentNode = span.parentNode;
      let text = span.textContent;
      let css = span.getAttribute('class');
      let linkNode = $.createElement('a');
      linkNode.setAttribute('href', text);
      linkNode.setAttribute('class', css);
      linkNode.classList.add('uri2go');
      linkNode.innerHTML = text;
      linkNode.addEventListener('click', function () {
        location = text;
      });

      parentNode.insertBefore(linkNode, span);
      parentNode.removeChild(span);
    });

    console.log(`Found ${uriSpans.length} short URIs`);
  };
setTimeout(convert.bind(null, document), 100);