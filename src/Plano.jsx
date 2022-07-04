import "./Plano.css";
function Plano( {imagem,título,preco,usuarios,projetos} ){
return(
    <div className="plano-container">
       <img src={imagem} alt= "" width={200} />
        <h2 className="plano-título">{título}</h2>
        <p className="plano-preco"> {preco}</p>
        <h3 className="plano-info"> {usuarios}</h3>
        <h3 className="plano-info">{projetos}</h3>
       
    </div>
);
}

export default Plano;