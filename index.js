
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1)

// Constructor

function Circle(radius) {
    this.radius = radius; 
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);

function Stopwatch() {
    let duration = 0;
    let initialTime = null;
    let finalTime = null;
    this.start = function() {
        if (initialTime != null) 
            throw new Error('Stopwatch has already started.')

        initialTime = new Date();
    };
    this.stop = function() {
        if (finalTime != null) 
            throw new Error('Stopwatch is not started.')
        finalTime = new Date();
        const seconds = (finalTime.getTime() - initialTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function() {
        initialTime = null;
        finalTime = null;
        duration = 0
    };

    Object.defineProperty(this,'duration',{
        get: function() { return duration;}
    });
}

