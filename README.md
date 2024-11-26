# 2024-11-26 BOM och Local Storage

<details open>
<summary>Innehåll</summary>

- [BOM](#bom)

  - [Nyckelaspekter för BOM](#nyckelaspekter-för-bom)
  - [BOM vs DOM](#bom-vs-dom)
  - [Användningsområden](#användningsområden)
  - [Vad är BOM](#vad-är-bom)

- [Local Storage](#local-storage)
- [Web API](#web-api)

  </details>

## BOM

BOM står **Browser Object Model** och refererar till objekt och funktioner som webbläsaren tillhandahåller för att interagera med webbsidans miljö utanför själva HTML-dokumentet. HTML-dokumenter hanteras ju av DOM:en. BOM är en del av webbläsaren och omfattar massa olika funktionaliteter som vi kan använda oss utav.

För att komma åt denna så använder vi en global variabel som heter `window`.

```js
console.log(window);
```

Du kan använda `window`-objektet både implicit och explicit. Alltså:

```js
window.alert("An alert"); // Explicit användning

alert("An alert"); // Implicit användning
```

### Nyckelaspekter för BOM

1. **Window-objektet**, det globala objektet i webbläsarmiljön. Allt som finns på BOM:en är tillgängligt via detta objekt.

2. **Navigering och Historik**. BOM ger tillgång till webbläsarens historik och navigation.

   - **window.location**: ger information om och möjliggör manpulering av sidans URL.

   ```js
   console.log(window.location);
   ```

   - **window.history**: hanterar sidhistoriken.

   ```js
   console.log(window.history);
   window.history.back(); // Går tillbaks en sida
   window.history.forward(); // Går framåt en sida
   ```

3. **Skärm och fönster**: BOM gör det möjligt att hantera och få information om skärmen och webbläsarfönstret.

   - **window.screen**: ger information om skärmens upplösning.

   ```js
   console.log(window.screen);
   ```

   - **window.innerWidth** och **window.innerHeight**: ger information om webbläsarens bredd och höjd.

   ```js
   console.log(window.innerWitdh);
   ```

4. **Dialogrutor**

   - alert(): visar ett meddelande i en dialogruta
   - confirm(): visare en dialogruta med ett bekräftelseval
   - prompt(): visar en inmatningsruta där användaren kan ange en text.

5. **Timers**: I BOM:en finns det funktionalitet för att köra kod efter en viss tid eller under ett regelbundet tidsintervall.

   - **setTimeout**: Kör en funktion efter en viss tid i millisekunder. Första argumentet är en callback-funktin. Andra argumentet är tiden som måste passera innan callback-funktionen anropas.

     ```js
     setTimeout(() => {
       console.log("3000 ms has passed");
     }, 3000);
     ```

   - **setInterval**: kör en funktion upprepande gånger med ett givet tidsintervall i millisekunder.

     ```js
     setInterval(() => {
       console.log("1000 ms has passed");
     }, 1000);
     ```

6. **Event Handling**: BOM erbjuder metoder och event för att hantera händelser som påverkar webbläsarfönstret.

   - **resize-event**: körs varje gång som användare ändrar storleken på fönstret.

     ```js
     window.addEventListener("resize", () => {
       const width = window.innerWidth;
       const height = window.innerHeight;

       console.log({ height, width });
     });
     ```

### BOM vs DOM

- **BOM** handlar om interaktionen med webbläsarens miljö. _( fönstret, nagivering, historik, skärm, local storage och så vidare.. )_

- **DOM** handlar om att manipulera HTML och CSS i själva webbsidan, alltså ert HTML Dokument som läsex in utav browsern.

## Local Storage

**`localStorage`** är en del av BOM och används för att lagra data i användarens webbläsare på ett enkelt och beständigt sätt.

### **Vad är `localStorage`?**

- **localStorage** är en nyckel-värdebaserad lagring som tillhandahålls av webbläsaren.

  - Beständing och raderas inte när till exempel webbläsaren stängs ner eller du tappar nätverksuppkoppling.

  - Endast tillgänglig från samma domän och protokoll. _( same-origin-policy )_

### **Grundläggande metoder**

`localStorage` har enkla metoder för att sätta, läsa, uppdatera och ta bort data.

#### 1. **Spara data: `setItem(key, value)`**

```js
const username = "Niklas";
const userAge = 27;
const isAwesome = true;

localStorage.setItem("username", username);
localStorage.setItem("userAge", userAge);
localStorage.setItem("isAwesome", isAwesome);
```

#### 2. **Hämta data: `getItem(key)`**

```js
const username = localStorage.getItem("username");
const content = document.querySelector(".content");

const usernameHTML = `<p>${username}</p>`;
content.insertAdjacentHTML("afterbegin", usernameHTML);
```

Så, även fast vi stänger ner webbläsaren och sätter igång den igen så kommer vårt "username" att dyka upp i DOM:en eftersom den är sparad i Local Storage. Se hämtar som existerar så returneras det som förväntat, men försöker vi hämta något som inte finns så kommer "null" att returneras.

#### 3. **Ta bort en nyckel: `removeItem(key)`**

```js
localStorage.removeItem("isAwesome");
```

Finns det ett värde som kan hämtas via den nyckeln så kommer den att tas bort för evigt. Finns det inget värde som motsvarar nyckeln så kommer ingenting att hända.

#### 4. **Rensa all data: `clear()`**

```js
localStorage.clear();
```

Används för att ta bort allt i Local Storage.

Så för att logga ut local storage så kan du bara skriva in det i en console.log.

```js
console.log(localStorage);
```

### **Spara komplexa objekt med JSON**

Eftersom `localStorage` endast stöder strängar måste objekt serialiseras innan de sparas. För att göra det så finns det två metoder som vi kan använda oss utav.

`JSON.stringify()` - Konverterar objektet till en sträng.

`JSON.parse()` - Konverterar tillbaks strängen till det ursprungliga objektet.

```js
const user = {
  name: "Niklas",
  age: 27,
  isAwesome: true,
};

localStorage.setItem("user", user);
```

Detta kommer inte att funka som det ska för att browsern lyckas inte spara objektet som det är i local storage. Vi kan sen inte hämta det heller, det enda vi får tillbaks är något i stil med: `[object Object]` och det är ju inte så hjälpsamt.

Vi måste helt enkelt serialisera det innan vi sparar det.

```js
localStorage.setItem("user", JSON.stringify(user));
```

Nu kan vi även hämta det genom att konvertera tillbaks det till JS med hjälp av JSON.parse().

```js
const userFromLS = localStorage.getItem("user");
console.log(JSON.parse(userFromLS));
```

### **Vanliga användningsområden**

### **Säkerhet**

### **Begränsningar**

## Web API

[MDN Docs - Web API](https://developer.mozilla.org/en-US/docs/Web/API#specifications)

### Vad är relationen till BOM?
