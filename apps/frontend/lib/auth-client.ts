import { Session } from "next-auth";

/**
 * API client for authenticated requests to Strapi backend
 * Uses JWT from NextAuth session
 */
export class StrapiClient {
  private baseUrl: string;
  private jwt?: string;

  constructor(baseUrl: string, jwt?: string) {
    this.baseUrl = baseUrl;
    this.jwt = jwt;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    if (this.jwt) {
      headers["Authorization"] = `Bearer ${this.jwt}`;
    }

    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(
        `API Error: ${response.status} ${response.statusText}`
      );
    }

    return response.json() as Promise<T>;
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "GET" });
  }

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "DELETE" });
  }
}

/**
 * Create an authenticated Strapi client from NextAuth session
 */
export function createStrapiClient(session: Session | null): StrapiClient {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  const jwt = session ? (session as any).jwt : undefined;
  return new StrapiClient(apiUrl, jwt);
}

/**
 * Helper to check if user has a specific role
 */
export function hasRole(session: Session | null, role: string): boolean {
  if (!session?.user) return false;
  return (session.user as any).role === role;
}

/**
 * Helper to check if user is admin
 */
export function isAdmin(session: Session | null): boolean {
  return hasRole(session, "Admin");
}

/**
 * Helper to check if user is editor (can create/edit content)
 */
export function isEditor(session: Session | null): boolean {
  const role = (session?.user as any)?.role;
  return role === "Éditeur" || role === "Admin";
}

/**
 * Helper to check if user is logged in
 */
export function isAuthenticated(session: Session | null): boolean {
  return session?.user !== undefined;
}
