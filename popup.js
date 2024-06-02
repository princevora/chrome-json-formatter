let formattedJson;

document.getElementById("json-input").addEventListener("keyup", function () {
    const json = this.value;
    const result = document.getElementById('result');

    try {
        formattedJson = JSON.stringify(JSON.parse(json), null, 4);
        result.innerText = formattedJson;
    } catch (e) {
        result.innerText = 'Invalid JSON!';
    } finally {
        const editor = document.getElementById("editor");
        editor.style.display = "block";
    }
})

document.getElementById("result").addEventListener("click", function () {
    
    if(!!formattedJson){
        navigator.clipboard.writeText(formattedJson)
    }

})