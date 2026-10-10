// Base de datos en línea de Presupuestos Trota.
// Google Apps Script publicado como aplicación web (Ejecutar como: yo · Acceso: cualquier persona).
// Guarda todo en una hoja de cálculo "Trota presupuestos (base de datos)" en el Drive del dueño.
// Cada fila: clave | json | actualizado. Claves: catalogo, especiales, presupuesto:<id>.

const KEY = 'trota-db-2026-k7m2';   // debe coincidir con DB.key en index.html
const SHEET = 'datos';

function db_() {
  const props = PropertiesService.getScriptProperties();
  let ss = null;
  const id = props.getProperty('SSID');
  if (id) { try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; } }
  if (!ss) { ss = SpreadsheetApp.create('Trota presupuestos (base de datos)'); props.setProperty('SSID', ss.getId()); }
  let sh = ss.getSheetByName(SHEET);
  if (!sh) {
    sh = ss.insertSheet(SHEET);
    sh.appendRow(['clave', 'json', 'actualizado']);
    sh.setFrozenRows(1);
    const first = ss.getSheets()[0];
    if (first.getName() !== SHEET && ss.getSheets().length > 1) ss.deleteSheet(first);
  }
  return sh;
}

function rows_(sh) { return sh.getDataRange().getValues(); }

function readAll_() {
  const rows = rows_(db_()), out = {};
  for (let i = 1; i < rows.length; i++) {
    if (!rows[i][0]) continue;
    try { out[rows[i][0]] = JSON.parse(rows[i][1]); } catch (e) { out[rows[i][0]] = null; }
  }
  return out;
}

function setKey_(k, v) {
  const sh = db_(), rows = rows_(sh), json = JSON.stringify(v), now = new Date();
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === k) { sh.getRange(i + 1, 2, 1, 2).setValues([[json, now]]); return; }
  }
  sh.appendRow([k, json, now]);
}

function delKey_(k) {
  const sh = db_(), rows = rows_(sh);
  for (let i = rows.length - 1; i >= 1; i--) if (rows[i][0] === k) sh.deleteRow(i + 1);
}

function handle_(p) {
  if (!p || p.key !== KEY) return { ok: false, error: 'clave incorrecta' };
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    if (p.action === 'all') return { ok: true, data: readAll_() };
    if (p.action === 'set') { setKey_(String(p.clave), p.valor); return { ok: true }; }
    if (p.action === 'del') { delKey_(String(p.clave)); return { ok: true }; }
    if (p.action === 'ping') return { ok: true, pong: true };
    return { ok: false, error: 'acción desconocida' };
  } finally { lock.releaseLock(); }
}

function respond_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) { return respond_(handle_(e && e.parameter)); }

function doPost(e) {
  let body = {};
  try { body = JSON.parse(e.postData.contents); } catch (err) { body = {}; }
  return respond_(handle_(body));
}
