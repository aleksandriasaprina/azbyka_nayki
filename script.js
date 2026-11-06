const knowledgeBase = [
    {
        keywords: ["космос", "астрономия", "звезд", "планет"],
        answer: "Начни с раздела «Астрономия» — там есть что почитать и с чего начать."
    },
    {
        keywords: ["ядро", "ядерн", "атом", "радиац"],
        answer: "Загляни в раздел «Ядерная физика» — там ключевые понятия и шаги."
    },
    {
        keywords: ["ии", "нейросет", "искусствен"],
        answer: "Раздел «ИИ» поможет разобраться, что такое нейросети и с чего начать."
    },
    {
        keywords: ["привет", "здравств", "хай"],
        answer: "Привет! Спроси про космос, ядро или ИИ — подскажу, с чего начать."
    }
];

const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");
const newChatBtn = document.getElementById("new-chat");

function addMessage(text, type) {
    const div = document.createElement("div");
    div.className = "message " + type + "-message";
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    setTimeout(function() {
        const lower = text.toLowerCase();
        const found = knowledgeBase.find(function(item) {
            return item.keywords.some(function(k) { return lower.includes(k); });
        });

        addMessage(
            found ? found.answer : "Пока не знаю ответа. Попробуй спросить про космос, ядро или ИИ.",
            "bot"
        );
    }, 400);
});

newChatBtn.addEventListener("click", function() {
    messages.innerHTML = '<div class="message bot-message">Привет! Я помогу разобраться с космосом, ядром и ИИ. С чего начнём?</div>';
});