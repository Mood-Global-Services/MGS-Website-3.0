// Team Members Images

import GianlucaDiBella from "@/assets/images/teamPage/newPics/1.webp";
import WaltSchagen from "@/assets/images/teamPage/newPics/2.webp";
import LorenzoCeppaluni from "@/assets/images/teamPage/newPics/3.webp";
import RosarioNapolano from "@/assets/images/teamPage/newPics/4.webp";
import GiovanniPiccirillo from "@/assets/images/teamPage/newPics/5.webp";
import FabrizioGenovese from "@/assets/images/teamPage/newPics/6.webp";
import GlennTan from "@/assets/images/teamPage/newPics/7.webp";
import HugoDobney from "@/assets/images/teamPage/newPics/8.webp";
import ChiaraMunaretto from "@/assets/images/teamPage/newPics/9.webp";
import MariaAscione from "@/assets/images/teamPage/newPics/10.webp";
import EugenioReggianini from "@/assets/images/teamPage/newPics/11.webp";
import ShezrovKhan from "@/assets/images/teamPage/newPics/13.webp";
import MedBenMoussa from "@/assets/images/teamPage/newPics/12.webp";
import NamanThita from "@/assets/images/teamPage/newPics/14.webp";
import IlliaTofanchuk from "@/assets/images/teamPage/newPics/15.webp";
import PietroPezzullo from "@/assets/images/teamPage/newPics/16.webp";
import SoheilParsaei from "@/assets/images/teamPage/newPics/17.webp";
import MFahadNoor from "@/assets/images/teamPage/newPics/18.webp";
import AdeelShafique from "@/assets/images/teamPage/newPics/19.webp";
import Oleg from "@/assets/images/teamPage/newPics/20.webp";
import SamuelOreoluw from "@/assets/images/teamPage/newPics/21.webp";
import FrancescoDiBella from "@/assets/images/teamPage/newPics/22.webp";
import DavideCastiglione from "@/assets/images/teamPage/newPics/23.webp";
import AlessandraBuccala from "@/assets/images/teamPage/newPics/24.webp";

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
        image: GianlucaDiBella.src,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        mobileMarginTop: "-20%",
        scale: 1.1,
        mobileScale: 1,
    },
    {
        name: "Walt Schagen",
        flag: NetherlandsFlag,
        position: "CTO & Co-Founder",
        image: WaltSchagen.src,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        mobileMarginTop: "-15%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Lorenzo Ceppaluni",
        flag: ItalyFlag,
        position: "CEO & Co-Founder",
        image: LorenzoCeppaluni.src,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        mobileMarginTop: "-15%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Rosario Napolano",
        flag: ItalyFlag,
        position: "Bank Director Partner and Tradfi Advisor",
        image: RosarioNapolano.src,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        mobileMarginTop: "-15%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Giovanni Piccirillo",
        flag: ItalyFlag,
        position: "Tax Lawyer Partner and Co-Founder",
        image: GiovanniPiccirillo.src,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        mobileMarginTop: "-18%",
        scale: 1,
        mobileScale: 0.9,
    },
    {
        name: "Fabrizio Genovese",
        flag: ItalyFlag,
        position: "Quantum Strategy Advisor",
        image: FabrizioGenovese.src,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        mobileMarginTop: "-15%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Glenn Tan",
        flag: SingaporeFlag,
        position: "Sustainability Strategy Advisor",
        image: GlennTan.src,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        mobileMarginTop: "-15%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Hugo Dobney",
        flag: UnitedKingdomFlag,
        position: "Advisor",
        image: HugoDobney.src,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        mobileMarginTop: "-17%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Chiara Munaretto",
        flag: ItalyFlag,
        position: "Advisor and Personal Branding",
        image: ChiaraMunaretto.src,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        mobileMarginTop: "-15%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Maria Ascione",
        flag: ItalyFlag,
        position: "Business Developer",
        image: MariaAscione.src,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        mobileMarginTop: "-15%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Eugenio Reggianini",
        flag: ItalyFlag,
        position: "Legal Expert EU Advisor",
        image: EugenioReggianini.src,
        linkedin: "",
        twitter: "",
        marginTop: "-18%",
        mobileMarginTop: "-18%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Shezrov Khan",
        flag: PakistanFlag,
        position: "Full Stack Dev",
        image: ShezrovKhan.src,
        linkedin: "",
        twitter: "",
        marginTop: "-18%",
        mobileMarginTop: "-18%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Med Ben Moussa",
        flag: MoroccoFlag,
        position: "Full Stack Dev",
        image: MedBenMoussa.src,
        linkedin: "",
        twitter: "",
        marginTop: "-18%",
        mobileMarginTop: "-18%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Naman Thita",
        flag: IndiaFlag,
        position: "Full Stack Dev",
        image: NamanThita.src,
        linkedin: "",
        twitter: "",
        marginTop: "-18%",
        mobileMarginTop: "-18%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Illia Tofanchuk",
        flag: UkraineFlag,
        position: "UI/UX Senior Designer",
        image: IlliaTofanchuk.src,
        linkedin: "",
        twitter: "",
        marginTop: "-18%",
        mobileMarginTop: "-17%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Pietro Pezzullo",
        flag: ItalyFlag,
        position: "Full Stack Dev Intern",
        image: PietroPezzullo.src,
        linkedin: "",
        twitter: "",
        marginTop: "-15%",
        mobileMarginTop: "-15%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Soheil Parsaei",
        flag: IranFlag,
        position: "Blockchain Dev",
        image: SoheilParsaei.src,
        linkedin: "",
        twitter: "",
        marginTop: "-20%",
        mobileMarginTop: "-20%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "M Fahad Noor",
        flag: PakistanFlag,
        position: "Product UX Designer",
        image: MFahadNoor.src,
        linkedin: "",
        twitter: "",
        marginTop: "-18%",
        mobileMarginTop: "-18%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Adeel Shafique",
        flag: PakistanFlag,
        position: "Product UX Designer",
        image: AdeelShafique.src,
        linkedin: "",
        twitter: "",
        marginTop: "-18%",
        mobileMarginTop: "-16%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Oleg",
        flag: UkraineFlag,
        position: "Content Designer",
        image: Oleg.src,
        linkedin: "",
        twitter: "",
        marginTop: "-18%",
        mobileMarginTop: "-18%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Samuel Oreoluw",
        flag: NigeriaFlag,
        position: "Content Designer",
        image: SamuelOreoluw.src,
        linkedin: "",
        twitter: "",
        marginTop: "-18%",
        mobileMarginTop: "-16%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Francesco Di Bella",
        flag: ItalyFlag,
        position: "HR and Accountant Intern",
        image: FrancescoDiBella.src,
        linkedin: "",
        twitter: "",
        marginTop: "-20%",
        mobileMarginTop: "-17%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Davide Castiglione",
        flag: ItalyFlag,
        position: " Junior Video Maker",
        image: DavideCastiglione.src,
        linkedin: "",
        twitter: "",
        marginTop: "-20%",
        mobileMarginTop: "-20%",
        scale: 1,
        mobileScale: 1,
    },
    {
        name: "Alessandra Buccala",
        flag: ItalyFlag,
        position: "Content Creator",
        image: AlessandraBuccala.src,
        linkedin: "",
        twitter: "",
        marginTop: "-18%",
        mobileMarginTop: "-18%",
        scale: 1,
        mobileScale: 1,
    },
]