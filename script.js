document.addEventListener("DOMContentLoaded", function() {
    const chapterTitle = document.getElementById('chapter-title').innerText;
    const currentChapterNumber = parseInt(chapterTitle.match(/\d+/)[0]);
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const previousButtonBottom = document.getElementById('previous-bottom');
    const nextButtonBottom = document.getElementById('next-bottom');

    function updateButton(button, chapterNumber) {
        if (isPrevious && chapterNumber === 0) {
            button.form.action = '../index.html';
            button.disabled = false;
        } else if (chapterNumber >= 0) {
            button.form.action = `chapter${chapterNumber}.html`;
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }

    updateButton(previousButton, currentChapterNumber - 1);
    updateButton(nextButton, currentChapterNumber + 1);
    updateButton(previousButtonBottom, currentChapterNumber - 1);
    updateButton(nextButtonBottom, currentChapterNumber + 1);
});

function navigateChapter(direction) {
    const chapterTitle = document.getElementById('chapter-title').innerText;
    const currentChapterNumber = parseInt(chapterTitle.match(/\d+/)[0]);
    let targetChapterNumber = direction === 'previous' ? currentChapterNumber - 1 : currentChapterNumber + 1;
    if (targetChapterNumber > 0) {
        window.location.href = `chapter${targetChapterNumber}.html`;
    }
}