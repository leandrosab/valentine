// ===== NTFY TRACKING =====
// Dein geheimer Topic-Name – ändere ihn, wenn du willst
const NTFY_TOPIC = "valentine-8f83cbb1";

function sendNotification(title, message, priority = "default", tags = "heart") {
    fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
        method: "POST",
        headers: {
            "Title": title,
            "Priority": priority,
            "Tags": tags
        },
        body: message
    }).catch(() => {}); // Fehler leise ignorieren
}

// Benachrichtigung wenn die Seite geöffnet wird
sendNotification(
    "💌 Seite geöffnet!",
    `Jemand hat deine Valentine-Seite geöffnet! (${new Date().toLocaleString("de-DE")})`,
    "default",
    "eyes"
);

// ===== MESSAGES =====
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Benachrichtigung bei "No"
    sendNotification(
        "😢 No geklickt...",
        `"No" wurde geklickt (Versuch ${messageIndex}). Text: "${noButton.textContent}"`,
        "low",
        "broken_heart"
    );
}

function handleYesClick() {
    // Benachrichtigung bei "Yes" 🎉
    sendNotification(
        "💖 YES!! Sie hat JA gesagt!",
        `JA wurde geklickt! 🎉🥳 (${new Date().toLocaleString("de-DE")})`,
        "urgent",
        "heart,tada,partying_face"
    );
    window.location.href = "yes_page.html";
}