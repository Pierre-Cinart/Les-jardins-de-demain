const header = document.querySelector('#header')
const footer = document.querySelector('#footer')
// integration du header
header.innerHTML ='<nav class="navbar navbar-expand-lg bg-body-tertiary">'+
            '<div class="container-fluid">'+
             '<a class="navbar-brand" href="#">Les jardins de demains</a>'+
              '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
                '<span class="navbar-toggler-icon"></span>'+
              '</button>'+
              '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
                '<ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">'+
                 
                  '<li class="nav-item">'+
                    '<a class="nav-link" href="index.html">Acceuil</a>'+
                  '</li>'+
                 '<li class="nav-item">'+
                    '<a class="nav-link" href="./index.html#a-propos">A propos</a>'+
                  '</li>'+
                  '<li class="nav-item">'+
                    '<a class="nav-link" href="contact.html">Contact</a>'+
                  '</li>'+
                  '<li class="nav-item">'+
                    '<a class="nav-link" href="events.html">Evenements nationaux</a>'+
                  '</li>'+
                  
                '</ul>'+
              
              '</div>'+
            '</div>'+
          '</nav> '
// integration du footer
footer.innerHTML = ' <div class="row ">'+
'<div class="col-3">'+
    '<p>Exercice de développement de site web pour une association fictive,'+
    " réalisé dans le cadre de ma formation de développeur web et d'application web chez Studi "+
    "pour l'année 2023. </p>"+
'</div>'+
'<div class="col-3">'+
    '<p>lorem5</p>'+
'</div>'+
'<div class="col-3">'+
    '<p>lorem5</p>'+
'</div>'+
'<div class="col-3">'+
    '<p>lorem5</p>'+
'</div>'+
'</div>'+
'<p class="text-center rights">cinartDev tout droits réservés</p>'

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
let bisannuelles = [
    'Pensée (Viola x wittrockiana)',
    'Muflier (Antirrhinum majus)',
    'Delphinium (Delphinium spp.)',
    'Digitale (Digitalis purpurea)',
    'Giroflée (Matthiola incana)',
    'Primevère (Primula spp.)',
    'Rose trémière (Alcea rosea)',
    'Campanule (Campanula spp.)',
    'Ancolie (Aquilegia spp.)',
    'Souci des jardins (Calendula officinalis)',
    'Bégonia tubéreux (Begonia tuberosa)',
    'Myosotis (Myosotis spp.)',
    'Œillet mignardise (Dianthus barbatus)',
    'Renoncule des jardins (Ranunculus asiaticus)'
    ]
bisannuelles = bisannuelles.sort()
annuelles = annuelles.sort()


 function createListFlowers(page){
    let list = document.getElementById(page)
    let tab = ''
    switch (page) {
        case 'annuelles': {
            tab = annuelles;
        }
        break;
        case 'bisannuelles': {
            tab = bisannuelles;
        }
        break;
    }
    for (let i = 0 ; i < tab.length ; i++){
        let li = document.createElement('li')
        li.className = 'fleurs-li'
        li.textContent = tab[i]
        list.appendChild(li)
    }
 }