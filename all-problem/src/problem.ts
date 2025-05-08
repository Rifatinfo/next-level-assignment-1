function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    } else {
        return value * 2;
    }
}

interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    let max = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > max) {
            max = products[i].price;
        }
    }

    const expensiveProduct = products.filter(fil => fil.price >= max);
    const convertedObjectExpensiveProduct = expensiveProduct[0];
    return convertedObjectExpensiveProduct;
}

async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw new Error('Error: Negative number not allowed');
    }
    const result = await new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(n * n)
        }, 1000);
    });
    return result;
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function getDayType(day: Day): string {
    switch (day) {
        case Day.Sunday:
        case Day.Saturday:
            return "Weekend";
        case Day.Monday:
        case Day.Tuesday:
        case Day.Wednesday:
        case Day.Thursday:
        case Day.Friday:
            return "Weekday";
        default:
            return 'Invalid Day'
    }
}

