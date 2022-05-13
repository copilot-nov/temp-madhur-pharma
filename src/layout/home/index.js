import React from 'react';
import AddModal from '../../components/addmodal';
import Navbar from '../../components/navbar'
import TextInput from '../../components/searchInput';
import SelectModule from '../../components/selectInput';
import TailwindTableCss from '../../components/tailwind-table';
import TableActionCell from '../../components/tailwind-table/tableActionCell'

const Homelayout = () => {
    return (
        <div>
            <Navbar />
            <div className='sm:mx-6 mx-2 mt-10'>
                <SelectModule selectMenulist={selectMenulist} />
            </div>
            <div className="grid grid-cols-6 gap-6 sm:mx-6 mx-2 mt-8">
                <div className="col-span-6 sm:col-span-3">
                    <div className='flex items-center justify-start'>
                        <TextInput />
                        <AddModal
                            titleModal='Add'
                            classes='flex items-center justify-start px-3 py-2 cursor-pointer p-1 text-green-900'
                            btnTitle={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            }
                        />
                    </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <div className='flex items-center justify-center'>
                        {/* <TablePagination /> */}
                    </div>
                </div>
            </div>
            <div className='sm:mx-6 mx-2 mt-6 shadow'>
                <TailwindTableCss columns={columns} data={data} />
            </div>
        </div>
    );
};

export default Homelayout;


const selectMenulist = [
    { name: 'Select Module' },
    { name: 'Customer Management' },
    { name: 'User Management' },
    { name: 'Process Management' },
    { name: 'Product Management' },
    { name: 'Materil Management' },
    { name: 'Ingredient Management' },
    { name: 'Order Management' },
]

const columns = [
    {
        name: "Name",
        selector: "Name",
        sortable: true,
        // style: {
        //     display: 'flex',
        //     justifyContent: 'center',
        // },
        // cell: (row) => (<span>{row?.title} {row?.id} </span>)
    },
    {
        name: "Description",
        selector: "Description",
        sortable: true,
    },
    {
        name: "Column 1",
        selector: "Column1",
        sortable: true,
    },
    {
        name: "Column 2",
        selector: "Column2",
        sortable: true,
    },
    {
        name: "Column 3",
        selector: "Column3",
        sortable: true,
    },
    {
        name: "Created On",
        selector: "CreatedOn",
        sortable: true,
    },
    {
        name: "Created By",
        selector: "CreatedBy",
        sortable: true,
    }, {
        name: "Last Modified",
        selector: "LastModified",
        sortable: true,
    },
    {
        name: "Action",
        // selector: "LastModified",
        // sortable: true,
        cell: (row) => (
            <TableActionCell row={row} />
        )
    },

];

