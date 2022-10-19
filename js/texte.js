

const txtAnim = document.querySelector('h1.musee');
const text = txtAnim.innerHTML
console.log(text);


new Typewriter(txtAnim, {
    delay: 30,
    cursor: "" 
})
.typeString(text)
.start()




