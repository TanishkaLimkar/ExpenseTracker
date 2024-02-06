const { addExpense, getExpense, deleteExpense } = require('../controllers/expenses')
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income')

const router = require('express').Router()

//INCOME
router.post('/add-income',addIncome)
router.get('/get-incomes',getIncomes)
router.delete('/delete-income/:id',deleteIncome)

//EXPENSE
router.post('/add-expense',addExpense)
router.get('/get-expenses',getExpense)
router.delete('/delete-expense/:id',deleteExpense);

module.exports = router