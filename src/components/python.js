// src/components/python.js

export const pythonQuestions = [
  // CONCEPTOS BÁSICOS
  {
    q: "¿Cuál es la extensión típica de los archivos en Python?",
    opts: [".txt", ".py", ".exe", ".java"],
    ans: 1
  },
  {
    q: "¿Qué símbolo se usa para comentarios en Python?",
    opts: ["//", "#", "/*", "--"],
    ans: 1
  },
  {
    q: "¿Cuál es la función que muestra texto en consola?",
    opts: ["input()", "echo()", "print()", "output()"],
    ans: 2
  },
  {
    q: "¿Qué función se usa para recibir entrada del usuario?",
    opts: ["scan()", "read()", "input()", "get()"],
    ans: 2
  },
  {
    q: "¿Cuál de estos es el operador de asignación en Python?",
    opts: ["==", ":=", "=", "=>"],
    ans: 2
  },
  {
    q: "¿Qué tipo de dato es '123' en Python?",
    opts: ["int", "float", "str", "bool"],
    ans: 2
  },
  {
    q: "¿En Python, la indentación es obligatoria?",
    opts: [
      "No, es solo para legibilidad",
      "Sí, define los bloques de código",
      "Solo en funciones",
      "Solo en clases"
    ],
    ans: 1
  },
  {
    q: "¿Cuál es el resultado de type(42)?",
    opts: ["int", "<class 'int'>", "integer", "number"],
    ans: 1
  },

  // OPERADORES
  {
    q: "¿Cuál es el resultado de 3 // 2 en Python?",
    opts: ["1.5", "1", "2", "0"],
    ans: 1
  },
  {
    q: "¿Cuál es el resultado de 10 % 3 en Python?",
    opts: ["3", "1", "2", "Infinito"],
    ans: 1
  },
  {
    q: "¿Cuál es el resultado de 2 ** 3 en Python?",
    opts: ["6", "8", "5", "Error"],
    ans: 1
  },
  {
    q: "¿Cuál es el resultado de 5 > 3 and 2 < 4?",
    opts: ["True", "False", "Error", "None"],
    ans: 0
  },
  {
    q: "¿Cuál es el resultado de 5 > 3 or 2 > 4?",
    opts: ["True", "False", "Error", "None"],
    ans: 0
  },
  {
    q: "¿Cuál es el resultado de not True?",
    opts: ["True", "False", "1", "Error"],
    ans: 1
  },
  {
    q: "¿Qué operador se utiliza para concatenar strings?",
    opts: ["*", "&", "+", "."],
    ans: 2
  },
  {
    q: "¿Qué operador se utiliza para repetir una cadena?",
    opts: ["+", "*", "/", "**"],
    ans: 1
  },

  // ESTRUCTURAS DE DATOS
  {
    q: "¿Cuál es el resultado de len('Python')?",
    opts: ["5", "6", "7", "Error"],
    ans: 1
  },
  {
    q: "¿Qué estructura permite almacenar múltiples valores?",
    opts: ["string", "int", "list", "bool"],
    ans: 2
  },
  {
    q: "Si lista = [1, 2, 3, 4], ¿qué devuelve lista[-1]?",
    opts: ["1", "-1", "4", "Error"],
    ans: 2
  },
  {
    q: "¿Cuál es la diferencia entre list y tuple?",
    opts: [
      "No hay diferencia",
      "La tuple es mutable",
      "La list es mutable, la tuple inmutable",
      "La tuple puede tener más elementos"
    ],
    ans: 2
  },
  {
    q: "¿Qué estructura almacena pares clave-valor?",
    opts: ["list", "tuple", "dict", "set"],
    ans: 2
  },
  {
    q: "¿Cuál es el resultado de {'a': 1, 'b': 2}['a']?",
    opts: ["'a'", "1", "2", "Error"],
    ans: 1
  },
  {
    q: "¿Qué método agrega un elemento al final de una lista?",
    opts: ["add()", "insert()", "append()", "push()"],
    ans: 2
  },
  {
    q: "Si lista = [3, 1, 2], ¿cuál es el resultado de lista.sort()?",
    opts: [
      "[1, 2, 3]",
      "Devuelve None pero ordena la lista",
      "[3, 1, 2]",
      "Error"
    ],
    ans: 1
  },
  {
    q: "¿Qué es un conjunto (set) en Python?",
    opts: [
      "Una lista ordenada",
      "Una colección sin duplicados",
      "Un diccionario sin valores",
      "Una tupla variable"
    ],
    ans: 1
  },
  {
    q: "¿Cuál es el resultado de [1, 2, 3][0:2]?",
    opts: ["[1, 2]", "[2, 3]", "[1]", "[1, 2, 3]"],
    ans: 0
  },

  // ESTRUCTURAS DE CONTROL
  {
    q: "¿Cuáles son las estructuras de control en Python?",
    opts: [
      "if, for, while",
      "if, switch, do-while",
      "if, loop, repeat",
      "condition, iteration"
    ],
    ans: 0
  },
  {
    q: "¿Cuál no es una estructura de control?",
    opts: ["if", "for", "select", "while"],
    ans: 2
  },
  {
    q: "¿Cuál es la sintaxis básica de un if en Python?",
    opts: [
      "if condicion { }",
      "if (condicion):",
      "if condicion:",
      "if: condicion"
    ],
    ans: 2
  },
  {
    q: "¿Qué palabra clave se usa después de if cuando la condición es falsa?",
    opts: ["then", "else", "otherwise", "next"],
    ans: 1
  },
  {
    q: "¿Para qué sirve 'elif' en Python?",
    opts: [
      "Finalizar un bloque if",
      "Verificar múltiples condiciones",
      "Crear un bucle",
      "Saltarse código"
    ],
    ans: 1
  },
  {
    q: "¿Cuál es el resultado de este código? if 10 > 5: print('Sí') else: print('No')",
    opts: ["Sí", "No", "Error", "Nada"],
    ans: 0
  },
  {
    q: "¿Qué bucle se usa para iterar un número específico de veces?",
    opts: ["while", "do-while", "for", "repeat"],
    ans: 2
  },
  {
    q: "¿Qué devuelve range(5)?",
    opts: [
      "[0, 1, 2, 3, 4]",
      "[1, 2, 3, 4, 5]",
      "Una secuencia del 0 al 4",
      "Error"
    ],
    ans: 2
  },
  {
    q: "¿Cuál es el resultado de range(1, 4)?",
    opts: ["[1, 2, 3, 4]", "[1, 2, 3]", "[0, 1, 2, 3]", "Error"],
    ans: 1
  },
  {
    q: "¿Cuál es el resultado de range(0, 10, 2)?",
    opts: [
      "[0, 2, 4, 6, 8]",
      "[0, 2, 4, 6, 8, 10]",
      "[1, 3, 5, 7, 9]",
      "Error"
    ],
    ans: 0
  },
  {
    q: "¿Cuándo se usa un bucle while?",
    opts: [
      "Cuando sabemos cuántas iteraciones",
      "Cuando la condición es verdadera",
      "Cuando queremos iterar una lista",
      "Nunca"
    ],
    ans: 1
  },
  {
    q: "¿Qué se necesita para evitar un bucle infinito en while?",
    opts: [
      "break statement",
      "La condición debe cambiar",
      "Usar else",
      "No hay forma"
    ],
    ans: 1
  },
  {
    q: "¿Cuál es la diferencia entre break y continue?",
    opts: [
      "No hay diferencia",
      "break sale del bucle, continue salta iteración",
      "continue sale del bucle",
      "break salta iteración"
    ],
    ans: 1
  },
  {
    q: "¿Qué hace este código? for i in range(5): if i == 3: break print(i)",
    opts: [
      "Imprime 0, 1, 2, 3, 4",
      "Imprime 0, 1, 2",
      "Imprime 3, 4",
      "No imprime nada"
    ],
    ans: 1
  },

  // FUNCIONES
  {
    q: "¿Cuál es la sintaxis para definir una función?",
    opts: [
      "function nombre():",
      "def nombre():",
      "func nombre():",
      "define nombre():"
    ],
    ans: 1
  },
  {
    q: "¿Cuál es la diferencia entre parámetros y argumentos?",
    opts: [
      "No hay diferencia",
      "Parámetros en definición, argumentos en llamada",
      "Argumentos en definición",
      "Parámetros son números"
    ],
    ans: 1
  },
  {
    q: "¿Qué palabra clave devuelve un valor desde una función?",
    opts: ["give", "send", "return", "output"],
    ans: 2
  },
  {
    q: "¿Cuál es el resultado de este código? def suma(a, b): return a + b; resultado = suma(3, 5); print(resultado)",
    opts: ["8", "'3' '5'", "Error", "Nada"],
    ans: 0
  },
  {
    q: "¿Cuál es el alcance de una variable definida dentro de una función?",
    opts: [
      "Global",
      "Solo dentro de la función (local)",
      "En todo el programa",
      "No tiene alcance"
    ],
    ans: 1
  },

  // CONCEPTOS AVANZADOS
  {
    q: "¿Qué es una excepción en Python?",
    opts: [
      "Un comentario especial",
      "Un error durante la ejecución",
      "Una función especial",
      "Un tipo de variable"
    ],
    ans: 1
  },
  {
    q: "¿Para qué se usa try-except?",
    opts: [
      "Crear bucles",
      "Capturar y manejar excepciones",
      "Definir funciones",
      "Importar módulos"
    ],
    ans: 1
  },
  {
    q: "¿Qué función convierte un valor a entero?",
    opts: ["str()", "float()", "int()", "number()"],
    ans: 2
  },
  {
    q: "¿Qué función convierte un valor a cadena?",
    opts: ["int()", "string()", "str()", "text()"],
    ans: 2
  },
  {
    q: "¿Cómo se importa un módulo en Python?",
    opts: [
      "include modulo",
      "import modulo",
      "use modulo",
      "load modulo"
    ],
    ans: 1
  }
];