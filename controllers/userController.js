//SQL
const connection = require("../config/db");

exports.getAllUsers = (req, res) => {
    //SELECT
    connection.query("SELECT * FROM water_bills", (err, rows,fields) => {
        if (err) throw err;
        res.json(rows);
    });
};

exports.postwaterBill = (req, res) => {
    const { meter_number, consumer_name, cubic_meters_used, total_amount, status } = req.body;
    connection.query('INSERT INTO water_bills (meter_number, consumer_name, cubic_meters_used, total_amount, status) VALUES (?, ?, ?, ?, ?)', [meter_number, consumer_name, cubic_meters_used, total_amount, status], (err, result) => {
        if (err) throw err;
        res.json({ message: "Water bill created successfully", id: result.insertId });
    });
}
exports.putwaterBill = (req, res) => {
    const { id } = req.params;
    const { meter_number, consumer_name, cubic_meters_used, total_amount, status } = req.body;
    connection.query('UPDATE water_bills SET meter_number = ?, consumer_name = ?, cubic_meters_used = ?, total_amount = ?, status = ? WHERE id = ?', [meter_number, consumer_name, cubic_meters_used, total_amount, status, id], (err, result) => {
        if (err) throw err;
        res.json({ message: "Water bill updated successfully" });
    });
}