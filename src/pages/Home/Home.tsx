import bloodImage from "../../assets/blood.svg";

const Home = () => {
  return (
    <>
      <div className="flex justify-around items-center">
        <div className="left flex flex-col justify-center items-start w-96">
          <h1 className="title">Doe+</h1>
          facilita a doação de sangue,
          conectando doadores a hemocentros e
          tornando o processo mais simples e
          eficiente. Junte-se a nós e ajude a
          salvar vidas!
        </div>
        <div className="right flex justify-center items-center w-1/2">
          <img
            src={bloodImage}
            alt=""
            className="w-fit max-w-2xl"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
