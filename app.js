
function extractUrl(){
    return window.location.href;
}

const currentUrl = extractUrl();
localStorage.setItem('url', currentUrl);
