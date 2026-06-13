import fs from 'fs';
import path from 'path';

const contentDir = path.resolve('src/content');
const distDir = path.resolve('dist');

if (!fs.existsSync(contentDir)) {
  console.log('src/content directory not found.');
  process.exit(0);
}

// Languages to process
const languages = ['en', 'pt'];

for (const lang of languages) {
  const langDir = path.join(contentDir, lang);
  if (!fs.existsSync(langDir)) continue;

  const folders = fs.readdirSync(langDir).filter((f) => {
    return fs.statSync(path.join(langDir, f)).isDirectory();
  });

  for (const folder of folders) {
    const folderPath = path.join(langDir, folder);
    const assetsPath = path.join(folderPath, 'assets');

    if (fs.existsSync(assetsPath)) {
      // Read index.md to get slug
      const mdPath = path.join(folderPath, 'index.md');
      let slug = '';

      if (fs.existsSync(mdPath)) {
        const content = fs.readFileSync(mdPath, 'utf-8');
        const slugMatch = content.match(/slug:\s*['"]?([^'"\r\n]+)['"]?/);
        if (slugMatch) {
          slug = slugMatch[1].trim();
        }
      }

      // Fallback if slug not found in frontmatter
      if (!slug) {
        // Parse from folder name <id>-<slug>
        const dashIndex = folder.indexOf('-');
        if (dashIndex !== -1) {
          slug = folder.substring(dashIndex + 1);
        } else {
          slug = folder;
        }
      }

      // For english (default): dist/posts/<slug>/assets
      // For portuguese: dist/pt/posts/<slug>/assets
      const relativePostsPath = lang === 'en' ? 'posts' : 'pt/posts';
      const destPath = path.join(distDir, relativePostsPath, slug, 'assets');
      console.log(`Copying assets from ${assetsPath} to ${destPath}`);

      // Create dest folder
      fs.mkdirSync(destPath, { recursive: true });

      // Copy files
      const copyRecursive = (src, dest) => {
        const entries = fs.readdirSync(src, { withFileTypes: true });
        for (const entry of entries) {
          const srcEntry = path.join(src, entry.name);
          const destEntry = path.join(dest, entry.name);
          if (entry.isDirectory()) {
            fs.mkdirSync(destEntry, { recursive: true });
            copyRecursive(srcEntry, destEntry);
          } else {
            fs.copyFileSync(srcEntry, destEntry);
          }
        }
      };

      copyRecursive(assetsPath, destPath);
    }
  }
}
