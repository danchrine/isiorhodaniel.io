/* Ambient ethical-hacking tool animations — different sets per page */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const sets = {
    'index.html': {
      tags: [
        { t: 'Nmap', i: 'fa-network-wired', c: 'c-cyan' },
        { t: 'Metasploit', i: 'fa-bomb', c: 'c-violet' },
        { t: 'Burp Suite', i: 'fa-bug', c: 'c-pink' },
        { t: 'Wireshark', i: 'fa-wave-square', c: 'c-teal' },
        { t: 'SQLMap', i: 'fa-database', c: 'c-amber' },
        { t: 'Hashcat', i: 'fa-key', c: 'c-green' },
        { t: 'Recon', i: 'fa-binoculars', c: 'c-cyan' },
        { t: 'Exploit', i: 'fa-skull-crossbones', c: 'c-red' },
        { t: 'Report', i: 'fa-file-lines', c: 'c-violet' },
        { t: 'OWASP', i: 'fa-shield-halved', c: 'c-teal' },
      ],
      count: 8,
      scan: true,
    },
    'tools-methodology.html': {
      tags: [
        { t: 'Nmap', i: 'fa-network-wired', c: 'c-cyan' },
        { t: 'Amass', i: 'fa-globe', c: 'c-teal' },
        { t: 'Nikto', i: 'fa-spider', c: 'c-amber' },
        { t: 'WPScan', i: 'fa-brands fa-wordpress', c: 'c-violet' },
        { t: 'Masscan', i: 'fa-gauge-high', c: 'c-pink' },
        { t: 'Hydra', i: 'fa-dragon', c: 'c-red' },
        { t: 'Aircrack-ng', i: 'fa-wifi', c: 'c-green' },
        { t: 'Shodan', i: 'fa-satellite-dish', c: 'c-cyan' },
        { t: 'John', i: 'fa-unlock-keyhole', c: 'c-amber' },
        { t: 'BeEF', i: 'fa-cow', c: 'c-pink' },
        { t: 'Ettercap', i: 'fa-ethernet', c: 'c-teal' },
        { t: 'SpiderFoot', i: 'fa-shoe-prints', c: 'c-violet' },
      ],
      count: 10,
    },
    'report.html': {
      tags: [
        { t: 'SQLi', i: 'fa-database', c: 'c-red' },
        { t: 'XSS', i: 'fa-code', c: 'c-amber' },
        { t: 'RCE', i: 'fa-terminal', c: 'c-pink' },
        { t: 'Auth Bypass', i: 'fa-user-lock', c: 'c-violet' },
        { t: 'CVSS', i: 'fa-chart-line', c: 'c-cyan' },
        { t: 'POC', i: 'fa-flask', c: 'c-teal' },
        { t: 'Remediation', i: 'fa-wrench', c: 'c-green' },
        { t: 'Black Box', i: 'fa-box', c: 'c-amber' },
      ],
      count: 7,
    },
    'certificate.html': {
      tags: [
        { t: 'Certified', i: 'fa-certificate', c: 'c-cyan' },
        { t: 'Pentest L1/L2', i: 'fa-user-secret', c: 'c-violet' },
        { t: 'TryHackMe', i: 'fa-flag', c: 'c-green' },
        { t: 'Deloitte', i: 'fa-building', c: 'c-teal' },
        { t: 'Verified', i: 'fa-circle-check', c: 'c-green' },
        { t: 'Ethical Hacker', i: 'fa-user-ninja', c: 'c-pink' },
      ],
      count: 6,
    },
    'professional.html': {
      tags: [
        { t: 'Authorized', i: 'fa-file-signature', c: 'c-cyan' },
        { t: 'Black Box', i: 'fa-box', c: 'c-violet' },
        { t: 'Kali Linux', i: 'fa-linux', c: 'c-teal' },
        { t: 'VMware Lab', i: 'fa-server', c: 'c-amber' },
        { t: 'Ethics', i: 'fa-handshake', c: 'c-green' },
        { t: 'Reporting', i: 'fa-file-lines', c: 'c-pink' },
      ],
      count: 6,
    },
    'reference.html': {
      tags: [
        { t: 'OWASP', i: 'fa-shield-halved', c: 'c-cyan' },
        { t: 'PTES', i: 'fa-list-check', c: 'c-violet' },
        { t: 'NIST', i: 'fa-landmark', c: 'c-teal' },
        { t: 'MITRE ATT&CK', i: 'fa-diagram-project', c: 'c-amber' },
        { t: 'CVSS', i: 'fa-gauge', c: 'c-pink' },
        { t: 'ASVS', i: 'fa-clipboard-check', c: 'c-green' },
      ],
      count: 6,
    },
    'contact.html': {
      tags: [
        { t: 'Engage', i: 'fa-paper-plane', c: 'c-cyan' },
        { t: 'Scope', i: 'fa-bullseye', c: 'c-violet' },
        { t: 'Secure', i: 'fa-lock', c: 'c-teal' },
        { t: 'Collaborate', i: 'fa-users', c: 'c-green' },
      ],
      count: 4,
    },
  };

  const cfg = sets[page] || sets['index.html'];
  const layer = document.createElement('div');
  layer.className = 'cyber-fx-layer';
  layer.setAttribute('aria-hidden', 'true');
  document.body.prepend(layer);

  if (cfg.scan) {
    const scan = document.createElement('div');
    scan.className = 'cyber-scan';
    layer.appendChild(scan);
  }

  function spawn() {
    const item = cfg.tags[Math.floor(Math.random() * cfg.tags.length)];
    const el = document.createElement('span');
    el.className = 'cyber-tag ' + item.c;
    const dur = 6 + Math.random() * 6;
    el.style.setProperty('--dur', dur + 's');
    el.style.setProperty('--delay', Math.random() * 0.5 + 's');
    el.style.left = 4 + Math.random() * 88 + '%';
    el.style.top = 8 + Math.random() * 78 + '%';
    const iconClass = item.i.startsWith('fa-') && !item.i.includes(' ')
      ? 'fa-solid ' + item.i
      : item.i;
    el.innerHTML = '<i class="' + iconClass + '"></i> ' + item.t;
    layer.appendChild(el);
    setTimeout(function () {
      el.remove();
    }, (dur + 0.6) * 1000);
  }

  // initial burst
  for (let i = 0; i < cfg.count; i++) {
    setTimeout(spawn, i * 400);
  }
  // continuous soft stream
  setInterval(spawn, 1800);
})();
