export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;

    tags: string[];
    date: string;
    tools: string[];

    background: string;
    development: string;
}
