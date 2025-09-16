import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

interface Message {
  id: string
  sender: string
  recipient: string
  content: string
  timestamp: string
}

const Messaging = () => {
  const { user } = useAuth()
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock API call
    setTimeout(() => {
      setMessages([
        { id: '1', sender: 'Chiamaka Okoro', recipient: user?.name || '', content: 'Hi, regarding your order...', timestamp: '2025-09-07 10:00' },
        { id: '2', sender: user?.name || '', recipient: 'Chiamaka Okoro', content: 'Thanks for the update!', timestamp: '2025-09-07 10:05' },
      ])
      setLoading(false)
    }, 1000)
  }, [user])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // Mock sending message
    setMessages([...messages, {
      id: `${messages.length + 1}`,
      sender: user?.name || '',
      recipient: 'Chiamaka Okoro', // Example recipient
      content: newMessage,
      timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
    }])
    setNewMessage('')
  }

  if (!user) {
    return <div className="container mx-auto px-4 py-8 text-center">Please sign in to view messages.</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">Messages</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="card p-6 max-w-2xl mx-auto">
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded-xl ${message.sender === user.name ? 'bg-blue-50 ml-auto' : 'bg-gray-100 mr-auto'} max-w-xs`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs text-gray-500 mt-1">{message.sender} • {message.timestamp}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="mt-4 flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue"
              placeholder="Type a message..."
              aria-label="Message input"
            />
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Messaging