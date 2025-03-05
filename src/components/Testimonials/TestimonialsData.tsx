import { Testimonial } from "@/types/testimonial";

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "CTO at TechVision",
    content:
      "Working with this team transformed our digital presence. Their technical expertise and strategic approach delivered results that exceeded our expectations. Highly recommended for any business looking to innovate.",
    image: "/images/testimonials/testimonial-01.jpg",
    star: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "Founder at GrowthLabs",
    content:
      "The team's ability to understand our business needs and translate them into effective technical solutions was impressive. They delivered on time and provided exceptional support throughout the process.",
    image: "/images/testimonials/testimonial-02.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "Amara Patel",
    designation: "Director at InnovateX",
    content:
      "Their data analytics solutions gave us insights we never had before. The dashboard they built is now an essential part of our decision-making process. The ROI has been remarkable.",
    image: "/images/testimonials/testimonial-03.jpg",
    star: 5,
  },
];

export default testimonialsData;
