function renderProgress(current, total) {
  const container = document.getElementById("progress");

  if (!container) return;

  const percent = Math.round((current / total) * 100);

  container.innerHTML = `
    <div class="progress-wrapper">
      
      <div class="progress-text">
        Lesson ${current} of ${total}
      </div>

      <div class="progress-bar">
        <div class="progress-fill" style="width: ${percent}%"></div>
      </div>

    </div>
  `;
}