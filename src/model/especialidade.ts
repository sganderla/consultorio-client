import { AbstractEntity } from "./abstract-entity";

/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 14/06/2022
 * @version 1.0.0
 */
export class Especialidade extends AbstractEntity{
    nome! : string

    constructor() {
        super()
        this.ativo = true
    }
}