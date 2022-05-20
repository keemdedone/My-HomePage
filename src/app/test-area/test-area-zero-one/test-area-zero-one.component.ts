import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-test-area-zero-one',
  templateUrl: './test-area-zero-one.component.html',
  styleUrls: ['./test-area-zero-one.component.scss']
})
export class TestAreaZeroOneComponent implements OnInit {

  constructor() { }

  show: string = "" ;

  ngOnInit(): void {
    return;
  }

  onHi(): void{
    var name = prompt("name");
    if (name){
      for (let i = 0 ; i < name.length ; i++ ){
        console.log(this.show)
        if ( name[i] == "A" ){
          this.show += "..######..\n..#....#..\n..######..\n..#....#..\n..#....#..\n\n"
          continue;
        }
        else if (name[i] == "B"){
          this.show += "..######..\n..#....#..\n..#####...\n..#....#..\n..######..\n\n"
          continue;
        }
        else if (name[i] == "C"){
          this.show += "..######..\n..#.......\n..#.......\n..#.......\n..######..\n\n"
          continue;
        }
        else if (name[i] == "D"){
          this.show += "..#####...\n..#....#..\n..#....#..\n..#....#..\n..#####...\n\n"
          continue;
        }
        else if (name[i] == "E"){
          this.show += "..######..\n..#.......\n..#####...\n..#.......\n..######..\n\n"
          continue;
        }
        else if (name[i] == "F"){
          this.show += "..######..\n..#.......\n..#####...\n..#.......\n..#.......\n\n"
          continue;
        }
        else if (name[i] == "G"){
          this.show += "..######..\n..#.......\n..#####...\n..#....#..\n..#####...\n\n"
          continue;
        }
        else if (name[i] == "H"){
          this.show += "..#....#..\n..#....#..\n..######..\n..#....#..\n..#....#..\n\n"
          continue;
        }
        else if (name[i] == "I"){
          this.show += "..######..\n....##....\n....##....\n....##....\n..######..\n\n"
          continue;
        }
        else if (name[i] == "J"){
          this.show += "..######..\n....##....\n....##....\n..#.##....\n..####....\n\n"
          continue;
        }
        else if (name[i] == "K"){
          this.show += "..#...#...\n..#..#....\n..##......\n..#..#....\n..#...#...\n\n"
          continue;
        }
        else if (name[i] == "L"){
          this.show += "..#.......\n..#.......\n..#.......\n..#.......\n..######..\n\n"
          continue;
        }
        else if (name[i] == "M"){
          this.show += "..#....#..\n..##..##..\n..#.##.#..\n..#....#..\n..#....#..\n\n"
          continue;
        }
        else if (name[i] == "N"){
          this.show += "..#....#..\n..##...#..\n..#.#..#..\n..#..#.#..\n..#...##..\n\n"
          continue;
        }
        else if (name[i] == "O"){
          this.show += "..######..\n..#....#..\n..#....#..\n..#....#..\n..######..\n\n"
          continue;
        }
        else if (name[i] == "P"){
          this.show += "..######..\n..#....#..\n..######..\n..#.......\n..#.......\n\n"
          continue;
        }
        else if (name[i] == "Q"){
          this.show += "..######..\n..#....#..\n..#.#..#..\n..#..#.#..\n..######..\n\n"
          continue;
        }
        else if (name[i] == "R"){
          this.show += "..######..\n..#....#..\n..#.##...\n..#...#...\n..#....#..\n\n"
          continue;
        }
        else if (name[i] == "S"){
          this.show += "..######..\n..#.......\n..######..\n.......#..\n..######..\n\n"
          continue;
        }
        else if (name[i] == "T"){
          this.show += "..######..\n....##....\n....##....\n....##....\n....##....\n\n"
          continue;
        }
        else if (name[i] == "U"){
          this.show += "..#....#..\n..#....#..\n..#....#..\n..#....#..\n..######..\n\n"
          continue;
        }
        else if (name[i] == "V"){
          this.show += "..#....#..\n..#....#..\n..#....#..\n...#..#...\n....##....\n\n"
          continue;
        }
        else if (name[i] == "W"){
          this.show += "..#....#..\n..#....#..\n..#.##.#..\n..##..##..\n..#....#..\n\n"
          continue;
        }
        else if (name[i] == "X"){
          this.show += "..#....#..\n...#..#...\n....##....\n...#..#...\n..#....#..\n\n"
          continue;
        }
        else if (name[i] == "Y"){
          this.show += "..#....#..\n...#..#...\n....##....\n....##....\n....##....\n\n"
          continue;
        }
        else if (name[i] == "Z"){
          this.show += "..######..\n......#...\n.....#....\n....#.....\n..######..\n\n"
          continue;
        }
        else if (name[i] == " "){
          this.show += "..........\n..........\n..........\n..........\n\n"
          continue;
        }
        else if (name[i] == "."){
          this.show += "----..----\n\n"
          continue;
        }
      }
    this.show = '';
    } else {
      return;
    }
  }

  onGen(): void{
    let id = uuidv4();
    console.log(id);
  }

}
