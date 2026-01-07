import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <section className="text-center mb-8">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">
          Welcome to Little Sprouts Playschool!
        </h1>
        <p className="text-xl text-blue-600 mb-6">
          Nurturing young minds in a fun and safe environment.
        </p>
        <button className="bg-yellow-400 text-blue-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
          Learn More
        </button>
      </section>

      <section className="w-full max-w-4xl mx-auto mb-8">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">Our Environment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Updated placeholder image
              alt="Playschool classroom"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Bright Classrooms</h3>
              <p className="text-blue-600">
                Our classrooms are designed to be spacious, bright, and stimulating for young learners.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/7965750/pexels-photo-7965750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Updated placeholder image
              alt="Playschool playground"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Outdoor Play Area</h3>
              <p className="text-blue-600">
                A safe and engaging outdoor space for children to explore, play, and develop gross motor skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-8">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Philosophy</h2>
        <p className="text-lg text-blue-600 max-w-3xl mx-auto">
          We believe in fostering a love for learning through play, creativity, and exploration. Our experienced educators provide a nurturing environment where every child can thrive and reach their full potential.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;