const fs = require('fs');
const path = require('path');

// Simple, opinionated converter from @if/@for pseudo-syntax to *ngIf/*ngFor
// Usage: node tools/convert-template-syntax.js <dir>
// If dir is omitted, it runs on the current project's src folder.

const root = process.argv[2] || path.join(__dirname, '..', 'src');

function walk(dir, cb) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((ent) => {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, cb);
    else cb(full);
  });
}

function convert(content) {
  let out = content;

  // Convert @for (option of opcionesCourses; track option.valor) { ... }
  // to <ng-container *ngFor="let option of opcionesCourses; trackBy: optionTrack"> ... </ng-container>
  // Simpler approach: convert inline @for blocks that contain only <option> lines as in your template.

  // Pattern: @for (option of opcionesCourses; track option.valor) { <option ...>...</option> }
  // We'll replace with: <ng-container *ngFor="let option of opcionesCourses"> <option ...>...</option> </ng-container>
  out = out.replace(/@for\s*\(([^)]*)\)\s*\{([\s\S]*?)\}/g, (m, expr, inner) => {
    // expr like: option of opcionesCourses; track option.valor
    const simpleExpr = expr.split(';')[0].trim(); // keep only 'option of opcionesCourses'
    return `<ng-container *ngFor=\"${simpleExpr}\">${inner}</ng-container>`;
  });

  // Convert @if (condition) { ... } to <ng-container *ngIf="condition">...</ng-container>
  out = out.replace(/@if\s*\(([^)]*)\)\s*\{([\s\S]*?)\}/g, (m, cond, inner) => {
    return `<ng-container *ngIf=\"${cond.trim()}\">${inner}</ng-container>`;
  });

  return out;
}

function processFile(file) {
  if (!file.endsWith('.html')) return;
  const txt = fs.readFileSync(file, 'utf8');
  if (!txt.includes('@if') && !txt.includes('@for')) return;
  const converted = convert(txt);
  fs.writeFileSync(file, converted, 'utf8');
  console.log('Converted:', file);
}

walk(root, (f) => {
  try { processFile(f); } catch (e) { console.error('Fail processing', f, e.message); }
});
