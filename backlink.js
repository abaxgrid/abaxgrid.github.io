/* AbaxGrid back link. Include on any abaxgrid.com app with:
   <script src="/backlink.js" defer></script>
   Draws a small "← AbaxGrid" pill in the bottom-left corner. Edit here once; every app updates. */
(function () {
  if (window.__abaxBacklink) return;
  window.__abaxBacklink = true;

  function add() {
    if (document.getElementById('abax-backlink')) return;
    var a = document.createElement('a');
    a.id = 'abax-backlink';
    a.href = 'https://abaxgrid.com/';
    a.textContent = '← AbaxGrid';
    a.setAttribute('aria-label', 'Back to AbaxGrid');
    var s = a.style;
    s.position = 'fixed';
    s.left = 'calc(12px + env(safe-area-inset-left, 0px))';
    s.bottom = 'calc(12px + env(safe-area-inset-bottom, 0px))';
    s.zIndex = '2147483000';
    s.font = '500 11px/1 "IBM Plex Mono", ui-monospace, Menlo, Consolas, monospace';
    s.letterSpacing = '.08em';
    s.textTransform = 'uppercase';
    s.textDecoration = 'none';
    s.color = '#e9edf2';
    s.background = 'rgba(13,16,20,.72)';
    s.border = '1px solid rgba(233,237,242,.22)';
    s.borderRadius = '999px';
    s.padding = '8px 12px';
    s.backdropFilter = 'blur(6px)';
    s.webkitBackdropFilter = 'blur(6px)';
    s.opacity = '.75';
    s.transition = 'opacity .15s';
    a.addEventListener('mouseenter', function () { s.opacity = '1'; });
    a.addEventListener('mouseleave', function () { s.opacity = '.75'; });
    a.addEventListener('focus', function () { s.opacity = '1'; s.outline = '2px solid #7aa7ff'; s.outlineOffset = '2px'; });
    a.addEventListener('blur', function () { s.opacity = '.75'; s.outline = 'none'; });
    document.body.appendChild(a);
  }

  if (document.body) add();
  else document.addEventListener('DOMContentLoaded', add);
})();
