


document.getElementById("unlockBtn").addEventListener("click", function () {
    const passphrase = document.getElementById("passphrase").value.trim();
    const message = document.getElementById("message");

    // Check if the passphrase has exactly 24 words
    const words = passphrase.split(/\s+/); // Splits by spaces
    if (words.length === 24) {
        message.style.color = "lightgreen";
        message.innerText = "✅ Passphrase accepted. Unlocking wallet...";
        // Simulate unlocking process
        setTimeout(() => {
            message.innerText = "🚀 Wallet unlocked successfully!";
        }, 2000);
    } else {
        message.style.color = "red";
        message.innerText = "❌ Invalid passphrase. Please enter exactly 24 words.";
    }
});
