14:47:24.462 Running build in Washington, D.C., USA (East) – iad1
14:47:24.463 Build machine configuration: 2 cores, 8 GB
14:47:24.893 Cloning github.com/mattmonjan-tech/smarterride.ai (Branch: main, Commit: 908f268)
14:47:24.894 Previous build caches not available.
14:47:25.299 Cloning completed: 406.000ms
14:47:25.972 Running "vercel build"
14:47:26.380 Vercel CLI 48.12.1
14:47:27.240 Running "install" command: `npm install --no-package-lock --force`...
14:47:27.508 npm warn using --force Recommended protections disabled.
14:47:51.660 npm warn deprecated node-domexception@1.0.0: Use your platform's native DOMException instead
14:47:54.162 
14:47:54.163 added 265 packages, and audited 266 packages in 27s
14:47:54.163 
14:47:54.164 44 packages are looking for funding
14:47:54.164   run `npm fund` for details
14:47:54.177 
14:47:54.178 2 moderate severity vulnerabilities
14:47:54.178 
14:47:54.179 To address all issues (including breaking changes), run:
14:47:54.179   npm audit fix --force
14:47:54.179 
14:47:54.179 Run `npm audit` for details.
14:47:54.451 
14:47:54.452 > ridesmart-app@53.0.0 build
14:47:54.452 > tsc && vite build
14:47:54.452 
14:47:55.927 src/App.tsx(557,8): error TS17008: JSX element 'main' has no corresponding closing tag.
14:47:55.928 src/App.tsx(852,62): error TS1127: Invalid character.
14:47:55.929 src/App.tsx(856,48): error TS1381: Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
14:47:55.929 src/App.tsx(856,49): error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
14:47:55.929 src/App.tsx(858,47): error TS17002: Expected corresponding JSX closing tag for 'div'.
14:47:55.929 src/App.tsx(860,37): error TS1005: ')' expected.
14:47:55.930 src/App.tsx(861,35): error TS1381: Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
14:47:55.930 src/App.tsx(864,21): error TS1005: ')' expected.
14:47:55.930 src/App.tsx(865,18): error TS1381: Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
14:47:55.930 src/App.tsx(902,7): error TS1005: ')' expected.
14:47:55.930 src/App.tsx(938,5): error TS1128: Declaration or statement expected.
14:47:55.930 src/App.tsx(939,3): error TS1109: Expression expected.
14:47:55.931 src/App.tsx(980,1): error TS1160: Unterminated template literal.
14:47:55.956 Error: Command "npm run build" exited with 2
