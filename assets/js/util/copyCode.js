// This assumes that you're using Rouge; if not, update the selector
const codeBlocks = document.querySelectorAll('.code-header + .highlighter-rouge');
const copyCodeButtons = document.querySelectorAll('.copy-btn');

copyCodeButtons.forEach((copyCodeButton, index) => {
  const code = codeBlocks[index].innerText;

  copyCodeButton.addEventListener('click', () => {
    // Copy the code to the user's clipboard
    window.navigator.clipboard.writeText(code);

    // Update the button text visually
    const { innerText: originalText } = copyCodeButton;
    copyCodeButton.innerText = 'Copied!';

    // (Optional) Toggle a class for styling the button
    copyCodeButton.classList.add('copied');

    // After 2 seconds, reset the button to its initial UI
    setTimeout(() => {
      copyCodeButton.innerText = originalText;
      copyCodeButton.classList.remove('copied');
    }, 2000);
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(function (codeBlock) {
        const parent = codeBlock.parentNode;
        if (!parent.classList.contains('code-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'code-wrapper';

            const copyButton = document.createElement('button');
            copyButton.className = 'btn btn-outline-dark copy-btn';
            const icon = document.createElement('i');
            icon.className = 'far fa-clipboard'; // Assuming you're using Font Awesome

            copyButton.appendChild(icon);


            wrapper.appendChild(codeBlock.cloneNode(true));
            wrapper.appendChild(copyButton);
            parent.replaceChild(wrapper, codeBlock);

            copyButton.addEventListener('click', function () {
                const code = codeBlock.textContent;
                navigator.clipboard.writeText(code).then(function () {
                    copyButton.classList.add('copied');
                    setTimeout(function () {
                        copyButton.classList.remove('copied');
                    }, 1000);
                }).catch(function (error) {
                    console.error('Failed to copy: ', error);
                });
            });
        } else {
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-btn';
            const icon = document.createElement('i');
            icon.className = 'fa fa-copy'; // Assuming you're using Font Awesome
            copyButton.appendChild(icon);

            parent.appendChild(copyButton);

            copyButton.addEventListener('click', function () {
                const code = codeBlock.textContent;
                navigator.clipboard.writeText(code).then(function () {
                    copyButton.classList.add('copied');
                    setTimeout(function () {
                        copyButton.classList.remove('copied');
                    }, 1000);
                }).catch(function (error) {
                    console.error('Failed to copy: ', error);
                });
            });
        }
    });
});

