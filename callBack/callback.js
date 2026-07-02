// ১. এটি আমাদের মূল ফাংশন যা একটি কাজ শেষ করে কলব্যাককে ডাকবে
function calculateSum({num1, num2, callback}) {
  const result = num1 + num2;
  
  // কাজ শেষ, এবার কলব্যাক ফাংশনকে রেজাল্টসহ কল করা হচ্ছে
  callback({ total: result }); 
}

// ২. এটি আমাদের কলব্যাক ফাংশন যা পরে রান হবে
function showResult({total}) {
  console.log(`যোগফল হলো: ${total}`);
}

// ৩. মূল ফাংশনটি কল করার সময় 'showResult' কে আর্গুমেন্ট হিসেবে পাস করছি
calculateSum({ num1: 5, num2: 10, callback: showResult});
                      