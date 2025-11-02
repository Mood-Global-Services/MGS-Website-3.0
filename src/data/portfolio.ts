import ColichainCard from "@/components/home/portfolioSliderCards/colichain";
import FractionnaireCard from "@/components/home/portfolioSliderCards/fractionnaire";
import TrustifyCard from "@/components/home/portfolioSliderCards/trustify";
import UnicoverCard from "@/components/home/portfolioSliderCards/unicover";
import SpyralCard from "@/components/home/portfolioSliderCards/spyral";
import MorningsideCard from "@/components/home/portfolioSliderCards/morningside";
import ColiseumCard from "@/components/home/portfolioSliderCards/coliseum";
import ModusCard from "@/components/home/portfolioSliderCards/modus";

export type PortfolioItem = {
    id: string;
    title: string;
    description: string;
    type: string[];
    tools: string[];
    asset?: React.ElementType;
    link: string;
}

export const portfolioItems: PortfolioItem[] = [
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
        description: "Fractionnaire bridges real estate and DeFi through blockchain tokenization and smart contract automation, enabling fractional ownership, seamless secondary trading, and compliant investment workflows.",
        type: ["RWA", "DeFi"],
        tools: ["UI/UX", "Frontend", "DevOps", "Blockchain"],
        asset: FractionnaireCard,
        link: "https://desert-tech-rwa-marketplace.vercel.app/",
    },
    {
        id: "3",
        title: "Trustify — Blockchain Platform for Food Quality and Safety",
        description: "Trustify restores trust in high-quality food products through a blockchain-based track-and-trace system that ensures full transparency from farm to table. Every stage—harvesting, quality checks, inspections, distribution, and retail—is recorded on-chain. Using dynamic NFTs and smart contracts, each product batch receives a unique, verifiable ID, enabling end-to-end traceability and verification of authenticity, origin, and quality compliance.",
        type: ["DeFi", "NFT", "AI", "Social"],
        tools: ["UI/UX", "Frontend", "Backend", "Blockchain"],
        asset: TrustifyCard,
        link: "https://trustify-app.vercel.app/dashboard/overview/transactions",
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
        description: "Spyral revolutionizes music rights and royalty management using blockchain and AI-powered metadata. Integrated with top DAWs (Logic Pro, Pro Tools, Ableton Live, FL Studio), it enables artists to tokenize tracks at creation and ensures transparent, accurate royalty tracking.",
        type: ["AI", "Social"],
        tools: ["UI/UX", "Frontend", "Backend","DB/Storage", "Blockchain"],
        asset: SpyralCard,
        link: "https://spyral.studio/",
    },
    {
        id: "6",
        title: "MorningsideAI – AI consulting & development for enterprises",
        description: "MorningsideAI is a cutting-edge AI consulting and development company based in New Zealand, specializing in delivering innovative artificial intelligence solutions to businesses across sectors. With a focus on agility, precision, and forward-thinking strategy, MorningsideAI helps organizations harness the power of AI to drive real-world impact.",
        type: ["Social"],
        tools: ["UI/UX", "Frontend"],
        asset: MorningsideCard,
        link: "https://morning-side-ai.vercel.app/",
    },
    {
        id: "7",
        title: "Coliseum - NFT Marketplace for Sports Memorabilia",
        description: "Coliseum is a cross-chain decentralized exchange (DEX) designed to enable seamless, secure trading between Bitcoin, Solana, and Ethereum-based tokens. By eliminating the need for centralized intermediaries, Coliseum addresses blockchain fragmentation, offering a unified platform for efficient cross-chain swaps.",
        type: ["NFT", "Social"],
        tools: ["UI/UX", "Frontend", "Backend", "Blockchain"],
        asset: ColiseumCard,
        link: "https://coliseum-cross-chain-dex.vercel.app/",
    },
    {
        id: "8",
        title: "Modus - Fractionalized Real Estate",
        description: "Modus is a real estate investment platform that allows community members to invest early in development projects, maximizing returns. By partnering with land developers and integrating blockchain technology, Modus establishes a decentralized, self-governing system that prioritizes community interests.",
        type: ["Social"],
        tools: ["UI/UX", "Frontend"],
        asset: ModusCard,
        link: "https://modusdapp.org/",
    },
]