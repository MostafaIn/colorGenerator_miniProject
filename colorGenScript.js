const container = document.querySelector('.container');
const displayBtn = document.querySelector('button');
const inputNo = document.querySelector('input');

inputNo.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        colorGenerator();
    }
    e.preventDefault();
});


function colorGenerator() {

    container.innerHTML = " ";
    for (let i = 0; i < inputNo.value; i++) {
        let r = Math.floor(Math.random() * 256).toString(16).toUpperCase();
        let g = Math.floor(Math.random() * 256).toString(16).toUpperCase();
        let b = Math.floor(Math.random() * 256).toString(16).toUpperCase();
        r = (r.length === 2) ? r : '0' + r;
        g = (g.length === 2) ? g : '0' + g;
        b = (b.length === 2) ? b : '0' + b;
        const colorCode = `#${r}${g}${b}`;
        const colorBox = document.createElement('div');
        colorBox.setAttribute("class", "colorBox");
        const copyColor = document.createElement('i');
        copyColor.setAttribute("class", "far fa-copy");
        copyColor.style.backgroundColor = colorCode;

        colorBox.textContent = colorCode;
        // copyColor.textContent = "copy";
        colorBox.style.backgroundColor = colorCode;
        container.appendChild(colorBox);
        colorBox.appendChild(copyColor);


        copyColor.addEventListener('click', function () {
            try {

                var range = document.createRange();// create new range object
                range.selectNodeContents(colorBox); // set range to encompass desired element text
                var selection = window.getSelection(); // get Selection object from currently user selected text
                selection.removeAllRanges(); // unselect any user selected text (if any)
                selection.addRange(range);// add range to Selection object t;
            }
            catch (err) {
                console.log(err);
            }
            document.execCommand("copy");
        })
    }
}

















// for color copy button 
// const copyBtn = document.querySelector('.colorData');
// copyBtn.addEventListener("click", function () {
//     // copyToClipboard();
//     // const colorData = document.createElement("textarea");
//     copyBtn.value = colorCode;
//     document.body.appendChild(copyBtn);
//     copyBtn.select();
//     document.execCommand("copy");
//     document.body.removeChild(copyBtn);
// });