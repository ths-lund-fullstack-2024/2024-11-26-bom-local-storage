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

### Användningsområden

## Local Storage

**`localStorage`** är en del av BOM och används för att lagra data i användarens webbläsare på ett enkelt och beständigt sätt. Här är en fördjupning om hur det fungerar:

### **Vad är `localStorage`?**

### **Grundläggande metoder**

#### 1. **Spara data: `setItem(key, value)`**

#### 2. **Hämta data: `getItem(key)`**

#### 3. **Ta bort en nyckel: `removeItem(key)`**

#### 4. **Rensa all data: `clear()`**

#### 5. **Kontrollera antal objekt: `length`**

#### 6. **Iterera genom alla nycklar**

### **Spara komplexa objekt med JSON**

### **Vanliga användningsområden**

### **Säkerhet**

### **Begränsningar**

## Web API

[MDN Docs - Web API](https://developer.mozilla.org/en-US/docs/Web/API#specifications)

### Vad är relationen till BOM?
