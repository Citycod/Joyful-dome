import { Link } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  category: string;
  price: number; // In NGN
  delivery: string;
  rating: number;
  seller: string;
  reviews: number;
  imageUrl: string; // For service-specific images
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Calculate full and half stars for rating
  const fullStars = Math.floor(service.rating);
  const hasHalfStar = service.rating % 1 >= 0.25 && service.rating % 1 < 0.75;
  const emptyStars = 5 - Math.ceil(service.rating);

  return (
    <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={service.imageUrl || 'https://via.placeholder.com/300x200'}
          alt={`${service.title} - ${service.category} service by ${service.seller}`}
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full top-3 left-3">
          {service.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors line-clamp-2 hover:text-blue-600">
          {service.title}
        </h3>
        <p className="mb-3 text-sm text-gray-600">By <span className="font-medium">{service.seller}</span></p>
        <div className="flex items-center mb-4">
          <div className="flex text-sm">
            {[...Array(fullStars)].map((_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
            {hasHalfStar && <span className="text-yellow-500">½</span>}
            {[...Array(emptyStars)].map((_, i) => (
              <span key={i + fullStars + (hasHalfStar ? 1 : 0)} className="text-gray-300">☆</span>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">({service.reviews})</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-gray-900">₦{service.price.toLocaleString()}</span>
          <span className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">{service.delivery}</span>
        </div>
        <Link
          to={`/service/${service.id}`}
          className="block w-full px-4 py-2 font-medium text-center text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;