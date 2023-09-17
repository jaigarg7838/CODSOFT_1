function buttonValue(value) {
    document.getElementById('inputValue').value += value;
  }

  function showResult() {
    let resultValue = document.getElementById('inputValue').value;
    try {
      document.getElementById('inputValue').value = eval(resultValue);
    } catch (error) {
      document.getElementById('inputValue').value = 'Error';
    }
  }

  function clearResult() {
    document.getElementById('inputValue').value = '';
  }