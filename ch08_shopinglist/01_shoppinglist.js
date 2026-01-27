const shoppingInput = document.getElementById('shopping-input');
const priceInput = document.getElementById('price-input');
const addBtn = document.getElementById('add-btn');
const shoppingList = document.getElementById('shopping-list');
const totalPriceElement = document.getElementById('total-price');

document.addEventListener('DOMContentLoaded', () => {
    getList();
    updateTotalPrice();
});

addBtn.addEventListener('click', addListItem);

// 입력창에서 엔터 키를 눌러도 추가되도록 설정
[shoppingInput, priceInput].forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addListItem();
    });
});

function addListItem() {
    const itemText = shoppingInput.value.trim();
    const priceText = priceInput.value.trim();

    // 빈 값 검사
    if (itemText === "" || priceText === "") {
        alert("목록과 가격을 모두 입력해주세요!");
        return;
    }

    // 아이템 객체 생성
    const itemObj = {
        id: Date.now(),
        text: itemText,
        price: priceText, 
        completed: false
    };

    // 화면에 그리기
    createListElement(itemObj);

    // 로컬 스토리지 저장
    saveLocal(itemObj);

    // 합계 업데이트
    updateTotalPrice();

    // 입력창 초기화
    shoppingInput.value = "";
    priceInput.value = "";
    shoppingInput.focus();
}

function createListElement(itemObj) {
    const li = document.createElement('li');
    li.setAttribute('data-id', itemObj.id);
    if (itemObj.completed) li.classList.add('completed');

    // 천 단위 콤마 포맷팅
    const formattedPrice = Number(itemObj.price).toLocaleString();

    li.innerHTML = `
        <input type="checkbox" ${itemObj.completed ? 'checked' : ''}>
        <span class="text">${itemObj.text} (${formattedPrice}원)</span>
        <button class="delete-btn">삭제</button>
    `;

    // 체크박스 클릭 이벤트 (취소선 & 상태 업데이트)
    const checkbox = li.querySelector('input');
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
        updateLocalStatus(itemObj.id);
    });

    // 삭제 버튼 클릭 이벤트
    const delBtn = li.querySelector('.delete-btn');
    delBtn.addEventListener('click', () => {
        li.remove();
        removeLocal(itemObj.id);
        updateTotalPrice(); // 삭제 후 실시간 합계 갱신
    });

    shoppingList.appendChild(li);
}

function updateTotalPrice() {
    let items = localStorage.getItem('shoppingItems') ? JSON.parse(localStorage.getItem('shoppingItems')) : [];
    
    // 전체 금액 합산
    const total = items.reduce((sum, item) => sum + Number(item.price), 0);
    
    // 화면의 블루 카드 숫자 업데이트 (천 단위 콤마 포함)
    totalPriceElement.innerText = total.toLocaleString();
}

// 데이터 저장
function saveLocal(item) {
    let items = localStorage.getItem('shoppingItems') ? JSON.parse(localStorage.getItem('shoppingItems')) : [];
    items.push(item);
    localStorage.setItem('shoppingItems', JSON.stringify(items));
}

// 데이터 불러오기
function getList() {
    let items = localStorage.getItem('shoppingItems') ? JSON.parse(localStorage.getItem('shoppingItems')) : [];
    items.forEach(item => createListElement(item));
}

// 데이터 삭제
function removeLocal(id) {
    let items = JSON.parse(localStorage.getItem('shoppingItems'));
    const filteredItems = items.filter(item => item.id !== id);
    localStorage.setItem('shoppingItems', JSON.stringify(filteredItems));
}

// 체크 상태 업데이트
function updateLocalStatus(id) {
    let items = JSON.parse(localStorage.getItem('shoppingItems'));
    items.forEach(item => {
        if (item.id === id) item.completed = !item.completed;
    });
    localStorage.setItem('shoppingItems', JSON.stringify(items));
}
