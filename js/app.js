// We will use the data attribute to display the values in the counter
const counters = document.querySelectorAll('.counter');


counters.forEach(counter => {
    // The innnerText will be set to string of 0
    counter.innerText = '0';

    // Function updateCounter created
    const updateCounter = () => {

        // Get the target which is in the data-target attribute. To convert a string to a number so we can do math on it we use +
        const target = +counter.getAttribute('data-target');

        // This will be a string
        // console.log(typeof target, target)

        // New variable, whatever is in the innerText we had set to zero but now we want to get it
        const c = +counter.innerText;

        // Creating the increment, depending on the number it will run fast or slow
        const increment = target / 200;

        // Make sure the C is less than target
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;

            // We don't want it to stop at the first increment, we want it to run up to the target 
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})