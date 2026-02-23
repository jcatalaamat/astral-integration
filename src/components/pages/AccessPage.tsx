import { useState } from "react";

interface Loc { lat: number; lng: number; }
interface Facilitator { id: number; name: string; country: string; city: string; region: string; certs: string[]; languages: string[]; classes: number; bio: string; featured: boolean; lat: number; lng: number; }

const CERTS = [
  { id: "acaf", name: "Advanced Facilitator", abbr: "ACAF", color: "#1a3a4a" },
  { id: "cf", name: "Certified Facilitator", abbr: "CF", color: "#2d6a7a" },
  { id: "bf", name: "Bars Facilitator", abbr: "BF", color: "#3d8a7a" },
  { id: "bp", name: "Bars Practitioner", abbr: "BP", color: "#5aaa8a" },
  { id: "bycf", name: "Being You Certified Facilitator", abbr: "BYCF", color: "#7ac0a0" },
  { id: "jcf", name: "Joy of Business Certified Facilitator", abbr: "JCF", color: "#4a8a6a" },
  { id: "bpf", name: "Body Process Facilitator", abbr: "BPF", color: "#3a7a6a" },
  { id: "aff", name: "Access Facelift Facilitator", abbr: "AFF", color: "#2a6a5a" },
  { id: "rrycf", name: "Right Riches For You Certified Facilitator", abbr: "RRFY CF", color: "#4a7a5a" },
  { id: "bodycf", name: "3 Day Body Class Facilitator", abbr: "BodyCF", color: "#3a6a5a" },
  { id: "ceoc", name: "Creative Edge of Consciousness", abbr: "CEOC", color: "#2a5a5a" },
  { id: "rdd", name: "Relationships Done Different", abbr: "RDD", color: "#5a7a6a" },
];

const REGIONS = [
  { id: "americas", name: "The Americas" },
  { id: "europe", name: "Europe" },
  { id: "asiapac", name: "Asia Pacific" },
  { id: "mideast", name: "Middle East & Africa" },
];

