let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
let voice = document.querySelector('#voice');

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak('Good Morning Sir');
    } else if (hours >= 12 && hours < 16) {
        speak('Good Afternoon Sir');
    } else if (hours >= 16 && hours < 20) {
        speak('Good Evening Sir');
    } else {
        speak('Good Night Sir');
    }
}

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (speechRecognition) {
    let recognition = new speechRecognition();

    recognition.onresult = (event) => {
        let currentIndex = event.resultIndex;
        let transcript = event.results[currentIndex][0].transcript;
        content.innerText = transcript;
        takeCommand(transcript.toLowerCase());
    };
    recognition.onerror = (event) => {
        console.error("Speech recognition error detected: " + event.error);
        speak("Sorry, I didn't catch that. Please try again.");
    };

    btn.addEventListener("click", () => {
        recognition.start();
        content.innerText = "Listening...";
        btn.style.display = "none";
        voice.style.display = "block";
    });
} else {
    console.error("Speech recognition not supported in this browser.");
    content.innerText = "Speech recognition not supported.";
}

function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    if (message.includes('wish me')) {
        wishMe(); // Call wishMe function if "wish me" is detected
    } else if (message.includes('hello') || message.includes('hey')) {
        speak('Hello Sir, what can I help you with?');
    } else if (message.includes('who are you')) {
        speak('I am a virtual assistant, created by Sujit Kumar Garnaik,From Angul Odisha ,India');
    } else if (message.includes('open youtube')) {
        speak('opening youtube...');
        window.open("https://www.youtube.com/", "_blank");
    } else if (message.includes('open google')) {
        speak('opening google...');
        window.open("https://www.google.co.in/", "_blank");
    } else if (message.includes('open facebook')) {
        speak('opening facebook...');
        window.open("https://www.facebook.com/", "_blank");
    } else if (message.includes('open instagram')) {
        speak('opening instagram...');
        window.open("https://www.instagram.com/", "_blank");
    } else if (message.includes('open chat gpt')) {
        speak('opening chat gpt...');
        window.open("https://openai.com/index/chatgpt/", "_blank");
    } else if (message.includes('open github')) {
        speak('opening github...');
        window.open("https://github.com/", "_blank");
    } else if (message.includes('open linkedin')) {
        speak('opening linkedin...');
        window.open("https://www.linkedin.com/feed/", "_blank");
    } else if (message.includes('open whatsapp')) {
        speak('opening WhatsApp...');
        window.open("https://web.whatsapp.com/", "_blank");
    } else if (message.includes('open gmail')) {
        speak('opening Gmail...');
        window.open("https://mail.google.com/", "_blank");
    } else if (message.includes('open google drive')) {
        speak('opening Google Drive...');
        window.open("https://drive.google.com/", "_blank");
    } else if (message.includes('open calendar')) {
        speak('opening Google Calendar...');
        window.open("https://calendar.google.com/", "_blank");
    } else if (message.includes('open jio saavn')) {
        speak('opening JioSaavn...');
        window.open("https://www.jiosaavn.com/", "_blank");
    } else if (message.includes('open flipkart')) {
        speak('opening Flipkart...');
        window.open("https://www.flipkart.com/", "_blank");
    } else if (message.includes('open ajio')) {
        speak('opening Ajio...');
        window.open("https://www.ajio.com/", "_blank");
    } else if (message.includes('open meesho')) {
        speak('opening Meesho...');
        window.open("https://www.meesho.com/", "_blank");
    } else if (message.includes('open amazon')) {
        speak('opening Amazon...');
        window.open("https://www.amazon.in/", "_blank");
    } else if (message.includes('open phonepe')) {
        speak('opening PhonePe...');
        window.open("https://www.phonepe.com/", "_blank");
    } else if (message.includes('open gpay')) {
        speak('opening Google Pay...');
        window.open("https://pay.google.com/", "_blank");
    } else if (message.includes('open snapchat')) {
        speak('opening Snapchat...');
        window.open("https://www.snapchat.com/", "_blank");
    } else if (message.includes('open jio cinema')) {
        speak('opening Jio Cinema...');
        window.open("https://www.jiocinema.com/", "_blank");
    } else if (message.includes('open myntra')) {
        speak('opening Myntra...');
        window.open("https://www.myntra.com/", "_blank");
    } else if (message.includes('open mx player')) {
        speak('opening MX Player...');
        window.open("https://www.mxplayer.in/", "_blank");
    } else if (message.includes('open paytm')) {
        speak('opening Paytm...');
        window.open("https://paytm.com/", "_blank");
    } else if (message.includes('open apple music')) {
        speak('opening Apple Music...');
        window.open("https://music.apple.com/", "_blank");
    } else if (message.includes('open apple website')) {
        speak('opening Apple official website...');
        window.open("https://www.apple.com/", "_blank");
    } else if (message.includes('open apple store')) {
        speak('opening Apple Store...');
        window.open("https://www.apple.com/in/shop", "_blank");
    } else if (message.includes('open icloud')) {
        speak('opening iCloud...');
        window.open("https://www.icloud.com/", "_blank");
    } else if (message.includes('open calculator')) {
        speak('opening calculator...');
        window.open("calculator://", "_blank");
    } else if (message.includes('open command prompt')) {
        speak('opening command prompt...');
        window.open("command prompt://", "_blank");
    } else if (message.includes('open notepad')) {
        speak('opening notepad...');
        window.open("notepad://", "_blank");
    } else if (message.includes('time')) {
        let time = new Date().toLocaleTimeString();
        speak(`The current time is ${time}`);
    } else if (message.includes('date')) {
        let date = new Date().toLocaleDateString(undefined, { day: "numeric", month: 'short' });
        speak(`Today's date is ${date}`);
    } else {
        speak(`This is what I found on the internet regarding ${message.replace("assistai,", "").replace("assist ai,", "")}`);
        window.open(`https://www.google.com/search?q=${message.replace("assistai,", "").replace("assist ai,", "")}`);
    }
}

// Automatically call the wishMe function when the page loads
window.addEventListener('load', () => {
    wishMe();
});
