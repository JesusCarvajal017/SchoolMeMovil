// import { BOOK_END_POINT } from "../constants/endpoints";

import { environment } from "../../Environment/environmet";
import { Petitioner } from "../../util/fetchClass";

// Api generica que servira para la extencion
export class ApiGeneric {
    public endpointBase!: string;
    public entityEndpoint!: string;
    private http: Petitioner;

    constructor(endpoint: string, http = new Petitioner()) {
        this.endpointBase = environment.urlApi; 
        this.entityEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
        this.http = http;
    }

    /** URL completa con soporte para path extra y query params */
    private buildUrl() : string {
        return environment.urlApi + this.entityEndpoint;
    }

    async create<TIn, TOut = TIn>(payload: TIn): Promise<TOut> {
        return (await this.http.command<TOut>(this.buildUrl(), payload, "POST")) as TOut;
    }

    async getAll<T>(): Promise<T[]> {
        const data = await this.http.querys<T[]>(this.buildUrl());
        return data;
    }

    async getById<T>(id: number | string): Promise<T> {
        return await this.http.querys<T>(this.buildUrl() +"/"+ id);
    }

    async update<TIn, TOut = TIn>(payload: TIn): Promise<TOut | null> {
        return await this.http.command<TOut | null>(this.buildUrl(), payload, "PUT");
    }


    async patch<TIn, TOut = TIn>(id: number | string, partial: TIn): Promise<TOut | null> {
        return await this.http.command<TOut | null>(this.buildUrl() + `/${id}`, partial, "PATCH");
    }

     /** DELETE */
    async delete<TIn, TOut = TIn>(id : number ): Promise<TOut | null> {
        return await this.http.command<TOut | null>(`${this.buildUrl()}/${id}`,  [] , "DELETE");
    }
}