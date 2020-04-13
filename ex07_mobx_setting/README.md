## Mobx Setting
1. create-react-app mobx_setting

2. cd mobx_seeting

3. Add react-app-rewired and customize-cra, and any Babel plugins you want to use
    yarn add --dev customize-cra react-app-rewired @babel/plugin-proposal-decorators

4. package.json file and edit the start, build and test scripts.
    "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
    }

5.  Create a config-overrides.js file in your project root
    // config-overrides.js
    const { override, addDecoratorsLegacy } = require('customize-cra')

    // Adds legacy decorator support to the Webpack configuration.
    module.exports = override(addDecoratorsLegacy())

6. 
```
{
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        "@babel/plugin-syntac-dynamic-import",
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy":true
            }
        ],
        [
            "@babel/plugin-proposal-class-properties",
            {
                "loose":true
            }
        ]
    ]
}
```
7. yarn start