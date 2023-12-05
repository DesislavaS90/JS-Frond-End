function encodeAndDecodeMessages() {
    let buttons = document.getElementsByTagName('button');
    let senderBtn = buttons[0];
    let receiverBtn = buttons[1];

    let text = document.getElementsByTagName('textarea');
    let sender = text[0];
    let receiver = text[1];

    senderBtn.addEventListener('click', encode);

    function encode(event) {
        let text = sender.value;

        let encoded = '';

        for (let i = 0; i < text.length; i++) {

            encoded += String.fromCharCode(text.charCodeAt(i) + 1);
        }

        receiver.value = encoded;
        sender.value = '';

    }

    receiverBtn.addEventListener('click', decode);

    function decode(event) {
        let text = receiver.value;

        let decoded = '';

        for (let i = 0; i < text.length; i++) {

            decoded += String.fromCharCode(text.charCodeAt(i) - 1);
        }

        receiver.value = decoded;


    }
}