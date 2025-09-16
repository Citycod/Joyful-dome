import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  delivery: string;
  seller: { name: string; rating: number; reviews: number; imageUrl: string };
  reviews: { id: string; text: string; rating: number; user: string; date: string }[];
  imageUrl: string;
  category: string;
  whatsappNumber: string;
  portfolioImages: string[];
}

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const allServices: Service[] = [
    {
      id: '1',
      title: 'Professional Plumbing Repair',
      description: 'Expert plumbing repair services for leaks, pipes, and fixtures. Our certified plumbers provide quick and reliable solutions for all your plumbing needs. We use high-quality materials and modern techniques to ensure long-lasting results.',
      price: 15000,
      delivery: '1 day',
      seller: { 
        name: 'Oluwaseun Adeyemi', 
        rating: 4.7, 
        reviews: 50,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
      },
      reviews: [
        { id: '1', text: 'Fixed my leak quickly and professionally. Would definitely hire again!', rating: 5, user: 'John Adebayo', date: '2023-10-15' },
        { id: '2', text: 'Great service and fair pricing. The plumber was punctual and courteous.', rating: 4.5, user: 'Mary Johnson', date: '2023-09-22' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      category: 'Plumbing',
      whatsappNumber: '+2348012345678',
      portfolioImages: [
        'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
        'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
      ]
    },
    {
      id: '2',
      title: 'Borehole Drilling Service',
      description: 'Professional borehole drilling for water supply solutions. We provide end-to-end services from site assessment to drilling and installation of pumping systems. Our team uses modern equipment to ensure efficient and reliable water supply.',
      price: 8088800,
      delivery: '14 days',
      seller: { 
        name: 'Globalwater Co.', 
        rating: 4.6, 
        reviews: 20,
        imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
      },
      reviews: [
        { id: '1', text: 'Excellent work! They delivered exactly what was promised ahead of schedule.', rating: 4.5, user: 'Peter Okonkwo', date: '2023-11-05' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1615529162921-f5d0c07042a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      category: 'Plumbing',
      whatsappNumber: '+2348012345679',
      portfolioImages: [
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1615529162921-f5d0c07042a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
      ]
    },
    // Other services would follow the same pattern...
  ];

  useEffect(() => {
    const foundService = allServices.find((s) => s.id === id);
    setService(foundService || null);
    setLoading(false);
  }, [id]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center animate-pulse">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full"></div>
        <div className="w-32 h-4 mx-auto bg-gray-300 rounded"></div>
      </div>
    </div>
  );
  
  if (!service) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h2 className="mb-2 text-2xl font-bold text-gray-900">Service Not Found</h2>
        <p className="mb-6 text-gray-600">The service you're looking for doesn't exist or has been removed.</p>
        <Link to="/services" className="px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
          Browse Services
        </Link>
      </div>
    </div>
  );

  // Filter related services (exclude current service)
  const relatedServices = allServices
    .filter((s) => s.category === service.category && s.id !== id)
    .slice(0, 3);

  const handleWhatsAppClick = () => {
    const message = `Hello, I'm interested in your service: ${service.title}`;
    const url = `https://wa.me/${service.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const totalRating = service.reviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = service.reviews.length > 0 ? totalRating / service.reviews.length : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container px-4 py-3 mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link to="/services" className="text-blue-600 hover:underline">Services</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link to={`/services?category=${service.category}`} className="text-blue-600 hover:underline">{service.category}</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 truncate">{service.title}</li>
          </ol>
        </div>
      </nav>

      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Images and Description */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="mb-6 overflow-hidden bg-white shadow-sm rounded-xl">
              <div className="relative h-80 md:h-96">
                <img
                  src={service.portfolioImages[activeImage] || service.imageUrl}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full top-4 left-4">
                  {service.category}
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex p-4 space-x-2 overflow-x-auto">
                {service.portfolioImages.map((img, index) => (
                  <div 
                    key={index} 
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${activeImage === index ? 'border-blue-500' : 'border-gray-200'}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={img}
                      alt={`${service.title} view ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Description Card */}
            <div className="p-6 mb-6 bg-white shadow-sm rounded-xl">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Service Description</h2>
              <p className="leading-relaxed text-gray-700">{service.description}</p>
            </div>

            {/* Reviews Card */}
            <div className="p-6 bg-white shadow-sm rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
                <div className="flex items-center">
                  <div className="flex mr-2 text-xl text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.round(averageRating) ? 'text-yellow-500' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-600">({service.reviews.length} reviews)</span>
                </div>
              </div>

              {service.reviews.length > 0 ? (
                <div className="space-y-6">
                  {service.reviews.map((review) => (
                    <div key={review.id} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex items-start mb-3">
                        <div className="flex-shrink-0 w-12 h-12 mr-4 bg-gray-200 rounded-full"></div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <h4 className="text-lg font-semibold text-gray-900">{review.user}</h4>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex mb-2 text-base text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < Math.round(review.rating) ? 'text-yellow-500' : 'text-gray-300'}>
                                ★
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-700">{review.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                  <p className="text-gray-600">No reviews yet. Be the first to review this service!</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Purchase Info */}
          <div className="lg:col-span-1">
            {/* Purchase Card */}
            <div className="sticky p-6 bg-white shadow-sm rounded-xl top-6">
              <h1 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex mr-2 text-lg text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.round(averageRating) ? 'text-yellow-500' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">({service.reviews.length} reviews)</span>
              </div>

              <div className="mb-2 text-3xl font-bold text-gray-900">₦{service.price.toLocaleString()}</div>
              
              <div className="flex items-center mb-6 text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Delivery: {service.delivery}</span>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">Quantity</label>
                <div className="flex items-center">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-3 py-2 text-gray-700 transition-colors bg-gray-200 rounded-l-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <div className="px-4 py-2 font-medium text-gray-900 bg-gray-100">{quantity}</div>
                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-3 py-2 text-gray-700 transition-colors bg-gray-200 rounded-r-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <Link 
                  to="/order-summary" 
                  className="block w-full px-6 py-3 font-semibold text-center text-white transition-colors bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg"
                >
                  Purchase Now
                </Link>
                
                <button 
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center w-full px-6 py-3 font-semibold text-white transition-colors bg-green-600 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                  </svg>
                  Contact via WhatsApp
                </button>
              </div>

              {/* Seller Info */}
              <div className="pt-6 mt-8 border-t border-gray-200">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">About the Seller</h3>
                <div className="flex items-center">
                  <img
                    src={service.seller.imageUrl}
                    alt={service.seller.name}
                    className="object-cover w-12 h-12 mr-4 rounded-full"
                  />
                  <div>
                    <Link to={`/profile/${service.seller.name}`} className="font-semibold text-blue-600 hover:underline">
                      {service.seller.name}
                    </Link>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="flex mr-1 text-sm text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.round(service.seller.rating) ? 'text-yellow-500' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span>({service.seller.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services Section */}
        {relatedServices.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Related Services</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <div key={relatedService.id} className="overflow-hidden transition-shadow duration-300 bg-white shadow-sm rounded-xl hover:shadow-md">
                  <img
                    src={relatedService.imageUrl}
                    alt={relatedService.title}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{relatedService.title}</h3>
                    <p className="mb-3 text-sm text-gray-600 line-clamp-2">{relatedService.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">₦{relatedService.price.toLocaleString()}</span>
                      <Link 
                        to={`/service/${relatedService.id}`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;