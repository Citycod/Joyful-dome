import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const CreateService = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    delivery: '',
  })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (!user || user.role !== 'seller') {
    return <div className="container mx-auto px-4 py-8 text-center">Only sellers can create services.</div>
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title || !formData.category || !formData.price || !formData.delivery) {
      setError('Please fill out all required fields')
      return
    }
    setError('')
    setSubmitting(true)

    // Mock API call
    setTimeout(() => {
      setSubmitting(false)
      navigate('/manage-services')
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">Create New Service</h1>
      <div className="max-w-md mx-auto">
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Service Title</label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue"
              aria-label="Service title"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue"
              aria-label="Service category"
            >
              <option value="">Select Category</option>
              <option value="Fashion">Fashion</option>
              <option value="Catering">Catering</option>
              <option value="Plumbing">Plumbing</option>
            </select>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue"
              rows={4}
              aria-label="Service description"
            ></textarea>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (₦)</label>
            <input
              id="price"
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue"
              aria-label="Service price"
            />
          </div>
          <div>
            <label htmlFor="delivery" className="block text-sm font-medium text-gray-700">Delivery Time</label>
            <input
              id="delivery"
              type="text"
              value={formData.delivery}
              onChange={(e) => setFormData({ ...formData, delivery: e.target.value })}
              required
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue"
              placeholder="e.g., 2 days"
              aria-label="Delivery time"
            />
          </div>
          <button type="submit" disabled={submitting} className="btn btn-primary w-full">
            {submitting ? 'Creating...' : 'Create Service'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateService