(function () {
  const panel = document.querySelector('#top_panel .ct ul');
  if (!panel) return;

  const text = panel.innerText;

  const uploadMatch = text.match(/(\d+\.?\d*)\s*(Go|To)/);
  const downloadMatch = text.match(/(\d+\.?\d*)\s*(Go|To).*?(\d+\.?\d*)\s*(Go|To)/);

  if (!uploadMatch || !downloadMatch) return;

  const toGo = (value, unit) => unit === 'To' ? value * 1024 : value;

  const uploadGo = toGo(parseFloat(uploadMatch[1]), uploadMatch[2]);
  const downloadGo = toGo(parseFloat(downloadMatch[3]), downloadMatch[4]);

  let maxDownload = Math.max(0, uploadGo - downloadGo);
  let unit = 'Go';

  if (maxDownload >= 1024) {
    maxDownload = maxDownload / 1024;
    unit = 'To';
  }

  const indicator = document.createElement('li');
  indicator.innerHTML = `<strong style="color:#ffcc00">Max: ${maxDownload.toFixed(2)} ${unit}</strong>`;

  const firstLi = panel.querySelector('li');
  if (firstLi) {
    panel.insertBefore(indicator, firstLi);
  } else {
    panel.appendChild(indicator);
  }
})();