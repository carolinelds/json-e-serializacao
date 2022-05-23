# JSON e serialização

## 1. O que é serialização e deserialização? Quando precisamos usar essa técnica?
Serialização é o ato de converter dados complexos (como objetos e arrays) em strings, e deserialização significa transformar uma string de volta para o seu formato de dado original. 

Essa técnica é muito utilizada quando precisamos armazenar dados no LocalStorage, que só é capaz de guardar strings.

## 2. O que é e quais as regras do formato JSON?
As regras de sintaxe JSON são um subconjunto das regras de sintaxe do JavaScript. Abaixo, as regras do formato JSON:

1. Os nomes dos atributos devem estar dentro de aspas duplas. 
> P. ex.: `"name"`, `"age"`

2. Os dados devem estar no formato atributo:valor. 
> P. ex.: `"name":"Carol"`, `"age":27`

3. Valores aceitos para os atributos:
- Strings: devem estar entre " ", não pode ser ' '.
- Number
- Objeto
- Array 
- Boolean
- null
> Não são aceitos como valores em JSON: função, data, undefined.

4. Objetos JSON devem estar dentro de chaves. 
> P. ex.: `{ "name":"Carol" }`

5. Arrays em JSON devem estar dentro de colchetes.
> P. ex.: `[ {"day":1}, {"day":2}, {"day":3} ]`

6. Dados dentro de objetos ou arrays devem ser separados por vírgula. 
> P. ex.: 
 
```
{
  "name":"Carol",
  "age":27,
  "student": true
}
```

## 3. Como podemos converter um objeto JS em JSON e vice versa?
Para converter um objeto JS em JSON, utilizamos a função `JSON.stringify(<objeto>)`.

Para converter de JSON para um objeto JS, utilizamos a função `JSON.parse(<dados-serializados>)`.

## 4. O que acontece quando serializamos objetos que tenham uma função dentro? Por quê?

A função irá desaparecer na versão serializada em JSON, tanto seu valor/sua chamada quanto o nome do seu atributo. 

Isso acontece porque funções não são aceitas pelo JSON como valores de atributos.

## 5. O que é XML? Como serializamos um objeto JS em XML?
XML significa eXtensible Markup Language, e foi criada para armazenar e transportar dados, com o objetivo de ser facilmente entendida tanto por humanos quando máquinas.

Não existe uma função nativa para serializar um objeto JS em XML. Podemos utilizar bibliotecas de terceiros, como é o caso dessa para Node.js: https://github.com/wankdanker/node-object-to-xml

Também pode-se utilizar sites que fazem essa conversão, como por exemplo esse: https://www.convertsimple.com/convert-javascript-object-to-xml/

## 6. O que é YAML? Como serializamos um objeto JS em YAML?


## 7. Compare um objeto serializado em JSON, XML e YAML (lado a lado).

### Referências

W3Schools. **JSON Syntax**. Disponível em: < https://www.w3schools.com/js/js_json_syntax.asp >. Acesso em: 23 mai. 2022.
W3Schools. **JSON Stringify**. Disponível em: < https://www.w3schools.com/js/js_json_stringify.asp >. Acesso em: 23 mai. 2022.
W3Schools. **XML Tutorial**. Disponível em: < https://www.w3schools.com/xml/default.asp >. Acesso em: 23 mai. 2022.
