
import { ApiGeneric } from "./ApiGeneric";

export class PersonApi extends ApiGeneric  {

    constructor() {
        // endpoint fijo para esta entidad
        super("/Person");
    } 

}   