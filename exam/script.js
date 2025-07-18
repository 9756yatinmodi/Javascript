const formcontainer = document.querySelector(".form-container");

const mainTitle = document.createElement("h2");
mainTitle.textContent = "Add New Product 🛒";

const form = document.createElement("form");

const formproduct = document.createElement("div");
formproduct.className = "form-group";
const productname = document.createElement("label");
productname.textContent = "Product Name:";
const productinput = document.createElement("input");
productinput.type = "text";
productinput.placeholder = "Enter product name";
formproduct.append(productname, productinput);

const formprice = document.createElement("div");
formprice.className = "form-group";
const pricelabel = document.createElement("label");
pricelabel.textContent = "Price (₹):";
const priceinput = document.createElement("input");
priceinput.type = "number";
priceinput.placeholder = "Enter price";
formprice.append(pricelabel, priceinput);

const formcategory = document.createElement("div");
formcategory.className = "form-group";
const categorylabel = document.createElement("label");
categorylabel.textContent = "Category:";
const categoryselect = document.createElement("select");
["Select category", "Electronics", "Clothing", "Books", "Appliances"].forEach(cat => {
  const option = document.createElement("option");
  option.textContent = cat;
  categoryselect.appendChild(option);
});
formcategory.append(categorylabel, categoryselect);

const formimg = document.createElement("div");
formimg.className = "form-group";
const imglabel = document.createElement("label");
imglabel.textContent = "Product Image:";
const imginput = document.createElement("input");
imginput.type = "file";
formimg.append(imglabel, imginput);

const formdescription = document.createElement("div");
formdescription.className = "form-group";
const descriptionlabel = document.createElement("label");
descriptionlabel.textContent = "Description:";
const descriptionarea = document.createElement("textarea");
descriptionarea.rows = 3;
descriptionarea.placeholder = "Enter description";
formdescription.append(descriptionlabel, descriptionarea);

const btndiv = document.createElement("div");
btndiv.className = "form-group full";
const submit = document.createElement("button");
submit.id = "submit";
submit.textContent = "Add Product";
submit.type = "button";
btndiv.appendChild(submit);

form.append(formproduct, formprice, formcategory, formimg, formdescription, btndiv);
formcontainer.append(mainTitle, form);

const displayDiv = document.getElementById("display");
let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = null;

function resetForm() {
  productinput.value = "";
  priceinput.value = "";
  categoryselect.selectedIndex = 0;
  imginput.value = "";
  descriptionarea.value = "";
  editIndex = null;
  submit.textContent = "Add Product";
}

function renderProducts() {
  displayDiv.innerHTML = "";
  products.forEach((product, index) => {
    const box = document.createElement("div");
    box.className = "product-box";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = "Product Image";

    const title = document.createElement("h2");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `₹ ${product.price}`;

    const category = document.createElement("p");
    category.textContent = `Category: ${product.category}`;

    const desc = document.createElement("p");
    desc.textContent = product.description;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = () => {
      productinput.value = product.name;
      priceinput.value = product.price;
      categoryselect.value = product.category;
      descriptionarea.value = product.description;
      editIndex = index;
      submit.textContent = "Update Product";
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => {
      products.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(products));
      renderProducts();
    };

    box.append(img, title, price, category, desc, editBtn, deleteBtn);
    displayDiv.appendChild(box);
  });
}

submit.addEventListener("click", () => {
  const name = productinput.value.trim();
  const price = priceinput.value.trim();
  const category = categoryselect.value;
  const description = descriptionarea.value.trim();

  if (!name || !price || category === "Select category") {
    alert("Please fill in all required fields.");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const image = reader.result;

    const newProduct = { name, price, category, description, image };

    if (editIndex !== null) {
      products[editIndex] = newProduct;
    } else {
      products.push(newProduct);
    }

    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
    resetForm();
  };

  if (imginput.files.length > 0) {
    reader.readAsDataURL(imginput.files[0]);
  } else {
    if (editIndex !== null) {
      // Retain existing image during update if not changed
      const existingImage = products[editIndex].image;
      const updatedProduct = { name, price, category, description, image: existingImage };
      products[editIndex] = updatedProduct;
      localStorage.setItem("products", JSON.stringify(products));
      renderProducts();
      resetForm();
    } else {
      alert("Please select an image.");
    }
  }
});

renderProducts(); 
