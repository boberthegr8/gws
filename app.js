const allApps = (window.FIRESTICK_APPS || []).filter(app => app.enabled !== false);
const appGrid = document.getElementById('appGrid');
const emptyState = document.getElementById('emptyState');
const filterBar = document.getElementById('filterBar');
const searchInput = document.getElementById('searchInput');
const toast = document.getElementById('toast');
const ownerButton = document.getElementById('ownerButton');
const ownerPanel = document.getElementById('ownerPanel');
const copyDnsButton = document.getElementById('copyDnsButton');

let activeCategory = 'All';

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[char]));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

async function copyText(text, label = 'Copied') {
  try {
    await navigator.clipboard.writeText(text);
    showToast(label);
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    area.remove();
    showToast(label);
  }
}

function categories() {
  return ['All', ...new Set(allApps.map(app => app.category).filter(Boolean))];
}

function renderFilters() {
  filterBar.innerHTML = categories().map(category => `
    <button class="filter ${activeCategory === category ? 'active' : ''}" data-category="${escapeHtml(category)}" type="button">
      ${escapeHtml(category)}
    </button>
  `).join('');

  filterBar.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category;
      renderFilters();
      renderApps();
    });
  });
}

function appMatches(app) {
  const term = searchInput.value.trim().toLowerCase();
  const categoryMatch = activeCategory === 'All' || app.category === activeCategory;
  if (!term) return categoryMatch;
  const haystack = [app.name, app.category, app.badge, app.code, app.description, ...(app.notes || [])].join(' ').toLowerCase();
  return categoryMatch && haystack.includes(term);
}

function renderApps() {
  const apps = allApps.filter(appMatches);
  emptyState.classList.toggle('hidden', apps.length > 0);

  appGrid.innerHTML = apps.map((app, index) => {
    const notes = (app.notes || []).map(note => `<li>${escapeHtml(note)}</li>`).join('');
    const code = app.code ? escapeHtml(app.code) : 'NOT ADDED';
    const actionClass = app.recommended ? 'recommended-card' : '';

    return `
      <article class="app-card ${actionClass}" style="--delay:${index * 55}ms">
        <div class="card-topline">
          <div class="app-icon">${escapeHtml(app.shortName || app.name.slice(0, 2))}</div>
          <div class="card-badges">
            ${app.badge ? `<span class="badge">${escapeHtml(app.badge)}</span>` : ''}
            <span class="category-badge">${escapeHtml(app.category || 'App')}</span>
          </div>
        </div>

        <h3>${escapeHtml(app.name)}</h3>
        <p class="description">${escapeHtml(app.description || '')}</p>

        <div class="code-panel ${app.code ? '' : 'missing'}">
          <span>DOWNLOADER CODE</span>
          <strong>${code}</strong>
          ${app.code ? `<button class="copy-code" type="button" data-copy="${escapeHtml(app.code)}">Copy code</button>` : '<small>Add this in Owner Mode</small>'}
        </div>

        <div class="card-actions">
          ${app.downloadUrl ? `<a class="download-button" href="${escapeHtml(app.downloadUrl)}" target="_blank" rel="noreferrer">Direct APK</a>` : ''}
          ${app.detailsUrl ? `<a class="outline-button" href="${escapeHtml(app.detailsUrl)}" target="_blank" rel="noreferrer">Release Info</a>` : ''}
        </div>

        <details>
          <summary>Setup notes <span>+</span></summary>
          ${notes ? `<ul>${notes}</ul>` : '<p>No setup notes added yet.</p>'}
        </details>
      </article>
    `;
  }).join('');

  appGrid.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', () => copyText(button.dataset.copy, `Code ${button.dataset.copy} copied`));
  });
}

searchInput.addEventListener('input', renderApps);
copyDnsButton.addEventListener('click', () => copyText('https://ottipdns.com', 'Hush DNS copied'));

const params = new URLSearchParams(location.search);
if (params.get('owner') === '1') {
  ownerButton.classList.remove('hidden');
  ownerPanel.classList.remove('hidden');
  ownerButton.addEventListener('click', () => ownerPanel.scrollIntoView({ behavior: 'smooth' }));
}

renderFilters();
renderApps();
