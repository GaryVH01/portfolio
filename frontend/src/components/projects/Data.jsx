import Booki from "../../assets/booki-preview.png";
import OMF from "../../assets/omf-preview.png";
import LaPanthere from "../../assets/lapanthere-preview.png";
import Kanap from "../../assets/kanap-preview.png";
import Kasa from "../../assets/kasa-preview.png";
// import Ancistrus from "../../assets/ancistrus-preview.png";
import Piiquante from "../../assets/piiquante-preview.png";
import Bootstrap from "../../assets/bootstrap-preview.png";
import GuitarCenter from "../../assets/guitar.png";
import Arketekt from "../../assets/arketekt.png";
import Rabbit from "../../assets/rabbit.png";
import Cabs from "../../assets/cabs.png";
import MVH from "../../assets/mvh.png";
import Grains from "../../assets/grains.png";

export const projectsData = [
  {
    id: 1,
    image: Booki,
    title: "Projet 1 : Booki",
    description: "Transformation d'une maquette figma en site web (CSS, HTML)",
    category: "Frontend",
    source: "https://garyvh01.github.io/P2_Openclassroom_Booki/",
  },
  {
    id: 2,
    image: OMF,
    title: "Projet 2 : Ohmyfood",
    description:
      "Transformation d'une maquette figma en site web (CSS, SASS, HTML)",
    category: "Frontend",
    source: "https://garyvh01.github.io/P3_Openclassroom_OhMyFood/",
  },
  {
    id: 3,
    image: LaPanthere,
    title: "Projet 3 : La panthère",
    description:
      "Optimisation d'un site web (SEO, Performance et Accessibilité",
    category: "Frontend",
    source: "https://garyvh01.github.io/P4_Openclassroom_La_Panthere/",
  },
  {
    id: 4,
    image: Kanap,
    title: "Projet 4 : Kanap",
    description: "Site e-commerce (Javascript) ",
    category: "Frontend",
  },
  {
    id: 5,
    image: Piiquante,
    title: "Projet 5 : Piiquante",
    description:
      "API REST (Node.js, Express, MongoDb) Serveur local, API non déployée",
    category: "Backend",
    // source: "https://garyvh01.github.io/P4_Openclassroom_La_Panthere/",
  },
  {
    id: 6,
    image: Kasa,
    title: "Projet 6 : Kasa",
    description: "Application de location immobilière (React)",
    category: "Frontend",
    source: "https://kasaimmo.netlify.app/",
  },
  // {
  //   id: 7,
  //   image: Ancistrus,
  //   title: "Projet 7 : Ancistrus",
  //   description: "Site vitrine pour entreprise de nettoyage de vitres (React).",
  //   category: "Frontend & Backend",
  //   source: "https://ancistrus.netlify.app/",
  // },
  {
    id: 7,
    image: Bootstrap,
    title: "Projet 7 : Bootstrap Template",
    description: "Utilisation du framework Bootstrap",
    category: "Frontend",
    source: "https://dreamimmo.netlify.app/",
  },
  {
    id: 8,
    image: GuitarCenter,
    title: "Projet 8 : Guitar Center",
    description: "Application Nexjs + Express ... en construction",
    category: "Frontend & Backend",
    // source: "",
  },
  {
    id: 9,
    image: Arketekt,
    title: "Projet 9 : Arketekt",
    description: "Template (WEBFLOW) de site vitrine pour un ami architecte",
    category: "Frontend",
    source: "https://arketekt.net/",
  },
  {
    id: 10,
    image: Rabbit,
    title: "Projet 10 : Rabbit",
    description:
      "Intégration web (WEBFLOW). Copie de waze avec quelques libertés créatives.",
    category: "Frontend",
    source: "https://garys-fantastic-site-714723.webflow.io/",
  },
  {
    id: 11,
    image: Cabs,
    title: "Projet 11 : Cabs",
    description:
      "Site web pour particulier VTC avec réservation en ligne et Dashboard administrateur. MongoDB, Express, Javascript.",
    category: "Frontend & Backend",
    source: "https://cabsvtc.fr/",
  },
  {
    id: 12,
    image: MVH,
    title: "Projet 12 : MVH",
    description:
      "Site web pour artisan peintre. Et création d'un backoffice pour la gestion administrative et gestion du contenu",
    category: "Frontend & Backend",
    source: "https://mvhpeinture.fr/",
  },
  {
    id: 13,
    image: Grains,
    title: "Projet 13s : Grains d'Instants",
    description: "Site vitrine pour photographe professionnelle",
    category: "Frontend & Backend",
    source: "https://www.sc3jehu6300.universe.wf/",
  },
];

export const projectsNav = [
  {
    name: "Tous",
  },
  {
    name: "Frontend",
  },
  {
    name: "Backend",
  },
  {
    name: "Frontend & Backend",
  },
];
