// Generic Docusaurus plugin that reads a directory of .md files,
// parses their YAML frontmatter, and exposes the result via usePluginData.
//
// Register in docusaurus.config.ts:
//   plugins: [
//     [require.resolve('./plugins/load-markdown-data'), {
//       id: 'my-data-id',
//       dataDir: path.join(__dirname, 'src/data/my-data-dir'),
//     }],
//   ]
//
// Consume in a component:
//   import { usePluginData } from '@docusaurus/useGlobalData';
//   const { items } = usePluginData('load-markdown-data', 'my-data-id');

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = function loadMarkdownDataPlugin(_context, options) {
  const { dataDir } = options;

  return {
    name: 'load-markdown-data',

    getPathsToWatch() {
      return [dataDir];
    },

    async loadContent() {
      const files = fs
        .readdirSync(dataDir)
        .filter((f) => f.endsWith('.md'))
        .sort();

      return files.map((filename) => {
        const raw = fs.readFileSync(path.join(dataDir, filename), 'utf-8');
        const { data } = matter(raw);
        return data;
      });
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData({ items: content });
    },
  };
};
