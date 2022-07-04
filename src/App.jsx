import Plano from "./Plano";
import "./App.css"
function App() {
    const planos = [

        {
        link:"big-king.webp",
        title: "Combo Big King",
        price:"Um hamburger com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
        qnt_users: " Serve 1 pessoa",
        qnt_projects:"R$ 41,90",
        },
        {
        link:"cheddar-duplo.webp",
        title: "Combo Cheddar Duplo",
        price: "Um hambúrguer com duas carnes bovinas grelhadas de 57g,pão preto com gergilim...",
        qnt_users: " Serve 1 pessoa",
        qnt_projects:"R$ 41,90",
            
        },
        {
        link:"cheeseburger-duplo.webp",
        title: "Combo Cheeseburger Duplo com Bacon",
        price: "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
        qnt_users: "  Serve 1 pessoa",
        qnt_projects:" R$ 36,90",
        },
        {
        link:"mega-stacker.webp",
        title: "Combo Mega Stacker 2.0",
        price: "Um hambúrguer com duas carnes bovinas grelhadas de 113g, pão com gergilim, queijo",
        qnt_users: " Serve 1 pessoa",
        qnt_projects:"R$ 51,90",
        },
       
    ];


    return(
      <div className="cardPai">
        <img src="logo.svg" alt="" height={50} width={50} />
        <header className="cabecalho">entregador </header>
        <header>Restaurante e mercado</header>
        <header>carreiras</header>
        <header>iFood Card</header>
        <h1 className="top">Destaques</h1>
        {planos.map( (plano) =>{
            return <Plano imagem={plano.link} titulo={plano.title}
            infoBurguer={plano.info}
            servePessoas={plano.serve}
            preco={plano.price} />
            
  
        })}
      </div>
    );
  }
  
  export default App;