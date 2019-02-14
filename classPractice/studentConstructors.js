class Student {
  constructor(firstName, lastName, year, tardies) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sportTeam() {

  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) return `${this.fullName()} has been expelled`;
    console.log(`${this.fullName()} has been late ${this.tardies} times`);
  }
  addScore(score) {
    this.scores.push(score);
    console.log(`Ian's scores are ${this.scores}`)
    return this.scores;
  }
  static enrollStudents(...students) {
    // Do something to each student
  }
}

var ian = new Student("Ian", "Robinson", 3);
var v = new Student("v", "d'rozario", 2);
var pete = new Student("pete", "mcdonald", 1);


var newInformation = [1,2,3];

newInformation.push("hi")
newInformation.push(99)

ian.fullName();
ian.markLate();
ian.markLate();
ian.markLate();
ian.markLate();
ian.addScore(2);
ian.addScore(2);
console.log(Object.values(Student));


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1,p2));
