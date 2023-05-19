import React from 'react'

const PeticionApiLoL = () => {
    const [campeones, setCampeones] = React.useState([]);
    const [paginacion, setPaginacion] = React.useState(1);

    const TraerCampeones = async () => {
        try {
          const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json?page=${paginacion}`);
          const data = await res.json();
          const campeones = Object.values(data.data);
      setCampeones(campeones);
      console.log(campeones);
    } catch (error) {
      console.log(error);
    }
  };

  const siguiente = () => {
    setPaginacion(paginacion + 1);
    TraerCampeones();
};

const atras = () => {
  if (paginacion > 1) {
    setPaginacion(paginacion - 1);
    TraerCampeones();
  }
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
    </div>
))}
</div>

  )
  
}


export default PeticionApiLoL