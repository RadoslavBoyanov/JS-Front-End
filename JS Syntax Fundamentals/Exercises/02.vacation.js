function solve(people, group, day) {
    let price;
    if (group === 'Students') {
        if (people >= 30) {
            if (day === 'Friday') {
                price = people * 8.45;
            }
            else if (day === 'Saturday') {
                price = people * 9.80;
            }
            else if (day === 'Sunday') {
                price = people * 10.46;
            }

            price = price * 0.85;

        }
        else {
            if (day === 'Friday') {
                price = people * 8.45;
            }
            else if (day === 'Saturday') {
                price = people * 9.80;
            }
            else if (day === 'Sunday') {
                price = people * 10.46;
            }

        }
    }
    else if (group === 'Business') {
        if (people >= 100) {
            if (day === 'Friday') {
                price = people * 10.90;
                price -= 10 * 10.90;
            }
            else if (day === 'Saturday') {
                price = people * 15.60;
                price -= 10 * 15.60;
            }
            else if (day === 'Sunday') {
                price = people * 16;
                price -= 10 * 16;
            }
        }
        else {
            if (day === 'Friday') {
                price = people * 10.90;
            }
            else if (day === 'Saturday') {
                price = people * 15.60;
            }
            else if (day === 'Sunday') {
                price = people * 16;
            }
        }
    }
    else if (group === 'Regular') {
        if (people >= 10 && people <= 20) {
            if (day === 'Friday') {
                price = people * 15;

            }
            else if (day === 'Saturday') {
                price = people * 20;

            }
            else if (day === 'Sunday') {
                price = people * 22.50;

            }

            price = price * 0.95;
        }
        else {
            if (day === 'Friday') {
                price = people * 15;
            }
            else if (day === 'Saturday') {
                price = people * 20;
            }
            else if (day === 'Sunday') {
                price = people * 22.50;
            }
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`)
}

// solve(30, "Students", "Sunday")
// solve(40,"Regular", "Saturday")
// solve(100, "Business", "Sunday")
// solve(10, 'Students', 'Friday')
// solve(50, "Business", "Saturday")