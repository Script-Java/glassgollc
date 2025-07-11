const Services = () => {
  return (
    <div className=" bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">Services Offered by GlassGo</h1>
          <p className="mt-4 text-lg text-base-content opacity-80">
            Quality Glass Solutions for Every Need
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center md:text-start">
            <h2 className="text-xl font-semibold mb-4 text-primary">Auto Glass Services</h2>
            <ul className="space-y-2 text-base-content">
              <li>Windshield Replacement</li>
              <li>Car Window Repair</li>
              <li>Mobile Glass Repair</li>
              <li>Side/Back Glass Replacement</li>
              <li>Truck Glass Repair</li>
              <li>Window Motor Regulator Repair & Replacement</li>
              <li>Emergency Services</li>
            </ul>
          </div>

          <div className="text-center md:text-start">
            <h2 className="text-xl font-semibold mb-4 text-primary">Residential Glass</h2>
            <ul className="space-y-2 text-base-content">
              <li>Window Pane Replacement</li>
              <li>Custom Glass Installation</li>
              <li>Glass Door Repair</li>
              <li>Mirror Installation</li>
              <li>Energy-Efficient Upgrades</li>
              <li>Screen Replacement</li>
              <li>Emergency Boarding</li>
            </ul>
          </div>

          <div className="text-center md:text-start">
            <h2 className="text-xl font-semibold mb-4 text-primary">Storm Damage Glass Repair</h2>
            <ul className="space-y-2 text-base-content">
              <li>Hail Damage Windshield Repair</li>
              <li>Home Window Storm Damage Replacement</li>
              <li>Emergency Glass Repair for Autos and Homes</li>
              <li>Safety & Security Glass</li>
              <li>Insulated Glass Units</li>
              <li>Custom Installations</li>
            </ul>
          </div>

          <div className="text-center md:text-start">
            <h2 className="text-xl font-semibold mb-4 text-primary">Specialty Services</h2>
            <ul className="space-y-2 text-base-content">
              <li>Custom Cut Glass</li>
              <li>Shower Enclosures</li>
              <li>Table Tops</li>
              <li>Frameless Shower Doors</li>
              <li>Closet Door Glass Repair</li>
              <li>Glass Cabinet Door Replacement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
