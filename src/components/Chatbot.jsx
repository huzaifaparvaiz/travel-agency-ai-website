import { useState } from "react";
import OpenAI from "openai";
import "./Chatbot.css";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
  dangerouslyAllowBrowser: true,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173",
    "X-Title": "MyViteChatbot",
  },
});

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLabel, setShowLabel] = useState(true); // NEW: label visibility

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await openai.chat.completions.create({
        model: "openai/gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are Hugo, a travel assistant. Always answer with 3 travel packages: Premium, Standard, Basic. 
For each package, include:
- Price (with currency)
- Hotel name
- Food included (yes/no)
- Sauna included (yes/no)
- Number of days

Format your answer clearly with headings or bullet points for easy reading. Keep it short but informative.`,
          },
          ...newMessages,
        ],
        max_tokens: 150,
      });

      const botMessage = response.choices[0].message;
      setMessages([...newMessages, botMessage]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "⚠️ Error: Could not reach OpenRouter" },
      ]);
    }

    setLoading(false);
  };

  const toggleChat = () => {
    const el = document.querySelector(".chatbot-container");
    if (el) {
      const isOpen = el.style.display === "flex";
      el.style.display = isOpen ? "none" : "flex";
      setShowLabel(isOpen); // hide label when opened
    }
  };

  return (
    <div className="chatbot-wrapper">
      <button className="chatbot-toggle" onClick={toggleChat}>
        💬
      </button>

      {showLabel && (
        <div className="floating-label">Hugo AI Assistant is here</div>
      )}

      <div
        className="chatbot-container glass"
        style={{ display: "none", flexDirection: "column" }}
      >
        <div className="chat-header">
          <span>Hugo AI Assistant</span>
          <button
            className="close-btn"
            onClick={() => {
              document.querySelector(".chatbot-container").style.display =
                "none";
              setShowLabel(true); // show label again when closed
            }}
          >
            ×
          </button>
        </div>

        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`msg ${msg.role}`}>
              <div className="bubble">
                {msg.content.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
          {loading && (
            <div className="msg bot">
              <div className="bubble">
                <em>Typing...</em>
              </div>
            </div>
          )}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask me about travel packages..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) handleSend();
            }}
          />
          <button onClick={handleSend} disabled={loading}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
