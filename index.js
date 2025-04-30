function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'

    emailjs
        .sendForm (
            'service_7zgo0un',
            'template_xe6eb3x',
            event.target,
            'W_lgO3TBjTNfdLdEf'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList += ' modal__overlay--visible';
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert(
                'The email service is temporarily unavailable. Please contact me at email@email.com'
            );
        })
}