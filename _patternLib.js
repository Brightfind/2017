//const config = require('webpack.config')
const fs = require('fs');
//const path = require('path');
const pathToComponents = 'src/components/';
var componentsList = fs.readdirSync(pathToComponents, 'utf8');

//instantiate
var ObjectOfHTMLtoWrite = [];

var indexOfDsStore = componentsList.indexOf('.DS_Store');
//slice uses different index
var componentsListMinusDSstore = componentsList.slice(indexOfDsStore + 1);

componentsListMinusDSstore.map(function(component){

	writeThisFileName(component);
});

function writeThisFileName(component){
	console.log(componentsList.indexOf(component));
	let theIDtoWrite = `patterLibSection_${componentsList.indexOf(component)}`
	//only add to array if there is an hbs file in a folder
	//const testHTML = '<section id="theIDtoWrite" class="patternLib__section">{{> ../../components/' + component + '/' + component + '.hbs}}</section><button class="copyButton" data-clipboard-action="copy" data-clipboard-target="#theIDtoWrite">Copy</button>';
	const testHTML = `<section id="${theIDtoWrite}" class="patternLib__section">{{> ../../components/${component}/${component}.hbs}}</section>`;

	ObjectOfHTMLtoWrite.push(testHTML);
}

console.log(componentsListMinusDSstore);



//It shouldn't build this page -- it should create a config array
//that way i don't have to hack on templating here


//add patternLibrScriptHere
// var patternLibScript = '<script src=""></script>'
// ObjectOfHTMLtoWrite.push(patternLibScript);
// var patternLibScriptLiteral = 

//pseudocode -- create script tag -- fill script tag -- append script tag



// function writePatternCodeBlock(){
// 	//for demo purposes
// 	var nodeListOftheSections = document.querySelectorAll('.patternLib__section');
// 	for(let i=0; i < nodeListOftheSections.length; i++){
// 		let elementToAdd = document.createElement('div');
// 		elementToAdd.classList.add('patternLib__codeBlock');
// 		let cleanedInnerHTMLOfTheSection = nodeListOftheSections[i].innerHTML.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
// 		let wrappedCleanHTML = `<pre><code>${cleanedInnerHTMLOfTheSection}</code></pre>`
// 		elementToAdd.innerHTML = wrappedCleanHTML;
// 		nodeListOftheSections[i].appendChild(elementToAdd);
// 	}
// }

// document.addEventListener('DOMContentLoaded', writePatternCodeBlock);

var rejoinedObjectOfHTMLtoWrite = ObjectOfHTMLtoWrite.join('');

fs.writeFile('src/core/__patternLib/patternLib_compiledList.hbs', rejoinedObjectOfHTMLtoWrite);


