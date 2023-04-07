export class Tile {
    public title: string = '';
    public summary: string = '';
    public action: Array<string> = [];
    public isAdmin?: boolean;
    public isStudent?: boolean;
    public isConceptor?: boolean;

    constructor(tile: { title: string, summary: string, action: string[], isAdmin?: boolean, isStudent?: boolean, isConceptor?: boolean }) {
        Object.assign(this, tile)
    }
}
