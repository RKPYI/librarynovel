document.addEventListener("DOMContentLoaded", function() {
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const previousButtonBottom = document.getElementById('previous-bottom');
    const nextButtonBottom = document.getElementById('next-bottom');

    // Function to extract chapter number from title
    function getCurrentChapterNumber() {
        const chapterTitle = document.getElementById('chapter-title').innerText;
        return parseInt(chapterTitle.match(/\d+/)[0]);
    }

    // Function to update navigation buttons with respective chapter numbers
    function updateButtons(currentChapter) {
        updateButton(previousButton, currentChapter - 1);
        updateButton(nextButton, currentChapter + 1);
        updateButton(previousButtonBottom, currentChapter - 1);
        updateButton(nextButtonBottom, currentChapter + 1);
    }

    // Function to configure a button for a given chapter number
    function updateButton(button, chapterNumber) {
        if (chapterNumber === 0) {
            button.onclick = () => window.location.href = '../index.html';
            button.disabled = false;
        } else if (chapterNumber > 0) {
            button.onclick = () => window.location.href = `chapter${chapterNumber}.html`;
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }

    // Update navigation buttons on page load
    const currentChapterNumber = getCurrentChapterNumber();
    updateButtons(currentChapterNumber);
});

// Function to handle manual chapter navigation
function navigateChapter(direction) {
    const currentChapterNumber = parseInt(document.getElementById('chapter-title').innerText.match(/\d+/)[0]);
    const targetChapterNumber = direction === 'previous' ? currentChapterNumber - 1 : currentChapterNumber + 1;

    if (targetChapterNumber === 0) {
        window.location.href = '../index.html';
    } else if (targetChapterNumber > 0) {
        window.location.href = `chapter${targetChapterNumber}.html`;
    }
}
