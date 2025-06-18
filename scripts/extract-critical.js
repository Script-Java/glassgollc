// scripts/extract-critical.js
const penthouse = require('penthouse');
const fs       = require('fs');
const path     = require('path');

const cssFile = path.join(
  __dirname,
  '../.next/static/css/app/layout.css'
);

penthouse({
  url: 'http://localhost:3000',
  css: cssFile,
  width: 1920,
  height: 1080,
})
  .then(criticalCss => {
    fs.writeFileSync(
      path.join(__dirname, '../public/critical.css'),
      criticalCss
    );
    console.log('✅ critical.css generated');
  })
  .catch(err => {
    console.error('❌ Penthouse error:', err);
  });
