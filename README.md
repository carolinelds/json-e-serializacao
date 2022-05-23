# JSON e serialização

## 1. O que é serialização e deserialização? Quando precisamos usar essa técnica?
Serialização é o ato de converter dados complexos (como objetos e arrays) em strings, e deserialização significa transformar uma string de volta para o seu formato de dado original. 

Essa técnica é muito utilizada quando precisamos armazenar dados no LocalStorage, que só é capaz de guardar strings.

## 2. O que é e quais as regras do formato JSON?
## 3. Como podemos converter um objeto JS em JSON e vice versa?
Para converter um objeto JS em JSON, utilizamos a função `JSON.stringify(<objeto>)`.

Para converter de JSON para um objeto JS, utilizamos a função `JSON.parse(<dados-serializados>)`.

## 4. O que acontece quando serializamos objetos que tenham uma função dentro? Por quê?
## 5. O que é XML? Como serializamos um objeto JS em XML?
## 6. O que é YAML? Como serializamos um objeto JS em YAML?
## 7. Compare um objeto serializado em JSON, XML e YAML (lado a lado).
