//Scope:
'use strict';

// primer1:
function foo1(a) {
    console.log( a + b );
}
const b = 3;
foo1(2);
/* Objasnjenje:
    engine nije nasao referencu za varijablu be unnutar scopa f-je foo
    ali je nasao unutas spoljasnjeg scopa (scopa dokumenta)
*/


// primer2:
// function foo2(m) {
//     console.log( m + n);
//     n = m;
// }
// foo2(2);
/* Objasnjenje:
    engine nije nasao referencu za varijablu n unutar scopa f-je foo,
    jer tamo nije deklarisana varijabla b. Zatim nije nasao referencu za varijablu b ni unutar spoljasnje scopa.
    A posta je u 'strict' modu, spoljasnji (global) scope nece napraviti novu varijablu. Da nije u 'strict' modu napravio bi je.
*/

// Lexial scope:

// primer1:
function foo3(x) {
    const y = x * 2;
    function bar3(z) {
        console.log(x, y, z);
    }
    bar3(y * 3);
}
foo3(2);
/* Objasnjenje:
    Kada engine izvrsava komandu console.log on pocinje da trazi prvu od 3 referencirane varijable (x, y, z).
    Pocinje sa scopom od f-je bar3 gdje ne nalazi prvu varijbliu koju trazi, tj varijablu x.
    Zatim ulazi u spoljasnji scope (scope f-je foo3) i tamo nalazi trazenu varijablu x = 2.
    Vraca se u f-ju bar3  i pocinje trazi drugu varijablu, tj varijablu y, u scopu f-je bar3.
    Ne nalazi je u scopu f-je bar3, pa prelazi u spoljasnji scope (scope f-je foo3) i tamo nalazi trazenu varijablu y = x * 2 = 4.
    Vraca se u f-ju bar3 i pocinje da trazi trecu varijablu, tj varijablu z, u scopu f-je bar3.
    Tamo nalazi trazenu varijablu z i odmah je koristi iako je varijabla z postoji i unutar scopa od f-je foo3.
    Scope look-up prestaje potragu cim nadje prvi pogodak.
*/
/* Zakljucak:
    Nije bitno gdje i kako je pozvana funkcija, jer lexial scope od pozvane f-je je definisan tacno na mjestu
    na kom je f-ja deklarisana (napisana)!
*/
//primer2:
function foo4(p) {
    function bar4(q){
        console.log(p, q);
    }
    const q = 6;
    bar4(q);
}
// const q = 4;
foo4(2);


// ------------------ Switch statement ---------------------

console.log('switch statement');

const slovo = 'h';

const proba = () => {
    switch(slovo) {
        case 'a': return 'a';
        case 'b': return 'b';
        case 'c': return 'c';
        case 'd': return 'd';
        case 'e': return 'e';
        case 'f': return 'f';
        case 'g': return 'g';
        case 'h': return 'h';
        case 'i': return 'i';
        case 'j': return 'j';
        default: throw new Error('greska');
    }
}

console.log(proba());

(() => {
    slovo === 'a' ? 'a' : (
        slovo === 'b' ? 'b' : (
            slovo === 'c' ? 'c' : (
                slovo === 'd' ? 'd' : (
                    slovo === 'e' ? 'e' : (
                        slovo === 'f' ? 'f' : (
                            slovo === 'g' ? 'g' : (
                                slovo === 'h' ? 'h' : (
                                    slovo === 'i' ? 'i' : (
                                        slovo === 'j' ? 'j' : (throw new Error ('greska'))
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )

})();




(() => {
    console.log('proba');

})();