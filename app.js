const form = document.getElementById('comments');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comments').add({
       name: form.name.value,
       comment: form.comment.value
    });
    form.name.value = '';
    form.comment.value = '';
});
