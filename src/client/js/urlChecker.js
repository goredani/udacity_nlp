function urlChecker(inputText) {
    console.log("Checking URL", inputText);
    const r = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return r.test(inputText);
}

export { urlChecker }