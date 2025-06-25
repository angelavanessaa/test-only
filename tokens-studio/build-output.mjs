import fs from 'fs/promises';
import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

register(StyleDictionary);

async function main() {
  try {
    // Step 1: Read and flatten tokens
    const raw = JSON.parse(await fs.readFile('./tokens.json', 'utf-8'));
    const { core = {}, ...rest } = raw;
    const flattened = { ...core, ...rest };

    // Step 2: Remove invalid references (e.g. unresolved {foo.bar})
    function stripInvalidReferences(obj) {
      return JSON.parse(JSON.stringify(obj), (key, value) => {
        if (typeof value === 'string' && value.includes('{') && value.includes('}')) {
          // Optionally: log or collect these keys
          return undefined;
        }
        return value;
      });
    }
    const cleaned = stripInvalidReferences(flattened);

    // Step 3: Write cleaned tokens to file
    await fs.writeFile('./tokens-flattened.json', JSON.stringify(cleaned, null, 2));

    // Step 4: Configure Style Dictionary
    const sd = new StyleDictionary({
      source: ['./tokens-flattened.json'],
      preprocessors: ['tokens-studio'],
      log: { verbosity: 'verbose' },
      platforms: {
        css: {
          transformGroup: 'tokens-studio',
          transforms: ['name/kebab'],
          buildPath: './build/css/',
          files: [
            {
              destination: 'variables.css',
              format: 'css/variables',
            },
          ],
        },
        scss: {
          transformGroup: 'tokens-studio',
          transforms: ['name/kebab'],
          buildPath: './build/scss/',
          files: [
            {
              destination: '_variables.scss',
              format: 'scss/variables',
            },
          ],
        },
        less: {
          transformGroup: 'tokens-studio',
          transforms: ['name/kebab'],
          buildPath: './build/less/',
          files: [
            {
              destination: 'variables.less',
              format: 'less/variables',
            },
          ],
        },
        json: {
          transformGroup: 'tokens-studio',
          buildPath: './build/json/',
          files: [
            {
              destination: 'tokens.json',
              format: 'json',
            },
          ],
        },
        ts: {
          transformGroup: 'tokens-studio',
          buildPath: './build/ts/',
          files: [
            {
              destination: 'colorToken.ts',
              format: 'javascript/es6',
              filter: token => token.type === 'color',
            },
            {
              destination: 'spacingToken.ts',
              format: 'javascript/es6',
              filter: token => token.type === 'spacing',
            },
            {
              destination: 'fontWeightToken.ts',
              format: 'javascript/es6',
              filter: token => token.type === 'fontWeight',
            },
          ],
        },
      },
    });

    // Step 5: Build tokens
    await sd.cleanAllPlatforms();
    await sd.buildAllPlatforms();
    console.log('✅ Tokens built successfully!');
  } catch (err) {
    console.error('❌ Failed to build tokens:', err);
    process.exit(1);
  }
}

main();