U ovom zadatku je potrebno samostalno uraditi [counter primer iz redux repozitorijuma](https://github.com/reactjs/redux/tree/master/examples/counter) i izvršiti određene izmene na tom primeru. Svrha zadatka je pored provere razumevanja Redux biblioteke i uvod u razumevanje potrebe za proširivanjem arhitekture zasnovane na React i Redux bibliotekama.

Nephodni uslovi:
1. Dobro poznavanje JS-a (završene radionice: functional...)
2. Poznavanje i razumevanje React biblioteke (razumevanje većeg dela [zvanične dokumentacije](https://facebook.github.io/react/docs/getting-started.html))
3. Poznavanje i razumevanje Redux biblioteke (razumevanje većeg dela [zvanične dokumentacije](http://redux.js.org/docs/introduction/index.html))
4. Osnovno razumevanje git-a (trebalo bi da je git workshop dovoljan)

Uputstvo:

1. Shvatiti originalni [counter primer](https://github.com/reactjs/redux) (examples > counter). Pokrenuti (`npm install` pa `npm start` iz foldera counter), testirati, shvatiti funkcionalnosti. Dobro protumačiti kod.

2. Isključiti proxy podešavanja za git komandom
```
git config --global http.proxy "" && git config --global https.proxy ""
```

3. Klonirati repozitorijum
```
git clone http://pptfs:8080/tfs/ObukaCollection/_git/Obuka
```

4. Napraviti branch sa svojim username-om na kom će biti implementiran zadatak. Npr.:
```
git checkout -b speric
```

5. Iz foldera js-frontend pokrenuti `npm install` pa `npm start`

6. Napisati svoju verziju counter aplikacije koja ima potpuno iste funkcionalnosti
  > Potpuno je ok da napisan kod bude identičan originalnom, ali je važno da ga ispišete sami i sa razumevanjem. Ovo je važno zbog narednih koraka. Ako imate problema sa ovim korakom vratite se na korak 1., kao i, ako je potrebno, dodatan rad na stavkama iz Neophodnih uslova.

7. U originalnom counter primeru, logika funkcionalnosti "Increment if odd" je implementirana primarno u `Counter` component-i. Potrebno je logiku ove funkcionalnosti prebaciti u `reducer`.
  > Hint: Potreban je novi tip akcije. Npr: `'INCREMENT_IF_ODD'`

8. Implementirati "Increment async" funkcionalnost prema [preporučenom načinu iz Redux dokumentacije](http://redux.js.org/docs/advanced/AsyncActions.html). Cilj je da se asinhrona logika (`setTimeout`) izbaci iz `Counter` component-e

  > Hint: za razliku od drugih funkcionalnosti, za ovu je neophodno napraviti Action creator

> Counter primer koristi [no semicolons](http://eslint.org/docs/rules/semi.html#never) konvenciju. U ovom zadatku je poštujte (samo u ovom zadatku :-) )

Opcioni koraci (napredniji koraci, koji su jako korisni da bi se bolje shvatila potreba za proširivanjem arhitekture):

1. Na posebnom branch-u ({username}-pair, Npr. speric-pair) pokušati implementaciju aplikacije "Pair of counters" koja istovremeno prikazuje 2 counter-a, jedan ispod drugog koji rade nezavisno. Ograničenje je da je potrebno iskoristiti implementaciju counter komponente sa što manje izmena, i to njen `reducer`, prezentacionu `Counter` component-u, kao i container componentu implementiranu u index.js fajlu (linije 12-16). Podela na prezentacione i container komponente je objašnjena u [Redux dokumentaciji](http://redux.js.org/docs/basics/UsageWithReact.html). Ideja koraka je da se upoznate sa ograničenjima "sirove" Redux arhitekture, a ne da se funkcionalnost po svaku cenu implementira.
  > Hint: Osnovni alat za dekompoziciju aplikacije u osnovnoj Redux arhitekturi je [combineReducers](http://redux.js.org/docs/api/combineReducers.html) funkcija
  
  > Ovaj korak je prilično zahtevan, tako da ako ne uspete da ga rešite, pređite na sledeći.

2. Na counter primeru implementirati "Increment async if odd" funkcionalnost, koja asinhrono povećava brojač, samo ukoliko je trenutno stanje brojača neparan broj. Ograničenje: logika ne sme biti implementirana u `Counter` component-i.
  > Hint: thunk koji je moguće vratiti iz action creator-a može da primi 2 parametra

  > Razmisliti, kako bi ovakva implementacija uticala na implementaciju aplikacije "Pair of counters"

3. Proizvesti nameran bug u `reducer` handler-u za `'INCREMENT'` akciju:
```js
...
    case 'INCREMENT':
      return '' + state + 1
...
```
Analizirati šta se desilo sa aplikacijom.

** Potrudite se da koraci 6. 7. i 8. (i opcioni 2) budu commit-ovani posebno. Opcioni korak 1. je poseban branch, kako stoji u uputstvu. Opcioni korak 3. nema potrebe commit-ovati, on je samo pokazni **

Na kraju pushovati projekat na branch pod vašim imenom. Npr.:
```
git push --set-upstream origin speric
git push --set-upstream origin speric-pair
```
