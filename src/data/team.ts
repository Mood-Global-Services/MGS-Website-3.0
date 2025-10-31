// Team Members Images

import GianlucaDiBella from "@/assets/images/teamPage/GianlucaDiBella.svg?url";
import WaltSchagen from "@/assets/images/teamPage/WaltSchagen.svg?url";
import LorenzoCeppaluni from "@/assets/images/teamPage/LorenzoCeppaluni.svg?url";
import RosarioNapolano from "@/assets/images/teamPage/RosarioNapolano.svg?url";
import GiovanniPiccirillo from "@/assets/images/teamPage/GiovanniPiccirillo.svg?url";
import FabrizioGenovese from "@/assets/images/teamPage/FabrizioGenovese.svg?url";
import GlennTan from "@/assets/images/teamPage/GlennTan.svg?url";
import HugoDobney from "@/assets/images/teamPage/HugoDobney.svg?url";
import ChiaraMunaretto from "@/assets/images/teamPage/ChiaraMunaretto.svg?url";
import MariaAscione from "@/assets/images/teamPage/MariaAscione.svg?url";
import EugenioReggianini from "@/assets/images/teamPage/EugenioReggianini.svg?url";
import ShezrovKhan from "@/assets/images/teamPage/ShezrovKhan.svg?url";
import MedBenMoussa from "@/assets/images/teamPage/MedBenMoussa.svg?url";
import NamanThita from "@/assets/images/teamPage/NamanThita.svg?url";
import IlliaTofanchuk from "@/assets/images/teamPage/IlliaTofanchuk.svg?url";
import PietroPezzullo from "@/assets/images/teamPage/PietroPezzullo.svg?url";
import SoheilParsaei from "@/assets/images/teamPage/SoheilParsaei.svg?url";
import MFahadNoor from "@/assets/images/teamPage/MFahadNoor.svg?url";
import AdeelShafique from "@/assets/images/teamPage/AdeelShafique.svg?url";
import Oleg from "@/assets/images/teamPage/Oleg.svg?url";
import SamuelOreoluw from "@/assets/images/teamPage/SamuelOreoluw.svg?url";
import FrancescoDiBella from "@/assets/images/teamPage/FrancescoDiBella.svg?url";
import DavideCastiglione from "@/assets/images/teamPage/DavideCastiglione.svg?url";
import AlessandraBuccala from "@/assets/images/teamPage/AlessandraBuccala.svg?url";

//Flags
import NetherlandsFlag from "@/assets/images/teamPage/NL.svg?url";
import UkraineFlag from "@/assets/images/teamPage/UA.svg?url";
import ItalyFlag from "@/assets/images/teamPage/IT.svg?url";
import UnitedKingdomFlag from "@/assets/images/teamPage/GB.svg?url";
import IndiaFlag from "@/assets/images/teamPage/IN.svg?url";
import PakistanFlag from "@/assets/images/teamPage/PK.svg?url";
import NigeriaFlag from "@/assets/images/teamPage/NG.svg?url";
import IranFlag from "@/assets/images/teamPage/IR.svg?url";
import MoroccoFlag from "@/assets/images/teamPage/MA.svg?url";
import SingaporeFlag from "@/assets/images/teamPage/SG.svg?url";

export type TeamMember = {
    name: string;
    flag: string;
    position: string;
    image: string;
    linkedin?: string;
    twitter?: string;
    imageHeight?: number;
    mobileImageHeight?: number;
    marginTop?: string;
    mobileMarginTop?: string;
    marginLeft?: string;
    mobileMarginLeft?: string;
    scale?: number;
    mobileScale?: number;
}

