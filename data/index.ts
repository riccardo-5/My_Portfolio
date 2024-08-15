export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for sound engineering.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently mastering an entire album",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName:
      "absolute bottom-0 right-0 object-cover object-center w-full h-full",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Visit my sound engineering website",
    des: "Explore all the audio services I offer :)",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://ric-elect.bss.design",
  },
  {
    id: 2,
    title: "Visit my recreation of the Tesla website",
    des: "In this project I've recreated a fully responsive tesla website using bootstrap library.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://riccardo-5.github.io/Tesla-website",
  },
  {
    id: 3,
    title: "Visit my recreation of the Revolut Website",
    des: "In this project I've recreated a responsive mobile-first Revolut design full of interactions.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://riccardo-5.github.io/Revolut-website",
  },
  {
    id: 4,
    title: "Visit my recreation of the Iphone 15 3D Website",
    des: "In this project I've recreated the Apple's iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://iphone-15-navy.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Riccardo was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Riccardo's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Riccardo is the ideal partner.",
    name: "Michael",
    title: "Reseller",
    img: "/profile1.svg",
  },
  {
    quote:
      "I had the pleasure of working with Riccardo on my latest album, and I couldn't be happier with the results. His mix and master services are top-notch. The clarity, balance, and punch he brought to my tracks made them stand out like never before. I highly recommend his services to any musician looking to take their sound to the next level.",
    name: "Alex",
    title: "Independent Artist",
    img: "/profile2.png",
  },
  {
    quote:
      "Riccardo is an absolute wizard when it comes to web development. I needed a complete overhaul of my e-commerce site, and he delivered beyond my expectations. The new design is sleek, responsive, and user-friendly. He was also incredibly responsive to feedback and made sure every detail was perfect. If you're looking for someone who can bring your vision to life online, Riccardo is your guy.",
    name: "Sam",
    title: "Financial advisor",
    img: "/profile3.png",
  },
  {
    quote:
      "As an independent artist, having both top-tier sound and a strong online presence is crucial. Riccardo provided me with both, and the results are incredible. Not only did he mix and master my EP to perfection, but he also developed a stunning website that showcases my music and connects with my audience. I couldn't have asked for a better partner in my creative journey.",
    name: "Joy",
    title: "Singer-Songwriter",
    img: "/profile4.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Sound Engineer",
    desc: "Mixed & Mastered an entire album using industry-leading software",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/riccardo-5",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/riccardo-tosin/",
  },
];
