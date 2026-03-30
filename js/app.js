// ===== I18N =====
function getLang() {
  return new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'ja';
}
const _lang = getLang();

const _i18n = {
  title:          { ja: 'JPYR Sales — Bitcoin 2026 営業リスト', en: 'JPYR Sales — Bitcoin 2026 Outreach List' },
  meta:           { ja: '4/27〜29 @ The Venetian, Las Vegas ｜ 更新: 2026-03-30', en: 'Apr 27–29 @ The Venetian, Las Vegas ｜ Updated: 2026-03-30' },
  shareNote:      { ja: '🔗 URLを共有するだけで閲覧・編集可能', en: '🔗 Share the URL to view & edit' },
  connecting:     { ja: '接続中...', en: 'Connecting...' },
  synced:         { ja: '同期中', en: 'Synced' },
  offline:        { ja: 'オフライン', en: 'Offline' },
  sessionTitle:   { ja: '営業チーム共有メモ', en: 'Sales Team Shared Notes' },
  sessionDesc:    { ja: 'トミーさんが優先度とプロダクトを整理し、全員が名前付きでメモを残せます。', en: 'Tommy manages priorities & products. Everyone can leave named notes.' },
  nameLabel:      { ja: 'メモする人', en: 'Your Name' },
  namePlaceholder:{ ja: '例: Tommy / Ken / Aki', en: 'e.g. Tommy / Ken / Aki' },
  roleLabel:      { ja: '権限', en: 'Role' },
  roleMember:     { ja: '営業メンバー', en: 'Member' },
  roleTommy:      { ja: 'トミーさん', en: 'Tommy' },
  nameHint:       { ja: '名前を入れると、誰のメモか見分けられるようになります。', en: 'Enter your name so others can see who wrote which note.' },
  tabSpeakers:    { ja: '🎤 スピーカー', en: '🎤 Speakers' },
  tabSponsors:    { ja: '🏢 スポンサー', en: '🏢 Sponsors' },
  searchPlaceholder:{ ja: '🔍 検索...', en: '🔍 Search...' },
  filterAll:      { ja: '全て', en: 'All' },
  filterOther:    { ja: 'その他PJ', en: 'Other' },
  filterHigh:     { ja: '🔴 重要', en: '🔴 Critical' },
  filterMed:      { ja: '🟡 優先', en: '🟡 Priority' },
  filterLow:      { ja: '🟢 できれば', en: '🟢 Nice to have' },
  legendHigh:     { ja: '🔴 重要（必ず話す）', en: '🔴 Critical (must talk)' },
  legendMed:      { ja: '🟡 優先（優先的に話す）', en: '🟡 Priority (should talk)' },
  legendLow:      { ja: '🟢 できれば（余裕があれば）', en: '🟢 Nice to have (if possible)' },
  legendNew:      { ja: 'NEW = 前回リストに未掲載', en: 'NEW = Not on previous list' },
  priTitleHigh:   { ja: '🔴 重要', en: '🔴 Critical' },
  priTitleMed:    { ja: '🟡 優先', en: '🟡 Priority' },
  priTitleLow:    { ja: '🟢 できれば', en: '🟢 Nice to have' },
  pitchOther:     { ja: 'その他', en: 'Other' },
  statusTommy:    { ja: ' として利用中。優先度とプロダクトの整理、メモ投稿ができます。', en: '. Can manage priorities, products, and post notes.' },
  statusMember:   { ja: ' として利用中。メモ投稿はできますが、優先度とプロダクトはトミーさんのみ編集できます。', en: '. Can post notes. Priorities & products are Tommy-only.' },
  statsShowing:   { ja: (n, m) => `表示中: ${n}件 / 全${m}件`, en: (n, m) => `Showing: ${n} / ${m} total` },
  statsSponsor:   { ja: (n, m) => `表示中: ${n}社 / 全${m}社`, en: (n, m) => `Showing: ${n} / ${m} total` },
  tierSuffix:     { ja: (n) => `${n}社`, en: (n) => `${n} companies` },
  memoEdit:       { ja: '編集', en: 'Edit' },
  memoDelete:     { ja: '削除', en: 'Delete' },
  memoEmpty:      { ja: 'まだメモはありません。営業前の温度感や話したいポイントを残せます。', en: 'No notes yet. Leave talking points or context for your team.' },
  memoLegacy:     { ja: '既存メモ', en: 'Legacy Note' },
  memoLegacyMeta: { ja: '旧フォーマット', en: 'Old format' },
  memoAddLabel:   { ja: (name) => `${name} のメモを追加`, en: (name) => `Add note as ${name}` },
  memoAddDisabled:{ ja: '名前を入れてからメモ追加', en: 'Enter your name to add notes' },
  memoPlaceholder:{ ja: '例: 話しかける順番、相手の関心、引き継ぎ事項など', en: 'e.g. approach order, their interests, handoff notes' },
  memoSubmit:     { ja: 'メモを追加', en: 'Add Note' },
  memoUpdate:     { ja: '更新する', en: 'Update' },
  lockedNote:     { ja: '優先度とプロダクトはトミーさんだけ編集できます。', en: 'Only Tommy can edit priorities & products.' },
  alertNoName:    { ja: '先に上部の「メモする人」に名前を入力してください。', en: 'Please enter your name in the "Your Name" field first.' },
  defaultTommy:   { ja: 'トミーさん', en: 'Tommy' },
};

