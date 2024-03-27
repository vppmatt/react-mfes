This is a version of the final project where each react application was created using the command:

npm create vite@latest

This is a working version for demo purposes provided for reference - use it at your own risk!
WARNING - this has ony been tested using the npm start command - it has not yet been built and tested for deployment.

Each application was created using the vite command.
The code from the final application was then copied into each project, and to make it work, the following files needed to be edited in each project:
- package.json (review the dependencies and scripts)
- tsconfig.json (noEmit and isolatedModules both set to false, and remove allowImportingTsExtensions or set it to false)
- webpack.config.cjs (note the file extension is not .js, also refrences to ./public/index.html are now to ./index.html)
- main.tsx needs to be renamed to index.tsx (the vite project creates main rather than index).

All warnings within projects needed to be removed (eg references to any import not used).

Note that the index.html file doesn't contain the %PUBIC_URL% variable so did not need to be edited. 

To start each project run:
npm install (to get any missing dependencies), then
npm start (to use the webpack script).


