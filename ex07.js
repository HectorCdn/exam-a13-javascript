function afficherElements(tab) {
	for (let i = 1; i < tab.length + 1; i++) {
        console.log(i);
    }
}

afficherElements([1, 2, 3, 4]); // Affiche : 1, 2, 3, 4 (un par ligne)
afficherElements([-1, 28, 44, 0]); // Affiche : -1, 28, 44, 0 (un par ligne)