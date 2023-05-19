import React from 'react'

const PeticionApiLoL = () => {
    const [campeones, setCampeones] = React.useState([]);
    const [paginacion, setPaginacion] = React.useState(1);
    const campeonesPorPagina = 10;

    const TraerCampeones = async () => {
        try {
          const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json?page=${paginacion}`);
          const data = await res.json();
          const Campeones = Object.values(data.data);
          const inicio = (paginacion - 1) * campeonesPorPagina;
          const fin = paginacion * campeonesPorPagina;
          const campeonesPagina = [];
          for (let i = inicio; i < fin && i < Campeones.length; i++) {
            campeonesPagina.push(Campeones[i]);
          }
          

      setCampeones(campeonesPagina);
      console.log(campeonesPagina);
    } catch (error) {
      console.log(error);
    }
  };

  const siguiente = () => {
    setPaginacion(paginacion + 1);
    TraerCampeones();
};

const atras = () => {
    setPaginacion(paginacion - 1);
    TraerCampeones();
};




  return (
    <div>
<h1> Petición al api de League of legends </h1>

<button onClick={TraerCampeones}>  Traer campeones  </button>
<button onClick={atras}>  Atrás  </button>
<button onClick={siguiente}>  Siguiente   </button>
{campeones.map((campeon) => (
        <div>
          <h4>
            {campeon.name}
          </h4>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${campeon.image.full}`}
            alt={campeon.name}
          />
          <p>Armadura: {campeon.stats.armor}</p>
        </div>
      ))}
    </div>
  );
};


export default PeticionApiLoL