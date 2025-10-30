export interface EngenheiroProps {
    name: string;
    experience: number; // in years
    specialization?: string; // optional
}

export interface Project {
    title: string;
    description: string;
    year: number;
}

export interface EngenheiroState {
    projects: Project[];
    isLoading: boolean;
}