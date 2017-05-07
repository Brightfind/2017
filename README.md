![Brightfind](http://jeremy.brightfind.com/appSeedBannerImage1.png)

# Frontend Base Project
> from-scratch **Webpack 2** app

> Pure Javascript: **No JQuery Allowed**


---

## Features:


### Build
- **Webpack 2**: *for JS bundling & app structure, with minimal (if tricky) configuration*
- **Webpack Dev Server**: *for instant style updates (no refresh!) & fast JS recompilations with auto browser refresh (refresh usually needed, so real need for HMR)*
- **Production Script**: *for shipping svelte sites*
- **Deploy Script** *under development*
- **Yarn** *because cats*

### Javascript
- **Babel**: *so you can write that sweet, sweet ES6*
- **EShint**: *JS linting can be seasoned to taste*
- **No JQuery**: *avoid dependencies or all is lost*

### Style
- **SASS**: *natch*
- **Native CSS Grid** *included, with Flexbox fallback. Avoid floated and/or hard-coded column width (no need for col-sm-3 anymore)!*
- **PostCSS**:
   -  **Autoprefixer**: *to empathize with owners of older/non-updated devices*
   -  **CSS Nano**: *minifies, duh*
   -  **StyleLint** *lightly applied, with* Rick & Morty-*style warning messsages*

### Templating
- **WebpackHTMLPlugin**: *creates static pages*
- **Handlebars**: *for templates & includes (minimize frontend templating logic)*
- **Pattern Library** *via custom awesomeness*

### Images
- **Lazyloading** *baked-in w/ B-LAZY*


---




### Installation:

- clone github repository
- cd into directory

```
yarn install
```

## Scripts

### Import Brightfind Prototype Components

Drag desired components from 
src/components/_bfComponents/ 
into parent folder 
src/components/

**If, mid-project you wish to refresh the prototype components folder**, run

```
yarn run updatePrototypeComponents
```

---



### Create Project Page & Pattern Library

```
yarn run patternLibProjectPage
```

### Develop [FAST: pages only exist in memory -- no actual html file written]

```
yarn run dev
```

### Build for Prod [outputs static folder]

```
yarn run prod
```

### Prod + Deploy

```
yarn run deploy
```

### Update Prototype Components

```
yarn run updatePrototypeComponents
```

---

## Adding Pages

- Add handlebars file in the views/pages folder
- Add entry to the pages object in _pagesList.json, which is in the root of the project

```

	{
		"viewFile": "src/views/pages/_examplePageName1.hbs",
		"pageName": "examplePageName1.html"
	}

```
