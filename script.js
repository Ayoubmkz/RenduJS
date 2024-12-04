fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {

        let presentation = document.getElementById("presentation");
        let p = document.getElementById("pp");
        let activites = document.getElementById("activites");



        let h1p = document.createElement("h1");
        h1p.textContent = data.nomCommercial;
        presentation.appendChild(h1p);

        let h2p = document.createElement("h2");
        h1p.textContent = data.phraseAccroche;
        presentation.appendChild(h2p);

        let pp = document.createElement("p");
        pp.textContent = data.avantagesClients;
        p.appendChild(pp);

        data.activites.forEach(element => {
            let diva = document.createElement("div");
            activites.appendChild(diva);
            let noma = document.createElement("h2");
            noma.textContent = element.nom;
            diva.appendChild(noma);

           let desc = document.createElement("p");
            desc.textContent = element.description;
            diva.appendChild(desc);

            let image = document.createElement("img");
            image.src = element["image-url"];
            diva.appendChild(image);

        });


        data.temoignages.forEach(element => {
            let divt = document.createElement("div");
            temoignages.appendChild(divt);
            
            let prenomp = document.createElement("h2");
            prenomp.textContent = element.prenom;
            divt.appendChild(prenomp);

           let txp = document.createElement("p");
            txp.textContent = element.typeExperience;
            divt.appendChild(txp);

            let comm = document.createElement("p");
            comm.textContent = element.commentaire;
            divt.appendChild(comm);

            let note = document.createElement("h2");
            note.textContent = element.note;
            divt.appendChild(note);

        });
    


       console.log(data);
       
    }).catch(error => console.error('Error:', error));