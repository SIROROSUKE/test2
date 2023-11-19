// test.js

function readFile() {
    fetch('data.txt')
        .then(response => response.text())
        .then(data => {
            console.log('File content:', data);
            document.getElementById('output').innerText = data;
        })
        .catch(error => console.error('Error reading the file:', error));
}

function writeFile() {
    const inputText = document.getElementById('inputText').value;
    
    fetch('write.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: inputText }),
    })
    .then(response => response.json())
    .then(data => console.log('File written:', data))
    .catch(error => console.error('Error writing the file:', error));
}
