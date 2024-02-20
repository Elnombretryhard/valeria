function handleButtonClick(isYes) {
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');
    
    if (isYes) {
        resultDiv.innerHTML = '<p>Sí, ¡te amo mucho!</p>';
    } else {
        resultDiv.innerHTML = '<p>Oh no, ¿seguro?</p>';
    }

    document.body.appendChild(resultDiv);
}

