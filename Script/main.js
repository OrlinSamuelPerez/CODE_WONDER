const Porfolio = document.getElementById("Porfolio");

//get data firebase
db.collection("POST").orderBy("ID_PROYECT", "asc").get().then(async (querySnapShot)=>{
    querySnapShot.forEach((doc)=>{
        const DATA = doc.data();
        Porfolio.innerHTML += `
            <div class="card-porfolio" >
                <div>
                    <img src=${DATA.IMG} />
                </div>
                <div>
                    <h1>${DATA.TITLE}</h1>
                </div>
                <div>
                    <p>
                        ${DATA.DESCRIPTION}
                    </p>
                </div>
                <div>
                    <a href=${DATA.LINKONLINE} target="_blank">View Online </a>
                    <a href=${DATA.LINKGIT} target="_blank">View Code</a>
                </div>
                <br>
            </div>
        `; 
    })
})

//Get Aside
const IMG_ASIDE = document.getElementById('img-aside');
const P_ASIDE = document.getElementById('p-aside');
const H_ASIDE = document.getElementById('h-aside');

db.collection("ARTICLES").doc("Actual").get().then((doc) => {
    if (doc.exists) {
        const data = doc.data()
        H_ASIDE.innerHTML =`
            <h1>${data.TITLE}</h1>
        `;
        IMG_ASIDE.innerHTML =`
            <img src=${data.IMG}/>
        `;
        P_ASIDE.innerHTML =`
            <p>${data.DESCRIPTION}</p>
        `;

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


//ACTIVE MODAL
const Modal = document.getElementById("modal");
const modalFunction = ()=>{
    Modal.classList.toggle("modal-active")
}

const submitForm =async ()=>{
    
    const Name = document.getElementById("name").value
    const email = document.getElementById("email").value
    await db.collection("Contact").doc().set({Name, email})
}
