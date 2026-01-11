// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import "../../app/globals.css";
// export default function PublicLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//      <html lang="en">
//       <body>
//       <Header />
//       {children}
//       <Footer />
//       </body>
//       </html>
//     </>
    
//   );
// }
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}