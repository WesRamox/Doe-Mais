import Lottie from "react-lottie";
import animationData from "../../assets/lotties/animation.json";

export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="flex justify-around items-center h-screen min-h-[600px]">
        <div className="base flex justify-center items-center w-full flex-wrap">
          <div className="left w-1/2">
            <Lottie
              options={defaultOptions}
              height={800}
              width={800}
            />
          </div>
          <div className="right w-1/2">
            <h2 className="w-full text-5xl font-bold text-primary pb-5">
              Quem Somos
            </h2>
            <p className="text-[20px]">
              O Doe+ nasceu com o propósito de
              facilitar a doação de sangue,
              conectando doadores a hemocentros de
              forma simples e acessível.
              Acreditamos que a tecnologia pode
              transformar vidas, tornando o
              processo de doação mais ágil e
              eficiente. Nosso objetivo é
              conscientizar, engajar e ampliar a
              rede de doadores, garantindo que
              mais pessoas recebam o sangue de que
              precisam. Junte-se a nós e faça a
              diferença!
            </p>
          </div>
        </div>
      </div>
    </>
  )
};
