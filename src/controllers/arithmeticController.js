function add(req, res) {
    const { num1, num2 } = req.body;
    const result = num1 + num2;
    res.json({ result });
  }
  
  function subtract(req, res) {
    const { num1, num2 } = req.body;
    const result = num1 - num2;
    res.json({ result });
  }
  
  function multiply(req, res) {
    const { num1, num2 } = req.body;
    const result = num1 * num2;
    res.json({ result });
  }
  
  function divide(req, res) {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
      res.status(400).json({ message: 'Cannot divide by zero' });
    } else {
      const result = num1 / num2;
      res.json({ result });
    }
  }
  
  module.exports = { add, subtract, multiply, divide };
  