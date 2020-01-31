document.getElementById('inputGroupSelect02').addEventListener('change', function () {
    var x = document.getElementById("inputGroupSelect02").selectedIndex;
    // console.log(x)
    var style =  x ? 'block' : 'none';
    document.getElementById('hidden_div').style.display = style;
});