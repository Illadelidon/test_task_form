$(document).ready(function () {
    loadMessages();

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        var newMessage = { name: name, email: email, message: message };

        var messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(newMessage);
        localStorage.setItem('messages', JSON.stringify(messages));

        loadMessages();

        $.ajax({
            url: 'service.php',
            method: 'POST',
            data: newMessage,
            success: function(response) {
                console.log("Message saved to database.");
            }
        });

        // Очищаємо форму
        $('#contactForm')[0].reset();
    });

    function loadMessages() {
        var messages = JSON.parse(localStorage.getItem('messages')) || [];

        $('#messagesTable tbody').empty();

        messages.forEach(function (message) {
            $('#messagesTable tbody').append(
                `<tr>
                    <td>${message.name}</td>
                    <td>${message.email}</td>
                    <td>${message.message}</td>
                </tr>`
            );
        });
    }
});
