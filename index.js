document.addEventListener('DOMContentLoaded', function() {
    // Check for the presence of an <h1> tag
    const h1Exists = document.querySelector('h1') !== null;
    console.assert(h1Exists, 'index.html does not contain an <h1> tag.');
  
    // Check for the presence of a <p> tag
    const pExists = document.querySelector('p') !== null;
    console.assert(pExists, 'index.html does not contain a <p> tag.');
  
    // Check for the presence of a <strong> tag within the <p> tag
    const strongExists = document.querySelector('p strong') !== null;
    console.assert(strongExists, 'index.html does not contain a <strong> tag within the <p> tag.');
  
    // Check for the presence of an <em> tag within the <p> tag
    const emExists = document.querySelector('p em') !== null;
    console.assert(emExists, 'index.html does not contain an <em> tag within the <p> tag.');
  
    // Check for the presence of an <a> tag within the <p> tag
    const aExists = document.querySelector('p a') !== null;
    console.assert(aExists, 'index.html does not contain an <a> tag within the <p> tag.');
  
    // Check for the presence of a <table> tag within the <body> tag
    const tableExists = document.querySelector('body table') !== null;
    console.assert(tableExists, 'index.html does not contain a <table> tag within the <body> tag.');
  });
  