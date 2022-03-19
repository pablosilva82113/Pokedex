const fetchPokemon = () => {
    let ArrayAudio=['https://res.cloudinary.com/diz8ym76r/video/upload/v1597894691/bulbasur_x94y3b.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894694/ivasur_a1yfjc.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894690/binasur_t12ehg.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894695/charmander_ddlkyw.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894691/charmilion_namtdn.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894691/charizar_gyz6db.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894693/escuero_qoxiek.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894693/eskuerto_kwznpo.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894693/blatoise_e7863m.mp3','no hay audio','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894695/medabos_hmljgd.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894691/butterfree_lkkuj9.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894695/weedle_ett5k2.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894694/kakuna_nxetz4.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894690/beedril_zizny9.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894696/pidgey_vj88oz.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894694/pidgeoto_xffsix.mp3','https://res.cloudinary.com/diz8ym76r/video/upload/v1597894695/pieedgotegrande_e2kstv.mp3']
let audio=document.getElementById('audio')
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            let nombre =`Nombre: ${data.name}`
             pokename(nombre);
            // console.log(nombre);
            let tipo = `Typo: ${data.types[0].type.name}`
            console.log(tipo);
            poketipo(tipo);
            //
            let id_=`Numero: ${data.id}`
            console.log(id_);
            //ataques
            let atacks =`Atacks: ${data.moves[0].move.name}`
            console.log(atacks);
            pokeatacks(atacks);
            //extraer status
            let base=`base_stat:${data.stats[0].base_stat}`
            console.log(base);
            //effor
            let effor=`efort:${data.stats[0].effort}`
            console.log(effor);
            //stat.name
            let sta=`stat name:${data.stats[0].stat.name}`
            console.log(sta);
            
             //extraer status2
             let base2=`base_stat:${data.stats[1].base_stat}`
             console.log(base2);
             //effor
             let effor2=`efort:${data.stats[1].effort}`
             console.log(effor2);
             //stat.name
             let sta2=`stat name:${data.stats[1].stat.name}`
             console.log(sta2);
             var almacena= base +","+ effor +","+sta+","+ base2 + ","+effor2 + ","+ sta2;
             console.log(almacena);
             poketstatus(almacena);
            // obtenemos el audio
            //PD el audio no se reproduce en todos los pokemon 😯😢
            let num=data.id
            let aud= ArrayAudio[num-1]
            audio.setAttribute('src',aud)
            console.log(audio)
            audio.play()
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("imgP");
    pokePhoto.src = url;
}

const pokename = (name) => {
    let nom=document.getElementById('nombre').innerHTML=name;

}

const poketipo = (tip) => {
    let tipo=document.getElementById('typo').innerHTML=tip;
}
const poketstatus = (status)=> {
    let stat=document.getElementById('status').innerHTML=status;
}

const pokeatacks = (atacks)=> {
      let atack = document.getElementById('atack').innerHTML=atacks;
}