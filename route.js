/* ── Login ───────────────────────────────────────────── */
.login-screen {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}
.login-card {
  width: 100%;
  max-width: 400px;
  background: var(--surface);
  border: 1px solid var(--line-strong);
  border-radius: 20px;
  padding: 34px;
  backdrop-filter: blur(10px);
  box-shadow: 0 30px 80px rgba(2, 8, 20, 0.6);
}
.login-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.login-brand svg {
  width: 40px;
  height: 40px;
}
.login-brand strong {
  display: block;
  font-size: 19px;
  color: var(--foam);
}
.login-brand small {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
}
.login-hint {
  color: var(--muted);
  font-size: 14px;
  margin: 8px 0 20px;
}
.login-back {
  display: block;
  text-align: center;
  margin-top: 18px;
  font-size: 13.5px;
  color: var(--muted);
}

/* ── Layout ──────────────────────────────────────────── */
.admin {
  display: grid;
  grid-template-columns: 256px 1fr;
  min-height: 100vh;
}
.admin-side {
  border-right: 1px solid var(--line);
  background: rgba(6, 14, 28, 0.7);
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
}
.admin-brand {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 4px 8px 22px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 18px;
}
.admin-brand svg {
  width: 34px;
  height: 34px;
}
.admin-brand strong {
  display: block;
  color: var(--foam);
  font-size: 16px;
}
.admin-brand small {
  font-size: 9.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}
.admin-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}
.admin-nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 14px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid transparent;
  color: var(--muted);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
}
.admin-nav-item:hover {
  color: var(--foam);
  background: rgba(20, 54, 95, 0.4);
}
.admin-nav-item.active {
  color: var(--foam);
  background: rgba(20, 54, 95, 0.7);
  border-color: var(--line-strong);
}
.admin-nav-item em {
  font-style: normal;
  font-size: 12px;
  font-weight: 700;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--cyan), var(--azure));
  color: #02101f;
}
.admin-side-foot {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
}
.admin-link {
  font-size: 13.5px;
  color: var(--muted);
  text-align: center;
}

.admin-main {
  padding: 28px 34px 60px;
  max-width: 1100px;
}
.admin-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
}
.admin-head h1 {
  font-size: 28px;
  color: var(--foam);
}
.admin-empty {
  padding: 50px 20px;
  text-align: center;
  color: var(--faint);
}
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.muted {
  color: var(--muted);
}

.panel {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 8px;
  margin-bottom: 18px;
  overflow: hidden;
}
.panel.editor {
  padding: 22px;
}
.panel.editor h3 {
  color: var(--foam);
  margin-bottom: 14px;
}
.editor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.editor-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 8px;
}

/* ── Table ───────────────────────────────────────────── */
.tbl {
  width: 100%;
  border-collapse: collapse;
}
.tbl th {
  text-align: left;
  font-size: 11.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--faint);
  padding: 12px 14px;
  border-bottom: 1px solid var(--line);
}
.tbl td {
  padding: 14px;
  border-bottom: 1px solid var(--line);
  font-size: 14.5px;
  color: var(--text);
}
.tbl tr:last-child td {
  border-bottom: none;
}
.tbl tr:hover td {
  background: rgba(20, 54, 95, 0.25);
}
.row-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.mini {
  font-size: 12.5px;
  font-weight: 600;
  padding: 6px 11px;
  border-radius: 8px;
  border: 1px solid var(--line-strong);
  background: rgba(20, 54, 95, 0.4);
  color: var(--ice);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.15s ease;
}
.mini:hover {
  border-color: var(--cyan);
  color: var(--foam);
}
.mini.danger:hover {
  border-color: var(--danger);
  color: var(--danger);
}
.mini.ok:hover {
  border-color: var(--ok);
  color: var(--ok);
}

/* ── Request / message cards ─────────────────────────── */
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 8px;
}
.req-card {
  background: rgba(8, 18, 38, 0.6);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 16px 18px;
}
.req-card.dim {
  opacity: 0.6;
}
.req-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
}
.req-top strong {
  color: var(--foam);
  display: block;
}
.req-top a {
  font-size: 13px;
}
.req-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 10px 0;
  font-size: 13px;
  color: var(--ice);
}
.req-body {
  font-size: 14px;
  color: var(--muted);
  margin: 8px 0 12px;
  white-space: pre-wrap;
}
.req-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

/* ── Badges ──────────────────────────────────────────── */
.badge {
  font-size: 11.5px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  text-transform: capitalize;
  white-space: nowrap;
}
.badge.ok {
  color: var(--ok);
  background: rgba(52, 226, 176, 0.13);
  border: 1px solid rgba(52, 226, 176, 0.3);
}
.badge.warn {
  color: var(--warn);
  background: rgba(255, 206, 90, 0.13);
  border: 1px solid rgba(255, 206, 90, 0.3);
}
.badge.danger {
  color: var(--danger);
  background: rgba(255, 93, 115, 0.13);
  border: 1px solid rgba(255, 93, 115, 0.3);
}
.badge.info {
  color: var(--cyan);
  background: rgba(56, 214, 255, 0.13);
  border: 1px solid var(--line-strong);
}
.badge.muted {
  color: var(--muted);
  background: rgba(136, 166, 207, 0.1);
  border: 1px solid var(--line);
}

/* ── Responsive ──────────────────────────────────────── */
@media (max-width: 860px) {
  .admin {
    grid-template-columns: 1fr;
  }
  .admin-side {
    position: static;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }
  .admin-nav {
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 100%;
  }
  .admin-side-foot {
    flex-direction: row;
    border-top: none;
    padding-top: 0;
  }
  .editor-grid {
    grid-template-columns: 1fr;
  }
  .cards {
    grid-template-columns: 1fr;
  }
  .admin-main {
    padding: 20px;
  }
  .tbl thead {
    display: none;
  }
  .tbl,
  .tbl tbody,
  .tbl tr,
  .tbl td {
    display: block;
    width: 100%;
  }
  .tbl tr {
    border: 1px solid var(--line);
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 6px;
  }
  .tbl td {
    border: none;
    display: flex;
    justify-content: space-between;
    padding: 8px 10px;
  }
  .tbl td::before {
    content: attr(data-label);
    color: var(--faint);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .row-actions {
    justify-content: flex-start;
  }
}
