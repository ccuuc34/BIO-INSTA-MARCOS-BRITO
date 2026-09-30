// Lê o código-fonte legível em src/ e grava em public/ (o que vai pro ar) já sem comentários
// e minificado (HTML, CSS e JS inline). Edite sempre o arquivo em src/ e rode `npm run build`
// antes de publicar (`firebase deploy --only hosting`).
import { minify } from 'html-minifier-terser';
import { readdirSync, readFileSync, writeFileSync, statSync, mkdirSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';

const ORIGEM = 'src';
const DESTINO = 'public';

function htmls(dir) {
  return readdirSync(dir).flatMap((nome) => {
    const p = join(dir, nome);
    if (statSync(p).isDirectory()) return htmls(p);
    return p.endsWith('.html') ? [p] : [];
  });
}

const opcoes = {
  collapseWhitespace: true,
  conservativeCollapse: true,
  removeComments: true,
  minifyCSS: true,
  minifyJS: { compress: { passes: 1 }, mangle: true, format: { comments: false } },
  caseSensitive: true,
  keepClosingSlash: true,
  decodeEntities: false,
};

let antes = 0, depois = 0;
for (const arquivo of htmls(ORIGEM)) {
  const original = readFileSync(arquivo, 'utf8');
  const saida = await minify(original, opcoes);
  const destino = join(DESTINO, relative(ORIGEM, arquivo));
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, saida, 'utf8');
  antes += original.length; depois += saida.length;
  console.log(`minify: ${arquivo} -> ${destino}  ${(original.length / 1024).toFixed(0)} KB -> ${(saida.length / 1024).toFixed(0)} KB`);
}
console.log(`minify: total ${(antes / 1024).toFixed(0)} KB -> ${(depois / 1024).toFixed(0)} KB`);
