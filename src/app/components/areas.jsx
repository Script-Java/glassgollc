export default function Areas() {
  return (
    <section className="bg-primary my-10 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">
        {/* Left Column */}
        <div className="flex flex-col justify-center border-r-2 border-white pr-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Dear Valued Customers</h2>
            <div className="w-16 h-[2px] bg-white mb-6"></div>
            <p className="text-lg leading-relaxed">
              At GlassGo, our experienced professionals are dedicated to
              providing top-quality auto glass repair and replacement services
              in Dallas. We use the highest-grade glass and state-of-the-art
              tools to ensure every job is completed with precision and to our
              customers' full satisfaction.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between pl-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Areas We Serve</h2>
            <div className="w-16 h-[2px] bg-white mb-6"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left mt-auto">
            {[ 
              "Dallas", "Plano", "Frisco", "McKinney", "Celina", "Prosper", "The Colony", "Allen",
              "Lewisville", "Little Elm", "Coppell", "Flower Mound", "Grapevine", "South Lake", "Addison", "Farmers Branch",
              "Richardson", "Garland", "Sachse", "Wylie", "Rock Wall", "Mesquite", "Highland Park", "University Park",
              "Irving", "Duncanville", "Desoto", "Lancaster", "Carrollton", "Rowlett", "Cedar Hill", "Princeton"
            ].map((city, i) => (
              <div key={i} className="flex items-center space-x-2">
                <span className="text-lg text-black">→</span>
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
