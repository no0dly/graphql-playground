export interface TPost {
    id: string;
    username: string;
    timestamp: Date;
    title: string;
    article: string;
}

export interface FormPost {
    username: string;
    title: string;
    article: string;
}