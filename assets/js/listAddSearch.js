function ekle(){
    let listOfperson = []
    let numberOfPerson = Number(prompt("Kaç kişi eklemek istiyorsunuz?"));
    for (let i = 0; i < numberOfPerson; i++) {
        let pushedName = prompt((i + 1) + ". kişinin ismini girin:").toLowerCase();
        listOfperson.push(pushedName);
    }
    console.table(listOfperson);
    
}

ekle();
