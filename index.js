const destinations = [
    {
      name: 'Paris',
      country: 'France',
      type: 'City',
      image:'https://media.cntraveller.com/photos/6220bfe35e6084e5d4f02404/4:3/w_5120,h_3840,c_limit/Seine%20paris%20bike-GettyImages-1161606501.jpeg',
      companions: ['Friends', 'Partner'],
      activities: ['Eating', 'Party','Sightseeing'],
    },
    {
     name: 'Cancun',
     country: 'Mexico',
     image:'https://imageio.forbes.com/specials-images/imageserve/64ca798455fd04f0ccc6f9a3/Cancun-beach-coast-with-sunsets/0x0.jpg?format=jpg&height=1143&width=1809',
     type: 'Beach',
     companions: ['Friends', 'Partner'],
     activities: ['Relaxing on the beach', 'Watersports','Eating','Party'],
    },
    {
        name: 'Zermatt',
        country: 'Switzerland',
        image: 'https://s27363.pcdn.co/wp-content/uploads/2020/05/Things-to-do-in-Zermatt-1200x900.jpg.optimal.jpg',
        type: 'Mountains',
        companions: ['Friends', 'Family','Partner'],
        activities: ['Wintersports','Eating','Party'],
    },
    {
        name: 'Tuscany',
        country: 'Italy',
        image: 'https://a.cdn-hotels.com/gdcs/production106/d163/4b471f72-c206-4d80-bed3-bb0742fa389e.jpg?impolicy=fcrop&w=800&h=533&q=medium',
        type: 'Countryside',
        companions: ['Family', 'Partner'],
        activities: ['Relaxing on the beach', 'Eating','Sightseeing'],
    },
    {
        name: 'New York',
        country: 'USA',
        image:'https://hips.hearstapps.com/hmg-prod/images/gettyimages-688899881-1519413300.jpg?resize=1200:*',
        type: 'City',
        companions: ['Friends', 'Partner'],
        activities: ['Eating', 'Party','Sightseeing'],
    },
    {
        name: 'Bali',
        country: 'Indonesia',
        image:'https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg',
        type: 'Beach',
        companions: ['Friends', 'Partner'],
        activities: ['Relaxing on the beach', 'Watersports','Eating','Party'],
    },
    {
        name: 'Zell am See',
        country: 'Austria',
        image:'https://cdn.indebergen.nl/media/mbznpfjq/atsalz044-zell-am-see.jpg',
        type: 'Mountains',
        companions: ['Friends', 'Partner'],
        activities: ['Wintersports','Eating','Party'],
    },
    {
        name: 'Tenerife',
        country: 'Spain',
        image:'https://content.r9cdn.net/rimg/dimg/1b/b2/40feceed-freereg-2000056-163f46f708f.jpg?width=1750&height=1000&xhint=1381&yhint=1043&crop=true',
        type: 'Beach',
        companions: ['Family', 'Partner', 'Friends'],
        activities: ['Relaxing on the beach', 'Watersports','Eating','Party'],
    },
    {
        name: 'Berlin',
        country: 'Germany',
        image:'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
        type: 'City',
        companions: ['Friends', 'Partner'],
        activities: ['Eating', 'Party','Sightseeing'],
    },
    {
        name: 'Mallorca',
        country: 'Spain',
        image:'https://imageio.forbes.com/specials-images/imageserve/5f8dc21e8627c768d4342ce6/Porte-de-Soller--Palma-Mallorca/960x0.jpg?height=409&width=711&fit=bounds',
        type: 'Beach',
        companions: ['Family', 'Partner', 'Friends'],
        activities: ['Relaxing on the beach', 'Watersports','Eating','Party'],
    },
    {
        name: 'Salzburg',
        country: 'Austria',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Salzburg_%2848489551981%29.jpg/1200px-Salzburg_%2848489551981%29.jpg',
        type: 'City',
        companions: ['Friends', 'Partner'],
        activities: ['Eating', 'Party','Sightseeing'],
    },
    {
        name: 'Mykonos',
        country: 'Greece',
        image:'https://lp-cms-production.imgix.net/2021-08/shutterstockRF_1541944991.jpg?auto=format&w=1440&h=810&fit=crop&q=75',
        type: 'Beach',
        companions: ['Friends', 'Partner'],
        activities: ['Relaxing on the beach', 'Watersports','Eating','Party'],
    },
    {
        name:'Zanzibar',
        country: 'Tanzania',
        image:'https://media-cdn.tripadvisor.com/media/photo-s/27/fe/08/c9/nungwi-beach-resort-by.jpg',
        type: 'Beach',
        companions: ['Friends', 'Partner'],
        activities: ['Relaxing on the beach','Watersports','Eating','Party'],
    },
    {
        name: 'Dubai',
        country: 'United Arab Emirates',
        image:'https://www.theglobetrottingdetective.com/wp-content/uploads/2021/01/Dubai-in-7-days-and-best-things-to-do-in-Dubai-.jpg',
        type: 'City',
        companions: ['Friends','Family', 'Partner'],
        activities: ['Eating', 'Party','Watersports','Relaxing on the beach'],
    },
    {
        name: 'Cape Town',
        country: 'South Africa',
        image:'https://a.cdn-hotels.com/gdcs/production196/d1783/c0db737c-3cbb-4d43-8863-dc557f513a01.jpg',
        type: 'City',
        companions: ['Friends','Family', 'Partner'],
        activities: ['Eating', 'Party','Sightseeing','Watersports','Relaxing on the beach'],
    },
    {
        name: 'Annecy',
        country: 'France',
        image:'https://www.annecy-ville.fr/wp-content/uploads/2019/03/annecy-ville.jpg',
        type: 'Mountains',
        companions: ['Friends','Family', 'Partner'],
        activities: ['Eating','Sightseeing','Wintersports'],
    },
    {
        name:'Cotswolds',
        country:'United Kingdom',
        image:'https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2021/12/Cotswolds-england-1.jpg',
        type:'Countryside',
        companions: ['Friends','Family', 'Partner'],
        activities: ['Eating','Sightseeing','Wintersports'],
    },
    {
        name: 'Nikko',
        country: 'Japan',
        image: 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/03/a0003340/img/basic/a0003340_main.jpg?20200917144034',
        type: 'Countryside',
        companions: ['Friends', 'Family','Partner'],
        activities: ['Sightseeing', 'Eating','Watersports'],
    },
    {
        name:'Torres del Paine',
        country:'Chile',
        image:'https://worldlyadventurer.com/wp-content/uploads/2022/11/Chile-Patagonia-Torres-del-Paine-National-Park-Los-Cuernos3.jpg',
        type:'Mountains',
        companions: ['Friends','Family', 'Partner'],
        activities: ['Eating','Sightseeing','Wintersports','Watersports'],
    },
    {
        name: 'El Chalten',
        country: 'Argentina',
        image:'https://img.freepik.com/premium-photo/argentina-patagonia-el-chalten-village-glaciares-national-park-trekking-gateway-fitz-roy_451699-2509.jpg?w=2000',
        type: 'Mountains',
        companions: ['Friends','Family', 'Partner'],
        activities: ['Eating','Sightseeing','Wintersports','Watersports'],
    },
    {
        name: 'Budapest',
        country: 'Hungary',
        image:'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Hungary/Budapest/budapest-guide-lead.jpg?imwidth=1400',
        type: 'City',
        companions: ['Friends', 'Partner'],
        activities: ['Watersports','Sightseeing'],
    }
  ];
  
module.exports = destinations;