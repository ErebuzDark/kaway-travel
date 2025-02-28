import React, { useState } from "react";
import { motion } from "motion/react";

// data
import { dataPlaces } from "../data/dataPlace";

// icons
import { CiBookmark } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import SlideModal from "./modal/SlideModal";
import { CiLocationArrow1 } from "react-icons/ci";

// DATA
const faqs = [
  { question: "What’s included in the tour package?" },
  { question: "Can I customize my itinerary?" },
  { question: "What is your cancellation policy?" },
];

const blogPosts = [
  { title: "Top 10 Must-Visit Hidden Gems" },
  { title: "Best Local Dishes to Try on Your Next Trip" },
  { title: "What to remember first before visiting?" },
];

const rentalPackages = [
  {
    title: "For Friends",
    description:
      "Perfect for road trips, weekend getaways, and spontaneous adventures.",
  },
  {
    title: "Family Package",
    description:
      "Spacious and comfortable vehicles for hassle-free family vacations.",
  },
  {
    title: "Outreach Buses",
    description:
      "Large-capacity buses for community outreach, church groups, or charity events.",
  },
  {
    title: "Corporate Travel",
    description:
      "Executive vehicles for business trips, conferences, and company outings.",
  },
  {
    title: "Event Transportation",
    description:
      "Reliable shuttles for weddings, parties, and special occasions.",
  },
];

