const groups = [
	'TRINIDAD DEL CERCADO (Bo)',
	'VILLA ALCALÁ (Bolivia)',
	'TARIJA (Bolivia)',
	'POTOSÍ (Bolivia)',
	'EL VILLAR (Bolivia)',
	'SOPACHUY (Bolivia)',
	'COBIJA (Bolivia)',
	'PADILLA (Bolivia)',
	'VILLA SERRANO (Bolivia)',
	'PADRE LAS CASAS (R.D)',
	'MONTE PLATA (R.D)',
	'STA.CRUZ DEL SEIBO (R.D)',
	'STO.DGO. NORTE (R.D)',
	'SABANA YEGUA (R.D)',
	'YAYAS DE VIAJAMA (R.D)',
	'ILOPANGO (El Salvador)',
	'ATE (Perú)',
	'PASTORES (Guatemala)',
	'GUALEGUAYCHÚ (Argentina)',
	'S.M CHALCHICUAUTLA (Mex)',
	'SANTIAGO DE TUXTLA (Mex)',
	'ATOYAC DE ÁLVAREZ (Mex)',
	'VILLA DE TUTUTEPEC (Mex)',
	'SAN ANDRÉS TUXTLA (Mex)',
	'SAN JUAN DE SABINAS (Mex)',
	'TATAHUICAPAN JUAREZ (Mex)',
	'MECAYAPAN (Mexico)',
	'LORETO (Mexico)',
	'TANCOCO (Mexico)',
	'GARCÍA (Mexico)',
	'HIDALGOTITLAN (Mexico)',
	'MARÍN (Mexico)',
	'ALPOYECA (México)',
	'BENITO JUÁREZ (México)',
	'ITURBIDE (Mexico)',
	'OTEAPAN (Mexico)',
	'LOS REYES (Mexico)',
	'LOS HERRERA (Mexico)',
	'CATEMACO (Mexico)',
	'CHINA (México)',
	'EDUARDO NERI (México)',
	'CHILPANCINGO (Mexico)',
	'GENERAL BRAVO (Mexico)',
	'COACOATZINTLA (México)',
	'HIGUERAS (Mexico)',
	'GENERAL ZARAGOZA (Mexico)',
	'BALANCAN (México)',
	'PÁTZCUARO (Mexico)',
	'NAOLINCO (Mexico)',
	'CITLALTEPETL (México)',
	'IGUALA DE LA IND.(Mexico)',
	'VILLA ALDAMA (Mexico)',
];

const bolivia = [
	'TRINIDAD DEL CERCADO (Bo)',
	'VILLA ALCALÁ (Bolivia)',
	'TARIJA (Bolivia)',
	'POTOSÍ (Bolivia)',
	'EL VILLAR (Bolivia)',
	'SOPACHUY (Bolivia)',
	'COBIJA (Bolivia)',
	'PADILLA (Bolivia)',
	'VILLA SERRANO (Bolivia)',
];

const republicaDominicana = [
	'PADRE LAS CASAS (R.D)',
	'MONTE PLATA (R.D)',
	'STA.CRUZ DEL SEIBO (R.D)',
	'STO.DGO. NORTE (R.D)',
	'SABANA YEGUA (R.D)',
	'YAYAS DE VIAJAMA (R.D)',
];

const mexico = [
	'S.M CHALCHICUAUTLA (Mex)',
	'SANTIAGO DE TUXTLA (Mex)',
	'ATOYAC DE ÁLVAREZ (Mex)',
	'VILLA DE TUTUTEPEC (Mex)',
	'SAN ANDRÉS TUXTLA (Mex)',
	'SAN JUAN DE SABINAS (Mex)',
	'TATAHUICAPAN JUAREZ (Mex)',
	'MECAYAPAN (Mexico)',
	'LORETO (Mexico)',
	'TANCOCO (Mexico)',
	'GARCÍA (Mexico)',
	'HIDALGOTITLAN (Mexico)',
	'MARÍN (Mexico)',
	'ALPOYECA (México)',
	'BENITO JUÁREZ (México)',
	'ITURBIDE (Mexico)',
	'OTEAPAN (Mexico)',
	'LOS REYES (Mexico)',
	'LOS HERRERA (Mexico)',
	'CATEMACO (Mexico)',
	'CHINA (México)',
	'EDUARDO NERI (México)',
	'CHILPANCINGO (Mexico)',
	'GENERAL BRAVO (Mexico)',
	'COACOATZINTLA (México)',
	'HIGUERAS (Mexico)',
	'GENERAL ZARAGOZA (Mexico)',
	'BALANCAN (México)',
	'PÁTZCUARO (Mexico)',
	'NAOLINCO (Mexico)',
	'CITLALTEPETL (México)',
	'IGUALA DE LA IND.(Mexico)',
];

