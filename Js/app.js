const header = document.querySelector('#header')

let annuelles = ['Capucine (Tropaeolum majus)',
        'Souci (Calendula officinalis)',
        'Cosmos (Cosmos bipinnatus)',
        'Pavot de Californie (Eschscholzia californica)',
        'Zinnia (Zinnia elegans)',
        'Pétunia (Petunia x hybrida)',
        'Lobélie (Lobelia erinus)',
        'Nigelle de Damas (Nigella damascena)',
        "Oeillet d'Inde (Tagetes patula)",
        'Pensée (Viola x wittrockiana)',
        'Bégonia (Begonia x semperflorens)',
        'Gueule de loup (Antirrhinum majus)',
        'Muflier (Linaria maroccana)',
        'Ipomée (Ipomoea purpurea)',
        'Oenothère (Oenothera biennis)',
        'Bleuet (Centaurea cyanus)',
        'Cosmos sulfureux (Cosmos sulphureus)',
        'Salpiglossis (Salpiglossis sinuata)',
        'Gaillarde (Gaillardia pulchella)',
        'Œillet de poète (Dianthus barbatus)',
        'Rudbeckie (Rudbeckia hirta)',
        'Scabieuse (Scabiosa atropurpurea)',
        'Tithonia (Tithonia rotundifolia)',
        'Tournesol (Helianthus annuus)',
   ]

   annuelles = annuelles.sort()
 function init(page) {
    switch (page) {
        case 'annuelles' :{
            createListAnnuelles();
            console.log (annuelles)
        }
        break;
    }
 }

 function createListAnnuelles(){
    let list = document.getElementById('annuelles')
    console.log(list)
    for (let i = 0 ; i < annuelles.length ; i++){
        let li = document.createElement('li')
        li.className = 'fleurs-li'
        li.textContent = annuelles[i]
        list.appendChild(li)
    }
 }