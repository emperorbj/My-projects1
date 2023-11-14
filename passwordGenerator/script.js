const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
        const numbers = '0123456789'
        const length = 12
        const allChars = upperCase + lowerCase + numbers
        const inputBox = document.querySelector('input')

        document.querySelector('.btn').addEventListener('click',genPass)

        function genPass(){
            let password = ''
            password += upperCase[Math.floor(Math.random() * upperCase.length)]
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
            password += numbers[Math.floor(Math.random() * numbers.length)]

            while(length > password.length){
                password += allChars[Math.floor(Math.random() * allChars.length)]
            }
            inputBox.value = password

        }

        document.querySelector('.copied').addEventListener('click',copy)

        function copy(){
            inputBox.select();
            document.execCommand('copy')
        }