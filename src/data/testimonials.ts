export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dnyanesh Kale",
    role: "Founder",
    company: "Kisanians.pvt.ltd",
    content: "Pixelux completely transformed our brand identity. Their attention to detail and creative approach exceeded our expectations. The team was professional, responsive, and delivered on time.",
    avatar: "https://www.kisanians.com/content/img/din.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "Artisan Cafe",
    content: "Working with Pixelux was a game-changer for our small business. Their logo and packaging designs perfectly captured our brand essence, and we've seen a significant increase in customer engagement.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Event Coordinator",
    company: "Urban Events",
    content: "The promotional materials Pixelux created for our annual festival were absolutely stunning. Their team took our vague ideas and turned them into a cohesive visual identity that attendees are still talking about.",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];