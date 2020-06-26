var form;
var user;
var peopleCount = 0;

function setup() {
    canvas = createCanvas(600, 600);
    form = new AddBook()
    form.display();
    user = new User();
    console.log(peopleCount);
}