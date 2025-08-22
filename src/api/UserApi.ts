
import { ApiGeneric } from "./ApiGeneric";

export class UserApi extends ApiGeneric  {

    constructor() {
        // endpoint fijo para esta entidad
        super("/User");
    } 

}   