function t(key) { return _i18n[key] ? _i18n[key][_lang] : key; }

function applyI18n() {
  document.documentElement.lang = _lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (_i18n[key]) el.textContent = _i18n[key][_lang];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (_i18n[key]) el.placeholder = _i18n[key][_lang];
  });
}

function switchLang(lang) {
  const url = new URL(window.location);
  if (lang === 'ja') url.searchParams.delete('lang');
  else url.searchParams.set('lang', lang);
  window.location.href = url.toString();
}

// ===== FIREBASE =====
const firebaseConfig = {
  apiKey: "AIzaSyBvm3k_I6MFZuXRRIGt02D0w1sfiVkkV-w",
  authDomain: "jpyr-sales.firebaseapp.com",
  databaseURL: "https://jpyr-sales-default-rtdb.firebaseio.com",
  projectId: "jpyr-sales",
  storageBucket: "jpyr-sales.firebasestorage.app",
  messagingSenderId: "13285805175",
  appId: "1:13285805175:web:5f93b4b83bdcb179f80a72"
};
firebase.initializeApp(firebaseConfig);
const DB = firebase.database();
let _fbSpeakers = {};
let _fbSponsors = {};
let _currentTab = 'speakers';
let _filters = { speakers: 'all', sponsors: 'all' };
let _search = { speakers: '', sponsors: '' };
let _session = loadSession();

