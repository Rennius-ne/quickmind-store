import products from '@/data/products.json';
import ProductCard from '@/components/ProductCard';
import CountdownTimer from '@/components/CountdownTimer';
import SalesNotification from '@/components/SalesNotification';

export default function HomePage() {
  const bestSellers = products.filter(p => p.is_bestseller);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Banner with Countdown */}
      <div className="bg-indigo-600 text-white py-2 px-4 text-center text-sm font-medium flex justify-center items-center gap-3">
        <span>🔥 Ribotas pasiūlymas: Visiems AI paketams taikoma 50% nuolaida!</span>
        <CountdownTimer />
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-4">
          QuickMind Digital Store
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          AI produktai, kurie taupo laiką ir padeda <span className="text-indigo-600">uždirbti daugiau.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          Atsisiųskite jau šiandien paruoštus verslo planus, promptus ir automatizavimo įrankius. Prieiga iškart po apmokėjimo.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/shop" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-indigo-200">
            Naršyti Produktus
          </a>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">🔥 Geriausiai Parduodami AI Paketai</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Social Proof / Sales Popup */}
      <SalesNotification />
    </main>
  );
}
