With node 18
1. `npm install`
2. `npm run build`

We are seeing the following error
```
   Collecting page data  .Error [ERR_UNSUPPORTED_DIR_IMPORT]: Directory import '/Users/esauerbo/projects/react-latest-next-latest-ts/node_modules/@aws-amplify/core/internals/utils' is not supported resolving ES modules imported from /Users/esauerbo/projects/react-latest-next-latest-ts/node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/utils.mjs
Did you mean to import @aws-amplify/core/lib/libraryUtils.js?
    at new NodeError (node:internal/errors:405:5)
    at finalizeResolution (node:internal/modules/esm/resolve:317:17)
    at moduleResolve (node:internal/modules/esm/resolve:943:10)
    at defaultResolve (node:internal/modules/esm/resolve:1129:11)
    at nextResolve (node:internal/modules/esm/loader:163:28)
    at ESMLoader.resolve (node:internal/modules/esm/loader:835:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:77:40)
    at link (node:internal/modules/esm/module_job:76:36) {
  code: 'ERR_UNSUPPORTED_DIR_IMPORT',
  url: 'file:///Users/esauerbo/projects/react-latest-next-latest-ts/node_modules/@aws-amplify/core/internals/utils'
}
```
