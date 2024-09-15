const toggleButton=document.getElementById('togglebutton')as HTMLButtonElement|null;
const skillsDive=document.getElementById('skills')as HTMLDivElement|null;

if(toggleButton && skillsDive){
    toggleButton.addEventListener('click',()=>{
        if(skillsDive.style.display ==== 'none') {
            skillsDive.style.display='block';
            toggleButton.value="hide skills";
        };
        else{
            skillsDive.style.display='none';
            toggleButton.value='show skills';
        };
    } );
};
else{
    console.log("required element not found in the dom");
}