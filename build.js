const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const sectionsDir = path.join(projectDir, 'sections');

// Ordered list of sections
const sectionFiles = [
  'navbar.html',
  'hero.html',
  'marquee.html',
  'capabilities.html',
  'tiers.html',
  'comparison.html',
  'founders.html',
  'case-studies.html',
  'audit.html',
  'faq.html',
  'cta.html',
  'footer.html'
];

let sectionsHtml = '';
for (const file of sectionFiles) {
  const filePath = path.join(sectionsDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8').trim();
    sectionsHtml += `\n    <!-- ========================================== -->\n`;
    sectionsHtml += `    <!-- SECTION: sections/${file} -->\n`;
    sectionsHtml += `    <!-- ========================================== -->\n`;
    sectionsHtml += content + '\n\n';
  } else {
    console.warn(`Warning: Section file not found: ${file}`);
  }
}

const indexTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arkevo | Marketplace Growth & Efficiency | Amazon & Walmart PPC</title>
    <meta name="description" content="Arkevo engineers predictable, profitable marketplace growth across Amazon Ads & Walmart Connect with algorithmic bid management, ACoS reduction, and retail-ready catalog SEO.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
    
    <!-- ========================================== -->
    <!-- SUB-DISTRIBUTED MODULAR CSS STYLESHEETS     -->
    <!-- ========================================== -->
    <!-- Base Tokens, Reset & Typography -->
    <link rel="stylesheet" href="css/base.css">

    <!-- Section-Specific Modular Styles -->
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/hero.css">
    <link rel="stylesheet" href="css/marquee.css">
    <link rel="stylesheet" href="css/capabilities.css">
    <link rel="stylesheet" href="css/tiers.css">
    <link rel="stylesheet" href="css/comparison.css">
    <link rel="stylesheet" href="css/founders.css">
    <link rel="stylesheet" href="css/case-studies.css">
    <link rel="stylesheet" href="css/audit.css">
    <link rel="stylesheet" href="css/faq.css">
    <link rel="stylesheet" href="css/cta.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>

${sectionsHtml}
    <!-- ========================================== -->
    <!-- SUB-DISTRIBUTED MODULAR JAVASCRIPT SCRIPTS  -->
    <!-- ========================================== -->
    <script src="js/animations.js"></script>
    <script src="js/navbar.js"></script>
    <script src="js/particles.js"></script>
    <script src="js/faq.js"></script>
    <script src="js/audit.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(projectDir, 'index.html'), indexTemplate);
console.log('Successfully compiled index.html with sub-distributed CSS, JS, and HTML sections!');
