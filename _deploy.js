//Rsync
const Rsync = require('rsync')
const path = require('path')

console.log(`path: ${__dirname}${/_static/}`)
// // Credentials
const directory = 'appseed'
const localPath = '_static/'
const hostname = '45.55.149.252'
const username = 'brightfind'
const hostDestination = `/var/www/html/${directory}`
const rsync = new Rsync()
.set('progress')
.shell('ssh')
.flags('av')
.source('_static/')
.destination(`${username}@${hostname}:${hostDestination}/`)
rsync.execute(function(error, code, cmd) {
	if (error){
		console.log(error)
	}
  console.log(`
  	Deployed '_static/' to ${username}@${hostname}:${hostDestination}/`) 
  console.log(`
  	https://frontend.brightfind.com/${directory}/
  	`)
})