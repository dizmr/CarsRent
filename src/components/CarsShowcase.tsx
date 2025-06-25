import Image from "next/image";

const cars = [
  {
    name: "Tesla Model S",
    description: "An all-electric five-door liftback sedan produced by Tesla, offering excellent range and performance.",
    image: "/cars/tesla.jpg",
    rating: 4.9,
  },
  {
    name: "BMW i8",
    description: "A plug-in hybrid sports car with futuristic design and impressive efficiency.",
    image: "/cars/bmw.jpg",
    rating: 4.7,
  },
  {
    name: "Audi e-tron",
    description: "Audi's first fully electric SUV that combines luxury with cutting-edge EV technology.",
    image: "/cars/audi.jpg",
    rating: 4.6,
  },
  {
    name: "Porsche Taycan",
    description: "A high-performance electric car with exceptional handling and sleek styling.",
    image: "/cars/porsche.jpg",
    rating: 4.8,
  },
  {
    name: "Ford Mustang Mach-E",
    description: "An electric SUV with the soul of a Mustang, blending performance and practicality.",
    image: "/cars/mustang.jpg",
    rating: 4.5,
  },
  {
    name: "Lamborghini Huracán",
    description: "A powerful V10 supercar that combines luxury, speed, and aggressive styling.",
    image: "/cars/lamborghini.jpg",
    rating: 4.9,
  },
  {
    name: "Mercedes-AMG GT",
    description: "A luxury performance car with elegant design and thrilling performance.",
    image: "/cars/mercedes.jpg",
    rating: 4.8,
  },
  {
    name: "BMW M8 Competition",
    description: "A premium sports coupe offering raw power, refined luxury, and advanced tech.",
    image: "/cars/m8.jpg",
    rating: 4.7,
  },
  {
    name: "Audi R8 V10",
    description: "A sleek, high-performance machine with a naturally aspirated V10 engine.",
    image: "/cars/r8.jpg",
    rating: 4.8,
  },
];

export default function CarsShowcase() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white dark:bg-card rounded-2xl shadow-md overflow-hidden border border-border p-4 flex flex-col"
            >
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={car.image}
                  alt={car.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">
                {car.name}
              </h3>
              <p className="text-muted-foreground mb-4">{car.description}</p>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">{"\u2605".repeat(Math.floor(car.rating))}</span>
                <span className="text-sm text-muted-foreground">{car.rating} / 5</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
