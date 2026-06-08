export const metadata = {
  title: 'Contact Us | Hasb-e-Rabbi Travels & Tours',
  description: 'Contact Hasb-e-Rabbi Travels for Hajj & Umrah packages. Office in Karachi. Call +92 331 3954965 or WhatsApp for instant quote.',
  alternates: {
    canonical: 'https://hasberabbi.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch for Hajj & Umrah packages</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary-dark">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <h3 className="font-bold text-lg">Office Address</h3>
                    <p className="text-gray-600">Office 202, Lavish mall, Karachi, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📞</span>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <a href="tel:+92332352945" className="text-primary hover:underline">+92 332 352945</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✉️</span>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <a href="mailto:haseebclubi33@gmail.com" className="text-primary hover:underline">haseebclubi33@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">⏰</span>
                  <div>
                    <h3 className="font-bold text-lg">Office Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a href="https://wa.me/92332352945?text=Assalamualaikum please give me umrah package information! "
                className="mt-8 inline-block bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition">
                💬 WhatsApp 24/7
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8!2d67.0822!3d24.8138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRG9sbWVuIENlbnRlciBLYXJhY2hp!5e0!3m2!1sen!2spk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}