const F = [
  {id:1,name:"Simone Milasas",country:"Australia",city:"Gold Coast",region:"asiapac",certs:["acaf","cf","bf","bycf","jcf","rrycf","aff","bpf","rdd","ceoc"],languages:["English"],classes:47,bio:"Worldwide Business Coordinator of Access Consciousness. Author of Joy of Business and Getting Out of Debt Joyfully. Instrumental in growing Access from 4 countries to 176.",featured:true,lat:-28.02,lng:153.4},
  {id:2,name:"Dr. Dain Heer",country:"United States",city:"Houston, TX",region:"americas",certs:["acaf","cf","bf","bycf","bpf","ceoc"],languages:["English"],classes:62,bio:"Co-creator of Access Consciousness. Creator of the Energetic Synthesis of Being. Author of Being You, Changing the World.",featured:true,lat:29.76,lng:-95.37},
  {id:3,name:"Gary Douglas",country:"United States",city:"Houston, TX",region:"americas",certs:["acaf","cf","bf"],languages:["English"],classes:38,bio:"Founder of Access Consciousness. Pioneer of pragmatic tools for consciousness since 1990.",featured:true,lat:29.76,lng:-95.37},
  {id:4,name:"Grace Douglas",country:"United States",city:"Houston, TX",region:"americas",certs:["acaf","cf","bf","bycf"],languages:["English"],classes:33,bio:"Senior facilitator offering advanced classes worldwide alongside the founders.",featured:true,lat:29.76,lng:-95.37},
  {id:5,name:"Brendon Watt",country:"Australia",city:"Gold Coast",region:"asiapac",certs:["cf","bf","jcf","rrycf"],languages:["English"],classes:24,bio:"CFO of Access Consciousness. Co-author of Relationship — Are You Sure You Want One?",featured:false,lat:-28.02,lng:153.4},
  {id:6,name:"Lauren Marie",country:"United States",city:"Los Angeles, CA",region:"americas",certs:["cf","bf","bycf","aff"],languages:["English"],classes:19,bio:"Being You facilitator based in Los Angeles. Working with actors, creatives, and entrepreneurs since 2016.",featured:false,lat:34.05,lng:-118.24},
  {id:7,name:"Jessica Thompson",country:"United States",city:"New York, NY",region:"americas",certs:["cf","bf","jcf","rrycf"],languages:["English"],classes:28,bio:"Joy of Business facilitator on Wall Street. Bringing consciousness to finance and entrepreneurship.",featured:false,lat:40.71,lng:-74.01},
  {id:8,name:"David Kuhn",country:"United States",city:"Austin, TX",region:"americas",certs:["cf","bf","bpf","bodycf"],languages:["English"],classes:16,bio:"Body process specialist. Former physical therapist bringing somatic awareness to Access tools.",featured:false,lat:30.27,lng:-97.74},
  {id:9,name:"Michelle Rivera",country:"United States",city:"Miami, FL",region:"americas",certs:["cf","bf","aff","rdd"],languages:["English","Español"],classes:22,bio:"Bilingual facilitator serving Miami's Latin American community. Relationships Done Different specialist.",featured:false,lat:25.76,lng:-80.19},
  {id:10,name:"Patricia Owens",country:"United States",city:"Denver, CO",region:"americas",certs:["cf","bf"],languages:["English"],classes:11,bio:"Mountain-based facilitator offering Bars classes and weekend retreats in Colorado.",featured:false,lat:39.74,lng:-104.99},
  {id:11,name:"Karen Mitchell",country:"United States",city:"Seattle, WA",region:"americas",certs:["cf","bf","bycf"],languages:["English"],classes:14,bio:"Being You facilitator in the Pacific Northwest. Tech industry background.",featured:false,lat:47.61,lng:-122.33},
  {id:12,name:"Robert Chen",country:"United States",city:"San Francisco, CA",region:"americas",certs:["cf","bf","jcf"],languages:["English","中文"],classes:17,bio:"Joy of Business facilitator bridging Silicon Valley entrepreneurship with consciousness tools.",featured:false,lat:37.77,lng:-122.42},
  {id:13,name:"Amanda Hayes",country:"United States",city:"Chicago, IL",region:"americas",certs:["bf","bp","aff"],languages:["English"],classes:8,bio:"Access Bars and Facelift facilitator in downtown Chicago.",featured:false,lat:41.88,lng:-87.63},
  {id:14,name:"Nathalie Tremblay",country:"Canada",city:"Montreal, QC",region:"americas",certs:["cf","bf","bycf","rdd"],languages:["Français","English"],classes:21,bio:"Bilingual facilitator serving Quebec and French-speaking Canada. Relationships Done Different trainer.",featured:false,lat:45.50,lng:-73.57},
  {id:15,name:"Jennifer Walsh",country:"Canada",city:"Vancouver, BC",region:"americas",certs:["cf","bf","aff","bpf"],languages:["English"],classes:15,bio:"Body and facelift specialist on Canada's west coast.",featured:false,lat:49.28,lng:-123.12},
  {id:16,name:"Emily Lawson",country:"Canada",city:"Toronto, ON",region:"americas",certs:["cf","bf","jcf"],languages:["English"],classes:18,bio:"Joy of Business facilitator working with Canadian entrepreneurs and startups.",featured:false,lat:43.65,lng:-79.38},
  {id:17,name:"Ana Carolina Silva",country:"Brazil",city:"São Paulo",region:"americas",certs:["cf","bf","bycf","rrycf"],languages:["Português","English","Español"],classes:29,bio:"Facilitating in Portuguese across Brazil, Portugal, and Mozambique. Right Riches specialist.",featured:false,lat:-23.55,lng:-46.63},
  {id:18,name:"Luciana Ferreira",country:"Brazil",city:"Rio de Janeiro",region:"americas",certs:["cf","bf","aff","bpf"],languages:["Português","English"],classes:17,bio:"Body process and facelift facilitator in Rio. Former dancer bringing body awareness to Access.",featured:false,lat:-22.91,lng:-43.17},
  {id:19,name:"Marcela Gutiérrez",country:"Mexico",city:"Mexico City",region:"americas",certs:["cf","bf","jcf"],languages:["Español","English"],classes:23,bio:"Joy of Business facilitator in Mexico City. Growing Access across Central America.",featured:false,lat:19.43,lng:-99.13},
  {id:20,name:"Daniela Morales",country:"Mexico",city:"Guadalajara",region:"americas",certs:["bf","bp","aff"],languages:["Español"],classes:9,bio:"Bars and Facelift practitioner in Guadalajara, Mexico.",featured:false,lat:20.66,lng:-103.35},
  {id:21,name:"Valentina Rojas",country:"Colombia",city:"Bogotá",region:"americas",certs:["cf","bf","bycf"],languages:["Español","English"],classes:16,bio:"Being You facilitator bringing consciousness tools to Colombia and Ecuador.",featured:false,lat:4.71,lng:-74.07},
  {id:22,name:"Camila Herrera",country:"Argentina",city:"Buenos Aires",region:"americas",certs:["cf","bf","rrycf","rdd"],languages:["Español","English"],classes:20,bio:"Right Riches and Relationships facilitator serving Southern Cone communities.",featured:false,lat:-34.60,lng:-58.38},
  {id:23,name:"Sofía Mendoza",country:"Costa Rica",city:"San José",region:"americas",certs:["cf","bf"],languages:["Español","English"],classes:12,bio:"Certified facilitator in Central America. Regular classes in Costa Rica and Panama.",featured:false,lat:9.93,lng:-84.09},
  {id:24,name:"Gabriela Torres",country:"Chile",city:"Santiago",region:"americas",certs:["cf","bf","rrycf"],languages:["Español","English"],classes:14,bio:"Right Riches for You facilitator in Chile.",featured:false,lat:-33.45,lng:-70.67},
  {id:25,name:"Ricardo Peña",country:"Peru",city:"Lima",region:"americas",certs:["cf","bf","bycf"],languages:["Español","English"],classes:11,bio:"Being You facilitator in Lima, Peru.",featured:false,lat:-12.05,lng:-77.04},
  {id:26,name:"Diana Vargas",country:"Ecuador",city:"Quito",region:"americas",certs:["bf","bp","aff"],languages:["Español"],classes:7,bio:"Bars and Facelift practitioner in Ecuador.",featured:false,lat:-0.18,lng:-78.47},
  {id:27,name:"Sarah Bennett",country:"United Kingdom",city:"London",region:"europe",certs:["cf","bf","bycf","jcf","ceoc"],languages:["English"],classes:31,bio:"One of the UK's most active facilitators. Being You and Joy of Business across London and Europe.",featured:false,lat:51.51,lng:-0.13},
  {id:28,name:"James Harrington",country:"United Kingdom",city:"Manchester",region:"europe",certs:["cf","bf","bpf"],languages:["English"],classes:14,bio:"Body process facilitator in Northern England and Scotland.",featured:false,lat:53.48,lng:-2.24},
  {id:29,name:"Helen Clarke",country:"United Kingdom",city:"Edinburgh",region:"europe",certs:["cf","bf","bycf","aff"],languages:["English"],classes:15,bio:"Being You and Facelift facilitator in Scotland.",featured:false,lat:55.95,lng:-3.19},
  {id:30,name:"Fiona McCarthy",country:"Ireland",city:"Dublin",region:"europe",certs:["cf","bf","aff","rdd"],languages:["English"],classes:16,bio:"Facelift and Relationships facilitator serving Ireland and Northern Ireland.",featured:false,lat:53.35,lng:-6.26},
  {id:31,name:"Marie Dupont",country:"France",city:"Paris",region:"europe",certs:["acaf","cf","bf","jcf"],languages:["Français","English"],classes:22,bio:"Advanced facilitator offering classes across France and French-speaking Africa.",featured:false,lat:48.86,lng:2.35},
  {id:32,name:"Isabelle Laurent",country:"France",city:"Lyon",region:"europe",certs:["cf","bf","bycf","aff"],languages:["Français","English"],classes:15,bio:"Being You and Facelift facilitator in southeastern France.",featured:false,lat:45.76,lng:4.84},
  {id:33,name:"Clémentine Duval",country:"France",city:"Nice",region:"europe",certs:["bf","bp","aff"],languages:["Français","Italiano"],classes:8,bio:"Bars and Facelift practitioner on the French Riviera.",featured:false,lat:43.71,lng:7.26},
  {id:34,name:"Katrin Müller",country:"Germany",city:"Berlin",region:"europe",certs:["cf","bf","bycf","rdd"],languages:["Deutsch","English"],classes:19,bio:"Being You and Relationships facilitator in Berlin's creative community.",featured:false,lat:52.52,lng:13.41},
  {id:35,name:"Stefan Weber",country:"Germany",city:"Munich",region:"europe",certs:["cf","bf","jcf","rrycf"],languages:["Deutsch","English"],classes:17,bio:"Joy of Business and Right Riches facilitator serving German-speaking Europe.",featured:false,lat:48.14,lng:11.58},
  {id:36,name:"Magdalena Bauer",country:"Germany",city:"Hamburg",region:"europe",certs:["cf","bf","aff","bpf"],languages:["Deutsch","English"],classes:13,bio:"Body and Facelift specialist in northern Germany.",featured:false,lat:53.55,lng:9.99},
  {id:37,name:"Monika Schäfer",country:"Germany",city:"Frankfurt",region:"europe",certs:["cf","bf","rrycf","jcf"],languages:["Deutsch","English"],classes:16,bio:"Right Riches and Joy of Business facilitator in Frankfurt's financial district.",featured:false,lat:50.11,lng:8.68},
  {id:38,name:"Andrea Hoffmann",country:"Austria",city:"Vienna",region:"europe",certs:["cf","bf","bpf","bodycf"],languages:["Deutsch","English"],classes:14,bio:"Body class specialist in Vienna. Former physiotherapist.",featured:false,lat:48.21,lng:16.37},
  {id:39,name:"Claudia Brunner",country:"Switzerland",city:"Zürich",region:"europe",certs:["cf","bf","jcf"],languages:["Deutsch","Français","English"],classes:16,bio:"Trilingual facilitator working across Switzerland's language regions.",featured:false,lat:47.38,lng:8.54},
  {id:40,name:"Elena Rodríguez",country:"Spain",city:"Barcelona",region:"europe",certs:["cf","bf","bycf"],languages:["Español","English","Français"],classes:18,bio:"Facilitating consciousness in Spain and Latin America since 2015. Being You specialist.",featured:false,lat:41.39,lng:2.17},
  {id:41,name:"Carlos Vega",country:"Spain",city:"Madrid",region:"europe",certs:["cf","bf","jcf","rrycf"],languages:["Español","English"],classes:21,bio:"Right Riches and Joy of Business facilitator in central Spain.",featured:false,lat:40.42,lng:-3.70},
  {id:42,name:"Teresa Santos",country:"Portugal",city:"Lisbon",region:"europe",certs:["cf","bf","aff"],languages:["Português","English","Español"],classes:13,bio:"Facelift facilitator serving Portugal and Portuguese-speaking communities.",featured:false,lat:38.72,lng:-9.14},
  {id:43,name:"Marco Bianchi",country:"Italy",city:"Rome",region:"europe",certs:["cf","bf","bpf","aff","bodycf"],languages:["Italiano","English"],classes:16,bio:"Body class specialist facilitating across Italy and Mediterranean Europe.",featured:false,lat:41.90,lng:12.50},
  {id:44,name:"Giulia Conti",country:"Italy",city:"Milan",region:"europe",certs:["cf","bf","jcf"],languages:["Italiano","English","Français"],classes:14,bio:"Joy of Business facilitator in Italy's business capital.",featured:false,lat:45.46,lng:9.19},
  {id:45,name:"Chiara Rossi",country:"Italy",city:"Florence",region:"europe",certs:["cf","bf","bycf","ceoc"],languages:["Italiano","English"],classes:15,bio:"Being You and Creative Edge facilitator in Tuscany.",featured:false,lat:43.77,lng:11.26},
  {id:46,name:"Ingrid van der Berg",country:"Netherlands",city:"Amsterdam",region:"europe",certs:["cf","bf","rrycf"],languages:["Nederlands","English","Deutsch"],classes:14,bio:"Right Riches for You facilitator working with money and business consciousness.",featured:false,lat:52.37,lng:4.90},
  {id:47,name:"Sophie de Vries",country:"Netherlands",city:"Rotterdam",region:"europe",certs:["cf","bf","bycf"],languages:["Nederlands","English"],classes:11,bio:"Being You facilitator in the Netherlands.",featured:false,lat:51.92,lng:4.48},
  {id:48,name:"Annelies Janssen",country:"Belgium",city:"Brussels",region:"europe",certs:["cf","bf","aff"],languages:["Nederlands","Français","English"],classes:12,bio:"Trilingual facilitator serving Belgium and neighboring countries.",featured:false,lat:50.85,lng:4.35},
  {id:49,name:"Lars Eriksson",country:"Sweden",city:"Stockholm",region:"europe",certs:["cf","bf","bpf"],languages:["English","Svenska"],classes:11,bio:"Bringing pragmatic consciousness tools to Scandinavia.",featured:false,lat:59.33,lng:18.07},
  {id:50,name:"Nina Johansson",country:"Sweden",city:"Gothenburg",region:"europe",certs:["cf","bf","rdd"],languages:["Svenska","English"],classes:9,bio:"Relationships Done Different facilitator in western Sweden.",featured:false,lat:57.71,lng:11.97},
  {id:51,name:"Mia Andersen",country:"Denmark",city:"Copenhagen",region:"europe",certs:["cf","bf","bycf"],languages:["English","Dansk"],classes:10,bio:"Being You facilitator in Denmark.",featured:false,lat:55.68,lng:12.57},
  {id:52,name:"Elina Korhonen",country:"Finland",city:"Helsinki",region:"europe",certs:["cf","bf","aff","rdd"],languages:["Suomi","English"],classes:13,bio:"Facelift and Relationships facilitator in Finland.",featured:false,lat:60.17,lng:24.94},
  {id:53,name:"Kristin Haugen",country:"Norway",city:"Oslo",region:"europe",certs:["bf","bp"],languages:["English"],classes:6,bio:"Bars practitioner in Oslo, Norway.",featured:false,lat:59.91,lng:10.75},
  {id:54,name:"Petra Nováková",country:"Czech Republic",city:"Prague",region:"europe",certs:["cf","bf","bycf"],languages:["Čeština","English","Deutsch"],classes:15,bio:"Being You facilitator in Central Europe.",featured:false,lat:50.08,lng:14.44},
  {id:55,name:"Anna Kowalska",country:"Poland",city:"Warsaw",region:"europe",certs:["cf","bf","jcf"],languages:["Polski","English"],classes:12,bio:"Joy of Business facilitator growing Access in Poland.",featured:false,lat:52.23,lng:21.01},
  {id:56,name:"Ivana Horvat",country:"Croatia",city:"Zagreb",region:"europe",certs:["cf","bf","aff"],languages:["Hrvatski","English","Deutsch"],classes:10,bio:"Facelift facilitator in Croatia and the Balkans.",featured:false,lat:45.82,lng:15.98},
  {id:57,name:"Eszter Nagy",country:"Hungary",city:"Budapest",region:"europe",certs:["cf","bf","bpf"],languages:["Magyar","English"],classes:11,bio:"Body process facilitator in Hungary.",featured:false,lat:47.50,lng:19.04},
  {id:58,name:"Marina Ivanova",country:"Russia",city:"Moscow",region:"europe",certs:["cf","bf","bycf","jcf"],languages:["Русский","English"],classes:23,bio:"One of Russia's most active facilitators. Being You and Joy of Business across Russia and CIS.",featured:false,lat:55.76,lng:37.62},
  {id:59,name:"Elena Petrova",country:"Russia",city:"St. Petersburg",region:"europe",certs:["cf","bf","aff"],languages:["Русский","English"],classes:14,bio:"Facelift facilitator in St. Petersburg.",featured:false,lat:59.93,lng:30.34},
  {id:60,name:"Diana Popescu",country:"Romania",city:"Bucharest",region:"europe",certs:["cf","bf","rdd"],languages:["Română","English"],classes:9,bio:"Relationships Done Different facilitator in Romania.",featured:false,lat:44.43,lng:26.10},
  {id:61,name:"Katarina Novak",country:"Slovenia",city:"Ljubljana",region:"europe",certs:["cf","bf","bycf","rdd"],languages:["Slovenščina","English","Deutsch"],classes:12,bio:"Being You and Relationships facilitator in Slovenia.",featured:false,lat:46.06,lng:14.51},
  {id:62,name:"Sofia Papadopoulos",country:"Greece",city:"Athens",region:"europe",certs:["cf","bf","bycf"],languages:["Ελληνικά","English"],classes:10,bio:"Being You facilitator in Greece.",featured:false,lat:37.98,lng:23.73},
  {id:63,name:"Olga Kuznetsova",country:"Ukraine",city:"Kyiv",region:"europe",certs:["cf","bf","jcf"],languages:["Українська","Русский","English"],classes:13,bio:"Joy of Business facilitator in Ukraine.",featured:false,lat:50.45,lng:30.52},
  {id:64,name:"Rachel Cooper",country:"Australia",city:"Sydney",region:"asiapac",certs:["cf","bf","bycf","jcf"],languages:["English"],classes:25,bio:"Being You and Joy of Business facilitator in Sydney. One of Australia's longest-serving facilitators.",featured:false,lat:-33.87,lng:151.21},
  {id:65,name:"Lisa Nguyen",country:"Australia",city:"Melbourne",region:"asiapac",certs:["cf","bf","aff","bpf"],languages:["English"],classes:18,bio:"Body and facelift specialist in Melbourne.",featured:false,lat:-37.81,lng:144.96},
  {id:66,name:"Tanya Morrison",country:"Australia",city:"Perth",region:"asiapac",certs:["cf","bf"],languages:["English"],classes:10,bio:"Certified facilitator on Australia's west coast.",featured:false,lat:-31.95,lng:115.86},
  {id:67,name:"Charlotte Wilson",country:"New Zealand",city:"Auckland",region:"asiapac",certs:["cf","bf","bycf"],languages:["English"],classes:13,bio:"Being You facilitator in New Zealand.",featured:false,lat:-36.85,lng:174.76},
  {id:68,name:"Kalpana Raghuraman",country:"India",city:"Mumbai",region:"asiapac",certs:["cf","bf","bpf","aff","bodycf"],languages:["English","हिन्दी"],classes:31,bio:"Body process specialist with 200+ sessions facilitated. Growing Access across South Asia.",featured:false,lat:19.08,lng:72.88},
  {id:69,name:"Priya Sharma",country:"India",city:"Delhi",region:"asiapac",certs:["cf","bf","bycf"],languages:["English","हिन्दी"],classes:19,bio:"Being You facilitator in Delhi. Working with women's empowerment through consciousness.",featured:false,lat:28.61,lng:77.21},
  {id:70,name:"Anita Desai",country:"India",city:"Bangalore",region:"asiapac",certs:["cf","bf","jcf"],languages:["English","हिन्दी"],classes:15,bio:"Joy of Business facilitator in India's tech capital.",featured:false,lat:12.97,lng:77.59},
  {id:71,name:"Deepa Menon",country:"India",city:"Chennai",region:"asiapac",certs:["cf","bf","aff"],languages:["English","हिन्दी","தமிழ்"],classes:12,bio:"Facelift facilitator in South India.",featured:false,lat:13.08,lng:80.27},
  {id:72,name:"Tomoko Hayashi",country:"Japan",city:"Tokyo",region:"asiapac",certs:["cf","bf","aff","bpf"],languages:["日本語","English"],classes:15,bio:"Translating Access Consciousness into the Japanese context since 2017.",featured:false,lat:35.68,lng:139.65},
  {id:73,name:"Yuki Tanaka",country:"Japan",city:"Osaka",region:"asiapac",certs:["cf","bf"],languages:["日本語","English"],classes:9,bio:"Certified facilitator in Osaka, Japan.",featured:false,lat:34.69,lng:135.50},
  {id:74,name:"Soo-Jin Park",country:"South Korea",city:"Seoul",region:"asiapac",certs:["cf","bf","bycf"],languages:["한국어","English"],classes:17,bio:"Being You facilitator growing Access consciousness in South Korea.",featured:false,lat:37.57,lng:126.98},
  {id:75,name:"Wei Lin",country:"China",city:"Shanghai",region:"asiapac",certs:["cf","bf","jcf"],languages:["中文","English"],classes:14,bio:"Joy of Business facilitator in mainland China.",featured:false,lat:31.23,lng:121.47},
  {id:76,name:"Mei Chen",country:"Taiwan",city:"Taipei",region:"asiapac",certs:["cf","bf","aff"],languages:["中文","English"],classes:11,bio:"Facelift facilitator serving Taiwan and Chinese-speaking communities.",featured:false,lat:25.03,lng:121.57},
  {id:77,name:"Sarah Tan",country:"Singapore",city:"Singapore",region:"asiapac",certs:["cf","bf","jcf","rrycf"],languages:["English","中文"],classes:27,bio:"Joy of Business and Right Riches facilitator working with entrepreneurs across Southeast Asia.",featured:false,lat:1.35,lng:103.82},
  {id:78,name:"Jason Wong",country:"Hong Kong",city:"Hong Kong",region:"asiapac",certs:["cf","bf","jcf","rrycf"],languages:["中文","English"],classes:22,bio:"Joy of Business and Right Riches facilitator in Hong Kong's financial community.",featured:false,lat:22.32,lng:114.17},
  {id:79,name:"Araya Patel",country:"Thailand",city:"Bangkok",region:"asiapac",certs:["cf","bf","aff"],languages:["English","ไทย"],classes:12,bio:"Facelift facilitator in Bangkok. Former spa industry professional.",featured:false,lat:13.76,lng:100.50},
  {id:80,name:"Maria Santos",country:"Philippines",city:"Manila",region:"asiapac",certs:["cf","bf","bycf"],languages:["English","Filipino"],classes:14,bio:"Being You facilitator in the Philippines.",featured:false,lat:14.60,lng:120.98},
  {id:81,name:"Putri Sari",country:"Indonesia",city:"Jakarta",region:"asiapac",certs:["cf","bf"],languages:["English","Bahasa Indonesia"],classes:9,bio:"Certified facilitator growing Access in Indonesia.",featured:false,lat:-6.21,lng:106.85},
  {id:82,name:"Linh Tran",country:"Vietnam",city:"Ho Chi Minh City",region:"asiapac",certs:["bf","bp"],languages:["Tiếng Việt","English"],classes:6,bio:"Bars practitioner in Vietnam.",featured:false,lat:10.82,lng:106.63},
  {id:83,name:"Fatima Al-Rashid",country:"United Arab Emirates",city:"Dubai",region:"mideast",certs:["cf","bf","aff","bycf"],languages:["العربية","English"],classes:19,bio:"First certified facilitator in the Gulf region. Access Bars and Being You specialist.",featured:false,lat:25.20,lng:55.27},
  {id:84,name:"Layla Hassan",country:"United Arab Emirates",city:"Abu Dhabi",region:"mideast",certs:["cf","bf","jcf"],languages:["العربية","English"],classes:13,bio:"Joy of Business facilitator in Abu Dhabi.",featured:false,lat:24.45,lng:54.38},
  {id:85,name:"Yael Cohen",country:"Israel",city:"Tel Aviv",region:"mideast",certs:["cf","bf","bycf","rdd"],languages:["עברית","English"],classes:21,bio:"Being You and Relationships facilitator bringing consciousness tools to Israel.",featured:false,lat:32.09,lng:34.78},
  {id:86,name:"Noa Levi",country:"Israel",city:"Haifa",region:"mideast",certs:["cf","bf","aff"],languages:["עברית","English","Русский"],classes:12,bio:"Multilingual facilitator in northern Israel.",featured:false,lat:32.79,lng:34.99},
  {id:87,name:"Zeynep Kaya",country:"Turkey",city:"Istanbul",region:"mideast",certs:["cf","bf","bycf","jcf"],languages:["Türkçe","English"],classes:20,bio:"Being You and Joy of Business facilitator bridging Europe and Asia in Istanbul.",featured:false,lat:41.01,lng:28.98},
  {id:88,name:"Ayşe Demir",country:"Turkey",city:"Ankara",region:"mideast",certs:["cf","bf"],languages:["Türkçe","English"],classes:8,bio:"Certified facilitator in Turkey's capital.",featured:false,lat:39.93,lng:32.86},
  {id:89,name:"Thandi Nkosi",country:"South Africa",city:"Cape Town",region:"mideast",certs:["cf","bf","bycf"],languages:["English","Afrikaans"],classes:16,bio:"Being You facilitator in Cape Town. Growing Access across Southern Africa.",featured:false,lat:-33.92,lng:18.42},
  {id:90,name:"Amina Okafor",country:"Nigeria",city:"Lagos",region:"mideast",certs:["cf","bf"],languages:["English"],classes:10,bio:"Certified facilitator in West Africa. Bars classes in Lagos and Abuja.",featured:false,lat:6.52,lng:3.38},
  {id:91,name:"Nadia Benali",country:"Morocco",city:"Casablanca",region:"mideast",certs:["cf","bf","aff"],languages:["العربية","Français","English"],classes:11,bio:"Trilingual facilitator serving North Africa and French-speaking communities.",featured:false,lat:33.57,lng:-7.59},
  {id:92,name:"Rania Khalil",country:"Egypt",city:"Cairo",region:"mideast",certs:["cf","bf","aff"],languages:["العربية","English"],classes:11,bio:"Facelift facilitator in Cairo. Growing Access in the Arab world.",featured:false,lat:30.04,lng:31.24},
  {id:93,name:"Sara Al-Mutairi",country:"Saudi Arabia",city:"Riyadh",region:"mideast",certs:["cf","bf","bycf"],languages:["العربية","English"],classes:14,bio:"Being You facilitator in Saudi Arabia.",featured:false,lat:24.71,lng:46.68},
  {id:94,name:"Maryam Hosseini",country:"Iran",city:"Tehran",region:"mideast",certs:["bf","bp"],languages:["فارسی","English"],classes:5,bio:"Bars practitioner in Tehran, Iran.",featured:false,lat:35.69,lng:51.39},
];

