const textInput = document.getElementById("text-input");
const playButton = document.getElementById("play-btn");
const stopButton = document.getElementById("stop-btn");
const refreshButton = document.getElementById("refresh-btn");
const downloadButton = document.getElementById("download-btn");

let speech = new SpeechSynthesisUtterance();

// Setup speech properties
speech.volume = 1; // Volume (0 to 1)
speech.rate = 1;   // Speed (0.1 to 10)
speech.pitch = 1;  // Pitch (0 to 2)

playButton.addEventListener("click", () => {
    const text = textInput.value;
    if (text) {
        speech.text = text;

        // Start speech synthesis
        window.speechSynthesis.speak(speech);
    } else {
        alert("Please enter some text to convert.");
    }
});

stopButton.addEventListener("click", () => {
    window.speechSynthesis.cancel();
});

refreshButton.addEventListener("click", () => {
    textInput.value = "";
    window.speechSynthesis.cancel(); // Stop any audio
});

downloadButton.addEventListener("click", () => {
    const text = textInput.value;
    if (text) {
        // You can integrate an external API to save the text as an audio file
        // Example: Using a library like RecordRTC or connecting to a server-side API
        // that handles text-to-speech and returns an audio file.

        // Since we can't generate a downloadable file directly here, you'll need
        // to implement a server-side solution or a library to capture the speech.

        alert("Download feature requires external integration.");
    } else {
        alert("Please enter some text to download.");
    }
});
