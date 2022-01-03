export interface LoginDetail {
    email: string;
    password: string;
}

export interface UserDetails {
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
    id: number | null;
}

export interface HttpResponse {
    data: UserDetails[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}