var toggleButton = document.getElementById('togglebutton');
var skillsDive = document.getElementById('skills');
if (toggleButton && skillsDive) {
    toggleButton.addEventListener('click', function () {
        if (skillsDive.style.display === 'none') {
            skillsDive.style.display = "block";
            toggleButton.value = "Hide skils";
        }
        else {
            skillsDive.style.display = 'none';
            toggleButton.value = 'show skills';
        }
        {
            console.log('Required elment not found in the dom');
        }
    });
}
;