const Card = () => {
  const [isMarked, setIsMarked] = useState([]);
  const [isSlideModalOpen, setIsSlideModalOpen] = useState(false);
  const [placeInfo, setPlaceInfo] = useState([]);
  const [email, setEmail] = useState("");

  const handleBookMark = (e, id) => {
    e.stopPropagation();
    setIsMarked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    console.log(isMarked);
  };

  const handleOpenSlideModal = (place) => {
    if (place === "") {
      setIsSlideModalOpen(false);
    }
    setPlaceInfo(place);
    setIsSlideModalOpen(!isSlideModalOpen);
  };

  return (
    <>
      <div className="px-5 sm:px-[11.6%] py-4">
        <h1 className="landing-header-text">
          Explore the Philippines Like Never Before!
        </h1>
        <p className="landing-header-sub-text">
          Discover breathtaking destinations, hidden gems, and vibrant cultures
          with our expertly curated tours across the Philippines. Whether you're
          seeking adventure, relaxation, or a taste of local flavors, we make
          every trip seamless and unforgettable.
        </p>
        <a href="#card-container" className="w-fit bg-slate-200">
          <button className="flex w-fit border-[0.3px] border-blue-950 px-6 py-3 my-4 items-center gap-2 text-blue-950 hover:bg-blue-950 hover:text-white duration-300 rounded-full">
            <p>Start Your Journey</p> <CiLocationArrow1 className="size-5" />
          </button>
        </a>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
          <div class="p-6 bg-white shadow-md rounded-lg">
            <h2 class="text-xl font-bold text-blue-600">
              🌏 Culture & Traditions
            </h2>
            <ul class="list-disc list-inside text-gray-600 mt-2">
              <li>
                <strong>Festivals:</strong> Sinulog, Ati-Atihan, Panagbenga
              </li>
              <li>
                <strong>Cuisine:</strong> Adobo, Sinigang, Lechon, Halo-Halo
              </li>
              <li>
                <strong>Languages:</strong> Filipino, English, +170 dialects
              </li>
              <li>
                <strong>Bayanihan Spirit:</strong> Community and helping each
                other
              </li>
            </ul>
          </div>

          <div class="p-6 bg-white shadow-md rounded-lg">
            <h2 class="text-xl font-bold text-green-600">👨‍👩‍👧‍👦 The People</h2>
            <ul class="list-disc list-inside text-gray-600 mt-2">
              <li>
                <strong>Hospitality:</strong> Warm, friendly, and generous
              </li>
              <li>
                <strong>Resilience:</strong> Joyful despite challenges
              </li>
              <li>
                <strong>Strong Family Ties:</strong> Multigenerational
                households
              </li>
              <li>
                <strong>Love for Music & Arts:</strong> Karaoke, Tinikling,
                crafts
              </li>
            </ul>
          </div>

          <div class="p-6 bg-white shadow-md rounded-lg">
            <h2 class="text-xl font-bold text-red-600">🏝️ Must-Visit Places</h2>
            <ul class="list-disc list-inside text-gray-600 mt-2">
              <li>
                <strong>Boracay:</strong> White sand beaches & nightlife
              </li>
              <li>
                <strong>Palawan:</strong> Underground River, El Nido
              </li>
              <li>
                <strong>Banaue Rice Terraces:</strong> UNESCO heritage site
              </li>
              <li>
                <strong>Mayon Volcano:</strong> Perfect cone-shaped volcano
              </li>
              <li>
                <strong>Vigan:</strong> Spanish colonial town
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-2 flex-wrap justify-center p-2"
        id="card-container"
      >
        {dataPlaces.map((place, index) => (
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            key={index}
            className="relative card group"
            onClick={() => handleOpenSlideModal(place)}
          >
            <figure className="overflow-hidden bg-re">
              <img
                className="card-img"
                src={place.placeImageURL}
                alt="boracay-beach"
              />
            </figure>
            <div className="flex justify-between items-center">
              <div className="p-3 md:p-4">
                <figcaption className="card-eyebrow">
                  {place.placeTitle}
                </figcaption>
                <h1 className="card-title">{place.placeName}</h1>
              </div>
              <div className="absolute top-0 z-50 sm:relative text-white sm:text-black flex mx-4">
                <button
                  onClick={(e) => handleBookMark(e, place.id)}
                  className="card-bookmark"
                >
                  {!isMarked.includes(place.id) ? (
                    <CiBookmark className="size-5" />
                  ) : (
                    <CiBookmarkCheck className="size-5" />
                  )}
                </button>

                <button
                  onClick={(e) => e.stopPropagation()}
                  className="card-bookmark"
                >
                  <CiShare2 className="size-5" />
                </button>
              </div>
            </div>
            <p className="card-detail">{place.placeDetails}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        class="bg-gradient-to-r from-blue-700 to-blue-950 text-white text-center my-11 py-23 px-6 shadow-lg"
      >
        <h2 class="text-2xl sm:text-4xl font-bold">
          🔥 Limited-Time Offer! 🔥
        </h2>
        <p class="mt-2 text-lg sm:text-2xl">
          Book your dream vacation now and enjoy up to{" "}
          <span class="font-bold">30% OFF</span> on selected tours!
        </p>
        <p class="mt-1 text-sm sm:text-lg">Hurry! This deal ends soon.</p>
        <button class="mt-4 bg-white text-blue-950 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
          Book Now
        </button>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-2 mx-5 sm:mx-[11.6%]">
        {/* FAQ Section */}
        <div className="mb-10">
          <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                initial={{ y: 100, opacity: 0.3 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
                key={index}
                className="p-4 border border-slate-300 rounded-lg shadow-sm bg-gray-50"
              >
                <p className="text-gray-700 font-medium">✅ {faq.question}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div>
          <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
            Latest Travel Articles
          </h2>
          <div className="space-y-3">
            {blogPosts.map((post, index) => (
              <motion.div
                initial={{ y: 100, opacity: 0.3 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
                key={index}
                className="p-4 border border-slate-300 rounded-lg shadow-sm bg-gray-50"
              >
                <p className="text-gray-700 font-medium">✈️ {post.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <section className="mx-5 sm:mx-[11.6%] my-11 text-center">
        <h2 className="text-xl md:text-4xl font-bold text-blue-950 mb-4">
          Rent a Vehicle for Your Next Adventure!
        </h2>
        <p className="text-gray-600 mb-6">
          Looking for a vehicle for your outdoor activities? We offer a variety
          of rental transportation options with reliable professional drivers,
          ensuring a safe and comfortable journey for any occasion.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rentalPackages.map((pack, index) => (
            <div key={index} className="border border-slate-300 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-950">
                {pack.title}
              </h3>
              <p className="text-gray-600 mt-2">{pack.description}</p>
            </div>
          ))}
        </div>
        <div className="my-24">
          <motion.p
            className="text-5xl"
            animate={{ y: [0, -16, 0] }} // Moves up and down
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.p>
          <h3 className="flex flex-col text-xl md:text-4xl font-semibold text-blue-950 py-8">
            <p>Why Choose Us?</p>
          </h3>
          <ul className="grid grid-cols-1 lg:grid-cols-3 text-center text-gray-600 mt-2 space-y-2">
            <li>✔ Well-maintained vehicles</li>
            <li>✔ Professional and courteous drivers</li>
            <li>✔ Affordable and flexible rental options</li>
          </ul>
        </div>
      </section>

      <div className="bg-gradient-to-r from-blue-700 to-blue-950 text-white py-11 mt-11">
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-2xl sm:text-4xl text-center font-semibold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-sm sm:text-lg text-center text-white">
            Get the latest updates on travel deals, promos, and exclusive
            offers. Sign up now!
          </p>
          <div className="flex justify-center items-center mt-4">
            <input
              type="email"
              className="p-2 w-64 border border-white rounded-l"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-white text-blue-950 px-4 py-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <SlideModal
        isSlideModalOpen={isSlideModalOpen}
        handleOpenSlideModal={handleOpenSlideModal}
        placeInfo={placeInfo}
      />
    </>
    // para sa cards
  );
};

export default Card;
