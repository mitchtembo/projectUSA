import { GraduationCap, FileCheck, Plane, Building2, BookOpen } from "lucide-react"
import Image from "next/image"
import blackStudents from "../images/students.jpg"

const services = [
  {
    title: 'University Selection',
    description: 'Expert guidance in choosing the right university based on your academic goals and preferences.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Application Support',
    description: 'Comprehensive assistance with university applications, documentation, and requirements.',
    icon: FileCheck,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Visa Application Support',
    description: 'Step-by-step guidance through the student visa application process.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1569098644584-210bcd375b59?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Travel Arrangements',
    description: 'Support with travel planning and pre-departure preparation.',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1474&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Post Graduate Career Guidance',
    description: 'Career counseling and job market transition support after graduation.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive support for your educational journey in the USA
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <span className="rounded-lg inline-flex p-3 bg-purple-50 text-purple-600 ring-4 ring-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="ml-4 text-lg font-medium text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <Image
            src={blackStudents}
            alt="Black students studying"
            width={800}
            height={400}
            className="rounded-lg shadow-2xl mx-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}

