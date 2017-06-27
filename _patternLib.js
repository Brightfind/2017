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
function getExtension(filename) {
    return filename.split('.').pop();
}
function writeThisFileName(component){
	let theIDtoWrite = `patterLibSection_${componentsList.indexOf(component)}`
	let filesInDir = fs.readdirSync(`${pathToComponents}${component}`)
	for (var i = 0; i < filesInDir.length; i++) {
		if(getExtension(filesInDir[i]) === 'hbs'){
			const testHTML = `<section id="${theIDtoWrite}" class="patternLib__section">{{> ../../components/${component}/${component}.hbs}}</section>`;
	ObjectOfHTMLtoWrite.push(testHTML);
		}
	}
	
}

var rejoinedObjectOfHTMLtoWrite = ObjectOfHTMLtoWrite.join('');
fs.writeFileSync('src/views/_compiledPartials/patternLib_componentListCOMPILED.hbs', rejoinedObjectOfHTMLtoWrite);