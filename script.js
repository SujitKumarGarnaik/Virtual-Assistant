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
// window.addEventListener('load',()=>{
//     wishMe()
// })

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
        btn.style.display="none"
        voice.style.display="block"
    });
} else {
    console.error("Speech recognition not supported in this browser.");
    content.innerText = "Speech recognition not supported.";
}

function takeCommand(message) {
    btn.style.display="flex"
    voice.style.display="none"
    if (message.includes('hello')||message.includes('hey')) {
        speak('Hello Sir, what can I help you with?');
    }
    else if (message.includes('who are you'))
    {
        speak('I am virtual assistant,created by Sujit Garnaik')
    }
    else if (message.includes('open youtube')){
        speak('opening youtube...')
        window.open("https://www.youtube.com/","_blank")
    }
    else if (message.includes('open google')){
        speak('opening google...')
        window.open("https://www.google.co.in/","_blank")
    }
    else if (message.includes('open facebook')){
        speak('opening facebook...')
        window.open("https://www.facebook.com/","_blank")
    }
    else if (message.includes('open instagram')){
        speak('opening instagram...')
        window.open("https://www.instagram.com/","_blank")
    }
    else if (message.includes('open chat gpt')){
        speak('opening chat gpt...')
        window.open("https://openai.com/index/chatgpt/","_blank")
    }
    else if (message.includes('open github')){
        speak('opening github...')
        window.open("https://github.com/","_blank")
    }
    else if (message.includes('open linkedin')){
        speak('opening linkedin...')
        window.open("https://www.linkedin.com/feed/","_blank")
    }
    else if (message.includes('open calculator')){
        speak('opening calculator...')
        window.open("calculator://","_blank")
    }
    else if (message.includes('open command Prompt')){
        speak('opening command Prompt...')
        window.open("command Prompt://","_blank")
    }
    else if (message.includes('open notepad')){
        speak('opening notepad...')
        window.open("notepad://","_blank")
    }
    else if (message.includes('time')){
        let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if (message.includes('date')){
        let date=new Date().toLocaleDateString(undefined,{day:"numeric",month:'short'})
        speak(date)
    }
    else{
        speak(`this is what i found on internet regarding ${message.replace("assistai,")||message.replace("assist ai,")}`)
        window.open(`https://www.google.com/search?q=${message.replace("assistai,")||message.replace("assist ai,")}`)
    }
}
