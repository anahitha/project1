class Signup {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("Email");
        this.contact = createInput("Contact");
        this.password = createInput("Password");
        this.password2 = createInput("Confirm Password");
        this.button = createButton('Sign-in');
        this.button2 = createButton('Sign-up');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Sign-up");
        this.genres = createElement('h3', "Select your favourite genres:");
        this.radio = createRadio('h3');
        this.radio.option('science-fiction');
        this.radio2 = createRadio('h3');
        this.radio2.option('fantasy');
        this.radio5 = createRadio('h3');
        this.radio5.option('comedy');
        this.radio6 = createRadio('h3');
        this.radio6.option('non-fiction');
        this.radio7 = createRadio('h3');
        this.radio7.option('romance');
        this.radio8 = createRadio('h3');
        this.radio8.option('mystery');
        this.radio3 = createRadio('h3');
        this.radio3.option('dystopian-fiction');
        this.radio4 = createRadio('h3');
        this.radio4.option('historical fiction');
    }


    display() {
        this.input.position(630, 105)
        this.email.position(630, 165)
        this.contact.position(630, 135)
        this.button2.position(680, 430)
        this.button.position(750, 5)
        this.greeting.position(500, 105)
        this.text.position(630, 5)
        this.password.position(630,195)
        this.password2.position(630,225)
        this.genres.position(600,250)
        this.radio.position(600,300)
        this.radio2.position(600,330)
        this.radio3.position(600,360)
        this.radio4.position(600,390)
        this.radio5.position(750,360)
        this.radio6.position(750,390)
        this.radio7.position(750,330)
        this.radio8.position(750,300)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount++;
            User.index = peopleCount;
        });

    }
}