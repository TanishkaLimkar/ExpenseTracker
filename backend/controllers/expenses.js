const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
   
    // Creating an instance of the IncomeSchema to get the income object to be sent to the backend
    const income = new ExpenseSchema({
        title,
        amount,
        category,
        description,
        date,
    });

    try {
        // Validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: "All fields required!!" });
        }

        if (isNaN(amount) || amount <= 0) {
            return res.status(400).json({ message: "Amount must be a positive number" });
        }

        await income.save();
        res.status(200).json({ message: 'Expense Added' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

    console.log(income);
};

exports.getExpense = async (req,res) => {
    try {
        const incomes= await ExpenseSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }
};

exports.deleteExpense = async(req,res) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
    .then((income)=>{
        res.status(200).json({message:'Expense Deleted'})
    })
    .catch((err)=>{
        res.status(200).json({message:'Internal Server Error'})
    })
}
