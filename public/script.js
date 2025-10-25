const res = await fetch('http://localhost:/sulthaans',{
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ firstName, lastName, email, phone, guests, date, time, requests})
});

const data = await res.json();
if (data.message){
    //success
    console.log("your details sent to Sulthaans Database")
} else{
    alert(data.error);
}