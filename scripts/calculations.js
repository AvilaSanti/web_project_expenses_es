// Variable para almacenar el presupuesto inicial del usuario

let budgetValue = 0;

// Variable para llevar la cuenta del dinero total gastado

let totalExpensesValue = 0;

// Lista que contiene todos los registros de gastos

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

// Bucle que recorre la lista inicial para calcular el gasto total acumulado

for (const entry of expenseEntries) {
  totalExpensesValue += entry[1];
}

// Función para calcular el promedio de dinero gastado por entrada

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

// Función para calcular el balance

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

// Variable para guardar el color del balance

let balanceColor = "green";

// Función que cambia el color

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

// Función para calcular la suma de gastos de una sola categoría

function calculateCategoryExpenses(categoryName) {
  let categoryTotal = 0;
  for (const entry of expenseEntries) {
    if (entry[0] === categoryName) {
      categoryTotal += entry[1];
    }
  }
  return categoryTotal;
}

// Función para encontrar el nombre de la categoría con más gastos

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  let categoriesData = [];

  for (const category of categories) {
    let total = calculateCategoryExpenses(category);
    categoriesData.push([category, total]);
  }
  let maxExpense = 0;
  let maxCategory = "";

  for (const data of categoriesData) {
    if (data[1] > maxExpense) {
      maxExpense = data[1];
      maxCategory = data[0];
    }
  }
  return maxCategory;
}

// Función para añadir un nuevo gasto al sistema

function addExpenseEntry(newEntry) {
  expenseEntries.push(newEntry);
  totalExpensesValue += newEntry[1];
}
