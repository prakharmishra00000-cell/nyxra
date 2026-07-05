import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, MessageCircle } from 'lucide-react';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Welcome to HealthSync Clinic support. How can we help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: "user" }]);
    setInput("");

    // Simulate chatbot replies
    setTimeout(() => {
      let reply = "I'm sorry, I didn't quite catch that. You can contact our support team at +91 98765 43210 for direct assistance!";
      const textLower = userMsg.toLowerCase();

      if (textLower.includes("book") || textLower.includes("appointment")) {
        reply = "You can book an appointment online by clicking the 'Book Appointment' button at the top right of the page or in the main menu!";
      } else if (textLower.includes("hour") || textLower.includes("timing") || textLower.includes("open")) {
        reply = "We are open Monday to Saturday from 8:00 AM to 8:00 PM. Our emergency ambulance department is available 24x7!";
      } else if (textLower.includes("address") || textLower.includes("location") || textLower.includes("map")) {
        reply = "Our address is 102, Medical Enclave, Sector 15, Gurgaon, Haryana. Valet parking is available at the entrance.";
      } else if (textLower.includes("report") || textLower.includes("lab")) {
        reply = "You can retrieve and download your medical lab reports using your Patient ID directly under our 'Lab Reports' page.";
      } else if (textLower.includes("doctor") || textLower.includes("specialist")) {
        reply = "We have highly experienced specialists in Cardiology, Pediatrics, Orthopedics, General Medicine, and Dermatology. Visit our 'Doctors' page to view their profiles.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: reply, sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="chat-widget">
      {!isOpen && (
        <button className="chat-toggle" onClick={toggleChat} aria-label="Open support chat">
          <MessageCircle size={30} />
        </button>
      )}

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-dot"></div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '0.95rem' }}>HealthSync Assistant</h4>
                <p style={{ color: '#a7f3d0', fontSize: '0.75rem', margin: 0 }}>Online &bull; Instant Support</p>
              </div>
            </div>
            <button className="chat-close" onClick={toggleChat} aria-label="Close chat">
              <X size={20} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask about booking, timings..."
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="chat-send" aria-label="Send message">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
