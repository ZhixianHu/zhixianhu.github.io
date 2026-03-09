function toggleBibtex(id) {
    const el = document.getElementById(id);
    el.classList.toggle('expanded');
}

function copyBibtex(event, codeId) {
    const code = document.getElementById(codeId).innerText;
    const btn = event.target;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        btn.style.backgroundColor = '#28a745';
        btn.style.color = 'white';
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = 'white';
            btn.style.color = 'initial';
        }, 2000);
    });
}

