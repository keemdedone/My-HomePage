export class User_log {
  public id: number;
  public name: string;
  public action:string;

  constructor(id:number,name:string,action:string) {
    this.id = id;
    this.name = name;
    this.action = action;
  }
}
