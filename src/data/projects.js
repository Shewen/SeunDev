import anibSolesImage from "../assets/anib-soles.PNG";
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
]

export default projects