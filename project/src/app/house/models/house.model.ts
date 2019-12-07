export class House {
  // tslint:disable-next-line: variable-name
  _id: number;
  name: string;
  headOfHouse: string;
  houseGhost: string;
  founder: string;
  school: string;
  members: [string];
  valores: [string];
  colores: [string];
  img?: string;
  // constructor(data: {
  //   id: number;
  //   name: string;
  //   img?: string;
  //   members: number;
  // }) {
  //   this.id = data.id;
  //   this.name = data.name;
  //   this.members = data.members;
  //   this.img = data.img ? data.img : 'Image not found ';
  // }
}
