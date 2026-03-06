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



// function toggleBibtex(event, bibtexId) {
//     var bibtexDiv = document.getElementById(bibtexId);
//     if (bibtexDiv.style.display === 'none') {
//         var x = event.pageX;
//         var y = event.pageY;
        
//         bibtexDiv.style.left = x + 'px';
//         bibtexDiv.style.top = y + 'px';
        
//         bibtexDiv.style.display = 'block';
//     } else {
//         bibtexDiv.style.display = 'none';
//     }
// }

// function copyBibtex(event, contentId) {
//     event.stopPropagation();
//     const content = document.getElementById(contentId).textContent;
//     const lines = content.split('\n')
//         .map(line => line.trim())
//         .filter(line => line); // Remove empty lines

//     const formattedLines = lines.map((line, index) => {
//         if (index === 0) return line;  // First line
//         if (line === '}') return line;  // Closing brace
//         return '  ' + line;  // All other lines
//     });

//     const formattedContent = formattedLines.join('\n');

//     navigator.clipboard.writeText(formattedContent)
//         .then(() => {
//         const button = event.target;
//         const originalText = button.textContent;
//         button.textContent = 'Copied!';
//         setTimeout(() => {
//             button.textContent = originalText;
//         }, 1500);
//         })
//         .catch(err => {
//         console.error('Failed to copy:', err);
//         });
// }
