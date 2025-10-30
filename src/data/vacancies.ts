export type Vacancy = {
    id: string;
    title: string;
    remote: boolean;
    aboutThisRole: {
        position: string;
        location: string;
        salary: string;
    }
    roleOverview: string[];
    requirements: string[];
    qualifications: string[];
    whyJoinUs: string[];
}

export const vacancies: Vacancy[] = [
    {
        id: "548856",
        title: "UX/UI Intern",
        remote: true,
        aboutThisRole: {
            position: "UX/UI Intern",
            location: "Remote",
            salary: "$1000 - $2000 per month",
        },
        roleOverview: [
            "We are looking for a UX/UI Intern to help us design and develop our website and mobile app.",
            "The ideal candidate will have a strong understanding of UX/UI design and development.",
            "The candidate will be responsible for designing and developing the website and mobile app.",
        ],
        requirements: [
            "Strong understanding of UX/UI design and development",
            "Strong understanding of HTML, CSS, and JavaScript",
            "Strong understanding of React and React Native",
        ],
        qualifications: [
            "Strong understanding of UX/UI design and development",
            "Strong understanding of HTML, CSS, and JavaScript",
            "Strong understanding of React and React Native",
        ],
        whyJoinUs: [
            "We are looking for a UX/UI Intern to help us design and develop our website and mobile app.",
            "The ideal candidate will have a strong understanding of UX/UI design and development.",
            "The candidate will be responsible for designing and developing the website and mobile app.",
        ],
    },
    {
        id: "134965",
        title: "Backend Intern",
        remote: true,
        aboutThisRole: {
            position: "Backend Intern",
            location: "Remote",
            salary: "$1000 - $2000 per month",
        },
        roleOverview: [
            "We are looking for a Backend Intern to help us develop our backend services.",
            "The ideal candidate will have a strong understanding of backend development and will be responsible for developing our backend services.",
        ],
        requirements: [
            "Strong understanding of backend development and will be responsible for developing our backend services.",
        ],
        qualifications: [
            "Strong understanding of backend development and will be responsible for developing our backend services.",
        ],
        whyJoinUs: [
            "We are looking for a Backend Intern to help us develop our backend services.",
            "The ideal candidate will have a strong understanding of backend development and will be responsible for developing our backend services.",
        ],
    },
    {
        id: "134966",
        title: "Vibe Coding Tool Expert Freelancer",
        remote: true,
        aboutThisRole: {
            position: "Vibe Coding Tool Expert Freelancer",
            location: "Remote",
            salary: "$1000 - $2000 per month",
        },
        roleOverview: [
            "We are looking for a Vibe Coding Tool Expert Freelancer to help us develop our vibe coding tool.",
            "The ideal candidate will have a strong understanding of vibe coding tool development and will be responsible for developing our vibe coding tool.",
        ],
        requirements: [
            "Strong understanding of vibe coding tool development and will be responsible for developing our vibe coding tool.",
        ],
        qualifications: [
            "Strong understanding of vibe coding tool development and will be responsible for developing our vibe coding tool.",
        ],
        whyJoinUs: [
            "We are looking for a Vibe Coding Tool Expert Freelancer to help us develop our vibe coding tool.",
            "The ideal candidate will have a strong understanding of vibe coding tool development and will be responsible for developing our vibe coding tool.",
        ],
    },
    {
        id: "134967",
        title: "AI Agent Dev Freelancer",
        remote: true,
        aboutThisRole: {
            position: "AI Agent Dev Freelancer",
            location: "Remote",
            salary: "$1000 - $2000 per month",
        },
        roleOverview: [
            "We are looking for a AI Agent Dev Freelancer to help us develop our AI agent.",
            "The ideal candidate will have a strong understanding of AI agent development and will be responsible for developing our AI agent.",
        ],
        requirements: [
            "Strong understanding of AI agent development and will be responsible for developing our AI agent.",
        ],
        qualifications: [
            "Strong understanding of AI agent development and will be responsible for developing our AI agent.",
        ],
        whyJoinUs: [
            "We are looking for a AI Agent Dev Freelancer to help us develop our AI agent.",
            "The ideal candidate will have a strong understanding of AI agent development and will be responsible for developing our AI agent.",
        ],
    },
    {
        id: "134968",
        title: "Lead Generation Expert",
        remote: true,
        aboutThisRole: {
            position: "Lead Generation Expert",
            location: "Remote",
            salary: "$1000 - $2000 per month",
        },
        roleOverview: [
            "We are looking for a Lead Generation Expert to help us generate leads for our company.",
            "The ideal candidate will have a strong understanding of lead generation and will be responsible for generating leads for our company.",
        ],
        requirements: [
            "Strong understanding of lead generation and will be responsible for generating leads for our company.",
        ],
        qualifications: [
            "Strong understanding of lead generation and will be responsible for generating leads for our company.",
        ],
        whyJoinUs: [
            "We are looking for a Lead Generation Expert to help us generate leads for our company.",
            "The ideal candidate will have a strong understanding of lead generation and will be responsible for generating leads for our company.",
        ],
    },
]