const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const reactDocgen = require('react-docgen');
const ReactDocGenMarkdownRenderer = require('react-docgen-markdown-renderer');
const config = require('../config/docs/index.js');

const componentsBasePath = path.join(__dirname, '../components');
const renderer = new ReactDocGenMarkdownRenderer({
  componentsBasePath,
});

function generateDocFile(componentPath) {
  if (
    !_.some(_.map(config.ignored, ignoredComponent => componentPath.includes(ignoredComponent)))
  ) {
    fs.readFile(`${componentPath}/index.js`, (readErr, content) => {
      if (!readErr) {
        fs.writeFile(
          `${componentPath}/doc${renderer.extension}`,
          renderer.render(componentPath, reactDocgen.parse(content), []),
          (writeErr) => {
            if (writeErr) throw writeErr;
            console.log(`${componentPath} doc generated...`);
          },
        );
      }
    });
  }
}

const walk = (dir) => {
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = `${dir}/${file}`;
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      walk(filePath);
    } else if (filePath.includes('index.js')) {
      const componentPath = filePath.replace('/index.js', '');
      generateDocFile(componentPath);
    }
  });
};

walk(componentsBasePath);