const data = [{
    "id": 60,
    "Name": "Benzocaine",
    "Description": "Topex",
    "Column1": "Velikiye Borki",
    "Column2": "Vinyl",
    "Column3": "Supervisor",
    "CreatedOn": "10/24/2021",
    "CreatedBy": "6/12/2021",
    "LastModified": "8/2/2021",
    "Action": "2/22/2022"
}, {
    "id": 35,
    "Name": "Fucus Vesiculosus, Spongia Tosta, Glandula Suprarenalis Suis, Pituitary, Thyroidinum, Bromium, Calcarea Carbonica",
    "Description": "Thyropar",
    "Column1": "Haizigou",
    "Column2": "Steel",
    "Column3": "Electrician",
    "CreatedOn": "9/21/2021",
    "CreatedBy": "2/7/2022",
    "LastModified": "6/14/2021",
    "Action": "2/22/2022"
}, {
    "id": 18,
    "Name": "Atomoxetine hydrochloride",
    "Description": "Strattera",
    "Column1": "Sandnes",
    "Column2": "Glass",
    "Column3": "Construction Foreman",
    "CreatedOn": "6/2/2021",
    "CreatedBy": "9/30/2021",
    "LastModified": "2/14/2022",
    "Action": "6/26/2021"
}, {
    "id": 74,
    "Name": "RIVASTIGMINE TARTRATE",
    "Description": "RIVASTIGMINE TARTRATE",
    "Column1": "Burla",
    "Column2": "Stone",
    "Column3": "Project Manager",
    "CreatedOn": "12/23/2021",
    "CreatedBy": "8/13/2021",
    "LastModified": "5/28/2021",
    "Action": "2/1/2022"
}, {
    "id": 63,
    "Name": "Divalproex Sodium",
    "Description": "Divalproex Sodium",
    "Column1": "San Manuel Chaparrón",
    "Column2": "Stone",
    "Column3": "Surveyor",
    "CreatedOn": "1/23/2022",
    "CreatedBy": "1/31/2022",
    "LastModified": "9/5/2021",
    "Action": "7/8/2021"
}, {
    "id": 65,
    "Name": "OCTINOXATE and TITANIUM DIOXIDE",
    "Description": "AMOREPACIFIC",
    "Column1": "Lorut",
    "Column2": "Steel",
    "Column3": "Surveyor",
    "CreatedOn": "8/9/2021",
    "CreatedBy": "11/17/2021",
    "LastModified": "11/28/2021",
    "Action": "5/23/2021"
}, {
    "id": 16,
    "Name": "salicylic acid",
    "Description": "Glytone acne treatment facial cleanser",
    "Column1": "Qabaqçöl",
    "Column2": "Steel",
    "Column3": "Construction Foreman",
    "CreatedOn": "3/5/2022",
    "CreatedBy": "7/21/2021",
    "LastModified": "10/8/2021",
    "Action": "10/8/2021"
}, {
    "id": 50,
    "Name": "Acetaminophen",
    "Description": "Childrens Acetaminophen",
    "Column1": "Baitashan",
    "Column2": "Brass",
    "Column3": "Construction Worker",
    "CreatedOn": "7/3/2021",
    "CreatedBy": "2/27/2022",
    "LastModified": "9/26/2021",
    "Action": "10/23/2021"
}, {
    "id": 2,
    "Name": "Leflunomide",
    "Description": "Leflunomide",
    "Column1": "Baloc",
    "Column2": "Rubber",
    "Column3": "Project Manager",
    "CreatedOn": "3/2/2022",
    "CreatedBy": "2/7/2022",
    "LastModified": "11/6/2021",
    "Action": "4/25/2022"
}, {
    "id": 93,
    "Name": "megesterol acetate",
    "Description": "Megace ES",
    "Column1": "Shuiyuesi",
    "Column2": "Stone",
    "Column3": "Construction Worker",
    "CreatedOn": "5/26/2021",
    "CreatedBy": "2/7/2022",
    "LastModified": "9/12/2021",
    "Action": "5/1/2022"
}, {
    "id": 63,
    "Name": "Benzalkonium Chloride",
    "Description": "Cinnamon Spice Antibacterial Foaming Hand Wash",
    "Column1": "Al Manzilah",
    "Column2": "Rubber",
    "Column3": "Subcontractor",
    "CreatedOn": "8/18/2021",
    "CreatedBy": "10/20/2021",
    "LastModified": "2/13/2022",
    "Action": "6/16/2021"
}, {
    "id": 8,
    "Name": "MAGNESIA PHOSPHORICA",
    "Description": "MAGNESIA PHOSPHORICA",
    "Column1": "Banjar Teguan",
    "Column2": "Aluminum",
    "Column3": "Estimator",
    "CreatedOn": "5/18/2021",
    "CreatedBy": "8/12/2021",
    "LastModified": "5/2/2022",
    "Action": "10/16/2021"
}, {
    "id": 84,
    "Name": "penicillium chrysogenum var. chrysogenum",
    "Description": "Pleo Not",
    "Column1": "Yinhedahan’er",
    "Column2": "Stone",
    "Column3": "Engineer",
    "CreatedOn": "3/16/2022",
    "CreatedBy": "10/15/2021",
    "LastModified": "1/9/2022",
    "Action": "10/14/2021"
}, {
    "id": 45,
    "Name": "Titanium Dioxide",
    "Description": "ck one airlight pressed powder spf 15",
    "Column1": "Klapagada",
    "Column2": "Aluminum",
    "Column3": "Electrician",
    "CreatedOn": "11/20/2021",
    "CreatedBy": "9/25/2021",
    "LastModified": "7/26/2021",
    "Action": "10/4/2021"
}, {
    "id": 34,
    "Name": "House Dust",
    "Description": "House Dust",
    "Column1": "Qŭrghontepa",
    "Column2": "Steel",
    "Column3": "Engineer",
    "CreatedOn": "10/16/2021",
    "CreatedBy": "5/9/2022",
    "LastModified": "9/6/2021",
    "Action": "1/31/2022"
}, {
    "id": 17,
    "Name": "Povidone Iodine",
    "Description": "MedPride",
    "Column1": "Engel’-Yurt",
    "Column2": "Vinyl",
    "Column3": "Construction Expeditor",
    "CreatedOn": "2/19/2022",
    "CreatedBy": "6/11/2021",
    "LastModified": "3/21/2022",
    "Action": "10/16/2021"
}, {
    "id": 95,
    "Name": "BUMETANIDE",
    "Description": "Bumetanide",
    "Column1": "Santai",
    "Column2": "Vinyl",
    "Column3": "Electrician",
    "CreatedOn": "5/13/2021",
    "CreatedBy": "11/6/2021",
    "LastModified": "3/13/2022",
    "Action": "8/16/2021"
}, {
    "id": 98,
    "Name": "Promethazine Hydrochloride",
    "Description": "Promethazine Hydrochloride",
    "Column1": "Makurazaki",
    "Column2": "Granite",
    "Column3": "Surveyor",
    "CreatedOn": "10/23/2021",
    "CreatedBy": "7/28/2021",
    "LastModified": "12/14/2021",
    "Action": "11/20/2021"
}, {
    "id": 46,
    "Name": "Acetaminophen, Dextromethorphan Hydrobromide, and Doxylamine Succinate",
    "Description": "Vicks NyQuil",
    "Column1": "Ban Haet",
    "Column2": "Vinyl",
    "Column3": "Project Manager",
    "CreatedOn": "1/30/2022",
    "CreatedBy": "4/8/2022",
    "LastModified": "10/7/2021",
    "Action": "10/3/2021"
}, {
    "id": 92,
    "Name": "Dimethicone",
    "Description": "PLAGENTRA MOTHERS BELLY",
    "Column1": "Uyen Hung",
    "Column2": "Aluminum",
    "Column3": "Construction Manager",
    "CreatedOn": "9/17/2021",
    "CreatedBy": "9/1/2021",
    "LastModified": "1/2/2022",
    "Action": "12/17/2021"
}, {
    "id": 51,
    "Name": "fibrinogen human and thrombin human",
    "Description": "TISSEEL",
    "Column1": "Niort",
    "Column2": "Rubber",
    "Column3": "Construction Expeditor",
    "CreatedOn": "9/19/2021",
    "CreatedBy": "7/8/2021",
    "LastModified": "10/29/2021",
    "Action": "9/26/2021"
}, {
    "id": 36,
    "Name": "SPONGIA OFFICINALIS SKELETON, ROASTED",
    "Description": "SPONGIA TOSTA",
    "Column1": "Potosí",
    "Column2": "Stone",
    "Column3": "Supervisor",
    "CreatedOn": "3/31/2022",
    "CreatedBy": "2/25/2022",
    "LastModified": "4/30/2022",
    "Action": "11/24/2021"
}, {
    "id": 75,
    "Name": "Ziprasidone Hydrochloride",
    "Description": "Ziprasidone Hydrochloride",
    "Column1": "Parbatipur",
    "Column2": "Rubber",
    "Column3": "Construction Foreman",
    "CreatedOn": "7/1/2021",
    "CreatedBy": "9/21/2021",
    "LastModified": "5/30/2021",
    "Action": "7/29/2021"
}, {
    "id": 25,
    "Name": "Gabapentin",
    "Description": "Gabapentin",
    "Column1": "San Francisco de la Paz",
    "Column2": "Plastic",
    "Column3": "Construction Foreman",
    "CreatedOn": "5/14/2021",
    "CreatedBy": "11/11/2021",
    "LastModified": "11/27/2021",
    "Action": "2/18/2022"
}, {
    "id": 54,
    "Name": "Ethyl Alcohol",
    "Description": "Lucky",
    "Column1": "Jimo",
    "Column2": "Stone",
    "Column3": "Supervisor",
    "CreatedOn": "7/18/2021",
    "CreatedBy": "11/1/2021",
    "LastModified": "7/26/2021",
    "Action": "4/30/2022"
}, {
    "id": 80,
    "Name": "Levonorgestrel and Ethinyl Estradiol",
    "Description": "Levora",
    "Column1": "Águas Belas",
    "Column2": "Plastic",
    "Column3": "Engineer",
    "CreatedOn": "11/13/2021",
    "CreatedBy": "10/13/2021",
    "LastModified": "10/15/2021",
    "Action": "4/11/2022"
}, {
    "id": 67,
    "Name": "Yellow Hornet hymenoptera venom Multidose",
    "Description": "Yellow Hornet hymenoptera venom Multidose",
    "Column1": "Erie",
    "Column2": "Aluminum",
    "Column3": "Construction Foreman",
    "CreatedOn": "10/18/2021",
    "CreatedBy": "5/18/2021",
    "LastModified": "12/23/2021",
    "Action": "1/14/2022"
}, {
    "id": 1,
    "Name": "Diclofenac Sodium",
    "Description": "Diclofenac Sodium",
    "Column1": "Charlotte",
    "Column2": "Aluminum",
    "Column3": "Estimator",
    "CreatedOn": "9/19/2021",
    "CreatedBy": "6/22/2021",
    "LastModified": "5/15/2021",
    "Action": "5/1/2022"
}, {
    "id": 89,
    "Name": "Acetaminophen",
    "Description": "dg health pain relief",
    "Column1": "Bolian",
    "Column2": "Steel",
    "Column3": "Project Manager",
    "CreatedOn": "7/17/2021",
    "CreatedBy": "5/14/2021",
    "LastModified": "4/24/2022",
    "Action": "11/15/2021"
}, {
    "id": 63,
    "Name": "Tretinoin",
    "Description": "Retin-A",
    "Column1": "Lunel",
    "Column2": "Wood",
    "Column3": "Project Manager",
    "CreatedOn": "12/9/2021",
    "CreatedBy": "11/20/2021",
    "LastModified": "3/5/2022",
    "Action": "2/6/2022"
}, {
    "id": 58,
    "Name": "Minoxidil",
    "Description": "Mens Hair Regrowth Treatment",
    "Column1": "Longra",
    "Column2": "Vinyl",
    "Column3": "Project Manager",
    "CreatedOn": "7/27/2021",
    "CreatedBy": "2/17/2022",
    "LastModified": "10/6/2021",
    "Action": "1/10/2022"
}, {
    "id": 17,
    "Name": "Fluoride",
    "Description": "Smart Sense",
    "Column1": "Sucun",
    "Column2": "Rubber",
    "Column3": "Estimator",
    "CreatedOn": "11/13/2021",
    "CreatedBy": "4/24/2022",
    "LastModified": "2/10/2022",
    "Action": "11/13/2021"
}, {
    "id": 21,
    "Name": "Risperidone",
    "Description": "Risperidone",
    "Column1": "Old Harbour Bay",
    "Column2": "Granite",
    "Column3": "Supervisor",
    "CreatedOn": "10/19/2021",
    "CreatedBy": "6/3/2021",
    "LastModified": "2/10/2022",
    "Action": "10/20/2021"
}, {
    "id": 14,
    "Name": "TechneScan PYP",
    "Description": "KIT FOR THE PREPARATION OF TC 99M PYROPHOSPHATE",
    "Column1": "Pryazovs’ke",
    "Column2": "Rubber",
    "Column3": "Subcontractor",
    "CreatedOn": "4/23/2022",
    "CreatedBy": "6/2/2021",
    "LastModified": "1/20/2022",
    "Action": "7/28/2021"
}, {
    "id": 68,
    "Name": "IBUPROFEN",
    "Description": "Ibuprofen",
    "Column1": "Baiyan",
    "Column2": "Rubber",
    "Column3": "Construction Worker",
    "CreatedOn": "10/9/2021",
    "CreatedBy": "5/10/2022",
    "LastModified": "4/24/2022",
    "Action": "10/23/2021"
}, {
    "id": 1,
    "Name": "WARFARIN SODIUM",
    "Description": "WARFARIN SODIUM",
    "Column1": "Radziszów",
    "Column2": "Plastic",
    "Column3": "Construction Foreman",
    "CreatedOn": "12/22/2021",
    "CreatedBy": "11/5/2021",
    "LastModified": "8/27/2021",
    "Action": "11/2/2021"
}, {
    "id": 5,
    "Name": "dimethicone, octinoxate, oxybenzone",
    "Description": "Softlips Cube Pomegranate Blueberry",
    "Column1": "Zeewolde",
    "Column2": "Plastic",
    "Column3": "Estimator",
    "CreatedOn": "10/5/2021",
    "CreatedBy": "12/17/2021",
    "LastModified": "3/12/2022",
    "Action": "11/20/2021"
}, {
    "id": 85,
    "Name": "BENZALKONIUM CHLORIDE, LIDOCAINE, WATER, ISOPROPYL ALCOHOL, ASPIRIN",
    "Description": "FIRST AID Contains 101 PIECES",
    "Column1": "Quimper",
    "Column2": "Plastic",
    "Column3": "Electrician",
    "CreatedOn": "5/18/2021",
    "CreatedBy": "5/9/2022",
    "LastModified": "9/21/2021",
    "Action": "5/16/2021"
}, {
    "id": 31,
    "Name": "Acetaminophen",
    "Description": "Topcare childrens pain relief",
    "Column1": "Itabaianinha",
    "Column2": "Vinyl",
    "Column3": "Surveyor",
    "CreatedOn": "5/31/2021",
    "CreatedBy": "8/14/2021",
    "LastModified": "11/10/2021",
    "Action": "3/28/2022"
}, {
    "id": 6,
    "Name": "oxymetazoline hydrochloride",
    "Description": "Nasal",
    "Column1": "Kiboga",
    "Column2": "Brass",
    "Column3": "Construction Manager",
    "CreatedOn": "4/8/2022",
    "CreatedBy": "8/16/2021",
    "LastModified": "12/17/2021",
    "Action": "4/5/2022"
}, {
    "id": 1,
    "Name": "Arnica, Bellis, Chamomilla, Mag phos, Symphytum, Acacia gum, lactose, magnesium stearate, corn starch, sucrose",
    "Description": "RealHeal",
    "Column1": "Horqueta",
    "Column2": "Aluminum",
    "Column3": "Architect",
    "CreatedOn": "1/27/2022",
    "CreatedBy": "3/20/2022",
    "LastModified": "3/19/2022",
    "Action": "11/10/2021"
}, {
    "id": 41,
    "Name": "OCTINOXATE and TITANIUM DIOXIDE",
    "Description": "CLE DE PEAU BEAUTE RADIANT FLUID FOUNDATION",
    "Column1": "Tlogosari",
    "Column2": "Aluminum",
    "Column3": "Construction Foreman",
    "CreatedOn": "5/31/2021",
    "CreatedBy": "3/24/2022",
    "LastModified": "6/24/2021",
    "Action": "3/29/2022"
}, {
    "id": 54,
    "Name": "ZINC OXIDE",
    "Description": "ATTITUDE",
    "Column1": "Kleszczów",
    "Column2": "Glass",
    "Column3": "Electrician",
    "CreatedOn": "2/22/2022",
    "CreatedBy": "7/5/2021",
    "LastModified": "12/30/2021",
    "Action": "11/12/2021"
}, {
    "id": 2,
    "Name": "dextromethorphan hbr, guaifenesin, phenylephrine hcl",
    "Description": "cough syrup",
    "Column1": "Kodinsk",
    "Column2": "Vinyl",
    "Column3": "Architect",
    "CreatedOn": "5/29/2021",
    "CreatedBy": "12/21/2021",
    "LastModified": "9/28/2021",
    "Action": "7/1/2021"
}, {
    "id": 16,
    "Name": "Benzocaine",
    "Description": "Finafta",
    "Column1": "Ardee",
    "Column2": "Glass",
    "Column3": "Architect",
    "CreatedOn": "10/7/2021",
    "CreatedBy": "4/27/2022",
    "LastModified": "12/21/2021",
    "Action": "2/16/2022"
}, {
    "id": 56,
    "Name": "Nystatin",
    "Description": "Nystatin",
    "Column1": "San Antonio",
    "Column2": "Brass",
    "Column3": "Supervisor",
    "CreatedOn": "12/23/2021",
    "CreatedBy": "10/6/2021",
    "LastModified": "3/31/2022",
    "Action": "6/14/2021"
}, {
    "id": 40,
    "Name": "Ibuprofen",
    "Description": "Childrens Ibuprofen",
    "Column1": "La Purisima",
    "Column2": "Brass",
    "Column3": "Electrician",
    "CreatedOn": "2/24/2022",
    "CreatedBy": "9/13/2021",
    "LastModified": "10/13/2021",
    "Action": "5/10/2022"
}, {
    "id": 27,
    "Name": "psyllium husk",
    "Description": "Smooth texture Orange flavor",
    "Column1": "Tukan",
    "Column2": "Plastic",
    "Column3": "Supervisor",
    "CreatedOn": "4/10/2022",
    "CreatedBy": "7/12/2021",
    "LastModified": "9/14/2021",
    "Action": "2/25/2022"
}, {
    "id": 77,
    "Name": "Psyllium Husk",
    "Description": "Natural Fiber Therapy",
    "Column1": "Su’ao",
    "Column2": "Aluminum",
    "Column3": "Architect",
    "CreatedOn": "10/20/2021",
    "CreatedBy": "2/18/2022",
    "LastModified": "12/11/2021",
    "Action": "9/18/2021"
}, {
    "id": 79,
    "Name": "metoprolol succinate",
    "Description": "Metoprolol Succinate",
    "Column1": "Burgkirchen",
    "Column2": "Plexiglass",
    "Column3": "Architect",
    "CreatedOn": "8/7/2021",
    "CreatedBy": "8/2/2021",
    "LastModified": "8/19/2021",
    "Action": "12/19/2021"
}, {
    "id": 65,
    "Name": "Octinoxate and Octisalate",
    "Description": "Nu Skin Nu Colour",
    "Column1": "Pueai Noi",
    "Column2": "Steel",
    "Column3": "Surveyor",
    "CreatedOn": "2/9/2022",
    "CreatedBy": "4/25/2022",
    "LastModified": "8/29/2021",
    "Action": "3/4/2022"
}, {
    "id": 27,
    "Name": "Oxygen",
    "Description": "Oxygen",
    "Column1": "Karangpaningal",
    "Column2": "Plastic",
    "Column3": "Estimator",
    "CreatedOn": "2/20/2022",
    "CreatedBy": "8/30/2021",
    "LastModified": "10/22/2021",
    "Action": "6/18/2021"
}, {
    "id": 25,
    "Name": "staphylococcus aureus",
    "Description": "Pleo San Staph",
    "Column1": "Quito",
    "Column2": "Granite",
    "Column3": "Surveyor",
    "CreatedOn": "6/21/2021",
    "CreatedBy": "4/13/2022",
    "LastModified": "3/14/2022",
    "Action": "10/25/2021"
}, {
    "id": 42,
    "Name": "verapamil hydrochloride",
    "Description": "verapamil hydrochloride",
    "Column1": "Losino-Petrovskiy",
    "Column2": "Rubber",
    "Column3": "Supervisor",
    "CreatedOn": "4/16/2022",
    "CreatedBy": "12/24/2021",
    "LastModified": "10/18/2021",
    "Action": "12/12/2021"
}, {
    "id": 1,
    "Name": "vitamin a palmitate, ascorbic acid, cholecalciferol, alpha.-tocopherol succinate, d- thiamine hydrochloride, riboflavin 5-phosphate sodium, cyanocobalamin, niacinamide, pyridoxine hydrochloride and sodium fluoride",
    "Description": "Multi Vitamin Drops with Fluoride",
    "Column1": "Wa’eryi",
    "Column2": "Plexiglass",
    "Column3": "Construction Manager",
    "CreatedOn": "8/9/2021",
    "CreatedBy": "9/12/2021",
    "LastModified": "1/2/2022",
    "Action": "4/3/2022"
}, {
    "id": 84,
    "Name": "Cyclobenzaprine Hydrochloride",
    "Description": "Cyclobenzaprine Hydrochloride",
    "Column1": "Bailai",
    "Column2": "Plastic",
    "Column3": "Supervisor",
    "CreatedOn": "8/11/2021",
    "CreatedBy": "7/12/2021",
    "LastModified": "12/30/2021",
    "Action": "8/20/2021"
}, {
    "id": 53,
    "Name": "Potassium Chloride",
    "Description": "Potassium Chloride",
    "Column1": "Terter",
    "Column2": "Glass",
    "Column3": "Construction Expeditor",
    "CreatedOn": "9/4/2021",
    "CreatedBy": "8/7/2021",
    "LastModified": "4/17/2022",
    "Action": "5/29/2021"
}, {
    "id": 87,
    "Name": "risperidone",
    "Description": "Risperidone",
    "Column1": "Cottbus",
    "Column2": "Granite",
    "Column3": "Construction Manager",
    "CreatedOn": "3/30/2022",
    "CreatedBy": "9/21/2021",
    "LastModified": "12/1/2021",
    "Action": "5/26/2021"
}, {
    "id": 59,
    "Name": "Benzocaine",
    "Description": "Superdent",
    "Column1": "Shagang",
    "Column2": "Brass",
    "Column3": "Subcontractor",
    "CreatedOn": "1/19/2022",
    "CreatedBy": "1/8/2022",
    "LastModified": "3/13/2022",
    "Action": "5/27/2021"
}, {
    "id": 66,
    "Name": "fluoxetine hydrochloride",
    "Description": "FLUOXETINE",
    "Column1": "Darkovice",
    "Column2": "Aluminum",
    "Column3": "Construction Manager",
    "CreatedOn": "4/18/2022",
    "CreatedBy": "11/23/2021",
    "LastModified": "8/7/2021",
    "Action": "5/31/2021"
}, {
    "id": 53,
    "Name": "Desogestrel and Ethinyl Estradiol",
    "Description": "Reclipsen",
    "Column1": "Porangatu",
    "Column2": "Vinyl",
    "Column3": "Engineer",
    "CreatedOn": "10/2/2021",
    "CreatedBy": "5/23/2021",
    "LastModified": "5/10/2022",
    "Action": "6/30/2021"
}, {
    "id": 23,
    "Name": "Homosalate, Octinoxate, Octisalate, Oxybenzone",
    "Description": "Bioelements, Inc.",
    "Column1": "Nouaseur",
    "Column2": "Granite",
    "Column3": "Construction Worker",
    "CreatedOn": "11/11/2021",
    "CreatedBy": "1/28/2022",
    "LastModified": "1/19/2022",
    "Action": "4/27/2022"
}, {
    "id": 69,
    "Name": "Gabapentin",
    "Description": "Gabapentin",
    "Column1": "Niaojin",
    "Column2": "Vinyl",
    "Column3": "Engineer",
    "CreatedOn": "11/15/2021",
    "CreatedBy": "2/19/2022",
    "LastModified": "8/5/2021",
    "Action": "12/19/2021"
}, {
    "id": 63,
    "Name": "CEFAZOLIN SODIUM",
    "Description": "CEFAZOLIN",
    "Column1": "Rogowo",
    "Column2": "Aluminum",
    "Column3": "Surveyor",
    "CreatedOn": "9/22/2021",
    "CreatedBy": "12/3/2021",
    "LastModified": "9/16/2021",
    "Action": "6/22/2021"
}, {
    "id": 28,
    "Name": "Methyl Salicylate, Capsaicin, and Menthol",
    "Description": "New Terocin",
    "Column1": "Nürnberg",
    "Column2": "Wood",
    "Column3": "Surveyor",
    "CreatedOn": "8/31/2021",
    "CreatedBy": "1/13/2022",
    "LastModified": "8/22/2021",
    "Action": "11/18/2021"
}, {
    "id": 97,
    "Name": "Cchinacea, Echinacea purpurea, Hamamelis virginiana, Bellis perennis, Calendula officinalis, Aconitum napellus, Chamomilla, Hypericum perforatum, Belladonna, Millefolium, Bryonia, Rhus toxicodendron, ATP, Coenzyme A,",
    "Description": "Celeragesic",
    "Column1": "Borovan",
    "Column2": "Steel",
    "Column3": "Subcontractor",
    "CreatedOn": "9/18/2021",
    "CreatedBy": "10/28/2021",
    "LastModified": "2/17/2022",
    "Action": "9/8/2021"
}, {
    "id": 99,
    "Name": "triptorelin pamoate",
    "Description": "Trelstar",
    "Column1": "Mubende",
    "Column2": "Rubber",
    "Column3": "Subcontractor",
    "CreatedOn": "4/18/2022",
    "CreatedBy": "8/17/2021",
    "LastModified": "12/29/2021",
    "Action": "12/22/2021"
}, {
    "id": 66,
    "Name": "TITANIUM DIOXIDE",
    "Description": "L OCCITANE AU BRESIL - JENIPAPO Face Protection Veil SPF 30 Broad Spectrum",
    "Column1": "Fengyang",
    "Column2": "Brass",
    "Column3": "Architect",
    "CreatedOn": "5/31/2021",
    "CreatedBy": "8/13/2021",
    "LastModified": "8/12/2021",
    "Action": "1/17/2022"
}, {
    "id": 12,
    "Name": "ONDANSETRON",
    "Description": "ONDANSETRON",
    "Column1": "Água Levada",
    "Column2": "Aluminum",
    "Column3": "Electrician",
    "CreatedOn": "1/31/2022",
    "CreatedBy": "4/10/2022",
    "LastModified": "2/7/2022",
    "Action": "8/8/2021"
}, {
    "id": 90,
    "Name": "Nicotine",
    "Description": "Nicotine Transdermal System",
    "Column1": "Veles",
    "Column2": "Aluminum",
    "Column3": "Architect",
    "CreatedOn": "3/2/2022",
    "CreatedBy": "11/19/2021",
    "LastModified": "4/7/2022",
    "Action": "4/19/2022"
}, {
    "id": 17,
    "Name": "Acetaminophen, Dextromethorphan HBr, Doxylamine Succinate",
    "Description": "Topcare Cold and Cough",
    "Column1": "Kachug",
    "Column2": "Granite",
    "Column3": "Construction Worker",
    "CreatedOn": "9/21/2021",
    "CreatedBy": "11/19/2021",
    "LastModified": "8/15/2021",
    "Action": "2/10/2022"
}, {
    "id": 77,
    "Name": "Saline",
    "Description": "healthy accents enema",
    "Column1": "Pīrgaaj",
    "Column2": "Stone",
    "Column3": "Surveyor",
    "CreatedOn": "10/1/2021",
    "CreatedBy": "4/8/2022",
    "LastModified": "9/24/2021",
    "Action": "2/24/2022"
}, {
    "id": 32,
    "Name": "alprazolam",
    "Description": "Niravam",
    "Column1": "Sainte-Martine",
    "Column2": "Vinyl",
    "Column3": "Construction Worker",
    "CreatedOn": "6/16/2021",
    "CreatedBy": "7/10/2021",
    "LastModified": "8/11/2021",
    "Action": "5/25/2021"
}, {
    "id": 92,
    "Name": "antihemophilic factor/von willebrand factor complex (human)",
    "Description": "Humate-P",
    "Column1": "Yangchengzhuang",
    "Column2": "Steel",
    "Column3": "Estimator",
    "CreatedOn": "10/14/2021",
    "CreatedBy": "11/21/2021",
    "LastModified": "3/10/2022",
    "Action": "6/10/2021"
}, {
    "id": 31,
    "Name": "MENTHOL",
    "Description": "SUGAR FREE LEMON MINT HERB THROAT DROPS",
    "Column1": "Enrekang",
    "Column2": "Rubber",
    "Column3": "Surveyor",
    "CreatedOn": "11/14/2021",
    "CreatedBy": "7/29/2021",
    "LastModified": "8/2/2021",
    "Action": "8/11/2021"
}, {
    "id": 29,
    "Name": "Hypromellose, Glycerin, Polyethylene glycol 400",
    "Description": "Eye Drops Lubricating Tears",
    "Column1": "Casal da Serra",
    "Column2": "Granite",
    "Column3": "Construction Manager",
    "CreatedOn": "11/15/2021",
    "CreatedBy": "7/26/2021",
    "LastModified": "5/27/2021",
    "Action": "10/2/2021"
}, {
    "id": 47,
    "Name": "Alternaria alternata",
    "Description": "Alternaria alternata",
    "Column1": "Qushi’an",
    "Column2": "Plexiglass",
    "Column3": "Surveyor",
    "CreatedOn": "3/9/2022",
    "CreatedBy": "9/22/2021",
    "LastModified": "6/2/2021",
    "Action": "4/21/2022"
}, {
    "id": 61,
    "Name": "avobenzone, homosalate, titanium dioxide, zinc oxide",
    "Description": "STOP THE CLOCK BROAD SPECTRUM SPF 50",
    "Column1": "Silgueiros",
    "Column2": "Stone",
    "Column3": "Construction Expeditor",
    "CreatedOn": "5/12/2021",
    "CreatedBy": "5/24/2021",
    "LastModified": "9/7/2021",
    "Action": "6/8/2021"
}, {
    "id": 72,
    "Name": "Cetirizine Hydrochloride",
    "Description": "Cetirizine Hydrochloride",
    "Column1": "Baicheng",
    "Column2": "Wood",
    "Column3": "Electrician",
    "CreatedOn": "9/15/2021",
    "CreatedBy": "10/16/2021",
    "LastModified": "3/22/2022",
    "Action": "4/12/2022"
}, {
    "id": 28,
    "Name": "Norethindrone Acetate and Ethinyl Estradiol and Ferrous Fumarate",
    "Description": "ESTROSTEP Fe",
    "Column1": "Stráž nad Nisou",
    "Column2": "Plexiglass",
    "Column3": "Estimator",
    "CreatedOn": "7/1/2021",
    "CreatedBy": "1/15/2022",
    "LastModified": "9/16/2021",
    "Action": "5/20/2021"
}, {
    "id": 83,
    "Name": "Tetanus and Diphtheria Toxoids Adsorbed",
    "Description": "Tetanus and Diphtheria Toxoids Adsorbed",
    "Column1": "Khao Kho",
    "Column2": "Aluminum",
    "Column3": "Architect",
    "CreatedOn": "1/7/2022",
    "CreatedBy": "9/8/2021",
    "LastModified": "6/6/2021",
    "Action": "11/2/2021"
}, {
    "id": 6,
    "Name": "TRAMADOL HYDROCHLORIDE, .GAMMA.-AMINOBUTYRIC ACID",
    "Description": "Theratramadol-90",
    "Column1": "Prantaan",
    "Column2": "Steel",
    "Column3": "Engineer",
    "CreatedOn": "10/4/2021",
    "CreatedBy": "2/25/2022",
    "LastModified": "12/16/2021",
    "Action": "8/5/2021"
}, {
    "id": 73,
    "Name": "OCTINOXATE, OCTISALATE, TITANIUM DIOXIDE",
    "Description": "Hourglass Illusion Tinted Moisturizer Beige",
    "Column1": "Buseresere",
    "Column2": "Glass",
    "Column3": "Construction Expeditor",
    "CreatedOn": "12/14/2021",
    "CreatedBy": "8/29/2021",
    "LastModified": "3/2/2022",
    "Action": "4/7/2022"
}, {
    "id": 60,
    "Name": "Aspirin",
    "Description": "equate aspirin",
    "Column1": "Benisheikh",
    "Column2": "Glass",
    "Column3": "Subcontractor",
    "CreatedOn": "2/19/2022",
    "CreatedBy": "10/6/2021",
    "LastModified": "2/25/2022",
    "Action": "7/23/2021"
}, {
    "id": 49,
    "Name": "Ibuprofen",
    "Description": "Ibuprofen",
    "Column1": "Vlissingen",
    "Column2": "Brass",
    "Column3": "Construction Worker",
    "CreatedOn": "11/29/2021",
    "CreatedBy": "2/20/2022",
    "LastModified": "2/5/2022",
    "Action": "1/4/2022"
}, {
    "id": 23,
    "Name": "Enalapril Maleate and Hydrochlorothiazide",
    "Description": "Enalapril Maleate and Hydrochlorothiazide",
    "Column1": "Shijing",
    "Column2": "Stone",
    "Column3": "Electrician",
    "CreatedOn": "9/6/2021",
    "CreatedBy": "12/24/2021",
    "LastModified": "7/26/2021",
    "Action": "11/26/2021"
}, {
    "id": 27,
    "Name": "Sodium Fluoride, Vitamin A Palmitate, Ascorbic Acid, Cholecalciferol, Alpha-Tocopherol Acetate, Thiamine Mononitrate, Riboflavin, Niacinamide, Pyridoxine Hydrochloride, Folic Acid and cyanocobalamin",
    "Description": "MVC",
    "Column1": "Bandeirantes",
    "Column2": "Granite",
    "Column3": "Engineer",
    "CreatedOn": "7/13/2021",
    "CreatedBy": "1/10/2022",
    "LastModified": "2/11/2022",
    "Action": "11/19/2021"
}, {
    "id": 67,
    "Name": "Paroxetine",
    "Description": "Paroxetine",
    "Column1": "Bamenda",
    "Column2": "Plastic",
    "Column3": "Construction Worker",
    "CreatedOn": "10/23/2021",
    "CreatedBy": "3/18/2022",
    "LastModified": "7/14/2021",
    "Action": "10/29/2021"
}, {
    "id": 88,
    "Name": "Trimethobenzamide Hydrochloride",
    "Description": "Trimethobenzamide Hydrochloride",
    "Column1": "Wang Sai Phun",
    "Column2": "Rubber",
    "Column3": "Architect",
    "CreatedOn": "7/6/2021",
    "CreatedBy": "1/20/2022",
    "LastModified": "10/26/2021",
    "Action": "8/4/2021"
}, {
    "id": 3,
    "Name": "Finasteride",
    "Description": "Finasteride",
    "Column1": "Wuda",
    "Column2": "Aluminum",
    "Column3": "Construction Manager",
    "CreatedOn": "7/7/2021",
    "CreatedBy": "8/13/2021",
    "LastModified": "11/9/2021",
    "Action": "7/28/2021"
}, {
    "id": 48,
    "Name": "Alcohol",
    "Description": "Anti-Bacterial Hand Sanitizer",
    "Column1": "Minna",
    "Column2": "Plastic",
    "Column3": "Project Manager",
    "CreatedOn": "1/6/2022",
    "CreatedBy": "11/13/2021",
    "LastModified": "11/29/2021",
    "Action": "6/15/2021"
}, {
    "id": 78,
    "Name": "codeine phosphate and guaifenesin",
    "Description": "Iophen C NR",
    "Column1": "Jhang Sadr",
    "Column2": "Wood",
    "Column3": "Architect",
    "CreatedOn": "9/6/2021",
    "CreatedBy": "12/12/2021",
    "LastModified": "7/18/2021",
    "Action": "8/23/2021"
}, {
    "id": 61,
    "Name": "avobenzone, homosalate, octinoxate, octisalate, oxybenzone",
    "Description": "Mary Kay Suncare Sunscreen SPF 30",
    "Column1": "Sukošan",
    "Column2": "Glass",
    "Column3": "Subcontractor",
    "CreatedOn": "11/13/2021",
    "CreatedBy": "12/29/2021",
    "LastModified": "2/1/2022",
    "Action": "2/15/2022"
}, {
    "id": 98,
    "Name": "Nitrofurantoin (monohydrate/macrocrystals)",
    "Description": "Nitrofurantoin (monohydrate/macrocrystals)",
    "Column1": "Verrettes",
    "Column2": "Plastic",
    "Column3": "Construction Foreman",
    "CreatedOn": "1/26/2022",
    "CreatedBy": "6/3/2021",
    "LastModified": "1/14/2022",
    "Action": "9/27/2021"
}, {
    "id": 65,
    "Name": "Levetiracetam",
    "Description": "Levetiracetam",
    "Column1": "Shangmachang",
    "Column2": "Glass",
    "Column3": "Supervisor",
    "CreatedOn": "1/23/2022",
    "CreatedBy": "6/2/2021",
    "LastModified": "11/4/2021",
    "Action": "2/10/2022"
}, {
    "id": 46,
    "Name": "Ampicillin Sodium",
    "Description": "Ampicillin",
    "Column1": "Qiawan",
    "Column2": "Glass",
    "Column3": "Surveyor",
    "CreatedOn": "1/20/2022",
    "CreatedBy": "3/20/2022",
    "LastModified": "8/20/2021",
    "Action": "2/1/2022"
}, {
    "id": 7,
    "Name": "Black Oak",
    "Description": "Black Oak",
    "Column1": "Chengmagang",
    "Column2": "Glass",
    "Column3": "Construction Expeditor",
    "CreatedOn": "1/5/2022",
    "CreatedBy": "1/5/2022",
    "LastModified": "10/17/2021",
    "Action": "6/27/2021"
}, {
    "id": 15,
    "Name": "Levothyroxine Sodium",
    "Description": "Levothyroxine Sodium",
    "Column1": "Huxiaoqiao",
    "Column2": "Steel",
    "Column3": "Construction Manager",
    "CreatedOn": "6/10/2021",
    "CreatedBy": "9/22/2021",
    "LastModified": "5/26/2021",
    "Action": "8/8/2021"
}, {
    "id": 69,
    "Name": "LIDOCAINE HYDROCHLORIDE ANHYDROUS",
    "Description": "Lidocaine Hydrochloride",
    "Column1": "Lintingkou",
    "Column2": "Glass",
    "Column3": "Architect",
    "CreatedOn": "9/3/2021",
    "CreatedBy": "1/5/2022",
    "LastModified": "7/22/2021",
    "Action": "3/16/2022"
}, {
    "id": 10,
    "Name": "Lisinopril and Hydrochlorothiazide",
    "Description": "Lisinopril and Hydrochlorothiazide",
    "Column1": "Pechersk",
    "Column2": "Plastic",
    "Column3": "Construction Expeditor",
    "CreatedOn": "7/18/2021",
    "CreatedBy": "3/18/2022",
    "LastModified": "2/2/2022",
    "Action": "8/30/2021"
}]
