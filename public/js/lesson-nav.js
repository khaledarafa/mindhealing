function renderLessonNav(prev, next) {
  const nav = document.getElementById("lesson-nav");

  nav.innerHTML = `
    <div class="lesson-nav">
      ${prev ? `<a class="btn prev" href="${prev}">← Previous Lesson</a>` : ""}
      ${next ? `<a class="btn next" href="${next}">Next Lesson→</a>` : ""}
    </div>
  `;
}