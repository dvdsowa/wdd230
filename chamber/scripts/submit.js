function publishToTable() {
  const name = document.getElementById('#name').value;
  const email = document.getElementById('#email').value;
  const rating = document.getElementById('#rating').value;
  const username = document.getElementById('#username').value;
  const tableElement = document.getElementById('table');
  const trElement = document.createElement('tr');
  const tbodyElement = document.createElement('tbody');
  const nameEle = document.createElement('td');
  const emailEle = document.createElement('td');
  const ratingEle = document.createElement('td');
  const userNameEle = document.createElement('td');
      nameEle.innerHTML = name;
      emailEle.innerHTML = email;
      ratingEle.innerHTML = rating;
      userNameEle.innerHTML = username;
      trElement.appendChild(nameEle);
      trElement.appendChild(emailEle);
      trElement.appendChild(ratingEle);
      trElement.appendChild(userNameEle);
      tbodyElement.appendChild(trElement);
      tableElement.appendChild(tbodyElement);
  }