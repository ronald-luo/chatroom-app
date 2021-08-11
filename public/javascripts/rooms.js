let paragraph = document.getElementById('paragraph')

const paragraphLoad = (() => {
    if (Math.random() >= 0.50) {
        paragraph.textContent = "on the internet no one knows you're a cat"
    } else {
        paragraph.textContent = "on the internet no one knows you're a dog"
    }
})()

