import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface Order {
  id: string
  service: string
  seller: string
  price: number
  delivery: string
  status: string
}

const OrderSummary = () => {
  const { id } = useParams()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock API call
    setTimeout(() => {
      setOrder({
        id: id!,
        service: 'Traditional Dress Design',
        seller: 'Chiamaka Okoro',
        price: 15000,
        delivery: '2 days',
        status: 'Pending',
      })
      setLoading(false)
    }, 1000)
  }, [id])

  if (loading) return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>
  if (!order) return <div className="container mx-auto px-4 py-8 text-center">Order not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">Order Summary</h1>
      <div className="card p-6 max-w-md mx-auto">
        <h3 className="font-semibold text-lg">{order.service}</h3>
        <p className="text-sm text-gray-600">Seller: {order.seller}</p>
        <p className="text-sm">Price: ₦{order.price.toLocaleString()}</p>
        <p className="text-sm">Delivery: {order.delivery}</p>
        <p className="text-sm">Status: {order.status}</p>
        <Link to="/checkout" className="btn btn-primary mt-4">Proceed to Checkout</Link>
      </div>
    </div>
  )
}

export default OrderSummary