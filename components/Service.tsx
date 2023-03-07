import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";

export const Service = () => {
  return (
    <div id="service" className="section">
      <div className="container mx-auto">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work text-zinc-300"
            contentStyle={{ background: "rgba(0, 0, 0, 0.2)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgba(0, 0, 0, 0.2)" }}
            date="2020 - 2021"
            iconStyle={{ background: "#FF56F6", color: "#fff" }}
            icon={<SiJavascript />}
          >
            <h3 className="vertical-timeline-element-title">
              Proyectos de JavaScipt Puro
            </h3>
            <p>
              HTML, CSS, JavaScipt y Bootstrap
            </p>
            <ul style={{ listStyle: "outside" }} className="flex flex-col p-3">
              <li>
                <a
                  href="https://santiagosegurado.github.io/blackjack-js/"
                  className="hover:text-accent transition-all duration-300"
                  target={'_blank'}
                >
                  Black Jack (Juego)
                </a>
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "rgba(0, 0, 0, 0.2)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgba(0, 0, 0, 0.2)" }}
            className="vertical-timeline-element--work text-zinc-300"
            date="2020 - 2021"
            iconStyle={{ background: "#42A6E3", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Proyectos de Front End con React
            </h3>
            <p>
              React.js, CSS, Fetch APi, Axios, Next.js y NextUI
            </p>
            <ul style={{ listStyle: "outside" }} className="flex flex-col p-3">
              <li>
                <a
                  href="https://santiagosegurado.github.io/gif-app-react/"
                  className="hover:text-[#42A6E3] transition-all duration-300"
                  target={'_blank'}
                >
                  Gif App (Buscador de Gifs)
                </a>
              </li>
              <li>
                <a
                  href="https://santiagosegurado.github.io/react-precio-crypto/"
                  className="hover:text-[#42A6E3] transition-all duration-300"
                  target={'_blank'}
                >
                  Crypto App (Precios de Cryptos)
                </a>
              </li>
              <li>
                <a
                  href="https://santiagosegurado.github.io/react-precio-crypto/"
                  className="hover:text-[#42A6E3] transition-all duration-300"
                  target={'_blank'}
                >
                  Pokedex(PokeApi)
                </a>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgba(0, 0, 0, 0.2)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgba(0, 0, 0, 0.2)" }}
            className="vertical-timeline-element--work text-zinc-300"
            date="2020 - 2021"
            iconStyle={{ background: "#FF56F6", color: "#fff" }}
            icon={<SiNodedotjs />}
          >
            <h3 className="vertical-timeline-element-title">
              Proyectos Full Stack
            </h3>
            <p>
              React.js, Node.js, Express, Material UI, Tailwind, Wordpress, Firebase
            </p>
            <ul style={{ listStyle: "outside" }} className="flex flex-col p-3">
              <li>
                <a
                  href="https://lenceriadanela.store/"
                  className="hover:text-accent transition-all duration-300"
                  target={'_blank'}
                >
                  Lenceria Danela (Ecommerce)
                </a>
              </li>
              <li>
                <a
                  href="https://santiagosegurado.github.io/react-journal-app/"
                  className="hover:text-accent transition-all duration-300"
                  target={'_blank'}
                >
                  Journal App (Diario Intimo)
                </a>
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};
