const express = require("express");
const router = express.Router();
const Account = require('../models/Account');

// GET route
// GET route
router.get('/account-info', async (req, res) => {
    try {
        // Log the request to check if it's hitting this endpoint
        console.log('Received GET request for /account-info');
        
        const data = await Account.find();
        console.log('Fetched data:', data); // Log the fetched data

        res.status(200).json({
            message: "All accounts Information",
            datadisplay: data
        });

    } catch (err) {
        console.error('Error fetching data:', err); // Log the error
        res.status(500).json({
            message: "Something is wrong",
            error: err.message
        });
    }
});

//get information by account number

router.get('/account-info/:accountNumber',async(request,res)=>{
    try
    {
        const data = await Account.find({accountNumber:request.params.accountNumber})
        res.status(200).json({
            message:"Account information",
            datadisplay:data
        })  
    }
    catch(err)
    {
        res.ststus(500).json({
            message:"something is wrong",
            error:err
        })

    }
})

// POST route
router.post('/add-account', async (req, res) => {
    try {
        // Create a new user using the request body
        const newUser = new Account({
            userName: req.body.userName,
            accountNumber: req.body.accountNumber, // Fixed key: `accountName` instead of `accountname`
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            balance: req.body.balance
        });

        // Save the new user to the database
        const result = await newUser.save();

        // Send success response
        res.status(200).json({
            message: "Account added successfully",
            accountInfo: result
        });
    } catch (err) {
        // Handle errors
        res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });
    }
});

router.delete('/delete-account/:id',async(req,res)=>{
    try{
        const data = await Account.deleteOne({_id:req.params.id})
        res.status(200).json({
            message:"Account deleted successfully",
            datadisplay:data
        })


    }
    catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    }
})

router.put('/update-account/:accountNumber',async(req,res)=>{
    try{
        const data = await Account.updateOne({ accountNumber: req.params.accountNumber },
            { $set: req.body },                          
            { new: true })
        res.status(200).json({
            message:"Account updated successfully",
            datadisplay:data
        })
    }
    catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    }
})

module.exports = router;
