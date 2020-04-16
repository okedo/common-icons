# CommonIcons

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

To add new icon you need:

- Place icon svg into `common-icons/src/assets/icons`;
- If icon has fill color, remove it (inline svg used, so fill color can not be overrwitten by css) ;
- In root directory run: `npm run sprites`;
- Add icon name(should be the same as svg filename) to `ICON_NAMES` array in `common-icons/src/lib/common-icons-names.ts`;
- Update package version in `common-icons/package.json`;
- Run `npm run build_lib`;
- Run `npm run publish`;


To use in your app you should:

- Install package via npm: `npm i --save @spike_doc/common-icons`;
- Add Material icon fonts to index.html of app:

````
<link
  href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
  rel="stylesheet"
/>
```

And update polyfills.ts:
```
  import 'svgxuse/svgxuse.js';
```
````
