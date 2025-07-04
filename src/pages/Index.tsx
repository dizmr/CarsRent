import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  User,
  Calendar,
  MapPin,
  Search,
  Users,
  Settings,
  Car,
  Star,
  Heart,
  Shield,
  Clock,
  Award,
  CheckCircle,
  ThumbsUp,
  Globe,
  Headphones,
  CreditCard,
  Zap,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Play,
  Menu,
  X,
  Gauge,
  Fuel,
  Navigation,
  ChevronDown,
  Quote,
} from "lucide-react";

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState("Dubai Marina");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCarBrand, setActiveCarBrand] = useState("all");
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [showCarModal, setShowCarModal] = useState(false);

  const carBrands = [
    { id: "all", name: "All Brands" },
    { id: "ferrari", name: "Ferrari" },
    { id: "lamborghini", name: "Lamborghini" },
    { id: "mercedes", name: "Mercedes-Benz" },
    { id: "bentley", name: "Bentley" },
    { id: "aston-martin", name: "Aston Martin" },
    { id: "audi", name: "Audi" },
    { id: "bmw", name: "BMW" },
    { id: "range-rover", name: "Range Rover" },
    { id: "porsche", name: "Porsche" },
    { id: "cadillac", name: "Cadillac" },
  ];

  const luxuryCars = [
    // Ferrari Models
    {
      id: 1,
      brand: "ferrari",
      name: "Ferrari Purosangue Novitec",
      category: "Luxury SUV",
      description:
        "The world's first Ferrari SUV combines uncompromising performance with the practicality of four doors and four seats.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Febb419f1b1b24b4faa1732d563c88742",
      pricePerDay: 11000,
      originalPrice: 12000,
      engine: "6.5L V12",
      power: "725 HP",
      acceleration: "3.3s 0-100km/h",
      maxSpeed: "310 km/h",
      transmission: "8-Speed Automatic",
      seats: 4,
      doors: 4,
      features: [
        "All-Wheel Drive",
        "Active Suspension",
        "Carbon Fiber Interior",
        "Novitec Performance Package",
      ],
      available: true,
      featured: true,
      rating: 4.9,
    },
    {
      id: 2,
      brand: "ferrari",
      name: "Ferrari 812 GTS Novitec Spyder",
      category: "Convertible",
      description:
        "The 812 GTS represents the pinnacle of naturally aspirated V12 Ferrari convertibles with Novitec enhancements.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Fcb5c6b453afa4547a7aa1a4f835ddb37",
      pricePerDay: 10000,
      originalPrice: 11000,
      engine: "6.5L V12",
      power: "800 HP",
      acceleration: "2.8s 0-100km/h",
      maxSpeed: "340 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "Retractable Hardtop",
        "Novitec Performance Kit",
        "Carbon Fiber Aero",
        "Track Mode",
      ],
      available: true,
      featured: true,
      rating: 4.9,
    },
    {
      id: 3,
      brand: "ferrari",
      name: "Ferrari 296 GTS Spyder",
      category: "Hybrid Convertible",
      description:
        "The 296 GTS combines a turbocharged V6 with electric assistance for incredible performance and efficiency.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F95a1847b6f7c458cbd0256e7d930b48e",
      pricePerDay: 4500,
      originalPrice: 5000,
      engine: "3.0L V6 Hybrid",
      power: "830 HP",
      acceleration: "2.9s 0-100km/h",
      maxSpeed: "330 km/h",
      transmission: "8-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "Hybrid Technology",
        "Retractable Hardtop",
        "All-Wheel Drive",
        "Ferrari Dynamic Enhancer",
      ],
      available: true,
      featured: true,
      rating: 4.8,
    },
    {
      id: 4,
      brand: "ferrari",
      name: "Ferrari F8 Tributo Spider Novitec",
      category: "Convertible",
      description:
        "The F8 Tributo Spider with Novitec modifications delivers even more extreme performance and styling.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Fb736595dc2a649d58386ffe1f42a7110",
      pricePerDay: 4000,
      originalPrice: 4500,
      engine: "3.9L V8 Twin-Turbo",
      power: "720 HP",
      acceleration: "2.8s 0-100km/h",
      maxSpeed: "340 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "Novitec Performance Package",
        "Retractable Hardtop",
        "Carbon Fiber Aero",
        "Sport Exhaust System",
      ],
      available: true,
      featured: true,
      rating: 4.8,
    },
    {
      id: 5,
      brand: "ferrari",
      name: "Ferrari F8 Tributo Spyder Yellow",
      category: "Convertible",
      description:
        "The iconic F8 Tributo Spider in stunning yellow, delivering pure Ferrari driving emotion.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F0ee01783215f48e58015a8d76e42a190",
      pricePerDay: 3800,
      originalPrice: 4200,
      engine: "3.9L V8 Twin-Turbo",
      power: "720 HP",
      acceleration: "2.8s 0-100km/h",
      maxSpeed: "340 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "Retractable Hardtop",
        "Side Slip Control",
        "Ferrari Dynamic Enhancer",
        "Premium Leather Interior",
      ],
      available: true,
      featured: false,
      rating: 4.8,
    },
    {
      id: 6,
      brand: "ferrari",
      name: "Ferrari F8 Tributo Spyder Black",
      category: "Convertible",
      description:
        "The F8 Tributo Spider in sleek black finish, combining elegance with raw performance.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F854a3c4d4bfa4d9cb2e349cd6ae4b7af",
      pricePerDay: 3500,
      originalPrice: 3900,
      engine: "3.9L V8 Twin-Turbo",
      power: "720 HP",
      acceleration: "2.8s 0-100km/h",
      maxSpeed: "340 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "Retractable Hardtop",
        "Carbon Fiber Steering Wheel",
        "Premium Audio System",
        "Sport Exhaust",
      ],
      available: true,
      featured: false,
      rating: 4.8,
    },
    {
      id: 7,
      brand: "ferrari",
      name: "Ferrari 488 Spyder",
      category: "Convertible",
      description:
        "The 488 Spider delivers exhilarating performance with the joy of open-air driving in true Ferrari style.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F8f31a93318494307b89bd514715d079d",
      pricePerDay: 2500,
      originalPrice: 2900,
      engine: "3.9L V8 Twin-Turbo",
      power: "670 HP",
      acceleration: "3.0s 0-100km/h",
      maxSpeed: "325 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "Retractable Hardtop",
        "Ferrari Dynamic Enhancer",
        "Carbon Fiber Details",
        "Premium Interior",
      ],
      available: true,
      featured: false,
      rating: 4.7,
    },
    {
      id: 8,
      brand: "ferrari",
      name: "Ferrari Portofino Spyder",
      category: "Grand Tourer",
      description:
        "The Portofino offers the perfect blend of performance and comfort for grand touring adventures.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F083cd0e483fb4ec68c44887e9878d52f",
      pricePerDay: 2500,
      originalPrice: 2800,
      engine: "3.9L V8 Twin-Turbo",
      power: "600 HP",
      acceleration: "3.5s 0-100km/h",
      maxSpeed: "320 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 4,
      doors: 2,
      features: [
        "Retractable Hardtop",
        "GT Mode",
        "Premium Leather",
        "Advanced Infotainment",
      ],
      available: true,
      featured: false,
      rating: 4.6,
    },

    // Lamborghini Models
    {
      id: 9,
      brand: "lamborghini",
      name: "Lamborghini Huracan STO",
      category: "Track-Focused Supercar",
      description:
        "The Huracán STO (Super Trofeo Omologata) brings racing technology directly to the street.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F91e816591b584a4989331bc113257319",
      pricePerDay: 4000,
      originalPrice: 4500,
      engine: "5.2L V10",
      power: "640 HP",
      acceleration: "3.0s 0-100km/h",
      maxSpeed: "310 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "Track-Focused Aerodynamics",
        "Carbon Fiber Body",
        "Racing Technology",
        "Performance Exhaust",
      ],
      available: true,
      featured: true,
      rating: 4.9,
    },
    {
      id: 10,
      brand: "lamborghini",
      name: "Lamborghini Huracan EVO Spyder",
      category: "Convertible",
      description:
        "The Huracán EVO Spyder delivers the ultimate open-air Lamborghini experience with evolved performance.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Fec79236f75ec4cba8cc4faa2387dc107",
      pricePerDay: 3300,
      originalPrice: 3700,
      engine: "5.2L V10",
      power: "640 HP",
      acceleration: "3.1s 0-100km/h",
      maxSpeed: "325 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "Convertible Soft Top",
        "LDVI System",
        "All-Wheel Drive",
        "Advanced Traction Control",
      ],
      available: true,
      featured: true,
      rating: 4.8,
    },

    // Mercedes-Benz Models
    {
      id: 11,
      brand: "mercedes",
      name: "Mercedes G63 AMG 800 Widestar",
      category: "Luxury SUV",
      description:
        "The ultimate G-Wagon with Brabus modifications delivering extreme luxury and performance.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F0f6d1263362e45d88a663c310214452d",
      pricePerDay: 3000,
      originalPrice: 3400,
      engine: "4.0L V8 Twin-Turbo",
      power: "800 HP",
      acceleration: "4.1s 0-100km/h",
      maxSpeed: "240 km/h",
      transmission: "9-Speed Automatic",
      seats: 5,
      doors: 4,
      features: [
        "Brabus Performance Package",
        "Widestar Body Kit",
        "Premium Interior",
        "All-Terrain Capability",
      ],
      available: true,
      featured: true,
      rating: 4.8,
    },
    {
      id: 12,
      brand: "mercedes",
      name: "Mercedes AMG GLS63 S BRABUS",
      category: "Luxury SUV",
      description:
        "The pinnacle of luxury SUVs with Brabus enhancements for ultimate performance and comfort.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F9d43242b3eae45718c6c971aa42a5d9e",
      pricePerDay: 2500,
      originalPrice: 2900,
      engine: "4.0L V8 Twin-Turbo",
      power: "630 HP",
      acceleration: "3.6s 0-100km/h",
      maxSpeed: "280 km/h",
      transmission: "9-Speed Automatic",
      seats: 7,
      doors: 4,
      features: [
        "Brabus Performance Kit",
        "7-Seat Configuration",
        "Air Suspension",
        "Premium Sound System",
      ],
      available: true,
      featured: false,
      rating: 4.7,
    },
    {
      id: 13,
      brand: "mercedes",
      name: "Mercedes AMG GT63 Coupe",
      category: "Performance Coupe",
      description:
        "The AMG GT63 Coupe delivers pure performance in a stunning four-door package.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Febbd52fd05b44c3086bf9a8201acde5d",
      pricePerDay: 2500,
      originalPrice: 2800,
      engine: "4.0L V8 Twin-Turbo",
      power: "630 HP",
      acceleration: "3.2s 0-100km/h",
      maxSpeed: "315 km/h",
      transmission: "9-Speed Automatic",
      seats: 4,
      doors: 4,
      features: [
        "AMG Performance Exhaust",
        "Active Aerodynamics",
        "Track Mode",
        "Premium Interior",
      ],
      available: true,
      featured: false,
      rating: 4.7,
    },
    {
      id: 14,
      brand: "mercedes",
      name: "Mercedes G63 AMG",
      category: "Luxury SUV",
      description:
        "The iconic G-Class with AMG performance, combining luxury with unmatched off-road capability.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F2a4d00c7e9b34d279384e29b266bb93b",
      pricePerDay: 1800,
      originalPrice: 2100,
      engine: "4.0L V8 Twin-Turbo",
      power: "585 HP",
      acceleration: "4.5s 0-100km/h",
      maxSpeed: "220 km/h",
      transmission: "9-Speed Automatic",
      seats: 5,
      doors: 4,
      features: [
        "All-Terrain Capability",
        "Luxury Interior",
        "AMG Performance Package",
        "Premium Sound System",
      ],
      available: true,
      featured: false,
      rating: 4.6,
    },
    {
      id: 15,
      brand: "mercedes",
      name: "Mercedes AMG GT63 S",
      category: "Performance Sedan",
      description:
        "The AMG GT63 S combines four-door practicality with supercar-level performance.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Fad9e5b76ead34438938232a0d9e3aaf0",
      pricePerDay: 1500,
      originalPrice: 1800,
      engine: "4.0L V8 Twin-Turbo",
      power: "630 HP",
      acceleration: "3.2s 0-100km/h",
      maxSpeed: "315 km/h",
      transmission: "9-Speed Automatic",
      seats: 4,
      doors: 4,
      features: [
        "AMG Performance Exhaust",
        "Active Rear Spoiler",
        "Track Mode",
        "Premium Leather Interior",
      ],
      available: true,
      featured: false,
      rating: 4.6,
    },

    // Bentley Models
    {
      id: 17,
      brand: "bentley",
      name: "Bentley Continental GTC",
      category: "Luxury Convertible",
      description:
        "The Continental GTC offers the ultimate in luxury convertible motoring with handcrafted excellence.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F9ecbcb2cfc644a869b6988e5696f2cfd",
      pricePerDay: 2500,
      originalPrice: 2800,
      engine: "6.0L W12 Twin-Turbo",
      power: "635 HP",
      acceleration: "4.5s 0-100km/h",
      maxSpeed: "333 km/h",
      transmission: "8-Speed Automatic",
      seats: 4,
      doors: 2,
      features: [
        "Convertible Soft Top",
        "Handcrafted Interior",
        "All-Wheel Drive",
        "Rotating Display",
      ],
      available: true,
      featured: true,
      rating: 4.8,
    },
    {
      id: 18,
      brand: "bentley",
      name: "Bentley Continental GT",
      category: "Grand Tourer",
      description:
        "The Continental GT combines handcrafted luxury with effortless performance for the ultimate grand touring experience.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F24cb106fb3f246529379a6c84de1252c",
      pricePerDay: 2200,
      originalPrice: 2500,
      engine: "4.0L V8 Twin-Turbo",
      power: "550 HP",
      acceleration: "4.0s 0-100km/h",
      maxSpeed: "318 km/h",
      transmission: "8-Speed Automatic",
      seats: 4,
      doors: 2,
      features: [
        "Handcrafted Interior",
        "Diamond Quilted Leather",
        "Naim Audio System",
        "All-Wheel Drive",
      ],
      available: true,
      featured: false,
      rating: 4.7,
    },
    {
      id: 19,
      brand: "bentley",
      name: "Bentley Bentayga",
      category: "Luxury SUV",
      description:
        "The Bentayga redefines the luxury SUV segment with unparalleled craftsmanship and performance.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F3811c4a4f02440eabdb24c4bff22e4fd",
      pricePerDay: 2200,
      originalPrice: 2500,
      engine: "4.0L V8 Twin-Turbo",
      power: "550 HP",
      acceleration: "4.5s 0-100km/h",
      maxSpeed: "290 km/h",
      transmission: "8-Speed Automatic",
      seats: 5,
      doors: 4,
      features: [
        "Air Suspension",
        "Handcrafted Interior",
        "All-Terrain Capability",
        "Premium Sound System",
      ],
      available: true,
      featured: false,
      rating: 4.7,
    },

    // Aston Martin Models
    {
      id: 20,
      brand: "aston-martin",
      name: "Aston Martin DBX 707",
      category: "Performance SUV",
      description:
        "The DBX 707 is the most powerful SUV Aston Martin has ever created, combining luxury with track-focused performance.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Ff284ad0a958e43dc947dcd2cea4ed1a7",
      pricePerDay: 2500,
      originalPrice: 2800,
      engine: "4.0L V8 Twin-Turbo",
      power: "707 HP",
      acceleration: "3.3s 0-100km/h",
      maxSpeed: "310 km/h",
      transmission: "9-Speed Automatic",
      seats: 5,
      doors: 4,
      features: [
        "Track-Focused Performance",
        "Active Suspension",
        "Premium Interior",
        "All-Terrain Capability",
      ],
      available: true,
      featured: true,
      rating: 4.8,
    },
    {
      id: 21,
      brand: "aston-martin",
      name: "Aston Martin Vantage",
      category: "Sports Car",
      description:
        "The Vantage delivers pure driving emotion with perfect balance of power and precision engineering.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F2d63047db9124077945d255d8cc99297",
      pricePerDay: 1800,
      originalPrice: 2100,
      engine: "4.0L V8 Twin-Turbo",
      power: "510 HP",
      acceleration: "3.6s 0-100km/h",
      maxSpeed: "314 km/h",
      transmission: "8-Speed Automatic",
      seats: 2,
      doors: 2,
      features: [
        "Limited Slip Differential",
        "Sport Plus Suspension",
        "Premium Audio System",
        "Alcantara Interior",
      ],
      available: true,
      featured: false,
      rating: 4.7,
    },

    // Audi Models
    {
      id: 22,
      brand: "audi",
      name: "Audi R8 Spyder",
      category: "Convertible Supercar",
      description:
        "The R8 Spyder combines the thrill of open-top driving with the performance of a true supercar.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F9ba2905c86c743948aa630a425ea6acd",
      pricePerDay: 2000,
      originalPrice: 2300,
      engine: "5.2L V10",
      power: "610 HP",
      acceleration: "3.5s 0-100km/h",
      maxSpeed: "329 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 2,
      doors: 2,
      features: [
        "Convertible Soft Top",
        "All-Wheel Drive",
        "Carbon Fiber Details",
        "Virtual Cockpit",
      ],
      available: true,
      featured: true,
      rating: 4.7,
    },
    {
      id: 23,
      brand: "audi",
      name: "Audi RS7",
      category: "Performance Sedan",
      description:
        "The RS7 combines stunning design with incredible performance in a practical four-door package.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F05e9f942a94b4ef8aa3a201c988a2310",
      pricePerDay: 2000,
      originalPrice: 2300,
      engine: "4.0L V8 Twin-Turbo",
      power: "600 HP",
      acceleration: "3.3s 0-100km/h",
      maxSpeed: "305 km/h",
      transmission: "8-Speed Automatic",
      seats: 5,
      doors: 4,
      features: [
        "All-Wheel Drive",
        "Adaptive Air Suspension",
        "Virtual Cockpit Plus",
        "Premium Interior",
      ],
      available: true,
      featured: false,
      rating: 4.6,
    },
    {
      id: 24,
      brand: "audi",
      name: "Audi SQ7",
      category: "Performance SUV",
      description:
        "The SQ7 offers seven-seat practicality with the performance and luxury expected from an Audi Sport model.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Faf28e84d3d25473595ef0c9d39485377",
      pricePerDay: 1800,
      originalPrice: 2100,
      engine: "4.0L V8 Twin-Turbo",
      power: "507 HP",
      acceleration: "4.1s 0-100km/h",
      maxSpeed: "250 km/h",
      transmission: "8-Speed Automatic",
      seats: 7,
      doors: 4,
      features: [
        "7-Seat Configuration",
        "Air Suspension",
        "All-Wheel Drive",
        "Virtual Cockpit",
      ],
      available: true,
      featured: false,
      rating: 4.5,
    },
    {
      id: 25,
      brand: "audi",
      name: "Audi RS6",
      category: "Performance Wagon",
      description:
        "The RS6 delivers supercar performance in a practical and stylish wagon body.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Fe1efccf5ae5a453eac8b791743b32a6b",
      pricePerDay: 1800,
      originalPrice: 2100,
      engine: "4.0L V8 Twin-Turbo",
      power: "600 HP",
      acceleration: "3.6s 0-100km/h",
      maxSpeed: "305 km/h",
      transmission: "8-Speed Automatic",
      seats: 5,
      doors: 4,
      features: [
        "All-Wheel Drive",
        "Sport Differential",
        "Adaptive Air Suspension",
        "RS Sport Exhaust",
      ],
      available: true,
      featured: false,
      rating: 4.6,
    },
    {
      id: 26,
      brand: "audi",
      name: "Audi RS5",
      category: "Performance Coupe",
      description:
        "The RS5 combines elegant coupe styling with powerful performance and Quattro all-wheel drive.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Fb3b2106e3c504b739de3c392daca4522",
      pricePerDay: 1500,
      originalPrice: 1800,
      engine: "2.9L V6 Twin-Turbo",
      power: "450 HP",
      acceleration: "3.8s 0-100km/h",
      maxSpeed: "280 km/h",
      transmission: "8-Speed Automatic",
      seats: 5,
      doors: 4,
      features: [
        "All-Wheel Drive",
        "Sport Differential",
        "Virtual Cockpit",
        "Premium Interior",
      ],
      available: true,
      featured: false,
      rating: 4.5,
    },
    {
      id: 27,
      brand: "audi",
      name: "Audi RS3",
      category: "Performance Sedan",
      description:
        "The RS3 packs incredible performance into a compact sedan with the legendary five-cylinder engine.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Faceaa4128bcd44e89f2f8f14ae42c4b9",
      pricePerDay: 1000,
      originalPrice: 1300,
      engine: "2.5L I5 Turbo",
      power: "400 HP",
      acceleration: "3.8s 0-100km/h",
      maxSpeed: "280 km/h",
      transmission: "7-Speed Dual Clutch",
      seats: 5,
      doors: 4,
      features: [
        "All-Wheel Drive",
        "Sport Exhaust",
        "Virtual Cockpit",
        "RS Sport Seats",
      ],
      available: true,
      featured: false,
      rating: 4.4,
    },

    // BMW Models
    {
      id: 28,
      brand: "bmw",
      name: "BMW X6 M Competition",
      category: "Performance SUV Coupe",
      description:
        "The X6 M Competition combines SUV practicality with coupe styling and M performance in stunning blue.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F14d884ca037948539838f3a36cec5113",
      pricePerDay: 1500,
      originalPrice: 1800,
      engine: "4.4L V8 Twin-Turbo",
      power: "625 HP",
      acceleration: "3.9s 0-100km/h",
      maxSpeed: "290 km/h",
      transmission: "8-Speed Automatic",
      seats: 4,
      doors: 4,
      features: [
        "M Competition Package",
        "All-Wheel Drive",
        "Active M Differential",
        "Premium Interior",
      ],
      available: true,
      featured: false,
      rating: 4.6,
    },

    {
      id: 30,
      brand: "bmw",
      name: "BMW M3 Competition",
      category: "Performance Sedan",
      description:
        "The M3 Competition combines everyday usability with extraordinary performance and precision.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F01fe652c0da444038ad6fa2ce69a02f4",
      pricePerDay: 1300,
      originalPrice: 1600,
      engine: "3.0L I6 Twin-Turbo",
      power: "510 HP",
      acceleration: "3.9s 0-100km/h",
      maxSpeed: "290 km/h",
      transmission: "8-Speed Automatic",
      seats: 5,
      doors: 4,
      features: [
        "M Competition Package",
        "Active M Differential",
        "M Sport Exhaust",
        "Premium Interior",
      ],
      available: true,
      featured: false,
      rating: 4.5,
    },
    {
      id: 31,
      brand: "bmw",
      name: "BMW 735i",
      category: "Luxury Sedan",
      description:
        "The 735i flagship sedan offers the perfect blend of luxury, comfort, and advanced technology.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Fb5683a5a11a04bf6ae47c927c23f793c",
      pricePerDay: 1500,
      originalPrice: 1800,
      engine: "3.0L I6 Turbo",
      power: "340 HP",
      acceleration: "6.7s 0-100km/h",
      maxSpeed: "250 km/h",
      transmission: "8-Speed Automatic",
      seats: 5,
      doors: 4,
      features: [
        "Executive Package",
        "Massage Seats",
        "Premium Sound System",
        "Advanced Driver Assistance",
      ],
      available: true,
      featured: false,
      rating: 4.4,
    },

    // Range Rover Models
    {
      id: 32,
      brand: "range-rover",
      name: "Range Rover Vogue HSE",
      category: "Luxury SUV",
      description:
        "The Range Rover Vogue HSE represents the pinnacle of luxury SUV design and capability.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Fc50c72b3c91b4e42bde3793a737aeef4",
      pricePerDay: 1800,
      originalPrice: 2100,
      engine: "3.0L V6 Supercharged",
      power: "400 HP",
      acceleration: "6.1s 0-100km/h",
      maxSpeed: "225 km/h",
      transmission: "8-Speed Automatic",
      seats: 5,
      doors: 4,
      features: [
        "Air Suspension",
        "Terrain Response",
        "Premium Interior",
        "Meridian Sound System",
      ],
      available: true,
      featured: false,
      rating: 4.5,
    },
    {
      id: 33,
      brand: "range-rover",
      name: "Range Rover SVR Orange",
      category: "Performance SUV",
      description:
        "The Range Rover SVR in striking orange combines luxury with supercharged performance.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F9495d037b0eb40b581f31641a1b58fa3",
      pricePerDay: 1400,
      originalPrice: 1700,
      engine: "5.0L V8 Supercharged",
      power: "575 HP",
      acceleration: "5.1s 0-100km/h",
      maxSpeed: "280 km/h",
      transmission: "8-Speed Automatic",
      seats: 5,
      doors: 4,
      features: [
        "SVR Performance Package",
        "Active Exhaust",
        "Brembo Brakes",
        "All-Terrain Capability",
      ],
      available: true,
      featured: false,
      rating: 4.6,
    },

    // Porsche Models
    {
      id: 34,
      brand: "porsche",
      name: "Porsche Macan Sports",
      category: "Performance SUV",
      description:
        "The Macan Sports delivers true Porsche DNA in a compact SUV package with exceptional handling.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2Faadbc80879f74da09a3613ba5e0acb3d",
      pricePerDay: 1000,
      originalPrice: 1300,
      engine: "2.9L V6 Twin-Turbo",
      power: "440 HP",
      acceleration: "4.8s 0-100km/h",
      maxSpeed: "270 km/h",
      transmission: "7-Speed PDK",
      seats: 5,
      doors: 4,
      features: [
        "Sport Suspension",
        "All-Wheel Drive",
        "Sport Exhaust",
        "Premium Interior",
      ],
      available: true,
      featured: false,
      rating: 4.4,
    },

    // Cadillac Models
    {
      id: 35,
      brand: "cadillac",
      name: "Cadillac Escalade Sports Platinum",
      category: "Luxury SUV",
      description:
        "The Escalade Sports Platinum offers American luxury at its finest with impressive performance and technology.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F9bcd5d27c02c48d1a70e87c1ddb83645%2F1dc36dad5cc74bd78a7c9a810efe3d82",
      pricePerDay: 1500,
      originalPrice: 1800,
      engine: "6.2L V8",
      power: "420 HP",
      acceleration: "6.1s 0-100km/h",
      maxSpeed: "210 km/h",
      transmission: "10-Speed Automatic",
      seats: 8,
      doors: 4,
      features: [
        "Platinum Package",
        "Magnetic Ride Control",
        "Premium Sound System",
        "Advanced Infotainment",
      ],
      available: true,
      featured: false,
      rating: 4.3,
    },
  ];

  const filteredCars =
    activeCarBrand === "all"
      ? luxuryCars
      : luxuryCars.filter((car) => car.brand === activeCarBrand);

  const services = [
    {
      icon: Shield,
      title: "Comprehensive Insurance",
      description:
        "Full coverage insurance included with every rental for complete peace of mind.",
    },
    {
      icon: Clock,
      title: "24/7 Customer Service",
      description:
        "Round-the-clock support for any assistance needed during your rental period.",
    },
    {
      icon: Navigation,
      title: "Free Delivery & Collection",
      description:
        "Complimentary vehicle delivery and collection anywhere in Dubai.",
    },
    {
      icon: Users,
      title: "Professional Chauffeur",
      description:
        "Experienced chauffeur services available for ultimate luxury experience.",
    },
    {
      icon: Settings,
      title: "Instant Vehicle Exchange",
      description:
        "Emergency vehicle replacement service available 24/7 if needed.",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      description:
        "Multiple payment methods including crypto, cards, and bank transfers.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al Maktoum",
      location: "Dubai, UAE",
      rating: 5,
      comment:
        "Exceptional service and an incredible fleet of supercars. The Lamborghini Huracán was delivered in pristine condition. Highly recommended!",
      avatar: "A",
      date: "December 2024",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      location: "London, UK",
      rating: 5,
      comment:
        "Amazing experience renting the McLaren 750S for my Dubai vacation. Professional staff and seamless process from start to finish.",
      avatar: "S",
      date: "November 2024",
    },
    {
      id: 3,
      name: "Roberto Silva",
      location: "São Paulo, Brazil",
      rating: 5,
      comment:
        "The Ferrari F8 Tributo exceeded all expectations. The sound, the performance, the luxury - everything was perfect for my business trip.",
      avatar: "R",
      date: "November 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="relative bg-gradient-to-r from-luxury-dark-950 via-black to-luxury-dark-950 text-white py-2 sm:py-3 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-400/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm">
              <motion.div
                className="group flex items-center space-x-1 bg-white/5 hover:bg-white/10 px-2 py-1 rounded-full transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -1 }}
              >
                <div className="p-1 bg-luxury-gold-500/20 rounded-full group-hover:bg-luxury-gold-500/30 transition-colors">
                  <Phone className="w-3 h-3 text-luxury-gold-400" />
                </div>
                <span className="font-medium group-hover:text-luxury-gold-400 transition-colors">
                  +971 50 123 4567
                </span>
              </motion.div>

              <motion.div
                className="group flex items-center space-x-1 bg-white/5 hover:bg-white/10 px-2 py-1 rounded-full transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -1 }}
              >
                <div className="p-1 bg-luxury-gold-500/20 rounded-full group-hover:bg-luxury-gold-500/30 transition-colors">
                  <Mail className="w-3 h-3 text-luxury-gold-400" />
                </div>
                <span className="hidden sm:inline font-medium group-hover:text-luxury-gold-400 transition-colors">
                  info@luxurysupercarsdubai.com
                </span>
                <span className="sm:hidden font-medium group-hover:text-luxury-gold-400 transition-colors">
                  Email
                </span>
              </motion.div>

              <motion.div
                className="hidden md:flex group items-center space-x-1 bg-white/5 hover:bg-white/10 px-2 py-1 rounded-full transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -1 }}
              >
                <div className="p-1 bg-luxury-gold-500/20 rounded-full group-hover:bg-luxury-gold-500/30 transition-colors">
                  <Globe className="w-3 h-3 text-luxury-gold-400" />
                </div>
                <span className="font-medium group-hover:text-luxury-gold-400 transition-colors">
                  Dubai Marina
                </span>
              </motion.div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center bg-white/5 rounded-full px-2 py-1">
                <motion.span
                  className="text-xs font-medium hover:text-luxury-gold-400 transition-colors cursor-pointer px-1"
                  whileHover={{ scale: 1.02 }}
                >
                  AR
                </motion.span>
                <span className="text-luxury-dark-400 text-xs mx-1">|</span>
                <motion.span
                  className="text-luxury-gold-400 font-semibold text-xs px-1"
                  whileHover={{ scale: 1.02 }}
                >
                  EN
                </motion.span>
              </div>

              <div className="flex items-center space-x-2">
                <motion.div
                  className="p-1.5 bg-white/10 hover:bg-blue-500/20 rounded-full transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <Facebook className="w-3 h-3 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </motion.div>
                <motion.div
                  className="p-1.5 bg-white/10 hover:bg-pink-500/20 rounded-full transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <Instagram className="w-3 h-3 text-gray-300 group-hover:text-pink-400 transition-colors" />
                </motion.div>
                <motion.div
                  className="p-1.5 bg-white/10 hover:bg-blue-400/20 rounded-full transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <Twitter className="w-3 h-3 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </motion.div>
                <motion.div
                  className="p-1.5 bg-white/10 hover:bg-red-500/20 rounded-full transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  <Youtube className="w-3 h-3 text-gray-300 group-hover:text-red-400 transition-colors" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <header className="relative bg-gradient-to-r from-white via-luxury-gold-50/30 to-white backdrop-blur-xl shadow-luxury border-b border-luxury-gold-200/30 sticky top-0 z-50 overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold-100/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-luxury-gold-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-luxury-gold-500/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 py-3 md:py-5 relative z-10">
          <div className="flex justify-between items-center min-w-0">
            <motion.div
              className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-luxury-gold-400 via-luxury-gold-500 to-luxury-gold-600 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <Car className="w-6 h-6 sm:w-9 sm:h-9 text-black font-bold group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="relative min-w-0 flex-shrink">
                <span className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-luxury-dark-900 via-luxury-dark-800 to-luxury-dark-900 bg-clip-text text-transparent tracking-tight whitespace-nowrap">
                  LUXURY SUPERCARS
                </span>
                <p className="text-xs sm:text-sm text-luxury-gold-600 font-semibold tracking-wide whitespace-nowrap">
                  Dubai Premium Rental
                </p>
                <div className="absolute -bottom-1 left-0 w-16 sm:w-20 h-0.5 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 rounded-full"></div>
              </div>
            </motion.div>

            <nav className="hidden lg:flex items-center space-x-2">
              <motion.a
                href="#home"
                className="relative px-4 py-2 text-luxury-dark-700 hover:text-luxury-gold-600 font-semibold transition-all duration-300 rounded-xl hover:bg-luxury-gold-50/50 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.a>
              <motion.a
                href="#fleet"
                className="relative px-4 py-2 text-luxury-dark-700 hover:text-luxury-gold-600 font-semibold transition-all duration-300 rounded-xl hover:bg-luxury-gold-50/50 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Our Fleet</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.a>

              <div className="relative group">
                <motion.button
                  className="relative px-4 py-2 text-luxury-dark-700 hover:text-luxury-gold-600 font-semibold transition-all duration-300 rounded-xl hover:bg-luxury-gold-50/50 flex items-center space-x-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Car Types</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </motion.button>
                <div className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-luxury-gold-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  <div className="py-3">
                    <a
                      href="#sports"
                      className="block px-6 py-3 text-sm hover:bg-luxury-gold-50 hover:text-luxury-gold-600 transition-colors"
                    >
                      Sports Cars
                    </a>
                    <a
                      href="#luxury"
                      className="block px-6 py-3 text-sm hover:bg-luxury-gold-50 hover:text-luxury-gold-600 transition-colors"
                    >
                      Luxury Cars
                    </a>
                    <a
                      href="#convertible"
                      className="block px-6 py-3 text-sm hover:bg-luxury-gold-50 hover:text-luxury-gold-600 transition-colors"
                    >
                      Convertibles
                    </a>
                    <a
                      href="#electric"
                      className="block px-6 py-3 text-sm hover:bg-luxury-gold-50 hover:text-luxury-gold-600 transition-colors"
                    >
                      Electric Cars
                    </a>
                    <a
                      href="#suv"
                      className="block px-6 py-3 text-sm hover:bg-luxury-gold-50 hover:text-luxury-gold-600 transition-colors"
                    >
                      Luxury SUVs
                    </a>
                  </div>
                </div>
              </div>
              <motion.a
                href="#services"
                className="relative px-4 py-2 text-luxury-dark-700 hover:text-luxury-gold-600 font-semibold transition-all duration-300 rounded-xl hover:bg-luxury-gold-50/50 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Services</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.a>
              <motion.a
                href="#about"
                className="relative px-4 py-2 text-luxury-dark-700 hover:text-luxury-gold-600 font-semibold transition-all duration-300 rounded-xl hover:bg-luxury-gold-50/50 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">About Us</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.a>
              <motion.a
                href="#contact"
                className="relative px-4 py-2 text-luxury-dark-700 hover:text-luxury-gold-600 font-semibold transition-all duration-300 rounded-xl hover:bg-luxury-gold-50/50 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.a>
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              <div className="hidden lg:flex items-center space-x-2 bg-luxury-gold-50/50 px-3 py-2 rounded-xl">
                <Shield className="w-4 h-4 text-luxury-gold-600" />
                <span className="text-sm font-semibold text-luxury-dark-700 whitespace-nowrap">
                  Licensed & Insured
                </span>
              </div>
              <motion.button
                className="bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open("https://t.me/luxurysupercarsdubai", "_blank")
                }
              >
                <MessageCircle className="w-4 h-4 inline mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Telegram</span>
                <span className="sm:hidden">TG</span>
              </motion.button>

              <button
                className="lg:hidden text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-luxury-dark-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#home"
                className="block text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#fleet"
                className="block text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors"
              >
                Our Fleet
              </a>
              <a
                href="#services"
                className="block text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block text-luxury-dark-700 hover:text-luxury-gold-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/17632041/pexels-photo-17632041.jpeg"
            alt="Luxury Lamborghini Supercar"
            className="w-full h-full object-cover scale-110 transition-transform duration-20000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-luxury-dark-900/70 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        {/* Trust Indicators */}
        <div className="absolute top-32 right-8 z-20 hidden xl:flex flex-col space-y-6">
          <motion.div
            className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-luxury-gold-400/20 rounded-full">
                <Star className="w-6 h-6 text-luxury-gold-400 fill-current" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">
                4.9
              </span>
            </div>
            <p className="text-gray-300 text-sm font-medium">Customer Rating</p>
            <p className="text-gray-400 text-xs">2,450+ Reviews</p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-luxury-gold-400/20 rounded-full">
                <Shield className="w-6 h-6 text-luxury-gold-400" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Licensed
              </span>
            </div>
            <p className="text-gray-300 text-sm">& Insured</p>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-luxury-gold-500/20 border border-luxury-gold-500/30 text-luxury-gold-400 px-4 py-2 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Award className="w-4 h-4" />
              <span>Dubai's #1 Luxury Supercar Rental Since 2018</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Premium
              <br />
              <span className="bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 bg-clip-text text-transparent">
                Supercar Rental
              </span>
              <br />
              Dubai
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Experience the ultimate luxury with Dubai's most exclusive fleet
              of supercars. From Lamborghini to Bugatti, we deliver
              extraordinary driving experiences.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold-400 mb-1">
                  50+
                </div>
                <div className="text-gray-300 text-sm">Supercars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold-400 mb-1">
                  1000+
                </div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold-400 mb-1">
                  24/7
                </div>
                <div className="text-gray-300 text-sm">Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold-400 mb-1">
                  6+
                </div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button
                className="group bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-2xl flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Car className="w-5 h-5" />
                <span>Browse Our Fleet</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="group border-2 border-white/30 hover:border-luxury-gold-400 text-white hover:text-luxury-gold-400 px-8 py-4 rounded-xl text-lg font-bold transition-all backdrop-blur-sm flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </motion.button>
            </motion.div>

            {/* Price Info */}
            <motion.div
              className="mt-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <p className="text-sm">
                Starting from{" "}
                <span className="text-luxury-gold-400 font-bold text-lg">
                  AED 1,000
                </span>{" "}
                per day
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search & Booking Form */}
      <section className="bg-gradient-to-b from-luxury-dark-50 to-white py-12 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 border border-luxury-dark-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-luxury-dark-900 mb-6 text-center">
              Book Your Dream Supercar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="relative">
                <label className="block text-sm font-semibold text-luxury-dark-700 mb-3">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-gold-600 z-10 pointer-events-none" />
                  <select
                    className="w-full pl-12 pr-4 py-4 border-2 border-luxury-dark-200 rounded-xl focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 transition-all font-medium bg-white appearance-none"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <option>Dubai Marina</option>
                    <option>Downtown Dubai</option>
                    <option>Dubai International Airport</option>
                    <option>Al Maktoum International Airport</option>
                    <option>Palm Jumeirah</option>
                    <option>Business Bay</option>
                    <option>Jumeirah Beach Residence</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-luxury-dark-700 mb-3">
                  Pickup Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-gold-600 z-10 pointer-events-none" />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-4 border-2 border-luxury-dark-200 rounded-xl focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 transition-all font-medium relative z-0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-luxury-dark-700 mb-3">
                  Pickup Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-gold-600 z-10 pointer-events-none" />
                  <input
                    type="time"
                    className="w-full pl-12 pr-4 py-4 border-2 border-luxury-dark-200 rounded-xl focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 transition-all font-medium relative z-0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-luxury-dark-700 mb-3">
                  Return Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-gold-600 z-10 pointer-events-none" />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-4 border-2 border-luxury-dark-200 rounded-xl focus:ring-2 focus:ring-luxury-gold-500 focus:border-luxury-gold-500 transition-all font-medium relative z-0"
                  />
                </div>
              </div>

              <div className="flex items-end">
                <motion.button
                  className="w-full bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const fleetSection = document.getElementById("fleet");
                    fleetSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Search className="w-5 h-5" />
                  <span>Search Fleet</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Metrics Block */}
      <section className="py-8 bg-white border-b border-luxury-dark-100">
        <div className="container mx-auto px-4" />
      </section>

      {/* Car Brands Filter */}
      <section className="py-8 bg-luxury-dark-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-luxury-dark-900 mb-4">
              Browse by Brand
            </h3>
            <p className="text-luxury-dark-600">
              Choose from the world's most prestigious automotive brands
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {carBrands.map((brand) => (
              <motion.button
                key={brand.id}
                onClick={() => setActiveCarBrand(brand.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCarBrand === brand.id
                    ? "bg-luxury-gold-500 text-black shadow-lg"
                    : "bg-white text-luxury-dark-700 hover:bg-luxury-gold-50 hover:text-luxury-gold-600 border border-luxury-dark-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {brand.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section id="fleet" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-luxury-dark-900 mb-6">
              Our Exclusive{" "}
              <span className="bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 bg-clip-text text-transparent">
                Fleet
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-luxury-dark-600 max-w-4xl mx-auto leading-relaxed">
              Discover Dubai's most exclusive collection of supercars and luxury
              vehicles. Each car is meticulously maintained and ready to deliver
              the ultimate driving experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-luxury-dark-100 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {car.featured && (
                      <div className="bg-luxury-gold-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        car.available
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {car.available ? "Available" : "Reserved"}
                    </div>
                  </div>

                  {/* Heart Icon */}
                  <motion.button
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5 text-luxury-dark-600 hover:text-red-400 transition-colors" />
                  </motion.button>

                  {/* Brand Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                    <span className="text-sm font-bold text-white capitalize">
                      {car.brand.replace("-", " ")}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-luxury-dark-900 mb-1">
                        {car.name}
                      </h3>
                      <p className="text-luxury-gold-600 font-semibold text-sm">
                        {car.category}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(car.rating)
                              ? "text-luxury-gold-500 fill-current"
                              : "text-luxury-dark-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-luxury-dark-600 ml-1">
                        ({car.rating})
                      </span>
                    </div>
                  </div>

                  <p className="text-luxury-dark-600 text-sm mb-4 leading-relaxed">
                    {car.description}
                  </p>

                  {/* Car Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-luxury-gold-600" />
                      <span className="text-sm font-medium text-luxury-dark-700">
                        {car.power}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Gauge className="w-4 h-4 text-luxury-gold-600" />
                      <span className="text-sm font-medium text-luxury-dark-700">
                        {car.acceleration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-luxury-gold-600" />
                      <span className="text-sm font-medium text-luxury-dark-700">
                        {car.seats} Seats
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-luxury-gold-600" />
                      <span className="text-sm font-medium text-luxury-dark-700">
                        {car.transmission}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold bg-gradient-to-r from-luxury-gold-500 to-luxury-gold-700 bg-clip-text text-transparent">
                          AED {car.pricePerDay.toLocaleString()}
                        </span>
                        <span className="text-lg font-medium text-luxury-dark-500">
                          /day
                        </span>
                      </div>
                      <div className="text-sm text-luxury-dark-400 line-through">
                        AED {car.originalPrice.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-green-100 to-green-50 text-green-700 px-3 py-2 rounded-full text-xs font-bold border border-green-200">
                        Save AED {car.originalPrice - car.pricePerDay}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={!car.available}
                      onClick={() =>
                        window.open(
                          `https://t.me/luxurysupercarsdubai?text=I'm interested in booking the ${car.name}`,
                          "_blank",
                        )
                      }
                    >
                      {car.available ? "Book Now" : "Notify When Available"}
                    </motion.button>
                    <motion.button
                      className="px-6 py-3 border-2 border-luxury-dark-200 hover:border-luxury-gold-500 text-luxury-dark-700 hover:text-luxury-gold-600 rounded-xl transition-all backdrop-blur-sm flex items-center space-x-2"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedCar(car);
                        setShowCarModal(true);
                      }}
                    >
                      <span>Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center space-x-3 mx-auto"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Complete Fleet</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-luxury-dark-50 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-dark-900 mb-6">
              Premium Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-luxury-dark-600 max-w-3xl mx-auto">
              Experience unparalleled luxury with our comprehensive range of
              premium services designed for the discerning clientele.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-luxury-dark-100 hover:border-luxury-gold-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-luxury-gold-400 to-luxury-gold-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-10 h-10 text-black" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-luxury-dark-900 mb-4 group-hover:text-luxury-gold-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-luxury-dark-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-luxury-dark-900 mb-6">
                About Luxury Supercars Dubai
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 mb-6 rounded-full"></div>
              <p className="text-lg text-luxury-dark-600 mb-6 leading-relaxed">
                Since 2018, Luxury Supercars Dubai has been the premier
                destination for exotic and luxury car rentals in the UAE. We
                specialize in providing high-end, meticulously maintained
                supercars to discerning customers who demand nothing but the
                finest automotive excellence.
              </p>
              <p className="text-lg text-luxury-dark-600 mb-8 leading-relaxed">
                Our exclusive fleet features the latest models from prestigious
                brands including Lamborghini, Ferrari, McLaren, Bugatti, and
                more. Each vehicle undergoes rigorous inspection and maintenance
                to ensure peak performance and absolute safety.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <motion.div
                  className="bg-gradient-to-br from-luxury-gold-50 to-luxury-gold-100 rounded-2xl p-6 text-center border border-luxury-gold-200"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-luxury-gold-600 to-luxury-gold-700 bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-sm font-semibold text-luxury-dark-700">
                    Luxury Vehicles
                  </div>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-luxury-gold-50 to-luxury-gold-100 rounded-2xl p-6 text-center border border-luxury-gold-200"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-luxury-gold-600 to-luxury-gold-700 bg-clip-text text-transparent mb-2">
                    1000+
                  </div>
                  <div className="text-sm font-semibold text-luxury-dark-700">
                    Satisfied Customers
                  </div>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-luxury-gold-50 to-luxury-gold-100 rounded-2xl p-6 text-center border border-luxury-gold-200"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-luxury-gold-600 to-luxury-gold-700 bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-sm font-semibold text-luxury-dark-700">
                    Customer Support
                  </div>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-luxury-gold-50 to-luxury-gold-100 rounded-2xl p-6 text-center border border-luxury-gold-200"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-luxury-gold-600 to-luxury-gold-700 bg-clip-text text-transparent mb-2">
                    6+
                  </div>
                  <div className="text-sm font-semibold text-luxury-dark-700">
                    Years Experience
                  </div>
                </motion.div>
              </div>
              <motion.button
                className="group bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/17632041/pexels-photo-17632041.jpeg"
                alt="Luxury Supercar Collection"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Unmatched Excellence
                </h3>
                <p className="text-sm opacity-90">
                  Every vehicle in our fleet represents the pinnacle of
                  automotive engineering
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-luxury-dark-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-dark-900 mb-6">
              What Our Clients Say
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-luxury-dark-600 max-w-3xl mx-auto">
              Hear from our satisfied customers about their extraordinary
              experiences with our luxury supercar collection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-luxury-dark-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-10 h-10 text-luxury-gold-400" />
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-luxury-gold-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-luxury-dark-600 leading-relaxed mb-8 italic text-lg">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold-400 to-luxury-gold-600 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-luxury-dark-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-luxury-dark-600 font-medium">
                        {testimonial.location}
                      </p>
                      <p className="text-xs text-luxury-dark-500 mt-1">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-luxury-dark-900 via-black to-luxury-dark-950 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-400/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-luxury-gold-500/20 border border-luxury-gold-500/30 text-luxury-gold-400 px-6 py-3 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Zap className="w-4 h-4" />
              <span>Book Now & Get Instant Confirmation</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Ready for the
              <br />
              <span className="bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 bg-clip-text text-transparent">
                Ultimate Drive?
              </span>
            </h2>

            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Contact us now to book your dream supercar and experience the
              pinnacle of automotive luxury in Dubai.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <motion.button
                className="group bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open("https://t.me/luxurysupercarsdubai", "_blank")
                }
              >
                <MessageCircle className="w-6 h-6" />
                <span>Telegram: @luxurysupercarsdubai</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="group bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open("https://t.me/luxurysupercarsdubai", "_blank")
                }
              >
                <MessageCircle className="w-6 h-6" />
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="flex flex-col items-center space-y-2"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-luxury-gold-500/20 rounded-full">
                  <CheckCircle className="w-6 h-6 text-luxury-gold-400" />
                </div>
                <span className="font-semibold">
                  Instant Booking Confirmation
                </span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center space-y-2"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-luxury-gold-500/20 rounded-full">
                  <Shield className="w-6 h-6 text-luxury-gold-400" />
                </div>
                <span className="font-semibold">Fully Insured & Licensed</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center space-y-2"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-luxury-gold-500/20 rounded-full">
                  <ThumbsUp className="w-6 h-6 text-luxury-gold-400" />
                </div>
                <span className="font-semibold">Best Prices Guaranteed</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-luxury-dark-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-luxury-gold-400 to-luxury-gold-600 rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-black font-bold" />
                </div>
                <span className="text-xl font-bold">LUXURY SUPERCARS</span>
              </div>
              <p className="text-luxury-dark-400 mb-6 leading-relaxed">
                Dubai's premier luxury supercar rental service. Experience the
                ultimate in automotive excellence with our exclusive fleet of
                supercars.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 hover:text-blue-400 transition-colors cursor-pointer" />
                <Instagram className="w-5 h-5 hover:text-pink-400 transition-colors cursor-pointer" />
                <Twitter className="w-5 h-5 hover:text-blue-400 transition-colors cursor-pointer" />
                <Youtube className="w-5 h-5 hover:text-red-400 transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-luxury-dark-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#fleet"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Car Categories */}
            <div>
              <h3 className="text-lg font-bold mb-6">Car Categories</h3>
              <ul className="space-y-3 text-luxury-dark-400">
                <li>
                  <a
                    href="#sports"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Sports Cars
                  </a>
                </li>
                <li>
                  <a
                    href="#luxury"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Luxury Cars
                  </a>
                </li>
                <li>
                  <a
                    href="#convertible"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Convertibles
                  </a>
                </li>
                <li>
                  <a
                    href="#electric"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Electric Cars
                  </a>
                </li>
                <li>
                  <a
                    href="#suv"
                    className="hover:text-luxury-gold-400 transition-colors"
                  >
                    Luxury SUVs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <div className="space-y-4 text-luxury-dark-400">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-luxury-gold-400" />
                  <span>+971 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-luxury-gold-400" />
                  <span>info@luxurysupercarsdubai.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-luxury-gold-400" />
                  <span>Dubai Marina, Dubai, UAE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-luxury-gold-400" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-luxury-dark-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-luxury-dark-400 text-sm mb-4 md:mb-0">
              © 2024 Luxury Supercars Dubai. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-luxury-dark-400">
              <a
                href="#"
                className="hover:text-luxury-gold-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-luxury-gold-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-luxury-gold-400 transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="hover:text-luxury-gold-400 transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Car Details Modal */}
      {showCarModal && selectedCar && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setShowCarModal(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-xl px-4 py-2">
                <span className="text-white font-bold text-lg">
                  {selectedCar.name}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Details */}
                <div>
                  <h2 className="text-3xl font-bold text-luxury-dark-900 mb-4">
                    {selectedCar.name}
                  </h2>
                  <p className="text-luxury-gold-600 font-semibold text-lg mb-4">
                    {selectedCar.category}
                  </p>
                  <p className="text-luxury-dark-600 text-lg leading-relaxed mb-6">
                    {selectedCar.description}
                  </p>

                  {/* Pricing */}
                  <div className="bg-luxury-gold-50 rounded-2xl p-6 mb-6">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-4xl font-bold bg-gradient-to-r from-luxury-gold-600 to-luxury-gold-700 bg-clip-text text-transparent">
                        AED {selectedCar.pricePerDay.toLocaleString()}
                      </span>
                      <span className="text-lg text-luxury-dark-600">/day</span>
                    </div>
                    {selectedCar.originalPrice && (
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-luxury-dark-400 line-through">
                          AED {selectedCar.originalPrice.toLocaleString()}
                        </span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">
                          Save AED{" "}
                          {selectedCar.originalPrice - selectedCar.pricePerDay}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-luxury-dark-900 mb-4">
                      Features
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedCar.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-5 h-5 text-luxury-gold-600" />
                          <span className="text-luxury-dark-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Specifications */}
                <div>
                  <h3 className="text-xl font-bold text-luxury-dark-900 mb-6">
                    Specifications
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-luxury-dark-100">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-5 h-5 text-luxury-gold-600" />
                        <span className="font-medium text-luxury-dark-700">
                          Engine
                        </span>
                      </div>
                      <span className="text-luxury-dark-900 font-semibold">
                        {selectedCar.engine}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-luxury-dark-100">
                      <div className="flex items-center space-x-2">
                        <Gauge className="w-5 h-5 text-luxury-gold-600" />
                        <span className="font-medium text-luxury-dark-700">
                          Power
                        </span>
                      </div>
                      <span className="text-luxury-dark-900 font-semibold">
                        {selectedCar.power}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-luxury-dark-100">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-5 h-5 text-luxury-gold-600" />
                        <span className="font-medium text-luxury-dark-700">
                          Acceleration
                        </span>
                      </div>
                      <span className="text-luxury-dark-900 font-semibold">
                        {selectedCar.acceleration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-luxury-dark-100">
                      <div className="flex items-center space-x-2">
                        <Gauge className="w-5 h-5 text-luxury-gold-600" />
                        <span className="font-medium text-luxury-dark-700">
                          Max Speed
                        </span>
                      </div>
                      <span className="text-luxury-dark-900 font-semibold">
                        {selectedCar.maxSpeed}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-luxury-dark-100">
                      <div className="flex items-center space-x-2">
                        <Settings className="w-5 h-5 text-luxury-gold-600" />
                        <span className="font-medium text-luxury-dark-700">
                          Transmission
                        </span>
                      </div>
                      <span className="text-luxury-dark-900 font-semibold">
                        {selectedCar.transmission}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-luxury-dark-100">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-luxury-gold-600" />
                        <span className="font-medium text-luxury-dark-700">
                          Seats
                        </span>
                      </div>
                      <span className="text-luxury-dark-900 font-semibold">
                        {selectedCar.seats}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center space-x-2">
                        <Car className="w-5 h-5 text-luxury-gold-600" />
                        <span className="font-medium text-luxury-dark-700">
                          Doors
                        </span>
                      </div>
                      <span className="text-luxury-dark-900 font-semibold">
                        {selectedCar.doors}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 space-y-4">
                    <motion.button
                      className="w-full bg-gradient-to-r from-luxury-gold-400 to-luxury-gold-600 hover:from-luxury-gold-500 hover:to-luxury-gold-700 text-black font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        window.open(
                          `https://t.me/luxurysupercarsdubai?text=I'm interested in booking the ${selectedCar.name}`,
                          "_blank",
                        );
                        setShowCarModal(false);
                      }}
                    >
                      Book This Car Now
                    </motion.button>
                    <motion.button
                      className="w-full border-2 border-luxury-dark-200 hover:border-luxury-gold-500 text-luxury-dark-700 hover:text-luxury-gold-600 font-semibold py-4 rounded-xl transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowCarModal(false)}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Index;
