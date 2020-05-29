document.querySelectorAll('.input').forEach(element => {
    console.log("Hey there, this is Nikhil");
    const inputContainer = element.parentNode.parentNode;

    element.addEventListener('click', () => {
        inputContainer.classList.toggle('focus');
    });

    [...element.parentNode.children[1].children].forEach(item => {
        item.addEventListener('click', () => {
            const inputContentImage = element.children[0].children[0];
            const inputContentSpan = element.children[0].children[1];

            inputContentImage.src = event.target.children[0].src;
            inputContentSpan.textContent = event.target.children[1].textContent;

            inputContainer.classList.remove('focus');

            if (!inputContentSpan.classList.contains('selected'))
                inputContentSpan.classList.add('selected');
        });
    });
});