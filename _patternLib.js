const fs = require('fs');
const pathToComponents = 'src/components/';
var componentsList = fs.readdirSync(pathToComponents, 'utf8');
var ObjectOfHTMLtoWrite = [];
var indexOfDsStore = componentsList.indexOf('.DS_Store');
var indexOfPrototypeComponentsFolder = componentsList.indexOf('_bfComponents');
var componentsListMinusDSstore = componentsList.slice(indexOfDsStore + 1);//slice uses different index
var cleanedList = componentsListMinusDSstore.slice(indexOfPrototypeComponentsFolder + 1);

cleanedList.map(function(component){
	writeThisFileName(component);
});

function writeThisFileName(component){
	console.log(componentsList.indexOf(component));
	let theIDtoWrite = `patterLibSection_${componentsList.indexOf(component)}`
	const testHTML = `<section id="${theIDtoWrite}" class="patternLib__section">{{> ../../components/${component}/${component}.hbs}}</section>`;
	ObjectOfHTMLtoWrite.push(testHTML);
}

var rejoinedObjectOfHTMLtoWrite = ObjectOfHTMLtoWrite.join('');
fs.writeFile('src/views/_compiledPartials/patternLib_componentListCOMPILED.hbs', rejoinedObjectOfHTMLtoWrite);