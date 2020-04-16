# CommonIcons

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

# Adding new icon

To add new icon you need:

- Place icon svg into `common-icons/src/assets/icons`;
- If icon svg has fill color(`fill="somecolor"`), remove it (inline svg used, so fill color can not be overrwitten by css) ;
- In root directory run: `npm run sprites`;
- Add icon name(should be the same as svg filename) to `ICON_NAMES` array in `common-icons/src/lib/common-icons-names.ts`;
- Update package version in `common-icons/package.json`;
- Run `npm run build_lib`;
- Run `npm run publish`;

# Usage in app

To use in your app you should:

- Install package via npm: `npm i --save @spike_doc/common-icons`;
- Add Material icon fonts to index.html of app:

```
<link
  href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
  rel="stylesheet"
/>
```

- Update polyfills.ts:

```
  import 'svgxuse/svgxuse.js';
```

- Add import for `CommonIconsModule` to Module in which you want use icons;

- Add icon into html:

```
common-icon
  [iconName]="'clear'"
  [style]="{ width: '20px', height: '20px', fill: 'red' }"
></common-icon>
```

# API

| Prop | Type | Default Value|
| ------------ | ------------ ||
| iconName | String |""|
| style | [key: string]: any; |{ }|
