import { FaUser, FaBlog, FaHeart } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen blog-container">
      <div className="">
        {/* Heading */}
        <div className="text-center mb-12">
        <p className="text-lg font-semibold text-blue-600">Category</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 capitalize">
          About Us
        </h1>
      </div>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Welcome to our blog! We're passionate about sharing knowledge, stories, and insights on a wide range of topics. Our mission is to inspire, educate, and connect with our readers through engaging content.
        </p>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Jane Doe',
                role: 'Founder & Editor',
                description: 'Jane is a seasoned writer with a passion for storytelling and community building.',
                icon: <FaUser className="text-primary text-3xl" />,
              },
              {
                name: 'John Smith',
                role: 'Content Creator',
                description: 'John loves crafting engaging articles and exploring new topics to share with our readers.',
                icon: <FaBlog className="text-primary text-3xl" />,
              },
              {
                name: 'Emily Johnson',
                role: 'Community Manager',
                description: 'Emily ensures our community thrives by connecting with readers and managing our platforms.',
                icon: <FaHeart className="text-primary text-3xl" />,
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{member.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mission is to create a vibrant platform where ideas flourish, stories inspire, and readers find value in every post. We aim to foster a community that celebrates creativity, curiosity, and connection.
          </p>
        </div>
      </div>
    </div>
  );
}