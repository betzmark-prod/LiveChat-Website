export default function Logos() {
  const logos = ['Acme Corp', 'GlobalBank', 'TechFlow', 'SaaSify', 'GrowthStack', 'CloudScale'];
  
  return (
    <section className="py-12 border-y border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-wider">
          Trusted by innovative companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, i) => (
            <div key={i} className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