export const teamMembers: TeamMember[] = [
    {
        name: "Gianluca Di Bella",
        flag: ItalyFlag,
        position: "CEO & Co-Founder",
        image: GianlucaDiBella,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        mobileMarginTop: "0%",
        scale: 1.1,
        mobileScale: 1.28,
    },
    {
        name: "Walt Schagen",
        flag: NetherlandsFlag,
        position: "CTO & Co-Founder",
        image: WaltSchagen,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        mobileMarginTop: "-10%",
        scale: 0.95,
        mobileScale: 1.03,
    },
    {
        name: "Lorenzo Ceppaluni",
        flag: ItalyFlag,
        position: "CEO & Co-Founder",
        image: LorenzoCeppaluni,
        linkedin: "",
        twitter: "",
        marginTop: "-25%",
        scale: 1,
    },
    {
        name: "Rosario Napolano",
        flag: ItalyFlag,
        position: "Bank Director Partner and Tradfi Advisor",
        image: RosarioNapolano,
        linkedin: "",
        twitter: "",
        marginTop: "-12%",
        scale: 0.95,
    },
    {
        name: "Giovanni Piccirillo",
        flag: ItalyFlag,
        position: "Tax Lawyer Partner and Co-Founder",
        image: GiovanniPiccirillo,
        linkedin: "",
        twitter: "",
        marginTop: "-5%",
        scale: 1.1,
    },
    {
        name: "Fabrizio Genovese",
        flag: ItalyFlag,
        position: "Quantum Strategy Advisor",
        image: FabrizioGenovese,
        linkedin: "",
        twitter: "",
        marginTop: "-12%",
        scale: 1,
    },
    {
        name: "Glenn Tan",
        flag: SingaporeFlag,
        position: "Sustainability Strategy Advisor",
        image: GlennTan,
        linkedin: "",
        twitter: "",
        marginTop: "-10%",
        scale: 0.9,
    },
    {
        name: "Hugo Dobney",
        flag: UnitedKingdomFlag,
        position: "Advisor",
        image: HugoDobney,
        linkedin: "",
        twitter: "",
        marginTop: "-10%",
        scale: 0.9,
    },
    {
        name: "Chiara Munaretto",
        flag: ItalyFlag,
        position: "Advisor and Personal Branding",
        image: ChiaraMunaretto,
        linkedin: "",
        twitter: "",
        marginTop: "-10%",
        scale: 1,
    },
    {
        name: "Maria Ascione",
        flag: ItalyFlag,
        position: "Business Developer",
        image: MariaAscione,
        linkedin: "",
        twitter: "",
        marginTop: "-33%",
        scale: 0.75,
    },
    {
        name: "Eugenio Reggianini",
        flag: ItalyFlag,
        position: "Legal Expert EU Advisor",
        image: EugenioReggianini,
        linkedin: "",
        twitter: "",
        marginTop: "-10%",
        scale: 0.9,
    },
    {
        name: "Shezrov Khan",
        flag: PakistanFlag,
        position: "Full Stack Dev",
        image: ShezrovKhan,
        linkedin: "",
        twitter: "",
        marginTop: "-10%",
        scale: 0.95,
    },
    {
        name: "Med Ben Moussa",
        flag: MoroccoFlag,
        position: "Full Stack Dev",
        image: MedBenMoussa,
        linkedin: "",
        twitter: "",
        marginTop: "-20%",
        scale: 0.85,
    },
    {
        name: "Naman Thita",
        flag: IndiaFlag,
        position: "Full Stack Dev",
        image: NamanThita,
        linkedin: "",
        twitter: "",
        marginTop: "-10%",
        scale: 1.1,
    },
    {
        name: "Illia Tofanchuk",
        flag: UkraineFlag,
        position: "UI/UX Senior Designer",
        image: IlliaTofanchuk,
        linkedin: "",
        twitter: "",
        marginTop: "-10%",
        scale: 0.95,
    },
    {
        name: "Pietro Pezzullo",
        flag: ItalyFlag,
        position: "Full Stack Dev Intern",
        image: PietroPezzullo,
        linkedin: "",
        twitter: "",
        marginTop: "-10%",
        scale: 0.95,
    },
    {
        name: "Soheil Parsaei",
        flag: IranFlag,
        position: "Blockchain Dev",
        image: SoheilParsaei,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        scale: 1,
    },
    {
        name: "M Fahad Noor",
        flag: PakistanFlag,
        position: "Product UX Designer",
        image: MFahadNoor,
        linkedin: "",
        twitter: "",
        marginTop: "-10%",
        scale: 1,
    },
    {
        name: "Adeel Shafique",
        flag: PakistanFlag,
        position: "Product UX Designer",
        image: AdeelShafique,
        linkedin: "",
        twitter: "",
        marginTop: "-10%",
        scale: 0.925,
    },
    {
        name: "Oleg",
        flag: UkraineFlag,
        position: "Content Designer",
        image: Oleg,
        linkedin: "",
        twitter: "",
        marginTop: "-35%",
        scale: 0.925,
    },
    {
        name: "Samuel Oreoluw",
        flag: NigeriaFlag,
        position: "Content Designer",
        image: SamuelOreoluw,
        linkedin: "",
        twitter: "",
        marginTop: "-10%",
        scale: 0.925,
    },
    {
        name: "Francesco Di Bella",
        flag: ItalyFlag,
        position: "HR and Accountant Intern",
        image: FrancescoDiBella,
        linkedin: "",
        twitter: "",
        marginTop: "-10%",
        scale: 0.925,
    },
    {
        name: "Davide Castiglione",
        flag: ItalyFlag,
        position: " Junior Video Maker",
        image: DavideCastiglione,
        linkedin: "",
        twitter: "",
        marginTop: "-30%",
        scale: 0.85,
    },
    {
        name: "Alessandra Buccala",
        flag: ItalyFlag,
        position: "Content Creator",
        image: AlessandraBuccala,
        linkedin: "",
        twitter: "",
        marginTop: "-10%",
        scale: 0.9,
    },
]