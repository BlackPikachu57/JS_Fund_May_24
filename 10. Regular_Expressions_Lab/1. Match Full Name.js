function solve(names) {
    const pattern = /\b[A-Z][a-z]+ \b[A-Z][a-z]+/g;
    let validNames = names.match(pattern);
    console.log(validNames.join(" "));
}

solve(
    "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
