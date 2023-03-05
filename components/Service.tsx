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
              Comienzo como Front End Developer
            </h3>
            <p>
              Empiezo mi camino en la programacion de la mano de JavaScript,
              construyendo mis primeras aplicaciones con HTML, CSS y JS. <br />
              Ademas de arrancar mis estudios como Tecnico Universitario en
              Desarrollo Web en la UNLAM.
            </p>
            <ul style={{ listStyle: "outside" }} className="flex flex-col p-3">
              <li>
                <a
                  href="https://santiagosegurado.github.io/blackjack-js/"
                  className="hover:text-accent transition-all duration-300"
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
              Conociendo mas del mundo Front End
            </h3>
            <p>
              Expendi mis conociminetos probando nuevas librerias. <br />
              Me empape de todo el ecosistema de React.
            </p>
            <ul style={{ listStyle: "outside" }} className="flex flex-col p-3">
              <li>
                <a
                  href="https://santiagosegurado.github.io/gif-app-react/"
                  className="hover:text-[#42A6E3] transition-all duration-300"
                >
                  Gif App (Buscador de Gifs)
                </a>
              </li>
              <li>
                <a
                  href="https://santiagosegurado.github.io/react-precio-crypto/"
                  className="hover:text-[#42A6E3] transition-all duration-300"
                >
                  Crypto App (Precios de Cryptos)
                </a>
              </li>
              <li>
                <a
                  href="https://santiagosegurado.github.io/react-precio-crypto/"
                  className="hover:text-[#42A6E3] transition-all duration-300"
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
              Conociendo mas del mundo Front End
            </h3>
            <p>
              Expendi mis conociminetos probando nuevas librerias. <br />
              Me empape de todo el ecosistema de React.
            </p>
            <ul style={{ listStyle: "outside" }} className="flex flex-col p-3">
              <li>
                <a
                  href="https://santiagosegurado.github.io/gif-app-react/"
                  className="hover:text-accent transition-all duration-300"
                >
                  Gif App (Buscador de Gifs)
                </a>
              </li>
              <li>
                <a
                  href="https://santiagosegurado.github.io/react-precio-crypto/"
                  className="hover:text-accent transition-all duration-300"
                >
                  Crypto App (Precios de Cryptos)
                </a>
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};
