// Get the text element
const text = document.getElementById('cme');
// Get the image element
const image = document.getElementById('dissolveImage');
const e = document.getElementById('email');

// Add an event listener for mouseover (hover)
text.addEventListener('mouseover', () => {
    // Change the opacity to 1 for dissolving effect
    image.style.opacity = 1;
    e.style.opacity = 1;
});

// Add an event listener for mouseout (when not hovered)
text.addEventListener('mouseout', () => {
    // Restore the opacity to 0
    image.style.opacity = 0;
    e.style.opacity = 0;
});
