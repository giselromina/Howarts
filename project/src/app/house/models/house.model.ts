export class House {
  id: number;
  name: string;
  members: number;
  img: string;
  constructor(data: {
    id: number;
    name: string;
    img?: string;
    members: number;
  }) {
    this.id = data.id;
    this.name = data.name;
    this.members = data.members;
    this.img = data.img ? data.img : 'Image not found ';
  }
}