const elSalvador = ['ILOPANGO (El Salvador)'];
const guatemala = ['PASTORES (Guatemala)'];
const argentina = ['GUALEGUAYCHÚ (Argentina)'];
const peru = ['ATE (Perú)'];

const test = ['VILLA ALDAMA (Mexico)', 'G. HELIODORO C. (Mexico)'];

export {
	groups,
	bolivia,
	republicaDominicana,
	mexico,
	elSalvador,
	guatemala,
	argentina,
	peru,
	test,
};

/*
const groups = [
	{
		id: '120363025129817506@g.us',
		name: 'TRINIDAD DEL CERCADO (Bo)',
	},
	{
		id: '120363027185860429@g.us',
		name: 'VILLA ALCALÁ (Bolivia)',
	},
	{
		id: '120363029719777953@g.us',
		name: 'TARIJA (Bolivia)',
	},
	{
		id: '120363045565638166@g.us',
		name: 'POTOSÍ (Bolivia)',
	},
	{
		id: '120363045695801072@g.us',
		name: 'EL VILLAR (Bolivia)',
	},
	{
		id: '120363026408003666@g.us',
		name: 'SOPACHUY (Bolivia)',
	},
	{
		id: '120363027699706769@g.us',
		name: 'COBIJA (Bolivia)',
	},
	{
		id: '120363028238734392@g.us',
		name: 'PADILLA (Bolivia)',
	},
	{
		id: '120363046717297737@g.us',
		name: 'VILLA SERRANO (Bolivia)',
	},
	{
		id: '120363026511816988@g.us',
		name: 'PADRE LAS CASAS (R.D)',
	},
	{
		id: '120363045227249457@g.us',
		name: 'MONTE PLATA (R.D)',
	},
	{
		id: '120363046004375601@g.us',
		name: 'STA.CRUZ DEL SEIBO (R.D)',
	},
	{
		id: '120363046324258846@g.us',
		name: 'STO.DGO. NORTE (R.D)',
	},
	{
		id: '120363047119438879@g.us',
		name: 'SABANA YEGUA (R.D)',
	},
	{
		id: '120363029300716390@g.us',
		name: 'YAYAS DE VIAJAMA (R.D)',
	},
	{
		id: '120363046363601635@g.us',
		name: 'ILOPANGO (El Salvador)',
	},
	{
		id: '120363047051808230@g.us',
		name: 'ATE (Perú)',
	},
	{
		id: '120363027005646117@g.us',
		name: 'PASTORES (Guatemala)',
	},
	{
		id: '120363030246570330@g.us',
		name: 'GUALEGUAYCHÚ (Argentina)',
	},
	{
		id: '120363044519308665@g.us',
		name: 'S.M CHALCHICUAUTLA (Mex)',
	},
	{
		id: '120363045492696660@g.us',
		name: 'SANTIAGO DE TUXTLA (Mex)',
	},
	{
		id: '120363025525062671@g.us',
		name: 'ATOYAC DE ÁLVAREZ (Mex)',
	},
	{
		id: '120363027266812136@g.us',
		name: 'VILLA DE TUTUTEPEC (Mex)',
	},
	{
		id: '120363029351354726@g.us',
		name: 'SAN ANDRÉS TUXTLA (Mex)',
	},
	{
		id: '120363044853780354@g.us',
		name: 'SAN JUAN DE SABINAS (Mex)',
	},
	{
		id: '120363045746362331@g.us',
		name: 'TATAHUICAPAN JUAREZ (Mex)',
	},
	{
		id: '120363028467888167@g.us',
		name: 'MECAYAPAN (Mexico)',
	},
	{
		id: '120363027248260201@g.us',
		name: 'LORETO (Mexico)',
	},
	{
		id: '120363027872190417@g.us',
		name: 'TANCOCO (Mexico)',
	},
	{
		id: '120363044977192587@g.us',
		name: 'GARCÍA (Mexico)',
	},
	{
		id: '120363046004345120@g.us',
		name: 'HIDALGOTITLAN (Mexico)',
	},
	{
		id: '120363047049124583@g.us',
		name: 'MARÍN (Mexico)',
	},
	{
		id: '120363027865140719@g.us',
		name: 'ALPOYECA (México)',
	},
	{
		id: '120363028183245200@g.us',
		name: 'BENITO JUÁREZ (México)',
	},
	{
		id: '120363029194448825@g.us',
		name: 'ITURBIDE (Mexico)',
	},
	{
		id: '120363031794745412@g.us',
		name: 'OTEAPAN (Mexico)',
	},
	{
		id: '120363045571537810@g.us',
		name: 'LOS REYES (Mexico)',
	},
	{
		id: '120363028470530107@g.us',
		name: 'LOS HERRERA (Mexico)',
	},
	{
		id: '120363029046033560@g.us',
		name: 'CATEMACO (Mexico)',
	},
	{
		id: '120363044287957373@g.us',
		name: 'CHINA (México)',
	},
	{
		id: '120363044556235087@g.us',
		name: 'EDUARDO NERI (México)',
	},
	{
		id: '120363049419846676@g.us',
		name: 'CHILPANCINGO (Mexico)',
	},
	{
		id: '120363029343214402@g.us',
		name: 'GENERAL BRAVO (Mexico)',
	},
	{
		id: '120363044101855999@g.us',
		name: 'COACOATZINTLA (México)',
	},
	{
		id: '120363044383171198@g.us',
		name: 'HIGUERAS (Mexico)',
	},
	{
		id: '120363045449547982@g.us',
		name: 'GENERAL ZARAGOZA (Mexico)',
	},
	{
		id: '120363045816587284@g.us',
		name: 'BALANCAN (México)',
	},
	{
		id: '120363027390548787@g.us',
		name: 'PÁTZCUARO (Mexico)',
	},
	{
		id: '120363027604581350@g.us',
		name: 'NAOLINCO (Mexico)',
	},
	{
		id: '120363045953845884@g.us',
		name: 'CITLALTEPETL (México)',
	},
];

const mexico = [
	{
		id: '120363044519308665@g.us',
		name: 'S.M CHALCHICUAUTLA (Mex)',
	},
	{
		id: '120363045492696660@g.us',
		name: 'SANTIAGO DE TUXTLA (Mex)',
	},
	{
		id: '120363025525062671@g.us',
		name: 'ATOYAC DE ÁLVAREZ (Mex)',
	},
	{
		id: '120363027266812136@g.us',
		name: 'VILLA DE TUTUTEPEC (Mex)',
	},
	{
		id: '120363029351354726@g.us',
		name: 'SAN ANDRÉS TUXTLA (Mex)',
	},
	{
		id: '120363044853780354@g.us',
		name: 'SAN JUAN DE SABINAS (Mex)',
	},
	{
		id: '120363045746362331@g.us',
		name: 'TATAHUICAPAN JUAREZ (Mex)',
	},
	{
		id: '120363028467888167@g.us',
		name: 'MECAYAPAN (Mexico)',
	},
	{
		id: '120363027248260201@g.us',
		name: 'LORETO (Mexico)',
	},
	{
		id: '120363027872190417@g.us',
		name: 'TANCOCO (Mexico)',
	},
	{
		id: '120363044977192587@g.us',
		name: 'GARCÍA (Mexico)',
	},
	{
		id: '120363046004345120@g.us',
		name: 'HIDALGOTITLAN (Mexico)',
	},
	{
		id: '120363047049124583@g.us',
		name: 'MARÍN (Mexico)',
	},
	{
		id: '120363027865140719@g.us',
		name: 'ALPOYECA (México)',
	},
	{
		id: '120363028183245200@g.us',
		name: 'BENITO JUÁREZ (México)',
	},
	{
		id: '120363029194448825@g.us',
		name: 'ITURBIDE (Mexico)',
	},
	{
		id: '120363031794745412@g.us',
		name: 'OTEAPAN (Mexico)',
	},
	{
		id: '120363045571537810@g.us',
		name: 'LOS REYES (Mexico)',
	},
	{
		id: '120363028470530107@g.us',
		name: 'LOS HERRERA (Mexico)',
	},
	{
		id: '120363029046033560@g.us',
		name: 'CATEMACO (Mexico)',
	},
	{
		id: '120363044287957373@g.us',
		name: 'CHINA (México)',
	},
	{
		id: '120363044556235087@g.us',
		name: 'EDUARDO NERI (México)',
	},
	{
		id: '120363049419846676@g.us',
		name: 'CHILPANCINGO (Mexico)',
	},
	{
		id: '120363029343214402@g.us',
		name: 'GENERAL BRAVO (Mexico)',
	},
	{
		id: '120363044101855999@g.us',
		name: 'COACOATZINTLA (México)',
	},
	{
		id: '120363044383171198@g.us',
		name: 'HIGUERAS (Mexico)',
	},
	{
		id: '120363045449547982@g.us',
		name: 'GENERAL ZARAGOZA (Mexico)',
	},
	{
		id: '120363045816587284@g.us',
		name: 'BALANCAN (México)',
	},
	{
		id: '120363027390548787@g.us',
		name: 'PÁTZCUARO (Mexico)',
	},
	{
		id: '120363027604581350@g.us',
		name: 'NAOLINCO (Mexico)',
	},
	{
		id: '120363045953845884@g.us',
		name: 'CITLALTEPETL (México)',
	},
];

const republicaDominicana = [
	{
		id: '120363026511816988@g.us',
		name: 'PADRE LAS CASAS (R.D)',
	},
	{
		id: '120363045227249457@g.us',
		name: 'MONTE PLATA (R.D)',
	},
	{
		id: '120363046004375601@g.us',
		name: 'STA.CRUZ DEL SEIBO (R.D)',
	},
	{
		id: '120363046324258846@g.us',
		name: 'STO.DGO. NORTE (R.D)',
	},
	{
		id: '120363047119438879@g.us',
		name: 'SABANA YEGUA (R.D)',
	},
	{
		id: '120363029300716390@g.us',
		name: 'YAYAS DE VIAJAMA (R.D)',
	},
];

const bolivia = [
	{
		id: '120363025129817506@g.us',
		name: 'TRINIDAD DEL CERCADO (Bo)',
	},
	{
		id: '120363027185860429@g.us',
		name: 'VILLA ALCALÁ (Bolivia)',
	},
	{
		id: '120363029719777953@g.us',
		name: 'TARIJA (Bolivia)',
	},
	{
		id: '120363045565638166@g.us',
		name: 'POTOSÍ (Bolivia)',
	},
	{
		id: '120363045695801072@g.us',
		name: 'EL VILLAR (Bolivia)',
	},
	{
		id: '120363026408003666@g.us',
		name: 'SOPACHUY (Bolivia)',
	},
	{
		id: '120363027699706769@g.us',
		name: 'COBIJA (Bolivia)',
	},
	{
		id: '120363028238734392@g.us',
		name: 'PADILLA (Bolivia)',
	},
	{
		id: '120363046717297737@g.us',
		name: 'VILLA SERRANO (Bolivia)',
	},
];

const test = [
	{
		id: '120363027373281409@g.us',
		name: 'VILLA ALDAMA (Mexico)',
	},
	{
		id: '120363029412676896@g.us',
		name: 'G. HELIODORO C. (Mexico)',
	},
];
*/
