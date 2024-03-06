// src/app/models/user.model.ts

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: null | string;
    role: string;
    selected_company: null | string;
    created_at: string;
    updated_at: string;
    company: Company | null;
  }
  
  export interface Company {
    id: number;
    name: string;
    tax_number: string;
    tax_office: string;
    phone: string;
    email: string;
    address: string;
    created_at: string;
    updated_at: string;
    user_id: number;
  }  