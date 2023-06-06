import MF from "./assets/MF.png";
import ZB from "./assets/ZB.png";
import JC from "./assets/JC.png";

const logotext = "Javier Hernandez";
const meta = {
  title: "JAV-STACK",
  description:
    "I’m Javier Hernandez Full stack devloper, ready to work with you",
};

const introdata = {
  title: "While (true):",
  animated: {
    first: "LEARN",
    second: "CODE",
    third: "ENJOY",
  },
  description:
    "Throughout my diverse and enriching professional journey, I have consistently evolved to become a passionate full stack developer. My commitment is now entirely focused on leveraging my skills in front-end and back-end technologies to build intuitive, efficient, and impactful software solutions. I am driven by an insatiable desire to grow and bring remarkable projects to life.",
  your_img_url:
    "./assets/photo_5999151787694733785_w_topaz_denoise_enhance_faceai_sharpen.jpeg",
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "Mi trayectoria profesional ha sido diversa y enriquecedora. Comencé mi carrera como Jefe de Cocina, donde aprendí a manejar el arte de gestionar equipos. Posteriormente, exploré el mundo del sonido como técnico en una radio local, afinando mi oído para crear experiencias auditivas cautivadoras. Luego, tuve el privilegio de trabajar como técnico de luces para reconocidos artistas como Peta Zeta, Julieta Venegas y más tarde como Operador de Cámara para Mclan, Estopa y los Mojinos. Sin embargo, fue a través de mi formación en Reboot Academy donde descubrí mi verdadera pasión: la programación. En este campo fascinante, encontré la perfecta amalgama entre creatividad y lógica, donde cada línea de código se convierte en una herramienta poderosa para dar vida a soluciones innovadoras. Ahora, mi compromiso es dedicar todo mi tiempo y energía a perfeccionar mi oficio como programador, impulsado por el deseo de seguir creciendo y materializando proyectos sorprendentes",
};
const worktimeline = [
  {
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
  },
  {
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
  },
  {
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
  },
];

const skills = [
  {
    name: "Python",
    value: 90,
  },
  {
    name: "Djano",
    value: 85,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "React",
    value: 60,
  },
  {
    name: "Jquery",
    value: 85,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Wordpress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: MF,
    description: "MediaFast (FRONT-END)",
    link1: "https://mediafast.netlify.app",
    link2: "https://github.com/Arguish/Media-Fast-Front",
    tech: ["React", "MaterialUI"],
  },
  {
    img: MF,
    description: "MediaFast (BACK-END)",
    link1: "https://mediafast.netlify.app",
    link2: "https://github.com/Arguish/Media-Fast-app",
    tech: ["NodeJS", "Sequelize", "MySQL"],
  },
  {
    img: ZB,
    description: "Zombie Game",
    link1: "https://arguish.github.io/Zombi0.1/",
    link2: "https://github.com/Arguish/Zombi0.1",
    tech: ["JavaScrypt", "HTML", "CSS", "Vanilla"],
  },
  {
    img: JC,
    description: "Componentes Experimentales",
    link1: "https://javcomponents.netlify.app/",
    link2: "https://github.com/Arguish/React-Component-Workbench",
    tech: ["Tailwind", "React", "FramerMotion"],
  },
];

const contactConfig = {
  YOUR_EMAIL: "jhergon8@gmail.com",
  YOUR_FONE: "+34 634 466 788",
  description: "",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/Arguish",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com/in/javhergondev/",
  twitter: "https://twitter.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
