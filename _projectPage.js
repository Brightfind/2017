const fs = require('fs');
const pagesJSON = require('./_pagesList.json');

var theHTMLtoWrite = [];

for(let i=0; i < pagesJSON.pages.length; i++){
	theHTMLtoWrite.push(`<p><a href="${pagesJSON.pages[i].pageName}">${pagesJSON.pages[i].pageName}</a></p>`);
}
	
fs.writeFile('src/views/_compiledPartials/projectPageListCOMPILED.hbs', theHTMLtoWrite);