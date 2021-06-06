function handleSubmit(event) {
    event.preventDefault()
    let inputText = document.getElementById('urlForm').value;
    const data = {
        inputText
    }
    if (Client.urlChecker(inputText)) {
        console.log("Analyzing URL", inputText);
        fetch('http://localhost:8081/inputText', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('model').innerHTML = 'Model: ' + res.model;
                document.getElementById('model').classList.add("result");
                document.getElementById('score_tag').innerHTML = 'Score: ' + res.score_tag;
                document.getElementById('score_tag').classList.add("result");
                document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
                document.getElementById('agreement').classList.add("result");
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
                document.getElementById('subjectivity').classList.add("result");
                document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
                document.getElementById('confidence').classList.add("result");
                document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
                document.getElementById('irony').classList.add("result");
            })
    } else {
        alert ('Please add a valid URL that we can analyze.')
    };
}

export { handleSubmit }

