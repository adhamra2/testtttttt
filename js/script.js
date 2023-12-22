    // Get the h1 element by its ID
    const countingNumberElement = document.getElementById('firstCount');

    // Count up to 1000 and update the h1 content
    for (let i = 1; i <= 126; i++) {
        setTimeout(() => {
            countingNumberElement.textContent = i;
        }, i * 10); // Add a delay to make the counting visible, adjust the delay as needed
    }

        // Get the h1 element by its ID
        const countingNumberElement2 = document.getElementById('secondCount');

        // Count up to 1000 and update the h1 content
        for (let i = 1; i <= 183; i++) {
            setTimeout(() => {
                countingNumberElement2.textContent = i;
            }, i * 10); // Add a delay to make the counting visible, adjust the delay as needed
        }