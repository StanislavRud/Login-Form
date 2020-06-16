let fields = document.querySelectorAll('input');
let btn = document.querySelector('.btn');

let check = () => {
    if (fields[0].value != '' && fields[1].value != '') {
        btn.disabled = false;
    }
    else {
        btn.disabled = true

    }
}

fields[0].addEventListener('keyup', check);
fields[1].addEventListener('keyup', check);

let showPass = document.querySelector('#show-password');

let openPass = () => {
    if (showPass.classList[2] == 'fa-eye-slash'){
        showPass.classList.remove('fa-eye-slash');
        showPass.classList.add('fa-eye');
        fields[1].type = 'text';
    } else {
        showPass.classList.remove('fa-eye');
        showPass.classList.add('fa-eye-slash');
        fields[1].type = 'password';
    }
}


showPass.addEventListener('click', openPass)