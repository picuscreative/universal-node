const fs = require('fs');
const path = require('path');
const reactDocgen = require('react-docgen');
const ReactDocGenMarkdownRenderer = require('react-docgen-markdown-renderer');

const componentsBasePath = path.join(__dirname, '../components');
const renderer = new ReactDocGenMarkdownRenderer({
  componentsBasePath,
});

const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory());

dirs(componentsBasePath).forEach((component) => {
  const componentPath = `${componentsBasePath}/${component}`;
  fs.readFile(`${componentPath}/index.js`, (readErr, content) => {
    if (readErr) throw readErr;
    fs.writeFile(
      `${componentPath}/doc${renderer.extension}`,
      renderer.render(componentPath, reactDocgen.parse(content), []),
      (writeErr) => {
        if (writeErr) throw writeErr;
        console.log(`${component} doc generated...`);
      },
    );
  });
});
