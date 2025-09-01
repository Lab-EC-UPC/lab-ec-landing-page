import './App.css'
import LOGO from "./assets/logo.png";
import CIBERDELINCUENCIA from "./assets/ciberdelincuencia.png";
import DESATENDIDOS from "./assets/desatendidos.png";
import {FaAngleDoubleDown} from "react-icons/fa";
import {RevealVertical} from "./components/animations/RevealVertical.tsx";
import { FaTiktok, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <div className="w-full border-b-1 border-grey py-4">
          <div className="mx-auto container flex items-center justify-center gap-2 px-4 md:px-0">
            <img
              src={LOGO}
              alt="Logo"
              className="h-16 w-auto"
            />
          </div>
        </div>

        <div className="mx-auto container px-4 md:px-0 py-12">
          <div className="flex w-full justify-center">
            <div className="flex flex-col items-center w-full md:w-[80%] gap-[20px] text-center">
              <h1 className="text-3xl md:text-[64px] font-bold md:leading-[64px]">
                Laboratorio de{" "}
                <span className="font-bold bg-black from-primary to-secondary bg-clip-text text-transparent">
                  Periodismo Innovador
                </span>
                {" "}de ECData y la Universidad Peruana de Ciencias Aplicadas
              </h1>

              <div className="grid grid-cols-2 gap-4 justify-center items-center mt-4">
                <a
                  href="https://www.tiktok.com/@ec.data.upc"
                  target="_blank"
                  className="size-12 md:size-16 hover:cursor-pointer hover:scale-105 duration-200  bg-primary rounded-full flex justify-center items-center"
                >
                  <FaTiktok className="text-lg md:text-3xl" />
                </a>
                <a
                  href="https://www.instagram.com/lab_elcomercio_upc"
                  target="_blank"
                  className="size-12 md:size-16 hover:cursor-pointer hover:scale-105 duration-200  bg-primary rounded-full flex justify-center items-center"
                >
                  <FaInstagram className="text-lg md:text-3xl" />
                </a>
              </div>

              <p className="text-gray-600 text-lg md:text-xl text-justify mt-4">
                El Laboratorio de Periodismo de El Comercio es un espacio dedicado a potenciar la creatividad y
                la innovación en el periodismo, explorando el poder de los datos, las nuevas tecnologías y las
                narrativas digitales. Nacimos con la visión de ser el primer conjunto de laboratorios de innovación
                periodística con estudiantes universitarios en el Perú, forjando una nueva generación de
                profesionales capaces de contar historias complejas de manera rigurosa, profunda y creativa.
                <br/><br/>
                El resultado de nuestra labor se materializa en especiales multimedia e investigaciones de alto
                impacto que han abordado temas críticos como la crisis de salud mental en la educación
                escolar, la ciberdelincuencia e irregularidades en el proceso de emisión de licencias de conducir.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto container px-4 md:px-0 mb-8 md:mb-12 w-full flex flex-col items-center py-8">
          <div className="flex gap-4 w-fit px-12 md:px-48 py-[16px] text-black border-t-2 border-b-2 border-primary items-center">
            <h1 className="text-lg font-bold">Nuestros proyectos</h1>
            <FaAngleDoubleDown size={16} className="text-primary animate-bounce" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <RevealVertical>
              <a href="https://elcomercio.pe/ecdata/crisis-de-salud-mental-ninos-adolescentes-desatendidos-y-la-falta-de-psicologos-en-escuelas-publicas-del-peru-chatbot-sammy-consultas-laboratorio-periodismo-upc-especdis-noticia/" target="_blank">
                <div className="flex justify-center items-center h-64 md:h-96 w-auto">
                  <img
                    src={DESATENDIDOS}
                    alt="Desatendidos"
                    className="hover:scale-95 duration-200 h-full w-auto object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center bg-black text-white p-6">
                  <h1 className="text-2xl font-bold">
                    Desatendidos
                  </h1>
                  <p className="text-center">
                    La ausencia psicológica en la educación escolar
                  </p>
                </div>
              </a>
            </RevealVertical>
            <RevealVertical>
              <a href="https://elcomercio.pe/ecdata/especial-ciberdelincuencia-aprende-a-identificar-las-estafas-digitales-antes-de-que-sea-demasiado-tarde-ciberseguridad-ciberestafas-herramienta-ecdata-upc-lab-noticia/#google_vignette" target="_blank">
                <div className="flex justify-center items-center h-64 md:h-96 w-auto">
                  <img
                    src={CIBERDELINCUENCIA}
                    alt="CiberDelincuencia"
                    className="hover:scale-95 duration-200 h-full w-auto object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center bg-black text-white p-6">
                  <h1 className="text-2xl font-bold">
                    Ciberdelincuencia
                  </h1>
                  <p className="text-center">
                    Aprende a identificar las estafas digitales antes de que sea demasiado tarde
                  </p>
                </div>
              </a>
            </RevealVertical>
          </div>
        </div>
        <div className="text-black py-16">
          <div className="mx-auto container px-4 md:px-0 border-t-2 border-b-2 border-primary py-16">
            <div className="grid md:flex justify-center md:justify-between gap-8 text-center md:text-left md:gap-4 items-start w-full">
              <a href="" target="_blank" className="hover:scale-95 duration-200 justify-center w-full md:w-fit items-center flex" >
                <img
                  src={LOGO}
                  alt="Logo"
                  className="h-16 w-auto"
                />
              </a>
              <div className="flex flex-col space-y-2">
                <h1 className="font-bold text-lg">Enlaces</h1>
                <a className="hover:text-primary duration-200" href="https://elcomercio.pe/ecdata/crisis-de-salud-mental-ninos-adolescentes-desatendidos-y-la-falta-de-psicologos-en-escuelas-publicas-del-peru-chatbot-sammy-consultas-laboratorio-periodismo-upc-especdis-noticia/" target="_blank">
                  Especial Desatendidos
                </a>
                <a className="hover:text-primary duration-200" href="https://elcomercio.pe/ecdata/especial-ciberdelincuencia-aprende-a-identificar-las-estafas-digitales-antes-de-que-sea-demasiado-tarde-ciberseguridad-ciberestafas-herramienta-ecdata-upc-lab-noticia/#google_vignette" target="_blank">
                  Especial Ciberseguridad
                </a>
              </div>
              <div className="space-y-2 text-center md:text-end">
                <h1 className="font-bold text-lg">Lab ECData - UPC © 2025</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
