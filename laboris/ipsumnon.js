function processStep(step) {
    if (step > 0) {
        console.log("Step is positive.");
        // Add logic for positive steps here
    } else if (step < 0) {
        console.log("Step is negative.");
        // Add logic for negative steps here
    } else {
        console.log("Step is zero.");
        // Add logic for step equal to zero here
    }
}

// Example usage
processStep(5);  // Output: Step is positive.
processStep(-3); // Output: Step is negative.
processStep(0);  // Output: Step is zero.
