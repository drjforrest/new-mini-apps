import type { Country } from "types/fq/country";

declare const process: {
  env: {
    NODE_ENV: string;
  };
};

// ✅ Define the actual data array and ensure its type is clear
export const AFRICAN_COUNTRIES: Country[] = [
  {
    name: "Algeria",
    flagUrl: "/assets/flags/algeria.svg",
    region: "North Africa",
    capital: "Algiers",
    population: 44616624,
    languages: ["Arabic", "Tamazight"],
    facts: [
      "Largest country in Africa",
      "Home to seven UNESCO World Heritage sites",
      "90% of the country is covered by the Sahara desert",
    ],
  },
  {
    name: "Angola",
    flagUrl: "/assets/flags/angola.svg",
    region: "Southern Africa",
    capital: "Luanda",
    population: 32866272,
    languages: ["Portuguese"],
    facts: [
      "Second largest producer of diamonds in Africa",
      "Has a coastline that stretches 1,600 km",
      "Home to the giant sable antelope",
    ],
  },
  {
    name: "Benin",
    flagUrl: "/assets/flags/benin.svg",
    region: "West Africa",
    capital: "Porto-Novo",
    population: 12123198,
    languages: ["French"],
    facts: [
      "Birthplace of Vodun (Voodoo)",
      "Home to the historic Kingdom of Dahomey",
      "Has a thriving textile industry",
    ],
  },
  {
    name: "Botswana",
    flagUrl: "/assets/flags/botswana.svg",
    region: "Southern Africa",
    capital: "Gaborone",
    population: 2351627,
    languages: ["English", "Tswana"],
    facts: [
      "One of Africa's most stable democracies",
      "Famous for its diamond industry",
      "Home to the Okavango Delta, a UNESCO World Heritage site",
    ],
  },
  {
    name: "Burkina Faso",
    flagUrl: "/assets/flags/burkina-faso.svg",
    region: "West Africa",
    capital: "Ouagadougou",
    population: 20903278,
    languages: ["French"],
    facts: [
      "Known for its rich cultural heritage",
      "Hosts the Pan-African Film and Television Festival",
      "Has over 60 ethnic groups",
    ],
  },
  {
    name: "Burundi",
    flagUrl: "/assets/flags/burundi.svg",
    region: "East Africa",
    capital: "Gitega",
    population: 11890784,
    languages: ["Kirundi", "French", "English"],
    facts: [
      "One of the smallest countries in Africa",
      "Heavily reliant on agriculture",
      "Lake Tanganyika is one of its major geographical features",
    ],
  },
  {
    name: "Cameroon",
    flagUrl: "/assets/flags/cameroon.svg",
    region: "Central Africa",
    capital: "Yaoundé",
    population: 26545863,
    languages: ["French", "English"],
    facts: [
      "Known as 'Africa in Miniature' due to its diverse geography and culture",
      "Mount Cameroon is the highest peak in West and Central Africa",
      "Rich in natural resources like oil, gas, and timber",
    ],
  },
  {
    name: "Cape Verde",
    flagUrl: "/assets/flags/cape-verde.svg",
    region: "Islands",
    capital: "Praia",
    population: 555987,
    languages: ["Portuguese"],
    facts: [
      "Consists of 10 volcanic islands",
      "Known for its Creole Portuguese-African culture",
      "One of Africa's most politically and economically stable nations",
    ],
  },
  {
    name: "Central African Republic",
    flagUrl: "/assets/flags/central-african-republic.svg",
    region: "Central Africa",
    capital: "Bangui",
    population: 4829767,
    languages: ["French", "Sango"],
    facts: [
      "Rich in wildlife and natural resources like diamonds and uranium",
      "Home to the Dzanga-Sangha National Park",
      "Faces ongoing political and humanitarian challenges",
    ],
  },
  {
    name: "Chad",
    flagUrl: "/assets/flags/chad.svg",
    region: "Central Africa",
    capital: "N'Djamena",
    population: 16425864,
    languages: ["French", "Arabic"],
    facts: [
      "Lake Chad, once one of the world's largest lakes, has significantly shrunk",
      "Home to the Sahara Desert in the north and fertile regions in the south",
      "Economy largely dependent on oil and agriculture",
    ],
  },
  {
    name: "Comoros",
    flagUrl: "/assets/flags/comoros.svg",
    region: "Islands",
    capital: "Moroni",
    population: 869601,
    languages: ["Comorian", "French", "Arabic"],
    facts: [
      "One of the least populous countries in Africa",
      "Known for its volcanic islands and biodiversity",
      "Major producer of ylang-ylang, used in perfumes",
    ],
  },
  {
    name: "Djibouti",
    flagUrl: "/assets/flags/djibouti.svg",
    region: "Eastern Africa",
    capital: "Djibouti City",
    population: 988002,
    languages: ["French", "Arabic"],
    facts: [
      "Home to Lake Assal, one of the saltiest bodies of water in the world",
      "Strategically located at the entrance to the Red Sea",
      "Hosts military bases from multiple global powers",
    ],
  },
  {
    name: "Democratic Republic of the Congo",
    flagUrl: "/assets/flags/democratic-republic-of-the-congo.svg",
    region: "Central Africa",
    capital: "Kinshasa",
    population: 89561403,
    languages: ["French", "Lingala", "Swahili", "Tshiluba", "Kikongo"],
    facts: [
      "Second-largest country in Africa by area",
      "Home to the Congo Rainforest, the second-largest in the world",
      "Rich in minerals like cobalt and copper",
    ],
  },
  {
    name: "Equatorial Guinea",
    flagUrl: "/assets/flags/equatorial-guinea.svg",
    region: "Central Africa",
    capital: "Malabo",
    population: 1402985,
    languages: ["Spanish", "French", "Portuguese"],
    facts: [
      "Only African country where Spanish is the official language",
      "Major oil producer",
      "Comprised of mainland and several islands, including Bioko and Annobón",
    ],
  },
  {
    name: "Eswatini",
    flagUrl: "/assets/flags/eswatini.svg",
    region: "Southern Africa",
    capital: "Mbabane (administrative), Lobamba (legislative)",
    population: 1160164,
    languages: ["Swazi", "English"],
    facts: [
      "One of the last remaining absolute monarchies",
      "Home to Hlane Royal National Park, known for its rhinos",
      "Changed its name from Swaziland to Eswatini in 2018",
    ],
  },
  {
    name: "Ethiopia",
    flagUrl: "/assets/flags/ethiopia.svg",
    region: "Eastern Africa",
    capital: "Addis Ababa",
    population: 120283026,
    languages: ["Amharic"],
    facts: [
      "Considered the birthplace of coffee",
      "Never colonized by a European power",
      "Home to the ancient Aksumite Empire",
    ],
  },
  {
    name: "Gabon",
    flagUrl: "/assets/flags/gabon.svg",
    region: "Central Africa",
    capital: "Libreville",
    population: 2225734,
    languages: ["French"],
    facts: [
      "Has one of the highest urbanization rates in Africa",
      "Rich in oil reserves",
      "Home to large areas of protected rainforest",
    ],
  },
  {
    name: "Gambia",
    flagUrl: "/assets/flags/gambia.svg",
    region: "West Africa",
    capital: "Banjul",
    population: 2416668,
    languages: ["English"],
    facts: [
      "Entire country is centered around the Gambia River",
      "One of the most densely populated countries in Africa",
      "Major producer of peanuts",
    ],
  },
  {
    name: "Ghana",
    flagUrl: "/assets/flags/ghana.svg",
    region: "West Africa",
    capital: "Accra",
    population: 31072940,
    languages: ["English"],
    facts: [
      "First African country to gain independence from colonial rule",
      "Famous for its gold, cocoa, and oil exports",
      "Home to the historic Cape Coast Castle, a UNESCO World Heritage site",
    ],
  },
  {
    name: "Guinea",
    flagUrl: "/assets/flags/guinea.svg",
    region: "West Africa",
    capital: "Conakry",
    population: 13132795,
    languages: ["French"],
    facts: [
      "Major producer of bauxite, the primary ore of aluminum",
      "Home to Mount Nimba Strict Nature Reserve, a UNESCO site",
      "Has a diverse ethnic and cultural heritage",
    ],
  },
  {
    name: "Guinea-Bissau",
    flagUrl: "/assets/flags/guinea-bissau.svg",
    region: "West Africa",
    capital: "Bissau",
    population: 1968001,
    languages: ["Portuguese"],
    facts: [
      "One of the least developed countries in the world",
      "Known for its archipelago, the Bijagós Islands",
      "Economy largely dependent on cashew nut exports",
    ],
  },
  {
    name: "Côte d'Ivoire",
    flagUrl: "/assets/flags/c-te-d-ivoire.svg",
    region: "West Africa",
    capital: "Yamoussoukro",
    population: 26378274,
    languages: ["French"],
    facts: [
      "World's largest producer of cocoa beans",
      "Abidjan is the country's largest city and economic hub",
      "Home to the Basilica of Our Lady of Peace, one of the largest churches in the world",
    ],
  },
  {
    name: "Kenya",
    flagUrl: "/assets/flags/kenya.svg",
    region: "East Africa",
    capital: "Nairobi",
    population: 53771300,
    languages: ["Swahili", "English"],
    facts: [
      "Home to the Great Migration in the Maasai Mara",
      "Has over 50 national parks and reserves",
      "Hosts the largest marathon in Africa, the Nairobi Marathon",
    ],
  },
  {
    name: "Lesotho",
    flagUrl: "/assets/flags/lesotho.svg",
    region: "Southern Africa",
    capital: "Maseru",
    population: 2142249,
    languages: ["Sesotho", "English"],
    facts: [
      "One of the few countries entirely above 1,000 meters in elevation",
      "Relies heavily on hydroelectric power",
      "Known as the 'Kingdom in the Sky' due to its mountainous terrain",
    ],
  },
  {
    name: "Liberia",
    flagUrl: "/assets/flags/liberia.svg",
    region: "West Africa",
    capital: "Monrovia",
    population: 5057681,
    languages: ["English"],
    facts: [
      "Africa's first republic, founded in 1847",
      "Home to the largest rubber plantation in the world (Firestone)",
      "One of the wettest countries in Africa due to high rainfall",
    ],
  },
  {
    name: "Libya",
    flagUrl: "/assets/flags/libya.svg",
    region: "North Africa",
    capital: "Tripoli",
    population: 6871292,
    languages: ["Arabic"],
    facts: [
      "Has the largest oil reserves in Africa",
      "Over 90% of the country is covered by the Sahara Desert",
      "Home to ancient Roman ruins such as Leptis Magna",
    ],
  },
  {
    name: "Madagascar",
    flagUrl: "/assets/flags/madagascar.svg",
    region: "Southern Africa",
    capital: "Antananarivo",
    population: 27691018,
    languages: ["Malagasy", "French"],
    facts: [
      "Fourth largest island in the world",
      "Home to unique biodiversity, including lemurs",
      "Produces over 80% of the world's vanilla",
    ],
  },
  {
    name: "Malawi",
    flagUrl: "/assets/flags/malawi.svg",
    region: "Southern Africa",
    capital: "Lilongwe",
    population: 19129952,
    languages: ["English", "Chichewa"],
    facts: [
      "Home to Lake Malawi, one of the largest freshwater lakes in Africa",
      "Known as 'The Warm Heart of Africa' due to its friendly people",
      "Major producer of tea and tobacco",
    ],
  },
  {
    name: "Mali",
    flagUrl: "/assets/flags/mali.svg",
    region: "West Africa",
    capital: "Bamako",
    population: 20250833,
    languages: ["French"],
    facts: [
      "Home to the ancient city of Timbuktu, a center of learning in medieval times",
      "Second largest country in West Africa",
      "Major producer of gold",
    ],
  },
  {
    name: "Mauritania",
    flagUrl: "/assets/flags/mauritania.svg",
    region: "North Africa",
    capital: "Nouakchott",
    population: 4649658,
    languages: ["Arabic"],
    facts: [
      "Over 90% of the country is covered by the Sahara Desert",
      "One of the least densely populated countries in Africa",
      "Major exporter of iron ore",
    ],
  },
  {
    name: "Mauritius",
    flagUrl: "/assets/flags/mauritius.svg",
    region: "Islands",
    capital: "Port Louis",
    population: 1265740,
    languages: ["English", "French", "Creole"],
    facts: [
      "Home to the now-extinct dodo bird",
      "One of Africa's most developed and stable economies",
      "Famous for its beaches and coral reefs",
    ],
  },
  {
    name: "Morocco",
    flagUrl: "/assets/flags/morocco.svg",
    region: "North Africa",
    capital: "Rabat",
    population: 36910560,
    languages: ["Arabic", "Berber"],
    facts: [
      "Home to the Atlas Mountains and the Sahara Desert",
      "Famous for its historic cities like Marrakech and Fes",
      "One of the world's largest producers of phosphates",
    ],
  },
  {
    name: "Mozambique",
    flagUrl: "/assets/flags/mozambique.svg",
    region: "Southern Africa",
    capital: "Maputo",
    population: 31255435,
    languages: ["Portuguese"],
    facts: [
      "Has a coastline stretching over 2,400 km",
      "Rich in natural gas and mineral resources",
      "Known for its vibrant seafood cuisine and stunning beaches",
    ],
  },
  {
    name: "Namibia",
    flagUrl: "/assets/flags/namibia.svg",
    region: "Southern Africa",
    capital: "Windhoek",
    population: 2540905,
    languages: ["English"],
    facts: [
      "Home to the Namib Desert, one of the oldest deserts in the world",
      "Has one of the lowest population densities in the world",
      "Rich in diamonds and uranium",
    ],
  },
  {
    name: "Niger",
    flagUrl: "/assets/flags/niger.svg",
    region: "West Africa",
    capital: "Niamey",
    population: 24206636,
    languages: ["French"],
    facts: [
      "Over 80% of its land area is covered by the Sahara Desert",
      "Named after the Niger River",
      "Major exporter of uranium",
    ],
  },
  {
    name: "Nigeria",
    flagUrl: "/assets/flags/nigeria.svg",
    region: "West Africa",
    capital: "Abuja",
    population: 206139589,
    languages: ["English", "Hausa", "Igbo", "Yoruba"],
    facts: [
      "Has the largest economy in Africa",
      "Home to Nollywood, one of the world's largest film industries",
      "Has over 250 ethnic groups",
    ],
  },
  {
    name: "Rwanda",
    flagUrl: "/assets/flags/rwanda.svg",
    region: "East Africa",
    capital: "Kigali",
    population: 13000000,
    languages: ["Kinyarwanda", "French", "English"],
    facts: [
      "One of the cleanest and safest countries in Africa",
      "Home to endangered mountain gorillas",
      "Has a fast-growing economy and a strong focus on technology",
    ],
  },
  {
    name: "São Tomé and Príncipe",
    flagUrl: "/assets/flags/s-o-tom--and-pr-ncipe.svg",
    region: "Islands",
    capital: "São Tomé",
    population: 219159,
    languages: ["Portuguese"],
    facts: [
      "One of the smallest countries in Africa by population and land area",
      "Rich in cocoa production",
      "Known for its biodiversity and beautiful beaches",
    ],
  },
  {
    name: "Senegal",
    flagUrl: "/assets/flags/senegal.svg",
    region: "West Africa",
    capital: "Dakar",
    population: 16743927,
    languages: ["French"],
    facts: [
      "Hosts the famous Dakar Rally",
      "Has one of Africa's most stable democracies",
      "Gorée Island is a UNESCO World Heritage site known for its role in the transatlantic slave trade",
    ],
  },
  {
    name: "Seychelles",
    flagUrl: "/assets/flags/seychelles.svg",
    region: "Islands",
    capital: "Victoria",
    population: 98347,
    languages: ["Seychellois Creole", "English", "French"],
    facts: [
      "Least populated country in Africa",
      "Home to some of the world's most pristine beaches",
      "A major hub for luxury tourism",
    ],
  },
  {
    name: "Sierra Leone",
    flagUrl: "/assets/flags/sierra-leone.svg",
    region: "West Africa",
    capital: "Freetown",
    population: 7976983,
    languages: ["English"],
    facts: [
      "Known for its diamond mines",
      "Home to the world's third-largest natural harbor",
      "Recovered from a long civil war and Ebola outbreak",
    ],
  },
  {
    name: "Somalia",
    flagUrl: "/assets/flags/somalia.svg",
    region: "East Africa",
    capital: "Mogadishu",
    population: 15893222,
    languages: ["Somali", "Arabic"],
    facts: [
      "Has a rich maritime history",
      "Suffers from ongoing political instability",
      "Home to ancient cave paintings in Laas Geel",
    ],
  },
  {
    name: "South Africa",
    flagUrl: "/assets/flags/south-africa.svg",
    region: "Southern Africa",
    capital:
      "Pretoria (administrative), Cape Town (legislative), Bloemfontein (judicial)",
    population: 59308690,
    languages: [
      "Zulu",
      "Xhosa",
      "Afrikaans",
      "English",
      "Tswana",
      "Sotho",
      "Tsonga",
      "Swati",
      "Venda",
      "Ndebele",
    ],
    facts: [
      "Has three capital cities",
      "Hosted the 2010 FIFA World Cup, the first in Africa",
      "Home to Table Mountain and Kruger National Park",
    ],
  },
  {
    name: "South Sudan",
    flagUrl: "/assets/flags/south-sudan.svg",
    region: "East Africa",
    capital: "Juba",
    population: 11193729,
    languages: ["English"],
    facts: [
      "Rich in oil reserves but faces economic challenges",
      "Has over 60 different ethnic groups",
      "The Nile River flows through the country",
    ],
  },
  {
    name: "Tanzania",
    flagUrl: "/assets/flags/tanzania.svg",
    region: "East Africa",
    capital: "Dodoma",
    population: 59734218,
    languages: ["Swahili", "English"],
    facts: [
      "Home to Africa's tallest mountain, Mount Kilimanjaro",
      "Hosts Serengeti National Park, famous for wildlife migrations",
      "Zanzibar is a semi-autonomous region known for its spice trade",
    ],
  },
  {
    name: "Togo",
    flagUrl: "/assets/flags/togo.svg",
    region: "West Africa",
    capital: "Lomé",
    population: 8278724,
    languages: ["French"],
    facts: [
      "One of the narrowest countries in Africa",
      "Major producer of phosphate",
      "Known for its diverse traditional religious practices",
    ],
  },
  {
    name: "Uganda",
    flagUrl: "/assets/flags/uganda.svg",
    region: "East Africa",
    capital: "Kampala",
    population: 45741007,
    languages: ["English", "Swahili"],
    facts: [
      "Home to nearly half of the world's mountain gorillas",
      "Source of the Nile River",
      "Hosts the Big Five in its national parks",
    ],
  },
  {
    name: "Zambia",
    flagUrl: "/assets/flags/zambia.svg",
    region: "Southern Africa",
    capital: "Lusaka",
    population: 18383955,
    languages: ["English"],
    facts: [
      "Home to Victoria Falls, one of the Seven Natural Wonders of the World",
      "Rich in copper and other mineral resources",
      "Has 20 national parks and numerous wildlife reserves",
    ],
  },
  {
    name: "Zimbabwe",
    flagUrl: "/assets/flags/zimbabwe.svg",
    region: "Southern Africa",
    capital: "Harare",
    population: 14862924,
    languages: ["English", "Shona", "Ndebele"],
    facts: [
      "Home to Great Zimbabwe, an ancient city and UNESCO World Heritage site",
      "Has one of Africa's highest literacy rates",
      "Victoria Falls is shared between Zimbabwe and Zambia",
    ],
  },
];

// Validate that we have all flags for all countries
const validateFlags = () => {
  if (typeof window === "undefined") return;
  console.log("Validating flags...");
  AFRICAN_COUNTRIES.forEach((country) => {
    const flagPath = country.flagUrl;
    fetch(flagPath)
      .then((response) => {
        if (!response.ok) {
          console.error(`Flag not found for ${country.name}: ${flagPath}`);
        }
      })
      .catch((err) => {
        console.error(
          `Error loading flag for ${country.name}: ${flagPath}`,
          err,
        );
      });
  });
};

// Run validation only in development
if (process.env.NODE_ENV === "development") {
  validateFlags();
}

export default AFRICAN_COUNTRIES;