// Firebase key sanitizer
function fbKey(name) {
  return name.replace(/[.#$\[\]\/\s]/g, '_');
}

function loadSession() {
  try {
    const raw = localStorage.getItem('jpyr-sales-session');
    const parsed = raw ? JSON.parse(raw) : {};
    return {
      name: typeof parsed.name === 'string' ? parsed.name : '',
      role: parsed.role === 'tommy' ? 'tommy' : 'member'
    };
  } catch (err) {
    return { name: '', role: 'member' };
  }
}

function persistSession() {
  localStorage.setItem('jpyr-sales-session', JSON.stringify(_session));
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function jsValue(value) {
  return JSON.stringify(value);
}

function canManageSalesPlan() {
  return _session.role === 'tommy';
}

function currentMemberName() {
  const name = (_session.name || '').trim();
  if (!name && _session.role === 'tommy') return t('defaultTommy');
  return name;
}

function formatDateTime(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

function getStore(type) {
  return type === 'speaker' ? _fbSpeakers : _fbSponsors;
}

function getEntry(type, name) {
  const store = getStore(type);
  return store[fbKey(name)] || {};
}

// Connection status
DB.ref('.info/connected').on('value', snap => {
  const dot = document.getElementById('sync-dot');
  const label = document.getElementById('sync-label');
  if (snap.val()) {
    dot.classList.add('online');
    label.textContent = t('synced');
  } else {
    dot.classList.remove('online');
    label.textContent = t('offline');
  }
});

// Real-time listeners
DB.ref('jpyr-sales/speakers').on('value', snap => {
  _fbSpeakers = snap.val() || {};
  renderSpeakers();
});
DB.ref('jpyr-sales/sponsors').on('value', snap => {
  _fbSponsors = snap.val() || {};
  renderSponsors();
});

// ===== HELPERS =====
function getEffPri(type, name, dataPri) {
  const fb = getEntry(type, name);
  return fb && fb.priority ? fb.priority : dataPri;
}

function getEffPitches(type, name, defaultPitches) {
  const fb = getEntry(type, name);
  if (fb && fb.pitches) return Object.keys(fb.pitches);
  return migratePitch(defaultPitches || []);
}

function getLegacyMemo(type, name) {
  const fb = getEntry(type, name);
  return fb && fb.memo ? fb.memo : '';
}

function getMemos(type, name) {
  const fb = getEntry(type, name);
  const memos = Object.entries(fb.memos || {}).map(([id, memo]) => ({
    id,
    author: memo.author || 'Sales Note',
    text: memo.text || '',
    updatedAt: memo.updatedAt || memo.createdAt || ''
  })).filter(memo => memo.text.trim());
  memos.sort((a, b) => String(b.updatedAt || '').localeCompare(String(a.updatedAt || '')));
  return memos;
}

function getMemoSearchText(type, name) {
  const texts = getMemos(type, name).map(m => m.text);
  const legacyMemo = getLegacyMemo(type, name);
  if (legacyMemo) texts.push(legacyMemo);
  return texts.join(' ').toLowerCase();
}

function setPriority(type, name, pri) {
  if (!canManageSalesPlan()) return;
  const key = fbKey(name);
  const path = `jpyr-sales/${type}s/${key}/priority`;
  const store = getStore(type);
  const current = store[key] && store[key].priority;
  if (current === pri) {
    DB.ref(path).remove();
  } else {
    DB.ref(path).set(pri);
  }
}

function togglePitch(type, name, pitchKey) {
  if (!canManageSalesPlan()) return;
  const key = fbKey(name);
  const ref = DB.ref(`jpyr-sales/${type}s/${key}/pitches/${pitchKey}`);
  const store = getStore(type);
  const current = store[key]?.pitches?.[pitchKey];
  if (current) {
    ref.remove();
  } else {
    ref.set(true);
  }
}

function saveMemo(type, name, memoId, text) {
  const author = currentMemberName();
  if (!author) return;
  const key = fbKey(name);
  const ref = DB.ref(`jpyr-sales/${type}s/${key}/memos/${memoId}`);
  if (text.trim()) {
    ref.update({
      author,
      text: text.trim(),
      updatedAt: new Date().toISOString()
    });
  } else {
    ref.remove();
  }
}

function addMemo(type, name) {
  const author = currentMemberName();
  if (!author) {
    alert(t('alertNoName'));
    return;
  }
  const textarea = document.getElementById(`composer-${type}-${fbKey(name)}`);
  if (!textarea) return;
  const text = textarea.value.trim();
  if (!text) return;
  const memoId = DB.ref().push().key;
  DB.ref(`jpyr-sales/${type}s/${fbKey(name)}/memos/${memoId}`).set({
    author,
    text,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
  textarea.value = '';
}

function toggleMemoEditor(type, name, memoId, forceOpen) {
  const editor = document.getElementById(`memo-editor-${type}-${fbKey(name)}-${memoId}`);
  if (!editor) return;
  const isOpening = forceOpen !== undefined ? forceOpen : editor.classList.contains('hidden');
  editor.classList.toggle('hidden', !isOpening);
  if (isOpening) {
    const textarea = editor.querySelector('.memo-textarea');
    if (textarea) textarea.focus();
  }
}

function updateCharCounter(textarea) {
  const wrapper = textarea.closest('.memo-editor, .memo-composer');
  const charEl = wrapper ? wrapper.querySelector('.memo-char') : null;
  if (charEl) charEl.textContent = textarea.value.length + '/500';
}

function saveExistingMemo(type, name, memoId) {
  const textarea = document.getElementById(`memo-input-${type}-${fbKey(name)}-${memoId}`);
  if (!textarea) return;
  saveMemo(type, name, memoId, textarea.value);
  toggleMemoEditor(type, name, memoId, false);
}

function deleteMemo(type, name, memoId) {
  const key = fbKey(name);
  DB.ref(`jpyr-sales/${type}s/${key}/memos/${memoId}`).remove();
}

function setRole(role) {
  _session.role = role === 'tommy' ? 'tommy' : 'member';
  persistSession();
  syncSessionUI();
  renderSpeakers();
  renderSponsors();
}

function handleNameInput(value) {
  _session.name = value.slice(0, 24);
  persistSession();
  syncSessionUI();
  renderSpeakers();
  renderSponsors();
}

function syncSessionUI() {
  const nameInput = document.getElementById('member-name');
  const memberBtn = document.getElementById('role-member');
  const tommyBtn = document.getElementById('role-tommy');
  const status = document.getElementById('session-status');
  if (nameInput && nameInput.value !== _session.name) nameInput.value = _session.name;
  if (memberBtn) memberBtn.classList.toggle('active', _session.role === 'member');
  if (tommyBtn) tommyBtn.classList.toggle('active', _session.role === 'tommy');
  if (!status) return;
  if (!currentMemberName()) {
    status.textContent = t('nameHint');
    return;
  }
  if (canManageSalesPlan()) {
    status.textContent = currentMemberName() + t('statusTommy');
    return;
  }
  status.textContent = currentMemberName() + t('statusMember');
}

// ===== TAB & FILTER =====
function switchTab(tab) {
  _currentTab = tab;
  document.querySelectorAll('.tab').forEach((t, i) => {
    t.classList.toggle('active', (i === 0 && tab === 'speakers') || (i === 1 && tab === 'sponsors'));
  });
  document.getElementById('filters-speakers').classList.toggle('hidden', tab !== 'speakers');
  document.getElementById('filters-sponsors').classList.toggle('hidden', tab !== 'sponsors');
  document.getElementById('content-speakers').classList.toggle('hidden', tab !== 'speakers');
  document.getElementById('content-sponsors').classList.toggle('hidden', tab !== 'sponsors');
}

function setFilter(tab, filter, btn) {
  _filters[tab] = filter;
  btn.closest('.filters').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (tab === 'speakers') renderSpeakers();
  else renderSponsors();
}

function handleSearch(tab, value) {
  _search[tab] = value.toLowerCase();
  if (tab === 'speakers') renderSpeakers();
  else renderSponsors();
}

// ===== PITCH LABEL CONFIG =====
const PITCH_CONFIG = {
  jpyr: { label: 'JPYR', cls: 'ptag-jpyr' },
  sto: { label: 'STO', cls: 'ptag-sto' },
  izy: { label: 'IZY', cls: 'ptag-izy' },
  cpd: { label: 'CPD', cls: 'ptag-cpd' },
  other: { get label() { return t('pitchOther'); }, cls: 'ptag-other' }
};

function pitchTogglesHTML(type, name, activePitches) {
  const disabled = !canManageSalesPlan();
  return '<div class="pitch-toggles">' +
    Object.entries(PITCH_CONFIG).map(([key, cfg]) => {
      const isActive = activePitches.includes(key);
      return `<button class="pitch-toggle ${cfg.cls}${isActive ? ' active' : ''}" ${disabled ? 'disabled' : ''} onclick='togglePitch(${jsValue(type)},${jsValue(name)},${jsValue(key)})'>${cfg.label}</button>`;
    }).join('') +
    '</div>';
}

function memoHTML(type, name) {
  const memos = getMemos(type, name);
  const legacyMemo = getLegacyMemo(type, name);
  const key = fbKey(name);
  const currentName = currentMemberName();
  const listHTML = memos.length
    ? memos.map(memo => {
      const mine = currentName && memo.author === currentName;
      return `<div class="memo-item">
        <div class="memo-head">
          <div class="memo-author">${escapeHTML(memo.author)}</div>
          <div class="memo-meta">${escapeHTML(formatDateTime(memo.updatedAt))}</div>
        </div>
        <div class="memo-body">${escapeHTML(memo.text)}</div>
        ${mine ? `<div class="memo-actions">
          <button class="memo-btn" type="button" onclick='toggleMemoEditor(${jsValue(type)},${jsValue(name)},${jsValue(memo.id)},true)'>${t('memoEdit')}</button>
          <button class="memo-btn" type="button" onclick='deleteMemo(${jsValue(type)},${jsValue(name)},${jsValue(memo.id)})'>${t('memoDelete')}</button>
        </div>
        <div class="memo-editor hidden" id="memo-editor-${type}-${key}-${memo.id}">
          <textarea class="memo-textarea" id="memo-input-${type}-${key}-${memo.id}" maxlength="500" oninput="updateCharCounter(this)">${escapeHTML(memo.text)}</textarea>
          <div class="memo-char">${memo.text.length}/500</div>
          <button class="memo-submit" type="button" onclick='saveExistingMemo(${jsValue(type)},${jsValue(name)},${jsValue(memo.id)})'>${t('memoUpdate')}</button>
        </div>` : ''}
      </div>`;
    }).join('')
    : `<div class="memo-empty">${t('memoEmpty')}</div>`;

  const legacyHTML = legacyMemo
    ? `<div class="memo-item legacy">
      <div class="memo-head">
        <div class="memo-author">${t('memoLegacy')}</div>
        <div class="memo-meta">${t('memoLegacyMeta')}</div>
      </div>
      <div class="memo-body">${escapeHTML(legacyMemo)}</div>
    </div>`
    : '';

  return `<div class="memo-area">
    <div class="section-label">Team Memo</div>
    <div class="memo-list">${legacyHTML}${listHTML}</div>
    <div class="memo-composer">
      <div class="memo-composer-head">
        <div class="memo-composer-label">${currentName ? t('memoAddLabel')(escapeHTML(currentName)) : t('memoAddDisabled')}</div>
      </div>
      <textarea class="memo-textarea" id="composer-${type}-${key}" maxlength="500" oninput="updateCharCounter(this)" placeholder="${t('memoPlaceholder')}" ${currentName ? '' : 'disabled'}></textarea>
      <div class="memo-char">0/500</div>
      <button class="memo-submit" type="button" onclick='addMemo(${jsValue(type)},${jsValue(name)})' ${currentName ? '' : 'disabled'}>${t('memoSubmit')}</button>
    </div>
  </div>`;
}

function priPickerHTML(type, name, effPri) {
  const disabled = !canManageSalesPlan();
  const levels = [
    { key: 'high', cls: 'dot-high', title: t('priTitleHigh') },
    { key: 'med', cls: 'dot-med', title: t('priTitleMed') },
    { key: 'low', cls: 'dot-low', title: t('priTitleLow') }
  ];
  return '<div class="pri-picker">' +
    levels.map(l => `<div class="pri-dot ${l.cls}${effPri === l.key ? ' active' : ''}${disabled ? ' disabled' : ''}" title="${l.title}" onclick='setPriority(${jsValue(type)},${jsValue(name)},${jsValue(l.key)})'></div>`).join('') +
    '</div>';
}

function managementSectionHTML(type, name, effPri, effPitches) {
  return `<div class="card-section">
    <div class="section-label">Tommy Settings</div>
    ${priPickerHTML(type, name, effPri)}
    ${pitchTogglesHTML(type, name, effPitches)}
    ${canManageSalesPlan() ? '' : `<div class="locked-note">${t('lockedNote')}</div>`}
  </div>`;
}

// ===== RENDER SPEAKERS =====
function renderSpeakers() {
  const container = document.getElementById('content-speakers');
  const filter = _filters.speakers;
  const search = _search.speakers;
  let filtered = speakers.filter(s => {
    const name = s.en;
    const effPri = getEffPri('speaker', name, s.priority);
    const effPitches = getEffPitches('speaker', name, s.pitch);
    const memoText = getMemoSearchText('speaker', name);

    // Search
    if (search) {
      const q = search;
      const match = s.jp.toLowerCase().includes(q) || s.en.toLowerCase().includes(q) ||
        s.company.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q) ||
        memoText.includes(q);
      if (!match) return false;
    }

    // Filter
    if (filter === 'all') return true;
    if (filter === 'high' || filter === 'med' || filter === 'low') return effPri === filter;
    return effPitches.includes(filter);
  });

  document.getElementById('stats-speakers').textContent = t('statsShowing')(filtered.length, speakers.length);

  container.innerHTML = filtered.map(s => {
    const name = s.en;
    const effPri = getEffPri('speaker', name, s.priority);
    const effPitches = getEffPitches('speaker', name, s.pitch);
    const tw = speakerTwitter[name];
    const web = speakerWebsite[name];
    const photoHTML = s.photo
      ? `<img class="card-photo" src="${CDN}${s.photo}" alt="${s.en}" loading="lazy">`
      : `<div class="card-photo-placeholder">${s.jp[0]}</div>`;

    const cardDesc = _lang === 'en' && s.descEn ? s.descEn : s.desc;
    const cardCat = _lang === 'en' && s.catEn ? s.catEn : s.cat;

    return `<div class="card pri-${effPri}">
      ${s.isNew ? '<div class="card-new">NEW</div>' : ''}
      <div class="card-top">
        ${photoHTML}
        <div class="card-info">
          <div class="card-name-jp">${_lang === 'en' ? s.en : s.jp}</div>
          <div class="card-name-en">${_lang === 'en' ? s.jp : s.en}</div>
          <div class="card-company">${s.company}</div>
          <div class="card-role">${s.role}</div>
          <span class="card-cat">${cardCat}</span>
        </div>
      </div>
      <div class="card-desc">${cardDesc}</div>
      <div class="card-links">
        ${tw ? `<a href="https://x.com/${tw}" target="_blank">𝕏 @${tw}</a>` : ''}
        ${web ? `<a href="${web}" target="_blank">🌐 Website</a>` : ''}
      </div>
      ${managementSectionHTML('speaker', name, effPri, effPitches)}
      ${memoHTML('speaker', name)}
    </div>`;
  }).join('');
}

// ===== RENDER SPONSORS =====
const TIER_LABELS = { moon: '🌙 Moon', block3: '⬛⬛⬛ 3-Block', block2: '⬛⬛ 2-Block', block1: '⬛ 1-Block' };

function renderSponsors() {
  const container = document.getElementById('content-sponsors');
  const filter = _filters.sponsors;
  const search = _search.sponsors;
  let html = '';
  let totalShown = 0;
  let totalAll = 0;

  for (const [tier, list] of Object.entries(sponsors)) {
    totalAll += list.length;
    const filtered = list.filter(s => {
      const name = s.name;
      const effPri = getEffPri('sponsor', name, 'low');
      const effPitches = getEffPitches('sponsor', name, s.pitch);
      const memoText = getMemoSearchText('sponsor', name);

      if (search) {
        const q = search;
        const match = name.toLowerCase().includes(q) || s.cat.toLowerCase().includes(q) ||
          s.desc.toLowerCase().includes(q) || memoText.includes(q);
        if (!match) return false;
      }

      if (filter === 'all') return true;
      if (filter === 'high' || filter === 'med' || filter === 'low') return effPri === filter;
      return effPitches.includes(filter);
    });

    if (filtered.length === 0) continue;
    totalShown += filtered.length;

    html += `<div class="tier-header">${TIER_LABELS[tier] || tier} | ${t('tierSuffix')(filtered.length)}</div>`;

    html += filtered.map(s => {
      const name = s.name;
      const effPri = getEffPri('sponsor', name, 'low');
      const effPitches = getEffPitches('sponsor', name, s.pitch);
      const tw = sponsorTwitter[name];
      const logo = sponsorLogos[name];
      const logoHTML = logo
        ? `<img class="sponsor-logo" src="${CDN}${logo}" alt="${name}" loading="lazy">`
        : '';

      const sDesc = _lang === 'en' && s.descEn ? s.descEn : s.desc;
      const sCat = _lang === 'en' && s.catEn ? s.catEn : s.cat;

      return `<div class="card pri-${effPri}">
        ${s.isNew ? '<div class="card-new">NEW</div>' : ''}
        <div class="card-top">
          ${logoHTML}
          <div class="card-info">
            <div class="card-name-jp" style="font-size:14px;">${name}</div>
            <span class="card-cat">${sCat}</span>
          </div>
        </div>
        <div class="card-desc">${sDesc}</div>
        <div class="card-links">
          ${tw ? `<a href="https://x.com/${tw}" target="_blank">𝕏 @${tw}</a>` : ''}
          ${s.url && s.url !== '#' ? `<a href="${s.url}" target="_blank">🌐 Website</a>` : ''}
        </div>
        ${managementSectionHTML('sponsor', name, effPri, effPitches)}
        ${memoHTML('sponsor', name)}
      </div>`;
    }).join('');
  }

  document.getElementById('stats-sponsors').textContent = t('statsSponsor')(totalShown, totalAll);
  container.innerHTML = html;
}

// Init
applyI18n();
document.getElementById('member-name').addEventListener('input', e => handleNameInput(e.target.value));
syncSessionUI();
renderSpeakers();
renderSponsors();
