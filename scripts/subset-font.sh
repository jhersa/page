#!/bin/sh
# Recorta la Nerd Font completa (fonts-src/) a los glifos usados en src/.
# Correr después de agregar o cambiar un icono: npm run subset-font  (requiere fonttools: pip install fonttools brotli)
set -e
cd "$(dirname "$0")/.."
UNICODES=$(python3 - <<'PY'
import re, pathlib
cps = set()
for p in pathlib.Path('src').rglob('*.vue'):
    t = p.read_text()
    cps.update(int(m, 16) for m in re.findall(r'&#x([0-9a-fA-F]+);', t))
    cps.update(ord(c) for c in t if 0xE000 <= ord(c) <= 0xF8FF or ord(c) >= 0xF0000)
print(','.join('U+%04X' % c for c in sorted(cps)))
PY
)
pyftsubset fonts-src/SymbolsNerdFont-Regular.woff2 --unicodes="$UNICODES" \
  --flavor=woff2 --layout-features='*' --no-hinting --desubroutinize \
  --output-file=public/fonts/SymbolsNerdFont-Regular.woff2
echo "Subset listo: $(wc -c < public/fonts/SymbolsNerdFont-Regular.woff2) bytes"
