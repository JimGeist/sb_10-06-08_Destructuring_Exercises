describe("Destructuring Exercise Object Destructuring 1", function () {

    it("numPlanets in new object is the same as facts.numPlanets", function () {
        expect(numPlanets).toEqual(facts.numPlanets);
    });

    it("yearNeptuneDiscovered in new object is the same as facts.yearNeptuneDiscovered", function () {
        expect(yearNeptuneDiscovered).toEqual(facts.yearNeptuneDiscovered);
    });

});


describe("Destructuring Exercise Object Destructuring 2 - use of spread", function () {

    it("numberOfPlanets in new object is the same as planetFacts.numberOfPlanets", function () {
        expect(numberOfPlanets).toEqual(planetFacts.numberOfPlanets);
    });

    it("discoveryYears object is set to everything else in planetFacts", function () {
        expect(JSON.stringify(discoveryYears)).toEqual(JSON.stringify({ yearDiscoveredNeptune: 1846, yearDiscoveredMars: 1659 }));
    });

});


describe("Destructuring Exercise Object Destructuring 3 - default values for function getUserData", function () {

    it("getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }) returns 'Your name is Alejandro and you like purple'", function () {
        expect(getUserData({ firstName: "Alejandro", favoriteColor: "purple" })).toEqual("Your name is Alejandro and you like purple");
    });

    it("getUserData({ firstName: 'Melissa' }) uses default of green for color and returns 'Your name is Melissa and you like green'", function () {
        expect(getUserData({ firstName: "Melissa" })).toEqual("Your name is Melissa and you like green");
    });

    it("getUserData({}) uses default of green for color and returns 'Your name is undefined and you like green'", function () {
        expect(getUserData({})).toEqual("Your name is undefined and you like green");
    });

});


describe("Destructuring Exercise Array Destructuring 1", function () {

    it("variable first is set to Maya, the first element in array ['Maya', 'Marisa', 'Chi'] ", function () {
        expect(first).toEqual("Maya");
    });

    it("variable second is set to Marisa, the first element in array ['Maya', 'Marisa', 'Chi'] ", function () {
        expect(second).toEqual("Marisa");
    });

    it("variable first is set to Chi, the first element in array ['Maya', 'Marisa', 'Chi'] ", function () {
        expect(third).toEqual("Chi");
    });

});


describe("Destructuring Exercise Array Destructuring 2 - spreading rest of values", function () {

    it("variable raindrops is set to 'Raindrops on roses', the first element of an array with 5 statements", function () {
        expect(raindrops).toEqual("Raindrops on roses");
    });

    it("variable whiskers is set to 'whiskers on kittens', the second element of an array with 5 statements", function () {
        expect(whiskers).toEqual("whiskers on kittens");
    });

    it("variable aFewOfMyFavoriteThings is set to the remaining 3 statements of an array with 5 statements", function () {
        expect(JSON.stringify(aFewOfMyFavoriteThings)).toEqual(JSON.stringify(["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]));
    });

});


describe("Destructuring Exercise Array Destructuring 3 - swapping values", function () {

    it("elements 2 and 3 of array numbers = [10, 20, 30] are swapped via [numbers[1], numbers[2]] = [numbers[2], numbers[1]]", function () {
        expect(JSON.stringify(numbers)).toEqual(JSON.stringify([10, 30, 20]));
    });

});


describe("ES2015 Refactoring - ES5 Assigning Variables to Object Properties", function () {

    it("passes test when aNew has the same value from objNew.numbers.aNew when values were set via let { numbers: { aNew, bNew } } = objNew;", function () {
        expect(aNew).toEqual(objNew.numbers.aNew);
    });

    it("passes test when aNew has the same value from a in the old (ES5) obj", function () {
        expect(aNew).toEqual(obj.numbers.a);
    });

    it("passes test when bNew has the same value from objNew.numbers.bNew when values were set via let { numbers: { aNew, bNew } } = objNew;", function () {
        expect(bNew).toEqual(objNew.numbers.bNew);
    });

    it("passes test when bNew has the same value from a in the old (ES5) obj", function () {
        expect(bNew).toEqual(obj.numbers.b);
    });

});


describe("ES5 Array 4-line Swap to ES2015 One-Line Array Swap with Destructuring", function () {

    it("passes test when the array elements were successfully swapped and the new array is [2, 1]", function () {
        expect(arraysAreTheSame(arrNew, [2, 1])).toEqual(true);
    });

    it("passes test when the swapped array via ES2015 code matches array from ES5 code", function () {
        expect(arraysAreTheSame(arrNew, arr)).toEqual(true);
    });

});


describe("Tests for raceResults function", function () {

    it('passes test when raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]) returns {first: "Tom", rest: ["David", "Pierre"], second: "Margaret", third: "Allison"}', function () {
        expect(JSON.stringify(raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]))).toEqual(JSON.stringify({ first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"] }));
    });

});
