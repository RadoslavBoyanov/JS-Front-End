function cityInfo(city) {
    let keys = Object.keys(city);
    for (const key of keys) {
        console.log(`${key} -> ${city[key]}`);
    }
}

cityInfo(
    {
        name: "Plovdiv",
        area: 389,
        population: 1162358,
        country: "Bulgaria",
        postCode: "4000"
    }
)