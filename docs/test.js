function readFile() {
    // ファイル読み込み処理
    fetch('data.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('output').innerText = data;
        })
        .catch(error => console.error('Error reading the file:', error));
}

function writeToFile() {
    // ファイル書き込み処理
    const textToWrite = document.getElementById('inputText').value;

    fetch('data.txt', {
        method: 'PUT',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: textToWrite,
    })
    .then(() => console.log('File written successfully'))
    .catch(error => console.error('Error writing to the file:', error));
}
