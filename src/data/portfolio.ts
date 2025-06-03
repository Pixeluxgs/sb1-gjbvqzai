export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Evergreen Cosmetics Branding",
    category: "Branding",
    description: "Complete brand identity design for a natural cosmetics company.",
    imageUrl: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Urban Beats Festival Poster",
    category: "Flex Design",
    description: "Eye-catching promotional materials for a music festival.",
    imageUrl: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Sunset Café Logo Design",
    category: "Logo Design",
    description: "Minimalist yet memorable logo for a beachside café.",
    imageUrl: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Tech Summit Social Media Campaign",
    category: "Social Media",
    description: "Cohesive social media graphics for a tech conference.",
    imageUrl: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "Eco Packaging Design",
    category: "Packaging",
    description: "Sustainable packaging solution for an organic food brand.",
    imageUrl: "https://images.pexels.com/photos/7262897/pexels-photo-7262897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Corporate Identity Package",
    category: "Branding",
    description: "Complete stationery and brand guidelines for a financial firm.",
    imageUrl: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];