let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

// Speech synthesis function
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 0.9;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    window.speechSynthesis.speak(text_speak);
}

// Greeting based on time
function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good afternoon Sir");a
    } else {
        speak("Good Evening Sir");
    }
}

// Initialize on load
window.addEventListener('load', () => {
    wishMe();
    speak("I am Jarvis, your virtual assistant. How can I help you today?");
});

// Speech recognition setup
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.interimResults = false;

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

recognition.onerror = (event) => {
    console.error('Speech recognition error', event.error);
    speak("Sorry, I didn't catch that. Could you please repeat?");
    btn.style.display = "flex";
    voice.style.display = "none";
};

recognition.onend = () => {
    if (btn.style.display === "none") {
        btn.style.display = "flex";
        voice.style.display = "none";
    }
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
    speak("Listening...");
});

// Command processing
function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";
    
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
        speak("Hello sir, how can I help you?");
    } 
    else if (message.includes("how are you")) {
        speak("I'm functioning optimally, thank you for asking. How may I assist you?");
    } 
    else if (message.includes("what is your name") || message.includes("who are you")) {
        speak("I am Jarvis, your virtual assistant. Created by Hamad Khan to make your life easier.");
    } 
    else if (message.includes("thank you")) {
        speak("You're welcome sir. Is there anything else I can do for you?");
    } 
    else if (message.includes("goodbye") || message.includes("bye") || message.includes("exit")) {
        speak("Goodbye sir. Have a wonderful day!");
        setTimeout(() => {
            window.close();
        }, 2000);
    } 
    else if (message.includes("open youtube")) {
        speak("Opening YouTube");
        window.open("https://www.youtube.com/", "_blank");
    } 
    else if (message.includes("play music") || message.includes("play song")) {
        speak("Playing music for you");
        window.open("https://www.youtube.com/watch?v=XLqmL9cPN1E", "_blank");
    } 
    else if (message.includes("play pakistani music")) {
        speak("Playing Pakistani music");
        window.open("https://www.youtube.com/watch?v=hXklj79UyEY", "_blank");
    } 
    else if (message.includes("play english music")) {
        speak("Playing English music");
        window.open("https://www.youtube.com/watch?v=kffacxfA7G4", "_blank");
    } 
    else if (message.includes("play indian music")) {
        speak("Playing Indian music");
        window.open("https://www.youtube.com/watch?v=1pc60L6mBt0", "_blank");
    } 
    else if (message.includes("open google")) {
        speak("Opening Google");
        window.open("https://www.google.com/", "_blank");
    } 
    else if (message.includes("open facebook")) {
        speak("Opening Facebook");
        window.open("https://www.facebook.com/", "_blank");
    } 
    else if (message.includes("open instagram")) {
        speak("Opening Instagram");
        window.open("https://www.instagram.com/", "_blank");
    } 
    else if (message.includes("open calculator")) {
        speak("Opening calculator");
        window.open("Calculator:///");
    } 
    else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp");
        window.open("https://web.whatsapp.com/", "_blank");
    } 
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(`The current time is ${time}`);
    } 
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "long", year: "numeric" });
        speak(`Today's date is ${date}`);
    } 
    else if (message.includes("weather")) {
        speak("Let me check the weather for you");
        window.open("https://www.google.com/search?q=weather", "_blank");
    } 
    else if (message.includes("news")) {
        speak("Here are the latest news updates");
        window.open("https://news.google.com/", "_blank");
    } 
    else if (message.includes("joke") || message.includes("tell me a joke")) {
        const jokes = [
            "Why don't scientists trust atoms? Because they make up everything!",
            "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
            "Why don't skeletons fight each other? They don't have the guts!",
            "I'm reading a book about anti-gravity. It's impossible to put down!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!"
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(randomJoke);
    } 
    else if (message.includes("quote") || message.includes("inspiration")) {
        const quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Innovation distinguishes between a leader and a follower. - Steve Jobs",
            "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
            "Stay hungry, stay foolish. - Steve Jobs",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        speak(randomQuote);
    } 
    else if (message.includes("who made you") || message.includes("who created you")) {
        speak("I was created by Hamad Khan, a talented developer who wanted to make life easier through technology.");
    } 
    else if (message.includes("what can you do")) {
        speak("I can perform various tasks like opening websites, telling time and date, playing music, telling jokes, giving inspirational quotes, and searching the internet for you. How may I assist you?");
    } 
    else if (message.includes("search for") || message.includes("look up")) {
        let query = message.replace("search for", "").replace("look up", "").replace("jarvis", "");
        speak(`Searching for ${query}`);
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
    } 
    else if (message.includes("set reminder")) {
        speak("Reminder feature is currently under development. I'll notify you when it's ready.");
    } 
    else if (message.includes("translate")) {
        speak("Opening Google Translate for you");
        window.open("https://translate.google.com/", "_blank");
    } 
    else if (message.includes("email")) {
        speak("Opening Gmail for you");
        window.open("https://mail.google.com/", "_blank");
    } 
    else {
        let finalText = "I found this information about " + message.replace("jarvis", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("jarvis", "")}`, "_blank");
    }
}
