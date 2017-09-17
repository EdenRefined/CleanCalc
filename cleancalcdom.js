
var handlers = {
    operateIntermediary: function() {
        var arg1 = document.getElementById('btn9, btn8, btn7, btn6, btn5, btn4, btn3, btn2, btn1, btn0');
        var arg2 = document.getElementById('btn9, btn8, btn7, btn6, btn5, btn4, btn3, btn2, btn1, btn0');
        operate.addOperateIntermediary(lastResult.value);
        display.value.event.lastResult;
    },

};

var view = {   
    setUpEventListeners: function () {
        var calcButton = document.querySelector('btn9, btn8, btn7, btn6, btn5, btn4, btn3, btn2, btn1, btn0');

        calcButton.addEventListener('click', function(event) {
            var elementClicked = event.target;

            if (elementClicked.className === 'btn9, btn8, btn7, btn6, btn5, btn4, btn3, btn2, btn1, btn0') {
                handlers.operateIntermediary(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();