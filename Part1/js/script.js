const form = document.getElementById('stressForm');
        const submitBtn = document.getElementById('submitBtn');
        const output = document.getElementById('output');

        submitBtn.addEventListener('click', function() {
            let isValid = true;
            const name = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            if (name.value === '') {
                nameError.textContent = 'Name is required.';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            const age = document.getElementById('age');
            const ageError = document.getElementById('age-error');
            if (age.value === '' || age.value < 0) {
                ageError.textContent = 'Age is required and must be a positive number.';
                isValid = false;
            } else {
                ageError.textContent = '';
            }

            const email = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(email.value)) {
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            const password = document.getElementById('password');
            const passwordError = document.getElementById('password-error');
            if (password.value === '') {
                passwordError.textContent = 'Password is required.';
                isValid = false;
            } else if (!password.checkValidity()) {
                passwordError.textContent = 'Password should have at least 8 characters with at least one lowercase letter, one uppercase letter, one number, and one special symbol.';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }
            const confirmPassword = document.getElementById('confirmPassword');
            const confirmPasswordError = document.getElementById('confirmPassword-error');
            if (confirmPassword.value === '') {
                confirmPasswordError.textContent = 'Confirm Password is required.';
                isValid = false;
            } else if (confirmPassword.value !== password.value) {
                confirmPasswordError.textContent = 'Passwords do not match.';
                isValid = false;
            } else {
                confirmPasswordError.textContent = '';
            }

            const stressLevel = document.getElementById('stressLevel');
            const stressLevelError = document.getElementById('stressLevel-error');
            if (stressLevel.value === '') {
                stressLevelError.textContent = 'Stress Level is required.';
                isValid = false;
            } else {
                stressLevelError.textContent = '';
            }

            const major = document.getElementById('major');
            const majorError = document.getElementById('major-error');
            if (major.value === '') {
                majorError.textContent = 'Major is required.';
                isValid = false;
            } else {
                majorError.textContent = '';
            }

            const comments = document.getElementById('comments');
            const commentsError = document.getElementById('comments-error');
            if (comments.value === '') {
                commentsError.textContent = 'Comments are required.';
                isValid = false;
            } else {
                commentsError.textContent = '';
            }

            if (isValid) {
                output.innerHTML = `
                    <h2>Form Submitted Successfully</h2>
                    <p>Name: ${name.value}</p>
                    <p>Age: ${age.value}</p>
                    <p>Email: ${email.value}</p>
                    <p>Stress Level: ${stressLevel.value}</p>
                    <p>Major: ${major.value}</p>
                    <p>Comments: ${comments.value}</p>
                `;
            } else {
                output.innerHTML = '';
            }
        });