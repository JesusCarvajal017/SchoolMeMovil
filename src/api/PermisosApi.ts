
import { ApiGeneric } from "./ApiGeneric";

export class PermisosApi extends ApiGeneric  {

    constructor() {
        // endpoint fijo para esta entidad
        super("/Permission");
    } 

}   