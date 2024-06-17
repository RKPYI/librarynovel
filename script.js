// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown-content');
    var dropbtn = document.querySelector('.dropbtn');

    // Dynamic generation of chapter links
    var chapterDropdown = document.getElementById('chapter-dropdown');
    var totalChapters = 100; // Assume you have 10 chapters, you can adjust this number
    for (var i = 1; i <= totalChapters; i++) {
        var chapterLink = document.createElement('a');
        chapterLink.href = 'chapter' + i + '.html?'; // Adjust this if you have different URL structure
        chapterLink.textContent = 'Chapter ' + i;
        chapterDropdown.appendChild(chapterLink);
    }

    // Get the current chapter number from the URL
    var url = window.location.href;
    var currentChapterMatch = url.match(/chapter(\d+)(\.html)?$/);
    if (currentChapterMatch) {
        var currentChapter = parseInt(currentChapterMatch[1]);

        // Set the previous and next chapter links
        var previousForm = document.getElementById('previous-form');
        var nextForm = document.getElementById('next-form');
        
        if (currentChapter > 1) {
            previousForm.action = 'chapter' + (currentChapter - 1) + '.html'; // Adjust this if you have different URL structure
        } else {
            previousForm.style.display = 'none'; // Hide if there is no previous chapter
        }

        if (currentChapter < totalChapters) {
            nextForm.action = 'chapter' + (currentChapter + 1) + '.html'; // Adjust this if you have different URL structure
        } else {
            nextForm.style.display = 'none'; // Hide if there is no next chapter
        }
    }

    dropbtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        event.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            }
        }
    });

    // For mobile touch events
    window.addEventListener('touchstart', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            }
        }
    });
});
