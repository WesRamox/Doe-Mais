import bloodImage from "../../assets/blood.svg";

export default function Home() {
  return (
    <>
      <div className="flex justify-around items-center bg-red-100 h-screen min-h-[600px]">
        <div className="base flex justify-around items-center w-full">
          <div className="left flex flex-col justify-center items-start w-150">
            <h1 className="title">Doe+</h1>
            <p className="sub-title">
              facilita a doação de sangue,
              conectando doadores a hemocentros e
              tornando o processo mais simples e
              eficiente. Junte-se a nós e ajude a
              salvar vidas!
            </p>
          </div>
          <div className="right flex justify-center items-center w-1/2">
            <img
              src={bloodImage}
              alt=""
              className="w-fit max-w-[700px]"
            />
          </div>
        </div>
      </div>
    </>
  )
}
