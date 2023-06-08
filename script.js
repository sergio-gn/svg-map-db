
function toggleLinks(id) {
    var linksContainer = document.getElementById(id);
    if (window.getComputedStyle(linksContainer).display === 'none') {
        linksContainer.style.display = 'block';
    } else {
        linksContainer.style.display = 'none';
    }
}
    // Attach onclick event to the SVG container
    StGeorge.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('StGeorgelinks')
        }
    };
    InnerWest.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('InnerWestlinks')
        }
    };
    CanterburyBankstown.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('CanterburyBankstownlinks')
        }
    };
    SutherlandShire.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('MacarthurRegionlinks')
        }
    };
    InnerWest.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('InnerWestlinks')
        }
    };
    NorthShore.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('NorthShorelinks')
        }
    };
    SouthWest.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('SouthWesternlinks')
        }
    };
    Parramatta.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('Parramattalinks')
        }
    };
    NorthWest.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('Gladesvillelinks')
        }
    };
    OuterWest.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('OuterWestlinks')
        }
    };
    UpperNorthShore.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('UpperNorthShorelinks')
        }
    };
    Central.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('Centrallinks')
        }
    };
    SouthSydney.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('SouthSydneylinks')
        }
    };
    EasternSuburbs.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('EasternSuburbslinks')
        }
    };
    NorthernBeaches.onclick = function(event) {
        if (event.target.tagName === 'path') {
            toggleLinks('NorthernBeacheslinks')
        }
    };
