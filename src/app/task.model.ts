export class Task{
    done: boolean = false;
    constructor(public description: string, public priority: string){}

    markDone(){
        this.done = true;
    }
}