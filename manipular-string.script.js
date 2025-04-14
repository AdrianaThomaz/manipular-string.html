function analyzeString() {
    const fullName = document.getElementById('fullName').value;
    const vowels = 'aeiouAEIOU';
    let withoutVowels = '';
    let withoutConsonants = '';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of fullName) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            consonantCount++;
        }
    }

    withoutVowels = fullName.replace(/[aeiouAEIOU]/g, '');
    withoutConsonants = fullName.replace(/[^aeiouAEIOU]/g, '');

    document.getElementById('withoutVowels').textContent = `Nome sem vogais: ${withoutVowels}`;
    document.getElementById('withoutConsonants').textContent = `Nome sem consoantes: ${withoutConsonants}`;
    document.getElementById('vowelCount').textContent = `Quantidade de vogais: ${vowelCount}`;
    document.getElementById('consonantCount').textContent = `Quantidade de consoantes: ${consonantCount}`;
}

