
import anibSolesImage from "../assets/anib-soles.PNG";
import dammyIctImage from "../assets/dammyict.PNG";

const projects = [
  {
    id: 'anib-soles',
    title: 'Anib Soles',
    category: 'E-commerce',
    subtitle: 'Premium fashion e-commerce experience.',
    description:
      'A modern fashion storefront designed to help customers discover shoes and bags through a responsive and intuitive shopping experience.',

    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'React Router',
      'Vite',
    ],

    features: [
      'Responsive navigation and mobile menu',
      'Product category browsing',
      'Product filtering',
      'Detailed product pages',
      'Interactive image gallery',
      'Shopping cart functionality',
      'Responsive design across devices',
      'Reusable React components',
    ],

    challenge:
      'Create a shopping experience that feels premium, organized, and easy to use across desktop and mobile devices.',

    solution:
      'Built a component-based React storefront with structured product data, client-side routing, responsive layouts, and interactive shopping features.',

    development:
      'The application was structured around reusable components so navigation, product cards, categories, and product details could be maintained independently.',

    result:
      'A complete frontend e-commerce experience that demonstrates the ability to turn a business idea into a responsive React application.',

    liveUrl: 'https://anibsoles.netlify.app/',
    githubUrl: 'https://github.com/Shewen/anib-soles',

    image: anibSolesImage,
  },

  {
    id: 'dammy-ict-ventures',
    title: 'Dammy ICT Ventures',
    category: 'Education & ICT',
    subtitle: 'Modern education and ICT services website.',
    description:
      'A responsive business website designed for an education and ICT services company, making it easier for visitors to understand available services, explore how the business works, and get in touch.',

    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'React Router',
      'Vite',
    ],

    features: [
      'Responsive navigation',
      'Education and ICT service presentation',
      'How It Works section',
      'WhatsApp contact integration',
      'Contact section',
      'Responsive hero section',
      'Mobile-friendly design',
      'Reusable React components',
    ],

    challenge:
      'Create a professional digital presence that clearly communicates the company’s education and ICT services while making it easy for potential customers to take action.',

    solution:
      'Built a modern React website with a strong visual hierarchy, responsive layouts, clear service sections, and direct communication through WhatsApp and contact options.',

    development:
      'The website was developed using reusable React components and responsive Tailwind CSS layouts to provide a consistent experience across desktop and mobile devices.',

    result:
      'A professional education and ICT services website that gives the business a stronger online presence and provides visitors with a clear path to learn about services and make contact.',

    liveUrl: 'https://dammyictventures.netlify.app/',

    image: dammyIctImage,
  },
]

export default projects

