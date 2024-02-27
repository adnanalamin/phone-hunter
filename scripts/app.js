const loadPhone = async (searchPhone) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones);
};

const displayPhone = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = '';
  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card w-full bg-base-100 shadow-xl`;
    phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
           <img src="${phone.image
           }" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name
            }</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <h4 class="text-2xl">$999</h4>
            <div class="card-actions font-bold">
                <button class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;
    phoneContainer.appendChild(phoneCard);
  });
};

// Search

const handelSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText);
}

// loadPhone();
