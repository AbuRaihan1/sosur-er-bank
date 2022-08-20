// selecting elements

let loginEmail = document.getElementById("user_email");
let loginPass = document.getElementById("user_password");
let loginButton = document.getElementById("login_button");

loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  let email = loginEmail.value;
  let password = loginPass.value;
  if (email == "jamai@sosur.com" && password == "sosur") {
    window.location.href = "bank.html";
  } else {
    alert("opps!! worng email or password");
  }
});

// done login related work, authantication.



// একটা ডিসকাউন্ট ক্যালকুলেটর এর প্রাকটিস দিয়েছি। সেটা করো। যেখানে একটা প্রাইস লেখা থাকবে এবং একটা বাটন আছে। সেটাতে ক্লিক করলে প্রাইস ৩০% কমে যাবে। এইটার আরেকটু এডভান্সড ভার্সন হবে। তুমি যেদিন Apply বাটনে ক্লিক করবে তখন যদি পাশের টেক্সট বক্স এ DOM লেখা থাকে তাহলে ডিসকাউন্ট কাজ করবে। প্রাইস ৩০% কমবে। আর যদি DOM না লিখে অন্য কিছু লিখে। যেমন ধরো dom বা drum বা অন্য কিছু। তাহলে ডিসকাউন্ট কাজ হবে না। 

// .



// চ্যালেঞ্জ নাম্বার থ্রি  

// গুগলে সার্চ দাও। জাভাস্ক্রিপ্ট ক্যালকুলেটর। দেখবে এক এক সাইটে এক এক রকমের। এক এক জন এক এক ভাবে কোড করছে। সেটা ব্যাপার না। তোমার যেভাবে ভালো লাগে। সেভাবে খুঁজে খুঁজে বুঝে বুঝে করো। চোখ বন্ধ করে না। বরং বুঝে বুঝে করো। ফিউচারে কাজে লাগবে।
