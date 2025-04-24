export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  image: string;
  farmer: string;
  location: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Basmati Rice",
    category: "Grains",
    price: 85,
    unit: "kg",
    description: "High-quality aromatic basmati rice, perfect for biryanis and pulao",
    image: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    farmer: "Ranjit Singh",
    location: "Punjab"
  },
  {
    id: 2,
    name: "Organic Wheat",
    category: "Grains",
    price: 32,
    unit: "kg",
    description: "Pesticide-free organic wheat for healthier chapatis and bread",
    image: "https://images.pexels.com/photos/1838597/pexels-photo-1838597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    farmer: "Lakshmi Devi",
    location: "Haryana"
  },
  {
    id: 3,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 40,
    unit: "kg",
    description: "Ripe, juicy tomatoes harvested at peak freshness",
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    farmer: "Arun Kumar",
    location: "Karnataka"
  },
  {
    id: 4,
    name: "Green Chillies",
    category: "Vegetables",
    price: 60,
    unit: "kg",
    description: "Spicy green chillies, essential for Indian cooking",
    image: "https://images.pexels.com/photos/11923174/pexels-photo-11923174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    farmer: "Meena Patel",
    location: "Gujarat"
  },
  {
    id: 5,
    name: "Alphonso Mangoes",
    category: "Fruits",
    price: 350,
    unit: "dozen",
    description: "Sweet and aromatic Alphonso mangoes, the king of fruits",
    image: "https://images.pexels.com/photos/6157050/pexels-photo-6157050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    farmer: "Sanjay Desai",
    location: "Maharashtra"
  },
  {
    id: 6,
    name: "Organic Turmeric",
    category: "Spices",
    price: 180,
    unit: "kg",
    description: "High-curcumin organic turmeric powder for cooking and health benefits",
    image: "https://images.pexels.com/photos/4198714/pexels-photo-4198714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    farmer: "Ramesh Iyer",
    location: "Tamil Nadu"
  },
  {
    id: 7,
    name: "Fresh Potatoes",
    category: "Vegetables",
    price: 25,
    unit: "kg",
    description: "Fresh, clean potatoes suitable for all kinds of dishes",
    image: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    farmer: "Vijay Sharma",
    location: "Uttar Pradesh"
  },
  {
    id: 8,
    name: "Organic Mustard Seeds",
    category: "Spices",
    price: 120,
    unit: "kg",
    description: "High-quality mustard seeds for cooking and pickling",
    image: "https://images.pexels.com/photos/4198745/pexels-photo-4198745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    farmer: "Anita Roy",
    location: "West Bengal"
  }
];

export const categories = ["All", "Grains", "Vegetables", "Fruits", "Spices"];