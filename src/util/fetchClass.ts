
export class Petitioner{

    _response : any;

     async command<T = any>( url: string, data: unknown, method: string ): Promise<T | null> {
            try {
                const resp = await fetch(url, {
                    method,
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify(data),
                });

                if (!resp.ok) {
                    const text = await resp.text();
                    throw new Error(`HTTP ${resp.status} - ${text || resp.statusText}`);
                }

                const text = await resp.json();
                this._response = text;

            } catch (error) {
                this._response = error;
                throw error;
            }

            return this._response as T | null;
        }

    /** Solo recibe (GET) */
    async querys<T = any>(url: string): Promise<T> {
        try {
            const resp = await fetch(url);

            if (!resp.ok) {
                const text = await resp.text();
                throw new Error(`HTTP ${resp.status} - ${text || resp.statusText}`);
            }

            const text = await resp.json();

            this._response = text;

        } catch (error) {
            this._response = error;
            throw error;
        }

        return this._response as T;
    }
}

