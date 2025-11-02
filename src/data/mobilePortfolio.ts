import ColichainCard from "@/components/home/mobile/portfolioSliderCards/colichain";
import FractionnaireCard from "@/components/home/mobile/portfolioSliderCards/fractionnaire";
import TrustifyCard from "@/components/home/mobile/portfolioSliderCards/trustify";
import UnicoverCard from "@/components/home/mobile/portfolioSliderCards/unicover";
import SpyralCard from "@/components/home/mobile/portfolioSliderCards/spyral";
import MorningsideCard from "@/components/home/mobile/portfolioSliderCards/morningside";
import ColiseumCard from "@/components/home/mobile/portfolioSliderCards/coliseum";
import ModusCard from "@/components/home/mobile/portfolioSliderCards/modus";

export type MobilePortfolioItem = {
    id: string;
    title: string;
    description: string;
    type: string[];
    tools: string[];
    asset?: React.ElementType;
    link: string;
}

export const mobilePortfolioItems: MobilePortfolioItem[] = [
    {
        id: "1",
        title: "Colichain — L2 Infrastructure for the RWA",
        description: "Colichain is a next-generation Layer 2 blockchain designed to bridge the gap between digital assets and real-world value. Built for scalability, transparency, and real-world adoption, Colichain enables tokenization of physical and digital assets",
        type: ["DeFi", "RWA", "NFT"],
        tools: ["UI/UX", "Frontend", "Backend", "Blockchain"],
        asset: ColichainCard,
        link: "",
    },
    {
        id: "2",
        title: "FRACTIONNAIRE - Real Estate RWA Platform for Digital Ownership",
        description: "Fractionnaire is a Web3 platform that bridges real-world assets with blockchain by enabling tokenized investments in real estate, art, and luxury goods. It offers secure fractional ownership, multi-currency payments, and transparent ROI for global investors.",
        type: ["RWA", "DeFi"],
        tools: ["UI/UX", "Frontend", "DevOps", "Blockchain"],
        asset: FractionnaireCard,
        link: "",
    },
    {
        id: "3",
        title: "Trustify — Blockchain Platform for Food Quality and Safety",
        description: "Trustify leverages blockchain to ensure transparency and trust in the food supply chain. It enables producers, retailers, and consumers to track product batches, verify certifications, and monitor compliance—restoring confidence in high-quality food products.",
        type: ["DeFi", "NFT", "AI", "Social"],
        tools: ["UI/UX", "Frontend", "Backend", "Blockchain"],
        asset: TrustifyCard,
        link: "",
    },
    {
        id: "4",
        title: "UNICOVER - Insurance Brokerage and Risk Management Solutions",
        description: "Unicover provides advanced insurance brokerage and risk management services tailored for businesses and individuals. With decades of expertise, it delivers customized coverage, asset protection, and compliance solutions, helping clients minimize risks globally.",
        type: ["DeFi", "Social"],
        tools: ["Frontend", "DevOps", "Blockchain"],
        asset: UnicoverCard,
        link: "",
    },
    {
        id: "5",
        title: "Spyral - Blockchain platform for music rights & royalties",
        description: "Spyral is a Web3 platform revolutionizing music ownership by securing rights, metadata, and royalties on blockchain. It empowers artists, labels, and collaborators with transparent tracking, fair distribution, and new standards for digital music assets.",
        type: ["AI", "Social"],
        tools: ["UI/UX", "Frontend", "Backend","DB/Storage", "Blockchain"],
        asset: SpyralCard,
        link: "",
    },
    {
        id: "6",
        title: "MorningsideAI – AI consulting & development for enterprises",
        description: "MorningsideAI is a consulting and development firm helping businesses adopt AI with a results-driven approach. From education to deployment, they guide organizations through every stage, delivering tailored solutions that unlock growth and innovation.",
        type: ["Social"],
        tools: ["UI/UX", "Frontend"],
        asset: MorningsideCard,
        link: "",
    },
    {
        id: "7",
        title: "Coliseum - NFT Marketplace for Sports Memorabilia",
        description: "Coliseum is an NFT marketplace for sports memorabilia, enabling collectors to buy, sell, and trade rare sports cards, autographs, and collectibles. It provides a secure and transparent platform for sports fans to own and enjoy their favorite athletes' memorabilia.",
        type: ["NFT", "Social"],
        tools: ["UI/UX", "Frontend", "Backend", "Blockchain"],
        asset: ColiseumCard,
        link: "",
    },
    {
        id: "8",
        title: "MorningsideAI – AI consulting & development for enterprises",
        description: "MorningsideAI is a consulting and development firm helping businesses adopt AI with a results-driven approach. From education to deployment, they guide organizations through every stage, delivering tailored solutions that unlock growth and innovation.",
        type: ["Social"],
        tools: ["UI/UX", "Frontend"],
        asset: ModusCard,
        link: "",
    },
]