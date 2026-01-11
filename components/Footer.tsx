import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 text-black">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <div className="relative w-14 h-14">
              <Image
                src="/logo.jpg"
                alt="Hasb-e-Rabbi Travels & Tours"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
            <h1
  className="text-2xl font-extrabold leading-none bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent py-2"
  style={{
    textShadow: `0.5px 0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px -0.5px 0 #000`
  }}
>
  Hasb-e-Rabbi
</h1>
<span
  className="text-sm font-semibold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent"
  style={{
    textShadow: `0.1px 0.1px 0 #000, 0.1px 0.1px 0 #000, 0.1px 0.1px 0 #000, 0.1px 0.1px 0 #000`
  }}
>
  Travels & Tours
</span>

            </div>
            <p className="mb-6 leading-relaxed">
              Ministry approved Hajj & Umrah travel agency. 100% visa approval since 2013.
            </p>
            <div className="flex gap-4 flex-wrap">
              <span className="border border-yellow-500/40 bg-white/5 px-4 py-2 rounded-lg text-sm font-semibold text-black">
                🔒 SSL Secured
              </span>
              <span className="border border-yellow-500/40 bg-white/5 px-4 py-2 rounded-lg text-sm font-semibold text-black">
                ✅ Ministry Verified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-black">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="transition hover:text-black/80">Home</Link></li>
              <li><Link href="/umrah" className="transition hover:text-black/80">Umrah Packages</Link></li>
              <li><Link href="/hajj" className="transition hover:text-black/80">Hajj Packages</Link></li>
              <li><Link href="/blog" className="transition hover:text-black/80">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-black">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li><Link href="/umrah" className="transition hover:text-black/80">Economy Umrah</Link></li>
              <li><Link href="/umrah" className="transition hover:text-black/80">Premium Umrah</Link></li>
              <li><Link href="/hajj" className="transition hover:text-black/80">Hajj 2025</Link></li>
              <li><span className="transition hover:text-black/80 cursor-pointer">Visa Processing</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-1 after:bg-black">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-black">📍</span>
                <span>Office # 123, Gulberg III, Lahore</span>
              </li>
              <li>
                <a href="tel:+923313954965" className="flex items-center gap-2 transition hover:text-black/80">
                  <span className="text-black">📞</span> +92 331 3954965
                </a>
              </li>
              <li>
                <a href="mailto:haseebclubi@gmail.com" className="flex items-center gap-2 transition hover:text-black/80">
                  <span className="text-black">✉️</span> haseebclubi@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
  <Image
    src="/whatsapp-logo.png" // make sure this is your WhatsApp logo in public folder
    alt="WhatsApp"
    width={20}
    height={20}
  />
  <a
    href="https://wa.me/923313954965"
    target="_blank"
    className="transition hover:text-black/80"
  >
    WhatsApp 24/7
  </a>
</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/20 mt-12 pt-8 text-center text-black/80 text-sm">
          <p>
            © 2026 <span className="font-semibold">Hasb-e-Rabbi Pakistan</span>. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923313954965?text=Assalamualaikum!%20I%20need%20help"
        target="_blank"
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from  rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform animate-bounce-slow hover:animate-none z-50">
        <svg fill="none" viewBox="0 0 360 362">
          <path fill="#25D366" fillRule="evenodd" d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z" clipRule="evenodd"/>
        </svg>
      </a>
    </footer>
  );
}
