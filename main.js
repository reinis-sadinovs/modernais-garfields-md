function Parbaudit() {
    var rad_poga = document.getElementsByName('r1');
    for (var i = 0; i < rad_poga.length; i++) {
        if (rad_poga[i].checked) {
           
            alert('Checked nr ' + i + ' radiobutton');
        }
    }
}
