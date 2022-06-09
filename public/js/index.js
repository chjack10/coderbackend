const socket = io.connect();

const $productsList = document.querySelector('.products-list');
const $chatMessages = document.querySelector('.chat-messages');

const tryAsyncGetProductsListView = async (products) => {
  try {
    const template = await fetch('/views/products.hbs');
    const hbsTemplateCompiled = Handlebars.compile(await template.text());

    $productsList.innerHTML = hbsTemplateCompiled({
      products,
    });
  } catch (err) {
    console.log(err);
  }
};

const tryAsyncGetChatView = async (messages) => {
  try {
    const template = await fetch('/views/chat.hbs');
    const hbsTemplateCompiled = Handlebars.compile(await template.text());

    $chatMessages.innerHTML = hbsTemplateCompiled({
      messages,
    });
  } catch (err) {
    console.log(err);
  }
};

socket.on('products', tryAsyncGetProductsListView);
socket.on('chatMessages', tryAsyncGetChatView);

const handleNewProductFormSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  socket.emit('newProduct', {
    title: formData.get('title'),
    price: formData.get('price'),
    thumbnail: formData.get('thumbnail'),
  });
};

const handleChatFormSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  socket.emit('newChatMessage', {
    email: formData.get('email'),
    message: formData.get('message'),
  });
};

const $newProductform = document.querySelector('#new-product-form');
const $chatForm = document.querySelector('#chat');
$newProductform.addEventListener('submit', handleNewProductFormSubmit);
$chatForm.addEventListener('submit', handleChatFormSubmit);