const getInitials = (n: string) => n.split(" ").map(w => w[0]).join("").slice(0, 2);
const certColor = (id: string) => CERTS.find(c => c.id === id)?.color || "#666";
const certName = (id: string) => CERTS.find(c => c.id === id)?.name || id;
const certAbbr = (id: string) => CERTS.find(c => c.id === id)?.abbr || id;
const haversine = (a: number, b: number, c: number, d: number) => { const R=6371, p=Math.PI/180, dl=(c-a)*p, dn=(d-b)*p; const x=Math.sin(dl/2)**2+Math.cos(a*p)*Math.cos(c*p)*Math.sin(dn/2)**2; return R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x)); };
const fmtDist = (d: number) => d<100?`${Math.round(d)} km`:d<1000?`${Math.round(d)} km`:`${(d/1000).toFixed(1)}k km`;

const Card = ({ f, loc, onProfile, onBook }: { f: Facilitator; loc: Loc | null; onProfile: (f: Facilitator) => void; onBook: (f: Facilitator) => void }) => {
  const [open, setOpen] = useState(false);
  const d = loc ? haversine(loc.lat, loc.lng, f.lat, f.lng) : null;
  return (
    <div onClick={() => setOpen(!open)} style={{ background:"#fff", borderRadius:16, padding:"24px 28px", cursor:"pointer", transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)", border:f.featured?"1.5px solid #1a3a4a":"1px solid #e8ebe9", boxShadow:open?"0 12px 40px rgba(26,58,74,0.12)":"0 1px 3px rgba(0,0,0,0.04)", position:"relative" }}>
      {f.featured && <div style={{ position:"absolute", top:12, right:16, fontSize:10, fontFamily:"'DM Mono',monospace", color:"#1a3a4a", letterSpacing:"0.1em", textTransform:"uppercase", opacity:0.6 }}>Featured</div>}
      <div style={{ display:"flex", gap:18, alignItems:"flex-start" }}>
        <div style={{ width:56, height:56, borderRadius:14, background:`linear-gradient(135deg,${certColor(f.certs[0])},${certColor(f.certs[Math.min(1,f.certs.length-1)])})`, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontFamily:"'DM Mono',monospace", fontSize:16, fontWeight:500, flexShrink:0, letterSpacing:"0.05em" }}>{getInitials(f.name)}</div>
        <div style={{ flex:1, minWidth:0 }}>
          <h3 style={{ margin:0, fontSize:17, fontWeight:600, color:"#1a2a2a", fontFamily:"'Source Serif 4',Georgia,serif" }}>{f.name}</h3>
          <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:4, color:"#5a6a6a", fontSize:13, fontFamily:"'DM Sans',system-ui,sans-serif", flexWrap:"wrap" }}>
            <span>{f.city}, {f.country}</span>
            {d && <span style={{ color:"#8a9a9a" }}>· {fmtDist(d)}</span>}
          </div>
          <div style={{ display:"flex", gap:5, marginTop:10, flexWrap:"wrap" }}>
            {f.certs.slice(0, open ? undefined : 4).map((c: string) => (
              <span key={c} style={{ display:"inline-block", padding:"3px 8px", borderRadius:6, fontSize:10.5, fontWeight:600, fontFamily:"'DM Mono',monospace", background:certColor(c)+"12", color:certColor(c), letterSpacing:"0.03em" }}>{certAbbr(c)}</span>
            ))}
            {!open && f.certs.length > 4 && <span style={{ fontSize:10.5, color:"#8a9a9a", padding:"3px 4px", fontFamily:"'DM Mono',monospace" }}>+{f.certs.length-4}</span>}
          </div>
        </div>
        <div style={{ textAlign:"right", flexShrink:0 }}>
          <div style={{ fontSize:22, fontWeight:700, color:"#1a3a4a", fontFamily:"'DM Mono',monospace", lineHeight:1 }}>{f.classes}</div>
          <div style={{ fontSize:10, color:"#8a9a9a", marginTop:2, fontFamily:"'DM Mono',monospace", textTransform:"uppercase", letterSpacing:"0.05em" }}>classes</div>
        </div>
      </div>
      {open && (
        <div style={{ marginTop:20, paddingTop:16, borderTop:"1px solid #f0f2f1" }}>
          <p style={{ margin:"0 0 14px", fontSize:14, lineHeight:1.65, color:"#3a4a4a", fontFamily:"'DM Sans',system-ui,sans-serif" }}>{f.bio}</p>
          <div style={{ display:"flex", gap:24, flexWrap:"wrap", marginBottom:14 }}>
            <div><div style={{ fontSize:10, color:"#8a9a9a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:4, fontFamily:"'DM Mono',monospace" }}>Languages</div><div style={{ fontSize:13, color:"#3a4a4a" }}>{f.languages.join(", ")}</div></div>
            <div><div style={{ fontSize:10, color:"#8a9a9a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:4, fontFamily:"'DM Mono',monospace" }}>Certifications</div><div style={{ fontSize:13, color:"#3a4a4a" }}>{f.certs.map((c: string) => certName(c)).join(", ")}</div></div>
          </div>
          <div style={{ display:"flex", gap:10 }}>
            <button onClick={e=>{e.stopPropagation();onProfile(f);}} style={{ flex:1, padding:"12px 16px", borderRadius:10, border:"none", background:"#1a3a4a", color:"#fff", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',system-ui,sans-serif" }}>View Profile & Classes</button>
            <button onClick={e=>{e.stopPropagation();onBook(f);}} style={{ padding:"12px 16px", borderRadius:10, border:"1.5px solid #1a3a4a", background:"transparent", color:"#1a3a4a", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',system-ui,sans-serif" }}>Book a Session</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Pill = ({ label, active, onClick, count }: { label: string | undefined; active: boolean; onClick: () => void; count?: number }) => (
  <button onClick={onClick} style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"8px 16px", borderRadius:100, border:active?"1.5px solid #1a3a4a":"1px solid #dde0de", background:active?"#1a3a4a":"#fff", color:active?"#fff":"#4a5a5a", fontSize:13, fontWeight:500, cursor:"pointer", fontFamily:"'DM Sans',system-ui,sans-serif", transition:"all 0.2s", whiteSpace:"nowrap" }}>
    {label}{count !== undefined && <span style={{ fontSize:11, opacity:0.7 }}>{count}</span>}
  </button>
);

const ProfileModal = ({ f, onClose, loc }: { f: Facilitator; onClose: () => void; loc: Loc | null }) => {
  const d = loc ? haversine(loc.lat, loc.lng, f.lat, f.lng) : null;
  const sampleClasses = [
    { title: "Access Bars Class", date: "Mar 15–16, 2026", city: f.city, spots: 8 },
    { title: f.certs.includes("bycf") ? "Being You, Changing the World" : f.certs.includes("jcf") ? "Joy of Business Intro" : "Access Bars Class", date: "Apr 5, 2026", city: f.city, spots: 12 },
    { title: f.certs.includes("aff") ? "Access Energetic Facelift" : "The Foundation", date: "Apr 22–24, 2026", city: f.city, spots: 5 },
  ];
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:20, backdropFilter:"blur(4px)" }}>
      <div onClick={e=>e.stopPropagation()} style={{ background:"#fff", borderRadius:20, maxWidth:560, width:"100%", maxHeight:"90vh", overflow:"auto", position:"relative" }}>
        <div style={{ background:`linear-gradient(135deg,${certColor(f.certs[0])},${certColor(f.certs[Math.min(2,f.certs.length-1)])})`, padding:"32px 28px 24px", borderRadius:"20px 20px 0 0" }}>
          <button onClick={onClose} style={{ position:"absolute", top:16, right:16, background:"rgba(255,255,255,0.2)", border:"none", color:"#fff", width:32, height:32, borderRadius:8, cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center" }}>×</button>
          <div style={{ display:"flex", gap:18, alignItems:"center" }}>
            <div style={{ width:72, height:72, borderRadius:18, background:"rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontFamily:"'DM Mono',monospace", fontSize:22, fontWeight:500, letterSpacing:"0.05em", flexShrink:0 }}>{getInitials(f.name)}</div>
            <div>
              <h2 style={{ margin:0, fontSize:22, fontWeight:700, color:"#fff", fontFamily:"'Source Serif 4',Georgia,serif" }}>{f.name}</h2>
              <div style={{ fontSize:14, color:"rgba(255,255,255,0.7)", marginTop:4 }}>{f.city}, {f.country}{d ? ` · ${fmtDist(d)} away` : ""}</div>
            </div>
          </div>
        </div>
        <div style={{ padding:"24px 28px" }}>
          <p style={{ margin:"0 0 20px", fontSize:14, lineHeight:1.7, color:"#3a4a4a" }}>{f.bio}</p>

          <div style={{ display:"flex", gap:16, marginBottom:20, flexWrap:"wrap" }}>
            <div style={{ flex:1, minWidth:120, background:"#f6f7f6", borderRadius:12, padding:"14px 16px" }}>
              <div style={{ fontSize:10, color:"#8a9a9a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:6, fontFamily:"'DM Mono',monospace" }}>Languages</div>
              <div style={{ fontSize:13, color:"#2a3a3a", fontWeight:500 }}>{f.languages.join(", ")}</div>
            </div>
            <div style={{ flex:1, minWidth:120, background:"#f6f7f6", borderRadius:12, padding:"14px 16px" }}>
              <div style={{ fontSize:10, color:"#8a9a9a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:6, fontFamily:"'DM Mono',monospace" }}>Scheduled Classes</div>
              <div style={{ fontSize:13, color:"#2a3a3a", fontWeight:500 }}>{f.classes} upcoming</div>
            </div>
          </div>

          <div style={{ marginBottom:20 }}>
            <div style={{ fontSize:10, color:"#8a9a9a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:10, fontFamily:"'DM Mono',monospace" }}>Certifications</div>
            <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
              {f.certs.map((c: string) => (
                <span key={c} style={{ display:"inline-flex", alignItems:"center", gap:4, padding:"6px 12px", borderRadius:8, fontSize:12, fontWeight:500, fontFamily:"'DM Sans',system-ui,sans-serif", background:certColor(c)+"10", color:certColor(c), border:`1px solid ${certColor(c)}20` }}>
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:10, fontWeight:600 }}>{certAbbr(c)}</span>
                  <span style={{ opacity:0.7 }}>{certName(c)}</span>
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom:24 }}>
            <div style={{ fontSize:10, color:"#8a9a9a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:10, fontFamily:"'DM Mono',monospace" }}>Upcoming Classes</div>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {sampleClasses.map((cl, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 16px", borderRadius:10, border:"1px solid #e8ebe9", background:"#fafbfa" }}>
                  <div>
                    <div style={{ fontSize:14, fontWeight:600, color:"#1a2a2a" }}>{cl.title}</div>
                    <div style={{ fontSize:12, color:"#6a7a7a", marginTop:2 }}>{cl.date} · {cl.city}</div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontSize:11, color:"#5aaa8a", fontFamily:"'DM Mono',monospace", fontWeight:500 }}>{cl.spots} spots</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display:"flex", gap:10 }}>
            <button style={{ flex:1, padding:"14px 16px", borderRadius:12, border:"none", background:"#1a3a4a", color:"#fff", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',system-ui,sans-serif" }}>Book a Class</button>
            <button style={{ padding:"14px 16px", borderRadius:12, border:"1.5px solid #1a3a4a", background:"transparent", color:"#1a3a4a", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',system-ui,sans-serif" }}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingModal = ({ f, onClose }: { f: Facilitator; onClose: () => void }) => {
  const [sent, setSent] = useState(false);
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:20, backdropFilter:"blur(4px)" }}>
      <div onClick={e=>e.stopPropagation()} style={{ background:"#fff", borderRadius:20, maxWidth:480, width:"100%", padding:"32px 28px", position:"relative" }}>
        <button onClick={onClose} style={{ position:"absolute", top:16, right:16, background:"#f0f2f1", border:"none", color:"#5a6a6a", width:32, height:32, borderRadius:8, cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center" }}>×</button>
        {!sent ? (
          <>
            <h3 style={{ margin:"0 0 4px", fontSize:20, fontWeight:700, color:"#1a2a2a", fontFamily:"'Source Serif 4',Georgia,serif" }}>Book a Session</h3>
            <p style={{ margin:"0 0 24px", fontSize:14, color:"#6a7a7a" }}>with {f.name} · {f.city}, {f.country}</p>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              <div>
                <label style={{ display:"block", fontSize:11, color:"#8a9a9a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:6, fontFamily:"'DM Mono',monospace" }}>Your Name</label>
                <input type="text" placeholder="Full name" style={{ width:"100%", padding:"12px 14px", borderRadius:10, border:"1px solid #dde0de", fontSize:14, fontFamily:"'DM Sans',system-ui,sans-serif", boxSizing:"border-box", outline:"none" }} />
              </div>
              <div>
                <label style={{ display:"block", fontSize:11, color:"#8a9a9a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:6, fontFamily:"'DM Mono',monospace" }}>Email</label>
                <input type="email" placeholder="your@email.com" style={{ width:"100%", padding:"12px 14px", borderRadius:10, border:"1px solid #dde0de", fontSize:14, fontFamily:"'DM Sans',system-ui,sans-serif", boxSizing:"border-box", outline:"none" }} />
              </div>
              <div>
                <label style={{ display:"block", fontSize:11, color:"#8a9a9a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:6, fontFamily:"'DM Mono',monospace" }}>What are you interested in?</label>
                <select style={{ width:"100%", padding:"12px 14px", borderRadius:10, border:"1px solid #dde0de", fontSize:14, fontFamily:"'DM Sans',system-ui,sans-serif", boxSizing:"border-box", background:"#fff", outline:"none" }}>
                  <option>Access Bars Session</option>
                  <option>Access Bars Class</option>
                  {f.certs.includes("aff") && <option>Access Energetic Facelift</option>}
                  {f.certs.includes("bpf") && <option>Body Process Session</option>}
                  {f.certs.includes("bycf") && <option>Being You Class</option>}
                  {f.certs.includes("jcf") && <option>Joy of Business Class</option>}
                  <option>Other / Not sure yet</option>
                </select>
              </div>
              <div>
                <label style={{ display:"block", fontSize:11, color:"#8a9a9a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:6, fontFamily:"'DM Mono',monospace" }}>Message (optional)</label>
                <textarea placeholder="Anything you'd like to share..." rows={3} style={{ width:"100%", padding:"12px 14px", borderRadius:10, border:"1px solid #dde0de", fontSize:14, fontFamily:"'DM Sans',system-ui,sans-serif", boxSizing:"border-box", resize:"vertical", outline:"none" }} />
              </div>
              <button onClick={()=>setSent(true)} style={{ padding:"14px 16px", borderRadius:12, border:"none", background:"#1a3a4a", color:"#fff", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',system-ui,sans-serif", marginTop:4 }}>Send Request</button>
            </div>
          </>
        ) : (
          <div style={{ textAlign:"center", padding:"20px 0" }}>
            <div style={{ width:56, height:56, borderRadius:14, background:"#e8f5ee", display:"inline-flex", alignItems:"center", justifyContent:"center", marginBottom:16 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a6a4a" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h3 style={{ margin:"0 0 8px", fontSize:20, fontWeight:700, color:"#1a2a2a", fontFamily:"'Source Serif 4',Georgia,serif" }}>Request Sent</h3>
            <p style={{ margin:"0 0 24px", fontSize:14, color:"#6a7a7a", lineHeight:1.6 }}>Your booking request has been sent to {f.name}. They'll get back to you within 24–48 hours.</p>
            <button onClick={onClose} style={{ padding:"12px 24px", borderRadius:10, border:"1.5px solid #1a3a4a", background:"transparent", color:"#1a3a4a", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',system-ui,sans-serif" }}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function AccessPage() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<string | null>(null);
  const [cert, setCert] = useState<string | null>(null);
  const [lang, setLang] = useState<string | null>(null);
  const [loc, setLoc] = useState<Loc | null>(null);
  const [sort, setSort] = useState("relevance");
  const [filters, setFilters] = useState(false);
  const [locSt, setLocSt] = useState("idle");
  const [show, setShow] = useState(20);
  const [profileModal, setProfileModal] = useState<Facilitator | null>(null);
  const [bookingModal, setBookingModal] = useState<Facilitator | null>(null);

  const reqLoc = () => { setLocSt("req"); navigator.geolocation?.getCurrentPosition(p => { setLoc({lat:p.coords.latitude,lng:p.coords.longitude}); setLocSt("ok"); setSort("distance"); }, () => setLocSt("no")); };

  const ql = q.toLowerCase();
  const res = F.filter(f => {
    if (q && !f.name.toLowerCase().includes(ql) && !f.city.toLowerCase().includes(ql) && !f.country.toLowerCase().includes(ql)) return false;
    if (region && f.region !== region) return false;
    if (cert && !f.certs.includes(cert)) return false;
    if (lang && !f.languages.includes(lang)) return false;
    return true;
  }).sort((a,b) => {
    if (sort==="distance" && loc) return haversine(loc.lat,loc.lng,a.lat,a.lng) - haversine(loc.lat,loc.lng,b.lat,b.lng);
    if (sort==="classes") return b.classes - a.classes;
    return (b.featured?1:0)-(a.featured?1:0) || b.classes-a.classes;
  });

  const langs = [...new Set(F.flatMap(f=>f.languages))].sort();
  const af = (region?1:0)+(cert?1:0)+(lang?1:0);

  return (
    <div style={{ minHeight:"100vh", background:"#f6f7f6", fontFamily:"'DM Sans',system-ui,sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Source+Serif+4:wght@400;600;700&display=swap" rel="stylesheet" />
      <header style={{ background:"#1a3a4a", padding:"0 24px" }}>
        <div style={{ maxWidth:800, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:56 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}><div style={{ width:8, height:8, borderRadius:"50%", background:"#7ac0a0" }} /><span style={{ color:"#fff", fontSize:14, fontWeight:600, letterSpacing:"0.02em" }}>Access Consciousness</span></div>
          <span style={{ color:"rgba(255,255,255,0.4)", fontSize:10, fontFamily:"'DM Mono',monospace", letterSpacing:"0.08em" }}>PROTOTYPE · ASTRAL INTEGRATION</span>
        </div>
      </header>

      <div style={{ background:"linear-gradient(180deg,#1a3a4a 0%,#1a3a4a 55%,#f6f7f6 100%)", padding:"44px 24px 76px" }}>
        <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center" }}>
          <h1 style={{ margin:"0 0 8px", fontSize:32, fontWeight:700, color:"#fff", fontFamily:"'Source Serif 4',Georgia,serif", lineHeight:1.2 }}>Find Your Facilitator</h1>
          <p style={{ margin:"0 auto 32px", fontSize:15, color:"rgba(255,255,255,0.55)", lineHeight:1.5, maxWidth:460 }}>13,000+ certified facilitators and practitioners across 176 countries. Search by name, location, certification, or language.</p>
          <div style={{ background:"#fff", borderRadius:16, padding:"6px 6px 6px 20px", display:"flex", alignItems:"center", gap:12, boxShadow:"0 8px 32px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.08)", maxWidth:640, margin:"0 auto" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8a9a9a" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input type="text" value={q} onChange={e=>{setQ(e.target.value);setShow(20);}} placeholder="Search by name, city, or country..." style={{ flex:1, border:"none", outline:"none", fontSize:15, color:"#1a2a2a", fontFamily:"'DM Sans',system-ui,sans-serif", padding:"12px 0", background:"transparent" }} />
            {q && <button onClick={()=>setQ("")} style={{ background:"none", border:"none", cursor:"pointer", padding:"8px", color:"#8a9a9a", fontSize:18, lineHeight:1 }}>×</button>}
            {locSt==="idle" ? (
              <button onClick={reqLoc} style={{ display:"flex", alignItems:"center", gap:6, padding:"10px 18px", borderRadius:12, border:"none", background:"#f0f7f4", color:"#1a3a4a", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',system-ui,sans-serif", whiteSpace:"nowrap" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>Near me
              </button>
            ) : locSt==="ok" ? (
              <div style={{ display:"flex", alignItems:"center", gap:6, padding:"10px 18px", borderRadius:12, background:"#e8f5ee", fontSize:13, color:"#2a6a4a", fontFamily:"'DM Sans',system-ui,sans-serif" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Located</div>
            ) : <button onClick={reqLoc} style={{ padding:"10px 18px", borderRadius:12, border:"none", background:"#f0f2f1", color:"#8a9a9a", fontSize:13, cursor:"pointer" }}>Retry</button>}
          </div>

          <div style={{ display:"flex", justifyContent:"center", gap:24, marginTop:28 }}>
            {[{n:"94",l:"Facilitators"},{n:"35+",l:"Countries"},{n:"22",l:"Languages"},{n:"12",l:"Cert types"}].map(s => (
              <div key={s.l} style={{ textAlign:"center" }}>
                <div style={{ fontSize:20, fontWeight:700, color:"#fff", fontFamily:"'DM Mono',monospace" }}>{s.n}</div>
                <div style={{ fontSize:10, color:"rgba(255,255,255,0.4)", fontFamily:"'DM Mono',monospace", textTransform:"uppercase", letterSpacing:"0.08em", marginTop:2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth:800, margin:"-32px auto 0", padding:"0 24px 60px", position:"relative" }}>
        <div style={{ marginBottom:20, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
            <button onClick={()=>setFilters(!filters)} style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 14px", borderRadius:10, border:filters?"1.5px solid #1a3a4a":"1px solid #dde0de", background:filters?"#1a3a4a":"#fff", color:filters?"#fff":"#4a5a5a", fontSize:13, fontWeight:500, cursor:"pointer", fontFamily:"'DM Sans',system-ui,sans-serif" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M7 12h10M10 18h4"/></svg>Filters
              {af>0 && <span style={{ background:filters?"#7ac0a0":"#1a3a4a", color:"#fff", width:18, height:18, borderRadius:"50%", display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:700 }}>{af}</span>}
            </button>
            {region && <Pill label={REGIONS.find(r=>r.id===region)?.name} active onClick={()=>setRegion(null)} />}
            {cert && <Pill label={certAbbr(cert)} active onClick={()=>setCert(null)} />}
            {lang && <Pill label={lang} active onClick={()=>setLang(null)} />}
            {af>1 && <button onClick={()=>{setRegion(null);setCert(null);setLang(null);}} style={{ fontSize:12, color:"#8a9a9a", background:"none", border:"none", cursor:"pointer", textDecoration:"underline" }}>Clear all</button>}
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ fontSize:11, color:"#8a9a9a", fontFamily:"'DM Mono',monospace", textTransform:"uppercase", letterSpacing:"0.05em" }}>Sort</span>
            <select value={sort} onChange={e=>setSort(e.target.value)} style={{ padding:"6px 12px", borderRadius:8, border:"1px solid #dde0de", background:"#fff", fontSize:13, color:"#3a4a4a", cursor:"pointer", fontFamily:"'DM Sans',system-ui,sans-serif" }}>
              <option value="relevance">Relevance</option>
              {loc && <option value="distance">Nearest</option>}
              <option value="classes">Most Active</option>
            </select>
          </div>
        </div>

        {filters && (
          <div style={{ background:"#fff", borderRadius:16, padding:24, marginBottom:20, border:"1px solid #e8ebe9" }}>
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:11, color:"#8a9a9a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:10, fontFamily:"'DM Mono',monospace" }}>Region</div>
              <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>{REGIONS.map(r => <Pill key={r.id} label={r.name} active={region===r.id} onClick={()=>{setRegion(region===r.id?null:r.id);setShow(20);}} count={F.filter(f=>f.region===r.id).length} />)}</div>
            </div>
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:11, color:"#8a9a9a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:10, fontFamily:"'DM Mono',monospace" }}>Certification Level</div>
              <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>{CERTS.map(c => <Pill key={c.id} label={c.abbr} active={cert===c.id} onClick={()=>{setCert(cert===c.id?null:c.id);setShow(20);}} count={F.filter(f=>f.certs.includes(c.id)).length} />)}</div>
            </div>
            <div>
              <div style={{ fontSize:11, color:"#8a9a9a", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:10, fontFamily:"'DM Mono',monospace" }}>Language</div>
              <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>{langs.map(l => <Pill key={l} label={l} active={lang===l} onClick={()=>{setLang(lang===l?null:l);setShow(20);}} count={F.filter(f=>f.languages.includes(l)).length} />)}</div>
            </div>
          </div>
        )}

        <div style={{ marginBottom:16, display:"flex", alignItems:"baseline", justifyContent:"space-between" }}>
          <span style={{ fontSize:13, color:"#8a9a9a", fontFamily:"'DM Mono',monospace" }}>
            {res.length} facilitator{res.length!==1?"s":""}
            {q && ` matching "${q}"`}
            {region && ` in ${REGIONS.find(r=>r.id===region)?.name}`}
          </span>
          {res.length>0 && <span style={{ fontSize:11, color:"#aababa", fontFamily:"'DM Mono',monospace" }}>Showing {Math.min(show,res.length)} of {res.length}</span>}
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {res.slice(0,show).map(f => <Card key={f.id} f={f} loc={loc} onProfile={setProfileModal} onBook={setBookingModal} />)}
        </div>

        {show < res.length && (
          <div style={{ textAlign:"center", marginTop:24 }}>
            <button onClick={()=>setShow(v=>v+20)} style={{ padding:"14px 32px", borderRadius:12, border:"1.5px solid #1a3a4a", background:"#fff", color:"#1a3a4a", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',system-ui,sans-serif" }}>Show more facilitators</button>
          </div>
        )}

        {res.length === 0 && (
          <div style={{ textAlign:"center", padding:"60px 20px" }}>
            <div style={{ fontSize:16, color:"#5a6a6a", marginBottom:8, fontFamily:"'Source Serif 4',Georgia,serif" }}>No facilitators match your search</div>
            <div style={{ fontSize:13, color:"#8a9a9a", marginBottom:16 }}>Try broadening your filters or searching a different location.</div>
            <button onClick={()=>{setQ("");setRegion(null);setCert(null);setLang(null);setShow(20);}} style={{ fontSize:13, color:"#1a3a4a", background:"none", border:"none", cursor:"pointer", textDecoration:"underline" }}>Clear all filters</button>
          </div>
        )}

        <div style={{ marginTop:60, padding:"32px 0", borderTop:"1px solid #e8ebe9", textAlign:"center" }}>
          <div style={{ fontSize:11, color:"#aababa", fontFamily:"'DM Mono',monospace", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:6 }}>Prototype built by</div>
          <div style={{ fontSize:16, color:"#1a3a4a", fontWeight:700, fontFamily:"'Source Serif 4',Georgia,serif", marginBottom:4 }}>Astral Integration</div>
          <div style={{ fontSize:13, color:"#8a9a9a", marginBottom:2 }}>Custom digital infrastructure for education organizations</div>
          <div style={{ fontSize:12, color:"#aababa", fontFamily:"'DM Mono',monospace" }}>astralintegration.co</div>
        </div>
      </div>
      {profileModal && <ProfileModal f={profileModal} onClose={()=>setProfileModal(null)} loc={loc} />}
      {bookingModal && <BookingModal f={bookingModal} onClose={()=>setBookingModal(null)} />}
    </div>
  );
}